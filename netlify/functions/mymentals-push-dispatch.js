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

   Logging: a run that finds nothing due stays silent (this fires every
   minute — Netlify's invocation list already shows that it ran). A run
   that actually has work logs one summary line, so "the reminder never
   arrived" can be traced to which step dropped it: no subscription
   registered, a send that failed, or a send that genuinely went out.
   Deliberately no accountId or entryId in any log line — accountId is a
   hash of the user's email and entryId identifies a specific journal
   entry; neither belongs in logs to diagnose a delivery problem that
   counts alone can explain.
   ===================================================== */

const webpush = require('web-push')
const { getStore, connectLambda } = require('@netlify/blobs')

webpush.setVapidDetails(
  process.env.VAPID_SUBJECT,
  process.env.VAPID_PUBLIC_KEY,
  process.env.VAPID_PRIVATE_KEY
)

exports.handler = async function (event) {
  connectLambda(event) // required for getStore() to find its blobs context outside `netlify dev`

  const queueStore = getStore('mymentals-push-queue')
  const subsStore = getStore('mymentals-push-subs')

  const { blobs } = await queueStore.list()
  const now = Date.now()

  let due = 0
  let sent = 0
  let failed = 0
  let noSubscription = 0
  let expiredDropped = 0

  for (const { key } of blobs) {
    const item = await queueStore.get(key, { type: 'json' })
    if (!item) continue
    if (item.sendAt > now) continue // not due yet
    due++

    const subs = (await subsStore.get(item.accountId, { type: 'json' })) || []
    if (!subs.length) {
      // The single most likely reason a reminder "never fires": the
      // follow-up was queued, but this account never completed the
      // "Enable push reminders" step on any device (or did so only in a
      // browser context that has since been cleared), so there is
      // nowhere to deliver it.
      noSubscription++
    }
    const payload = JSON.stringify({
      title: 'Follow-up time',
      body: 'How are you feeling now?',
      url: `/mymentals/log/${item.entryId}/checkin`,
    })

    const stillValid = []
    for (const sub of subs) {
      try {
        await webpush.sendNotification(sub, payload)
        stillValid.push(sub)
        sent++
      } catch (err) {
        // 404/410 means the browser has unsubscribed or the subscription
        // expired — drop it. Anything else, keep it and let the next
        // scheduled run retry (transient network/provider errors happen).
        if (err.statusCode === 404 || err.statusCode === 410) {
          expiredDropped++
        } else {
          stillValid.push(sub)
          failed++
          console.error('[mymentals-push-dispatch] send failed:', err.statusCode || err.message)
        }
      }
    }

    if (stillValid.length !== subs.length) {
      await subsStore.setJSON(item.accountId, stillValid)
    }
    await queueStore.delete(key)
  }

  if (due > 0) {
    console.log(
      `[mymentals-push-dispatch] ${due} due: ${sent} sent, ${failed} failed, ` +
        `${noSubscription} with no registered subscription, ${expiredDropped} expired subscription(s) dropped`
    )
  }

  return { statusCode: 200, body: 'ok' }
}
