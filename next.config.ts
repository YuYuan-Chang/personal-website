import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  distDir: 'out',
  images: {
    unoptimized: true
  },
  basePath: '',
  outputFileTracingRoot: process.cwd(),
  experimental: {
    optimizePackageImports: ['react', 'react-dom']
  },
  reactStrictMode: true
};

export default nextConfig;
