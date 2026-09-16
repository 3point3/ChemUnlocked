/* =====================================================
   statusupdate-lib/session.js — shared helpers for StatusUpdate's
   Netlify Functions (auth, vault, entries, push).

   Ported from mymentals-lib/session.js. Deliberately a SEPARATE copy
   rather than a shared, prefix-parameterised module: StatusUpdate's
   accounts, sessions and entries are meant to be wholly independent of
   MyMentals', and MyMentals is already live. Sharing one module would
   mean every future change here is also a change to a running app's
   auth path. The duplication is the cheaper risk at this scale — but if
   a third app ever needs this, extract it properly instead of copying
   again.

   Storage model (all via Netlify Blobs, no Postgres — this is a
   personal-scale app, a full relational database is more machinery
   than it needs). Every store name is derived from PREFIX below, so
   nothing here can reach a MyMentals store even by typo:
     statusupdate-accounts        key = sha256(email)  value = { id, email, createdAt }
     statusupdate-magic-links     key = token          value = { email, expiresAt }
     statusupdate-sessions        key = token          value = { accountId, email, expiresAt }
     statusupdate-vaults          key = accountId      value = { wrappedByPassphrase, wrappedByRecovery, createdAt }
     statusupdate-entries         key = accountId      value = [ { id, iv, ciphertext, updatedAt }, ... ]
     statusupdate-push-subs       key = accountId      value = [ { endpoint, keys, addedAt }, ... ]
     statusupdate-push-queue      key = random id      value = { accountId, entryId, sendAt }
     statusupdate-auth-handoff    key = requestId      value = { sessionToken, accountId, email, hasVault, expiresAt }
     statusupdate-signin-codes    key = "<hash(email)>:<code>"  value = { email, expiresAt, requestId, fromStandalone }
     statusupdate-signin-attempts key = hash(email)    value = { count, resetAt }

   IMPORTANT: every value that could hold check-in content (entries) is
   ciphertext only — { iv, ciphertext }, both base64 strings produced by
   the client's WebCrypto encryption. Nothing here can decrypt it: the
   master key never leaves the browser. Never log request bodies for the
   entries/vault endpoints, even on error — ciphertext is safe to log in
   principle, but there's no reason to and it's an easy mistake to
   introduce later, so the helpers below just don't take a body arg for
   logging at all. This matters more here than it did for MyMentals: the
   entries are a symptom diary.
   ===================================================== */

const crypto = require('crypto')
const { getStore } = require('@netlify/blobs')

const PREFIX = 'statusupdate-'

/**
 * Every StatusUpdate store goes through here, so both the namespace and
 * the consistency choice are made in exactly one place.
 *
 * Netlify Blobs reads are EVENTUALLY consistent: a read can return stale
 * data, including "not found" for a key written moments earlier. That is
 * a real hazard for this app, since almost everything here is read back
 * within seconds of being written.
 *
 * Strong consistency is NOT available to us: these are classic Lambda
 * functions wired up with connectLambda(), and that context carries no
 * 'uncachedEdgeURL', so requesting consistency: 'strong' throws
 * BlobsConsistencyError on every read. This was verified the hard way on
 * MyMentals — it took sign-in down with 502s until reverted. Getting it
 * would mean porting these functions to Netlify's modern handler
 * signature; until then, nothing here may depend on read-after-write.
 *
 * Anything needing read-after-write guarantees has to be designed around
 * that, not assumed away. See redeemSignInCode for a worked example.
 */
function suStore(name) {
  return getStore(PREFIX + name)
}

const SESSION_TTL_MS = 90 * 24 * 60 * 60 * 1000 // 90 days
const MAGIC_LINK_TTL_MS = 15 * 60 * 1000 // 15 minutes
const HANDOFF_TTL_MS = 15 * 60 * 1000 // 15 minutes — same window as the magic link itself
const SIGNIN_CODE_TTL_MS = 15 * 60 * 1000 // 15 minutes — same window as the link it's an alternative to
// Defence-in-depth only — it cuts off casual hammering when the read
// happens to be fresh. It is NOT what makes the code safe; the code's own
// entropy is (see the sign-in codes section). Blob reads are eventually
// consistent, so this counter cannot be relied on.
const MAX_CODE_ATTEMPTS = 5

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
  const store = suStore('accounts')
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
  const store = suStore('magic-links')
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
  const store = suStore('magic-links')
  const record = await store.get(token, { type: 'json' })
  if (!record || record.expiresAt < Date.now()) return null
  await store.delete(token)
  return record
}

