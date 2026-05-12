import { NextResponse, type NextRequest } from "next/server";
import createIntlMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

const intlMiddleware = createIntlMiddleware(routing);

const ALLOWED_ORIGINS = [
  "https://inborr.pl",
  "https://www.inborr.pl",
  ...(process.env.NODE_ENV === "development" ? ["http://localhost:3000"] : []),
];

function applyCorsHeaders(req: NextRequest, res: NextResponse) {
  const origin = req.headers.get("origin");
  if (origin && ALLOWED_ORIGINS.includes(origin)) {
    res.headers.set("Access-Control-Allow-Origin", origin);
  }
  res.headers.set("Access-Control-Allow-Credentials", "true");
  res.headers.set("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
  res.headers.set(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization",
  );
  return res;
}

export function middleware(req: NextRequest) {
  if (req.nextUrl.pathname.startsWith("/api")) {
    return applyCorsHeaders(req, NextResponse.next());
  }
  return intlMiddleware(req);
}

export const config = {
  matcher: ["/((?!_next|_vercel|.*\\..*).*)"],
};
