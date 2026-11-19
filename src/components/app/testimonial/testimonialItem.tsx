
'use client';

import { testimonials } from "@/_data/seed";



interface ITestimonial {
    testimonial: (typeof testimonials)[number];
    isActive: boolean;
    onActivate: () => void;
    onDeactivate: () => void;
}

const TestimonialCard = (data: ITestimonial) => {
    const { testimonial, isActive, onActivate, onDeactivate } = data;

    return (
        <article
            onMouseEnter={onActivate}
            onMouseLeave={onDeactivate}
            onFocus={onActivate}
            onBlur={onDeactivate}
            className={`
                group flex min-h-[598px] min-w-0 overflow-hidden rounded-2xl
                transition-[flex-grow,background-color,padding]
                duration-[850ms]
                ease-[cubic-bezier(0.22,1,0.36,1)]
                max-md:min-h-0
                max-md:w-full
                max-md:rounded-2xl
                max-md:bg-[#171717]
                max-md:p-3
            `}
            style={{
                flexGrow: isActive ? 2.2 : 0.52,
                flexBasis: 0,
                backgroundColor: isActive ? '#171717' : 'transparent',
                padding: isActive ? '1rem' : 0,
            }}
        >
            {/* Image */}
            <div
                className="
                    relative min-w-0 shrink-0 overflow-hidden
                    rounded-xl bg-[#b9ccd0]
                    max-md:w-[34%]
                    max-md:min-h-[220px]
                    sm:max-md:w-[38%]
                "
                style={{
                    flex: '0 0 clamp(150px, 17vw, 235px)',
                }}
            >
                <img
                    src={testimonial.image}
                    alt={testimonial.alt}
                    className="size-full object-cover"
                />

                <span
                    className="
                        absolute bottom-4 left-3
                        text-xl font-semibold
                        tracking-[-0.05em]
                        sm:bottom-6 sm:left-6 sm:text-[27px]
                        max-md:text-base
                    "
                >
                    {testimonial.brand}
                </span>
            </div>

            {/* Testimonial content */}
            <div
                className="
                    min-w-0 flex flex-col justify-between
                    overflow-hidden py-7
                    transition-[flex-grow,flex-basis,opacity,padding]
                    duration-[850ms]
                    ease-[cubic-bezier(0.22,1,0.36,1)]
                    max-md:flex-1
                    max-md:justify-between
                    max-md:overflow-visible
                    max-md:py-3
                    max-md:pl-3
                    max-md:pr-1
                    max-md:opacity-100
                "
                style={{
                    flexGrow: isActive ? 1 : 0,
                    flexShrink: 1,
                    flexBasis: isActive ? '0%' : '0px',
                    paddingLeft: isActive ? '2.25rem' : 0,
                    paddingRight: isActive ? '1.75rem' : 0,
                    opacity: isActive ? 1 : 0,
                }}
            >
                <blockquote
                    className="
                        m-0 min-w-[300px]
                        text-[clamp(25px,2.05vw,37px)]
                        leading-[1.18]
                        tracking-[-0.045em]
                        max-md:min-w-0
                        max-md:text-[clamp(13px,3.5vw,17px)]
                        max-md:leading-[1.45]
                        max-md:tracking-[-0.025em]
                        break-words
                    "
                >
                    “{testimonial.quote}”
                </blockquote>

                <footer
                    className="
                        flex min-w-[220px] flex-col gap-1
                        text-[17px]
                        max-md:min-w-0
                        max-md:mt-5
                        max-md:gap-1
                        max-md:text-xs
                        max-md:leading-snug
                    "
                >
                    <strong className="font-medium">
                        {testimonial.name}
                    </strong>

                    <span className="text-white/60">
                        {testimonial.role}
                    </span>
                </footer>
            </div>
        </article>
    );
};

export default TestimonialCard;
