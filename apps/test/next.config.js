const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  // transpilePackages: ["@life/openai", "@life/ui", "@life/apps-chatgptweb-common"],
  experimental: {
    optimizePackageImports: [
      '@repo/ui',
     
    ],
    outputFileTracingRoot: path.join(__dirname, "../../"),
    externalDir: true,
    serverActions: true,
    serverActionsBodySizeLimit: '10mb',
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: [
        {
          loader: "@svgr/webpack",
          options: { svgo: false },
        },
      ],
    });
    config.experiments = config.experiments || {};
    config.experiments.topLevelAwait = true;
    config.experiments.asyncWebAssembly = true

    return config;
  },
  output: "standalone",
  async redirects() {
    return [
      {
        source: "/chat-gpt",
        destination: "/app/chat",
        permanent: true,
      }
    ]

  }
};


module.exports = nextConfig;

