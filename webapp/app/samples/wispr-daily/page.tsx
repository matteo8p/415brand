import type { Metadata } from "next";
import { wisprDaily } from "../briefs/wispr-daily";
import { BriefArticle } from "../ui";

export const metadata: Metadata = {
  title: "Sample report: Wispr Flow (daily)",
  description:
    "A 415brand daily brief: every Wispr Flow mention on X, Reddit and LinkedIn from the last two days, plus new ads, each with what to do about it.",
};

export default function WisprDailySamplePage() {
  return <BriefArticle brief={wisprDaily} />;
}
