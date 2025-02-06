// app/api/auth/signup/route.ts
import { NextResponse } from 'next/server';
import bcrypt from 'bcrypt';
import { prisma } from '@/lib/prisma';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
      role,
      organizationOption,
      joinCode,
      organizationName,
    } = body;

    // Validate password confirmation.
    if (password !== confirmPassword) {
      return NextResponse.json({ error: 'Passwords do not match' }, { status: 400 });
    }

    // Determine the organization ID.
    let organizationId: number;
    if (organizationOption === 'join') {
      if (!joinCode) {
        return NextResponse.json({ error: 'Join code is required to join an organization' }, { status: 400 });
      }
      const org = await prisma.organization.findUnique({
        where: { join_code: joinCode },
      });
      if (!org) {
        return NextResponse.json({ error: 'Invalid join code' }, { status: 400 });
      }
      organizationId = org.id;
    } else if (organizationOption === 'create') {
      if (!organizationName) {
        return NextResponse.json({ error: 'Organization name is required' }, { status: 400 });
      }
      // Generate a random join code.
      const join_code = Math.random().toString(36).substring(2, 10).toUpperCase();
      const newOrg = await prisma.organization.create({
        data: {
          name: organizationName,
          join_code,
        },
      });
      organizationId = newOrg.id;
    } else {
      return NextResponse.json({ error: 'Invalid organization option' }, { status: 400 });
    }

    // Hash the password.
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create the new user.
    const user = await prisma.user.create({
      data: {
        organizationId,
        email,
        hashed_password: hashedPassword,
        role,
        first_name: firstName,
        last_name: lastName,
      },
    });

    return NextResponse.json({ message: 'User created successfully', user }, { status: 201 });
  } catch (error: any) {
    console.error('Sign-up error:', error);
    return NextResponse.json({ error: 'Server error', details: error.message }, { status: 500 });
  }
}
