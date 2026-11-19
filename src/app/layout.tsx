import type { Metadata } from "next";
import "/public/fonts/webfont/inter/style.css";
import "/public/fonts/webfont/mona/style.css";
import "/public/fonts/webfont/clash/style.css";
import "/public/fonts/webfont/freizet/style.css";
import "/public/fonts/webfont/hostgro/style.css";
import '/public/fonts/icons/fad/css/all.min.css'
import '/public/fonts/icons/fe/fe.css'
import '/public/fonts/icons/po/po.css'
import '/public/fonts/icons/cp/style.css'
import "/public/css/globals.css";
import "/public/css/mobile.css";
import "/public/css/custom.css";
import "/public/css/brand.css";
import { Suspense } from "react";
import AppState from "@/context/app/appState";
import Navbar  from "@/components/partials/navs/Navbar";
import Footer from "@/components/partials/navs/Footer";
import { metadata as siteMetadata } from "./metadata";

export const metadata: Metadata = siteMetadata;



export default function RootLayout({children }: Readonly<{ children: React.ReactNode   }>) {
   
    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                <meta charSet="UTF-8" />
                <meta name="viewport"
                    content="width=device-width, initial-scale=1" />
                <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
                <meta httpEquiv="Content-Language" content="en" />
                <meta name="msapplication-TileImage" content="images/fav/ms-icon-144x144.png" />
                <meta name="theme-color" content="#0D242A" />
                <meta name="msapplication-TileColor" content="#" />
                <meta name="theme-color" content="#fff" />
                <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta name="mobile-web-app-capable" content="yes" />
                <meta name="HandheldFriendly" content="True" />
                <meta name="MobileOptimized" content="320" />
                <meta name="description" content="inosuft" />
                <meta name="Keywords" content="inosuft"></meta>

                {/* Fav icons */}
                <link rel="apple-touch-icon" sizes="180x180" href="/images/fav/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="96x96" href="/images/fav/favicon-96x96.png" />
                <link rel="shortcut icon" href="/images/fav/favicon.ico" />
                <link rel="icon" type="image/svg+xml" href="/images/fav/favicon.svg" />
            </head>
            <body
                suppressHydrationWarning
                className={`antialiased body bg-white`}
            >
                <Suspense fallback={<></>}>
                    <AppState>
                 
                        <Navbar />
                
                        {children}
                        <Footer />
                    </AppState>
                </Suspense>
            </body>
        </html>
    );
}
