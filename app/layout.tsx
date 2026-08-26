import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import Link from "next/link";
import { CONTACT } from "@/lib/site";
import { Providers } from "./providers";
import { SiteNav } from "./site-nav";
import "./globals.css";

const wordmarkFont = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-wordmark",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://415brand.com"),
  title: {
    default: "415brand · Competitor reports",
    template: "%s · 415brand",
  },
  description:
    "415brand reads your competitor's ads, search rankings, pricing, hiring and customer complaints, then sends you a finished report with ranked moves.",
  alternates: { canonical: "/" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={wordmarkFont.variable}>
      <body>
        <header className="site">
          <div className="wrap site-inner">
            <Link href="/" className="wordmark">
              415brand
            </Link>
            <SiteNav />
          </div>
        </header>
        <Providers>{children}</Providers>
        <footer className="site">
          <div className="wrap cols two">
            <div>
              <p style={{ marginBottom: 0 }}>
                <b>415brand</b> · <a href={`mailto:${CONTACT}`}>{CONTACT}</a>
              </p>
            </div>
            <div>
              <p style={{ marginBottom: 0 }}>
                Competitor names and prices on this site come from public sources and may have changed. Trademarks
                belong to their owners. 415brand is not affiliated with any company it analyzes.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
