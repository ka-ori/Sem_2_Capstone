// ... imports ...
export async function POST(request) {
  try {
    const { email, password } = await request.json();

    // The query is the same, but the result format is different.
    // Note the use of $1 instead of ? for parameterized queries in Postgres.
    const result = await db.query('SELECT * FROM users WHERE email = $1', [email]);
    
    // CHANGE IS HERE: Access the 'rows' property.
    const users = result.rows; 

    if (users.length === 0) {
      return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
    }

    const user = users[0];
    
    // ... rest of the login logic is exactly the same ...
  } catch (error) { /* ... */ }
}