import type { Metadata } from "next";
import { wispr } from "../briefs/wispr";
import { BriefArticle } from "../ui";

export const metadata: Metadata = {
  title: "Sample report: Wispr Flow (weekly)",
  description:
    "A complete research415 competitor report: the Wispr Flow teardown. Every claim sourced, every recommended move with its closing window.",
};

export default function WisprSamplePage() {
  return <BriefArticle brief={wispr} />;
}
