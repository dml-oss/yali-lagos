
import Link from 'next/link';

import type { NavDropdownItem } from '@/utils/interfaces.util';
import { NavDropdownIcon } from './NavDropdownIcon';

import { cx } from '@/lib/utils';

type NavDropdownLinkTheme = 'dark' | 'light';

type NavDropdownLinkProps = {
    item: NavDropdownItem;
    onNavigate?: () => void;
    className?: string;
    theme?: NavDropdownLinkTheme;
};

export function NavDropdownLink({
    item,
    onNavigate,
    className,
    theme = 'dark',
}: NavDropdownLinkProps) {
    const Icon = item.icon;
    const isLight = theme === 'light';

    return (
        <Link
            href={item.href}
            target={item.external ? '_blank' : undefined}
            rel={item.external ? 'noopener noreferrer' : undefined}
            className={cx(
                'group flex w-full flex-row items-center gap-3 rounded-md p-2 leading-none no-underline outline-hidden transition-colors select-none',
                isLight
                    ? 'bg-white text-[#171817] hover:bg-[#2aaae0] focus:bg-[#2aaae0]'
                    : 'bg-[#0D252B] text-white hover:bg-[#2aaae0] focus:bg-[#2aaae0]',
                className,
            )}
            onClick={onNavigate}
        >
            {item.image ? (
                <img
                    src={item.image}
                    alt={item.title}
                    className="h-8 w-auto shrink-0 rounded-md object-cover"
                />
            ) : Icon ? (
                <NavDropdownIcon
                    icon={Icon}
                    variant={item.iconVariant ?? 'neutral'}
                    theme={theme}
                />
            ) : null}

            <div className="min-w-0 flex-1">
                <div
                    className={cx(
                        'text-sm leading-snug font-medium',
                        isLight
                            ? 'text-[#171817] group-hover:text-[#171817] group-focus:text-[#171817]'
                            : 'text-white group-hover:text-white group-focus:text-white',
                    )}
                >
                    {item.title}
                </div>

                <p
                    className={cx(
                        'line-clamp-2 text-sm leading-snug',
                        isLight
                            ? 'text-[#171817]/70 group-hover:text-[#171817]/70 group-focus:text-[#171817]/70'
                            : 'text-white/70 group-hover:text-white/70 group-focus:text-white/70',
                    )}
                >
                    {item.description}
                </p>
            </div>
        </Link>
    );
}
