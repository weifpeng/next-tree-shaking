/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@repo/ui"],
  // experimental: {
  //   optimizePackageImports: [
  //    '@repo/ui'
  //   ],
  // },
};


const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})
 
 
module.exports = withBundleAnalyzer(nextConfig)