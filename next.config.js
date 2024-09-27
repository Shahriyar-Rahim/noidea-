/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {
      bodySizeLimit: "6mb",
    },
  },
  images: {
    remotePatterns: [
    {
      protocol: "https",
      hostname: "res.cloudinary.com",
    }
    ]//domains: ["res.cloudinary.com"],
  }
  
};

module.exports = nextConfig;
