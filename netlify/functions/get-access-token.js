/* =====================================================
   get-access-token.js — Netlify Serverless Function
   Called by subscription-success.html after Stripe redirect.
   Looks up the subscriber in Stripe by email, verifies they
   have an active subscription, and returns the Stripe
   Customer ID as the access token.

   No database required — Stripe is the source of truth.

   Expected query params:
     email — the subscriber's email address

   Required environment variables:
     STRIPE_SECRET_KEY
   ===================================================== */

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

function json(statusCode, payload) {
  return {
    statusCode,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  };
}

exports.handler = async function (event) {
  const email = (event.queryStringParameters?.email || '').toLowerCase().trim();

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return json(400, { error: 'Valid email required.' });
  }

  try {
    /* ── Find Stripe customer by email ── */
    const customers = await stripe.customers.list({ email, limit: 1 });

    if (!customers.data.length) {
      /* Customer record not created yet — tell the client to retry */
      return json(404, { error: 'Subscription not confirmed yet. Please wait.' });
    }

    const customer = customers.data[0];

    /* ── Check for an active or trialing subscription ── */
    const [activeSubs, trialingSubs] = await Promise.all([
      stripe.subscriptions.list({ customer: customer.id, status: 'active',   limit: 1 }),
      stripe.subscriptions.list({ customer: customer.id, status: 'trialing', limit: 1 }),
    ]);

    const hasAccess = activeSubs.data.length > 0 || trialingSubs.data.length > 0;

    if (!hasAccess) {
      /* Checkout completed but subscription not active yet — retry */
      return json(404, { error: 'Subscription not confirmed yet. Please wait.' });
    }

    /* ── Return the Stripe Customer ID as the access token ── */
    return json(200, { token: customer.id });

  } catch (err) {
    console.error('[get-access-token] Stripe error:', err.message);
    return json(500, { error: 'Server error. Please try again.' });
  }
};
