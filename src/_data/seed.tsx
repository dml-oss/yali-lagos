import {
    ICollection,
    IEvent,
    IPagination,
    IPurposeCard,
    IStory,
    ITeamMember,
    ITestimonial,
    NavItem,
} from '@/utils/interfaces.util';
import { siteConfig } from './site-config';

export const NavigationItems: NavItem[] = [
    {
        label: 'Who we are',
        dropdownItems: [
            {
                title: 'About the Network',
                description: 'Learn about our mission, vision.',
                href: siteConfig.baseLinks.about,
                image: '/images/blocks/yali-impact.jpeg',
            },
            {
                title: 'Our History',
                description: 'Explore our journey, milestones and impact',
                href: '/who-we-are/our-history',
                image: '/images/blocks/yali-impact.jpeg',
                iconVariant: 'neutral',
            },
            {
                title: 'The Leadership Team',
                description: 'Meet the 2026 young leaders team',
                href: '/who-we-are/leadership',
                image: '/images/blocks/yali-masterclass.jpeg',
                iconVariant: 'neutral',
            },
            {
                title: 'Network Committees',
                description: 'How members work together to deliver impact.',
                href: 'https://x.com/thetroott',
                external: true,
                image: "/images/blocks/Join-yali.jpeg",
                iconVariant: 'neutral',
            },
            {
                title: 'Constitution and Governance',
                description:
                    'Understand the YALI LAGOS consitution.',
                href: 'https://x.com/thetroott',
                external: true,
                image: '/images/blocks/yali-capacity.jpeg',
                iconVariant: 'neutral',
            },
        ],
    },
    {
        label: 'Activities',
        dropdownItems: [
            {
                title: 'Leadership and Human Development',
                description: 'Developing (young) people and their potential',
                href: siteConfig.baseLinks.activities,
                image: '/images/blocks/yali-work.jpeg',
                iconVariant: 'neutral',
            },
            {
                title: 'Community and Social Impact',
                description: 'Improving lives and communities',
                href: siteConfig.baseLinks.activities,
                external: true,
                image: '/images/blocks/yali-work.jpeg',
                iconVariant: 'brand',
            },
            {
                title: 'Civic Collaboration and Action',
                description: 'Connecting people and turning ideas into action',
                href: siteConfig.baseLinks.activities,
                image: '/images/blocks/hero-image.jpeg',
                iconVariant: 'brand-filled',
            },
        ],
    },
    {
        label: 'Events',
        sections: [
            {
                label: 'UPCOMING EVENTS',
                items: [
                    {
                        title: 'Personal devotion',
                        description: 'Build a daily listening habit',
                        href: siteConfig.baseLinks.events,
                        image: '/images/blocks/child.png',
                        iconVariant: 'neutral',
                    },
                    {
                        title: 'Small groups',
                        description: 'Share teachings with your group',
                        href: siteConfig.baseLinks.events,
                        image: '/images/blocks/Join-yali.jpeg',
                        iconVariant: 'neutral',
                    },
                    {
                        title: 'Church library',
                        description:
                            'One place for your congregation’s sermons',
                        href: siteConfig.baseLinks.events,
                        image: '/images/blocks/yali-inclusive.jpeg',
                        iconVariant: 'brand',
                    },
                    {
                        title: 'Share with family',
                        description: 'Send messages to friends and family',
                        href: siteConfig.baseLinks.events,
                        image: '/images/blocks/what we do.jpeg',
                        iconVariant: 'neutral',
                    },
                ],
            },
        ],
    },

    {
        label: 'Stories',
        href: siteConfig.baseLinks.stories,
    },
    {
        label: 'FAQs',
        href: siteConfig.baseLinks.faqs,
    },
];

export const purposeCards: IPurposeCard[] = [
    {
        number: '01',
        label: 'Face2face',
        title: 'Community of leaders',
        description:
            'Monthly meetups where young leaders connect, share ideas, learn and build friendships in the city of Lagos.',
        className: 'bg-[#fff21f]',
    },
    {
        number: '02',
        label: 'Create',
        title: 'Social Impact projects',
        description:
            'Volunteer teams work with local communities to organise outreach, support social causes and respond to real needs across Lagos.',
        className: 'bg-[#15150d]',
        dark: true,
    },
    {
        number: '03',
        label: 'Send',
        title: 'Leaders for the city',
        description:
            'We equip young leaders to take their skills into business, government, civil society and their communities to make a difference.',
        className: 'bg-[#f85c27]',
    },
];

export const testimonials: ITestimonial[] = [
    {
        quote: 'Ordina gave our team a clearer rhythm for planning, sharing feedback, and moving work forward together.',
        name: 'Maya Chen',
        role: 'Operations Lead',
        brand: 'Journey',
        image: '/blocks/adeyemi.svg',
        alt: 'Journey testimonial profile',
    },
    {
        quote: 'Ordina stood out from the first moment. After a week, our entire team felt more structured, aligned, and clear on what to prioritize.',
        name: 'Liam Hart',
        role: 'Product Lead',
        brand: 'AIVA',
        image: '/blocks/ugomma.svg',
        alt: 'Liam Hart portrait',
    },
    {
        quote: 'The level of clarity Ordina provides is incredible. Our projects stay organized, and collaboration finally feels effortless.',
        name: 'Sofia Alvarez',
        role: 'Team Lead, Product Strategy',
        brand: 'Alexun',
        image: '/blocks/emmanuel.svg',
        alt: 'Sofia Alvarez portrait',
    },
];

export const Images = [
    { src: '/images/blocks/yali-work.jpeg', alt: 'yali work' },
    { src: '/images/blocks/yali-impact.jpeg', alt: 'yali impact' },
    { src: '/images/blocks/yali-capacity.jpeg', alt: 'yali capacity' },
    { src: '/images/blocks/yali-inclusive.jpeg', alt: 'yali inclusive' },
];

export const events: IEvent[] = [
    {
        day: '20',
        month: 'NOV',
        type: 'MEETUP',
        location: 'Lekki, Lagos',
        title: 'AI, Work & the Career',
        description:
            'An evening of talks and prayer on building AI responsibly in African markets.',
        accent: 'bg-[#e8e3dc]',
        slug: 'ai-work-career',
    },
    {
        day: '05',
        month: 'DEC',
        type: 'CREATE',
        location: 'Yaba, lagos',
        title: 'Create Weekend: AgTech',
        description:
            'Small teams prototype tools with smallholder farmers over two days.',
        accent: 'bg-[#2695bd] text-white',
        slug: 'create-weekend-agtech',
    },
    {
        day: '11',
        month: 'DEC',
        type: 'STORY NIGHT',
        location: 'Lagos',
        title: 'Story Night',
        description:
            'Founders and engineers share how faith shapes what they build.',
        accent: 'bg-[#fff21f]',
        slug: 'story-night',
    },
    {
        day: '15',
        month: 'JAN',
        type: 'ONLINE',
        location: 'Online',
        title: 'Pan-African Builders Call',
        description:
            'A monthly call for city leaders and Create teams across the continent.',
        accent: 'bg-[#15150d] text-white',
        slug: 'pan-african-builders-call',
    },
];

export const blogCategories = [
    { title: 'All Blogs', category: 'all' },
    { title: 'Culture', category: 'culture' },
    { title: 'Design', category: 'design' },
    { title: 'Tips', category: 'trends' },
    { title: 'tips', category: 'tips' },
    { title: 'insights', category: 'insights' },
    { title: 'tools', category: 'tools' },
    { title: 'accessibility', category: 'accessibility' },
];

