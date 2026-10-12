import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export', // 静的ビルド用設定
  images: {unoptimized: true},
  //assetPrefix: './',
  basePath: "",
};

export default nextConfig;
