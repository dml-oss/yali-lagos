'use client';

import Image from 'next/image';

import MarqueLogos from '@/components/common/MarqueLogos';
import { Images } from '@/_data/seed';


const Partners = () => {


    return (
        <section className="relative w-full bg-white py-40">
           
           <div className="max-w-7xl mx-auto">
                
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-8">
                    
                    <div className="w-full md:w-[40%] text-left">
                        <p className="font-inter text-lg font-medium text-black tracking-wider text-left">
                            Organisations and partners 
                            <br />
                            supporting with YALI Network Lagos
                        </p>
                    </div>

                    <div className="w-full md:w-[60%]">
                        <MarqueLogos />
                    </div>

                </div>
            </div>
            
            <div className="max-w-7xl mx-auto">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                    {Images.map((img, index) => (
                        <div
                            key={index}
                            className="relative w-full aspect-[4/3] rounded-md overflow-hidden shadow-md"
                        >
                            <Image
                                src={img.src}
                                alt={img.alt}
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                    ))}
                </div>

            </div>

           
        </section>
    );
};

export default Partners;
