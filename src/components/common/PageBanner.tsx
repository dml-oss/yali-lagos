import React, { FC } from 'react';
import Wrapper from '../ui/Wrapper';
import TitleText from '../animations/TitleText';
import Divider from '../ui/Divider';
import { CalendarDaysIcon } from 'lucide-react';

interface IPageBanner {
    tag?: string;
    title: string;
    titleSub?: string;
    desc: string;
    bgImage?: string;
}

const PageBanner: FC<IPageBanner> = (data) => {


    const { title, desc, bgImage, titleSub, tag } = data;

    return (
        <>
            <div
                className="flex min-h-[50vh] min-h-[360px] items-center justify-center bg-center bg-cover bg-no-repeat sm:min-h-[60vh] lg:min-h-[500px]"
                style={{ backgroundImage: `url(${bgImage})` }}
            >
                <Wrapper both>
                    <section
                        className="relative flex min-h-[50px] overflow-hidden bg-stone-900 text-white lg:min-h-[500px]"
                        aria-labelledby="hero-title"
                    >
                        <div
                            className="absolute inset-0 bg-[radial-gradient(#F95C26_1px,transparent_1px)] bg-[size:24px_24px] opacity-50"
                            aria-hidden="true"
                        />
                        <div className="relative z-10 mx-auto flex w-full max-w-[1720px] flex-col justify-center px-5 py-16 sm:px-8 sm:py-20 lg:px-[15.5vw] lg:py-24">
                            <span className="mb-6 inline-flex w-fit gap-2 rounded-md bg-[#fff21f] px-3 py-1.5 text-[13px] font-semibold uppercase tracking-[0.1em] text-[#171817]">
                                <CalendarDaysIcon size={15} />
                                {tag}
                            </span>
                            <h1
                                id="hero-title"
                                className="m-0 max-w-[800px] text-[clamp(40px,7vw,88px)] font-normal leading-[0.98] tracking-[-0.07em]"
                            >
                                {title}{' '}
                                <span className="italic">{titleSub}</span>
                            </h1>
                            <p className="mt-6 max-w-[760px] text-[clamp(16px,3vw,27px)] leading-[1.35] text-white/65">
                                {desc}
                            </p>
                        </div>
                        <div
                            className="absolute inset-x-0 bottom-0 z-10 h-3 bg-[repeating-linear-gradient(90deg,#19A9DE_0_28px,#2695bd_28px_68px,#fff21f_28px_48px,#15150d_68px_78px,#f85c27_78px_98px,#2695bd_98px_118px,#e8e3dc_118px_138px)]"
                            aria-hidden="true"
                        />
                    </section>
                </Wrapper>
            </div>
        </>
    );
};

export default PageBanner;
