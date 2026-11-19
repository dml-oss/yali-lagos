'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Linkedin, X } from 'lucide-react';
import { siteConfig } from '@/_data/site-config';
import { NavigationItems, upcomingEvents } from '@/_data/seed';
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

function HeaderActions({
    className,
    onOpenListener,
    onOpenMinister,
    loginClassName,
}: {
    className?: string;
    onOpenListener: () => void;
    onOpenMinister: () => void;
    loginClassName?: string;
}) {
    return (
        <div
            className={cx(
                'flex flex-wrap items-center gap-2 font-normal',
                className,
            )}
        >
            <Button
                type="link"
                semantic="normal"
                size="lg"
                block={false}
                loading={false}
                className={cx('inline-flex h-10 items-center justify-center rounded-sm px-3 text-sm font-normal md:text-base', loginClassName)}
                text={{ label: 'Login', size: 14, weight: 'regular' }}
                onClick={onOpenMinister}
            />
            <Button
                type='secondary'
                semantic="normal"
                size="sm"
                block={false}
                loading={false}
                className="h-10 bg-#2aaae0 rounded-sm px-4 text-sm font-normal md:text-base"
                text={{ label: 'Join the network', size: 14, weight: 'regular' }}
                onClick={onOpenListener}
            />
        </div>
    );
}

