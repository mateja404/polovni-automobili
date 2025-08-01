import { NextRequest, NextResponse } from 'next/server';
import { createSession } from '@/lib/session';

export async function POST(req: NextRequest) {
  const { email, password, captchaToken } = await req.json()
  try {
    const response = await fetch(`https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${captchaToken}`, { method: "POST" });
    if (response.ok) {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      if (!res.ok) {
        return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 })
      }

      const data = await res.json();
      await createSession({
        user: {
          id: data.user.id,
          email: data.user.email,
        },
        accessToken: data.accessToken,
        refreshToken: data.refreshToken
      });

      return NextResponse.json({ message: data.message });
    } else {
      return NextResponse.json({ message: "Invalid captcha" }, { status: 403 });
    }
  } catch (error) {
    console.log(error);
    return;
  }
}