const runtimeCaching = require("next-pwa/cache");
const withImages = require('next-images');
const withPWA = require("next-pwa")({
  disable: process.env.NODE_ENV === "development",
  dest: "public",
  runtimeCaching,
});

module.exports = withPWA({
  images: {
    domains: [
      "http://localhost:3000/",
    ],
  },
  env: {
    API_ENDPOINT: process.env.API_ENDPOINT,
  },
},
  withImages()
);

