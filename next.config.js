/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['product.velomatch.dev'],
  },
}

module.exports = nextConfig
