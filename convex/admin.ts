import { ConvexError, v } from "convex/values";
import { mutation, query } from "./_generated/server";
import { authClient } from "@/lib/auth-client.ts";

export const getusers = query({
    args: {},
    handler: async () => {
        return await authClient.listAccounts();
    }
})