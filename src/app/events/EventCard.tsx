import { IEvent } from '@/utils/interfaces.util';
import Link from 'next/link';

interface IEventData {
    data: IEvent;
}

const EventCard = ({ data }: IEventData) => {
   
    const { month, day, type, location, title, description, accent, slug } = data;

    return (
        <Link
            href={slug ? `/events/${slug}` : '#event'}
            className="grid min-h-[164px] grid-cols-[92px_1fr] gap-6 rounded-xl border border-[#e4e0df] bg-white hover:bg-blue-200 transition-colors p-6 transition-transform hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#171817] max-sm:grid-cols-[76px_1fr] max-sm:gap-4 max-sm:p-4"
        >
            <time className="flex h-[92px] flex-col items-center justify-center rounded-lg bg-[#15150d] text-white max-sm:h-[76px]">
                <span className=" text-[13px] tracking-[0.15em] text-[#fff21f]">
                    {month}
                </span>

                <span className=" text-[35px] leading-none tracking-[-0.06em]">
                    {day}
                </span>
            </time>

            <div className="flex min-w-0 flex-col justify-center gap-2">
                <div className="flex flex-wrap items-center gap-3">
                    <span
                        className={`rounded-md px-3 py-1.5 text-[13px] font-semibold tracking-[0.08em] ${accent}`}
                    >
                        {type}
                    </span>
                    <span className="text-[18px] text-[#7d7976]">
                        {location}
                    </span>
                </div>

                <h2 className="m-0 text-[clamp(21px,1.6vw,28px)] font-normal leading-tight tracking-[-0.045em] text-[#171817]">
                    {title}
                </h2>

                <p className="m-0 text-[17px] leading-[1.3] text-[#686562]">
                    {description}
                </p>
            </div>
        </Link>
    );
};

export default EventCard;