export function Navbar({ className, links }: { className?: string; links?: NavItem[] }) {

    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);
    const [dialogOpen, setDialogOpen] = useState(false);
    const [role, setRole] = useState<'listener' | 'minister'>('listener');

    const openListenerModal = () => {
        setRole('listener');
        setDialogOpen(true);
    };

    const openMinisterModal = () => {
        setRole('minister');
        setDialogOpen(true);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (isMenuOpen) {
                setIsMenuOpen(false);
                setOpenDropdown(null);
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isMenuOpen]);

    useEffect(() => {
        const mediaQuery = window.matchMedia('(min-width: 1024px)');
        const handleMediaQueryChange = () => {
            setIsMenuOpen(false);
            setOpenDropdown(null);
        };

        mediaQuery.addEventListener('change', handleMediaQueryChange);
        handleMediaQueryChange();

        return () => {
            mediaQuery.removeEventListener('change', handleMediaQueryChange);
        };
    }, []);

    const closeMobileMenu = () => {
        setIsMenuOpen(false);
        setOpenDropdown(null);
    };

    const renderDesktopNavItem = (link: NavItem) => {
        const isDropdownActive = () => {
            if ('dropdownItems' in link && link.dropdownItems) {
                return link.dropdownItems.some(item => {
                    if (!item.href) return false;
                    // Check if href starts with / and pathname matches or starts with it
                    if (item.href.startsWith('/')) {
                        return pathname === item.href || pathname.startsWith(item.href + '/');
                    }
                    return false;
                });
            }
            if ('sections' in link && link.sections) {
                return link.sections.some(section => section.items.some(item => {
                    if (!item.href) return false;
                    if (item.href.startsWith('/')) {
                        return pathname === item.href || pathname.startsWith(item.href + '/');
                    }
                    return false;
                }));
            }
            return false;
        };

        if ('sections' in link && link.sections) {
            return (
                <NavigationMenuItem key={link.label}>
                    <NavigationMenuTrigger className={cx("h-9 bg-white px-2 text-sm font-normal md:px-2.5 md:text-base text-black", isDropdownActive() && "bg-[#2aaae0] text-white")}>
                        {link.label}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="left-0 top-full mt-1.5 w-auto rounded-md bg-white p-0 shadow-md">
                         <div className={`${'md:w-[400px] w-[300px]'}`}>
                             {link.sections.map((section) => (
                                 <div key={section.label} className="p-3">
                                     <p className="mb-2 text-xs font-medium tracking-wider uppercase text-black">
                                         {section.label}
                                     </p>
                                     <ul className="space-y-1 text-black">
                                         {section.items.map((item) => (
                                             <li key={item.title}>
                                                 <NavDropdownLink item={item} theme="light" />
                                             </li>
                                         ))}
                                     </ul>
                                 </div>
                             ))}
                         </div>
                     </NavigationMenuContent>
                </NavigationMenuItem>
            );
        }

        if ('dropdownItems' in link && link.dropdownItems) {
            return (
                <NavigationMenuItem key={link.label}>
                    <NavigationMenuTrigger className={cx("h-9 bg-white px-2 text-sm font-normal md:px-2.5 text-black md:text-base", isDropdownActive() && "bg-[#2aaae0] text-white")}>
                        {link.label}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="left-0 top-full mt-1.5 w-auto rounded-md bg-white p-0 shadow-md">
                        <ul className="w-[380px] space-y-1 p-2 text-black">
                            {link.dropdownItems.map((item) => (
                                <li key={item.title}>
                                    <NavDropdownLink item={item} theme="light" />
                                </li>
                            ))}
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
            );
        }

        if ('href' in link) {
            return (
                <NavigationMenuItem key={link.label}>
                    <Link
                        href={link.href}
                        className={cx(
                            'relative h-9 bg-white px-2 text-black! text-sm font-normal transition-opacity hover:opacity-75 md:px-2.5 md:text-base inline-flex items-center rounded-sm',
                            pathname === link.href && 'bg-[#2aaae0] text-white!',
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
        <>
            <header
                className={cx(
                    'sticky top-0 z-50 w-full font-normal transition-all duration-300',
                    'border-border/70 bg-white backdrop-blur-md',
                    isMenuOpen && 'max-lg:bg-[#0D252B]',
                )}
            >
                <div
                    className={cx(
                        'relative mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8',
                        'max-lg:z-[110]',
                    )}
                >
                    <div className="flex min-w-0 items-center gap-3 sm:gap-4">
                        <Logo href={siteConfig.baseLinks.home} className="w-20 md:w-22" src={isMenuOpen ? "/blocks/yali-dk.svg" : "/blocks/yali-bg.svg"} />

                        <NavigationMenu
                            viewport={false}
                            id="desktop-nav"
                            className="max-lg:hidden w-max max-w-none flex-none justify-start text-black! h-[50px]"
                        >
                            <NavigationMenuList className="justify-start gap-x-3 sm:gap-x-4 text-black!">
                                {NavigationItems.map(renderDesktopNavItem)}
                            </NavigationMenuList>
                        </NavigationMenu>
                    </div>

                    <div className="flex shrink-0 items-center gap-2">
                        <HeaderActions
                            className="max-lg:hidden text-black!"
                            onOpenListener={openListenerModal}
                            onOpenMinister={openMinisterModal}
                        />

                        <button
                            type="button"
                            onClick={openListenerModal}
                            className="h-9 rounded-sm bg-[#2aaae0] px-3 text-sm font-normal lg:hidden text-white"
                        >
                            Join the Network
                        </button>

                        {/* <button
                            type="button"
                            className={cx(
                                "relative flex size-8 lg:hidden",
                                isMenuOpen ? "text-white" : "text-black"
                            )}
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            <span className="sr-only">
                                {isMenuOpen
                                    ? 'Close main menu'
                                    : 'Open main menu'}
                            </span>
                            <div className="absolute top-1/2 left-1/2 block w-[18px] -translate-x-1/2 -translate-y-1/2">
                                <span
                                    aria-hidden
                                    className={cx(
                                        'absolute block h-0.5 w-full rounded-full bg-current transition duration-500 ease-in-out',
                                        isMenuOpen
                                            ? 'rotate-45'
                                            : '-translate-y-1.5',
                                    )}
                                />
                                <span
                                    aria-hidden
                                    className={cx(
                                        'absolute block h-0.5 w-full rounded-full bg-current transition duration-500 ease-in-out',
                                        isMenuOpen && 'opacity-0',
                                    )}
                                />
                                <span
                                    aria-hidden
                                    className={cx(
                                        'absolute block h-0.5 w-full rounded-full bg-current transition duration-500 ease-in-out',
                                        isMenuOpen
                                            ? '-rotate-45'
                                            : 'translate-y-1.5',
                                    )}
                                />
                            </div>
                        </button> */}

                        <button
                            type="button"
                            className="text-black relative flex items-center justify-center lg:hidden"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            <span className="sr-only">
                                {isMenuOpen
                                    ? 'Close main menu'
                                    : 'Open main menu'}
                            </span>
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
                                        <rect x="14" y="14" width="7" height="7" rx="1" />
                                        <rect x="14" y="3" width="7" height="7" rx="1" />
                                        <rect x="3" y="14" width="7" height="7" rx="1" />
                                        <rect x="3" y="3" width="7" height="7" rx="1" />
                                    </svg>
                                </div>
                            )}
                        </button>
                    </div>
                </div>

                <div
                    className={cx(
                        'bg-[#0D252B] fixed inset-0 z-[100] flex h-[100dvh] max-h-[100dvh] flex-col overflow-y-auto px-6 pt-20 pb-6 transition-all duration-300 ease-in-out lg:hidden',
                        isMenuOpen
                            ? 'visible opacity-100'
                            : 'pointer-events-none invisible -translate-y-4 opacity-0',
                    )}
                >
                    <MobileNavList
                        items={NavigationItems}
                        pathname={pathname}
                        openDropdown={openDropdown}
                        onToggleDropdown={(label) =>
                            setOpenDropdown(
                                openDropdown === label ? null : label,
                            )
                        }
                        onNavigate={closeMobileMenu}
                    />

                    <div className="border-border/70 mt-8 border-t pt-6">
                        <p className="text-muted-foreground mb-4 text-left text-sm">
                        Empowering you to lead change.
                        </p>
                        <div className="flex items-center gap-4">
                            <p className="text-foreground text-sm font-normal">
                                Follow us:
                            </p>
                            <div className="flex gap-3">
                                <Link
                                    href="https://x.com/thetroott"
                                    aria-label="Follow on X (Twitter)"
                                    className="bg-accent hover:bg-primary flex size-9 items-center justify-center rounded-sm transition-colors"
                                    onClick={closeMobileMenu}
                                >
                                    <X className="size-5" />
                                </Link>
                                <Link
                                    href="https://www.linkedin.com/company/troott"
                                    aria-label="Follow on LinkedIn"
                                    className="bg-accent hover:bg-primary flex size-9 items-center justify-center rounded-sm transition-colors"
                                    onClick={closeMobileMenu}
                                >
                                    <Linkedin className="size-5" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

        </>
    );
}