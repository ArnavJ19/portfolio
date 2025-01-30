/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Enables static export for GitHub Pages
  basePath: '/portfolio', // Ensures correct subdirectory on GitHub Pages
  assetPrefix: '/portfolio/', // Fixes missing styles, images, and fonts
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  images: { unoptimized: true }, // Fixes image loading issues on GitHub Pages
};

export default nextConfig;
