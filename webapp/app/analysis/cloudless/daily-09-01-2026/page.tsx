import type { Metadata } from "next";
import { wisprCloudlessDaily } from "../../../samples/briefs/wispr-cloudless-daily-09-01";
import { BriefArticle } from "../../../samples/ui";

export const metadata: Metadata = {
  title: "Wispr Flow daily brief for Cloudless, September 1, 2026",
  description:
    "Nine people said Wispr Flow got worse in three days and three named where they went. Two people asked out loud for an offline replacement. Plus a swipe file of the Wispr ads and creator posts that actually work, each one linked, with what to brief your ad manager and your creators.",
};

export default function CloudlessDailyPage() {
  return <BriefArticle brief={wisprCloudlessDaily} />;
}
