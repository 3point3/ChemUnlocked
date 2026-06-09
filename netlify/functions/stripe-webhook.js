/* =====================================================
   stripe-webhook.js — Netlify Serverless Function
   Verifies Stripe signature and logs subscription events.
   No database required — Stripe is the source of truth.

   Handled events:
     checkout.session.completed
     customer.subscription.created
     customer.subscription.updated
     customer.subscription.deleted
     invoice.payment_failed

   Required environment variables:
     STRIPE_SECRET_KEY
     STRIPE_WEBHOOK_SECRET

   netlify.toml must have raw_body = true for this function.
   ===================================================== */

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

function getStripeSignature(headers = {}) {
  return headers['stripe-signature'] || headers['Stripe-Signature'] || '';
}

exports.handler = async function (event) {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  /* ── Verify Stripe signature ── */
  const sig    = getStripeSignature(event.headers || {});
  const secret = process.env.STRIPE_WEBHOOK_SECRET;

  if (!sig || !secret) {
    console.error('[stripe-webhook] Missing signature or webhook secret.');
    return { statusCode: 400, body: 'Missing Stripe signature.' };
  }

  let stripeEvent;
  try {
    const rawBody = event.isBase64Encoded
      ? Buffer.from(event.body, 'base64').toString('utf8')
      : event.body;
    stripeEvent = stripe.webhooks.constructEvent(rawBody, sig, secret);
  } catch (err) {
    console.error('[stripe-webhook] Signature verification failed:', err.message);
    return { statusCode: 400, body: `Webhook verification failed: ${err.message}` };
  }

  /* ── Log events (Stripe is the source of truth — no DB writes needed) ── */
  switch (stripeEvent.type) {

    case 'checkout.session.completed': {
      const session = stripeEvent.data.object;
      const email   = (
        session.customer_email ||
        session.customer_details?.email ||
        ''
      ).toLowerCase().trim();
      console.log('[stripe-webhook] Checkout completed:', email, 'customer:', session.customer);
      break;
    }

    case 'customer.subscription.created':
    case 'customer.subscription.updated': {
      const sub = stripeEvent.data.object;
      console.log('[stripe-webhook] Subscription', stripeEvent.type, sub.id, 'status:', sub.status);
      break;
    }

    case 'customer.subscription.deleted': {
      const sub = stripeEvent.data.object;
      console.log('[stripe-webhook] Subscription canceled:', sub.id, 'customer:', sub.customer);
      break;
    }

    case 'invoice.payment_failed': {
      const invoice = stripeEvent.data.object;
      console.log('[stripe-webhook] Payment failed for customer:', invoice.customer);
      break;
    }

    default:
      console.log('[stripe-webhook] Unhandled event:', stripeEvent.type);
  }

  return {
    statusCode: 200,
    body: JSON.stringify({ received: true }),
  };
};
