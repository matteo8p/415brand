import type { Metadata } from "next";
import { openrouter } from "../briefs/openrouter";
import { BriefArticle } from "../ui";

export const metadata: Metadata = {
  title: "Sample report: OpenRouter (weekly)",
  description:
    "A complete research415 competitor report on OpenRouter, written for Experiential Labs. Every claim sourced, every recommended move with the evidence behind it.",
};

export default function OpenRouterSamplePage() {
  return <BriefArticle brief={openrouter} />;
}
