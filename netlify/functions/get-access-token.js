/* =====================================================
   get-access-token.js — Netlify Serverless Function
   Called by subscription-success.html after Stripe redirect.
   Polls until the webhook has written the subscriber row,
   then returns the access token so the browser can store it.

   Expected query params:
     email — the subscriber's email address

   Required environment variables:
     SUPABASE_URL
     SUPABASE_SERVICE_ROLE_KEY
   ===================================================== */

const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

exports.handler = async function (event) {
  const email = (event.queryStringParameters?.email || '').toLowerCase().trim();

  if (!email || !email.includes('@')) {
    return {
      statusCode: 400,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ error: 'Valid email required.' }),
    };
  }

  try {
    const { data, error } = await supabase
      .from('subscribers')
      .select('access_token, status, token_expires_at')
      .eq('email', email)
      .single();

    if (error || !data) {
      /* Subscriber row not written yet — tell the client to retry */
      return {
        statusCode: 404,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ error: 'Subscription not confirmed yet. Please wait.' }),
      };
    }

    if (data.status !== 'active' && data.status !== 'trialing') {
      return {
        statusCode: 403,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ error: 'Subscription is not active.' }),
      };
    }

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ token: data.access_token }),
    };
  } catch (err) {
    console.error('[get-access-token] Error:', err.message);
    return {
      statusCode: 500,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ error: 'Server error. Please try again.' }),
    };
  }
};
