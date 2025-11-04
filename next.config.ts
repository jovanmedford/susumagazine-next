import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [new URL("http://susu.flywheelsites.com/**")]
  }
};

export default nextConfig;
