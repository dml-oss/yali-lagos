import React, { FC } from 'react'
import TitleText from '../animations/TitleText'

interface IImageTextDesc {
    gap?: string,
    title?: string,
    desc?: string,
    image?: {
        src: string,
        alt?: string,
        className?: string,
        height?: number,
        width?: number,
    },
    imageBg?: {
        height?: string,
        width?: string,
        color?: string
    },
}

const ImageTextDesc: FC<IImageTextDesc> = ({ gap, title, desc, image, imageBg }) => {
    return (
        <>
            <div className="flex flex-col gap-y-8">

                <div className={`flex items-center justify-center ${imageBg?.height ? imageBg.height : 'h-14'} ${imageBg?.width ? imageBg.width : 'w-14'} rounded-lg ${imageBg?.color ? imageBg?.color : 'bg-pab-700'}`}>
                    <img src={image?.src ?? ''} alt={image?.alt ?? ''} height={image?.height ?? 33} width={image?.width ?? 33} className={image?.className ?? ''}/>
                </div>

                <TitleText
                    text={title ? title : ''}
                    fontWeight='interxbold'
                    size={`text-[1.45rem] sm:text-[1.6rem] lg:text-[1.8rem]`}
                    className='text-color-white leading-tight'
                />

                <p className="font-inter text-[15px] leading-relaxed text-color-white sm:text-base">{desc ? desc : ''}</p>

            </div>
        </>
    )
}

export default ImageTextDesc
