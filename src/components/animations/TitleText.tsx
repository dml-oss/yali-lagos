import { FC } from 'react'

interface ItitleText {
    text: string,
    size?: string,
    fontWeight?: string,
    className?: string
    capitalize?: string
}


const TitleText: FC<ItitleText> = ({ text, size, fontWeight, className, capitalize }) => {
    return (
        <>
            <p className={`${className} ${size ? size : 'text-[1.5rem]'} font-${fontWeight ? fontWeight : 'bold'} ${capitalize ? 'capitalize' : ''}`}>{text}</p>
        </>
    )
}

export default TitleText