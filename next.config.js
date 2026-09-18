/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: false,
  images: {
    unoptimized: true,
  },
  // Vercel optimization
  poweredByHeader: false,
  compress: true,
};

module.exports = nextConfig;