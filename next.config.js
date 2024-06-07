const { parsed: env } = require("dotenv").config();
/** @type {import('next').NextConfig} */
const { i18n } = require("./next-i18next.config");
let apiUrl =
  process.env.API_BASE_NODE_ENV === "DEV"
    ? process.env.API_BASE_URL_DEV
    : process.env.API_BASE_NODE_ENV === "STAGE"
    ? process.env.API_BASE_URL_STAGE
    : process.env.API_BASE_URL_PROD;
const nextConfig = {
  experimental: {
    appDir: true,
  },
  reactStrictMode: false,
  swcMinify: true,
  i18n,
  env: {
    API_URL: apiUrl,
    INSTAMOJO_API_KEY: env.INSTAMOJO_API_KEY,
    INSTAMOJO_AUTH_TOKEN: env.INSTAMOJO_AUTH_TOKEN,
    // DEBUG: env.DEBUG,
    // Add other variables from .env here as needed
  },
  // compiler: {
  //   removeConsole: process.env.API_BASE_NODE_ENV === "DEV",
  // },
};

module.exports = nextConfig;
