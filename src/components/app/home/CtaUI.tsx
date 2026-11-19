import { ArrowRight } from 'lucide-react';

export type IGetInvolvedSection = {
    cityHref?: string;
    donateHref?: string;
    exploreHref?: string;
};

const YALINetworkSection = (data: IGetInvolvedSection) => {
    
    const { cityHref = 'https://yali.state.gov', donateHref = 'https://yali.state.gov/courses/' } = data;

    return (
        <section
            className="bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-[6vw] lg:py-32"
            aria-labelledby="get-involved-title"
        >
            <div className="mx-auto grid w-full max-w-[1720px] grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1.7fr)_minmax(370px,1.12fr)] lg:gap-[23px]">
                {/* Video background card */}
                <div className="relative isolate flex min-h-[420px] flex-col justify-between overflow-hidden rounded-md bg-[#16AADE] px-6 py-8 sm:min-h-[453px] sm:px-[clamp(34px,3.4vw,70px)] sm:py-[clamp(42px,3.3vw,68px)] lg:min-h-[453px]">
                    {/* Background video */}
                    <video
                        className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="auto"
                        aria-hidden="true"
                    >
                        <source src="/blocks/hero.mp4" type="video/mp4" />
                    </video>

                    {/* Video overlay */}
                </div>

                {/* Information card */}

                <div
                    id="ways-to-help"
                    className="flex min-h-[340px] flex-col justify-between gap-8 rounded-md bg-[#f2eeee] px-6 py-8 sm:min-h-[453px] sm:px-[clamp(30px,2.2vw,45px)] sm:py-12"
                >
                    {/* Heading and description */}
                    <div className="flex flex-col gap-3">
                        <h3
                            id="get-involved-title"
                            className="m-0 max-w-[850px] text-[clamp(36px,2.5vw,42px)] font-normal leading-[1.02] tracking-[-0.065em] text-[#171817]"
                        >
                            The YALI
                            <span className="font-serif italic tracking-[-0.1em]">
                                {' '}
                                Network
                            </span>
                        </h3>

                        <p className="m-0 max-w-[500px] text-[20px] leading-[1.45] tracking-[-0.025em] text-[#555452]">
                            The Young African Leaders Initiative, launched by
                            the United States Government in 2010, invests in the
                            next generation of African leaders. The Lagos
                            chapter is one of many state-level communities in
                            the wider network.
                        </p>
                    </div>

                    {/* Action buttons */}
                    <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-[17px]">
                        <a
                            href={cityHref}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex min-h-[48px] items-center justify-between gap-3 rounded-[9px] bg-stone-800 px-4 text-[15px] font-semibold text-white transition-transform duration-150 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#171817] sm:min-h-[57px] sm:gap-[22px] sm:px-[22px] sm:text-[19px]"
                        >
                            Go to yali.state.gov
                            <ArrowRight
                                aria-hidden="true"
                                className="size-4 shrink-0 sm:size-6"
                            />
                        </a>

                        <a
                            href={donateHref}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex min-h-[48px] items-center justify-between gap-3 rounded-[9px] bg-stone-200 px-4 text-[15px] font-semibold text-[#171817] transition-transform duration-150 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#171817] sm:min-h-[57px] sm:gap-[22px] sm:px-[22px] sm:text-[19px]"
                        >
                            Take Courses
                            <ArrowRight
                                aria-hidden="true"
                                className="size-4 shrink-0 sm:size-6"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default YALINetworkSection;
