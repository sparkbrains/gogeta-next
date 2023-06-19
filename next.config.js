/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/go',
  images: {
    domains: ['product.velomatch.dev','product.velomatch.io'],
  },
}

module.exports = nextConfig
