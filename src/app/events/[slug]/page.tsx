
import { upcomingEvents, pastEvents } from '@/_data/seed';
import { notFound } from 'next/navigation';
import EventItem from '../EventItem';



interface IPageProps {
    params: Promise<{
        slug: string;
    }>;
}

const EventPage = async ({ params }: IPageProps) => {
   
    const { slug } = await params;

    const event = [...upcomingEvents, ...pastEvents].find(
        (item) => item.slug === slug
    );

    if (!event) {
        notFound();
    }

    return <EventItem data={event} />;
};

export default EventPage;
