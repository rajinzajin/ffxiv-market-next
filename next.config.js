/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ['rajinzajin.github.io'],
  },
  webpack: (config) => {
    config.experiments = {
      topLevelAwait: true,
    }
    return config
  }
}

module.exports = nextConfig
