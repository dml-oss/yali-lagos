import React, { useEffect, useState, useContext, ReactNode, CSSProperties } from "react"
import ContainerUI from "./ContainerUI"
import Wrapper from "./Wrapper"

interface IHero {
    bg?: {
        color?: string,
        image?: string
    }
    height?: number,
    style?: CSSProperties,
    className?: string,
    children: ReactNode
}

const Hero = (props: IHero) => {

    const {
        bg = { color: '', image: '' },
        style = {},
        height = 70,
        className = '',
        children
    } = props;

    useEffect(() => {

    }, [bg])

    const cbg = () => {

        let result = { color: '', image: '' }

        if (bg) {
            result.color = bg.color ? bg.color : result.color;
            result.image = bg.image ? bg.image : result.image;
        }

        return result;

    }

    return (
        <>
            <main
                className={`hero w-full bg-center bg-cover bg-no-repeat centered ${className ? className : ''} ${cbg().color}`}
                style={{
                    backgroundColor: cbg().color,
                    backgroundImage: cbg().image ? `url("${cbg().image}")` : style.backgroundImage,
                    // minHeight: `${height}vh`,
                    ...style,
                }}>

                {/* <ContainerUI className="h-auto">
                    {children}
                </ContainerUI> */}

                <Wrapper both>
                    {children}
                </Wrapper>

            </main>
        </>
    )
};

export default Hero;
