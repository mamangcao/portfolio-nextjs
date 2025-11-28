/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "vitejs.dev",
      },
      {
        protocol: "https",
        hostname: "ui.shadcn.com",
      },
      {
        protocol: "https",
        hostname: "headlessui.com",
      },
      {
        protocol: "https",
        hostname: "motion.dev",
      },
      {
        protocol: "https",
        hostname: "cdn.brandfetch.io",
      },
      {
        protocol: 'https',
        hostname: 'badges.strava.com',
      },
    ],
  },
};

export default nextConfig;
