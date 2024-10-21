/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol:'https',
        hostname: 'backjo2024.up.railway.app',
        port: '',
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;

