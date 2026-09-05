/* =====================================================
   mymentals-auth-verify.js — Netlify Serverless Function
   Step 2 of magic-link sign-in: redeems the one-time token from the
   emailed link, creates/loads the account, and issues a long-lived
   session token for the client to store and send as
   `Authorization: Bearer <token>` on every subsequent request.

   Expected POST body (JSON):
     token — the token from the emailed link
   ===================================================== */

const { getStore } = require('@netlify/blobs')
const {
  json, redeemMagicLink, getOrCreateAccount, createSession,
} = require('./mymentals-lib/session')

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

  const token = String(body.token || '')
  if (!token) return json(400, { error: 'Token is required.' })

  const email = await redeemMagicLink(token)
  if (!email) {
    return json(410, { error: 'This sign-in link is invalid or has expired. Request a new one.' })
  }

  const account = await getOrCreateAccount(email)
  const sessionToken = await createSession(account.id, account.email)

  const vaultStore = getStore('mymentals-vaults')
  const vault = await vaultStore.get(account.id, { type: 'json' })

  return json(200, {
    sessionToken,
    accountId: account.id,
    email: account.email,
    hasVault: !!vault,
  })
}
