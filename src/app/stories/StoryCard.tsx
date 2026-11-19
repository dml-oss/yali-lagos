
import React, { FC } from 'react';
import Link from 'next/link';

interface IStories {
    slug: string;
    title: string;
    desc: string;
    image: string;
    bgImage?: string;
    alt?: string;
    tags?: string[];
    isFeatured?: boolean;
}

const StoryCard: FC<IStories> = ({
    slug,
    title,
    desc,
    image,
    alt = '',
    tags = [],
    isFeatured = false,
}) => {
    return (
        <article
            className={`group rounded-sm bg-stone-100 px-3 pt-3 pb-9 ${
                isFeatured ? 'md:col-span-2' : ''
            }`}
        >
            <Link
                href={`/stories/${slug}`}
                className="block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#171817] hover:cursor-pointer"
            >
                <div
                    className={`overflow-hidden rounded-sm bg-[#e8e3dc] ${
                        isFeatured
                            ? 'aspect-[1.8] md:aspect-[2.1]'
                            : 'aspect-[1.72]'
                    }`}
                >
                    <img
                        src={image}
                        alt={alt || title}
                        className="size-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                    />
                </div>

                {tags.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-2">
                        {tags.map((tag, index) => (
                            <span
                                key={tag}
                                className={`rounded-sm px-2.5 py-1 text-[12px] font-semibold tracking-[0.11em] ${
                                    index === 0
                                        ? 'bg-[#e8e3dc] text-[#171817]'
                                        : 'bg-[#171817] text-white'
                                }`}
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                )}

                <div className="px-2">
                    <h2
                        className={`mt-4 font-normal leading-[1.12] tracking-[-0.045em] text-[#171817] group-hover:underline group-hover:decoration-[#19A9DE] group-hover:decoration-4 group-hover:underline-offset-4 ${
                            isFeatured
                                ? 'text-[clamp(28px,3vw,42px)]'
                                : 'text-[clamp(22px,1.7vw,29px)]'
                        }`}
                    >
                        {title}
                    </h2>

                    <p
                        className={`mt-3 leading-[1.4] text-black/70 ${
                            isFeatured ? 'text-lg' : 'text-[16px]'
                        }`}
                    >
                        {desc}
                    </p>
                </div>
            </Link>
        </article>
    );
};

export default StoryCard;
