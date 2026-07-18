import { NextRequest, NextResponse } from 'next/server';

// Mock storage
const users = new Map();
const sessions = new Map();

export async function POST(request: NextRequest) {
  const { email, password } = await request.json();

  if (!email || !password) {
    return NextResponse.json({ error: 'Missing email or password' }, { status: 400 });
  }

  const user = users.get(email);
  if (!user || user.password !== password) {
    return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
  }

  const sessionId = Math.random().toString(36).substr(2, 20);
  sessions.set(sessionId, user.id);

  const response = NextResponse.json({ id: user.id, email: user.email, name: user.name, role: user.role });
  response.cookies.set('sessionId', sessionId, { httpOnly: true, path: '/' });

  return response;
}
