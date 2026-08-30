import type { Metadata } from "next";
import { viktor } from "../briefs/viktor";
import { BriefArticle } from "../ui";

export const metadata: Metadata = {
  title: "Sample report: Viktor (weekly)",
  description:
    "A complete research415 competitor report on Viktor. Every claim sourced, every recommended move with its closing window.",
};

export default function ViktorSamplePage() {
  return <BriefArticle brief={viktor} />;
}
