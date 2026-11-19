import { ArrowRight } from 'lucide-react';

type IInvolvementCard = {
    title: string;
    description: string;
    action: string;
    href: string;
    className: string;
    dark?: boolean;
};

const InvolvementCard = (data: IInvolvementCard) => {
    const { title, description, action, href, className, dark } = data;

    return (
        <a
            href={href}
            className={`group flex min-h-[290px] flex-col justify-between rounded-lg p-7 transition-transform duration-200 hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#171817] sm:p-7 lg:min-h-[290px] ${className}`}
        >
            <div className="flex flex-col gap-2">
                <h2
                    className={`m-0 text-[clamp(26px,1.7vw,33px)] font-normal leading-[1.08] tracking-[-0.045em] ${dark ? 'text-white' : 'text-[#171817]'}`}
                >
                    {title}
                </h2>
                <p
                    className={`m-0 max-w-[270px] text-[17px] leading-[1.35] ${dark ? 'text-white/70' : 'text-[#555452]'}`}
                >
                    {description}
                </p>
            </div>
            <span
                className={`inline-flex items-center gap-3 text-[17px] font-medium ${dark ? 'text-white' : 'text-[#171817]'}`}
            >
                {action}
                <ArrowRight
                    aria-hidden="true"
                    className="size-5 transition-transform group-hover:translate-x-1"
                    strokeWidth={1.7}
                />
            </span>
        </a>
    );
};

export default InvolvementCard;
