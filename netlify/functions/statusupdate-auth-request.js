/* =====================================================
   statusupdate-auth-request.js — Netlify Serverless Function
   Step 1 of magic-link sign-in: given an email, create a one-time
   token and email a sign-in link. No password is ever created or
   stored — this is the entire account system.

   Expected POST body (JSON):
     email     — the address to send the link to
     requestId — optional. When present, a client is asking for a seamless
                 handoff back once the link is opened (see
                 statusupdate-auth-handoff.js) — needed because on iOS the
                 emailed link always opens in Safari, a separate storage
                 context from an installed Home Screen app, so the app
                 that requested the link can't just read the session
                 Safari ends up with.

   Required environment variables:
     RESEND_API_KEY            (shared with the rest of the site)
     STATUSUPDATE_FROM_EMAIL   e.g. "StatusUpdate <noreply@chemunlocked.com>"
   ===================================================== */

const { Resend } = require('resend')
const { connectLambda } = require('@netlify/blobs')
const { json, isValidEmail, createMagicLink, createSignInCode } = require('./statusupdate-lib/session')

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
    const token = await createMagicLink(email, requestId, body.fromStandalone)
    const link = `https://chemunlocked.com/statusupdate/auth/callback?token=${token}`
    // Sent alongside the link, not instead of it: tapping the link always
    // lands in the browser, which is the wrong place when the person
    // started in an installed Home Screen app. Typing the code lets them
    // finish without ever leaving it.
    const code = await createSignInCode(email, requestId, body.fromStandalone)
    // Split in the middle purely for readability when reading it across
    // from Mail. The app strips spaces, so typing it either way works.
    const prettyCode = `${code.slice(0, 4)} ${code.slice(4)}`

    const resend = new Resend(process.env.RESEND_API_KEY)
    await resend.emails.send({
      from: process.env.STATUSUPDATE_FROM_EMAIL,
      to: email,
      // Code in the subject, the way every OTP email does it. Two
      // reasons: it's the shape filters recognise as transactional rather
      // than promotional, and — more practically — it means the code is
      // readable from the notification or from the junk-folder list
      // without opening the message at all, which is the difference
      // between "went to spam" being an annoyance and a dead end.
      subject: `${prettyCode} is your StatusUpdate sign-in code`,
      // A bare "here's a link" email is exactly the shape spam filters (and
      // recipients) associate with phishing — a button, an expiry note, and
      // a plain-language reason for receiving it all help, independent of
      // any visual branding.
      //
      // Deliberately says nothing about what StatusUpdate records. A
      // symptom diary's sign-in email can land on a lock screen or in a
      // shared inbox preview, so the subject and body stay as neutral as
      // any other sign-in code.
      text: [
        'Sign in to StatusUpdate',
        '',
        `Your sign-in code is: ${prettyCode}`,
        '',
        'Type this code into StatusUpdate to finish signing in. If you started in the app on your Home Screen, use the code — it keeps you in the app.',
        '',
        `Or tap this link instead (it opens in your browser): ${link}`,
        '',
        'The code and link both expire in 15 minutes.',
        '',
        "You're receiving this because someone requested a sign-in link for StatusUpdate with this email address. If that wasn't you, you can safely ignore it — no account is created until the code or link is used.",
      ].join('\n'),
      html: `
        <div style="max-width:480px;margin:0 auto;padding:32px 24px;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;color:#3a3a3a;">
          <p style="font-size:13px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:#7A9E8E;margin:0 0 16px;">StatusUpdate</p>
          <p style="font-size:16px;line-height:1.5;margin:0 0 16px;">Enter this code in StatusUpdate to sign in:</p>
          <p style="font-size:28px;font-weight:700;letter-spacing:0.12em;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;color:#3a3a3a;background:#F7F5F1;border-radius:12px;padding:16px 12px;text-align:center;margin:0 0 16px;">${prettyCode}</p>
          <p style="font-size:13px;color:#6b6b6b;line-height:1.5;margin:0 0 24px;">
            If you started in the StatusUpdate app on your Home Screen, use the code — it keeps you in the app.
          </p>
          <p style="font-size:13px;color:#6b6b6b;line-height:1.5;margin:0 0 12px;">Or open it in your browser instead:</p>
          <p style="margin:0 0 24px;">
            <a href="${link}" style="display:inline-block;background:#7A9E8E;color:#ffffff;text-decoration:none;font-weight:600;font-size:15px;padding:12px 24px;border-radius:12px;">Sign in to StatusUpdate</a>
          </p>
          <p style="font-size:13px;color:#6b6b6b;line-height:1.5;margin:0 0 24px;">The code and link both expire in 15 minutes.</p>
          <p style="font-size:12px;color:#8b857a;line-height:1.5;margin:0;">
            You're receiving this because someone requested a sign-in link for StatusUpdate with this email address.
            If that wasn't you, you can safely ignore it — no account is created until the link is opened.
          </p>
        </div>
      `,
    })

    return json(200, { sent: true })
  } catch (err) {
    // Deliberately not logging `email` here beyond what's already in the
    // request — nothing else in this handler ever touches entry content.
    console.error('[statusupdate-auth-request] failed to send magic link:', err.message)
    return json(500, { error: 'Could not send sign-in email. Please try again.' })
  }
}
