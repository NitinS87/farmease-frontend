/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "lh3.googleusercontent.com",
      },
      {
        hostname: "drive.google.com",
      },
      {
        hostname: "afbecgmoz6y1ka7w.public.blob.vercel-storage.com",
      },
    ],
  },
};

export default nextConfig;
