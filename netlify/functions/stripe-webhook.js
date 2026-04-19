/* =====================================================
   stripe-webhook.js — Netlify Serverless Function
   Verifies Stripe signature, persists subscriber state
   to Supabase, and issues access tokens.

   Handled events:
     checkout.session.completed
     customer.subscription.created
     customer.subscription.updated
     customer.subscription.deleted
     invoice.payment_failed

   Required environment variables:
     STRIPE_SECRET_KEY
     STRIPE_WEBHOOK_SECRET
     SUPABASE_URL
     SUPABASE_SERVICE_ROLE_KEY

   netlify.toml must have raw_body = true for this function.
   ===================================================== */

const stripe               = require('stripe')(process.env.STRIPE_SECRET_KEY);
const { createClient }     = require('@supabase/supabase-js');
const crypto               = require('crypto');

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

function makeAccessToken() {
  return crypto.randomBytes(40).toString('hex');
}

exports.handler = async function (event) {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  /* ── Verify Stripe signature ── */
  const sig    = event.headers['stripe-signature'];
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

  /* ── Route events ── */
  switch (stripeEvent.type) {

    case 'checkout.session.completed': {
      const session = stripeEvent.data.object;
      const email   = (
        session.customer_email ||
        session.customer_details?.email ||
        ''
      ).toLowerCase().trim();

      if (!email) {
        console.error('[stripe-webhook] checkout.session.completed — no email found');
        break;
      }

      const token    = makeAccessToken();
      // Default token expiry: 1 year. Will be corrected by subscription.updated.
      const tokenExp = new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString();

      const { error } = await supabase.from('subscribers').upsert({
        email,
        stripe_customer_id:     session.customer,
        stripe_subscription_id: session.subscription,
        status:                 'active',
        access_token:           token,
        token_expires_at:       tokenExp,
      }, { onConflict: 'email' });

      if (error) console.error('[stripe-webhook] DB upsert error:', error.message);
      else       console.log('[stripe-webhook] Subscriber activated:', email);
      break;
    }

    case 'customer.subscription.created':
    case 'customer.subscription.updated': {
      const sub       = stripeEvent.data.object;
      const periodEnd = new Date(sub.current_period_end * 1000).toISOString();

      const { error } = await supabase.from('subscribers')
        .update({
          stripe_subscription_id: sub.id,
          status:                 sub.status,
          period_end:             periodEnd,
          token_expires_at:       periodEnd,
        })
        .eq('stripe_customer_id', sub.customer);

      if (error) console.error('[stripe-webhook] DB update error:', error.message);
      else       console.log('[stripe-webhook] Subscription updated:', sub.id, sub.status);
      break;
    }

    case 'customer.subscription.deleted': {
      const sub = stripeEvent.data.object;

      const { error } = await supabase.from('subscribers')
        .update({
          status:          'canceled',
          period_end:      null,
          token_expires_at: new Date().toISOString(),
        })
        .eq('stripe_customer_id', sub.customer);

      if (error) console.error('[stripe-webhook] DB cancel error:', error.message);
      else       console.log('[stripe-webhook] Subscription canceled:', sub.customer);
      break;
    }

    case 'invoice.payment_failed': {
      const invoice = stripeEvent.data.object;

      const { error } = await supabase.from('subscribers')
        .update({ status: 'past_due' })
        .eq('stripe_customer_id', invoice.customer);

      if (error) console.error('[stripe-webhook] DB past_due error:', error.message);
      else       console.log('[stripe-webhook] Payment failed:', invoice.customer);
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
