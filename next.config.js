/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  assetPrefix: ".",
  images: {
    domains: ['product.velomatch.dev'],
  },
}

module.exports = nextConfig
