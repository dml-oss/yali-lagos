import { pastEvents } from '@/_data/seed';
import { CalendarDaysIcon } from 'lucide-react';
import EventCard from './EventCard';

const PastEventList = () => {


    return (
        <section
            className="bg-stone-200/60 px-5 py-12 text-[#171817] sm:px-8 sm:py-16 lg:px-[15.5vw] lg:py-32"
            aria-labelledby="past-events-title"
        >

            <div className="mx-auto max-w-[1200px]">
                <span className="mb-8 inline-flex rounded-md bg-[#e8e3dc] gap-2 px-3 py-1.5 text-[13px] font-semibold uppercase tracking-[0.1em]">
                    <CalendarDaysIcon size={15} />
                    Past events
                </span>

                <div className="flex flex-col gap-4 lg:grid lg:grid-cols-2 lg:gap-5">
                    {pastEvents.map((event) => (
                        <EventCard key={event.title} data={event} />
                    ))}
                </div>
            </div>

        </section>
    );
};

export default PastEventList;