/* ---- Sign-in codes ----------------------------------------------------
   The same sign-in, without leaving the app. An emailed link can only
   ever open in the browser, which on iOS means a Home Screen app sends
   you to Safari and can't be returned to programmatically. A code the
   person reads and types keeps them where they started.

   Keyed by hash(email):code rather than by the code alone — codes are
   short enough to collide across accounts, and redemption always knows
   the email because the person just typed it in.

   THE CODE'S OWN STRENGTH IS THE PROTECTION, not the attempt counter.
   In MyMentals this started as six digits with a five-try cap, which was
   wrong: blob reads here are eventually consistent (see suStore), so the
   counter reads stale and the cap does not reliably engage. That left a
   million guesses effectively unlimited. Eight Crockford base32
   characters is ~40 bits — about 1.1e12 combinations — so even with no
   working cap at all, and an attacker guessing flat out for the whole
   15-minute lifetime, the odds are negligible. The cap below stays as
   defence-in-depth; nothing depends on it.

   Crockford's alphabet excludes I, L, O and U, and normalization folds
   the look-alikes (I/L -> 1, O -> 0), so a misread character still
   works rather than silently failing.
   ---------------------------------------------------------------------- */

const CODE_ALPHABET = '0123456789ABCDEFGHJKMNPQRSTVWXYZ' // Crockford base32
const CODE_LENGTH = 8

function generateSignInCode() {
  let out = ''
  for (let i = 0; i < CODE_LENGTH; i++) {
    out += CODE_ALPHABET[crypto.randomInt(0, CODE_ALPHABET.length)]
  }
  return out
}

/**
 * Accepts what someone actually typed — any case, with spaces or dashes
 * they copied from the email — and folds Crockford's look-alike
 * characters onto the real ones. Returns '' if it isn't a plausible code.
 */
function normalizeSignInCode(input) {
  const cleaned = String(input || '')
    .toUpperCase()
    .replace(/[^0-9A-Z]/g, '')
    .replace(/[IL]/g, '1')
    .replace(/O/g, '0')
  return cleaned.length === CODE_LENGTH ? cleaned : ''
}

async function createSignInCode(email, requestId, fromStandalone) {
  const code = generateSignInCode()
  const id = hashEmail(email)
  await suStore('signin-codes').setJSON(`${id}:${code}`, {
    email: email.trim().toLowerCase(),
    expiresAt: Date.now() + SIGNIN_CODE_TTL_MS,
    requestId: requestId || null,
    fromStandalone: !!fromStandalone,
  })
  // A newly requested code starts the attempt budget over, so someone who
  // fat-fingered the previous one isn't locked out of the new one.
  await suStore('signin-attempts').delete(id).catch(() => {})
  return code
}

/**
 * Returns { record } on success, or { error: 'locked' | 'invalid' }.
 * A wrong or expired code counts against the attempt budget; a correct
 * one clears it.
 */
async function redeemSignInCode(email, code) {
  const id = hashEmail(email)
  const attemptsStore = suStore('signin-attempts')
  const attempts = (await attemptsStore.get(id, { type: 'json' })) || { count: 0, resetAt: 0 }
  const windowOpen = attempts.resetAt > Date.now()

  if (windowOpen && attempts.count >= MAX_CODE_ATTEMPTS) return { error: 'locked' }

  const normalized = normalizeSignInCode(code)
  if (!normalized) return { error: 'invalid' }

  const store = suStore('signin-codes')
  const key = `${id}:${normalized}`
  const record = await store.get(key, { type: 'json' })

  if (!record || record.expiresAt < Date.now()) {
    await attemptsStore.setJSON(id, {
      count: (windowOpen ? attempts.count : 0) + 1,
      resetAt: windowOpen ? attempts.resetAt : Date.now() + SIGNIN_CODE_TTL_MS,
    })
    return { error: 'invalid' }
  }

  await store.delete(key)
  await attemptsStore.delete(id).catch(() => {})
  return { record }
}

/** Stashes a freshly-verified session under requestId so the originating device can pick it up. One-time read. */
async function createHandoff(requestId, sessionPayload) {
  const store = suStore('auth-handoff')
  await store.setJSON(requestId, { ...sessionPayload, expiresAt: Date.now() + HANDOFF_TTL_MS })
}

/** Reads and immediately deletes a pending handoff. Returns null if missing, expired, or already consumed. */
async function consumeHandoff(requestId) {
  const store = suStore('auth-handoff')
  const record = await store.get(requestId, { type: 'json' })
  if (!record) return null
  await store.delete(requestId)
  if (record.expiresAt < Date.now()) return null
  const { expiresAt, ...session } = record
  return session
}

async function createSession(accountId, email) {
  const token = randomToken()
  const store = suStore('sessions')
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
  const store = suStore('sessions')
  const session = await store.get(token, { type: 'json' })
  if (!session || session.expiresAt < Date.now()) return null
  return session
}

module.exports = {
  json,
  suStore,
  randomToken,
  hashEmail,
  isValidEmail,
  getOrCreateAccount,
  createMagicLink,
  redeemMagicLink,
  createSignInCode,
  redeemSignInCode,
  createHandoff,
  consumeHandoff,
  createSession,
  getSession,
}
