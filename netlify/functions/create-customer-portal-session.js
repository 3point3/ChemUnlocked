/* =====================================================
   create-customer-portal-session.js — Netlify Serverless Function
   Opens the Stripe Customer Portal so subscribers can manage their
   subscription, update payment method, or cancel.

   Expected POST body (JSON):
     email — the subscriber's email address

   Required environment variables:
     STRIPE_SECRET_KEY
     URL  (set automatically by Netlify; your site's base URL)
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
  if (event.httpMethod !== 'POST') {
    return json(405, { error: 'Method Not Allowed' });
  }

  let body;
  try {
    body = JSON.parse(event.body || '{}');
  } catch {
    return json(400, { error: 'Invalid JSON body.' });
  }

  const email = String(body.email || '').trim().toLowerCase();

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return json(400, { error: 'A valid email address is required.' });
  }

  try {
    /* ── Find Stripe customer by email ── */
    const customers = await stripe.customers.list({ email, limit: 1 });

    if (customers.data.length === 0) {
      return json(404, { error: 'No subscription found for this email address.' });
    }

    const customer = customers.data[0];

    /* ── Create billing portal session ── */
    const siteUrl = process.env.URL || 'https://chemunlocked.com';
    const session = await stripe.billingPortal.sessions.create({
      customer: customer.id,
      return_url: `${siteUrl}/practice.html`,
    });

    return json(200, { url: session.url });
  } catch (err) {
    console.error('[create-customer-portal-session] Stripe error:', err.message);
    return json(500, { error: 'Failed to open billing portal. Please try again.' });
  }
};
