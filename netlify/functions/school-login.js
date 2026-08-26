/* =====================================================
   school-login.js — Netlify Serverless Function
   Redeems a school access code + a student's own email for
   premium access, without a separate password system.

   Flow:
     1. A school buys a School plan (create-school-checkout-session.js),
        which stores a school_code + seat_limit on the Stripe Customer.
     2. The teacher/admin shares that code with students.
     3. Each student visits /school-login and enters the code plus
        their own email. This function verifies the code maps to an
        active school subscription, enforces the seat limit using a
        small roster stored in Netlify Blobs, and returns the same
        kind of access token (Stripe Customer ID) used by individual
        subscribers — so /premium and get-premium-problem-set.js need
        no changes to support school users.

   Expected POST body (JSON):
     code  — the school access code
     email — the student's own email address

   Required environment variables:
     STRIPE_SECRET_KEY
   ===================================================== */

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const { getStore } = require('@netlify/blobs');

function json(statusCode, payload) {
  return {
    statusCode,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  };
}

function normalizeCode(raw) {
  return String(raw || '').trim().toUpperCase().replace(/[^A-Z0-9]/g, '');
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

  const code = normalizeCode(body.code);
  const email = String(body.email || '').trim().toLowerCase();

  if (!code) {
    return json(400, { error: 'School code is required.' });
  }
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return json(400, { error: 'A valid email address is required.' });
  }

  try {
    /* ── Find the school's Stripe customer by its access code ── */
    const found = await stripe.customers.search({
      query: `metadata['school_code']:'${code}'`,
      limit: 1,
    });

    if (!found.data.length) {
      return json(404, {
        error: 'We could not find a school with that code. Double-check it with your teacher.',
        code: 'CODE_NOT_FOUND',
      });
    }

    const customer = found.data[0];

    /* ── Confirm the school's subscription is active ── */
    const [activeSubs, trialingSubs] = await Promise.all([
      stripe.subscriptions.list({ customer: customer.id, status: 'active',   limit: 1 }),
      stripe.subscriptions.list({ customer: customer.id, status: 'trialing', limit: 1 }),
    ]);
    const hasAccess = activeSubs.data.length > 0 || trialingSubs.data.length > 0;

    if (!hasAccess) {
      return json(403, {
        error: "This school's subscription isn't active right now. Ask your teacher to contact ChemUnlocked.",
        code: 'SUBSCRIPTION_INACTIVE',
      });
    }

    /* ── Enforce the seat limit using a small roster in Netlify Blobs ── */
    const seatLimit = Number.parseInt(customer.metadata?.seat_limit || '0', 10) || 0;
    const store = getStore('school-rosters');
    const existing = (await store.get(code, { type: 'json' })) || { emails: [] };
    const emails = Array.isArray(existing.emails) ? existing.emails : [];
    const alreadyEnrolled = emails.includes(email);

    if (!alreadyEnrolled) {
      if (seatLimit > 0 && emails.length >= seatLimit) {
        return json(403, {
          error: 'This school has used all of its available seats. Ask your teacher to contact ChemUnlocked to add more.',
          code: 'SEAT_LIMIT_REACHED',
        });
      }

      emails.push(email);
      await store.setJSON(code, {
        emails,
        schoolName: customer.metadata?.school_name || '',
        seatLimit,
        updatedAt: new Date().toISOString(),
      });
    }

    /* ── Same token shape individual subscribers get: the Stripe Customer ID ── */
    return json(200, {
      token: customer.id,
      schoolName: customer.metadata?.school_name || '',
      seatsUsed: alreadyEnrolled ? emails.length : emails.length,
      seatLimit,
    });
  } catch (err) {
    console.error('[school-login] Error:', err.message);
    return json(500, { error: 'Server error. Please try again.' });
  }
};