export const stories: IStory[] = [
    {
        author: 'Damola Oladipo',
        image: '/images/blocks/yali-work.jpeg',
        alt: 'Two people having an interview in a blue studio',
        tags: ['AI', 'ARTICLE'],
        title: 'Why this AI Age Needs More Than Human Leadership',
        desc: 'Everyone says AI increases the value of distinctly human leadership. But something substantial is missing from that thesis.',
        slug: 'ai-leadership',
        content: [
            `I've been overwhelmed by the amount of leadership books, articles, and podcasts on how to lead in the AI era.`,

            `And they all seem to be saying the same thing: AI increases the value of distinctly human leadership. McKinsey argued that AI can write, design, code, and complete tasks at breakneck speed, but it still can't do the hard work of leadership itself. Harvard Business Review says that heavy use of AI is undermining the original judgment leaders need. The World Economic Forum says that the real value of the future is in identifying problems, done most uniquely by humans.`,

            `I am overall pleased to see this emerging consistent thesis. But I keep feeling like we're missing something substantial.`,

            `I've had the immense privilege over the last ten years of learning from world-class leaders while helping build FaithTech into a global community of hundreds of leaders. The ones I keep coming back to for advice are rarely just impressive. Yes, they are deeply human. They listen well. They care about people. They know how to be present.`,

            `But the best of them seem to be operating from something deeper than human skill alone.`,

            `Their leadership is shaped by dependence on God, conviction, discernment, restraint, and wisdom. In other words, I keep noticing something deeper than human leadership. What I see in them is godly leadership.`,

            `This AI age needs more than human leadership. It needs godly leadership.`,

            `That could sound like a loaded statement, so let me explain what I mean.`,

            `I do agree that being more human is essential and so important. Prioritize being in person, have compassion and empathy, and care deeply about people. Yet, truly transformational leaders have something else about them. The leaders who most compel me are not simply charismatic, strategic, or gifted. There is often a depth beneath their leadership: a spiritual weight, a clarity, a steadiness, a way of being before God that is hard to quantify but easy to recognize.`,

            `Godliness is a life ordered toward God. Think of the fruit of the Spirit: love, joy, peace, patience, kindness, goodness, faithfulness, gentleness, and self-control from Galatians 5:22–23. Or the eldership qualifications in 1 Timothy 3 and Titus 1. Or lastly, 2 Peter 1:5–7 lays out a compelling vision for godliness: Make every effort to supplement your faith with virtue, and virtue with knowledge, and knowledge with self-control, and self-control with steadfastness, and steadfastness with godliness, and godliness with brotherly affection, and brotherly affection with love.`,

            `In this AI moment in particular, I feel like AI itself exerts a formation pressure on us. AI tends to push us towards something. A way of doing things. Now, I believe that way can be useful, such as asking better questions and improving efficiencies. But godly leadership resists these formative pressures by operating from a different posture.`,

            `Therefore, here are five traits I believe are uniquely helpful right now.`,

            `1. Lead With a Deep Dependence.`,

            `AI tends to push us towards control. It gives us this odd feeling that with enough information, analysis or knowledge, we can manage the uncertainty we are living in. As if we can engineer the right outcomes.`,

            `But godly leaders practice a rich and deep dependence on God. I've been learning to pray before I prompt. My friend Cameron Doolittle helped write a great book titled Lead with Prayer. It is a fundamental trust in the Lord and belief that apart from Jesus we can do nothing. Jesus himself would withdraw to pray and constantly talked about doing the will of Him who sent him. It is a deep well of trust in God above all.`,

            `2. Lead With a Courageous Conviction.`,

            `AI tends to push us toward what is probable. AI is incredible at recognizing patterns and generating likely outputs but it can subtly train us to trust what is most plausible rather than to trust what may be most faithful or countercultural.`,

            `Godly leaders are willing to act on faithful conviction. It comes from a deep conviction from the Lord. Jesus repeatedly acted in ways that confounded conventional expectations. He touched people others avoided, withdrew when crowds wanted more, and rejected shortcuts to power. It reminds me of 2 Timothy 1:7: God gave us a spirit not of fear but of power and love and self-control. I remind our staff team often that the most important thing we can do in leading FaithTech is act in faithful obedience to the Lord. The fruit of that is always the right fruit.`,

            `3. Lead With a Patient Discernment.`,

            `AI tends to push us towards speed. An important gap used to exist between a question and an answer. That gap allowed for our minds to be open to new possibilities. AI is eliminating that gap and immediacy now feels normal and patience feels inefficient.`,

            `But godly leaders are slow and thoughtful. That doesn't mean they don't want to see meaningful impact at scale. It's just that they do not succumb to the illusion that speed equals success. AI collapses the distance between question and answer. Wisdom often requires restoring some distance. It reminds me of the time Paul prayed that believers would grow in knowledge and all discernment, so that they may approve what is excellent (Philippians 1:9–10). Great leaders pursue excellence. They build a culture of excellence. But it comes from patient discernment, making many small great decisions over a period of time that leads to greatest impact.`,

            `4. Lead With Disciplined Limits.`,

            `AI tends to push us towards more. It is so easy to draft a strategy, create ideas, and make things. The intoxication of this AI moment is rooted in the unlimited possibilities and potential. Yet this increased capacity can quietly become an increased hunger for productivity, doing, and carrying more. It's one of the reasons I feel the utopian vision of a nearly workless future underestimates our seemingly limitless human appetite for more.`,

            `Godly leaders, however, know what they are called to and, equally importantly, what they are not called to. They say no. Just because AI enables me to do more does not mean God has called me to do more. The best leaders I know constantly ask me, what are you saying no to right now? It is the self-control we see in Galatians 5 and 1 Timothy 3. Key things like sleep, sabbath, rest. And the best leaders I know have learned how they truly rest and double down on doing that in the right rhythms.`,

            `5. Lead With a Relentless Curiosity.`,

            `AI tends to push us towards answers. It can respond to anything and anytime. We are slowly being trained to move to conclusions too quickly out of uncertainty, rather than sitting in ambiguity long enough to understand what is really going on.`,

            `Godly leaders are non-stop asking thoughtful and timely questions. They want to know more. They are quick to listen and slow to assume they understand. They also resist the urge to demonstrate how quickly they understand. They keep listening long enough to discover what they do not yet understand. It reminds me of James 1:19: quick to hear, slow to speak. Godly leaders are slow to assume and quick to understand.`,

            `None of this means leaders should resist AI. I use it constantly. It can make us better informed, more productive, and more capable. The danger is not using AI; the danger is allowing the logic of the tool to become the logic of our leadership. AI may shape what we can do as leaders. But Jesus must still shape who we become as leaders. Godly leaders.`,
        ],
    },
    {
        author: 'Damola Oladipo',
        image: '/images/blocks/yali-impact.jpeg',
        alt: 'A filmmaker speaking in a studio',
        tags: ['GOSPEL', 'ARTICLE'],
        title: 'The Gospel of Silicon Valley',
        desc: 'Technology shapes our lives, our work and our future. God desires to move powerfully in and through this space.',
        slug: 'gospel-silicon-valley',
        content: [
            `I've been overwhelmed by the amount of leadership books, articles, and podcasts on how to lead in the AI era.`,

            `And they all seem to be saying the same thing: AI increases the value of distinctly human leadership. McKinsey argued that AI can write, design, code, and complete tasks at breakneck speed, but it still can't do the hard work of leadership itself. Harvard Business Review says that heavy use of AI is undermining the original judgment leaders need. The World Economic Forum says that the real value of the future is in identifying problems, done most uniquely by humans.`,

            `I am overall pleased to see this emerging consistent thesis. But I keep feeling like we're missing something substantial.`,

            `I've had the immense privilege over the last ten years of learning from world-class leaders while helping build FaithTech into a global community of hundreds of leaders. The ones I keep coming back to for advice are rarely just impressive. Yes, they are deeply human. They listen well. They care about people. They know how to be present.`,

            `But the best of them seem to be operating from something deeper than human skill alone.`,

            `Their leadership is shaped by dependence on God, conviction, discernment, restraint, and wisdom. In other words, I keep noticing something deeper than human leadership. What I see in them is godly leadership.`,

            `This AI age needs more than human leadership. It needs godly leadership.`,

            `That could sound like a loaded statement, so let me explain what I mean.`,

            `I do agree that being more human is essential and so important. Prioritize being in person, have compassion and empathy, and care deeply about people. Yet, truly transformational leaders have something else about them. The leaders who most compel me are not simply charismatic, strategic, or gifted. There is often a depth beneath their leadership: a spiritual weight, a clarity, a steadiness, a way of being before God that is hard to quantify but easy to recognize.`,

            `Godliness is a life ordered toward God. Think of the fruit of the Spirit: love, joy, peace, patience, kindness, goodness, faithfulness, gentleness, and self-control from Galatians 5:22–23. Or the eldership qualifications in 1 Timothy 3 and Titus 1. Or lastly, 2 Peter 1:5–7 lays out a compelling vision for godliness: Make every effort to supplement your faith with virtue, and virtue with knowledge, and knowledge with self-control, and self-control with steadfastness, and steadfastness with godliness, and godliness with brotherly affection, and brotherly affection with love.`,

            `In this AI moment in particular, I feel like AI itself exerts a formation pressure on us. AI tends to push us towards something. A way of doing things. Now, I believe that way can be useful, such as asking better questions and improving efficiencies. But godly leadership resists these formative pressures by operating from a different posture.`,

            `Therefore, here are five traits I believe are uniquely helpful right now.`,

            `1. Lead With a Deep Dependence.`,

            `AI tends to push us towards control. It gives us this odd feeling that with enough information, analysis or knowledge, we can manage the uncertainty we are living in. As if we can engineer the right outcomes.`,

            `But godly leaders practice a rich and deep dependence on God. I've been learning to pray before I prompt. My friend Cameron Doolittle helped write a great book titled Lead with Prayer. It is a fundamental trust in the Lord and belief that apart from Jesus we can do nothing. Jesus himself would withdraw to pray and constantly talked about doing the will of Him who sent him. It is a deep well of trust in God above all.`,

            `2. Lead With a Courageous Conviction.`,

            `AI tends to push us toward what is probable. AI is incredible at recognizing patterns and generating likely outputs but it can subtly train us to trust what is most plausible rather than to trust what may be most faithful or countercultural.`,

            `Godly leaders are willing to act on faithful conviction. It comes from a deep conviction from the Lord. Jesus repeatedly acted in ways that confounded conventional expectations. He touched people others avoided, withdrew when crowds wanted more, and rejected shortcuts to power. It reminds me of 2 Timothy 1:7: God gave us a spirit not of fear but of power and love and self-control. I remind our staff team often that the most important thing we can do in leading FaithTech is act in faithful obedience to the Lord. The fruit of that is always the right fruit.`,

            `3. Lead With a Patient Discernment.`,

            `AI tends to push us towards speed. An important gap used to exist between a question and an answer. That gap allowed for our minds to be open to new possibilities. AI is eliminating that gap and immediacy now feels normal and patience feels inefficient.`,

            `But godly leaders are slow and thoughtful. That doesn't mean they don't want to see meaningful impact at scale. It's just that they do not succumb to the illusion that speed equals success. AI collapses the distance between question and answer. Wisdom often requires restoring some distance. It reminds me of the time Paul prayed that believers would grow in knowledge and all discernment, so that they may approve what is excellent (Philippians 1:9–10). Great leaders pursue excellence. They build a culture of excellence. But it comes from patient discernment, making many small great decisions over a period of time that leads to greatest impact.`,

            `4. Lead With Disciplined Limits.`,

            `AI tends to push us towards more. It is so easy to draft a strategy, create ideas, and make things. The intoxication of this AI moment is rooted in the unlimited possibilities and potential. Yet this increased capacity can quietly become an increased hunger for productivity, doing, and carrying more. It's one of the reasons I feel the utopian vision of a nearly workless future underestimates our seemingly limitless human appetite for more.`,

            `Godly leaders, however, know what they are called to and, equally importantly, what they are not called to. They say no. Just because AI enables me to do more does not mean God has called me to do more. The best leaders I know constantly ask me, what are you saying no to right now? It is the self-control we see in Galatians 5 and 1 Timothy 3. Key things like sleep, sabbath, rest. And the best leaders I know have learned how they truly rest and double down on doing that in the right rhythms.`,

            `5. Lead With a Relentless Curiosity.`,

            `AI tends to push us towards answers. It can respond to anything and anytime. We are slowly being trained to move to conclusions too quickly out of uncertainty, rather than sitting in ambiguity long enough to understand what is really going on.`,

            `Godly leaders are non-stop asking thoughtful and timely questions. They want to know more. They are quick to listen and slow to assume they understand. They also resist the urge to demonstrate how quickly they understand. They keep listening long enough to discover what they do not yet understand. It reminds me of James 1:19: quick to hear, slow to speak. Godly leaders are slow to assume and quick to understand.`,

            `None of this means leaders should resist AI. I use it constantly. It can make us better informed, more productive, and more capable. The danger is not using AI; the danger is allowing the logic of the tool to become the logic of our leadership. AI may shape what we can do as leaders. But Jesus must still shape who we become as leaders. Godly leaders.`,
        ],
    },
    {
        author: 'Damola Oladipo',
        image: '/images/blocks/yali-inclusive.jpeg',
        alt: 'Illustration of diverse people beside a world map',
        tags: ['AI', 'SPOTLIGHT'],
        title: 'This AI Moment is a Leadership Moment',
        desc: 'An opportunity and a challenge for believers: engaging with technology while staying rooted in timeless biblical truth.',
        slug: 'ai-gospel',
        content: [
            `I've been overwhelmed by the amount of leadership books, articles, and podcasts on how to lead in the AI era.`,

            `And they all seem to be saying the same thing: AI increases the value of distinctly human leadership. McKinsey argued that AI can write, design, code, and complete tasks at breakneck speed, but it still can't do the hard work of leadership itself. Harvard Business Review says that heavy use of AI is undermining the original judgment leaders need. The World Economic Forum says that the real value of the future is in identifying problems, done most uniquely by humans.`,

            `I am overall pleased to see this emerging consistent thesis. But I keep feeling like we're missing something substantial.`,

            `I've had the immense privilege over the last ten years of learning from world-class leaders while helping build FaithTech into a global community of hundreds of leaders. The ones I keep coming back to for advice are rarely just impressive. Yes, they are deeply human. They listen well. They care about people. They know how to be present.`,

            `But the best of them seem to be operating from something deeper than human skill alone.`,

            `Their leadership is shaped by dependence on God, conviction, discernment, restraint, and wisdom. In other words, I keep noticing something deeper than human leadership. What I see in them is godly leadership.`,

            `This AI age needs more than human leadership. It needs godly leadership.`,

            `That could sound like a loaded statement, so let me explain what I mean.`,

            `I do agree that being more human is essential and so important. Prioritize being in person, have compassion and empathy, and care deeply about people. Yet, truly transformational leaders have something else about them. The leaders who most compel me are not simply charismatic, strategic, or gifted. There is often a depth beneath their leadership: a spiritual weight, a clarity, a steadiness, a way of being before God that is hard to quantify but easy to recognize.`,

            `Godliness is a life ordered toward God. Think of the fruit of the Spirit: love, joy, peace, patience, kindness, goodness, faithfulness, gentleness, and self-control from Galatians 5:22–23. Or the eldership qualifications in 1 Timothy 3 and Titus 1. Or lastly, 2 Peter 1:5–7 lays out a compelling vision for godliness: Make every effort to supplement your faith with virtue, and virtue with knowledge, and knowledge with self-control, and self-control with steadfastness, and steadfastness with godliness, and godliness with brotherly affection, and brotherly affection with love.`,

            `In this AI moment in particular, I feel like AI itself exerts a formation pressure on us. AI tends to push us towards something. A way of doing things. Now, I believe that way can be useful, such as asking better questions and improving efficiencies. But godly leadership resists these formative pressures by operating from a different posture.`,

            `Therefore, here are five traits I believe are uniquely helpful right now.`,

            `1. Lead With a Deep Dependence.`,

            `AI tends to push us towards control. It gives us this odd feeling that with enough information, analysis or knowledge, we can manage the uncertainty we are living in. As if we can engineer the right outcomes.`,

            `But godly leaders practice a rich and deep dependence on God. I've been learning to pray before I prompt. My friend Cameron Doolittle helped write a great book titled Lead with Prayer. It is a fundamental trust in the Lord and belief that apart from Jesus we can do nothing. Jesus himself would withdraw to pray and constantly talked about doing the will of Him who sent him. It is a deep well of trust in God above all.`,

            `2. Lead With a Courageous Conviction.`,

            `AI tends to push us toward what is probable. AI is incredible at recognizing patterns and generating likely outputs but it can subtly train us to trust what is most plausible rather than to trust what may be most faithful or countercultural.`,

            `Godly leaders are willing to act on faithful conviction. It comes from a deep conviction from the Lord. Jesus repeatedly acted in ways that confounded conventional expectations. He touched people others avoided, withdrew when crowds wanted more, and rejected shortcuts to power. It reminds me of 2 Timothy 1:7: God gave us a spirit not of fear but of power and love and self-control. I remind our staff team often that the most important thing we can do in leading FaithTech is act in faithful obedience to the Lord. The fruit of that is always the right fruit.`,

            `3. Lead With a Patient Discernment.`,

            `AI tends to push us towards speed. An important gap used to exist between a question and an answer. That gap allowed for our minds to be open to new possibilities. AI is eliminating that gap and immediacy now feels normal and patience feels inefficient.`,

            `But godly leaders are slow and thoughtful. That doesn't mean they don't want to see meaningful impact at scale. It's just that they do not succumb to the illusion that speed equals success. AI collapses the distance between question and answer. Wisdom often requires restoring some distance. It reminds me of the time Paul prayed that believers would grow in knowledge and all discernment, so that they may approve what is excellent (Philippians 1:9–10). Great leaders pursue excellence. They build a culture of excellence. But it comes from patient discernment, making many small great decisions over a period of time that leads to greatest impact.`,

            `4. Lead With Disciplined Limits.`,

            `AI tends to push us towards more. It is so easy to draft a strategy, create ideas, and make things. The intoxication of this AI moment is rooted in the unlimited possibilities and potential. Yet this increased capacity can quietly become an increased hunger for productivity, doing, and carrying more. It's one of the reasons I feel the utopian vision of a nearly workless future underestimates our seemingly limitless human appetite for more.`,

            `Godly leaders, however, know what they are called to and, equally importantly, what they are not called to. They say no. Just because AI enables me to do more does not mean God has called me to do more. The best leaders I know constantly ask me, what are you saying no to right now? It is the self-control we see in Galatians 5 and 1 Timothy 3. Key things like sleep, sabbath, rest. And the best leaders I know have learned how they truly rest and double down on doing that in the right rhythms.`,

            `5. Lead With a Relentless Curiosity.`,

            `AI tends to push us towards answers. It can respond to anything and anytime. We are slowly being trained to move to conclusions too quickly out of uncertainty, rather than sitting in ambiguity long enough to understand what is really going on.`,

            `Godly leaders are non-stop asking thoughtful and timely questions. They want to know more. They are quick to listen and slow to assume they understand. They also resist the urge to demonstrate how quickly they understand. They keep listening long enough to discover what they do not yet understand. It reminds me of James 1:19: quick to hear, slow to speak. Godly leaders are slow to assume and quick to understand.`,

            `None of this means leaders should resist AI. I use it constantly. It can make us better informed, more productive, and more capable. The danger is not using AI; the danger is allowing the logic of the tool to become the logic of our leadership. AI may shape what we can do as leaders. But Jesus must still shape who we become as leaders. Godly leaders.`,
        ],
    },
    {
        author: 'Damola Oladipo',
        image: '/images/blocks/bg-mage.png',
        alt: 'Two people having an interview in a blue studio',
        tags: ['AI', 'ARTICLE'],
        title: 'Why this AI Age Needs More Than Human Leadership',
        desc: 'Everyone says AI increases the value of distinctly human leadership. But something substantial is missing from that thesis.',
        slug: 'ai-leadership',
        content: [
            `I've been overwhelmed by the amount of leadership books, articles, and podcasts on how to lead in the AI era.`,

            `And they all seem to be saying the same thing: AI increases the value of distinctly human leadership. McKinsey argued that AI can write, design, code, and complete tasks at breakneck speed, but it still can't do the hard work of leadership itself. Harvard Business Review says that heavy use of AI is undermining the original judgment leaders need. The World Economic Forum says that the real value of the future is in identifying problems, done most uniquely by humans.`,

            `I am overall pleased to see this emerging consistent thesis. But I keep feeling like we're missing something substantial.`,

            `I've had the immense privilege over the last ten years of learning from world-class leaders while helping build FaithTech into a global community of hundreds of leaders. The ones I keep coming back to for advice are rarely just impressive. Yes, they are deeply human. They listen well. They care about people. They know how to be present.`,

            `But the best of them seem to be operating from something deeper than human skill alone.`,

            `Their leadership is shaped by dependence on God, conviction, discernment, restraint, and wisdom. In other words, I keep noticing something deeper than human leadership. What I see in them is godly leadership.`,

            `This AI age needs more than human leadership. It needs godly leadership.`,

            `That could sound like a loaded statement, so let me explain what I mean.`,

            `I do agree that being more human is essential and so important. Prioritize being in person, have compassion and empathy, and care deeply about people. Yet, truly transformational leaders have something else about them. The leaders who most compel me are not simply charismatic, strategic, or gifted. There is often a depth beneath their leadership: a spiritual weight, a clarity, a steadiness, a way of being before God that is hard to quantify but easy to recognize.`,

            `Godliness is a life ordered toward God. Think of the fruit of the Spirit: love, joy, peace, patience, kindness, goodness, faithfulness, gentleness, and self-control from Galatians 5:22–23. Or the eldership qualifications in 1 Timothy 3 and Titus 1. Or lastly, 2 Peter 1:5–7 lays out a compelling vision for godliness: Make every effort to supplement your faith with virtue, and virtue with knowledge, and knowledge with self-control, and self-control with steadfastness, and steadfastness with godliness, and godliness with brotherly affection, and brotherly affection with love.`,

            `In this AI moment in particular, I feel like AI itself exerts a formation pressure on us. AI tends to push us towards something. A way of doing things. Now, I believe that way can be useful, such as asking better questions and improving efficiencies. But godly leadership resists these formative pressures by operating from a different posture.`,

            `Therefore, here are five traits I believe are uniquely helpful right now.`,

            `1. Lead With a Deep Dependence.`,

            `AI tends to push us towards control. It gives us this odd feeling that with enough information, analysis or knowledge, we can manage the uncertainty we are living in. As if we can engineer the right outcomes.`,

            `But godly leaders practice a rich and deep dependence on God. I've been learning to pray before I prompt. My friend Cameron Doolittle helped write a great book titled Lead with Prayer. It is a fundamental trust in the Lord and belief that apart from Jesus we can do nothing. Jesus himself would withdraw to pray and constantly talked about doing the will of Him who sent him. It is a deep well of trust in God above all.`,

            `2. Lead With a Courageous Conviction.`,

            `AI tends to push us toward what is probable. AI is incredible at recognizing patterns and generating likely outputs but it can subtly train us to trust what is most plausible rather than to trust what may be most faithful or countercultural.`,

            `Godly leaders are willing to act on faithful conviction. It comes from a deep conviction from the Lord. Jesus repeatedly acted in ways that confounded conventional expectations. He touched people others avoided, withdrew when crowds wanted more, and rejected shortcuts to power. It reminds me of 2 Timothy 1:7: God gave us a spirit not of fear but of power and love and self-control. I remind our staff team often that the most important thing we can do in leading FaithTech is act in faithful obedience to the Lord. The fruit of that is always the right fruit.`,

            `3. Lead With a Patient Discernment.`,

            `AI tends to push us towards speed. An important gap used to exist between a question and an answer. That gap allowed for our minds to be open to new possibilities. AI is eliminating that gap and immediacy now feels normal and patience feels inefficient.`,

            `But godly leaders are slow and thoughtful. That doesn't mean they don't want to see meaningful impact at scale. It's just that they do not succumb to the illusion that speed equals success. AI collapses the distance between question and answer. Wisdom often requires restoring some distance. It reminds me of the time Paul prayed that believers would grow in knowledge and all discernment, so that they may approve what is excellent (Philippians 1:9–10). Great leaders pursue excellence. They build a culture of excellence. But it comes from patient discernment, making many small great decisions over a period of time that leads to greatest impact.`,

            `4. Lead With Disciplined Limits.`,

            `AI tends to push us towards more. It is so easy to draft a strategy, create ideas, and make things. The intoxication of this AI moment is rooted in the unlimited possibilities and potential. Yet this increased capacity can quietly become an increased hunger for productivity, doing, and carrying more. It's one of the reasons I feel the utopian vision of a nearly workless future underestimates our seemingly limitless human appetite for more.`,

            `Godly leaders, however, know what they are called to and, equally importantly, what they are not called to. They say no. Just because AI enables me to do more does not mean God has called me to do more. The best leaders I know constantly ask me, what are you saying no to right now? It is the self-control we see in Galatians 5 and 1 Timothy 3. Key things like sleep, sabbath, rest. And the best leaders I know have learned how they truly rest and double down on doing that in the right rhythms.`,

            `5. Lead With a Relentless Curiosity.`,

            `AI tends to push us towards answers. It can respond to anything and anytime. We are slowly being trained to move to conclusions too quickly out of uncertainty, rather than sitting in ambiguity long enough to understand what is really going on.`,

            `Godly leaders are non-stop asking thoughtful and timely questions. They want to know more. They are quick to listen and slow to assume they understand. They also resist the urge to demonstrate how quickly they understand. They keep listening long enough to discover what they do not yet understand. It reminds me of James 1:19: quick to hear, slow to speak. Godly leaders are slow to assume and quick to understand.`,

            `None of this means leaders should resist AI. I use it constantly. It can make us better informed, more productive, and more capable. The danger is not using AI; the danger is allowing the logic of the tool to become the logic of our leadership. AI may shape what we can do as leaders. But Jesus must still shape who we become as leaders. Godly leaders.`,
        ],
    },
    {
        author: 'Damola Oladipo',
        image: '/images/blocks/bg-mage.png',
        alt: 'A filmmaker speaking in a studio',
        tags: ['GOSPEL', 'ARTICLE'],
        title: 'The Gospel of Silicon Valley',
        desc: 'Technology shapes our lives, our work and our future. God desires to move powerfully in and through this space.',
        slug: 'gospel-silicon-valley',
        content: [
            `I've been overwhelmed by the amount of leadership books, articles, and podcasts on how to lead in the AI era.`,

            `And they all seem to be saying the same thing: AI increases the value of distinctly human leadership. McKinsey argued that AI can write, design, code, and complete tasks at breakneck speed, but it still can't do the hard work of leadership itself. Harvard Business Review says that heavy use of AI is undermining the original judgment leaders need. The World Economic Forum says that the real value of the future is in identifying problems, done most uniquely by humans.`,

            `I am overall pleased to see this emerging consistent thesis. But I keep feeling like we're missing something substantial.`,

            `I've had the immense privilege over the last ten years of learning from world-class leaders while helping build FaithTech into a global community of hundreds of leaders. The ones I keep coming back to for advice are rarely just impressive. Yes, they are deeply human. They listen well. They care about people. They know how to be present.`,

            `But the best of them seem to be operating from something deeper than human skill alone.`,

            `Their leadership is shaped by dependence on God, conviction, discernment, restraint, and wisdom. In other words, I keep noticing something deeper than human leadership. What I see in them is godly leadership.`,

            `This AI age needs more than human leadership. It needs godly leadership.`,

            `That could sound like a loaded statement, so let me explain what I mean.`,

            `I do agree that being more human is essential and so important. Prioritize being in person, have compassion and empathy, and care deeply about people. Yet, truly transformational leaders have something else about them. The leaders who most compel me are not simply charismatic, strategic, or gifted. There is often a depth beneath their leadership: a spiritual weight, a clarity, a steadiness, a way of being before God that is hard to quantify but easy to recognize.`,

            `Godliness is a life ordered toward God. Think of the fruit of the Spirit: love, joy, peace, patience, kindness, goodness, faithfulness, gentleness, and self-control from Galatians 5:22–23. Or the eldership qualifications in 1 Timothy 3 and Titus 1. Or lastly, 2 Peter 1:5–7 lays out a compelling vision for godliness: Make every effort to supplement your faith with virtue, and virtue with knowledge, and knowledge with self-control, and self-control with steadfastness, and steadfastness with godliness, and godliness with brotherly affection, and brotherly affection with love.`,

            `In this AI moment in particular, I feel like AI itself exerts a formation pressure on us. AI tends to push us towards something. A way of doing things. Now, I believe that way can be useful, such as asking better questions and improving efficiencies. But godly leadership resists these formative pressures by operating from a different posture.`,

            `Therefore, here are five traits I believe are uniquely helpful right now.`,

            `1. Lead With a Deep Dependence.`,

            `AI tends to push us towards control. It gives us this odd feeling that with enough information, analysis or knowledge, we can manage the uncertainty we are living in. As if we can engineer the right outcomes.`,

            `But godly leaders practice a rich and deep dependence on God. I've been learning to pray before I prompt. My friend Cameron Doolittle helped write a great book titled Lead with Prayer. It is a fundamental trust in the Lord and belief that apart from Jesus we can do nothing. Jesus himself would withdraw to pray and constantly talked about doing the will of Him who sent him. It is a deep well of trust in God above all.`,

            `2. Lead With a Courageous Conviction.`,

            `AI tends to push us toward what is probable. AI is incredible at recognizing patterns and generating likely outputs but it can subtly train us to trust what is most plausible rather than to trust what may be most faithful or countercultural.`,

            `Godly leaders are willing to act on faithful conviction. It comes from a deep conviction from the Lord. Jesus repeatedly acted in ways that confounded conventional expectations. He touched people others avoided, withdrew when crowds wanted more, and rejected shortcuts to power. It reminds me of 2 Timothy 1:7: God gave us a spirit not of fear but of power and love and self-control. I remind our staff team often that the most important thing we can do in leading FaithTech is act in faithful obedience to the Lord. The fruit of that is always the right fruit.`,

            `3. Lead With a Patient Discernment.`,

            `AI tends to push us towards speed. An important gap used to exist between a question and an answer. That gap allowed for our minds to be open to new possibilities. AI is eliminating that gap and immediacy now feels normal and patience feels inefficient.`,

            `But godly leaders are slow and thoughtful. That doesn't mean they don't want to see meaningful impact at scale. It's just that they do not succumb to the illusion that speed equals success. AI collapses the distance between question and answer. Wisdom often requires restoring some distance. It reminds me of the time Paul prayed that believers would grow in knowledge and all discernment, so that they may approve what is excellent (Philippians 1:9–10). Great leaders pursue excellence. They build a culture of excellence. But it comes from patient discernment, making many small great decisions over a period of time that leads to greatest impact.`,

            `4. Lead With Disciplined Limits.`,

            `AI tends to push us towards more. It is so easy to draft a strategy, create ideas, and make things. The intoxication of this AI moment is rooted in the unlimited possibilities and potential. Yet this increased capacity can quietly become an increased hunger for productivity, doing, and carrying more. It's one of the reasons I feel the utopian vision of a nearly workless future underestimates our seemingly limitless human appetite for more.`,

            `Godly leaders, however, know what they are called to and, equally importantly, what they are not called to. They say no. Just because AI enables me to do more does not mean God has called me to do more. The best leaders I know constantly ask me, what are you saying no to right now? It is the self-control we see in Galatians 5 and 1 Timothy 3. Key things like sleep, sabbath, rest. And the best leaders I know have learned how they truly rest and double down on doing that in the right rhythms.`,

            `5. Lead With a Relentless Curiosity.`,

            `AI tends to push us towards answers. It can respond to anything and anytime. We are slowly being trained to move to conclusions too quickly out of uncertainty, rather than sitting in ambiguity long enough to understand what is really going on.`,

            `Godly leaders are non-stop asking thoughtful and timely questions. They want to know more. They are quick to listen and slow to assume they understand. They also resist the urge to demonstrate how quickly they understand. They keep listening long enough to discover what they do not yet understand. It reminds me of James 1:19: quick to hear, slow to speak. Godly leaders are slow to assume and quick to understand.`,

            `None of this means leaders should resist AI. I use it constantly. It can make us better informed, more productive, and more capable. The danger is not using AI; the danger is allowing the logic of the tool to become the logic of our leadership. AI may shape what we can do as leaders. But Jesus must still shape who we become as leaders. Godly leaders.`,
        ],
    },
    {
        author: 'Damola Oladipo',
        image: '/images/blocks/bg-mage.png',
        alt: 'Illustration of diverse people beside a world map',
        tags: ['AI', 'ARTICLE'],
        title: 'This AI Moment is a Gospel Moment',
        desc: 'An opportunity and a challenge for believers: engaging with technology while staying rooted in timeless biblical truth.',
        slug: 'ai-gospel',
        content: [
            `I've been overwhelmed by the amount of leadership books, articles, and podcasts on how to lead in the AI era.`,

            `And they all seem to be saying the same thing: AI increases the value of distinctly human leadership. McKinsey argued that AI can write, design, code, and complete tasks at breakneck speed, but it still can't do the hard work of leadership itself. Harvard Business Review says that heavy use of AI is undermining the original judgment leaders need. The World Economic Forum says that the real value of the future is in identifying problems, done most uniquely by humans.`,

            `I am overall pleased to see this emerging consistent thesis. But I keep feeling like we're missing something substantial.`,

            `I've had the immense privilege over the last ten years of learning from world-class leaders while helping build FaithTech into a global community of hundreds of leaders. The ones I keep coming back to for advice are rarely just impressive. Yes, they are deeply human. They listen well. They care about people. They know how to be present.`,

            `But the best of them seem to be operating from something deeper than human skill alone.`,

            `Their leadership is shaped by dependence on God, conviction, discernment, restraint, and wisdom. In other words, I keep noticing something deeper than human leadership. What I see in them is godly leadership.`,

            `This AI age needs more than human leadership. It needs godly leadership.`,

            `That could sound like a loaded statement, so let me explain what I mean.`,

            `I do agree that being more human is essential and so important. Prioritize being in person, have compassion and empathy, and care deeply about people. Yet, truly transformational leaders have something else about them. The leaders who most compel me are not simply charismatic, strategic, or gifted. There is often a depth beneath their leadership: a spiritual weight, a clarity, a steadiness, a way of being before God that is hard to quantify but easy to recognize.`,

            `Godliness is a life ordered toward God. Think of the fruit of the Spirit: love, joy, peace, patience, kindness, goodness, faithfulness, gentleness, and self-control from Galatians 5:22–23. Or the eldership qualifications in 1 Timothy 3 and Titus 1. Or lastly, 2 Peter 1:5–7 lays out a compelling vision for godliness: Make every effort to supplement your faith with virtue, and virtue with knowledge, and knowledge with self-control, and self-control with steadfastness, and steadfastness with godliness, and godliness with brotherly affection, and brotherly affection with love.`,

            `In this AI moment in particular, I feel like AI itself exerts a formation pressure on us. AI tends to push us towards something. A way of doing things. Now, I believe that way can be useful, such as asking better questions and improving efficiencies. But godly leadership resists these formative pressures by operating from a different posture.`,

            `Therefore, here are five traits I believe are uniquely helpful right now.`,

            `1. Lead With a Deep Dependence.`,

            `AI tends to push us towards control. It gives us this odd feeling that with enough information, analysis or knowledge, we can manage the uncertainty we are living in. As if we can engineer the right outcomes.`,

            `But godly leaders practice a rich and deep dependence on God. I've been learning to pray before I prompt. My friend Cameron Doolittle helped write a great book titled Lead with Prayer. It is a fundamental trust in the Lord and belief that apart from Jesus we can do nothing. Jesus himself would withdraw to pray and constantly talked about doing the will of Him who sent him. It is a deep well of trust in God above all.`,

            `2. Lead With a Courageous Conviction.`,

            `AI tends to push us toward what is probable. AI is incredible at recognizing patterns and generating likely outputs but it can subtly train us to trust what is most plausible rather than to trust what may be most faithful or countercultural.`,

            `Godly leaders are willing to act on faithful conviction. It comes from a deep conviction from the Lord. Jesus repeatedly acted in ways that confounded conventional expectations. He touched people others avoided, withdrew when crowds wanted more, and rejected shortcuts to power. It reminds me of 2 Timothy 1:7: God gave us a spirit not of fear but of power and love and self-control. I remind our staff team often that the most important thing we can do in leading FaithTech is act in faithful obedience to the Lord. The fruit of that is always the right fruit.`,

            `3. Lead With a Patient Discernment.`,

            `AI tends to push us towards speed. An important gap used to exist between a question and an answer. That gap allowed for our minds to be open to new possibilities. AI is eliminating that gap and immediacy now feels normal and patience feels inefficient.`,

            `But godly leaders are slow and thoughtful. That doesn't mean they don't want to see meaningful impact at scale. It's just that they do not succumb to the illusion that speed equals success. AI collapses the distance between question and answer. Wisdom often requires restoring some distance. It reminds me of the time Paul prayed that believers would grow in knowledge and all discernment, so that they may approve what is excellent (Philippians 1:9–10). Great leaders pursue excellence. They build a culture of excellence. But it comes from patient discernment, making many small great decisions over a period of time that leads to greatest impact.`,

            `4. Lead With Disciplined Limits.`,

            `AI tends to push us towards more. It is so easy to draft a strategy, create ideas, and make things. The intoxication of this AI moment is rooted in the unlimited possibilities and potential. Yet this increased capacity can quietly become an increased hunger for productivity, doing, and carrying more. It's one of the reasons I feel the utopian vision of a nearly workless future underestimates our seemingly limitless human appetite for more.`,

            `Godly leaders, however, know what they are called to and, equally importantly, what they are not called to. They say no. Just because AI enables me to do more does not mean God has called me to do more. The best leaders I know constantly ask me, what are you saying no to right now? It is the self-control we see in Galatians 5 and 1 Timothy 3. Key things like sleep, sabbath, rest. And the best leaders I know have learned how they truly rest and double down on doing that in the right rhythms.`,

            `5. Lead With a Relentless Curiosity.`,

            `AI tends to push us towards answers. It can respond to anything and anytime. We are slowly being trained to move to conclusions too quickly out of uncertainty, rather than sitting in ambiguity long enough to understand what is really going on.`,

            `Godly leaders are non-stop asking thoughtful and timely questions. They want to know more. They are quick to listen and slow to assume they understand. They also resist the urge to demonstrate how quickly they understand. They keep listening long enough to discover what they do not yet understand. It reminds me of James 1:19: quick to hear, slow to speak. Godly leaders are slow to assume and quick to understand.`,

            `None of this means leaders should resist AI. I use it constantly. It can make us better informed, more productive, and more capable. The danger is not using AI; the danger is allowing the logic of the tool to become the logic of our leadership. AI may shape what we can do as leaders. But Jesus must still shape who we become as leaders. Godly leaders.`,
        ],
    },
    {
        author: 'Damola Oladipo',
        image: '/images/blocks/bg-mage.png',
        alt: 'Illustration of diverse people beside a world map',
        tags: ['AI', 'ARTICLE'],
        title: 'This AI Moment is a Gospel Moment',
        desc: 'An opportunity and a challenge for believers: engaging with technology while staying rooted in timeless biblical truth.',
        slug: 'ai-gospel',
        content: [
            `I've been overwhelmed by the amount of leadership books, articles, and podcasts on how to lead in the AI era.`,

            `And they all seem to be saying the same thing: AI increases the value of distinctly human leadership. McKinsey argued that AI can write, design, code, and complete tasks at breakneck speed, but it still can't do the hard work of leadership itself. Harvard Business Review says that heavy use of AI is undermining the original judgment leaders need. The World Economic Forum says that the real value of the future is in identifying problems, done most uniquely by humans.`,

            `I am overall pleased to see this emerging consistent thesis. But I keep feeling like we're missing something substantial.`,

            `I've had the immense privilege over the last ten years of learning from world-class leaders while helping build FaithTech into a global community of hundreds of leaders. The ones I keep coming back to for advice are rarely just impressive. Yes, they are deeply human. They listen well. They care about people. They know how to be present.`,

            `But the best of them seem to be operating from something deeper than human skill alone.`,

            `Their leadership is shaped by dependence on God, conviction, discernment, restraint, and wisdom. In other words, I keep noticing something deeper than human leadership. What I see in them is godly leadership.`,

            `This AI age needs more than human leadership. It needs godly leadership.`,

            `That could sound like a loaded statement, so let me explain what I mean.`,

            `I do agree that being more human is essential and so important. Prioritize being in person, have compassion and empathy, and care deeply about people. Yet, truly transformational leaders have something else about them. The leaders who most compel me are not simply charismatic, strategic, or gifted. There is often a depth beneath their leadership: a spiritual weight, a clarity, a steadiness, a way of being before God that is hard to quantify but easy to recognize.`,

            `Godliness is a life ordered toward God. Think of the fruit of the Spirit: love, joy, peace, patience, kindness, goodness, faithfulness, gentleness, and self-control from Galatians 5:22–23. Or the eldership qualifications in 1 Timothy 3 and Titus 1. Or lastly, 2 Peter 1:5–7 lays out a compelling vision for godliness: Make every effort to supplement your faith with virtue, and virtue with knowledge, and knowledge with self-control, and self-control with steadfastness, and steadfastness with godliness, and godliness with brotherly affection, and brotherly affection with love.`,

            `In this AI moment in particular, I feel like AI itself exerts a formation pressure on us. AI tends to push us towards something. A way of doing things. Now, I believe that way can be useful, such as asking better questions and improving efficiencies. But godly leadership resists these formative pressures by operating from a different posture.`,

            `Therefore, here are five traits I believe are uniquely helpful right now.`,

            `1. Lead With a Deep Dependence.`,

            `AI tends to push us towards control. It gives us this odd feeling that with enough information, analysis or knowledge, we can manage the uncertainty we are living in. As if we can engineer the right outcomes.`,

            `But godly leaders practice a rich and deep dependence on God. I've been learning to pray before I prompt. My friend Cameron Doolittle helped write a great book titled Lead with Prayer. It is a fundamental trust in the Lord and belief that apart from Jesus we can do nothing. Jesus himself would withdraw to pray and constantly talked about doing the will of Him who sent him. It is a deep well of trust in God above all.`,

            `2. Lead With a Courageous Conviction.`,

            `AI tends to push us toward what is probable. AI is incredible at recognizing patterns and generating likely outputs but it can subtly train us to trust what is most plausible rather than to trust what may be most faithful or countercultural.`,

            `Godly leaders are willing to act on faithful conviction. It comes from a deep conviction from the Lord. Jesus repeatedly acted in ways that confounded conventional expectations. He touched people others avoided, withdrew when crowds wanted more, and rejected shortcuts to power. It reminds me of 2 Timothy 1:7: God gave us a spirit not of fear but of power and love and self-control. I remind our staff team often that the most important thing we can do in leading FaithTech is act in faithful obedience to the Lord. The fruit of that is always the right fruit.`,

            `3. Lead With a Patient Discernment.`,

            `AI tends to push us towards speed. An important gap used to exist between a question and an answer. That gap allowed for our minds to be open to new possibilities. AI is eliminating that gap and immediacy now feels normal and patience feels inefficient.`,

            `But godly leaders are slow and thoughtful. That doesn't mean they don't want to see meaningful impact at scale. It's just that they do not succumb to the illusion that speed equals success. AI collapses the distance between question and answer. Wisdom often requires restoring some distance. It reminds me of the time Paul prayed that believers would grow in knowledge and all discernment, so that they may approve what is excellent (Philippians 1:9–10). Great leaders pursue excellence. They build a culture of excellence. But it comes from patient discernment, making many small great decisions over a period of time that leads to greatest impact.`,

            `4. Lead With Disciplined Limits.`,

            `AI tends to push us towards more. It is so easy to draft a strategy, create ideas, and make things. The intoxication of this AI moment is rooted in the unlimited possibilities and potential. Yet this increased capacity can quietly become an increased hunger for productivity, doing, and carrying more. It's one of the reasons I feel the utopian vision of a nearly workless future underestimates our seemingly limitless human appetite for more.`,

            `Godly leaders, however, know what they are called to and, equally importantly, what they are not called to. They say no. Just because AI enables me to do more does not mean God has called me to do more. The best leaders I know constantly ask me, what are you saying no to right now? It is the self-control we see in Galatians 5 and 1 Timothy 3. Key things like sleep, sabbath, rest. And the best leaders I know have learned how they truly rest and double down on doing that in the right rhythms.`,

            `5. Lead With a Relentless Curiosity.`,

            `AI tends to push us towards answers. It can respond to anything and anytime. We are slowly being trained to move to conclusions too quickly out of uncertainty, rather than sitting in ambiguity long enough to understand what is really going on.`,

            `Godly leaders are non-stop asking thoughtful and timely questions. They want to know more. They are quick to listen and slow to assume they understand. They also resist the urge to demonstrate how quickly they understand. They keep listening long enough to discover what they do not yet understand. It reminds me of James 1:19: quick to hear, slow to speak. Godly leaders are slow to assume and quick to understand.`,

            `None of this means leaders should resist AI. I use it constantly. It can make us better informed, more productive, and more capable. The danger is not using AI; the danger is allowing the logic of the tool to become the logic of our leadership. AI may shape what we can do as leaders. But Jesus must still shape who we become as leaders. Godly leaders.`,
        ],
    },
];

