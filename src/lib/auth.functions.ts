// lib/auth.functions.ts
import { createServerFn } from "@tanstack/react-start";
import { getRequestHeaders } from "@tanstack/react-start/server";
import { authClient } from "@/lib/auth-client";

export const getUsersList = createServerFn({ method: "GET" })
  .validator((data?: { limit?: number; offset?: number; search?: string }) => data)
  .handler(async ({ data }) => {
    const headers = getRequestHeaders();

    // Appel à l'API interne Better Auth
    const result = await authClient.api.listUsers({
      headers,
      query: {
        limit: data?.limit ?? 20,
        offset: data?.offset ?? 0,
        searchValue: data?.search,
      },
    });

    return result;
  });