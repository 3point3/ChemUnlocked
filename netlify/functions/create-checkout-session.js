/* =====================================================
   create-checkout-session.js — Netlify Serverless Function
   Creates a Stripe Checkout Session for monthly or yearly subscription.

   Expected POST body (JSON):
     plan  — "monthly" | "yearly"
     unit  — e.g. "05"  (used to build the success redirect URL)
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

function json(statusCode, payload) {
  return {
    statusCode,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  };
}

function normalizeUnit(raw) {
  const text = String(raw || '').trim();
  if (!/^\d{1,2}$/.test(text)) return '';
  return text.padStart(2, '0');
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

  const plan = String(body.plan || '').trim().toLowerCase();
  const unit = normalizeUnit(body.unit);
  const email = String(body.email || '').trim();

  /* ── Validate plan ── */
  const priceId = ALLOWED_PLANS[plan];
  if (!priceId) {
    return json(400, { error: `Invalid plan "${plan}". Must be "monthly" or "yearly".` });
  }

  /* ── Validate email (basic) ── */
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return json(400, { error: 'A valid email address is required.' });
  }

  /* ── Build redirect URLs ── */
  const siteUrl      = process.env.URL || 'https://chemunlocked.com';
  const practiceSlug = unit ? `${unit}_practice` : 'practice';
  // Success: go to the activation page which polls for the access token,
  // then redirects to the premium page once the webhook confirms the subscription.
  const successUrl = `${siteUrl}/subscription-success?email=${encodeURIComponent(email)}&unit=${encodeURIComponent(unit)}`;
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

      /* Allow customers to enter a coupon or promotion code at checkout. */
      allow_promotion_codes: true,

      /* Store plan and unit in metadata for use in webhook. */
      metadata: {
        plan,
        unit,
      },

      billing_address_collection: 'auto',

      success_url: successUrl,
      cancel_url:  cancelUrl,
    });

    return json(200, { url: session.url });
  } catch (err) {
    console.error('[create-checkout-session] Stripe error:', err.message);
    return json(500, { error: 'Failed to create checkout session. Please try again.' });
  }
};
