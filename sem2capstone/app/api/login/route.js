import { NextResponse } from 'next/server';
import db from '@/lib/db';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export async function POST(request) {
  try {
    const { email, password } = await request.json();

    // 1. Find the user by email.
    const result = await db.query('SELECT * FROM users WHERE email = $1', [email]);
    const user = result.rows[0]; // Get the first user, or undefined if not found.

    // 2. Check if a user was found. If not, the credentials are invalid.
    if (!user) {
      return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
    }

    // 3. If a user was found, now compare the provided password with the stored hash.
    const isMatch = await bcrypt.compare(password, user.password);

    // 4. Check if the passwords match. If not, the credentials are invalid.
    if (!isMatch) {
      return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
    }

    // 5. If we reach this point, the user is fully authenticated. Generate a JWT.
    const token = jwt.sign(
      { userId: user.id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    // 6. Return the success response with the token and user data.
    return NextResponse.json({
      message: 'Login successful',
      token,
      user: {
        id: user.id,
        firstname: user.firstname,
        lastname: user.lastname,
        email: user.email,
      },
    });

  } catch (error) {
    // This will catch any unexpected errors (e.g., database connection issues).
    console.error('API Login Error:', error); 
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}