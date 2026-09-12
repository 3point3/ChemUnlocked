/* =====================================================
   mymentals-auth-request.js — Netlify Serverless Function
   Step 1 of magic-link sign-in: given an email, create a one-time
   token and email a sign-in link. No password is ever created or
   stored — this is the entire account system.

   Expected POST body (JSON):
     email     — the address to send the link to
     requestId — optional. When present, a client is asking for a seamless
                 handoff back once the link is opened (see
                 mymentals-auth-handoff.js) — needed because on iOS the
                 emailed link always opens in Safari, a separate storage
                 context from an installed Home Screen app, so the app
                 that requested the link can't just read the session
                 Safari ends up with.

   Required environment variables:
     RESEND_API_KEY
     MYMENTALS_FROM_EMAIL   e.g. "MyMentals <noreply@chemunlocked.com>"
   ===================================================== */

const { Resend } = require('resend')
const { connectLambda } = require('@netlify/blobs')
const { json, isValidEmail, createMagicLink } = require('./mymentals-lib/session')

exports.handler = async function (event) {
  connectLambda(event) // required for getStore() to find its blobs context outside `netlify dev`

  if (event.httpMethod !== 'POST') {
    return json(405, { error: 'Method Not Allowed' })
  }

  let body
  try {
    body = JSON.parse(event.body || '{}')
  } catch {
    return json(400, { error: 'Invalid JSON body.' })
  }

  const email = String(body.email || '').trim()
  if (!isValidEmail(email)) {
    return json(400, { error: 'A valid email address is required.' })
  }
  const requestId = body.requestId ? String(body.requestId) : null

  try {
    const token = await createMagicLink(email, requestId)
    const link = `https://chemunlocked.com/mymentals/auth/callback?token=${token}`

    const resend = new Resend(process.env.RESEND_API_KEY)
    await resend.emails.send({
      from: process.env.MYMENTALS_FROM_EMAIL,
      to: email,
      subject: 'Your MyMentals sign-in link',
      // A bare "here's a link" email is exactly the shape spam filters (and
      // recipients) associate with phishing — a button, an expiry note, and
      // a plain-language reason for receiving it all help, independent of
      // any visual branding (none of this is a logo/color decision, just
      // structure). Deliberately no logo/imagery here — that's still TBD.
      text: [
        'Sign in to MyMentals',
        '',
        `Tap this link to continue: ${link}`,
        '',
        'This link expires in 15 minutes.',
        '',
        "You're receiving this because someone requested a sign-in link for MyMentals with this email address. If that wasn't you, you can safely ignore it — no account is created until the link is opened.",
      ].join('\n'),
      html: `
        <div style="max-width:480px;margin:0 auto;padding:32px 24px;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;color:#292524;">
          <p style="font-size:13px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:#7A9E8E;margin:0 0 16px;">MyMentals</p>
          <p style="font-size:16px;line-height:1.5;margin:0 0 24px;">Tap the button below to sign in on this device.</p>
          <p style="margin:0 0 24px;">
            <a href="${link}" style="display:inline-block;background:#7A9E8E;color:#ffffff;text-decoration:none;font-weight:600;font-size:15px;padding:12px 24px;border-radius:12px;">Sign in to MyMentals</a>
          </p>
          <p style="font-size:13px;color:#78716c;line-height:1.5;margin:0 0 8px;">This link expires in 15 minutes. If the button doesn't work, copy and paste this URL:</p>
          <p style="font-size:12px;color:#a8a29e;word-break:break-all;margin:0 0 24px;">${link}</p>
          <p style="font-size:12px;color:#a8a29e;line-height:1.5;margin:0;">
            You're receiving this because someone requested a sign-in link for MyMentals with this email address.
            If that wasn't you, you can safely ignore it — no account is created until the link is opened.
          </p>
        </div>
      `,
    })

    return json(200, { sent: true })
  } catch (err) {
    // Deliberately not logging `email` here beyond what's already in the
    // request — nothing else in this handler ever touches entry content.
    console.error('[mymentals-auth-request] failed to send magic link:', err.message)
    return json(500, { error: 'Could not send sign-in email. Please try again.' })
  }
}
