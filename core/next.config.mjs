/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: process.env.NODE_ENV === "production" ? "https" : "http",
        hostname: process.env.NODE_ENV === "production" ? process.env.NEXT_PUBLIC_API_HOST.replace('https://', '').replace('http://', '') : "localhost",
        port: process.env.NODE_ENV === "production" ? "" : "8000",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;

