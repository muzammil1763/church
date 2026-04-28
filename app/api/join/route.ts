import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    // Validate required fields
    if (!data.email || !data.firstName || !data.lastName) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Log the submission (in production, this would save to a database or send an email)
    console.log('[API] Join Network submission:', {
      timestamp: new Date().toISOString(),
      ...data,
    });

    // Return success response
    return NextResponse.json(
      {
        success: true,
        message: 'Thank you for joining the Cobb Church Network! We will be in touch soon.',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('[API] Error processing join request:', error);
    return NextResponse.json(
      { error: 'An error occurred while processing your request' },
      { status: 500 }
    );
  }
}
