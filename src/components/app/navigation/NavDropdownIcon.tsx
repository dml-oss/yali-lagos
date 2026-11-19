import type { LucideIcon } from 'lucide-react';

import { cx } from '@/lib/utils';

export type NavIconVariant = 'neutral' | 'brand' | 'brand-filled';
export type NavIconTheme = 'dark' | 'light';

const iconBoxStyles: Record<
    NavIconVariant,
    { box: string; icon: string }
> = {
    neutral: {
        box: 'border border-white/30 bg-white/10',
        icon: 'text-[#2aaae0] group-hover:text-white',
    },
    brand: {
        box: 'border border-white/30 bg-white/10',
        icon: 'text-[#2aaae0] group-hover:text-white',
    },
    'brand-filled': {
        box: 'border border-white/30 bg-white/10',
        icon: 'text-[#2aaae0] group-hover:text-white',
    },
};

const lightBoxStyles: Record<NavIconVariant, { box: string; icon: string }> = {
    neutral: {
        box: 'border border-black/15 bg-black/5',
        icon: 'text-[#2aaae0] group-hover:text-white',
    },
    brand: {
        box: 'border border-black/15 bg-black/5',
        icon: 'text-[#2aaae0] group-hover:text-white',
    },
    'brand-filled': {
        box: 'border border-black/15 bg-black/5',
        icon: 'text-[#2aaae0] group-hover:text-white',
    },
};

export type NavDropdownIconProps = {
    icon: LucideIcon;
    variant?: NavIconVariant;
    theme?: NavIconTheme;
    size?: 'sm' | 'md';
    className?: string;
};

export function NavDropdownIcon({
    icon: Icon,
    variant = 'neutral',
    theme = 'dark',
    size = 'md',
    className,
}: NavDropdownIconProps) {
    const styles = theme === 'light' ? lightBoxStyles[variant] : iconBoxStyles[variant];
    const boxSize = size === 'sm' ? 'size-9' : 'size-10';
    const iconSize = size === 'sm' ? 'size-4' : 'size-[18px]';

    return (
        <div
            className={cx(
                'flex shrink-0 items-center justify-center rounded-md',
                boxSize,
                styles.box,
                className,
            )}
        >
            <Icon className={cx(iconSize, styles.icon)} strokeWidth={2} />
        </div>
    );
}
