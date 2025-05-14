/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "logo.clearbit.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "openai.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "pbs.twimg.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "s3-eu-west-1.amazonaws.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "yt3.googleusercontent.com",
        pathname: "**",
      },
    ],
  },
};

module.exports = nextConfig;