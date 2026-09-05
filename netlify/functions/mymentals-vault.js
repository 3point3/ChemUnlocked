/* =====================================================
   mymentals-vault.js — Netlify Serverless Function
   Stores/retrieves the account's wrapped master key — never the key
   itself, and never the passphrase or recovery code. See
   src/lib/crypto.js in the MyMentals app for what "wrapped" means.

   GET  (auth) -> { wrappedByPassphrase, wrappedByRecovery, createdAt } or 404
   POST (auth) body: { wrappedByPassphrase, wrappedByRecovery } -> sets/overwrites
   ===================================================== */

const { getStore } = require('@netlify/blobs')
const { json, getSession } = require('./mymentals-lib/session')

function looksLikeWrappedBlob(w) {
  return w && typeof w.salt === 'string' && typeof w.iv === 'string' && typeof w.ciphertext === 'string'
}

exports.handler = async function (event) {
  const session = await getSession(event)
  if (!session) return json(401, { error: 'Sign in required.' })

  const store = getStore('mymentals-vaults')

  if (event.httpMethod === 'GET') {
    const vault = await store.get(session.accountId, { type: 'json' })
    if (!vault) return json(404, { error: 'No vault set up yet.' })
    return json(200, vault)
  }

  if (event.httpMethod === 'POST') {
    let body
    try {
      body = JSON.parse(event.body || '{}')
    } catch {
      return json(400, { error: 'Invalid JSON body.' })
    }

    if (!looksLikeWrappedBlob(body.wrappedByPassphrase) || !looksLikeWrappedBlob(body.wrappedByRecovery)) {
      return json(400, { error: 'wrappedByPassphrase and wrappedByRecovery are both required.' })
    }

    await store.setJSON(session.accountId, {
      wrappedByPassphrase: body.wrappedByPassphrase,
      wrappedByRecovery: body.wrappedByRecovery,
      createdAt: new Date().toISOString(),
    })
    return json(200, { ok: true })
  }

  return json(405, { error: 'Method Not Allowed' })
}
