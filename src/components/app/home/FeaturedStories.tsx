import { stories } from '@/_data/seed';
import StoryCard from '@/app/stories/StoryCard';
import { ArrowRight, Newspaper } from 'lucide-react';

const FeaturedStories = () => {
    return (
        <>
            <section
                className="min-h-screen bg-[#faf8f4] px-6 py-20 text-[#171817]"
                aria-labelledby="featured-resources-title"
            >
                <div className="mx-auto max-w-[1300px]">
                    {/* <header className="mb-10 flex items-end justify-between gap-8 max-sm:flex-col max-sm:items-start">
                        <div>
                            <span className="mb-6 inline-flex w-fit items-center gap-2 rounded-md bg-[#e8e3dc] px-3 py-1.5 text-[12px] font-semibold uppercase tracking-[0.12em]">
                                <Newspaper
                                    className="size-3.5"
                                    aria-hidden="true"
                                />
                                Stories
                            </span>
                            <h1
                                id="featured-resources-title"
                                className="m-0 text-[clamp(48px,4vw,68px)] font-normal leading-none tracking-[-0.07em]"
                            >
                                Featured
                            </h1>
                        </div>
                        <a
                            href={'#featured-stores'}
                            className="inline-flex items-center gap-4 rounded-lg bg-[#171817] px-5 py-3.5 text-[16px] font-medium text-white transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#171817]"
                        >
                            View all{' '}
                            <ArrowRight
                                aria-hidden="true"
                                className="size-5"
                                strokeWidth={1.7}
                            />
                        </a>
                    </header> */}

                    <header className="mb-10 flex flex-col gap-4 max-sm:mb-8">
                        <div>
                            <span className="mb-6 inline-flex items-center gap-2 rounded-md bg-[#e8e3dc] px-3 py-1.5 text-[13px] font-semibold uppercase tracking-[0.12em]">
                                <Newspaper size={15} />
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
                            href={'/stories'}
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

                    <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                        {stories &&
                            stories.length > 0 &&
                            stories
                                .slice(0, 6)
                                .map((story) => (
                                    <StoryCard
                                        key={story.title}
                                        title={story.title}
                                        desc={story.desc}
                                        image={story.image}
                                        slug={story.slug}
                                        tags={story.tags}
                                    />
                                ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default FeaturedStories;
