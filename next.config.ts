import appRoutes from './src/app/routes';
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return appRoutes;
  },
};

export default nextConfig;
