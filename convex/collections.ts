import { ConvexError, v } from "convex/values";
import { mutation, query } from "./_generated/server";
import { authComponent } from "./auth";

export const add = mutation({
  args: { name: v.string() },
  handler: async (ctx, { name }) => {
    const user = await authComponent.safeGetAuthUser(ctx);
    if (!user) {
      throw new ConvexError("Vous devez être connecté");
    }
    return await ctx.db.insert("collections", {
      userId: user._id,
      name,
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
      .query("collections")
      .withIndex("by_user_creation", (q) => q.eq("userId", user._id))
      .order("desc")
      .collect();
  },
});

export const remove = mutation({
  args: { id: v.id("collections") },
  handler: async (ctx, { id }) => {
    const user = await authComponent.safeGetAuthUser(ctx);
    if (!user) {
      throw new ConvexError("Vous devez être connecté");
    }
    const collection = await ctx.db.get(id);
    if (!collection || collection.userId !== user._id) {
      throw new ConvexError("Collection introuvable");
    }
    await ctx.db.delete(id);
  },
});