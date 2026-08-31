import type { Metadata } from "next";
import { wisprCloudless } from "../../../samples/briefs/wispr-cloudless";
import { BriefArticle } from "../../../samples/ui";

export const metadata: Metadata = {
  title: "Wispr Flow weekly brief for Cloudless, August 31, 2026",
  description:
    "Wispr Flow raised $280M and its free plan now bundles a notetaker and uncapped Android dictation. What that takes away from Cloudless, why 48% of complaints about Wispr are the ones Cloudless cannot win, and the four moves to make this week. Every claim sourced.",
};

export default function CloudlessWeeklyPage() {
  return <BriefArticle brief={wisprCloudless} />;
}
