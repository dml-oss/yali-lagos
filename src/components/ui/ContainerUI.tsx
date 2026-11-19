import React, { useEffect, useState, useContext, ReactNode } from "react"

const ContainerUI = ({ className, children }: { className?: string, children: ReactNode }) => {
    useEffect(() => {

    }, [])
    return (
        <>
            <div className={`mx-auto container ${className ? className : ''}`}>
                { children }
            </div>
        </>
    )
};

export default ContainerUI;
