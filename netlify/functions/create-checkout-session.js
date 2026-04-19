/* =====================================================
   create-checkout-session.js — Netlify Serverless Function
   Creates a Stripe Checkout Session for monthly or yearly subscription.

   Expected POST body (JSON):
     plan  — "monthly" | "yearly"
     unit  — e.g. "04"  (used to build the success redirect URL)
     email — customer email address

   Required environment variables:
     STRIPE_SECRET_KEY
     STRIPE_PRICE_MONTHLY
     STRIPE_PRICE_YEARLY
     URL  (set automatically by Netlify; your site's base URL)
   ===================================================== */

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const ALLOWED_PLANS = {
  monthly: process.env.STRIPE_PRICE_MONTHLY,
  yearly:  process.env.STRIPE_PRICE_YEARLY,
};

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

  const { plan, unit = '', email = '' } = body;

  /* ── Validate plan ── */
  const priceId = ALLOWED_PLANS[plan];
  if (!priceId) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: `Invalid plan "${plan}". Must be "monthly" or "yearly".` }),
    };
  }

  /* ── Validate email (basic) ── */
  if (!email || !email.includes('@')) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'A valid email address is required.' }),
    };
  }

  /* ── Build redirect URLs ── */
  const siteUrl      = process.env.URL || 'https://chemunlocked.com';
  const practiceSlug = unit ? `${unit.padStart(2, '0')}_practice.html` : 'practice.html';
  // Success: go to the activation page which polls for the access token,
  // then redirects to the premium page once the webhook confirms the subscription.
  const successUrl = `${siteUrl}/subscription-success.html?email=${encodeURIComponent(email)}&unit=${encodeURIComponent(unit)}`;
  const cancelUrl  = `${siteUrl}/${practiceSlug}?checkout=cancelled`;

  try {
    const session = await stripe.checkout.sessions.create({
      mode: 'subscription',
      customer_email: email,

      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],

      /* Let Stripe calculate and collect tax automatically.
         Requires tax settings configured in the Stripe Dashboard. */
      automatic_tax: { enabled: true },

      /* Store plan and unit in metadata for use in webhook. */
      metadata: {
        plan,
        unit,
      },

      /* Collect subscriber's country for tax (required by automatic_tax). */
      customer_update: undefined, // only used when customer object exists
      billing_address_collection: 'auto',

      success_url: successUrl,
      cancel_url:  cancelUrl,
    });

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ url: session.url }),
    };
  } catch (err) {
    console.error('[create-checkout-session] Stripe error:', err.message);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to create checkout session. Please try again.' }),
    };
  }
};
