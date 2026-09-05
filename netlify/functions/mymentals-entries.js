/* =====================================================
   mymentals-entries.js — Netlify Serverless Function
   Sync endpoint for encrypted journal entries. Every value that
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

const { getStore } = require('@netlify/blobs')
const { json, getSession } = require('./mymentals-lib/session')

function looksLikeEncryptedEntry(e) {
  return e && typeof e.id === 'string' && typeof e.iv === 'string' && typeof e.ciphertext === 'string'
}

exports.handler = async function (event) {
  const session = await getSession(event)
  if (!session) return json(401, { error: 'Sign in required.' })

  const store = getStore('mymentals-entries')

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

    const entries = (await store.get(session.accountId, { type: 'json' })) || []
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
