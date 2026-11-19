import Link from "next/link";
import React, { useEffect, useState, useContext } from "react"

interface ILogo {
    href?: string,
    width?: number,
    height?: number,
    className?: string,
    src?: string,
}

const Logo = (props: ILogo) => {

    const {
        href = '/',
        width = 208,
        height = 54,
        className,
        src = '../../../blocks/yali-bg.svg',
    } = props;

    useEffect(() => {

    }, [])

    return (
        <>
            <Link href={href}>
                <img
                    className={ className ? className : '' }
                    src={src} alt="logo"
                    style={{
                        width: `${width}px`,
                        height: `${height}px`
                    }}
                />
            </Link>
        </>
    )
};

export default Logo;
