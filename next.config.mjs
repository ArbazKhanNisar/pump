/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'admin.inventomaticseals.com',
          pathname: '/**', // allow all image paths
        },
      ],
    },
  };

export default nextConfig;
