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

exports.handler = async function (event) {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  let body;
  try {
    body = JSON.parse(event.body || '{}');
  } catch {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'Invalid JSON body.' }),
    };
  }

  const { email = '' } = body;

  if (!email || !email.includes('@')) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'A valid email address is required.' }),
    };
  }

  try {
    /* ── Find Stripe customer by email ── */
    const customers = await stripe.customers.list({ email, limit: 1 });

    if (customers.data.length === 0) {
      return {
        statusCode: 404,
        body: JSON.stringify({ error: 'No subscription found for this email address.' }),
      };
    }

    const customer = customers.data[0];

    /* ── Create billing portal session ── */
    const siteUrl = process.env.URL || 'https://chemunlocked.com';
    const session = await stripe.billingPortal.sessions.create({
      customer: customer.id,
      return_url: `${siteUrl}/practice.html`,
    });

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ url: session.url }),
    };
  } catch (err) {
    console.error('[create-customer-portal-session] Stripe error:', err.message);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to open billing portal. Please try again.' }),
    };
  }
};
