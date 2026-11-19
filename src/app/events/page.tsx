'use client';

import PageBanner from '@/components/common/PageBanner';
import UpcomingEventList from './UpcomingEventList';
import PastEventList from './PastEventList';
import GetInvolvedSection from '@/components/app/home/GetInvolveUI';
import { upcomingEvents, pastEvents } from '@/_data/seed';

const page = () => {
    return (
        <div className="">
            <div className="">
                <PageBanner
                    tag="Our Events"
                    title=" Gather, build,"
                    titleSub="Belong."
                    key={''}
                    desc="Meetups, Create weekends and Story Nights across
                                the continent. Come as you are and bring a
                                friend."
                />

                <UpcomingEventList />

                <PastEventList />

                <GetInvolvedSection />
            </div>
        </div>
    );
};

export default page;
