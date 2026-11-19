import TitleText from '@/components/animations/TitleText';
import Icon from '@/components/partials/icons/Icon';
import Divider from '@/components/ui/Divider';
import { AnimatePresence, motion } from 'framer-motion';
import React, { FC, useState } from 'react'

interface IFaqItem {
    question: string;
    answer: string;
}

const FaqItem: FC<IFaqItem> = ({ question, answer }) => {
    const [show, setShow] = useState<boolean>(false);

    const toggleShow = (e: React.MouseEvent) => {
        e.preventDefault()
        setShow(!show)
    }

    return (
        <div className="flex flex-col">
            <div className="flex justify-between items-start gap-4 py-6 cursor-pointer group" onClick={toggleShow}>
                <TitleText
                    text={question}
                    fontWeight='intermedium'
                    size='text-[1.125rem] sm:text-[1.25rem] lg:text-[1.375rem]'
                    className='text-black group-hover:text-black/80 transition-colors leading-tight flex-1'
                />
                <motion.div
                    animate={{ rotate: show ? 180 : 0 }}
                    transition={{ duration: 0.2, ease: 'easeInOut' }}
                    className="flex-shrink-0 mt-1"
                >
                    <Icon type="feather" name="chevron-down" size={20} className="text-black/60 group-hover:text-black transition-colors" />
                </motion.div>
            </div>

            <AnimatePresence initial={false}>
                {show && (
                    <motion.div
                        key="content"
                        initial="collapsed"
                        animate="open"
                        exit="collapsed"
                        variants={{
                            open: { opacity: 1, height: "auto" },
                            collapsed: { opacity: 0, height: 0 }
                        }}
                        transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                        className="overflow-hidden"
                    >
                        <div className="pb-6">
                            <p className="font-inter text-[1rem] sm:text-[1.0625rem] text-black/70 leading-relaxed">
                                {answer}
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <Divider show={true} bg='bg-black/[0.08]' padding={{ enable: true, top: 'pt-0', bottom: 'pb-0' }} />
        </div>
    )
}

export default FaqItem