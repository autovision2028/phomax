'use client';

import { Suspense } from 'react';
import VerifyPaymentContent from './VerifyPaymentContent';

export default function VerifyPaymentPage() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <VerifyPaymentContent />
    </Suspense>
  );
}

function LoadingSpinner() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded-lg shadow-md text-center">
        <div className="animate-spin w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full mx-auto mb-4"></div>
        <h2 className="text-xl font-semibold text-gray-700">Loading payment verification...</h2>
        <p className="text-gray-500 mt-2">Please wait a moment</p>
      </div>
    </div>
  );
}
