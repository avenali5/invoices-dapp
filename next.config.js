/** @type {import('next').NextConfig} */
const nextConfig = {
  exportPathMap: function () {
    return {
      "/": { page: "/invoices" },
    };
  },
};

module.exports = nextConfig;
