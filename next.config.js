/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  // If your repo name is not 'username.github.io', uncomment and set basePath:
  // basePath: '/Website_Portfolio',
  // assetPrefix: '/Website_Portfolio',
}

module.exports = nextConfig