export const profiles: ITeamMember[] = [
    {
        name: 'Rahbihat Rabiu',
        role: 'State Coordinator',
        image: '/blocks/rahbihat.svg',
        alt: 'Rahbihat Rabiu, State Coordinator',
        position: 'center 35%',
    },
    {
        name: 'Adeyemi Oluwabunmi',
        role: 'Deputy Coordinator',
        image: '/blocks/adeyemi.svg',
        alt: 'Adeyemi Oluwabunmi, Automation Specialist',
        position: 'center 35%',
    },
    {
        name: 'Excellent Isaac',
        role: 'Programmes Coordinator',
        image: '/blocks/excellent.svg',
        alt: 'Excellent Isaac, Programmes Coordinator',
        position: 'center 28%',
    },
    {
        name: 'Ugomma Arhuere',
        role: 'General Secretary',
        image: '/blocks/ugomma.svg',
        alt: 'Ugomma Arhuere, General Secretary',
        position: 'center 32%',
    },
    {
        name: 'Odeyemi Emmanuel',
        role: 'Social Media Manager',
        image: '/blocks/emmanuel.svg',
        alt: 'Odeyemi Emmanuel, Social media and Communication Manager',
        position: 'center 25%',
    },
    {
        name: 'Theresa Chibogu',
        role: 'Financial Secretary',
        image: '/blocks/theresa.svg',
        alt: 'Theresa Chibogu, Financial Secretary',
        position: 'center 25%',
    },
];


