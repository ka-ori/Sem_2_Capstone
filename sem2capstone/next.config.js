// next.config.js
const withFlowbiteReact = require("flowbite-react/plugin/nextjs");

module.exports = withFlowbiteReact({
  images: {
    domains: ['encrypted-tbn0.gstatic.com'], // This allows loading external images from this domain
  },
});
