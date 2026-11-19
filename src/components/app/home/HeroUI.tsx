import { ArrowDownRight, ArrowRight } from 'lucide-react';

export type IHeroSection = {
    backgroundImage?: string;
    cityHref?: string;
    whoWeAreHref?: string;
};

const HeroSection = (data: IHeroSection) => {
    
    const { backgroundImage = '/blocks/hero.mp4', cityHref = '/events', whoWeAreHref = '/who-we-are' } = data;

    return (
        <main
            className="relative flex min-h-[100dvh] overflow-hidden bg-[#15150d] pb-16 pt-20 text-white sm:pb-24 sm:pt-28"
            aria-labelledby="hero-title"
        >
            {/* Background video */}
            <video
                className="absolute inset-0 h-full w-full object-cover object-center"
                autoPlay
                muted
                loop
                playsInline
                preload="none"
                aria-hidden="true"
            >
                <source src={backgroundImage} type="video/mp4" />
                Your browser does not support HTML video.
            </video>

            {/* Gradient overlay */}
            <div
                className="absolute inset-0 bg-gradient-to-t from-[#10100c] via-[#10100c]/60 to-[#10100c]/10"
                aria-hidden="true"
            />

            {/* Hero content */}
            <div className="relative z-10 flex w-full flex-col justify-end px-5 pb-10 pt-16 sm:px-8 sm:pb-14 sm:pt-20 lg:px-[7.9vw] lg:pb-[9.5vh]">
                <div className="mb-8 inline-flex size-[56px] items-center justify-center bg-[#8ADEFE] text-[#171817] transition-transform hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#fff21f] sm:size-[68px]">
                    <ArrowDownRight
                        aria-hidden="true"
                        className="size-7 sm:size-9"
                        strokeWidth={1.8}
                    />
                </div>

                <h1
                    id="hero-title"
                    className="m-0 max-w-[1200px] text-[clamp(40px,8vw,112px)] font-normal leading-[0.98] tracking-[-0.075em]"
                >
                    YALI Network Lagos is a
                    <br />
                    <span className="mt-3 inline-block italic">
                        community
                    </span>{' '}
                    driving change.
                </h1>

                <p className="mt-6 max-w-[850px] text-[clamp(16px,3.4vw,31px)] leading-[1.3] tracking-[-0.025em] text-white/75">
                    Part of the global YALI Network building the next generation
                    of African leaders and change makers in the city of Lagos.
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-3 sm:mt-10 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center sm:gap-4 lg:mt-12">
                    <a
                        href={cityHref}
                        className="inline-flex items-center gap-3 rounded-lg bg-[#16ABDF] px-5 py-3 text-[16px] font-semibold text-[#171817] transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#fff21f] sm:gap-5 sm:px-6 sm:py-4 sm:text-[19px]"
                    >
                        Join upcoming events
                        <ArrowRight
                            aria-hidden="true"
                            className="size-5 shrink-0 sm:size-6"
                            strokeWidth={1.7}
                        />
                    </a>

                    <a
                        href={whoWeAreHref}
                        className="inline-flex items-center gap-3 rounded-lg border border-white/45 px-5 py-3 text-[16px] font-medium text-white transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:gap-5 sm:px-6 sm:py-4 sm:text-[19px]"
                    >
                        Who we are
                        <ArrowRight
                            aria-hidden="true"
                            className="size-5"
                            strokeWidth={1.7}
                        />
                    </a>
                </div>
            </div>

            {/* Bottom decorative strip */}
            <div
                className="absolute inset-x-0 bottom-0 z-10 h-3 bg-[repeating-linear-gradient(90deg,#fff21f_0_28px,#15150d_28px_38px,#f85c27_38px_58px,#2695bd_58px_72px,#fff21f_72px_92px,#15150d_92px_108px)]"
                aria-hidden="true"
            />
        </main>
    );
}

export default HeroSection