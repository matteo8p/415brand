import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  // Emails captured from the home page hero input.
  emailSignups: defineTable({
    email: v.string(),
    // Where the signup came from, e.g. "hero".
    source: v.string(),
  }).index("by_email", ["email"]),

  // Full submissions from the contact page form.
  contactSubmissions: defineTable({
    name: v.string(),
    email: v.string(),
    company: v.optional(v.string()),
    message: v.string(),
  }),
});
