import { config } from "dotenv";
import path from "node:path";
import { mkdirSync } from "node:fs";
import { spawn } from "node:child_process";

// Load environment variables from the web app's .env file
config({
  path: path.resolve(process.cwd(), "../../apps/web/.env"),
});

// Ensure the database package's prisma directory exists
const dbPrismaDir = path.resolve(
  process.cwd(),
  "../../packages/database/prisma"
);
mkdirSync(dbPrismaDir, { recursive: true });

// Set environment variable to tell better-auth where to output the schema
const env = {
  ...process.env,
  PRISMA_SCHEMA_PATH: path.resolve(
    process.cwd(),
    "../../packages/database/prisma/schema.prisma"
  ),
};

const child = spawn("bunx", ["@better-auth/cli", "generate", "--yes"], {
  stdio: "inherit",
  env,
  cwd: process.cwd(),
});

child.on("exit", (code) => {
  process.exit(code ?? 0);
});
