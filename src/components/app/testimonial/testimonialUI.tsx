'use client';

import { useEffect, useRef, useState } from 'react';
import TestimonialCard from './testimonialItem';
import { testimonials } from '@/_data/seed';

const Testimonials = () => {
   
    const sectionRef = useRef<HTMLElement>(null);
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const [hasEntered, setHasEntered] = useState(false);

    useEffect(() => {
        const section = sectionRef.current;
        if (!section) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setActiveIndex(1);
                    setHasEntered(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.35 },
        );

        observer.observe(section);
        return () => observer.disconnect();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="flex min-h-screen items-center bg-stone-100 px-6 py-12 text-white sm:px-10 lg:px-[6vw]"
            aria-label="Customer testimonials"
        >
            <div className="mx-auto flex w-full max-w-[1500px] gap-5 max-md:flex-col">
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
        </section>
    );
};

export default Testimonials;
