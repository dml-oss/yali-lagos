
import React, { FC } from 'react';
import StoryCard from './StoryCard';

interface IStory {
    slug: string;
    title: string;
    desc: string;
    image: string;
    bgImage?: string;
    alt?: string;
    tags?: string[];
}

interface IStoryList {
    data: IStory[];
}

const StoryList: FC<IStoryList> = ({ data }) => {
    const featuredIndexes = [0, 6];

    return (
        <div className="min-h-screen bg-[#faf8f4] px-6 py-20 text-[#171817]">
            <div className="mx-auto max-w-7xl">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                    {data.map((story, index) => (
                        <StoryCard
                            key={story.slug}
                            slug={story.slug}
                            title={story.title}
                            desc={story.desc}
                            image={story.image}
                            bgImage={story.bgImage}
                            alt={story.alt}
                            tags={story.tags}
                            isFeatured={featuredIndexes.includes(index)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default StoryList;
