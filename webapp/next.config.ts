import type { NextConfig } from "next";

const REPORT = "/analysis/sprag/deepgram-08-31-2026";

const nextConfig: NextConfig = {
  async redirects() {
    // The Sprag Deepgram brief moved under /analysis/<client>/ and was redated
    // twice (Aug 27 to Aug 28 to Aug 31). It was also commissioned under a
    // misspelled path. Keep every link that has already been shared working.
    const old = [
      "/analysis/deepgram-08-27-2026",
      "/analysis/deepgram-08-28-2026",
      "/analysis/deegram-08-27-2026",
      "/analysis/deegram-08-28-2026",
      "/analysis/sprag/deepgram-08-28-2026",
      "/analysis/sprag/deegram-08-28-2026",
      "/analysis/sprag/deegram-08-31-2026",
    ];
    return old.map((source) => ({ source, destination: REPORT, permanent: false }));
  },
};

export default nextConfig;
