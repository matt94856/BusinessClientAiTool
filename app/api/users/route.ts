import { NextRequest, NextResponse } from 'next/server';
import { getUsers, getUser, createUser, updateUser, deleteUser } from '@/app/lib/auth0-management';

// GET /api/users - Get all users
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page') || '0');
    const perPage = parseInt(searchParams.get('perPage') || '100');

    const users = await getUsers(page, perPage);
    
    return NextResponse.json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    return NextResponse.json(
      { error: 'Failed to fetch users' },
      { status: 500 }
    );
  }
}

// POST /api/users - Create a new user
export async function POST(request: NextRequest) {
  try {
    const userData = await request.json();
    
    const user = await createUser(userData);
    
    return NextResponse.json(user, { status: 201 });
  } catch (error) {
    console.error('Error creating user:', error);
    return NextResponse.json(
      { error: 'Failed to create user' },
      { status: 500 }
    );
  }
} 