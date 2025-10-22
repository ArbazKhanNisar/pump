/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'ghostwhite-alligator-811158.hostingersite.com',
          pathname: '/**', // allow all image paths
        },
      ],
    },
  };

export default nextConfig;
