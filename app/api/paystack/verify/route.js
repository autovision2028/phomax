import { verifyTransaction } from '@/lib/paystack';
import { NextResponse } from 'next/server';

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const reference = searchParams.get('reference');

    if (!reference) {
      return NextResponse.json(
        {
          success: false,
          error: 'Reference is required',
          message: 'No payment reference found in URL',
        },
        { status: 400 }
      );
    }

    const result = await verifyTransaction(reference);

    return NextResponse.json(result);
  } catch (error) {
    console.error('Verification API error:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Internal server error',
        message: error?.message,
      },
      { status: 500 }
    );
  }
}
