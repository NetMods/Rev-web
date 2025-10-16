/** @type {import('next').NextConfig} */
const nextConfig = {
  devIndicators: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placewaifu.com",
        port: "",
        pathname: "/image/**",
        search: "",
      },
    ],
  },
};

export default nextConfig;
