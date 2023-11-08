/** @type {import('next').NextConfig} */

module.exports = {
  publicRuntimeConfig: {
    assetPrefix: process.env.NODE_ENV === "production" ? "/narassea" : "",
  },
};
