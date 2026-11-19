import { upcomingEvents } from '@/_data/seed';
import { CalendarDaysIcon } from 'lucide-react';
import EventCard from './EventCard';

const UpcomingEventList = () => {

    return (

        <section
            className="bg-stone-100 px-5 py-12 text-[#171817] sm:px-8 sm:py-16 lg:px-[15.5vw] lg:py-32"
            aria-labelledby="upcoming-events-title"
        >
            <div className="mx-auto max-w-[1200px]">
                <span className="mb-8 inline-flex items-center gap-2 rounded-md bg-[#e8e3dc] px-3 py-1.5 text-[13px] font-semibold uppercase tracking-[0.1em]">
                    <CalendarDaysIcon size={15} />
                    Upcoming events
                </span>


                <div className="flex flex-col gap-4">
                    {upcomingEvents.map((event) => (
                        <EventCard key={event.title} data={event} />
                    ))}
                </div>
            </div>

        </section>
    );
};
export default UpcomingEventList;