export const upcomingEvents: IEvent[] = [
    {
        day: '20',
        month: 'NOV',
        type: 'MEETUP',
        location: 'Lagos X Pacepard',
        title: 'AI, Work & the Kingdom',
        description:
            'An evening of talks and prayer on building AI responsibly in African markets.',
        accent: 'bg-[#e8e3dc]',
        slug: 'ai-work-kingdom',
    },
    {
        day: '05',
        month: 'DEC',
        type: 'CREATE',
        location: 'Nairobi',
        title: 'Create Weekend: AgTech',
        description:
            'Small teams prototype tools with smallholder farmers over two days.',
        accent: 'bg-[#2695bd] text-white',
        slug: 'create-weekend-agtech',
    },
    {
        day: '11',
        month: 'DEC',
        type: 'STORY NIGHT',
        location: 'Cape Town',
        title: 'Story Night',
        description:
            'Founders and engineers share how faith shapes what they build.',
        accent: 'bg-[#fff21f]',
        slug: 'story-night',
    },
    {
        day: '15',
        month: 'SEPT',
        type: 'ONLINE',
        location: 'Online',
        title: 'Pan-African Builders Call',
        description:
            'A monthly call for city leaders and Create teams across the continent.',
        accent: 'bg-[#15150d] text-white',
        slug: 'pan-african-builders-call',
    },
    {
        day: '25',
        month: 'JAN',
        type: 'ONLINE',
        location: 'Online',
        title: 'Pan-African Builders Call',
        description:
            'A monthly call for city leaders and Create teams across the continent.',
        accent: 'bg-[#15150d] text-white',
        slug: 'pan-african-builders-call-2',
    },
];

