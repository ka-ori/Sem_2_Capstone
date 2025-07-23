import { NextResponse } from 'next/server';

export function middleware(request) {
  // Get the token from the user's cookies
  const token = request.cookies.get('token')?.value;
  const { pathname } = request.nextUrl;

  // If the user is trying to access the dashboard without a token,
  // redirect them to the login page.
  if (pathname.startsWith('/dashboard') && !token) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  // Otherwise, allow the request to proceed.
  return NextResponse.next();
}

// This config ensures the middleware only runs on routes that need protection.
export const config = {
  matcher: ['/dashboard/:path*'],
};