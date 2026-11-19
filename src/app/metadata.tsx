import { metadataKeywords, siteConfig } from '@/_data/site-config';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: {
        default: siteConfig.name,
        template: `%s - ${siteConfig.name}`,
    },
    metadataBase: new URL(siteConfig.url),
    description: siteConfig.description,
    keywords: metadataKeywords,
    authors: [
        {
            name: siteConfig.author,
            url: siteConfig.url,
        },
    ],
    icons: {
        icon: [
            {
                url: '/images/fav/favicon-96x96.png',
                sizes: '96x96',
                type: 'image/png',
            },
            { url: '/images/fav/favicon.svg', type: 'image/svg+xml' },
            { url: '/images/fav/favicon.ico', type: 'image/x-icon' },
        ],
        shortcut: '/images/fav/favicon.ico',
        apple: [{ url: '/images/fav/apple-touch-icon.png', sizes: '180x180' }],
    },
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: siteConfig.url,
        title: siteConfig.name,
        description: siteConfig.description,
        siteName: siteConfig.name,
        images: [
            {
                url: siteConfig.url,
                width: 1200,
                height: 630,
                alt: siteConfig.name,
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: siteConfig.name,
        description: siteConfig.description,
        creator: '@damolaoladipo',
        images: [siteConfig.ogImage],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
};