export const pastEvents: IEvent[] = [
    {
        day: '20',
        month: 'NOV',
        type: 'MEETUP',
        location: 'Lagos',
        title: 'AI, Work & the Kingdom',
        description:
            'An evening of talks and prayer on building AI responsibly in African markets.',
        accent: 'bg-[#e8e3dc]',
        slug: 'ai-work-kingdom-past',
    },
    {
        day: '05',
        month: 'DEC',
        type: 'CREATE',
        location: 'Nairobi',
        title: 'Create Weekend: AgTech',
        description:
            'Small teams prototype tools with smallholder farmers over two days.',
        accent: 'bg-[#2695bd] text-white',
        slug: 'create-weekend-agtech-past',
    },
    {
        day: '11',
        month: 'DEC',
        type: 'STORY NIGHT',
        location: 'Cape Town',
        title: 'Story Night',
        description:
            'Founders and engineers share how faith shapes what they build.',
        accent: 'bg-[#fff21f]',
        slug: 'story-night-past',
    },
    {
        day: '15',
        month: 'JAN',
        type: 'ONLINE',
        location: 'Online',
        title: 'Pan-African Builders Call',
        description:
            'A monthly call for city leaders and Create teams across the continent.',
        accent: 'bg-[#15150d] text-white',
        slug: 'pan-african-builders-call-past',
    },
    {
        day: '15',
        month: 'SEPT',
        type: 'ONLINE',
        location: 'Online',
        title: 'Pan-African Builders Call',
        description:
            'A monthly call for city leaders and Create teams across the continent.',
        accent: 'bg-[#15150d] text-white',
        slug: 'pan-african-builders-call-sept',
    },
    {
        day: '25',
        month: 'JAN',
        type: 'ONLINE',
        location: 'Online',
        title: 'Pan-African Builders Call',
        description:
            'A monthly call for city leaders and Create teams across the continent.',
        accent: 'bg-[#15150d] text-white',
        slug: 'pan-african-builders-call-jan25',
    },
    {
        day: '26',
        month: 'JAN',
        type: 'ONLINE',
        location: 'Online',
        title: 'Pan-African Builders Call',
        description:
            'A monthly call for city leaders and Create teams across the continent.',
        accent: 'bg-[#15150d] text-white',
        slug: 'pan-african-builders-call-jan26',
    },
];

