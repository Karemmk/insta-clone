/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["links.papareact.com",
    "https://res.cloudinary.com"]
  }
}

module.exports = nextConfig
