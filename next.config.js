const netlifyNext = require("@netlify/next");
console.log(netlifyNext);

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "static.noroff.dev",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