export const faqs = [
    {
        question: 'What does Inosuft do?',
        answer: 'Inosuft helps businesses design, build, and scale reliable software systems and technology infrastructure. We work on solutions such as web platforms, mobile applications, cloud infrastructure, APIs, automation systems, dashboards, and enterprise-grade digital products.',
    },
    {
        question: 'Who is Inosuft built for?',
        answer: 'Inosoft is built for startups, growing businesses, enterprises, and organizations that need dependable technology partners. Whether you are launching a new product, improving an existing system, or modernizing internal operations, we help turn your ideas into practical, scalable solutions.',
    },
    {
        question: 'Can Inosuft build a product from scratch?',
        answer: 'Yes. We can take a product from idea to execution. This includes discovery, product planning, technical architecture, UI/UX design support, backend development, frontend development, deployment, testing, and post-launch support.',
    },
    {
        question: 'Do you only build websites and apps?',
        answer: 'No. While we build websites and applications, Inosoft focuses more broadly on software and technology infrastructure. That means we also help with backend systems, cloud deployment, payment integrations, automation tools, APIs, internal business platforms, data systems, and scalable architecture.',
    },
    {
        question: 'Can Inosuft help improve an existing software product?',
        answer: 'Yes. If you already have a product, we can help review the architecture, fix performance issues, improve security, rebuild weak modules, add new features, clean up technical debt, or prepare the system for growth.',
    },
    {
        question: 'Does Inosuft work with non-technical founders?',
        answer: 'Yes. You do not need to have a technical background before working with us. We help translate your business idea into clear product requirements, user flows, technical specifications, and an execution roadmap your team can understand.',
    },
    {
        question: 'What industries does Inosuft support?',
        answer: 'Inosuft can support businesses across several industries, including fintech, hospitality, education, logistics, e-commerce, SaaS, business automation, enterprise operations, and digital platforms. Our focus is on building technology that solves real operational and growth problems.',
    },
    {
        question: 'How does Inosuft approach software development?',
        answer: 'We use a structured, product-first approach. Before writing code, we try to understand the business goal, users, workflows, system requirements, risks, and long-term scalability needs. This helps us build software that is not just functional but maintainable and ready to grow.',
    },
    {
        question: 'Can Inosuft handle cloud deployment and infrastructure?',
        answer: 'Yes. We help businesses deploy, manage, and scale their systems on cloud platforms. This can include server setup, databases, storage, CI/CD pipelines, monitoring, security configuration, API gateways, containerization, and production environment management.',
    },
    {
        question: 'Why should a business choose Inosuft?',
        answer: ' Businesses choose Inosoft because we combine software engineering, product thinking, and infrastructure planning. We do not just build what is requested; we help shape the right solution, avoid unnecessary complexity, and create systems that can support real business growth.',
    },
];

