exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return response(405, { error: 'Method not allowed.' });
  }

  const body = JSON.parse(event.body || '{}');
  const plan = body.plan === 'yearly' ? 'yearly' : 'monthly';

  // Replace this stub with Stripe SDK logic.
  // Expected environment variables:
  // STRIPE_SECRET_KEY
  // STRIPE_PRICE_MONTHLY
  // STRIPE_PRICE_YEARLY
  // STRIPE_TAX_ENABLED=true
  // SITE_URL=https://chemunlocked.com

  return response(200, {
    mode: 'subscription',
    plan,
    url: `/checkout-placeholder.html?plan=${encodeURIComponent(plan)}`
  });
};

function response(statusCode, body) {
  return {
    statusCode,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  };
}
