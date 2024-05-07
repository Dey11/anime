/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "gogocdn.net",
        port: "",
        pathname: "/*/**",
      },
    ],
  },
};
// https://gogocdn.net/cover/jujutsu-kaisen-0.png
export default nextConfig;
