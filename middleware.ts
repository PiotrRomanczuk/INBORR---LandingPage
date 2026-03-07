import { NextResponse, NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const res = NextResponse.next();

  const allowedOrigins = [
    "https://inborr.pl",
    "https://www.inborr.pl",
  ];

  if (process.env.NODE_ENV === "development") {
    allowedOrigins.push("http://localhost:3000");
  }

  const origin = request.headers.get("origin");
  if (origin && allowedOrigins.includes(origin)) {
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

export const config = {
  matcher: "/api/:path*",
};
