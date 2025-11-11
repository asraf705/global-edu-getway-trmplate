import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Check if user is trying to access dashboard without authentication
  if (request.nextUrl.pathname.startsWith('/dashboard')) {
    // In a real app, you'd check for a token or session
    // For now, we'll let the client-side handle it since we're using localStorage
    return NextResponse.next()
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/dashboard/:path*'],
}

