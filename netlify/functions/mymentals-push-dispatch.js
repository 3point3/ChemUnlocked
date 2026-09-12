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

   Delivery: a send that fails transiently is retried on later runs
   rather than lost, tracking which devices already received it so a
   retry doesn't notify the same phone twice. Bounded by MAX_ATTEMPTS and
   MAX_LATENESS_MS below. A rare duplicate is possible (if a send is
   reported as failed after it actually landed) and is the accepted trade
   against silently dropping reminders.

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

// A transiently-failed send is retried on the next run (this fires every
// minute), but bounded twice over: give up after this many attempts, and
// never deliver a reminder more than this far past its due time. The
// lateness cap is the product constraint, not the technical one — see
// where it's applied below.
const MAX_ATTEMPTS = 5
const MAX_LATENESS_MS = 30 * 60 * 1000 // 30 minutes

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
  let retrying = 0
  let givenUp = 0
  let tooLate = 0

  for (const { key } of blobs) {
    const item = await queueStore.get(key, { type: 'json' })
    if (!item) continue
    if (item.sendAt > now) continue // not due yet
    due++

    // A follow-up prompt that shows up long after the moment it refers to
    // is worse than none: "how are you feeling now?" about something from
    // hours ago is confusing, and a backlog that built up during an
    // outage would otherwise fire all at once, possibly overnight. Past
    // this window, give up rather than deliver something stale.
    if (now - item.sendAt > MAX_LATENESS_MS) {
      tooLate++
      await queueStore.delete(key)
      continue
    }

    const subs = (await subsStore.get(item.accountId, { type: 'json' })) || []
    if (!subs.length) {
      // The single most likely reason a reminder "never fires": the
      // follow-up was queued, but this account never completed the
      // "Enable push reminders" step on any device (or did so only in a
      // browser context that has since been cleared), so there is
      // nowhere to deliver it. Nothing to retry against — drop it.
      noSubscription++
      await queueStore.delete(key)
      continue
    }

    const payload = JSON.stringify({
      title: 'Follow-up time',
      body: 'How are you feeling now?',
      url: `/mymentals/log/${item.entryId}/checkin`,
    })

    // Devices this reminder already reached on an earlier attempt. Only
    // the ones still outstanding get another send, so retrying after a
    // partial failure doesn't notify a phone twice.
    const deliveredTo = item.deliveredTo || []
    const pending = subs.filter(s => !deliveredTo.includes(s.endpoint))

    const expired = new Set()
    let transientFailure = false

    for (const sub of pending) {
      try {
        await webpush.sendNotification(sub, payload)
        deliveredTo.push(sub.endpoint)
        sent++
      } catch (err) {
        // 404/410 means the browser has unsubscribed or the subscription
        // expired — drop it, and don't treat it as worth retrying.
        if (err.statusCode === 404 || err.statusCode === 410) {
          expired.add(sub.endpoint)
          expiredDropped++
        } else {
          // Transient (provider 5xx, network). Worth another attempt.
          transientFailure = true
          failed++
          console.error('[mymentals-push-dispatch] send failed:', err.statusCode || err.message)
        }
      }
    }

    if (expired.size) {
      await subsStore.setJSON(item.accountId, subs.filter(s => !expired.has(s.endpoint)))
    }

    const attempts = (item.attempts || 0) + 1
    if (transientFailure && attempts < MAX_ATTEMPTS) {
      // Keep it queued — sendAt stays put, so the next run (a minute from
      // now) picks it up again, minus whatever already got through.
      await queueStore.setJSON(key, { ...item, attempts, deliveredTo })
      retrying++
    } else {
      if (transientFailure) givenUp++
      await queueStore.delete(key)
    }
  }

  if (due > 0) {
    console.log(
      `[mymentals-push-dispatch] ${due} due: ${sent} sent, ${failed} failed, ` +
        `${noSubscription} with no registered subscription, ${expiredDropped} expired subscription(s) dropped, ` +
        `${retrying} kept for retry, ${givenUp} gave up after ${MAX_ATTEMPTS} attempts, ${tooLate} dropped as too late`
    )
  }

  return { statusCode: 200, body: 'ok' }
}
