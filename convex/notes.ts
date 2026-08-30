import { ConvexError, v } from "convex/values";
import { mutation, query } from "./_generated/server";
import { authComponent } from "./auth";

export const add = mutation({
  args: {
    title: v.optional(v.union(v.string(), v.null())),
    content: v.optional(v.union(v.string(), v.null())),
  },
  handler: async (ctx, args) => {
    const user = await authComponent.safeGetAuthUser(ctx);
    if (!user) {
      throw new ConvexError("Vous devez être connecté");
    }
    return await ctx.db.insert("notes", {
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
      .query("notes")
      .withIndex("by_user_creation", (q) => q.eq("userId", user._id))
      .order("desc")
      .collect();
  },
});

export const remove = mutation({
  args: { id: v.id("notes") },
  handler: async (ctx, { id }) => {
    const user = await authComponent.safeGetAuthUser(ctx);
    if (!user) {
      throw new ConvexError("Vous devez être connecté");
    }
    const note = await ctx.db.get(id);
    if (!note || note.userId !== user._id) {
      throw new ConvexError("Note introuvable");
    }
    await ctx.db.delete(id);
  },
});