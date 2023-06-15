/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['product.velomatch.dev','product.velomatch.io'],
  },
}

module.exports = nextConfig
