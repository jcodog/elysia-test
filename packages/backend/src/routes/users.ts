import { getDb } from "@workspace/backend/lib/db";
import { Elysia, t } from "elysia";

const DATABASE_URL = process.env.ACCELERATE_URL ?? process.env.DATABASE_URL;

if (!DATABASE_URL) {
  throw new Error("Missing database configuration");
}

export const users = new Elysia({ prefix: "/users" })
  .get(
    "/find",
    async ({ query }) => {
      const db = getDb(DATABASE_URL);
      const user = await db.user.findFirst({
        where: {
          name: query.name,
        },
      });

      return {
        user,
      };
    },
    {
      query: t.Object({
        name: t.String(),
      }),
    }
  )
  .post(
    "/create",
    ({ body }) => {
      console.log(body);
      return {
        userCreated: body.name,
      };
    },
    {
      body: t.Object({
        name: t.String(),
      }),
    }
  );
