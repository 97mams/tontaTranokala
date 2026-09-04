import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  websites: defineTable({
    userId: v.string(),
    name: v.string(),
    url: v.string(),
    description: v.optional(v.union(v.string(), v.null())),
    notes: v.optional(v.union(v.string(), v.null())),
    loginEmail: v.optional(v.union(v.string(), v.null())),
    loginUsername: v.optional(v.union(v.string(), v.null())),
    loginPassword: v.optional(v.union(v.string(), v.null())),
    loginUrl: v.optional(v.union(v.string(), v.null())),
  })
    .index("by_user_creation", ["userId"]),
  history: defineTable({
    userId: v.string(),
    type: v.union(v.literal("site_added"), v.literal("site_removed")),
    websiteName: v.string(),
    websiteUrl: v.optional(v.union(v.string(), v.null())),
  })
    .index("by_user_creation", ["userId"]),
  notes: defineTable({
    userId: v.string(),
    title: v.optional(v.union(v.string(), v.null())),
    content: v.optional(v.union(v.string(), v.null())),
  })
    .index("by_user_creation", ["userId"]),
  collections: defineTable({
    userId: v.string(),
    name: v.string(),
  })
    .index("by_user_creation", ["userId"]),
});