'use client';

import React, { useState } from 'react';
import useGoTo from '@/hooks/useGoTo';

import Testimonials from '@/components/app/testimonial/testimonialUI';
import HeroSection from '@/components/app/home/HeroUI';
import PurposeSection from '@/components/app/home/PurposeUI';
import YALINetworkSection from '@/components/app/home/CtaUI';
import Partners from '@/components/app/home/PartnersUI';
import GetInvolvedSection from '@/components/app/navigation/GetInvolve';
import FeaturedStories from '@/components/app/home/FeaturedStories';
import FeaturedEvents from '@/components/app/home/FeaturedEvents';

const HomePage = ({}) => {
    const { goTo } = useGoTo();
    const [show, setShow] = useState<boolean>(false);

    const toggleShow = (e: any) => {
        if (e) {
            e.preventDefault();
        }
        setShow(!show);
    };

    return (
        <>
            <HeroSection />

            <PurposeSection />

            <YALINetworkSection />

            <Testimonials />

            <Partners />

            <FeaturedEvents />

            <FeaturedStories />

            <GetInvolvedSection />
        </>
    );
};

export default HomePage;
