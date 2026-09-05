/* =====================================================
   mymentals-auth-request.js — Netlify Serverless Function
   Step 1 of magic-link sign-in: given an email, create a one-time
   token and email a sign-in link. No password is ever created or
   stored — this is the entire account system.

   Expected POST body (JSON):
     email — the address to send the link to

   Required environment variables:
     RESEND_API_KEY
     MYMENTALS_FROM_EMAIL   e.g. "MyMentals <noreply@chemunlocked.com>"
   ===================================================== */

const { Resend } = require('resend')
const { json, isValidEmail, createMagicLink } = require('./mymentals-lib/session')

exports.handler = async function (event) {
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

  try {
    const token = await createMagicLink(email)
    const link = `https://chemunlocked.com/mymentals/auth/callback?token=${token}`

    const resend = new Resend(process.env.RESEND_API_KEY)
    await resend.emails.send({
      from: process.env.MYMENTALS_FROM_EMAIL,
      to: email,
      subject: 'Your MyMentals sign-in link',
      text: `Tap this link to sign in to MyMentals:\n\n${link}\n\nThis link expires in 15 minutes. If you didn't request this, you can ignore this email.`,
      html: `<p>Tap this link to sign in to MyMentals:</p><p><a href="${link}">${link}</a></p><p>This link expires in 15 minutes. If you didn't request this, you can ignore this email.</p>`,
    })

    return json(200, { sent: true })
  } catch (err) {
    // Deliberately not logging `email` here beyond what's already in the
    // request — nothing else in this handler ever touches entry content.
    console.error('[mymentals-auth-request] failed to send magic link:', err.message)
    return json(500, { error: 'Could not send sign-in email. Please try again.' })
  }
}
