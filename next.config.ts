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
   turbopack: {
    root: "C:/Users/msi/Desktop/Stage PFE/Sofonn2",
  },
};

export default nextConfig;