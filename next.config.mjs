/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'vitejs.dev',
      },
      {
        protocol: 'https',
        hostname: 'headlessui.com',
      },
      {
        protocol: 'https',
        hostname: 'motion.dev',
      },
    ],
  },
};

export default nextConfig;
