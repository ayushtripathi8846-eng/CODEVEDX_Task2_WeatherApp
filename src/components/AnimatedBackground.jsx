import React, { useMemo } from 'react'
import { gradientByWeather } from '../utils/weatherUtils'
import { clsx } from 'clsx'

// Subtle animated weather shapes
function Bubbles({ count = 12 }) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-white/10 dark:bg-white/5 blur-xl animate-[float_12s_ease-in-out_infinite]"
          style={{
            width: Math.random() * 180 + 60 + 'px',
            height: Math.random() * 180 + 60 + 'px',
            left: Math.random() * 100 + '%',
            top: Math.random() * 100 + '%',
            animationDelay: `${(Math.random() * 8).toFixed(2)}s`
          }}
        />
      ))}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) }
          50% { transform: translateY(-20px) }
        }
      `}</style>
    </div>
  )
}

export default function AnimatedBackground({ condition = '', temp, isDark, children }) {
  const gradient = useMemo(() => gradientByWeather(condition, temp, isDark), [condition, temp, isDark])
  return (
    <div className={clsx('min-h-dvh w-full relative', gradient)}>
      <Bubbles />
      {children}
    </div>
  )
}
