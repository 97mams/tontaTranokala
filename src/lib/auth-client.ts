import { createAuthClient } from "better-auth/react";
import { convexClient } from "@convex-dev/better-auth/client/plugins";
import { admin } from "better-auth/plugins";
import { tanstackStartCookies } from "better-auth/tanstack-start";

export const authClient = createAuthClient({
  plugins: [convexClient(), admin(),tanstackStartCookies()],
});
