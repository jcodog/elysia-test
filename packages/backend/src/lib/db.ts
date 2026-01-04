import {
  Prisma,
  PrismaClient,
} from "@workspace/backend/lib/generatedDb/client";
import { withAccelerate } from "@prisma/extension-accelerate";

// Helper to instantiate a PrismaClient extended with accelerate
function createDbClient(url: string) {
  return new PrismaClient({ accelerateUrl: url }).$extends(withAccelerate());
}
export type DbClient = ReturnType<typeof createDbClient>;

// Cache Prisma clients by their connection URL on the global object
declare global {
  var prismaClients: Record<string, DbClient> | undefined;
}

export const getDb = (databaseUrl: string): DbClient => {
  if (!databaseUrl) {
    throw new Error(
      "Missing database configuration: set ACCELERATE_URL or DATABASE_URL."
    );
  }
  if (!globalThis.prismaClients) {
    globalThis.prismaClients = {};
  }
  if (!globalThis.prismaClients[databaseUrl]) {
    globalThis.prismaClients[databaseUrl] = createDbClient(databaseUrl);
  }
  return globalThis.prismaClients[databaseUrl]!;
};

export { Prisma };