export const LOGOS = [
    '/images/blocks/usmission.svg',
    '/images/blocks/learners.svg',
    '/images/blocks/corner.svg',
    '/images/blocks/consulate.svg',
    '/images/blocks/mwf.svg',
    '/images/blocks/rlc.svg',
    '/images/blocks/pacepard.svg',
];

export const pagination: IPagination = {
    next: { page: 1, limit: 25 },
    prev: { page: 1, limit: 25 },
};

export const collection: ICollection = {
    data: [],
    count: 0,
    total: 0,
    pagination: pagination,
    loading: false,
    message: 'There are no data currently',
};

export const avatars = [
    { name: 'sandra', avatar: 'https://storage.googleapis.com/pacepard-buckets/sandra.png' },
    { name: 'femi', avatar: 'https://storage.googleapis.com/pacepard-buckets/femi.png' },
    { name: 'vivek', avatar: 'https://storage.googleapis.com/pacepard-buckets/vivek.png' },
    { name: 'zuri', avatar: 'https://storage.googleapis.com/pacepard-buckets/zuri.png' },
    { name: 'minho', avatar: 'https://storage.googleapis.com/pacepard-buckets/Minho.png' },
    { name: 'sophie', avatar: 'https://storage.googleapis.com/pacepard-buckets/sophie.png' },
    { name: 'trab', avatar: 'https://storage.googleapis.com/pacepard-buckets/trab.png' },
]
