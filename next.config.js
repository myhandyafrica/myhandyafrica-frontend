/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/signup',
        destination: '/signup/hire',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig