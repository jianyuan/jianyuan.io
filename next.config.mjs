import { withContentlayer } from "next-contentlayer";

/** @type {import('next').NextConfig} */
const nextConfig = {
  rewrites: async () => [
    {
      source: "/ingest/:path*",
      destination: "https://app.posthog.com/:path*",
    },
  ],
};

export default withContentlayer(nextConfig);
