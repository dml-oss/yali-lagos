'use client';

import GetInvolvedSection from '@/components/app/home/GetInvolveUI';
import PageBanner from '@/components/common/PageBanner';

const page = () => {
    return (
        <div className="bg-white">
            <PageBanner
                tag="Our Activities"
                title=" Gather, build,"
                titleSub="Belong."
                desc="Meetups, Create weekends and Story Nights across the continent. Come as you are and bring a friend."
            />

            <GetInvolvedSection />
        </div>
    );
};

export default page;
