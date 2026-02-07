'use client';

import { useState } from 'react';
import axios from 'axios';

export default function PaystackButton({ email, amount, metadata, onSuccess = () => {}, onClose = () => {} }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handlePayment = async () => {
    setLoading(true);
    setError(null);

    try {
      // Initialize payment
      const response = await axios.post('/api/paystack/initialize', {
        email,
        amount,
        metadata,
      });

      // Redirect to Paystack payment page
      if (response.data.authorization_url) {
        window.location.href = response.data.authorization_url;
      } else {
        throw new Error('No authorization URL received');
      }
    } catch (err) {
      setError(err.response?.data?.error || err.message);
      console.error('Payment initialization error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="paystack-button-container">
      <button
        onClick={handlePayment}
        disabled={loading}
        className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition duration-200"
      >
        {loading ? (
          <>
            <span className="animate-spin mr-2">⟳</span>
            Processing...
          </>
        ) : (
          `Pay ₦${amount.toLocaleString()}` 
        )}
      </button>

      {error && (
        <div className="mt-3 p-3 bg-red-50 text-red-700 rounded-md">
          Error: {error}
        </div>
      )}

      <div className="mt-4 text-sm text-gray-500">
        💡 <strong>Test Card:</strong> 4084 0840 8048 4081 (Exp: any future date, CVV: 408, OTP: 123456)
      </div>
    </div>
  );
}
