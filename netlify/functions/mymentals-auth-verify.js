/* =====================================================
   mymentals-auth-verify.js — Netlify Serverless Function
   Step 2 of magic-link sign-in: redeems the one-time token from the
   emailed link, creates/loads the account, and issues a long-lived
   session token for the client to store and send as
   `Authorization: Bearer <token>` on every subsequent request.

   Expected POST body (JSON):
     token — the token from the emailed link
   ===================================================== */

const { getStore, connectLambda } = require('@netlify/blobs')
const {
  json, redeemMagicLink, getOrCreateAccount, createSession, createHandoff,
} = require('./mymentals-lib/session')

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

  const token = String(body.token || '')
  if (!token) return json(400, { error: 'Token is required.' })

  const link = await redeemMagicLink(token)
  if (!link) {
    return json(410, { error: 'This sign-in link is invalid or has expired. Request a new one.' })
  }

  const account = await getOrCreateAccount(link.email)
  const sessionToken = await createSession(account.id, account.email)

  const vaultStore = getStore('mymentals-vaults')
  const vault = await vaultStore.get(account.id, { type: 'json' })

  const session = {
    sessionToken,
    accountId: account.id,
    email: account.email,
    hasVault: !!vault,
  }

  // If the link was requested with a requestId, the requesting device
  // (typically an installed Home Screen app, whose link always opens
  // here in Safari instead) is polling for this — hand it the session so
  // it can sign itself in without the user re-entering anything.
  if (link.requestId) {
    await createHandoff(link.requestId, session)
  }

  // Not part of the session — just tells the redeeming page whether this
  // sign-in began in an installed app, so it can point the person back
  // there instead of stranding them in the browser.
  return json(200, { ...session, requestedFromApp: !!link.fromStandalone })
}
