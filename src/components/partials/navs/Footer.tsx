'use client';

import { COMMUNITY, COMPANY_LINKS, SOCIAL_LINKS } from '@/_data/seed';
import Image from 'next/image';
import Link from 'next/link';
import { FormEvent, useState } from 'react';



const Footer = () => {
    const [email, setEmail] = useState('');
    const [agreed, setAgreed] = useState(false);

    const handleSubscribe = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    };

    return (
        <footer className="relative overflow-hidden bg-[#0D242A] px-4 py-8 sm:px-8 sm:py-12 lg:px-12 lg:py-26">
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -top-24 right-[-80px] hidden h-[420px] w-[420px] rounded-full border border-white/5 lg:block"
            />
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-32 left-[-60px] hidden h-[280px] w-[280px] rounded-full border border-white/5 lg:block"
            />

            <div className="relative mx-auto w-full max-w-[1200px] rounded-[16px] bg-white px-6 py-10 sm:rounded-[20px] sm:px-10 sm:pb-[60px] sm:pt-[72px] lg:px-20">
                {/* Top: Logo | Links | Newsletter */}
                <div className="flex flex-col gap-10 lg:flex-row lg:items-start">
                    <Link
                        href="/"
                        aria-label="Ordnia home"
                        className="w-fit shrink-0 -pl-40"
                    >
                        <Image
                            src="/blocks/yali-sIte.svg"
                            alt="Ordnia logo"
                            width={140}
                            height={40}
                            priority
                            className="h-auto w-[120px]"
                        />
                    </Link>

                    <div className="flex min-w-0 flex-1 flex-col gap-10 sm:flex-row sm:justify-between sm:gap-8 lg:gap-12">
                        {/* Navigation links */}
                        <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-x-8 lg:grid-cols-3 lg:gap-x-8">
                            <nav aria-label="Company">
                                <p className="mb-[22px] text-[14px] font-medium leading-none tracking-[0.2px] text-[#9AA3AF]">
                                    Network
                                </p>

                                <ul className="space-y-[18px]">
                                    {COMPANY_LINKS.map((item) => (
                                        <li key={item.href}>
                                            <Link
                                                href={item.href}
                                                className="text-[14px] leading-snug font-medium text-[#111111] transition-opacity hover:opacity-70 sm:text-[16px]"
                                            >
                                                {item.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </nav>

                            <nav aria-label="Community">
                                <p className="mb-[22px] text-[14px] font-medium leading-none tracking-[0.2px] text-[#9AA3AF]">
                                    Legal
                                </p>

                                <ul className="space-y-[18px]">
                                    {COMMUNITY.map((item) => (
                                        <li key={item.href}>
                                            <Link
                                                href={item.href}
                                                className="text-[14px] leading-snug font-medium text-[#111111] transition-opacity hover:opacity-70 sm:text-[16px]"
                                            >
                                                {item.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                        </div>

                        {/* Newsletter */}
                        <div className="w-full max-w-none sm:ml-auto sm:max-w-[280px]">
                            <p className="mb-[16px] text-[14px] font-medium leading-none tracking-[0.2px] text-[#9AA3AF]">
                                Newsletter
                            </p>

                            <form
                                className="flex w-full items-center gap-2"
                                onSubmit={handleSubscribe}
                            >
                                <label
                                    htmlFor="footer-email"
                                    className="sr-only"
                                >
                                    Email address
                                </label>

                                <input
                                    id="footer-email"
                                    type="email"
                                    name="email"
                                    autoComplete="email"
                                    value={email}
                                    onChange={(event) =>
                                        setEmail(event.target.value)
                                    }
                                    placeholder="Your email"
                                    className="h-11 min-w-0 flex-1 rounded-[10px] border-0 bg-[#F6F7F8] px-4 text-[14px] text-[#111111] outline-none placeholder:text-[#B0B7C3] focus:ring-2 focus:ring-[#0D242A]/20"
                                />

                                <button
                                    type="submit"
                                    aria-label="Subscribe"
                                    className="flex h-11 w-12 shrink-0 items-center justify-center rounded-[10px] bg-[#2aaae0] text-white transition-opacity hover:opacity-90"
                                >
                                    <svg
                                        width="16"
                                        height="16"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        aria-hidden="true"
                                    >
                                        <path
                                            d="M3.4 20.6 21 12 3.4 3.4 3 10.2 15 12 3 13.8z"
                                            fill="currentColor"
                                        />
                                    </svg>
                                </button>
                            </form>

                            <div className="mt-3 flex items-start gap-2">
                                <input
                                    id="footer-agreement"
                                    type="checkbox"
                                    checked={agreed}
                                    onChange={(event) =>
                                        setAgreed(event.target.checked)
                                    }
                                    className="mt-[3px] h-4 w-4 shrink-0 cursor-pointer appearance-none rounded-[3px] border border-[#D5D8DE] bg-white transition-colors checked:border-[#0D242A] checked:bg-[#0D242A] checked:bg-[url('data:image/svg+xml,%3Csvg_viewBox=%220_0_16_16%22_fill=%22none%22_xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cpath_d=%22M3_8L6.5_11.5L13_4.5%22_stroke=%22white%22_stroke-width=%222%22_stroke-linecap=%22round%22_stroke-linejoin=%22round%22/%3E%3C/svg%3E')] checked:bg-center checked:bg-no-repeat checked:bg-[length:12px_12px] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2aaae0]"
                                />

                                <label
                                    htmlFor="footer-agreement"
                                    className="text-[11px] leading-[16px] text-[#8B93A1]"
                                >
                                    By submitting, you agree to our{' '}
                                    <Link
                                        href="/terms-of-service"
                                        className="text-[#111111] underline underline-offset-2"
                                    >
                                        Terms of Service
                                    </Link>{' '}
                                    and{' '}
                                    <Link
                                        href="/privacy-policy"
                                        className="text-[#111111] underline underline-offset-2"
                                    >
                                        Privacy Policy
                                    </Link>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-12 h-px w-full bg-[#EBEBEB] sm:mt-[72px]" />

                {/* Tagline + CTA */}
                <div className="mt-8 flex flex-col gap-6 sm:mt-10 sm:gap-8 lg:flex-row lg:items-end lg:justify-between">
                    <h2 className="max-w-[460px] text-[clamp(25px,6vw,34px)] leading-[1.3] font-medium tracking-[-0.6px] text-[#111111] sm:leading-[46px]">
                        A community of young <br className="hidden sm:block" />
                        leaders driving meaningful{' '}
                        <br className="hidden sm:block" />
                        change in Lagos.
                    </h2>

                    <Link
                        href="/contact"
                        className="inline-flex h-11 w-full shrink-0 items-center justify-center rounded-[4px] bg-[#2aaae0] px-[22px] text-[14px] font-medium text-white transition-opacity hover:opacity-90 sm:w-fit"
                    >
                        Become a member
                    </Link>
                </div>

                <div className="mt-12 h-px w-full bg-[#EBEBEB] sm:mt-[72px]" />

                {/* Copyright + Social */}
                <div className="mt-6 flex flex-col gap-5 sm:mt-8 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-[11px] leading-relaxed text-[#7A8A96] sm:text-[12px]">
                        © 2026 YALI Network Lagos - All Rights Reserved
                    </p>

                    <div className="flex items-center gap-[22px] text-[#111111]">
                        {SOCIAL_LINKS.map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                target="_blank"
                                rel="noreferrer"
                                aria-label={item.label}
                                className="flex h-5 w-5 items-center justify-center transition-opacity hover:opacity-70"
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
