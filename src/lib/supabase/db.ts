import * as schema from "../../../migrations/schema";

import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as dotenv from "dotenv";
import { migrate } from "drizzle-orm/postgres-js/migrator";

dotenv.config({
  path: ".env",
});

if (!process.env.DATABASE_URL) {
  console.log("Database url not available");
}

const client = postgres(process.env.DATABASE_URL as string);
const db = drizzle(client, { schema });
const migrateDB = async () => {
  try {
    console.log("Migrating client");
    await migrate(db, {
      migrationsFolder: "migrations",
    });
    console.log("successfully migrated");
  } catch (error) {
    console.log("migration failed");
  }
};

migrateDB();

export default db;
