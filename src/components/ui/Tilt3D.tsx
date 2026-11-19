'use client'

import React, { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

interface ITilt3D {
  children: React.ReactNode
  className?: string
  glare?: boolean
  maxTilt?: number
}

const Tilt3D: React.FC<ITilt3D> = ({children, className = '', glare = false, maxTilt = 8 }) => { 
 
  const ref = useRef<HTMLDivElement | null>(null)
  const rotateX = useMotionValue(0)
  const rotateY = useMotionValue(0)

  const springX = useSpring(rotateX, { stiffness: 180, damping: 18, mass: 0.7 })
  const springY = useSpring(rotateY, { stiffness: 180, damping: 18, mass: 0.7 })
  const glareX = useTransform(springY, [-maxTilt, maxTilt], ['35%', '65%'])
  const glareY = useTransform(springX, [-maxTilt, maxTilt], ['35%', '65%'])

  const onPointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const bounds = ref.current?.getBoundingClientRect()

    if (!bounds) {
      return
    }

    const x = (event.clientX - bounds.left) / bounds.width
    const y = (event.clientY - bounds.top) / bounds.height

    rotateY.set((x - 0.5) * maxTilt * 2)
    rotateX.set((0.5 - y) * maxTilt * 2)
  }

  const reset = () => {
    rotateX.set(0)
    rotateY.set(0)
  }

  return (
    <motion.div
      ref={ref}
      className={`relative ${className}`}
      style={{
        rotateX: springX,
        rotateY: springY,
        transformStyle: 'preserve-3d',
      }}
      whileHover={{ z: 18, scale: 1.012 }}
      transition={{ type: 'spring', stiffness: 180, damping: 18 }}
      onPointerMove={onPointerMove}
      onPointerLeave={reset}
      onPointerCancel={reset}
    >
      {children}
      {glare ? (
        <motion.div
          className="pointer-events-none absolute inset-0 rounded-[inherit]"
          style={{
            background:
              'radial-gradient(circle at var(--glare-x,50%) var(--glare-y,50%), rgba(255,255,255,0.16), transparent 42%)',
            opacity: 0.9,
            ['--glare-x' as string]: glareX,
            ['--glare-y' as string]: glareY,
          }}
        />
      ) : null}
    </motion.div>
  )
}

export default Tilt3D
