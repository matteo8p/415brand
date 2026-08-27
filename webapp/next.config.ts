import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Reports moved to /analysis/<client>/<competitor>-<date>. The brief was also
      // commissioned under a misspelled path and redated from Aug 27 to Aug 28.
      // Keep every link that has already been shared working.
      {
        source: "/analysis/deepgram-08-28-2026",
        destination: "/analysis/sprag/deepgram-08-28-2026",
        permanent: false,
      },
      {
        source: "/analysis/deepgram-08-27-2026",
        destination: "/analysis/sprag/deepgram-08-28-2026",
        permanent: false,
      },
      {
        source: "/analysis/deegram-08-27-2026",
        destination: "/analysis/sprag/deepgram-08-28-2026",
        permanent: false,
      },
      {
        source: "/analysis/deegram-08-28-2026",
        destination: "/analysis/sprag/deepgram-08-28-2026",
        permanent: false,
      },
      {
        source: "/analysis/sprag/deegram-08-28-2026",
        destination: "/analysis/sprag/deepgram-08-28-2026",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
