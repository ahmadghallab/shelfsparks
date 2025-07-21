import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactComponentAnnotation: {
    enabled: process.env.NODE_ENV === 'development',
  }
};

export default nextConfig;
