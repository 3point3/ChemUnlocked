/* =====================================================
   get-premium-problem-set.js — Netlify Serverless Function
   Authenticates via access token (single DB lookup),
   then returns a randomized problem set.

   Expected query params:
     unit   — e.g. "04"
     filter — "all" | "calc" | "concept" | "multi"
     count  — number of problems to return (default 12)

   Required headers:
     x-access-token — opaque token stored in localStorage

   Required environment variables:
     SUPABASE_URL
     SUPABASE_SERVICE_ROLE_KEY
   ===================================================== */

const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

const UNIT_MODULES = {
  '00': () => import('../lib/data/unit00-problems.js'),
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
};

async function isAuthorized(token) {
  if (!token || token.length < 10) return false;
  try {
    const { data, error } = await supabase
      .from('subscribers')
      .select('status, token_expires_at')
      .eq('access_token', token)
      .single();

    if (error || !data) return false;
    if (data.status !== 'active' && data.status !== 'trialing') return false;
    if (data.token_expires_at && new Date(data.token_expires_at) < new Date()) return false;
    return true;
  } catch {
    return false;
  }
}

exports.handler = async function (event) {
  /* ── Auth ── */
  const token      = (event.headers['x-access-token'] || '').trim();
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
  const { unit = '', filter = 'all', count = '12' } = event.queryStringParameters || {};

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

    const drawCount = Math.min(parseInt(count, 10) || 12, shuffled.length);

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
