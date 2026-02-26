/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false, // Security: Hide Next.js header
  compress: true, // Enable gzip compression
  images: {
    formats: ['image/avif', 'image/webp'], // Use modern formats
    minimumCacheTTL: 60,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production', // Clean logs in prod
  },
  experimental: {
    optimizePackageImports: ['lucide-react', 'motion', 'framer-motion'], // Tree shake icons/animations
  },
};

export default nextConfig;
