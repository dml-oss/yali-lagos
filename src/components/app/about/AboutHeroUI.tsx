const stats = [
    {
        value: '5,000,000+',
        label: 'Young leaders engaged',
    },
    {
        value: '200+',
        label: 'Community initiatives',
    },
    {
        value: '100+',
        label: 'Leadership and civic programs',
    },
    {
        value: '1',
        label: 'Global network of changemakers',
    },
];
export function AboutHero() {
    return (
        <section className="py-8 sm:py-12 lg:py-16">
            <div className="mx-auto max-w-5xl px-4 sm:px-6 flex flex-col justify-between gap-8 md:gap-12 lg:flex-row lg:items-center lg:gap-16 xl:gap-20">
                <div className="flex-[1.5]">
                    <h1 className="text-[clamp(28px,5vw,48px)] tracking-tight text-[#171817]">
                        Empowering you to lead change
                    </h1>

                    <p className="text-[#171817] mt-4 text-[clamp(18px,3vw,28px)] md:text-2xl lg:text-3xl">
                        We are a community of young leaders driving positive
                        change across Lagos and beyond.
                    </p>

                    <p className="text-[#171817] mt-6 hidden max-w-lg space-y-4 text-[clamp(15px,2.4vw,18px)] text-balance md:block lg:mt-10">
                        YALI Network Lagos connects young Nigerians who are
                        committed to leadership, civic engagement,
                        entrepreneurship, and community development. Through
                        learning opportunities, collaborative projects, and
                        community initiatives, we help young people build the
                        skills, networks, and confidence to make a difference.
                        <br />
                        <br />
                        YALI Network Lagos connects young Nigerians with
                        opportunities to develop their leadership skills, build
                        meaningful relationships, and turn ideas into action.
                        Through community engagement, professional development,
                        and civic participation, we help young people contribute
                        to a better future for Lagos, Nigeria, and Africa.
                    </p>
                </div>

                <div
                    className={`relative flex flex-1 flex-col justify-center gap-3 pt-8 lg:pt-0 lg:pl-6`}
                >
                    {stats.map((stat) => (
                        <div key={stat.label} className="flex flex-col gap-1">
                            <div className="font-display text-[clamp(32px,5vw,48px)] tracking-wide md:text-5xl text-[#171817]">
                                {stat.value}
                            </div>
                            <div className="text-[#171817] text-[clamp(14px,2vw,16px)]">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
