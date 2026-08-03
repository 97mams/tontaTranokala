import { v } from "convex/values";
import { mutation } from "./_generated/server.js";
import { authComponent, createAuth } from "./auth.js";

export const updateUserPassword = mutation({
  args: {
    currentPassword: v.string(),
    newPassword: v.string(),
  },
  handler: async (ctx, args) => {
    const { auth, headers } = await authComponent.getAuth(createAuth, ctx);
    await auth.api.changePassword({
      body: {
        currentPassword: args.currentPassword,
        newPassword: args.newPassword,
      },
      headers,
    });
  },
});

export const createUser = mutation({
  args:{
    name: v.string(),
    email: v.string(),
    password: v.string()
  },
  handler: async (ctx, args) => {

  }
})