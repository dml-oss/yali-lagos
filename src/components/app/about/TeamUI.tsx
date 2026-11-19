import { profiles } from "@/_data/seed";

export function Team() {
    return (
        <div
            className="min-h-screen bg-white px-5 py-24 sm:px-8 lg:px-[4.3vw]"
            aria-label="Our team"
        >
            <div
                className="relative flex min-h-[60px] overflow-hidden rounded-sm bg-[radial-gradient(#F95C26_1px,transparent_1px)] bg-[size:18px_18px] sm:rounded-xl sm:bg-[size:22px_22px] lg:min-h-[100px]"
                aria-labelledby="who-we-are-title"
            />

            <div
                className="mx-auto grid max-w-[1900px] grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-4"
                aria-label="Meet the team"
            >
                {profiles.map((profile) => (
                    <article
                        key={profile.name}
                        className="group relative aspect-[0.72] min-h-[460px]  overflow-hidden rounded-[10px] bg-[#dedbd5] shadow-[0_8px_24px_rgba(0,0,0,0.08)] sm:min-h-[520px] lg:aspect-auto lg:min-h-[min(72vh,550px)]"
                    >
                        <img
                            src={profile.image}
                            alt={profile.alt}
                            className="absolute inset-0 size-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025]"
                            style={{ objectPosition: profile.position }}
                        />
                        <div
                            className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"
                            aria-hidden="true"
                        />
                        <div className="absolute inset-x-0 bottom-0 px-5 pb-5 pt-16 text-white sm:px-6 sm:pb-6">
                            <h2 className="m-0 font-serif text-[24px] font-semibold leading-tight">
                                {profile.name}
                            </h2>
                            <p className="mt-1 m-0 font-serif text-[14px] leading-tight text-white/80">
                                {profile.role}
                            </p>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    );
}
