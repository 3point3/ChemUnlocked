/* =====================================================
   create-school-checkout-session.js — Netlify Serverless Function
   Creates a Stripe Checkout Session for a flat-rate School plan
   (many students sharing one subscription via a school access code).

   Expected POST body (JSON):
     tier          — "school-30" | "school-100"
     schoolName    — e.g. "Lincoln High School"
     contactEmail  — the purchasing teacher/admin's email address

   On success, a random school access code is generated and stored
   in Stripe Customer metadata (school_code, seat_limit, school_name).
   Students later redeem that code + their own email at /school-login
   (see netlify/functions/school-login.js) to get access — no separate
   password system required.

   Required environment variables:
     STRIPE_SECRET_KEY
     STRIPE_PRICE_SCHOOL_30
     STRIPE_PRICE_SCHOOL_100
     URL  (set automatically by Netlify; your site's base URL)
   ===================================================== */

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const crypto = require('crypto');

const SCHOOL_TIERS = {
  'school-30': {
    priceId: process.env.STRIPE_PRICE_SCHOOL_30,
    seatLimit: 30,
    label: 'Up to 30 students',
  },
  'school-100': {
    priceId: process.env.STRIPE_PRICE_SCHOOL_100,
    seatLimit: 100,
    label: 'Up to 100 students',
  },
};

/* Unambiguous alphabet — no 0/O or 1/I so codes read cleanly on a
   whiteboard or handout. */
const CODE_ALPHABET = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';

function json(statusCode, payload) {
  return {
    statusCode,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  };
}

function generateSchoolCode(length = 8) {
  const bytes = crypto.randomBytes(length);
  let code = '';
  for (let i = 0; i < length; i += 1) {
    code += CODE_ALPHABET[bytes[i] % CODE_ALPHABET.length];
  }
  return code;
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

  const tierKey = String(body.tier || '').trim().toLowerCase();
  const schoolName = String(body.schoolName || '').trim().slice(0, 200);
  const contactEmail = String(body.contactEmail || '').trim().toLowerCase();

  const tierConfig = SCHOOL_TIERS[tierKey];
  if (!tierConfig || !tierConfig.priceId) {
    return json(400, { error: `Invalid plan "${tierKey}". Must be "school-30" or "school-100".` });
  }

  if (!schoolName) {
    return json(400, { error: 'School or classroom name is required.' });
  }

  if (!contactEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contactEmail)) {
    return json(400, { error: 'A valid contact email address is required.' });
  }

  const siteUrl = process.env.URL || 'https://chemunlocked.com';

  try {
    /* ── Re-use an existing Stripe customer for this contact email so a
       renewal/upgrade doesn't orphan a code already handed out to students. ── */
    let customerId;
    let schoolCode;
    const existing = await stripe.customers.list({ email: contactEmail, limit: 1 });

    if (existing.data.length > 0) {
      const customer = existing.data[0];
      customerId = customer.id;
      schoolCode = customer.metadata?.school_code || generateSchoolCode();

      await stripe.customers.update(customerId, {
        name: schoolName,
        metadata: {
          ...customer.metadata,
          role: 'school',
          school_name: schoolName,
          school_code: schoolCode,
          seat_limit: String(tierConfig.seatLimit),
          tier: tierKey,
        },
      });
    } else {
      schoolCode = generateSchoolCode();
      const customer = await stripe.customers.create({
        email: contactEmail,
        name: schoolName,
        metadata: {
          role: 'school',
          school_name: schoolName,
          school_code: schoolCode,
          seat_limit: String(tierConfig.seatLimit),
          tier: tierKey,
        },
      });
      customerId = customer.id;
    }

    const session = await stripe.checkout.sessions.create({
      mode: 'subscription',
      customer: customerId,

      line_items: [
        {
          price: tierConfig.priceId,
          quantity: 1,
        },
      ],

      automatic_tax: { enabled: true },
      allow_promotion_codes: true,

      metadata: {
        plan: tierKey,
        school_code: schoolCode,
        school_name: schoolName,
      },
      subscription_data: {
        metadata: {
          plan: tierKey,
          school_code: schoolCode,
          school_name: schoolName,
        },
      },

      billing_address_collection: 'auto',

      success_url: `${siteUrl}/school-subscription-success?email=${encodeURIComponent(contactEmail)}&code=${encodeURIComponent(schoolCode)}&school=${encodeURIComponent(schoolName)}`,
      cancel_url: `${siteUrl}/schools?checkout=cancelled`,
    });

    return json(200, { url: session.url });
  } catch (err) {
    console.error('[create-school-checkout-session] Stripe error:', err.message);
    return json(500, { error: 'Failed to create checkout session. Please try again.' });
  }
};
