/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["cdn.pixabay.com", "cdn.jsdelivr.net","upload.wikimedia.org","images.unsplash.com","bit.ly","raw.githubusercontent.com","cdn.rareblocks.xyz","4achievers.in","hackr.io","icons.veryicon.com","cdn-icons-png.flaticon.com"],
    loader: "akamai",
    path: ""
  },
  basePath: "/portifilio",
  assetPrefix: "/portifilio",
  reactStrictMode: true,
  swcMinify: true,
};
if (process.env.NODE_ENV === "development") {
  console.log("info  - lanUrl:", `http://${require("address").ip()}:3000`);
}

module.exports = nextConfig;
