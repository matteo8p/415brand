import type { ReactNode } from "react";
import "./analysis.css";

export default function SampleLayout({ children }: { children: ReactNode }) {
  return <div className="analysis">{children}</div>;
}
