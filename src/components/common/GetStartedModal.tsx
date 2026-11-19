import React, { useEffect, useState, useContext } from 'react';
import Modal from '../partials/modals/Modal';
import useGoTo from '../../hooks/useGoTo';
import Button from '../partials/buttons/Button';
import { IGetStartedModal } from '@/utils/interfaces.util';
import { img } from 'framer-motion/client';
import Link from 'next/link';
import Divider from '../ui/Divider';

const GetStartedModal = (props: IGetStartedModal) => {
    
    const {
        show,
        size = 'sm',
        header = true,
        title,
        flattened,
        className,
        closeModal,
    } = props;

    const { goTo } = useGoTo();

    const [headIn, setHeadIn] = useState<boolean>(false);
    const [active, setActive] = useState<string>('talent');

    const userTypes = [
        {
            title: 'talent',
            desc: 'I’m a professional talent',
            img: '../../../images/assets/bg@talents.webp',
        },
        {
            title: 'business',
            desc: 'I’m a business',
            img: '../../../images/assets/bg@business.webp',
        },
    ];

    return (
        <>
            <Modal
                show={show}
                header={headIn}
                flattened={flattened}
                title={title}
                closeModal={closeModal}
                size={size}
                hideOnClose={false}
                className={className}
            >
                <div className="md:py-[2rem] py-[1rem] space-y-[1rem]">
                    <div className="md:flex md:gap-[1.5rem] gap-[0.7rem] items-center justify-center">
                        {userTypes.map((type, index) => (
                            <Link
                                href=""
                                key={type.title + index}
                                onClick={(e) => setActive(type.title)}
                                className={`md:min-h-[268px]  md:min-w-[334px] min-w-full rounded-2xl md:p-2 ${active === type.title ? 'md:border border-pacb-500' : 'md:border border-pag-200'}`}
                            >
                                <div
                                    className={`min-h-[205px] bg-center bg-cover bg-no-repeat rounded-2xl md:block hidden`}
                                    style={{
                                        backgroundImage: `url(${type.img})`,
                                    }}
                                ></div>
                                <p
                                    className={`text-center capitalize mt-3 ${active === type.title ? 'text-pacb-500 font-intermedium ' : 'font-inter text-pag-600'}`}
                                >
                                    {type.desc}
                                </p>
                            </Link>
                        ))}
                    </div>

                    <Divider
                        show={false}
                        padding={{
                            enable: true,
                            top: 'md:pt-[0.3rem] pt-[0.5rem]',
                            bottom: 'md:pb-[0.3rem]',
                        }}
                    />

                    <div className="md:flex items-center justify-between">
                        <div className="md:mb-0 mb-6 md:text-left text-center">
                            {active === 'talent' ? (
                                <p className="font-inter text-pag-900 text-base">
                                    {' '}
                                    Grow your career in a measurable and
                                    intentional way.
                                </p>
                            ) : (
                                <p className="font-inter text-pag-900 text-base">
                                    Businesses build high-performing
                                    Talents/Teams.
                                </p>
                            )}
                        </div>

                        <Button
                            type={`${active === 'talent' ? 'primary' : 'secondary'}`}
                            semantic="normal"
                            size="lg"
                            block={false}
                            loading={false}
                            className="form-button md:min-w-[180px] min-w-full text-[#040D55] capitalize"
                            text={{
                                label: `Grow your career`,
                                size: 16,
                                weight: 'semibold',
                            }}
                            url={
                                active === 'talent'
                                    ? 'https://talent.pacitude.com/'
                                    : 'https://business.pacitude.com/'
                            }
                            onClick={(e) => {}}
                        />
                    </div>
                </div>
            </Modal>
        </>
    );
};

export default GetStartedModal;
