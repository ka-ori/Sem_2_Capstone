import { NextResponse } from 'next/server';
import db from '@/lib/db';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export async function POST(request) {
  try {
    const { firstname, lastname, email, password } = await request.json();

    
    if (!firstname || !lastname || !email || !password || password.length < 6) {
      return NextResponse.json({ error: 'All fields are required and password must be at least 6 characters.' }, { status: 400 });
    }

    
    const checkResult = await db.query('SELECT * FROM users WHERE email = $1', [email]);
    if (checkResult.rows.length > 0) {
      return NextResponse.json({ error: 'User already exists with this email' }, { status: 400 });
    }

    
    const hashedPassword = await bcrypt.hash(password, 10);
    
    
    
    const insertResult = await db.query(
      'INSERT INTO users (firstname, lastname, email, password) VALUES ($1, $2, $3, $4) RETURNING id, firstname, lastname, email',
      [firstname, lastname, email, hashedPassword]
    );
    const newUser = insertResult.rows[0];

    
    const token = jwt.sign(
      { userId: newUser.id, email: newUser.email },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    
    return NextResponse.json({ 
      message: 'User created successfully', 
      token, 
      user: newUser 
    }, { status: 201 });

  } catch (error) {
    
    console.error('API Signup Error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
