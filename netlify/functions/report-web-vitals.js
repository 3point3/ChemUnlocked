/* =====================================================
   report-web-vitals.js
   Receives lightweight real-user Core Web Vitals beacons.
   Data is intentionally minimal and contains no PII.
   ===================================================== */

function json(statusCode, payload) {
  return {
    statusCode,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  };
}

exports.handler = async function (event) {
  if (event.httpMethod !== 'POST') {
    return json(405, { error: 'Method not allowed.' });
  }

  try {
    const raw = event.body || '{}';
    const body = JSON.parse(raw);

    const allowedNames = new Set(['LCP', 'CLS', 'INP']);
    if (!allowedNames.has(body.name) || typeof body.value !== 'number') {
      return json(400, { error: 'Invalid metric payload.' });
    }

    const metric = {
      name: body.name,
      value: Number(body.value),
      rating: typeof body.rating === 'string' ? body.rating : 'unknown',
      id: typeof body.id === 'string' ? body.id : 'unknown',
      path: typeof body.path === 'string' ? body.path.slice(0, 200) : '/',
      navType: typeof body.navType === 'string' ? body.navType : 'navigate',
      ts: Number(body.ts) || Date.now()
    };

    // Netlify function logs can be exported to your log sink for analysis.
    console.log('[web-vitals]', JSON.stringify(metric));
    return { statusCode: 204, body: '' };
  } catch (error) {
    console.error('[web-vitals] parse error', error.message);
    return json(400, { error: 'Malformed JSON.' });
  }
};
