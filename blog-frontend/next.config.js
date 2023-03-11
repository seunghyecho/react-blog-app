const path = require;
/** @type {import('next').NextConfig} */
const nextConfig = {

  reactStrictMode: true,
  images: {
    domains: ['yonhapnewstv-prod.s3.ap-northeast-2.amazonaws.com'],
  },
  compiler: {
    styledComponents: true,
  },
  webpack: (config) => {
    config.resolve.alias["@"] = path.join(__dirname, "src");
    return config;
  },
  distDir: "build",
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  sassOptions: {
    includePaths: [path.appSrc + "/styles/lib"],
  },
  additionalData: `@import 'utils';`,
  sideEffects: true,
  env: {
    NEXT_PUBLIC_API_KEY: process.env.NEXT_PUBLIC_API_KEY,
  },
};

module.exports = { nextConfig };
