import { ArrowDownRight, ArrowRight } from 'lucide-react';

export type IGetInvolvedSection = {
    cityHref?: string;
    donateHref?: string;
    exploreHref?: string;
};

const GetInvolvedSection = (data: IGetInvolvedSection) => {
   
    const {
        cityHref = '/events',
        donateHref = '#donate',
        exploreHref = '#ways-to-help',
    } = data;

    return (
        <section
            className="grid items-center bg-white px-5 py-20 text-[#171817] sm:px-8 sm:py-24 lg:px-[6vw] lg:py-32"
            aria-labelledby="get-involved-title"
        >
            <div className="mx-auto grid w-full max-w-[1720px] grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1.7fr)_minmax(370px,1.12fr)] lg:gap-[23px]">
                <div className="flex min-h-[360px] flex-col justify-between rounded-xl bg-[#16AADE]/30 px-[clamp(24px,3.4vw,70px)] py-[clamp(32px,3.3vw,68px)]">
                    <h1
                        id="get-involved-title"
                        className="m-0 text-[clamp(38px,6vw,82px)] font-normal leading-[1.07] tracking-[-0.065em] text-[#171817]"
                    >
                        Get involved with
                        <br />
                        YALI Network
                        <span className="font-serif italic tracking-[-0.1em]">
                            {' '}
                            Lagos
                        </span>
                        .
                    </h1>

                    <a
                        href={exploreHref}
                        aria-label="Explore ways to get involved"
                        className="w-fit text-[#171817] transition-transform duration-150 hover:-translate-y-0.5 focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#171817]"
                    >
                        <ArrowDownRight
                            aria-hidden="true"
                            className="size-10 sm:size-12"
                            strokeWidth={1.8}
                        />
                    </a>
                </div>

                <div
                    id="ways-to-help"
                    className="flex min-h-[360px] flex-col justify-between rounded-xl bg-[#f2eeee] px-[clamp(24px,2.2vw,45px)] py-8 max-lg:py-8"
                >
                    <p className="m-0 max-w-[500px] text-[clamp(18px,3vw,28px)] leading-[1.43] tracking-[-0.025em] text-[#555452]">
                        There are lots of ways to get involved with YALI Network
                        Lagos, from attending meetups to volunteering on a
                        project to donating and beyond!
                    </p>

                    <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-[17px]">
                        <a
                            href={cityHref}
                            className="inline-flex min-h-[48px] items-center justify-between gap-3 rounded-[9px] bg-[#fff51f] px-4 text-[16px] font-semibold text-[#171817] transition-transform duration-150 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#171817] sm:min-h-[57px] sm:gap-[22px] sm:px-[22px] sm:text-[19px]"
                        >
                            Join an event
                            <ArrowRight
                                aria-hidden="true"
                                className="size-5 sm:size-6"
                                strokeWidth={1.8}
                            />
                        </a>
                        <a
                            href={donateHref}
                            className="inline-flex min-h-[48px] items-center justify-between gap-3 rounded-[9px] bg-[#e8e4de] px-4 text-[16px] font-semibold text-[#171817] transition-transform duration-150 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#171817] sm:min-h-[57px] sm:gap-[22px] sm:px-[22px] sm:text-[19px]"
                        >
                            Donate
                            <ArrowRight
                                aria-hidden="true"
                                className="size-5 sm:size-6"
                                strokeWidth={1.8}
                            />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default GetInvolvedSection