import { NextRequest, NextResponse } from 'next/server';

// Mock user storage (replace with real DB in production)
const users = new Map();
const sessions = new Map();

export async function POST(request: NextRequest) {
  const { email, password, name } = await request.json();

  if (!email || !password || !name) {
    return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
  }

  if (users.has(email)) {
    return NextResponse.json({ error: 'Email already exists' }, { status: 400 });
  }

  const userId = Math.random().toString(36).substr(2, 9);
  const user = { id: userId, email, name, password, avatar: null, role: 'STUDENT' };
  users.set(email, user);

  const sessionId = Math.random().toString(36).substr(2, 20);
  sessions.set(sessionId, userId);

  const response = NextResponse.json({ id: userId, email, name, role: 'STUDENT' });
  response.cookies.set('sessionId', sessionId, { httpOnly: true, path: '/' });

  return response;
}
