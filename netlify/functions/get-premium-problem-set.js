/* =====================================================
   get-premium-problem-set.js — Netlify Serverless Function
   Authenticates via Stripe Customer ID (stored in localStorage
   as cu_token), verifies an active subscription directly with
   Stripe, then returns a randomized problem set.

   No database required — Stripe is the source of truth.

   Expected query params:
     unit   — e.g. "05"
     filter — "all" | "calc" | "concept" | "multi"
     count  — number of problems to return (default 3)

   Required headers:
     x-access-token — Stripe Customer ID (cus_xxxx) stored in localStorage

   Required environment variables:
     STRIPE_SECRET_KEY
   ===================================================== */

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const UNIT_MODULES = {
  '01': () => import('../lib/data/unit01-problems.js'),
  '02': () => import('../lib/data/unit02-problems.js'),
  '03': () => import('../lib/data/unit03-problems.js'),
  '04': () => import('../lib/data/unit04-problems.js'),
  '05': () => import('../lib/data/unit05-problems.js'),
  '06': () => import('../lib/data/unit06-problems.js'),
  '07': () => import('../lib/data/unit07-problems.js'),
  '08': () => import('../lib/data/unit08-problems.js'),
  '09': () => import('../lib/data/unit09-problems.js'),
  '10': () => import('../lib/data/unit10-problems.js'),
  '11': () => import('../lib/data/unit11-problems.js'),
  '12': () => import('../lib/data/unit12-problems.js'),
  '13': () => import('../lib/data/unit13-problems.js'),
  '14': () => import('../lib/data/unit14-problems.js'),
  '15': () => import('../lib/data/unit15-problems.js'),
};

const ALLOWED_FILTERS = new Set(['all', 'calc', 'concept', 'multi']);

function clampRequestedCount(rawCount) {
  const parsed = Number.parseInt(rawCount, 10);
  if (!Number.isFinite(parsed) || Number.isNaN(parsed)) return 3;
  return Math.min(Math.max(parsed, 1), 50);
}

async function isAuthorized(customerId) {
  /* Must look like a Stripe customer ID */
  if (!customerId || !customerId.startsWith('cus_')) return false;

  try {
    const [activeSubs, trialingSubs] = await Promise.all([
      stripe.subscriptions.list({ customer: customerId, status: 'active',   limit: 1 }),
      stripe.subscriptions.list({ customer: customerId, status: 'trialing', limit: 1 }),
    ]);
    return activeSubs.data.length > 0 || trialingSubs.data.length > 0;
  } catch {
    return false;
  }
}

exports.handler = async function (event) {
  /* ── Auth ── */
  const headers = event.headers || {};
  const token = String(
    headers['x-access-token'] ||
    headers['X-Access-Token'] ||
    ''
  ).trim();

  const authorized = await isAuthorized(token);

  if (!authorized) {
    return {
      statusCode: 403,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        error: 'Active subscription required.',
        code:  'SUBSCRIPTION_REQUIRED',
      }),
    };
  }

  /* ── Validate params ── */
  const query  = event.queryStringParameters || {};
  const unit   = String(query.unit   || '').trim();
  const filter = String(query.filter || 'all').trim();
  const count  = clampRequestedCount(query.count || '3');

  if (!ALLOWED_FILTERS.has(filter)) {
    return {
      statusCode: 400,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        error: `Invalid filter "${filter}". Expected one of: all, calc, concept, multi.`,
      }),
    };
  }

  const loader = UNIT_MODULES[unit];
  if (!loader) {
    return {
      statusCode: 404,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ error: `Unit "${unit}" not found.` }),
    };
  }

  /* ── Load, shuffle, slice ── */
  try {
    const { ALL_PROBLEMS } = await loader();
    const pool = filter === 'all'
      ? ALL_PROBLEMS
      : ALL_PROBLEMS.filter(p => p.type === filter);

    const shuffled = [...pool];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    const drawCount = Math.min(count, shuffled.length);

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ unit, filter, problems: shuffled.slice(0, drawCount) }),
    };
  } catch (err) {
    console.error('[get-premium-problem-set] Error:', err.message);
    return {
      statusCode: 500,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ error: 'Failed to load problem set.' }),
    };
  }
};
