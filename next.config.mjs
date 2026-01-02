// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
  
//   // Disable source maps in development
//   productionBrowserSourceMaps: false,
  
//   // Empty Turbopack config to resolve the warning
//   turbopack: {},
//     devIndicators: false,

//   // Webpack configuration (will be ignored when using Turbopack)
//   webpack: (config, { dev }) => {
//     if (dev) {
//       config.devtool = false;
//     }
//     return config;
//   }
// };

// export default nextConfig;
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Disable browser source maps
  productionBrowserSourceMaps: false,

  // Disable build activity indicator
  devIndicators: false,

  // Empty Turbopack config to silence warnings
  turbopack: {},

  // Webpack configuration (ignored when using Turbopack)
  webpack: (config, { dev }) => {
    if (dev) {
      config.devtool = false;
    }
    return config;
  },
};

export default nextConfig;
