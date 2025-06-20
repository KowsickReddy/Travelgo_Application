import { defineConfig } from "drizzle-kit";

// You can keep this check, or comment it out for testing this specific issue
// if (!process.env.DATABASE_URL) {
//   throw new Error("DATABASE_URL, ensure the database is provisioned");
// }

export default defineConfig({
  out: "./migrations",
  schema: "./shared/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    host: "localhost", // <-- CHANGE THIS LINE
    port: 5432,        // <-- ADD THIS LINE
    user: "postgres",  // <-- ADD THIS LINE
    password: "superuser", // <-- ADD THIS LINE (Use your actual postgres user password)
    database: "travelgo_db", // <-- ADD THIS LINE
    ssl:false,
  },
});