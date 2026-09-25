/* =====================================================
   statusupdate-entries.js — Netlify Serverless Function
   Sync endpoint for encrypted check-in entries. Every value that
   passes through here is ciphertext produced by the client's
   WebCrypto — { id, iv, ciphertext, updatedAt } — this function
   cannot read entry content and never logs a request body.

   All of one account's entries are stored as a single JSON array
   under one blob key. That's a deliberate simplification for a
   personal-scale app (read-modify-write on PUT/DELETE, no
   optimistic-concurrency handling for two simultaneous writers) —
   fine at this scale, would need revisiting for many concurrent users.

   GET    (auth)              -> [ { id, iv, ciphertext, updatedAt }, ... ]
   PUT    (auth) body: entry  -> upsert one entry, keyed by id
   DELETE (auth) ?id=...      -> remove one entry
   ===================================================== */

const { connectLambda } = require('@netlify/blobs')
const { json, getSession, suStore } = require('./statusupdate-lib/session')

function looksLikeEncryptedEntry(e) {
  return e && typeof e.id === 'string' && typeof e.iv === 'string' && typeof e.ciphertext === 'string'
}

// Caps so one account can't grow its blob without limit. An encrypted
// entry is a few KB; these are generous ceilings, not expected sizes.
const MAX_ENTRY_CHARS = 200000
const MAX_ENTRIES_PER_ACCOUNT = 5000

exports.handler = async function (event) {
  connectLambda(event) // required for getStore() to find its blobs context outside `netlify dev`

  const session = await getSession(event)
  if (!session) return json(401, { error: 'Sign in required.' })

  const store = suStore('entries')

  if (event.httpMethod === 'GET') {
    const entries = (await store.get(session.accountId, { type: 'json' })) || []
    return json(200, entries)
  }

  if (event.httpMethod === 'PUT') {
    let body
    try {
      body = JSON.parse(event.body || '{}')
    } catch {
      return json(400, { error: 'Invalid JSON body.' })
    }
    if (!looksLikeEncryptedEntry(body)) {
      return json(400, { error: 'Body must be an encrypted entry: { id, iv, ciphertext, updatedAt }.' })
    }

    if (body.ciphertext.length > MAX_ENTRY_CHARS || body.iv.length > 200 || body.id.length > 200) {
      return json(413, { error: 'That entry is too large to sync.' })
    }

    const entries = (await store.get(session.accountId, { type: 'json' })) || []
    if (entries.length >= MAX_ENTRIES_PER_ACCOUNT && !entries.some(e => e.id === body.id)) {
      return json(413, { error: 'This account has reached the sync limit.' })
    }
    const next = entries.filter(e => e.id !== body.id)
    next.push({ id: body.id, iv: body.iv, ciphertext: body.ciphertext, updatedAt: body.updatedAt || new Date().toISOString() })
    await store.setJSON(session.accountId, next)
    return json(200, { ok: true })
  }

  if (event.httpMethod === 'DELETE') {
    const id = event.queryStringParameters?.id
    if (!id) return json(400, { error: 'id query param is required.' })

    const entries = (await store.get(session.accountId, { type: 'json' })) || []
    await store.setJSON(session.accountId, entries.filter(e => e.id !== id))
    return json(200, { ok: true })
  }

  return json(405, { error: 'Method Not Allowed' })
}
