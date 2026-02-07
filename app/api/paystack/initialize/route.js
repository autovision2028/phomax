import { initializeTransaction } from '@/lib/paystack';
import { rateLimit } from '@/lib/rateLimit';
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const ip = request.ip || request.headers.get('x-forwarded-for');
    if (!rateLimit(ip, 5, 60000)) {
      return NextResponse.json(
        { error: 'Too many requests' },
        { status: 429 }
      );
    }

    const { email, amount, metadata } = await request.json();

    // Validate required fields
    if (!email || !amount) {
      return NextResponse.json(
        { error: 'Email and amount are required' },
        { status: 400 }
      );
    }

    // Initialize payment
    const result = await initializeTransaction(email, amount, metadata);

    if (!result.success) {
      return NextResponse.json(
        { error: result.error },
        { status: 500 }
      );
    }

    return NextResponse.json(result.data);
  } catch (error) {
    console.error('Initialize API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
