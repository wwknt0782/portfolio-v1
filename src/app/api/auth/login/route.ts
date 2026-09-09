import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { signToken, validateUser } from '@/lib/auth';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, password } = body || {};
    if (!email || !password) {
      return NextResponse.json({ message: 'email and password required' }, { status: 400 });
    }

    const ok = validateUser(email, password);
    if (!ok) {
      return NextResponse.json({ message: 'invalid credentials' }, { status: 401 });
    }

    const token = signToken({ email });
    const isProd = process.env.NODE_ENV === 'production';
    const maxAge = 60 * 60 * 24 * 7; // 7 days
    const cookie = `token=${token}; HttpOnly; Path=/; Max-Age=${maxAge}; ${isProd ? 'Secure; ' : ''}SameSite=Strict`;

    const res = NextResponse.json({ ok: true });
    res.headers.append('Set-Cookie', cookie);
    return res;
  } catch (err) {
    return NextResponse.json({ message: 'internal error' }, { status: 500 });
  }
}
