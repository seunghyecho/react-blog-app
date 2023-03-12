/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true
  },
  distDir: 'build',
  eslint: {
    ignoreDuringBuilds: true
  },
  typescript: {
    ignoreBuildErrors: true
  },

  additionalData: `@import 'utils';`,
  sideEffects: true,
  env: {
    NEXT_PUBLIC_API_KEY: process.env.NEXT_PUBLIC_API_KEY
  }
};

/** TODO proxy 설정 */
const rewrites = () => {
  return [
    {
      source: '/:path*',
      destination: `http://localhost:4000/:path*`
    }
  ];
};


module.exports = { nextConfig, rewrites };
