import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    reactStrictMode: true,
    devIndicators: {},
    eslint: {
        ignoreDuringBuilds: true
    },
    images: {
        remotePatterns: [
            { protocol: "https", hostname: "images.unsplash.com" },
            { protocol: "https", hostname: "storage.googleapis.com" }
        ],

    },
    webpack: (config) => {
        config.module.rules.push({ test: /\.node/, use: "raw-loader" });
        return config;
    },
    turbopack: {
        resolveAlias: {
            canvas: './src/empty-module.ts'
        },
    },
    env: {
        DEV: ''
    }
};

export default nextConfig;
