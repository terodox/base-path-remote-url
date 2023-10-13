/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/andy-base-path',
  // assetPrefix: 'http://andy.test/asset-prefix',
  // assetPrefix: '/some-asset-prefix',
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com', 'source.unsplash.com', 'skylark-doc.s3.ca-central-1.amazonaws.com'],
  },
};

module.exports = nextConfig
