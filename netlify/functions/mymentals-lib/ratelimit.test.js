const test = require('node:test')
const assert = require('node:assert/strict')
const { decide, hit, clientIp, checkSignInLimits, EMAIL_POLICY } = require('./ratelimit')

// In-memory stand-in for a Blobs store.
function memStore(initial = {}) {
  const m = new Map(Object.entries(initial))
  return { m, get: async k => (m.has(k) ? m.get(k) : null), setJSON: async (k, v) => void m.set(k, v) }
}
const T = 1_700_000_000_000

test('first request is allowed', () => {
  assert.equal(decide([], T, EMAIL_POLICY).ok, true)
})

test('a second request inside the cooldown is refused, with the wait time', () => {
  const d = decide([T - 20_000], T, EMAIL_POLICY)
  assert.equal(d.ok, false)
  assert.equal(d.reason, 'cooldown')
  assert.equal(d.retryAfterMs, 40_000)
})

test('after the cooldown it is allowed again', () => {
  assert.equal(decide([T - 61_000], T, EMAIL_POLICY).ok, true)
})

test('the sixth request in an hour is refused, and frees up when the oldest ages out', () => {
  const hits = [0, 1, 2, 3, 4].map(i => T - (50 - i * 8) * 60_000 + 0) // five spread over ~50 minutes
  const d = decide(hits, T, EMAIL_POLICY)
  assert.equal(d.ok, false)
  assert.equal(d.reason, 'window')
  assert.equal(d.retryAfterMs, 60 * 60_000 - (T - hits[0]))
})

test('old hits fall out of the window', () => {
  const d = decide([T - 2 * 3600_000, T - 3 * 3600_000], T, EMAIL_POLICY)
  assert.equal(d.ok, true)
  assert.deepEqual(d.hits, [])
})

test('hit() records requests and then refuses a rapid repeat', async () => {
  const store = memStore()
  assert.equal((await hit(store, 'k', EMAIL_POLICY, T)).ok, true)
  assert.equal((await hit(store, 'k', EMAIL_POLICY, T + 1000)).ok, false)
  assert.equal((await hit(store, 'k', EMAIL_POLICY, T + 61_000)).ok, true)
})

test('it fails OPEN when the store errors — the limiter must never take sign-in down', async () => {
  const broken = { get: async () => { throw new Error('blobs down') }, setJSON: async () => { throw new Error('blobs down') } }
  assert.equal((await hit(broken, 'k', EMAIL_POLICY, T)).ok, true)
  const writeBroken = { get: async () => null, setJSON: async () => { throw new Error('nope') } }
  assert.equal((await hit(writeBroken, 'k', EMAIL_POLICY, T)).ok, true)
})

test('checkSignInLimits: per-email refusal carries a 429, message and retry time', async () => {
  const store = memStore()
  assert.equal((await checkSignInLimits(store, 'abc', '1.2.3.4', T)).ok, true)
  const r = await checkSignInLimits(store, 'abc', '1.2.3.4', T + 5000)
  assert.equal(r.ok, false)
  assert.equal(r.status, 429)
  assert.match(r.error, /wait a minute/i)
  assert.ok(r.retryAfterSeconds > 0)
})

test('one address does not lock out a different one', async () => {
  const store = memStore()
  await checkSignInLimits(store, 'aaa', '1.2.3.4', T)
  assert.equal((await checkSignInLimits(store, 'bbb', '5.6.7.8', T + 1000)).ok, true)
})

test('per-network cap: the 21st request from one IP in an hour is refused', async () => {
  const store = memStore()
  for (let i = 0; i < 20; i++) assert.equal((await checkSignInLimits(store, 'e' + i, '9.9.9.9', T + i * 1000)).ok, true)
  const r = await checkSignInLimits(store, 'e-new', '9.9.9.9', T + 30_000)
  assert.equal(r.ok, false)
  assert.match(r.error, /network/i)
})

test('stored keys are hashes: no raw IP or email ends up as a key', async () => {
  const store = memStore()
  await checkSignInLimits(store, 'hashedemail', '203.0.113.7', T)
  for (const k of store.m.keys()) assert.ok(!k.includes('203.0.113.7'), k)
})

test('clientIp prefers the Netlify header, then x-forwarded-for, then nothing', () => {
  assert.equal(clientIp({ headers: { 'x-nf-client-connection-ip': '1.1.1.1', 'x-forwarded-for': '2.2.2.2' } }), '1.1.1.1')
  assert.equal(clientIp({ headers: { 'x-forwarded-for': '3.3.3.3, 4.4.4.4' } }), '3.3.3.3')
  assert.equal(clientIp({ headers: {} }), '')
  assert.equal(clientIp({}), '')
})
