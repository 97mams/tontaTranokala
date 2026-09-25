import { ConvexError, v } from "convex/values";
import { mutation, query } from "./_generated/server";
import { authComponent } from "./auth";

export const add = mutation({
  args: {
    name: v.string(),
  },
  handler: async (ctx, args) => {
    const user = await authComponent.safeGetAuthUser(ctx);
    if (!user) {
      throw new ConvexError("Vous devez être connecté");
    }
    return await ctx.db.insert("groups", {
      userId: user._id,
      ...args,
    });
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
      .query("groups")
      .withIndex("by_user_creation", (q) => q.eq("userId", user._id))
      .order("desc")
      .collect();
  },
});

export const remove = mutation({
  args: { id: v.id("groups") },
  handler: async (ctx, { id }) => {
    const user = await authComponent.safeGetAuthUser(ctx);
    if (!user) {
      throw new ConvexError("Vous devez être connecté");
    }
    const group = await ctx.db.get(id);
    if (!group || group.userId !== user._id) {
      throw new ConvexError("Groupe introuvable");
    }
    await ctx.db.delete(id);
  },
});