import { NextRequest, NextResponse } from "next/server";
import { getSession } from "./lib/session";
import createIntlMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

// 1. next-intl middleware
const intlMiddleware = createIntlMiddleware(routing);

// 2. auth middleware – samo za /myaccount
async function authMiddleware(req: NextRequest) {
  const session = await getSession();
  if (!session || !session.user) {
    return NextResponse.redirect(new URL("/login", req.nextUrl));
  }

  return NextResponse.next();
}

export default async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (pathname.startsWith("/myaccount")) {
    const authResult = await authMiddleware(req);
    if (authResult.redirected) return authResult;
  }

  return intlMiddleware(req);
}

export const config = {
  matcher: ['/((?!api|trpc|_next|_vercel|.*\\..*).*)']
};