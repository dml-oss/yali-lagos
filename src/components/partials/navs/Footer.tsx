"use client";

import Image from "next/image";
import Link from "next/link";
import { FormEvent, useState } from "react";

const COMPANY_LINKS = [
    { href: "/about", label: "About YALI" },
    { href: "/our-histiry", label: "Our History" },
    { href: "/leadership", label: "Leadership" },
    { href: "/contact", label: "Contact" },
];

// const LEGAL_LINKS = [
//     { href: "/terms-of-service", label: "Join the Network" },
//     { href: "/privacy-policy", label: "Partner with us" },
//     { href: "/accessibility", label: "Sponsor a program" },

// ];


const COMMUNITY = [
        { href: "/terms-of-service", label: "Join the Network" },
    { href: "/privacy-policy", label: "Partner with us" },
    { href: "/accessibility", label: "Sponsor a program" },


];


const SOCIAL_LINKS = [
    {
        href: "https://x.com",
        label: "X",
        icon: (
            <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.727-8.835L1.254 2.25H8.08l4.253 5.622L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
        ),
    },
    {
        href: "https://linkedin.com",
        label: "LinkedIn",
        icon: (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
        ),
    },
    {
        href: "https://instagram.com",
        label: "Instagram",
        icon: (
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
        ),
    },
    {
        href: "https://facebook.com",
        label: "Facebook",
        icon: (
            <svg width="9" height="16" viewBox="0 0 320 512" fill="currentColor" aria-hidden="true">
                <path d="M80 299.3V512h116V299.3h86.5l18-97.8H196v-34.6c0-51.7 20.3-71.5 72.7-71.5 16.3 0 29.4.4 37 1.2V7.9C291.4 4 256.4 0 236.2 0 129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
            </svg>
        ),
    },
];

const Footer = () => {
    const [email, setEmail] = useState("");
    const [agreed, setAgreed] = useState(false);

    const handleSubscribe = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    };

    return (
        <footer className="relative overflow-hidden bg-[#0D242A] px-5 py-12 sm:px-8 lg:px-12 lg:py-26">
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -top-24 right-[-80px] h-[420px] w-[420px] rounded-full border border-white/5 hidden lg:block"
            />
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-32 left-[-60px] h-[280px] w-[280px] rounded-full border border-white/5 hidden lg:block"
            />

            <div className="relative mx-auto w-full max-w-[1200px] rounded-[20px] bg-white px-6 pb-[60px] pt-[72px] sm:px-10 lg:px-20">
                {/* Top: Logo | Links | Newsletter — one row on desktop */}
                <div className="flex flex-col gap-10 lg:flex-row lg:items-start">
                    <Link href="/" aria-label="Ordnia home" className="shrink-0 -ty-20">
                    <Image
                        src="/blocks/yali-ft.svg"
                        alt="Ordnia logo"
                        width={140}
                        height={15}
                        priority
                    />
                    </Link>

                    <div className="flex min-w-0 flex-1 flex-col gap-12 sm:flex-row sm:justify-between">
                        <div className="grid grid-cols-3 gap-x-8 gap-y-0">
                            <nav aria-label="Company">
                                <p className="mb-[22px] text-[14px] font-medium leading-none tracking-[0.2px] text-[#9AA3AF]">
                                    Network
                                </p>
                                <ul className="space-y-[18px]">
                                    {COMPANY_LINKS.map((item) => (
                                        <li key={item.href}>
                                            <Link
                                                href={item.href}
                                                className="text-[16px] leading-none font-medium text-[#111111] transition-opacity hover:opacity-70"
                                            >
                                                {item.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </nav>

                            <nav aria-label="community">
                                <p className="mb-[22px] text-[14px] font-medium leading-none tracking-[0.2px] text-[#9AA3AF]">
                                    Legal
                                </p>
                                <ul className="space-y-[18px]">
                                    {COMMUNITY.map((item) => (
                                        <li key={item.href}>
                                            <Link
                                                href={item.href}
                                                className="text-[16px] leading-none font-medium text-[#111111] transition-opacity hover:opacity-70"
                                            >
                                                {item.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                        </div>

                        <div className="w-full max-w-[280px] sm:ml-auto">
                            <p className="mb-[16px] text-[14px] font-medium leading-none tracking-[0.2px] text-[#9AA3AF]">
                                Newsletter
                            </p>
                            <form className="flex items-center gap-2" onSubmit={handleSubscribe}>
                                <label htmlFor="footer-email" className="sr-only">
                                    Email address
                                </label>
                                <input
                                    id="footer-email"
                                    type="email"
                                    name="email"
                                    autoComplete="email"
                                    value={email}
                                    onChange={(event) => setEmail(event.target.value)}
                                    placeholder="Your email"
                                    className="h-10 min-w-0 flex-1 rounded-[10px] border-0 bg-[#F6F7F8] px-4 text-[14px] text-[#111111] outline-none placeholder:text-[#B0B7C3] focus:ring-2 focus:ring-[#0D242A]/20"
                                />
                                <button
                                    type="submit"
                                    aria-label="Subscribe"
                                    className="flex h-10 w-12 shrink-0 items-center justify-center rounded-[10px] bg-[#2aaae0] text-white transition-opacity hover:opacity-90"
                                >
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                                        <path d="M3.4 20.6 21 12 3.4 3.4 3 10.2 15 12 3 13.8z" fill="currentColor" />
                                    </svg>
                                </button>
                            </form>
                            <div className="mt-3 flex items-start gap-2">
                                <input
                                    id="footer-agreement"
                                    type="checkbox"
                                    checked={agreed}
                                    onChange={(event) => setAgreed(event.target.checked)}
                                    className="mt-[3px] h-3.5 w-3.5 shrink-0 cursor-pointer appearance-none rounded-[3px] border border-[#D5D8DE] bg-white checked:border-[#0D242A] checked:bg-[#0D242A]"
                                />
                                <label htmlFor="footer-agreement" className="text-[11px] leading-[16px] text-[#8B93A1]">
                                    By submitting, you agree to our{" "}
                                    <Link href="/terms-of-service" className="text-[#111111] underline underline-offset-2">
                                        Terms of Service
                                    </Link>{" "}
                                    and{" "}
                                    <Link href="/privacy-policy" className="text-[#111111] underline underline-offset-2">
                                        Privacy Policy
                                    </Link>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-[72px] h-px w-full bg-[#EBEBEB]" />

                {/* Tagline + CTA */}
                <div className="mt-10 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
                    <h2 className="max-w-[460px] text-[32px] leading-[46px] font-medium tracking-[-0.6px] text-[#111111] sm:text-[34px] sm:leading-[46px]">
                        A community of young 
                        <br />
                        leaders driving meaningful 
                        <br />
                        change in Lagos.
                    </h2>
                    <Link
                        href="/contact"
                        className="inline-flex h-10 shrink-0 items-center justify-center rounded-[4px] bg-[#2aaae0] px-[22px] text-[14px] font-medium text-white transition-opacity hover:opacity-90"
                    >
                        Become a member
                    </Link>
                </div>

                <div className="mt-[72px] h-px w-full bg-[#EBEBEB]" />

                {/* Copyright + Social */}
                <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-[12px] leading-none text-[#7A8A96]">
                        © 2026 YALI Network Lagos  - All Rights Reserved
                    </p>
                    <div className="flex items-center gap-[22px] text-[#111111]">
                        {SOCIAL_LINKS.map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                target="_blank"
                                rel="noreferrer"
                                aria-label={item.label}
                                className="flex h-4 w-4 items-center justify-center transition-opacity hover:opacity-70"
                            >
                                {item.icon}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
