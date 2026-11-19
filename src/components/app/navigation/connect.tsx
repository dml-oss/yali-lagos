import React from 'react';
import Image from 'next/image';
import { Facebook, Twitter, Linkedin } from 'lucide-react';

export default function ConnectWithUs() {
    const images = [
        { src: '/images/blocks/yali-work.jpeg', alt: 'yali work' },
        { src: '/images/blocks/yali-impact.jpeg', alt: 'yali impact' },
        { src: '/images/blocks/yali-capacity.jpeg', alt: 'yali capacity' },
        { src: '/images/blocks/yali-inclusive.jpeg', alt: 'yali inclusive' },
    ];

    return (
        <div className="bg-white p-8 py-40">
            <div className="max-w-7xl mx-auto">
             

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {images.map((img, index) => (
                        <div
                            key={index}
                            className="relative w-full h-64 rounded-md overflow-hidden shadow-md"
                        >
                            <Image
                                src={img.src}
                                alt={img.alt}
                                layout="fill"
                                objectFit="cover"
                                className="hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
