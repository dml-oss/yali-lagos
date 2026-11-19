import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

import { cx } from '@/lib/utils';
import Button from '@/components/partials/buttons/Button';

const About = () => {
    return (
        <section className="mt-8 text-black flex max-w-5xl flex-col-reverse gap-6 lg:mt-16 lg:flex-row lg:items-end lg:gap-16">
            {/* Images Left - Text Right */}
            <div className="flex flex-col gap-6 text-black lg:gap-12">
                <ImageSection
                    images={[
                        {
                            src: '/images/blocks/yali-impact.jpeg',
                            alt: 'Team collaboration',
                        },
                        {
                            src: '/images/blocks/yali-work.jpeg',
                            alt: 'Team workspace',
                        },
                    ]}
                    className="xl:-translate-x-10"
                />

                <TextSection
                    title="The Community"
                    paragraphs={[
                        'YALI Network Lagos is part of the Young African Leaders Initiative, a pan-African effort to develop the next generation of African leaders. We bring together young people who want to learn, lead, and contribute to the growth of their communities.',
                        'Through our activities, we create opportunities for members to share ideas, develop practical skills, and work together on issues that matter to young Nigerians.',
                        'We are building a community where young people can grow together, exchange knowledge, develop solutions, and contribute to a better future for Lagos, Nigeria, and Africa.',
                    ]}
                    ctaButton={{
                        href: '/get-involved',
                        text: 'Get Involved',
                    }}
                    showLearnMore={true}
                />
            </div>

            {/* Text Left - Images Right */}
            <div className="flex flex-col gap-6 lg:gap-12">
                <TextSection
                    paragraphs={[
                        'We believe leadership goes beyond holding a position. It means taking responsibility, serving others, and turning ideas into action. Our community encourages young people to take initiative, build meaningful relationships, and become active contributors to society. From leadership development and civic participation to entrepreneurship and community service, we support young people as they discover their potential and use it to create positive change. ',
                        'Our work encourages young people to move beyond conversations and become active participants in shaping their communities. Through leadership development, civic participation, entrepreneurship, and community service, we create opportunities for members to share their experiences, collaborate on ideas, and develop practical approaches to the issues affecting young Nigerians.',
                    ]}
                />
                <ImageSection
                    images={[
                        {
                            src: '/images/blocks/yali-impact.jpeg',
                            alt: 'Team collaboration',
                        },
                        {
                            src: '/images/blocks/yali-work.jpeg',
                            alt: 'Team workspace',
                        },
                    ]}
                    className="hidden lg:flex xl:translate-x-10"
                />
            </div>
        </section>
    );
};

export default About;

interface ImageSectionProps {
    images: { src: string; alt: string }[];
    className?: string;
}

export function ImageSection({ images, className }: ImageSectionProps) {
    return (
        <div className={cx('flex flex-col gap-4 sm:gap-6', className)}>
            {images.map((image, index) => (
                <div
                    key={index}
                    className="relative aspect-[2/1.5] overflow-hidden rounded-sm sm:aspect-[4/3]"
                >
                    <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover"
                    />
                </div>
            ))}
        </div>
    );
}

interface TextSectionProps {
    title?: string;
    paragraphs: string[];
    ctaButton?: {
        href: string;
        text: string;
    };
    showLearnMore?: boolean;
}

export function TextSection({
    title,
    paragraphs,
    ctaButton,
    showLearnMore = false,
}: TextSectionProps) {
    return (
        <section className="flex-1 space-y-3 text-[clamp(15px,2.4vw,18px)] text-black sm:space-y-5">
            {title && <h2 className="text-[clamp(24px,4vw,36px)]">{title}</h2>}
            <div className="max-w-xl space-y-4 sm:space-y-6">
                {paragraphs.map((paragraph, index) => (
                    <p key={index} className="leading-relaxed">{paragraph}</p>
                ))}
            </div>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
                {ctaButton && (
                    <Link href={ctaButton.href}>
                        <Button
                            onClick={() => {}}
                            size="sm"
                            type="primary"
                            text={{ label: ctaButton.text, size: 15 }}
                        />
                    </Link>
                )}
                {showLearnMore && (
                    <a
                        href="https://yali.state.gov/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Button
                            onClick={() => {}}
                            size="sm"
                            type="primary"
                            semantic="warning"
                            icon={{
                                enable: true,
                                child: <ArrowRight size={14} />,
                            }}
                            text={{ label: 'Learn more', size: 15 }}
                            reverse="row"
                        />
                    </a>
                )}
            </div>
        </section>
    );
}
