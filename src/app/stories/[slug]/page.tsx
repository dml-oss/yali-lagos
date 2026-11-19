
import { stories } from '@/_data/seed';
import { notFound } from 'next/navigation';
import StoryItem from '../StoryItem';


interface IPageProps {
    params: Promise<{
        slug: string;
    }>;
}

const StoryPage = async ({ params }: IPageProps) => {
    const { slug } = await params;

    const story = stories.find(
        (item) => item.slug === slug
    );

    if (!story) {
        notFound();
    }

    return <StoryItem {...story} />;
};

export default StoryPage;
