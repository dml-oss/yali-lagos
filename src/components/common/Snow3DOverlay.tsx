'use client'

import { useMemo } from 'react'

const Snow3DOverlay = () => {
  const flakes = useMemo(
    () =>
      Array.from({ length: 34 }, (_, index) => ({
        id: index,
        left: `${2 + ((index * 83) % 96)}%`,
        size: 5 + (index % 4),
        duration: 10 + (index % 5) * 2,
        delay: (index % 7) * -1.5,
        opacity: 0.28 + (index % 4) * 0.1,
      })),
    [],
  )

  return (
    <div className="pointer-events-none fixed inset-0 z-[30] overflow-hidden">
      {flakes.map((flake) => (
        <span
          key={flake.id}
          className="absolute rounded-full bg-white blur-[0.4px]"
          style={{
            left: flake.left,
            top: '-10%',
            width: `${flake.size}px`,
            height: `${flake.size}px`,
            opacity: flake.opacity,
            animation: `ambientSnow ${flake.duration}s linear infinite`,
            animationDelay: `${flake.delay}s`,
            boxShadow: '0 0 12px rgba(255,255,255,0.18)',
          }}
        />
      ))}

      <style jsx>{`
        @keyframes ambientSnow {
          0% {
            transform: translate3d(0, -8vh, 0) scale(0.92);
          }
          50% {
            transform: translate3d(12px, 52vh, 0) scale(1);
          }
          100% {
            transform: translate3d(-10px, 108vh, 0) scale(1.06);
          }
        }
      `}</style>
    </div>
  )
}

export default Snow3DOverlay
