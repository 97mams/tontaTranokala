import { ConvexError, v } from "convex/values";
import { mutation, query } from "./_generated/server";
import { authComponent } from "./auth";

export const add = mutation({
  args: {
    name: v.string(),
    url: v.string(),
    description: v.optional(v.union(v.string(), v.null())),
    notes: v.optional(v.union(v.string(), v.null())),
    loginEmail: v.optional(v.union(v.string(), v.null())),
    loginUsername: v.optional(v.union(v.string(), v.null())),
    loginPassword: v.optional(v.union(v.string(), v.null())),
    loginUrl: v.optional(v.union(v.string(), v.null())),
  },
  handler: async (ctx, args) => {
    const user = await authComponent.safeGetAuthUser(ctx);
    if (!user) {
      throw new ConvexError("Vous devez être connecté");
    }
    return await ctx.db.insert("websites", { userId: user._id, ...args });
  },
});

export const list = query({
  args: {},
  handler: async (ctx) => {
    const user = await authComponent.safeGetAuthUser(ctx);
    if (!user) {
      return [];
    }
    return await ctx.db
      .query("websites")
      .withIndex("by_user_creation", (q) => q.eq("userId", user._id))
      .order("desc")
      .collect();
  },
});

export const remove = mutation({
  args: { id: v.id("websites") },
  handler: async (ctx, { id }) => {
    const user = await authComponent.safeGetAuthUser(ctx);
    if (!user) {
      throw new ConvexError("Vous devez être connecté");
    }
    const website = await ctx.db.get(id);
    if (!website || website.userId !== user._id) {
      throw new ConvexError("Site introuvable");
    }
    await ctx.db.delete(id);
  },
});