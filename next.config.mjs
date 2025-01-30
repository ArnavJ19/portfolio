/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Enables static export
  basePath: '/portfolio', // Sets correct GitHub Pages subdirectory
  assetPrefix: '/portfolio/', // Fixes CSS & asset loading
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  images: { unoptimized: true }, // Fixes image optimization issues for GitHub Pages
  experimental: {
    appDir: true, // Ensures Next.js app directory works with static export
  }
};

export default nextConfig;
