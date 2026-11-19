import React, { FC, ReactNode } from 'react'

interface IWrapper {
  right?: string
  left?: string,
  both?: boolean,
  children: ReactNode
}

const Wrapper: FC<IWrapper> = ({ right, left, both, children }) => {
  return (
      <div className={`mx-auto w-full ${both ? '' : ''} ${left ? left : ''} ${right ? right : ''}`}>
        {children}
      </div>
  )
}

export default Wrapper
