// app/api/auth/signin/route.ts
import { NextResponse } from 'next/server';
import bcrypt from 'bcrypt';
import { prisma } from '@/lib/prisma';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, password } = body;

    // Find the user by email using the correct model reference.
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      return NextResponse.json(
        { error: 'Invalid email or password' },
        { status: 401 }
      );
    }

    // Verify the password.
    const isValid = await bcrypt.compare(password, user.hashed_password);
    if (!isValid) {
      return NextResponse.json(
        { error: 'Invalid email or password' },
        { status: 401 }
      );
    }

    // Optionally, remove sensitive fields before returning the user object.
    const { hashed_password, ...userWithoutPassword } = user;

    return NextResponse.json(
      { message: 'Sign in successful', user: userWithoutPassword },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Sign-in error:', error?.message || error);
    return NextResponse.json(
      { error: 'Server error', details: error?.message || 'No additional error details' },
      { status: 500 }
    );
  }
}
