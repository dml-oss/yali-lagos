
'use client';

import { useEffect, useRef, useState } from 'react';
import TestimonialCard from './testimonialItem';
import { testimonials } from '@/_data/seed';


const Testimonials = () => {
    const sectionRef = useRef<HTMLElement>(null);

    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const [hasEntered, setHasEntered] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [mobileIndex, setMobileIndex] = useState(0);

    // Observe section visibility
    useEffect(() => {
        const section = sectionRef.current;
        if (!section) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);

                if (entry.isIntersecting && !hasEntered) {
                    setActiveIndex(1);
                    setHasEntered(true);
                }
            },
            { threshold: 0.35 },
        );

        observer.observe(section);

        return () => observer.disconnect();
    }, [hasEntered]);

    // Automatically rotate mobile testimonials
    useEffect(() => {
        if (!isVisible || testimonials.length <= 1) return;

        const interval = setInterval(() => {
            setMobileIndex((current) => {
                return (current + 1) % testimonials.length;
            });
        }, 4000);

        return () => clearInterval(interval);
    }, [isVisible]);

    return (
        <section
            ref={sectionRef}
            className="
                flex min-h-screen items-center
                bg-stone-100 px-4 py-12
                text-white
                sm:px-10
                lg:px-[6vw]
            "
            aria-label="Customer testimonials"
        >
            <div className="mx-auto w-full max-w-[1500px]">

                {/* Desktop testimonial cards */}
                <div className="hidden gap-5 md:flex">
                    {testimonials.map((testimonial, index) => (
                        <TestimonialCard
                            key={testimonial.name}
                            testimonial={testimonial}
                            isActive={activeIndex === index}
                            onActivate={() => setActiveIndex(index)}
                            onDeactivate={() =>
                                setActiveIndex(hasEntered ? 1 : null)
                            }
                        />
                    ))}
                </div>

                {/* Mobile testimonial carousel */}
                <div className="overflow-hidden md:hidden">
                    <div
                        className="
                            flex items-stretch
                            transition-transform
                            duration-700
                            ease-in-out
                        "
                        style={{
                            transform: `translateX(-${mobileIndex * 100}%)`,
                        }}
                    >
                        {testimonials.map((testimonial) => (
                            <div
                                key={testimonial.name}
                                className="w-full min-w-0 flex-none"
                            >
                                <TestimonialCard
                                    testimonial={testimonial}
                                    isActive={true}
                                    onActivate={() => {}}
                                    onDeactivate={() => {}}
                                />
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Testimonials;
