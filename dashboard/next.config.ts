import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  webpackDevMiddleware: (config: {
      watchOptions: {
        poll: number; // Check for changes every second
        aggregateTimeout: number; // Delay before rebuilding
      };
    }) => {
    // Solve compiling problem via vagrant / docker / wsl2
    config.watchOptions = {
      poll: 1000,           // Check for changes every second
      aggregateTimeout: 300 // Delay before rebuilding
    };
    return config;
  },
  // You can add other config options here
};

export default nextConfig;