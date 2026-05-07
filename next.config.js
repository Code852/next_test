/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/next_test',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
