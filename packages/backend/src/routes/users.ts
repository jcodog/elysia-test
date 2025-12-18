import { Elysia, t } from "elysia";

export const users = new Elysia({ prefix: "/users" })
  .get(
    "/find",
    ({ query }) => {
      console.log(`finding user: ${query.name}`);
      return {
        nameFound: query.name,
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
