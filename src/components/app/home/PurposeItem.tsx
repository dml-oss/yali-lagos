import { IPurposeCard } from '@/utils/interfaces.util';

const PurposeCard = (data: IPurposeCard) => {
    
    const { number, label, title, description, className, dark } = data;
    
    return (
        <article
            className={`flex min-h-[320px] flex-col justify-between rounded-xl p-6 max-sm:min-h-[280px] max-sm:p-5 sm:min-h-[360px] sm:p-8 lg:min-h-[408px] lg:p-10 ${className}`}
        >
            <span
                className={`text-[clamp(48px,10vw,78px)] font-light italic leading-none tracking-[-0.08em] ${dark ? 'text-white/90' : 'text-[#171817]'}`}
            >
                {number}
            </span>
            <div className="flex flex-col gap-3">
                <p
                    className={`m-0 text-[13px] font-semibold uppercase tracking-[0.12em] sm:text-[16px] ${dark ? 'text-[#fff21f]' : 'text-[#4f4d45]'}`}
                >
                    {label}
                </p>
                <h2
                    className={`m-0 text-[clamp(22px,3.4vw,37px)] font-normal leading-[1.05] tracking-[-0.055em] ${dark ? 'text-white' : 'text-[#171817]'}`}
                >
                    {title}
                </h2>
                <p
                    className={`m-0 max-w-[430px] text-[clamp(15px,3vw,20px)] leading-[1.35] ${dark ? 'text-white/65' : 'text-[#4f4d45]'}`}
                >
                    {description}
                </p>
            </div>
        </article>
    );
};

export default PurposeCard;
