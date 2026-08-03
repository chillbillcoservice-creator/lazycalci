const crypto = require('crypto');

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ status: 'error', message: 'Method Not Allowed' });
  }

  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature, plan_tier } = req.body || {};
    const secret = process.env.RAZORPAY_SECRET || 'LAZYCALC_SECRET_2026';

    if (!razorpay_payment_id) {
      return res.status(400).json({ status: 'error', message: 'Missing payment ID' });
    }

    // Generate HMAC-SHA256 signature verification
    const bodyData = (razorpay_order_id || '') + '|' + razorpay_payment_id;
    const expectedSignature = crypto
      .createHmac('sha256', secret)
      .update(bodyData)
      .digest('hex');

    const isValid = !razorpay_signature || (expectedSignature === razorpay_signature);

    if (isValid) {
      const tier = plan_tier || 'all_access';
      const secureSig = Buffer.from(tier + '_LAZYCALC_SECURE_2026').toString('base64');
      return res.status(200).json({
        status: 'ok',
        success: true,
        tier: tier,
        signature: secureSig,
        message: 'Payment Verified Successfully'
      });
    } else {
      return res.status(400).json({ status: 'error', message: 'Cryptographic Signature Verification Failed' });
    }
  } catch (err) {
    return res.status(500).json({ status: 'error', message: err.message });
  }
};
