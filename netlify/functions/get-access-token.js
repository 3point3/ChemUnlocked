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
    const { data, error } = await supabase
      .from('subscribers')
      .select('access_token, status, token_expires_at')
      .eq('email', email)
      .single();

    if (error || !data) {
      /* Subscriber row not written yet — tell the client to retry */
      return json(404, { error: 'Subscription not confirmed yet. Please wait.' });
    }

    if (data.status !== 'active' && data.status !== 'trialing') {
      return json(403, { error: 'Subscription is not active.' });
    }

    return json(200, { token: data.access_token });
  } catch (err) {
    console.error('[get-access-token] Error:', err.message);
    return json(500, { error: 'Server error. Please try again.' });
  }
};
