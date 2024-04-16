/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
      domains: [
          "localhost",
          "product.hstatic.net",
          "apple.ngocnguyen.vn",
          "static.nike.com",
          "contents.mediadecathlon.com",
          "res.garmin.com",
          "giant.vn",
          "upload.wikimedia.org"
      ],
  },
};

export default nextConfig;
