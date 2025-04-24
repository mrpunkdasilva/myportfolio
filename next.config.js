/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: ['./src/styles'],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.(pdf)$/i,
      type: 'asset/resource'
    })
    return config
  }
}

module.exports = nextConfig
