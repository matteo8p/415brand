import type { Metadata } from "next";
import { wispr } from "../briefs/wispr";
import { BriefArticle } from "../ui";

export const metadata: Metadata = {
  title: "Sample report: Wispr Flow",
  description:
    "A complete 415brand competitor report: the Wispr Flow teardown. Every claim sourced, every recommended move with its closing window.",
};

export default function WisprSamplePage() {
  return <BriefArticle brief={wispr} />;
}
