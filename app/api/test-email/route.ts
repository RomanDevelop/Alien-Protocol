import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    message: 'Test endpoint working',
    emailUser: process.env.EMAIL_USER,
    emailPassExists: !!process.env.EMAIL_PASS,
    nodeEnv: process.env.NODE_ENV
  });
}
