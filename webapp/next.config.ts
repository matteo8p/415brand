import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // The brief was commissioned under a misspelled path. Keep that link working.
      {
        source: "/analysis/deegram-08-27-2026",
        destination: "/analysis/deepgram-08-27-2026",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
