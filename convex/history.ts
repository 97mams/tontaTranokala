import { query } from "./_generated/server";
import { authComponent } from "./auth";

export const list = query({
  args: {},
  handler: async (ctx) => {
    const user = await authComponent.safeGetAuthUser(ctx);
    if (!user) {
      return [];
    }
    return await ctx.db
      .query("history")
      .withIndex("by_user_creation", (q) => q.eq("userId", user._id))
      .order("desc")
      .collect();
  },
});