import { LOGOS } from '@/_data/seed';
import React from 'react';

const MarqueLogos = () => {
    const marqueeLogos = [...LOGOS, ...LOGOS, ...LOGOS, ...LOGOS, ...LOGOS];

    return (
        <div className="relative w-full bg-transparent py-6 sm:py-8 overflow-hidden">
            <div
                className="relative z-[2] mx-auto w-full overflow-hidden px-4 sm:px-6"
                style={{
                    maskImage:
                        'linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)',
                    WebkitMaskImage:
                        'linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)',
                }}
            >
                <div className="flex w-max items-center gap-2 animate-[marquee_80s_linear_infinite]">
                    {marqueeLogos.map((src, index) => (
                        <div
                            key={`${src}-${index}`}
                            className="flex min-w-[100px] h-20 items-center justify-center bg-stone-100 sm:min-w-[140px] sm:h-24"
                        >
                            <img
                                src={src}
                                alt="Company logo"
                                className="h-8 w-auto object-contain sm:h-14"
                            />
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
                @keyframes marquee {
                    0% {
                        transform: translateX(-50%);
                    }

                    100% {
                        transform: translateX(0);
                    }
                }
            `}</style>
        </div>
    );
};

export default MarqueLogos;
