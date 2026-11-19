import { upcomingEvents } from '@/_data/seed';
import EventCard from '@/app/events/EventCard';
import { ArrowRight, CalendarDays } from 'lucide-react';

const FeaturedEvents = () => {
    return (
        <section
            className="flex min-h-[60vh] items-center bg-[#f5f0f0] px-5 py-12 text-[#171817] sm:px-8 sm:py-16 lg:px-[7.1vw] lg:py-24"
            aria-labelledby="upcoming-events-title"
        >
            <div className="mx-auto w-full max-w-[1300px]">
                <header className="mb-10 flex flex-col gap-4 max-sm:mb-8">
                    <div>
                        <span className="mb-6 inline-flex items-center gap-2 rounded-md bg-[#e8e3dc] px-3 py-1.5 text-[13px] font-semibold uppercase tracking-[0.12em]">
                            <CalendarDays size={15} />
                            Upcoming
                        </span>
                        <h1
                            id="upcoming-events-title"
                            className="m-0 text-[clamp(44px,6vw,78px)] font-normal leading-[0.98] tracking-[-0.07em]"
                        >
                            What&apos;s happening
                        </h1>
                    </div>
                    <a
                        href={'/events'}
                        className="inline-flex items-center gap-3 rounded-lg bg-[#15150d] px-5 py-3 text-[16px] font-medium text-white transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#171817] sm:gap-5 sm:px-6 sm:py-4 sm:text-[19px]"
                    >
                        All events
                        <ArrowRight
                            aria-hidden="true"
                            className="size-5 sm:size-6"
                            strokeWidth={1.7}
                        />
                    </a>
                </header>
                <div className="grid grid-cols-1 gap-4 sm:gap-5 lg:grid-cols-2">
                    {upcomingEvents.slice(0, 4).map((event) => (
                        <EventCard key={event.title} data={event} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedEvents;
