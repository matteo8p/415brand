import type { Metadata } from "next";
import { opentagLeads } from "../../../samples/briefs/opentag-leads";
import { BriefArticle } from "../../../samples/ui";

export const metadata: Metadata = {
  title: "Competitor leads brief for OpenTag, August 28, 2026",
  description:
    "Fourteen named people paying for Claude Tag who complained about the bill or asked what to switch to, what each one said, and what OpenTag should reply. Every row links to the post.",
};

export default function OpenTagLeadsPage() {
  return <BriefArticle brief={opentagLeads} />;
}
