
/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@repo/ui"],
  experimental: {
    // optimizePackageImports: [
    //   '@repo/ui',
    // ],
  },
};


module.exports = nextConfig;

