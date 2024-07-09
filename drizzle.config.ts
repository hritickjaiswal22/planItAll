import type { Config } from "drizzle-kit";
import { defineConfig } from "drizzle-kit";
import * as dotenv from "dotenv";

dotenv.config({
  path: ".env",
});

if (!process.env.DATABASE_URL) {
  console.log("Database url not available");
}

export default defineConfig({
  dialect: "postgresql",
  schema: "./src/lib/supabase/schema.ts",
  out: "./migrations",
  dbCredentials: {
    url: process.env.DATABASE_URL || "",
  },
});
