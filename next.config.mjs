/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Enables static site export
  basePath: '/portfolio', // Ensures correct subdirectory for GitHub Pages
  assetPrefix: '/portfolio/', // Fixes missing assets
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  images: { unoptimized: true }, // Prevents Next.js Image Optimization issues
};

export default nextConfig;
