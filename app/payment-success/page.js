'use client';

import Link from 'next/link';

export default function PaymentSuccessPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <div className="bg-white p-8 rounded-lg shadow-md text-center max-w-md w-full">
        <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
          <span className="text-white text-2xl">✓</span>
        </div>
        <h1 className="text-2xl font-semibold text-gray-800">Payment Successful</h1>
        <p className="text-gray-600 mt-2">Thanks! Your payment has been received.</p>
        <div className="mt-6">
          <Link
            href="/second-page"
            className="inline-flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Back to Store
          </Link>
        </div>
      </div>
    </div>
  );
}
