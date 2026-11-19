import TitleText from '@/components/animations/TitleText'
import React, { FC } from 'react'
interface ISuccessCard {
    image: string,
    desc: string,
    tag: string,
    title: string,
}

const SuccessCard: FC<ISuccessCard> = ({ image, desc, title, tag }) => {
    return (
        <>
            <div
                className="flex min-h-[335px] w-full flex-col justify-between rounded-[1.314rem] bg-gray-300 bg-cover bg-center bg-no-repeat px-5 pb-8 pt-7 sm:px-7 sm:pb-12 sm:pt-8 lg:px-8 lg:pb-20 lg:pt-9"
                style={{ backgroundImage: `url(${image})` }}>

                    <div className='space-y-[1rem] mb-7'>
                        <p className='font-inter text-sm text-[#D5DDF0] sm:text-base'>{tag}</p>
                        <TitleText text={title} size='text-[1.1rem] sm:text-[1.2rem] lg:text-[1.25rem]' fontWeight='intersemibold' className='font-frei-bold leading-snug' />
                    </div>
                    <div>
                        <p className='text-sm font-inter leading-relaxed text-[#D5DDF0] sm:text-base'>{desc}</p>
                    </div>

            </div>
        </>
    )
}

export default SuccessCard
