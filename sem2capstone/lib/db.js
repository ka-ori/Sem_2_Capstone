// File: /lib/db.js
import { Pool } from 'pg'; // Import the Pool object from the 'pg' library

// The Vercel/Neon integration automatically sets the POSTGRES_URL environment variable.
// The 'pg' library is smart and will automatically use this variable to connect.
const pool = new Pool({
  connectionString: process.env.POSTGRES_URL,
  ssl: {
    // This is required for connecting to Neon databases.
    rejectUnauthorized: false 
  }
});

// We export the pool so our API routes can use it to run queries.
export default pool;