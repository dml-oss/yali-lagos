import { faqs } from '@/_data/seed';
import TitleText from '@/components/animations/TitleText';
import Wrapper from '@/components/ui/Wrapper';
import React from 'react';
import FaqItem from './FaqItem';

const Faqs = () => {
    return (
        <>
            <div className="bg-white min-h-screen py-16 sm:py-20 lg:py-24">
                <Wrapper both>
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16 xl:gap-24">
                            {/* Left Column - Title and Info */}
                            <div className="flex flex-col justify-start">
                                <div className="space-y-6">
                                   
                                    <div className="space-y-4">
                                        <h2 className="text-[1.5rem] sm:text-[2rem] lg:text-[2.25rem] font-inter font-medium text-black leading-tight">
                                            Common questions, straight answers
                                        </h2>
                                        <p className="text-[1rem] sm:text-[1.125rem] font-inter text-black/70 leading-relaxed max-w-md">
                                            Have a question that's not covered
                                            here? Reach out and we'll get back
                                            to you within one business day.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Right Column - FAQ Items */}
                            <div className="flex flex-col space-y-0">
                                {faqs.map((item, index) => (
                                    <FaqItem
                                        key={index + item.question}
                                        question={item.question}
                                        answer={item.answer}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </Wrapper>
            </div>
        </>
    );
};

export default Faqs;
