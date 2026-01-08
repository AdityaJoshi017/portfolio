// import type { NextConfig } from "next";
// import path from 'path';

// const nextConfig: NextConfig = {
//   devIndicators: false,

//   webpack: (config) => {
//     config.resolve.alias = {
//       ...config.resolve.alias,
//       '@': path.resolve(__dirname, './src'),
//     };
//     return config;
//   },
// };
// devIndicators:false;
// export default nextConfig;
import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // Disable build activity indicator
  devIndicators: false,

  // Alias: @ -> src
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": path.resolve(__dirname, "src"),
    };
    return config;
  },
};

export default nextConfig;
