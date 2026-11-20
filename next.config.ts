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
    async redirects() {
        return [
            {
                source: '/who-we-are/',
                destination: '/events',
                permanent: true,
            },
        ];
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
