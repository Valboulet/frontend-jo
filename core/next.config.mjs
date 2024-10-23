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


// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     remotePatterns: [
//       {
//         protocol:'http',
//         hostname: 'localhost',
//         port: '8000',
//         pathname: "/**",
//       },
//     ],
//   },
// };

// export default nextConfig;


