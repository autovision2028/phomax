export function logPaymentAttempt(data) {
  const log = {
    timestamp: new Date().toISOString(),
    ip: data.ip,
    email: data.email,
    amount: data.amount,
    product: data.productName,
    status: data.status, // 'initiated', 'success', 'failed'
    reference: data.reference,
  };

  console.log('PAYMENT_AUDIT:', JSON.stringify(log));

  // TODO: Send to logging service or database
}
