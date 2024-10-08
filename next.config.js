await import("./src/env.js");

/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,

  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  transpilePackages: ["geist"],
};

export default config;
