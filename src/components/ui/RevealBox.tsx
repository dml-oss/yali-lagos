import React, { useEffect, useState, useContext, Fragment } from "react"
import IconButton from "../partials/buttons/IconButton";

interface IRevealBox {
    isActive?: boolean,
    title: {
        name: string,
        label: string
    },
    items: Array<string>
}

const RevealBox = (props: IRevealBox) => {

    const {
        title,
        isActive = false,
        items
    } = props;

    const [isOpen, setIsOpen] = useState<boolean>(false)

    useEffect(() => {
        setIsOpen(isActive ? true : false)
    }, [isActive])

    return (
        <>
            <div className="reveal-box w-full px-[1.5rem] py-[1rem] min-h-[56px] bg-pag-950 rounded-[0.625rem] border border-pag-800">

                <div className="flex items-center">
                    <h3 className="">
                        <span className="font-interbold text-[16px]">{title.name} &nbsp; &nbsp;</span>
                        <span className="font-intermedium text-[16px]">{title.label}</span>
                    </h3>
                    <IconButton
                        size="min-w-[1.8rem] min-h-[1.8rem]"
                        className={`ml-auto ${isOpen ? 'bg-pacb-600' : 'bg-pag-950'} hover:bg-pacb-600`}
                        icon={{
                            type: 'feather',
                            name: `chevron-${isOpen ? 'up' : 'down'}`,
                            size: 16,
                        }}
                        onClick={(e) => setIsOpen(!isOpen)}
                    />
                </div>

                {
                    items.length > 0 &&
                    <div className={`reveal-items transition-all duration-[0.25s] space-y-[1.2rem] ${isOpen ? 'pt-[1.5rem] pb-[1rem] h-auto' : 'h-0'} overflow-hidden`}>

                        {
                            items.map((item, index) =>
                                <Fragment key={item + index}>

                                    <div className="flex items-center gap-[1rem]">
                                        <h2 className="font-intermedium text-[15px] min-w-[2%] max-w-[2%]" style={{ color: '#cad1ee' }}>{ index+1 }.</h2>
                                        <h2 className="font-intermedium text-[15px] grow" style={{ color: '#cad1ee' }}>{ item }</h2>
                                    </div>

                                </Fragment>
                            )
                        }

                    </div>
                }

            </div>
        </>
    )
};

export default RevealBox;
