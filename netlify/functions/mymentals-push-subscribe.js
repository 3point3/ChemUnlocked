/* =====================================================
   mymentals-push-subscribe.js — Netlify Serverless Function
   Registers a device's Web Push subscription against the signed-in
   account. Stores only the subscription (endpoint + keys) — this
   identifies a device, not what's in any journal entry.

   Expected POST body (JSON):
     subscription — the PushSubscription object from
                     pushManager.subscribe() on the client
   ===================================================== */

const { getStore } = require('@netlify/blobs')
const { json, getSession } = require('./mymentals-lib/session')

exports.handler = async function (event) {
  if (event.httpMethod !== 'POST') {
    return json(405, { error: 'Method Not Allowed' })
  }

  const session = await getSession(event)
  if (!session) return json(401, { error: 'Sign in required.' })

  let body
  try {
    body = JSON.parse(event.body || '{}')
  } catch {
    return json(400, { error: 'Invalid JSON body.' })
  }

  const sub = body.subscription
  if (!sub || typeof sub.endpoint !== 'string' || !sub.keys) {
    return json(400, { error: 'A valid push subscription is required.' })
  }

  const store = getStore('mymentals-push-subs')
  const existing = (await store.get(session.accountId, { type: 'json' })) || []
  const next = existing.filter(s => s.endpoint !== sub.endpoint)
  next.push({ endpoint: sub.endpoint, keys: sub.keys, addedAt: new Date().toISOString() })
  await store.setJSON(session.accountId, next)

  return json(200, { ok: true })
}
