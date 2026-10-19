import { ConvexError, v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const getusers = query({
    args: {},
    handler: async (ctx) => {
        return ctx.db.query('')
    }
})