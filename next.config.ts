import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["local-origin.dev", "*.local-oringin.dev"],
  experimental: {
    authInterrupts: true,
  },
};

export default nextConfig;
