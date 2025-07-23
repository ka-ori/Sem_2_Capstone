// ... imports ...
export async function POST(request) {
  try {
    const { firstname, lastname, email, password } = await request.json();
    // ... validation ...

    // Use $1 as the placeholder for Postgres
    const result = await db.query('SELECT email FROM users WHERE email = $1', [email]);
    
    // CHANGE IS HERE: Access the 'rows' property.
    const existingUsers = result.rows;

    if (existingUsers.length > 0) {
      return NextResponse.json({ error: 'User already exists with this email' }, { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    
    // Use $1, $2, $3, $4 for Postgres placeholders
    await db.query(
      'INSERT INTO users (firstname, lastname, email, password) VALUES ($1, $2, $3, $4)',
      [firstname, lastname, email, hashedPassword]
    );

    return NextResponse.json({ message: 'User created successfully' }, { status: 201 });
  } catch (error) { /* ... */ }
}