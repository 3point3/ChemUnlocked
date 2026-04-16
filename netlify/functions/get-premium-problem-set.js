const { buildProblemSet } = require('../lib/premium-practice-engine');
const { requireActiveSubscription } = require('../lib/access');

const unitLoaders = {
  '04': () => require('../lib/data/unit04-problems')
};

exports.handler = async (event) => {
  try {
    await requireActiveSubscription(event);

    if (event.httpMethod !== 'POST') {
      return response(405, { error: 'Method not allowed.' });
    }

    const body = JSON.parse(event.body || '{}');
    const unit = String(body.unit || '').padStart(2, '0');
    const type = body.type || 'all';
    const count = Number(body.count || 12);

    const loader = unitLoaders[unit];
    if (!loader) {
      return response(404, { error: `No problem bank configured for unit ${unit}.` });
    }

    const { ALL_PROBLEMS } = loader();
    const result = buildProblemSet({ problems: ALL_PROBLEMS, type, count });
    return response(200, result);
  } catch (error) {
    return response(error.statusCode || 500, { error: error.message || 'Server error.' });
  }
};

function response(statusCode, body) {
  return {
    statusCode,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  };
}
