import { users } from "@workspace/backend/routes/users";
import { Elysia } from "elysia";

export const app = new Elysia({ prefix: "/api" }).use(users);

export type App = typeof app;
