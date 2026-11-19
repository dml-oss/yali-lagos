import { purposeCards } from '@/_data/seed';
import { ArrowRight, Target } from 'lucide-react';
import PurposeCard from './PurposeItem';

export type IPurposeSection = {
    discoverHref?: string;
};

const PurposeSection = (data: IPurposeSection) => {
    
    const { discoverHref = '/who-we-are' } = data;

    return (
        <section
            className="bg-stone-100 px-5 py-12 text-[#171817] sm:px-8 sm:py-16 lg:px-[7.1vw] lg:py-56"
            aria-labelledby="purpose-title"
        >
            <div className="mx-auto max-w-[1300px] bg-stone-100">
                <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-20">
                    <div>
                        <span className="mb-6 inline-flex items-center gap-2 rounded-md bg-stone-200/70 px-3 py-1.5 text-[13px] font-semibold uppercase tracking-[0.12em]">
                            <Target size={15} className="text-blue-400" />
                            Our purpose
                        </span>
                        <h1
                            id="purpose-title"
                            className="m-0 max-w-[700px] text-[clamp(34px,8vw,78px)] font-normal leading-[0.98] tracking-[-0.07em]"
                        >
                            We exist to see a young leaders in Lagos drive
                            change.
                        </h1>
                    </div>
                    <div className="max-w-[780px] pt-8 text-[clamp(17px,3.4vw,29px)] leading-[1.4] tracking-[-0.025em] text-[#5d5a57] max-lg:pt-0">
                        <p className="m-0">
                            <strong className="font-semibold text-[#171817]">
                                YALI Network Lagos is a practising community.
                            </strong>{' '}
                            We bring together emerging leaders from different
                            backgrounds and sectors to develop their leadership
                            capacity, exchange ideas, build meaningful
                            connections, and take action on the challenges
                            facing our communities.
                        </p>
                        <a
                            href={discoverHref}
                            className="mt-6 inline-flex items-center gap-3 rounded-lg bg-[#15150d] px-5 py-3 text-[16px] font-medium text-white transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#171817] sm:gap-5 sm:px-6 sm:py-4 sm:text-[19px]"
                        >
                            Discover more{' '}
                            <ArrowRight
                                aria-hidden="true"
                                className="size-5 sm:size-6"
                                strokeWidth={1.7}
                            />
                        </a>
                    </div>
                </div>
                <div className="mt-16 grid gap-5 lg:grid-cols-3 max-lg:mt-20">
                    {purposeCards.map((card) => (
                        <PurposeCard key={card.number} {...card} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PurposeSection;
