'use client'

import { motion } from 'framer-motion'
import { useMemo } from 'react'

export default function ParticleField({ count = 30 }: { count?: number }) {
  const particles = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 4 + 1,
        duration: Math.random() * 6 + 4,
        delay: Math.random() * 4,
        colorIdx: i % 5,
      })),
    [count]
  )

  const colors = ['#0EA5E9', '#38BDF8', '#22C55E', '#F59E0B', '#3B82F6']

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            backgroundColor: colors[p.colorIdx],
            opacity: 0.4,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.sin(p.id) * 15, 0],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}
