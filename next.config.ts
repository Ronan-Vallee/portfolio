import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    RESEND_API_KEY: process.env.RESEND_API_KEY,
    RECIPIENT_EMAIL: process.env.RECIPIENT_EMAIL,
  }
};

export default nextConfig;
