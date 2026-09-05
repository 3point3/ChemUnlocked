/* =====================================================
   mymentals-push-schedule.js — Netlify Serverless Function
   Queues a check-in reminder push for a specific entry. Stores only
   an opaque entry id and a send time — never entry content. The id
   is meaningless to anyone without the matching (encrypted, or
   local-only) entry on the actual device.

   Expected POST body (JSON):
     entryId — the local entry id to deep-link back to on tap
     sendAt  — ISO timestamp for when to send the reminder
   ===================================================== */

const { getStore } = require('@netlify/blobs')
const { json, getSession, randomToken } = require('./mymentals-lib/session')

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

  const entryId = String(body.entryId || '')
  const sendAt = Date.parse(body.sendAt)
  if (!entryId || Number.isNaN(sendAt)) {
    return json(400, { error: 'entryId and a valid sendAt timestamp are required.' })
  }

  const store = getStore('mymentals-push-queue')
  const id = randomToken()
  await store.setJSON(id, { accountId: session.accountId, entryId, sendAt })

  return json(200, { ok: true, id })
}
