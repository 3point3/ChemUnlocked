function getMockCustomerFromHeaders(headers = {}) {
  const email = headers['x-cu-user-email'] || headers['X-CU-USER-EMAIL'];
  const active = headers['x-cu-subscription-active'] || headers['X-CU-SUBSCRIPTION-ACTIVE'];
  return {
    email: email || '',
    active: String(active).toLowerCase() === 'true'
  };
}

async function requireActiveSubscription(event) {
  const customer = getMockCustomerFromHeaders(event.headers || {});

  if (!customer.active) {
    const error = new Error('Active subscription required.');
    error.statusCode = 403;
    throw error;
  }

  return customer;
}

module.exports = {
  requireActiveSubscription
};
