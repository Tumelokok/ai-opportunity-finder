import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const sessionId = request.cookies.get('sessionId')?.value;

  if (!sessionId) {
    return NextResponse.json(null);
  }

  // Mock: return a dummy user (in production, check against session storage)
  return NextResponse.json({
    id: '123',
    email: 'user@example.com',
    name: 'User',
    role: 'STUDENT'
  });
}
