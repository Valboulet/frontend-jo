/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: process.env.NODE_ENV === "production" ? "https" : "http",
        hostname: process.env.NODE_ENV === "production" ? "backjo2024.up.railway.app" : "localhost",
        port: process.env.NODE_ENV === "production" ? "" : "8000",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
