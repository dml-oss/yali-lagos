'use client'
import React, { FC } from 'react'
import TitleText from '../animations/TitleText'
import Tilt3D from './Tilt3D'

interface IServiceCard {
    title: string,
    description: string,
    image?: string,
    isRelative?: boolean
    isConsulting?: boolean
}

const ServiceCard: FC<IServiceCard> = ({ title, description, image, isRelative, isConsulting }) => {
    return (
        <>
            <Tilt3D className="h-full" glare maxTilt={10}>
                <div className="relative overflow-hidden rounded-[21.03px] border border-white/40 bg-white/[0.02] transition-transform duration-300 min-h-[420px] sm:min-h-[500px] lg:min-h-[556px]">

                    <div className="mx-auto w-full xl:max-w-[400px] space-y-[1rem] px-5 pt-6 sm:w-9/12">
                        <TitleText
                            fontWeight='interxbold'
                            text={title}
                            size={`text-[1.6rem] sm:text-[1.75rem] lg:text-[1.875rem]`}
                            className='mb-3 text-color-white text-center'
                        />
                        <p className='text-base font-inter text-color-white xl:max-w-[400px] w-full text-center'>{description}</p>
                    </div>

                    <div
                        className={`${isRelative ? 'left-1/2 mx-auto xl:w-[270px] w-[220px] -translate-x-1/2 xl:bottom[-4.5rem] -bottom-[10.8rem] md:w-[260px] md:bottom-[-11rem] lg:w-[272px] lg:bottom-[-11.25rem]' : isConsulting ? '-bottom-0 xl:bottom-7 w-[300px] left-[calc(50%-150px)] mx-auto' : '-bottom-0 xl:bottom-0 w-full'} absolute`}
                        style={{ transform: 'translateZ(24px)' }}
                    >
                        <picture>
                            <source srcSet={image} type="image/avif" />
                            <source srcSet={image} type="image/webp" />
                            <img src={image} alt="Image" className="h-auto w-full object-contain" />
                        </picture>
                    </div>
                </div>
            </Tilt3D>
        </>
    )
}

export default ServiceCard
