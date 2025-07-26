import { NextRequest, NextResponse } from 'next/server'
import { createSession } from '@/lib/session'
import { redirect } from 'next/navigation'

export async function POST(req: NextRequest) {
  const { email, password } = await req.json()

  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  })

  if (!res.ok) {
    return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 })
  }

  const data = await res.json()

  await createSession({
    user: {
      id: data.user.id,
      email: data.user.email,
    },
    accessToken: data.accessToken,
    refreshToken: data.refreshToken
  });

  return NextResponse.json({ success: true })
}