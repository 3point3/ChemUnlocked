/* =====================================================
   mymentals-lib/session.js — shared helpers for MyMentals'
   Netlify Functions (auth, vault, entries, push).

   Storage model (all via Netlify Blobs, no Postgres — this is a
   personal-scale app, a full relational database is more machinery
   than it needs):
     mymentals-accounts     key = sha256(email)   value = { id, email, createdAt }
     mymentals-magic-links  key = token           value = { email, expiresAt }
     mymentals-sessions     key = token           value = { accountId, email, expiresAt }
     mymentals-vaults       key = accountId       value = { wrappedByPassphrase, wrappedByRecovery, createdAt }
     mymentals-entries      key = "<accountId>:<entryId>"  value = { id, iv, ciphertext, updatedAt }
     mymentals-push-subs    key = accountId       value = [ { endpoint, keys, addedAt }, ... ]
     mymentals-push-queue   key = random id       value = { accountId, entryId, sendAt }
     mymentals-auth-handoff key = requestId       value = { sessionToken, accountId, email, hasVault, expiresAt }

   IMPORTANT: every value that could hold journal content (entries) is
   ciphertext only — { iv, ciphertext }, both base64 strings produced by
   the client's WebCrypto encryption. Nothing here can decrypt it: the
   master key never leaves the browser. Never log request bodies for
   the entries/vault endpoints, even on error — ciphertext is safe to
   log in principle, but there's no reason to and it's an easy mistake
   to introduce later, so the helpers below just don't take a body arg
   for logging at all.
   ===================================================== */

const crypto = require('crypto')
const { getStore } = require('@netlify/blobs')

const SESSION_TTL_MS = 90 * 24 * 60 * 60 * 1000 // 90 days
const MAGIC_LINK_TTL_MS = 15 * 60 * 1000 // 15 minutes
const HANDOFF_TTL_MS = 15 * 60 * 1000 // 15 minutes — same window as the magic link itself

function json(statusCode, payload) {
  return {
    statusCode,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  }
}

function randomToken() {
  return crypto.randomBytes(32).toString('hex')
}

function hashEmail(email) {
  return crypto.createHash('sha256').update(email.trim().toLowerCase()).digest('hex')
}

function isValidEmail(email) {
  return typeof email === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())
}

async function getOrCreateAccount(email) {
  const normalized = email.trim().toLowerCase()
  const accountId = hashEmail(normalized)
  const store = getStore('mymentals-accounts')
  let account = await store.get(accountId, { type: 'json' })
  if (!account) {
    account = { id: accountId, email: normalized, createdAt: new Date().toISOString() }
    await store.setJSON(accountId, account)
  }
  return account
}

// requestId is optional: only present when the link was requested from a
// device that wants a seamless handoff back (see createHandoff below) —
// e.g. a request made from an installed iOS Home Screen app, whose magic
// link always opens in Safari instead, a separate storage context that
// can't just read the session Safari ends up with.
// fromStandalone records that the request came from an installed Home
// Screen app. The emailed link can only open in the browser, so the page
// that redeems it uses this to tell the person to switch back to their
// app rather than leaving them stranded in Safari.
async function createMagicLink(email, requestId, fromStandalone) {
  const token = randomToken()
  const store = getStore('mymentals-magic-links')
  await store.setJSON(token, {
    email: email.trim().toLowerCase(),
    expiresAt: Date.now() + MAGIC_LINK_TTL_MS,
    requestId: requestId || null,
    fromStandalone: !!fromStandalone,
  })
  return token
}

/** Returns { email, requestId } or null. requestId may be null if none was supplied at request time. */
async function redeemMagicLink(token) {
  const store = getStore('mymentals-magic-links')
  const record = await store.get(token, { type: 'json' })
  if (!record || record.expiresAt < Date.now()) return null
  await store.delete(token)
  return record
}

/** Stashes a freshly-verified session under requestId so the originating device can pick it up. One-time read. */
async function createHandoff(requestId, sessionPayload) {
  const store = getStore('mymentals-auth-handoff')
  await store.setJSON(requestId, { ...sessionPayload, expiresAt: Date.now() + HANDOFF_TTL_MS })
}

/** Reads and immediately deletes a pending handoff. Returns null if missing, expired, or already consumed. */
async function consumeHandoff(requestId) {
  const store = getStore('mymentals-auth-handoff')
  const record = await store.get(requestId, { type: 'json' })
  if (!record) return null
  await store.delete(requestId)
  if (record.expiresAt < Date.now()) return null
  const { expiresAt, ...session } = record
  return session
}

async function createSession(accountId, email) {
  const token = randomToken()
  const store = getStore('mymentals-sessions')
  await store.setJSON(token, {
    accountId,
    email,
    expiresAt: Date.now() + SESSION_TTL_MS,
  })
  return token
}

/** Reads `Authorization: Bearer <token>` and resolves it to a session, or null. */
async function getSession(event) {
  const auth = event.headers?.authorization || event.headers?.Authorization || ''
  const match = /^Bearer\s+(.+)$/.exec(auth)
  if (!match) return null
  const token = match[1]
  const store = getStore('mymentals-sessions')
  const session = await store.get(token, { type: 'json' })
  if (!session || session.expiresAt < Date.now()) return null
  return session
}

module.exports = {
  json,
  randomToken,
  hashEmail,
  isValidEmail,
  getOrCreateAccount,
  createMagicLink,
  redeemMagicLink,
  createHandoff,
  consumeHandoff,
  createSession,
  getSession,
}
