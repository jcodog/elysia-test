import { getDb } from "@workspace/backend/lib/db";
import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";

const databaseUrl = process.env.ACCELERATE_URL ?? process.env.DATABASE_URL;

if (!databaseUrl) {
  throw new Error("Auth config error: set ACCELERATE_URL or DATABASE_URL");
}

const db = getDb(databaseUrl);

export const auth = betterAuth({
  database: prismaAdapter(db, {
    provider: "postgresql",
  }),
  emailAndPassword: {
    enabled: true,
  },
});
