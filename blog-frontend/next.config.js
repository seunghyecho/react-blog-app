/**
 * @type {import('next').NextConfig}
 */
const path = require('path');

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  distDir: 'build',
  compiler: {
    styledComponents: true
  },
  env: {
    NEXT_PUBLIC_API_KEY: process.env.NEXT_PUBLIC_API_KEY
  },
  webpack: config => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.join(__dirname, 'src'),
      '@assets': path.join(__dirname, 'public/assets'),
    };
    return config;
  },
};



module.exports = {
  nextConfig,
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: `http://localhost:4000/:path*`
      },
    ]
  },
}
