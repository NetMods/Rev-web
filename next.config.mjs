/** @type {import('next').NextConfig} */
const nextConfig = {
  devIndicators: false,
  async rewrites() {
    return [
      {
        source: "/ingest/:path*",
        destination: `https://is.i.posthog.com/:path*`,
      },
    ];
  },
};

export default nextConfig;
