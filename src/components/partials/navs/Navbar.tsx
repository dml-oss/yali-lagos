'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Linkedin, X } from 'lucide-react';

import type { NavItem } from '@/utils/interfaces.util';

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuList,
    NavigationMenuTrigger,
} from '@/components/partials/navs/navigation-menu';

import { NavDropdownLink } from '@/components/app/navigation/NavDropdownLink';
import { MobileNavList } from '@/components/app/navigation/MobileNavList';
import { cx } from '@/lib/utils';
import Logo from '@/components/ui/Logo';
import Button from '../buttons/Button';
import { siteConfig } from '@/_data/site-config';
import { events, NavigationItems, upcomingEvents } from '@/_data/seed';

interface INavBar {
    className?: string;
    links?: NavItem[];
}

const Navbar = (data: INavBar) => {
    const { className, links } = data;

    const pathname = usePathname();

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);

    const navItems = links ?? NavigationItems;

    const eventImages: Record<string, string> = {
        'ai-work-kingdom': '/images/blocks/yali-impact.jpeg',
        'create-weekend-agtech': '/images/blocks/yali-masterclass.jpeg',
        'story-night': '/images/blocks/Join-yali.jpeg',
        'pan-african-builders-call': '/images/blocks/yali-work.jpeg',
        'pan-african-builders-call-2': '/images/blocks/yali-inclusive.jpeg',
    };

    const closeMobileMenu = () => {
        setIsMenuOpen(false);
        setOpenDropdown(null);
    };

    useEffect(() => {
        if (!isMenuOpen) return;

        const handleScroll = () => {
            closeMobileMenu();
        };

        window.addEventListener('scroll', handleScroll, {
            passive: true,
        });

        return () => window.removeEventListener('scroll', handleScroll);
    }, [isMenuOpen]);

    useEffect(() => {
        const mediaQuery = window.matchMedia('(min-width: 1024px)');

        const handleMediaQueryChange = () => {
            closeMobileMenu();
        };

        mediaQuery.addEventListener('change', handleMediaQueryChange);
        handleMediaQueryChange();

        return () => {
            mediaQuery.removeEventListener('change', handleMediaQueryChange);
        };
    }, []);

    const renderDesktopNavItem = (link: NavItem) => {
        const isDropdownActive =
            ('sections' in link &&
                link.sections?.some((section) =>
                    section.items.some(
                        (item) =>
                            item.href &&
                            item.href.startsWith('/') &&
                            (pathname === item.href ||
                                pathname.startsWith(item.href + '/')),
                    ),
                )) ||
            ('dropdownItems' in link &&
                link.dropdownItems?.some(
                    (item) =>
                        item.href &&
                        item.href.startsWith('/') &&
                        (pathname === item.href ||
                            pathname.startsWith(item.href + '/')),
                ));

        const triggerClassName = cx(
            'bg-white text-[#171817] text-lg',
            'hover:bg-stone-100 hover:text-[#171817]',
            'focus:bg-stone-100 focus:text-[#171817]',
            'data-[state=open]:bg-stone-100 data-[state=open]:text-[#171817]',
            isDropdownActive
                ? 'bg-stone-100 text-[#171817]'
                : 'bg-white text-[#171817]',
        );

        if ('sections' in link && link.sections) {
            const isEventsMenu = link.label === 'Events';

            return (
                <NavigationMenuItem key={link.label}>
                    <NavigationMenuTrigger className={triggerClassName}>
                        {link.label}
                    </NavigationMenuTrigger>

                    <NavigationMenuContent className="left-0 top-full mt-1.5 rounded-lg border border-[#e4e0df] bg-white p-0 text-[#171817] shadow-lg">
                        {isEventsMenu ? (
                            <div className="w-[430px] p-4">
                                <p className="mb-3 px-2 text-xs font-semibold tracking-wider text-stone-500 uppercase">
                                    Upcoming Events
                                </p>

                                <ul className="space-y-1">
                                    {upcomingEvents.map((event) => (
                                        <Link
                                            key={event.slug}
                                            href={`/events/${event.slug}`}
                                            className="group flex items-center gap-3 rounded-lg p-3 transition-colors hover:bg-stone-100"
                                        >
                                            {/* Event information */}
                                            <div className="min-w-0 flex-1">
                                                <p className="truncate text-sm font-semibold text-[#171817]">
                                                    {event.title}
                                                </p>

                                                <p className="mt-1 flex items-baseline text-xs text-stone-500">
                                                    <span className="me-2">
                                                        <time className="flex h-[16px] flex-col items-center justify-center rounded-lg bg-[#15150d] text-white">
                                                            {event.day}
                                                        </time>
                                                    </span>
                                                    <span>
                                                        {event.month}
                                                    </span>
                                                </p>
                                            </div>

                                            {/* Event image */}
                                            <div className="relative size-16 shrink-0 overflow-hidden rounded-md bg-stone-200">
                                                <Image
                                                    src={
                                                        eventImages[
                                                            event.slug
                                                        ] ?? ''
                                                    }
                                                    alt={event.title}
                                                    fill
                                                    sizes="64px"
                                                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                                                />
                                            </div>
                                        </Link>
                                    ))}
                                </ul>

                                <div className="mt-3 border-t border-stone-200 pt-3">
                                    <Link
                                        href={siteConfig.baseLinks.events}
                                        className="flex items-center justify-between rounded-md px-2 py-2 text-sm font-semibold text-[#171817] transition-colors hover:bg-stone-100 hover:text-[#2aaae0]"
                                    >
                                        View all events
                                        <span>→</span>
                                    </Link>
                                </div>
                            </div>
                        ) : (
                            <div className="w-[430px] p-4">
                                {link.sections.map((section) => (
                                    <div key={section.label}>
                                        <p className="mb-3 px-2 text-xs font-semibold tracking-wider text-stone-500 uppercase">
                                            {section.label}
                                        </p>

                                        <ul className="space-y-1">
                                            {section.items.map((item) => (
                                                <li key={item.title}>
                                                    <NavDropdownLink
                                                        item={item}
                                                        theme="light"
                                                    />
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        )}
                    </NavigationMenuContent>
                </NavigationMenuItem>
            );
        }

        if ('dropdownItems' in link && link.dropdownItems) {
            return (
                <NavigationMenuItem key={link.label}>
                    <NavigationMenuTrigger className={triggerClassName}>
                        {link.label}
                    </NavigationMenuTrigger>

                    <NavigationMenuContent className="left-0 top-full mt-1.5 rounded-lg border border-[#e4e0df] bg-white p-0 text-[#171817] shadow-lg">
                        <div className="w-[430px] p-4">
                            <ul className="space-y-1">
                                {link.dropdownItems.map((item) => (
                                    <li key={item.title}>
                                        <NavDropdownLink
                                            item={item}
                                            theme="light"
                                        />
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </NavigationMenuContent>
                </NavigationMenuItem>
            );
        }

        if ('href' in link) {
            const isActive =
                pathname === link.href ||
                (link.href !== '/' && pathname.startsWith(link.href + '/'));

            return (
                <NavigationMenuItem key={link.label}>
                    <Link
                        href={link.href}
                        className={cx(
                            'relative inline-flex h-9 items-center rounded-sm px-2 text-sm font-normal text-[#171817] transition-colors md:px-2.5 md:text-base',
                            'bg-white hover:bg-stone-100 hover:text-[#171817]',
                            isActive &&
                                'bg-stone-100 text-[#171817] hover:bg-stone-100 hover:text-[#171817]',
                        )}
                    >
                        {link.label}
                    </Link>
                </NavigationMenuItem>
            );
        }

        return null;
    };

    return (
        <header
            className={cx(
                'sticky top-0 z-50 w-full bg-white font-normal backdrop-blur-md',
                className,
            )}
        >
            <div
                className={cx(
                    'relative mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8',
                    'max-lg:z-[110]',
                )}
            >
                <div className="flex min-w-0 items-center gap-3 sm:gap-4">
                    <Logo
                        href={siteConfig.baseLinks.home}
                        className="w-20 md:w-22"
                        src={
                            isMenuOpen
                                ? '/blocks/yali-lagos-bk.svg'
                                : '/blocks/yali-lagos-wh.svg'
                        }
                    />

                    <NavigationMenu
                        viewport={false}
                        id="desktop-nav"
                        className="max-lg:hidden h-[50px] w-max max-w-none flex-none justify-start text-[#171817]"
                    >
                        <NavigationMenuList className="justify-start gap-x-3 text-[#171817] sm:gap-x-4">
                            {navItems.map(renderDesktopNavItem)}
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>

                <div className="flex shrink-0 items-center gap-2">
                    <div className="hidden items-center gap-2 lg:flex">
                        <Link
                            href="/login"
                            className="inline-flex h-10 items-center justify-center rounded-sm px-3 text-sm font-normal text-[#171817] transition-colors hover:bg-stone-100 md:text-base"
                        >
                            Login
                        </Link>

                        <Button
                            type="link"
                            semantic="normal"
                            size="sm"
                            block={false}
                            loading={false}
                            className="inline-flex h-10 items-center justify-center rounded-sm bg-[#2aaae0] px-4 text-sm font-normal text-white transition-colors hover:bg-[#2198ca] md:text-base"
                            text={{
                                label: 'Join the network',
                                size: 14,
                                weight: 'regular',
                            }}
                            onClick={() => {
                                window.location.href = '/join';
                            }}
                        />
                    </div>

                    <Link
                        href="/join"
                        className="inline-flex h-9 items-center justify-center rounded-sm bg-[#2aaae0] px-3 text-sm font-normal text-white lg:hidden"
                    >
                        Join the Network
                    </Link>

                    <button
                        type="button"
                        aria-expanded={isMenuOpen}
                        aria-controls="mobile-navigation"
                        aria-label={
                            isMenuOpen ? 'Close main menu' : 'Open main menu'
                        }
                        className="relative flex size-9 shrink-0 items-center justify-center rounded-md text-black lg:hidden"
                        onClick={() => setIsMenuOpen((prev) => !prev)}
                    >
                        {isMenuOpen ? (
                            <X className="size-6 text-white" />
                        ) : (
                            <div className="flex size-9 items-center justify-center rounded-md bg-stone-100">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="size-5"
                                >
                                    <rect
                                        x="14"
                                        y="14"
                                        width="7"
                                        height="7"
                                        rx="1"
                                    />
                                    <rect
                                        x="14"
                                        y="3"
                                        width="7"
                                        height="7"
                                        rx="1"
                                    />
                                    <rect
                                        x="3"
                                        y="14"
                                        width="7"
                                        height="7"
                                        rx="1"
                                    />
                                    <rect
                                        x="3"
                                        y="3"
                                        width="7"
                                        height="7"
                                        rx="1"
                                    />
                                </svg>
                            </div>
                        )}
                    </button>
                </div>
            </div>

            <div
                id="mobile-navigation"
                className={cx(
                    'fixed inset-0 z-[100] flex h-[100dvh] max-h-[100dvh] flex-col overflow-y-auto bg-[#0D252B] px-6 pt-20 pb-6 transition-all duration-300 ease-in-out lg:hidden',
                    isMenuOpen
                        ? 'visible opacity-100'
                        : 'pointer-events-none invisible -translate-y-4 opacity-0',
                )}
            >
                <MobileNavList
                    items={navItems}
                    pathname={pathname}
                    openDropdown={openDropdown}
                    onToggleDropdown={(label: any) =>
                        setOpenDropdown((current) =>
                            current === label ? null : label,
                        )
                    }
                    onNavigate={closeMobileMenu}
                />

                <div className="mt-8 border-t border-white/20 pt-6">
                    <p className="mb-4 text-left text-sm text-white/60">
                        Empowering you to lead change.
                    </p>

                    <div className="flex items-center gap-4">
                        <p className="text-sm font-normal text-white">
                            Follow us:
                        </p>

                        <div className="flex gap-3">
                            <Link
                                href="https://x.com/thetroott"
                                aria-label="Follow on X"
                                className="flex size-9 items-center justify-center rounded-sm bg-white/10 text-white transition-colors hover:bg-white/20"
                                onClick={closeMobileMenu}
                            >
                                <X className="size-5" />
                            </Link>

                            <Link
                                href="https://www.linkedin.com/company/troott"
                                aria-label="Follow on LinkedIn"
                                className="flex size-9 items-center justify-center rounded-sm bg-white/10 text-white transition-colors hover:bg-white/20"
                                onClick={closeMobileMenu}
                            >
                                <Linkedin className="size-5" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
