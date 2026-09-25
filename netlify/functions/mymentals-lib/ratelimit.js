/* =====================================================
   Best-effort rate limiting for the sign-in email endpoint.

   Why it exists: mymentals-auth-request will send a real email to any
   address it is given, with no account or password involved. Without a
   limit anyone can point it at a stranger's inbox in a loop (email
   bombing), run up sending costs, and drag down the sender reputation
   that keeps sign-in codes out of spam.

   How it works: each key (an email hash, or a hash of the caller's IP)
   keeps a short list of recent request times. A request is refused if it
   comes too soon after the last one (cooldown) or if too many fall inside
   the window (max per window).

   What it is NOT: exact. Blobs reads are eventually consistent (see
   session.js), so two requests inside the same second can both pass. That
   is fine for this purpose — it stops loops and casual abuse, not a
   determined attacker — and it must never be relied on for anything
   security-critical. Two consequences are deliberate:

     - It FAILS OPEN. If the store can't be read or written, the request
       goes ahead. A limiter outage must not take sign-in down with it.
     - It stores hashes and timestamps only — never an email address or an
       IP — and logs nothing about who was limited.
   ===================================================== */

const crypto = require('crypto')

/**
 * Pure decision. `hits` are request timestamps (ms). Returns
 * { ok: true, hits } with old ones pruned, or
 * { ok: false, reason: 'cooldown' | 'window', retryAfterMs }.
 */
function decide(hits, now, { cooldownMs = 0, max, windowMs }) {
  const recent = (hits || []).filter(t => typeof t === 'number' && now - t < windowMs).sort((a, b) => a - b)
  const last = recent[recent.length - 1]
  if (cooldownMs && last != null && now - last < cooldownMs) {
    return { ok: false, reason: 'cooldown', retryAfterMs: cooldownMs - (now - last) }
  }
  if (recent.length >= max) {
    // Free again when the oldest hit in the window ages out.
    return { ok: false, reason: 'window', retryAfterMs: windowMs - (now - recent[0]) }
  }
  return { ok: true, hits: recent }
}

/**
 * Checks and records one hit against `key` in `store` (anything with
 * get(key, { type: 'json' }) and setJSON(key, value)).
 */
async function hit(store, key, policy, now = Date.now()) {
  let record = null
  try {
    record = await store.get(key, { type: 'json' })
  } catch {
    return { ok: true } // fail open
  }
  const d = decide(record && record.hits, now, policy)
  if (!d.ok) return d
  try {
    await store.setJSON(key, { hits: [...d.hits, now] })
  } catch {
    /* fail open: a write failure must not block sign-in */
  }
  return { ok: true }
}

function sha256(value) {
  return crypto.createHash('sha256').update(value).digest('hex')
}

// Netlify sets x-nf-client-connection-ip to the real client address;
// x-forwarded-for is the fallback for other setups (first entry is the
// original client).
function clientIp(event) {
  const h = (event && event.headers) || {}
  const direct = h['x-nf-client-connection-ip'] || h['client-ip']
  if (direct) return String(direct).trim()
  const fwd = h['x-forwarded-for']
  return fwd ? String(fwd).split(',')[0].trim() : ''
}

// Policies. Per email: a minute between sends (long enough to stop a loop,
// short enough for someone whose first email is slow), five an hour. Per
// network: twenty an hour, which leaves room for a shared connection.
const EMAIL_POLICY = { cooldownMs: 60 * 1000, max: 5, windowMs: 60 * 60 * 1000 }
const IP_POLICY = { cooldownMs: 0, max: 20, windowMs: 60 * 60 * 1000 }

/**
 * Applies both limits for one sign-in email request.
 * `emailHash` is hashEmail(email) from session.js.
 * Returns { ok: true } or { ok: false, status: 429, error, retryAfterSeconds }.
 */
async function checkSignInLimits(store, emailHash, ip, now = Date.now()) {
  if (ip) {
    const r = await hit(store, `ip:${sha256(ip)}`, IP_POLICY, now)
    if (!r.ok) {
      return {
        ok: false,
        status: 429,
        error: 'Too many sign-in requests from this network. Please try again in a little while.',
        retryAfterSeconds: Math.ceil(r.retryAfterMs / 1000),
      }
    }
  }
  const e = await hit(store, `email:${emailHash}`, EMAIL_POLICY, now)
  if (!e.ok) {
    const seconds = Math.ceil(e.retryAfterMs / 1000)
    return {
      ok: false,
      status: 429,
      error:
        e.reason === 'cooldown'
          ? 'We just sent an email to that address. Please wait a minute, and check your spam folder too.'
          : `Too many sign-in emails for that address. Please try again in about ${Math.max(1, Math.ceil(seconds / 60))} minutes.`,
      retryAfterSeconds: seconds,
    }
  }
  return { ok: true }
}

module.exports = { decide, hit, clientIp, checkSignInLimits, EMAIL_POLICY, IP_POLICY }
