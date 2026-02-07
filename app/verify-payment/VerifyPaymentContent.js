'use client';

import { useEffect, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import axios from 'axios';

export default function VerifyPaymentContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const reference = searchParams.get('reference');
  const [status, setStatus] = useState('verifying');
  const [data, setData] = useState(null);

  useEffect(() => {
    if (!reference) {
      setStatus('error');
      return;
    }

    const verifyPayment = async () => {
      try {
        const response = await axios.get(`/api/paystack/verify?reference=${reference}`);

        if (response.data.success) {
          setStatus('success');
          setData(response.data.data);

          setTimeout(() => {
            router.push('/payment-success');
          }, 3000);
        } else {
          setStatus('failed');
          setTimeout(() => {
            router.push('/payment-failed');
          }, 3000);
        }
      } catch (error) {
        console.error('Verification error:', error);
        setStatus('error');
      }
    };

    verifyPayment();
  }, [reference, router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded-lg shadow-md text-center">
        {status === 'verifying' && (
          <>
            <div className="animate-spin w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full mx-auto mb-4"></div>
            <h2 className="text-xl font-semibold text-gray-700">Verifying Payment...</h2>
            <p className="text-gray-500 mt-2">Please wait while we confirm your payment</p>
          </>
        )}

        {status === 'success' && (
          <>
            <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl">✓</span>
            </div>
            <h2 className="text-xl font-semibold text-gray-700">Payment Successful!</h2>
            <p className="text-gray-500 mt-2">Redirecting to success page...</p>
            <div className="mt-4 text-sm text-gray-600">Reference: {data?.reference}</div>
          </>
        )}

        {status === 'failed' && (
          <>
            <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl">✗</span>
            </div>
            <h2 className="text-xl font-semibold text-gray-700">Payment Failed</h2>
            <p className="text-gray-500 mt-2">Redirecting to retry page...</p>
          </>
        )}

        {status === 'error' && (
          <>
            <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl">!</span>
            </div>
            <h2 className="text-xl font-semibold text-gray-700">Verification Error</h2>
            <p className="text-gray-500 mt-2">Unable to verify payment. Please contact support.</p>
            <button
              onClick={() => router.push('/')}
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Return Home
            </button>
          </>
        )}
      </div>
    </div>
  );
}
