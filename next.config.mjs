/** @type {import('next').NextConfig} */
const nextConfig = {
   images: {
      remotePatterns: [
         {
            protocol: 'https',
            hostname: 'cdsassets.apple.com',
         },
      ],
   },
}

export default nextConfig
