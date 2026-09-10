/* =====================================================
   mymentals-account-delete.js — Netlify Serverless Function

   Permanently deletes the authenticated account and everything tied to
   it: encrypted entries, the wrapped-key vault, push subscriptions,
   queued pushes, all sessions, and the account record.

   Zero-knowledge means the server only ever held ciphertext + wrapped
   keys, so this is a real, complete erase — there is nothing about the
   user stored anywhere else. Irreversible by design.

   POST (auth) -> { deleted: true }
   ===================================================== */

const { getStore, connectLambda } = require('@netlify/blobs')
const { json, getSession } = require('./mymentals-lib/session')

async function deleteMatching(storeName, predicate) {
  try {
    const store = getStore(storeName)
    const { blobs } = await store.list()
    for (const { key } of blobs) {
      let value = null
      try {
        value = await store.get(key, { type: 'json' })
      } catch { /* unreadable — skip */ }
      if (predicate(value)) {
        try { await store.delete(key) } catch { /* already gone */ }
      }
    }
  } catch { /* store may not exist yet */ }
}

exports.handler = async function (event) {
  connectLambda(event) // required for getStore() outside `netlify dev`

  if (event.httpMethod !== 'POST') return json(405, { error: 'Method Not Allowed' })

  const session = await getSession(event)
  if (!session) return json(401, { error: 'Sign in required.' })
  const { accountId } = session

  // Stores keyed directly by accountId — one delete each.
  for (const name of ['mymentals-entries', 'mymentals-vaults', 'mymentals-push-subs']) {
    try { await getStore(name).delete(accountId) } catch { /* already absent */ }
  }

  // Stores keyed by an opaque token/id whose value carries accountId.
  await deleteMatching('mymentals-sessions', v => v && v.accountId === accountId)
  await deleteMatching('mymentals-push-queue', v => v && v.accountId === accountId)

  // The account record itself.
  try { await getStore('mymentals-accounts').delete(accountId) } catch { /* ignore */ }

  return json(200, { deleted: true })
}
