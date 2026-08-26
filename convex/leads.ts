import { v } from "convex/values";
import { mutation } from "./_generated/server";

export const addEmailSignup = mutation({
  args: { email: v.string(), source: v.string() },
  handler: async (ctx, args) => {
    const existing = await ctx.db
      .query("emailSignups")
      .withIndex("by_email", (q) => q.eq("email", args.email))
      .first();
    if (existing) return existing._id;
    return await ctx.db.insert("emailSignups", args);
  },
});

export const addContactSubmission = mutation({
  args: {
    name: v.string(),
    email: v.string(),
    company: v.optional(v.string()),
    message: v.string(),
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert("contactSubmissions", args);
  },
});
