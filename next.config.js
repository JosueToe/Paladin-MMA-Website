/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com'],
    formats: ['image/avif', 'image/webp'],
    unoptimized: false, // Enable Next.js image optimization
  },
  // Netlify uses the Next.js runtime plugin, no need for standalone
}

module.exports = nextConfig

