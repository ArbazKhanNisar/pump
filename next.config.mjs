// ...existing code...
/** @type {import('next').NextConfig} */
const MAINTENANCE_MODE =  "1";
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

  async redirects() {
    return [
      MAINTENANCE_MODE === "1"
        ? { source: "/((?!maintenance).*)", destination: "/maintenance.html", permanent: false }
        : null,
    ].filter(Boolean);
  },
};

export default nextConfig;
// ...existing code...
