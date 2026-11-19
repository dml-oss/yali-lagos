'use client';

import GetInvolvedSection from '@/components/app/navigation/GetInvolve';
import PageBanner from '@/components/common/PageBanner';

const page = () => {
    return (
        <div className="">
            <div className="">
                <PageBanner
                    tag="Our Activities"
                    title=" Gather, build,"
                    titleSub="Belong."
                    key={''}
                    desc="Meetups, Create weekends and Story Nights across
                                the continent. Come as you are and bring a
                                friend."
                />

                <GetInvolvedSection />
            </div>
        </div>
    );
};

export default page;
