'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown, Check } from 'lucide-react';

import { cx } from '@/lib/utils';
import { NavDropdownLink } from './NavDropdownLink';
import { NavDropdownItem, NavItem } from '@/utils/interfaces.util';
import { upcomingEvents } from '@/_data/seed';

function MobileNavRow({
    item,
    onNavigate,
}: {
    item: NavDropdownItem;
    onNavigate: () => void;
}) {
    return (
        <NavDropdownLink
            item={item}
            onNavigate={onNavigate}
            className="px-3 py-2 bg-transparent hover:bg-[#2aaae0] text-white group w-full"
        />
    );
}

function MobileAccordionPanel({
    link,
    onNavigate,
}: {
    link: NavItem;
    onNavigate: () => void;
}) {
    if ('sections' in link && link.sections) {
        // Check if this is the Events section - render upcomingEvents grid
        const isEventsSection = link.label === 'Events';

        if (isEventsSection) {
            return (
                <div className="mt-6 space-y-6 w-full max-w-[380px]">
                    <p className="mb-3 px-2 text-xs font-semibold tracking-wider text-stone-500 uppercase">
                        Upcoming Events
                    </p>
                    <ul className="space-y-1">
                        {upcomingEvents.map((event) => (
                            <li key={event.slug} className="flex items-center gap-3 rounded-lg p-3 transition-colors hover:bg-stone-100">
                                <div className="min-w-0 flex-1">
                                    <p className="truncate text-sm font-semibold text-white">
                                        {event.title}
                                    </p>
                                    <div className="flex items-baseline text-xs text-white/80">
                                        <span className="me-2">
                                            <time className="flex h-[16px] flex-col items-center justify-center rounded-lg bg-[#15150d] text-white">
                                                {event.day}
                                            </time>
                                        </span>
                                        <span>
                                            {event.month}
                                        </span>
                                    </div>
                                </div>

                                {/* Event image */}
                                <div className="relative size-16 shrink-0 overflow-hidden rounded-md bg-stone-200">
                                    <Image
                                        src={
                                            {
                                                'ai-work-kingdom': '/images/blocks/yali-impact.jpeg',
                                                'create-weekend-agtech': '/images/blocks/yali-masterclass.jpeg',
                                                'story-night': '/images/blocks/Join-yali.jpeg',
                                                'pan-african-builders-call': '/images/blocks/yali-work.jpeg',
                                                'pan-african-builders-call-2': '/images/blocks/yali-inclusive.jpeg',
                                            }[event.slug] ?? ''
                                        }
                                        alt={event.title}
                                        fill
                                        sizes="64px"
                                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                                    />
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            );
        }

        return (
            <div className="mt-6 space-y-6 w-full max-w-[380px]">
                {link.sections.map((section) => (
                    <div key={section.label} className="space-y-1">
                        <p className="text-muted-foreground mb-3 text-xs font-medium tracking-wider uppercase">
                            {section.label}
                        </p>
                        {section.items.map((item) => (
                            <MobileNavRow
                                key={item.title}
                                item={item}
                                onNavigate={onNavigate}
                            />
                        ))}
                    </div>
                ))}
            </div>
        );
    }

    const items = getMobileDropdownItems(link);
    return (
        <div className="mt-6 space-y-1 w-full max-w-[380px]">
            {items.map((item) => (
                <MobileNavRow
                    key={item.title}
                    item={item}
                    onNavigate={onNavigate}
                />
            ))}
        </div>
    );
}

export function MobileNavList({
    items,
    pathname,
    openDropdown,
    onToggleDropdown,
    onNavigate,
}: {
    items: NavItem[];
    pathname: string;
    openDropdown: string | null;
    onToggleDropdown: (label: string) => void;
    onNavigate: () => void;
}) {
    return (
        <nav className="divide-border flex flex-1 flex-col divide-y divide-white/10 w-full overflow-x-hidden">
            {items.map((link) => {
                const dropdownItems =
                    'dropdownItems' in link && link.dropdownItems
                        ? link.dropdownItems
                        : 'sections' in link && link.sections
                          ? link.sections.flatMap((section) => section.items)
                          : [];

                if (dropdownItems.length > 0) {
                    const isOpen = openDropdown === link.label;

                    return (
                        <div
                            key={link.label}
                            className="py-5 first:pt-0 last:pb-0"
                        >
                            <button
                                type="button"
                                onClick={() => onToggleDropdown(link.label)}
                                className="text-foreground flex w-full items-center justify-between text-2xl font-normal tracking-tight"
                            >
                                {link.label}
                                <ChevronDown
                                    className={cx(
                                        'text-muted-foreground size-5 shrink-0 transition-transform duration-200',
                                        isOpen && 'rotate-180',
                                    )}
                                />
                            </button>
                            <div
                                className={cx(
                                    'overflow-hidden transition-all duration-300',
                                    isOpen
                                        ? 'max-h-[3000px] opacity-100'
                                        : 'max-h-0 opacity-0',
                                )}
                            >
                                <MobileAccordionPanel
                                    link={link}
                                    onNavigate={onNavigate}
                                />
                            </div>
                        </div>
                    );
                }

                if ('href' in link && link.href) {
                    return (
                        <Link
                            key={link.label}
                            href={link.href}
                            className={cx(
                                'text-foreground hover:text-foreground/80 py-5 text-2xl font-normal tracking-tight transition-colors first:pt-0 last:pb-0',
                                pathname === link.href &&
                                    'text-muted-foreground',
                            )}
                            onClick={onNavigate}
                        >
                            {link.label}
                        </Link>
                    );
                }

                return null;
            })}
        </nav>
    );
}

export function getMobileDropdownItems(item: NavItem): NavDropdownItem[] {
    if ('dropdownItems' in item && item.dropdownItems) {
        return item.dropdownItems;
    }
    if ('sections' in item && item.sections) {
        return item.sections.flatMap((section) => section.items);
    }
    return [];
}