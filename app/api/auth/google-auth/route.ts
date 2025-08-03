import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const code = searchParams.get('code')
  const state = searchParams.get('state')

  if (!code) {
    // Redirect to Google OAuth
    const googleAuthUrl = `https://accounts.google.com/oauth/authorize?` +
      `client_id=${process.env.GOOGLE_CLIENT_ID}&` +
      `redirect_uri=${encodeURIComponent(process.env.GOOGLE_REDIRECT_URI || '')}&` +
      `response_type=code&` +
      `scope=openid email profile&` +
      `state=${state || 'random-state'}`

    return NextResponse.redirect(googleAuthUrl)
  }

  try {
    // Exchange code for tokens
    const tokenResponse = await fetch('https://oauth2.googleapis.com/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        client_id: process.env.GOOGLE_CLIENT_ID || '',
        client_secret: process.env.GOOGLE_CLIENT_SECRET || '',
        code,
        grant_type: 'authorization_code',
        redirect_uri: process.env.GOOGLE_REDIRECT_URI || '',
      }),
    })

    const tokens = await tokenResponse.json()

    if (!tokenResponse.ok) {
      throw new Error('Failed to exchange code for tokens')
    }

    // Get user info from Google
    const userResponse = await fetch('https://www.googleapis.com/oauth2/v2/userinfo', {
      headers: {
        Authorization: `Bearer ${tokens.access_token}`,
      },
    })

    const userInfo = await userResponse.json()

    // Here you would typically:
    // 1. Create or find user in your database
    // 2. Create a session
    // 3. Redirect to dashboard

    // For now, redirect to dashboard with user info
    const redirectUrl = `/dashboard?user=${encodeURIComponent(JSON.stringify(userInfo))}`
    return NextResponse.redirect(new URL(redirectUrl, request.url))

  } catch (error) {
    console.error('Google auth error:', error)
    return NextResponse.redirect(new URL('/login?error=google_auth_failed', request.url))
  }
} 