import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // output: "export",
  // distDir: 'out',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ["i.ibb.co","source.unsplash.com", "t4.ftcdn.net"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
      },
    ],
  },
};

export default nextConfig;
