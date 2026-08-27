import type { ReactNode } from "react";
import "../samples/analysis.css";

export default function AnalysisLayout({ children }: { children: ReactNode }) {
  return <div className="analysis">{children}</div>;
}
