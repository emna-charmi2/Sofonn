import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "assets.website-files.com",
        pathname: "/**", // autorise tous les chemins sous ce domaine
      },
    ],
  },
};

export default nextConfig;