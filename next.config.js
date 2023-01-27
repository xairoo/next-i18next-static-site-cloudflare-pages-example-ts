/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    i18n: {
      languages: ["en", "de"],
      defaultLanguage: "en",
      namespaces: ["common", "meta", "error"],
      defaultNamespace: "common",
    },
  },
};

module.exports = nextConfig;
