const path = require;
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
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
    includePaths: [path.appSrc + "/styles/utils"],
  },
  additionalData: `@import 'utils';`,
  sideEffects: true,
};

module.exports = { nextConfig };
