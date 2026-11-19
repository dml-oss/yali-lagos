import React, { FC } from 'react'
import Wrapper from './Wrapper'

interface ISectionShell {
    children: React.ReactNode
    className?: string
    rest?: React.HTMLAttributes<HTMLElement>
}

const SectionShell:FC<ISectionShell> = ({ children, className = '', ...rest}) => {
    return (
        <>
            <Wrapper both>
                <section className={`mx-auto max-w-[1440px] ${className}`} {...rest}>
                    {children}
                </section>
            </Wrapper>
        </>
    )
}

export default SectionShell