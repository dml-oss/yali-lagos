
import * as React from 'react';
import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu';
import { cva } from 'class-variance-authority';
import { ChevronDownIcon } from 'lucide-react';

import { cx } from '@/lib/utils';

function NavigationMenu({
    className,
    children,
    viewport = true,
    ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Root> & {
    viewport?: boolean;
}) {
    return (
        <NavigationMenuPrimitive.Root
            data-slot="navigation-menu"
            data-viewport={viewport}
            className={cx(
                'group/navigation-menu relative flex max-w-max flex-1 items-center justify-center',
                className,
            )}
            {...props}
        >
            {children}
            {viewport && <NavigationMenuViewport />}
        </NavigationMenuPrimitive.Root>
    );
}

function NavigationMenuList({
    className,
    ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.List>) {
    return (
        <NavigationMenuPrimitive.List
            data-slot="navigation-menu-list"
            className={cx(
                'group flex flex-1 list-none items-center justify-center gap-1',
                className,
            )}
            {...props}
        />
    );
}

function NavigationMenuItem({
    className,
    ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Item>) {
    return (
        <NavigationMenuPrimitive.Item
            data-slot="navigation-menu-item"
            className={cx('relative', className)}
            {...props}
        />
    );
}

function NavigationMenuTrigger({
    className,
    children,
    ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Trigger>) {
    return (
        <NavigationMenuPrimitive.Trigger
            data-slot="navigation-menu-trigger"
            className={cx(
                'group inline-flex h-9 w-max items-center justify-center rounded-sm bg-white px-4 py-2 text-sm font-normal text-[#171817] transition-colors',
                'hover:bg-stone-100 hover:text-[#171817]',
                'focus:bg-stone-100 focus:text-[#171817]',
                'data-[state=open]:bg-stone-100 data-[state=open]:text-[#171817]',
                'data-[state=open]:hover:bg-stone-100 data-[state=open]:hover:text-[#171817]',
                'data-[state=open]:focus:bg-stone-100 data-[state=open]:focus:text-[#171817]',
                'disabled:pointer-events-none disabled:opacity-50',
                className,
            )}
            {...props}
        >
            {children}

            <ChevronDownIcon
                className="relative top-[1px] ml-1 size-3 text-[#171817] transition-transform duration-300 group-data-[state=open]:rotate-180"
                aria-hidden="true"
            />
        </NavigationMenuPrimitive.Trigger>
    );
}

function NavigationMenuContent({
    className,
    ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Content>) {
    return (
        <NavigationMenuPrimitive.Content
            data-slot="navigation-menu-content"
            className={cx(
                'absolute top-full z-50 w-auto overflow-hidden rounded-lg border border-[#e4e0df] bg-white p-0 shadow-lg',
                'max-h-[var(--radix-navigation-menu-content-available-height)] overflow-y-auto',
                'data-[motion=from-start]:animate-in data-[motion=from-start]:fade-in data-[motion=from-start]:slide-in-from-left-10',
                'data-[motion=from-end]:animate-in data-[motion=from-end]:fade-in data-[motion=from-end]:slide-in-from-right-10',
                'data-[motion=to-start]:animate-out data-[motion=to-start]:fade-out data-[motion=to-start]:slide-out-to-left-10',
                'data-[motion=to-end]:animate-out data-[motion=to-end]:fade-out data-[motion=to-end]:slide-out-to-right-10',
                className,
            )}
            {...props}
        />
    );
}

const navigationMenuTriggerStyle = cva(
    'group inline-flex h-9 w-max items-center justify-center rounded-sm bg-white px-4 py-2 text-sm font-normal text-[#171817] transition-colors hover:bg-stone-100 hover:text-[#171817] focus:bg-stone-100 focus:text-[#171817] data-[state=open]:bg-stone-100 data-[state=open]:text-[#171817] disabled:pointer-events-none disabled:opacity-50',
    {
        variants: {
            variant: {
                default: '',
                underline: '',
            },
        },
        defaultVariants: {
            variant: 'default',
        },
    },
);

function NavigationMenuViewport() {
    return (
        <div
            className="absolute left-0 top-full z-50 flex w-full justify-center"
        >
            <NavigationMenuPrimitive.Viewport
                className={cx(
                    'relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-lg border border-[#e4e0df] bg-white text-[#171817] shadow-lg',
                    'data-[state=open]:animate-in data-[state=closed]:animate-out',
                )}
            />
        </div>
    );
}

export {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
};
