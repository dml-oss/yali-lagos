import { ArrowRight } from 'lucide-react';
import InvolvementCard from './GetInvolveItem';

export type IGetInvolved = {
    meetupHref?: string;
    createHref?: string;
    cityHref?: string;
    partnerHref?: string;
};


const  GetInvolved = (data: IGetInvolved) => {
    
    const {
        meetupHref = '#find-your-city',
        createHref = '#create-team',
        cityHref = '#start-a-city',
        partnerHref = '#partner',
    } = data;

    return (
        <section
            className="flex min-h-screen items-center bg-[#f5f0f0] px-6 py-20 text-[#171817] sm:px-10 lg:py-24"
            aria-labelledby="get-involved-title"
        >
            <div className="mx-auto w-full max-w-[1200px]">
                <div className="mb-14 grid items-end gap-10 lg:grid-cols-[minmax(380px,0.9fr)_minmax(0,1.35fr)] lg:gap-20">
                    <div>
                        <span className="mb-7 inline-flex rounded-md bg-[#e8e3dc] px-3 py-1.5 text-[12px] font-semibold uppercase tracking-[0.12em]">
                            Get involved
                        </span>
                        <h1
                            id="get-involved-title"
                            className="m-0 max-w-[490px] text-[clamp(52px,4vw,76px)] font-normal leading-[0.98] tracking-[-0.07em]"
                        >
                            Get involved with
                            <br />
                            FaithTech Africa.
                        </h1>
                    </div>
                    <p className="m-0 max-w-[760px] pb-1 text-[clamp(20px,1.45vw,27px)] leading-[1.35] tracking-[-0.025em] text-[#5d5a57]">
                        There are lots of ways to get involved, from attending
                        meetups to volunteering on a Create project to launching
                        a community in your own city.
                    </p>
                </div>

                <div
                    id="ways-to-help"
                    className="grid grid-cols-1 gap-[18px] sm:grid-cols-2 "
                >
                    <InvolvementCard
                        title="Attend a meetup"
                        description="Find a city near you and come to the next gathering."
                        action="Find a city"
                        href={meetupHref}
                        className="bg-[#fff21f]"
                    />
                    <InvolvementCard
                        title="Join a Create team"
                        description="Give a few hours a week to build something redemptive."
                        action="See events"
                        href={createHref}
                        className="bg-white"
                    />
                    <InvolvementCard
                        title="Start a city"
                        description="No community near you? We'll help you launch one."
                        action="Get in touch"
                        href={cityHref}
                        className="bg-[#15150d]"
                        dark
                    />
                    <InvolvementCard
                        title="Partner with us"
                        description="Churches, companies and foundations can sponsor the work."
                        action="Partner"
                        href={partnerHref}
                        className="bg-[#2695bd]"
                        dark
                    />
                </div>
            </div>
        </section>
    );
}


export default GetInvolved