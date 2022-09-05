/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    allowFutureImage: true,
    domains: ["cdn.pixabay.com", "cdn.jsdelivr.net","upload.wikimedia.org","images.unsplash.com","bit.ly"],
  },
  reactStrictMode: true,
  swcMinify: true,
};
if (process.env.NODE_ENV === "development") {
  console.log("info  - lanUrl:", `http://${require("address").ip()}:3000`);
}

module.exports = nextConfig;
