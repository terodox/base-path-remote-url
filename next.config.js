/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/andy-base-path',
  // assetPrefix: 'http://andy.test/asset-prefix',
  // assetPrefix: '/some-asset-prefix',
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com', 'source.unsplash.com', 'main.d45dn2ti2s07n.amplifyapp.com'],
  },
};

module.exports = nextConfig
