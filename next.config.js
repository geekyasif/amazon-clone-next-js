/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["links.papareact.com", "fakestoreapi.com", "pngimg.com", "m.media-amazon.com", "images-eu.ssl-images-amazon.com"]
  }
}

module.exports = nextConfig
