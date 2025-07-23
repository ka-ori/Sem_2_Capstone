import { NextResponse } from 'next/server';
import db from '@/lib/db';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export async function POST(request) {
  try {
    const { firstname, lastname, email, password } = await request.json();

    // 1. Server-side validation.
    if (!firstname || !lastname || !email || !password || password.length < 6) {
      return NextResponse.json({ error: 'All fields are required and password must be at least 6 characters.' }, { status: 400 });
    }

    // 2. Check if a user with that email already exists.
    const checkResult = await db.query('SELECT * FROM users WHERE email = $1', [email]);
    if (checkResult.rows.length > 0) {
      return NextResponse.json({ error: 'User already exists with this email' }, { status: 400 });
    }

    // 3. If the user is new, hash their password.
    const hashedPassword = await bcrypt.hash(password, 10);
    
    // 4. Insert the new user and use the 'RETURNING' clause to get their data back in one step.
    // This is more efficient than a separate SELECT query.
    const insertResult = await db.query(
      'INSERT INTO users (firstname, lastname, email, password) VALUES ($1, $2, $3, $4) RETURNING id, firstname, lastname, email',
      [firstname, lastname, email, hashedPassword]
    );
    const newUser = insertResult.rows[0];

    // 5. Generate a JWT for the new user so they can be logged in automatically.
    const token = jwt.sign(
      { userId: newUser.id, email: newUser.email },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    // 6. Return the success response with the token and user data.
    return NextResponse.json({ 
      message: 'User created successfully', 
      token, 
      user: newUser 
    }, { status: 201 });

  } catch (error) {
    // This will catch any unexpected errors.
    console.error('API Signup Error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}