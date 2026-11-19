'use client';

import History from '@/components/app/about/HistoryUI';
import GetInvolved from '@/components/app/home/GetInvolveUI';
import { ArrowDownLeft } from 'lucide-react';
import React from 'react';


const OurHistoryPage = () => {
    
    return (
        <section className="bg-white min-h-screen">
            <div className="mx-auto w-full max-w-8xl px-4 py-4 text-[#171817] sm:px-6 lg:px-8">
                <div
                    className="relative flex min-h-[260px] overflow-hidden rounded-sm bg-[#19A9DE] bg-[radial-gradient(#F95C26_1px,transparent_1px)] bg-[size:18px_18px] sm:min-h-[320px] sm:rounded-xl sm:bg-[size:22px_22px] md:min-h-[380px] lg:min-h-[440px]"
                    aria-labelledby="who-we-are-title"
                >
                    <h1
                        id="who-we-are-title"
                        className="m-0 max-w-full p-4 pt-6 text-[clamp(2.5rem,10vw,7rem)] font-normal leading-[0.9] tracking-[-0.075em] sm:p-6 sm:pt-8 md:p-10 lg:text-7xl"
                    >
                        History of YALI Network Lagos
                    </h1>

                    <div
                        aria-label="Learn more about who we are"
                        className="absolute bottom-5 right-5 inline-flex size-[64px] items-center justify-center rounded-sm bg-[#8ADEFE] transition-transform duration-300 hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#171817] sm:bottom-8 sm:right-8 lg:bottom-10 lg:right-7"
                    >
                        <ArrowDownLeft
                            aria-hidden="true"
                            className="size-10 sm:size-12"
                            strokeWidth={1.6}
                        />
                    </div>
                </div>
            </div>

            <History/>



            <GetInvolved />
        </section>
    );
};

export default OurHistoryPage;
