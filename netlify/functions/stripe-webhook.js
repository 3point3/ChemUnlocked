exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: 'Method not allowed.'
    };
  }

  // Replace this stub with Stripe webhook signature verification
  // and event handling for:
  // - checkout.session.completed
  // - customer.subscription.created
  // - customer.subscription.updated
  // - customer.subscription.deleted
  // - invoice.paid
  // - invoice.payment_failed

  return {
    statusCode: 200,
    body: JSON.stringify({ received: true })
  };
};
