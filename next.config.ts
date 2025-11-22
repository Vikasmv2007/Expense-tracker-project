import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true, // Set to false in production for better error checking
  },
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true, // Set to false in production for better error checking
  },
  output: 'standalone',
};

export default nextConfig;
