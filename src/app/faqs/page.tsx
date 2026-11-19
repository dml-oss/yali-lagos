'use client';

import { faqs } from '@/_data/seed';
import Faqs from '@/app/faqs/Faqs';
import GetInvolvedSection from '@/components/app/navigation/GetInvolve';

import { ArrowDownLeft } from 'lucide-react';

const FaqPage = () => {
    return (
        <>
            <div className="min-h-screen  bg-stone-100">
                <div className="mx-auto w-full max-w-8xl px-4 py-6 text-[#171817] sm:px-6 lg:px-8">
                    <div
                        className="relative flex min-h-[300px] overflow-hidden rounded-sm bg-[#19A9DE] bg-[radial-gradient(#F95C26_1px,transparent_1px)] bg-[size:18px_18px] sm:min-h-[380px] sm:rounded-xl sm:bg-[size:22px_22px] md:min-h-[440px] lg:min-h-[500px]"
                        aria-labelledby="who-we-are-title"
                    >
                        <h1
                            id="who-we-are-title"
                            className="m-0 max-w-full p-6 pt-8 text-[clamp(3.5rem,12vw,7rem)] font-normal leading-[0.9] tracking-[-0.075em] sm:p-10 sm:pt-12 md:p-12 lg:text-8xl"
                        >
                            Frequently Asked Questions
                        </h1>

                        <div
                            aria-label="Learn more about who we are"
                            className="absolute bottom-7 right-7 inline-flex size-[78px] items-center justify-center rounded-sm bg-[#ffef3b] transition-transform duration-300 hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#171817] sm:bottom-10 sm:right-10 lg:bottom-11 lg:right-7"
                        >
                            <ArrowDownLeft
                                aria-hidden="true"
                                className="size-12"
                                strokeWidth={1.6}
                            />
                        </div>
                    </div>
                </div>

                <div id="who-we-are" className="bg-white px-4 py-10 md:py-20">
                    <Faqs />
                    <GetInvolvedSection />
                </div>
            </div>
        </>
    );
};

export default FaqPage;
