
import GetInvolvedSection from '@/components/app/navigation/GetInvolve';
import { IEvent } from '@/utils/interfaces.util';

interface IEventData {
    data: IEvent;
}

const EventItem = ({ data }: IEventData) => {
    const {
        month,
        day,
        type,
        location,
        title,
        description,
        accent,
        image,
        desc,
        alt,
        tags = [],
        content = [],
    } = data;

    return (
        <div className="min-h-screen bg-white text-[#171817]">
            <section
                className="relative overflow-hidden bg-bg-white px-3 py-3 sm:px-6 sm:py-6"
                aria-labelledby="article-title"
            >
                <div
                    className="pointer-events-none absolute inset-y-0 right-0 hidden w-[22%] bg-[radial-gradient(#19A9DE_3px,transparent_3px)] bg-[size:80px_80px] lg:block"
                    aria-hidden="true"
                />

                <div className="relative z-10 mx-auto grid w-full max-w-[1500px] grid-cols-1 gap-3 sm:gap-4 lg:min-h-[460px] lg:grid-cols-[1fr_1.16fr]">
                    {/* Image: First on mobile */}
                    <div className="order-1 h-[260px] overflow-hidden rounded-lg bg-[#dce0e8] sm:h-[380px] lg:order-2 lg:h-auto lg:min-h-[460px]">
                        <img
                            src={image}
                            alt={alt || title}
                            className="size-full object-cover"
                        />
                    </div>

                    {/* Story information */}
                    <div className="order-2 flex flex-col justify-between rounded-lg bg-[#fff21f] p-5 sm:p-8 lg:order-1 lg:p-10">
                        {tags.length > 0 && (
                            <div className="mb-6 flex flex-wrap gap-2">
                                {tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="rounded-sm bg-[#f6d600] px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider sm:text-xs"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        )}

                        <div>
                            <h1
                                id="article-title"
                                className="m-0 max-w-[480px] text-[clamp(36px,7vw,65px)] font-normal leading-[0.98] tracking-[-0.065em] sm:text-[clamp(43px,5vw,65px)]"
                            >
                                {title}
                            </h1>
                        </div>
                    </div>
                </div>
            </section>

            {/* Article Content */}
            <div className="mx-auto w-full max-w-5xl px-5 sm:px-8 lg:px-6">
                <article className="mx-auto max-w-3xl space-y-6 py-10 sm:py-14 lg:py-16 lg:pb-32">
                    {content.length > 0 ? (
                        content.map((paragraph, index) => (
                            <p
                                key={index}
                                className="text-base leading-[1.8] text-[#55514d] sm:text-lg"
                            >
                                {paragraph}
                            </p>
                        ))
                    ) : (
                        <p className="text-base leading-[1.8] text-[#55514d] sm:text-lg">
                            {desc}
                        </p>
                    )}
                </article>
            </div>

            <GetInvolvedSection />
        </div>
    );
};

export default EventItem;
