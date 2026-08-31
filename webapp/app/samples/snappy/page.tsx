import type { Metadata } from "next";
import { snappy } from "../briefs/snappy";
import { BriefArticle } from "../ui";

export const metadata: Metadata = {
  title: "Sample report: Snappy (weekly)",
  description:
    "A complete research415 competitor report on Snappy, written for Goody. Every claim sourced, every recommended move ranked by impact per dollar.",
};

export default function SnappySamplePage() {
  return <BriefArticle brief={snappy} />;
}
