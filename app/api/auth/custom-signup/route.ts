import { NextRequest, NextResponse } from 'next/server'
import { ManagementClient } from 'auth0'

// Initialize Auth0 Management API client
const management = new ManagementClient({
  domain: process.env.AUTH0_ISSUER_BASE_URL?.replace('https://', '') || '',
  clientId: process.env.AUTH0_MANAGEMENT_CLIENT_ID || '',
  clientSecret: process.env.AUTH0_MANAGEMENT_CLIENT_SECRET || '',
  scope: 'read:users create:users'
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

    // Create user in Auth0
    const user = await management.users.create({
      connection: 'Username-Password-Authentication',
      email,
      password,
      email_verified: false
    })

    return NextResponse.json({
      success: true,
      user: {
        id: user.user_id,
        email: user.email
      }
    }, {
      headers: {
        'Set-Cookie': `whispr_user=${JSON.stringify({
          id: user.user_id,
          email: user.email
        })}; Path=/; HttpOnly; SameSite=Strict`
      }
    })

  } catch (error: any) {
    console.error('Signup error:', error)
    
    if (error.message?.includes('already exists')) {
      return NextResponse.json(
        { error: 'User already exists' },
        { status: 409 }
      )
    }

    return NextResponse.json(
      { error: 'Failed to create account' },
      { status: 500 }
    )
  }
} 