import { NextRequest, NextResponse } from 'next/server'
import { AuthenticationClient } from 'auth0'

// Initialize Auth0 Authentication API client
const auth0 = new AuthenticationClient({
  domain: process.env.AUTH0_ISSUER_BASE_URL?.replace('https://', '') || '',
  clientId: process.env.AUTH0_CLIENT_ID || '',
  clientSecret: process.env.AUTH0_CLIENT_SECRET || ''
})

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json()

    if (!email || !password) {
      return NextResponse.json(
        { error: 'Email and password are required' },
        { status: 400 }
      )
    }

    // Authenticate user with Auth0
    const response = await auth0.oauth.passwordGrant({
      username: email,
      password,
      audience: process.env.AUTH0_AUDIENCE || '',
      scope: 'openid profile email'
    })

    return NextResponse.json({
      success: true,
      access_token: response.data?.access_token,
      id_token: response.data?.id_token
    })

  } catch (error: any) {
    console.error('Login error:', error)
    
    if (error.message?.includes('invalid_user_password')) {
      return NextResponse.json(
        { error: 'Invalid email or password' },
        { status: 401 }
      )
    }

    return NextResponse.json(
      { error: 'Login failed' },
      { status: 500 }
    )
  }
} 