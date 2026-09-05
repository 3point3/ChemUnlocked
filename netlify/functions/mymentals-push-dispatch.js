/* =====================================================
   mymentals-push-dispatch.js — Netlify Scheduled Function
   Runs on a cron schedule (see netlify.toml). Scans the push queue
   for due reminders, sends them via Web Push, and cleans up. The
   payload sent to the device is just a title/body/deep-link URL —
   never entry content, which this function has no way to read
   anyway (it only ever sees the opaque entryId).

   Required environment variables:
     VAPID_PUBLIC_KEY
     VAPID_PRIVATE_KEY
     VAPID_SUBJECT   e.g. "mailto:you@chemunlocked.com"
   ===================================================== */

const webpush = require('web-push')
const { getStore } = require('@netlify/blobs')

webpush.setVapidDetails(
  process.env.VAPID_SUBJECT,
  process.env.VAPID_PUBLIC_KEY,
  process.env.VAPID_PRIVATE_KEY
)

exports.handler = async function () {
  const queueStore = getStore('mymentals-push-queue')
  const subsStore = getStore('mymentals-push-subs')

  const { blobs } = await queueStore.list()
  const now = Date.now()

  for (const { key } of blobs) {
    const item = await queueStore.get(key, { type: 'json' })
    if (!item) continue
    if (item.sendAt > now) continue // not due yet

    const subs = (await subsStore.get(item.accountId, { type: 'json' })) || []
    const payload = JSON.stringify({
      title: 'Check-in time',
      body: 'How are you feeling now?',
      url: `/mymentals/log/${item.entryId}/checkin`,
    })

    const stillValid = []
    for (const sub of subs) {
      try {
        await webpush.sendNotification(sub, payload)
        stillValid.push(sub)
      } catch (err) {
        // 404/410 means the browser has unsubscribed or the subscription
        // expired — drop it. Anything else, keep it and let the next
        // scheduled run retry (transient network/provider errors happen).
        if (err.statusCode === 404 || err.statusCode === 410) {
          console.log('[mymentals-push-dispatch] dropping expired subscription')
        } else {
          stillValid.push(sub)
          console.error('[mymentals-push-dispatch] send failed:', err.statusCode || err.message)
        }
      }
    }

    if (stillValid.length !== subs.length) {
      await subsStore.setJSON(item.accountId, stillValid)
    }
    await queueStore.delete(key)
  }

  return { statusCode: 200, body: 'ok' }
}
