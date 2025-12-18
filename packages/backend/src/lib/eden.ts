import { treaty } from "@elysiajs/eden";
import type { App } from "@workspace/backend/elysia";

const baseUrl =
  (typeof window === "undefined"
    ? process.env.EDEN_SERVER_URL
    : process.env.NEXT_PUBLIC_EDEN_SERVER_URL) ?? "localhost:3000";

export const client = treaty<App>(baseUrl).api;
