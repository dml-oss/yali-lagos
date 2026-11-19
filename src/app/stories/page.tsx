'use client';

import React, { useState } from 'react';

import PageBanner from '@/components/common/PageBanner';
import { stories } from '@/_data/seed';
import StoryList from './StoryList';
import GetInvolvedSection from '@/components/app/navigation/GetInvolve';

const page = () => {
    const [activeFilter, setActiveFilter] = useState('all');

    return (
        <div className="bg-white">
            <PageBanner
                tag="Our Stories"
                title=" Gather, build,"
                titleSub="Belong."
                desc="Meetups, Create weekends and Story Nights across the continent. Come as you are and bring a friend."
            />

            <StoryList data={stories} />

            <GetInvolvedSection />
        </div>
    );
};

export default page;
