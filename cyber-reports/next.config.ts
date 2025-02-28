import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    domains: ["i.ibb.co","source.unsplash.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
      },
    ],
  },
};

export default nextConfig;
