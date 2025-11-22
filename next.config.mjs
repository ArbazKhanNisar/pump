/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'admin.inventomaticseals.com',
          pathname: '/**', 
        },
      ],
    },
  };

export default nextConfig;
