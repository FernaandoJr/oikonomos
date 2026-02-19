import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactCompiler: true,
  devIndicators: { position: 'bottom-right' },
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
};

export default nextConfig;
