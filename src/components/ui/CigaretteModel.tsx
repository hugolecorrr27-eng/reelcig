'use client'

import { motion } from 'framer-motion'

export default function CigaretteModel({ large = false }: { large?: boolean }) {
  const scale = large ? 1.4 : 1
  const w = Math.round(280 * scale)
  const h = Math.round(80 * scale)
  const bodyH = Math.round(28 * scale)

  return (
    <motion.div
      animate={{ rotateY: [0, 8, 0, -8, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      style={{ width: w, height: h, perspective: 800 }}
      className="relative mx-auto"
    >
      <div
        className="absolute inset-0 rounded-full blur-2xl opacity-40"
        style={{
          background: 'radial-gradient(ellipse, rgba(14,165,233,0.4) 0%, rgba(34,197,94,0.2) 50%, transparent 80%)',
          transform: 'scaleY(0.3) translateY(60%)',
        }}
      />
      <div className="relative flex items-center justify-center" style={{ height: h }}>
        {/* Filter tip */}
        <div
          className="flex-shrink-0 rounded-l-full"
          style={{
            width: Math.round(50 * scale),
            height: bodyH,
            background: 'linear-gradient(180deg, #D97706 0%, #92400E 50%, #B45309 100%)',
            boxShadow: `0 2px ${Math.round(8 * scale)}px rgba(146,64,14,0.4)`,
          }}
        />
        {/* Gold band */}
        <div
          className="flex-shrink-0"
          style={{
            width: Math.round(12 * scale),
            height: bodyH,
            background: 'linear-gradient(180deg, #FCD34D, #F59E0B, #FCD34D)',
            boxShadow: `0 0 ${Math.round(10 * scale)}px rgba(245,158,11,0.6)`,
          }}
        />
        {/* White body */}
        <div
          className="relative overflow-hidden"
          style={{
            width: Math.round(180 * scale),
            height: bodyH,
            background: 'linear-gradient(180deg, #FFFFFF 0%, #F1F5F9 30%, #E2E8F0 50%, #F1F5F9 70%, #FFFFFF 100%)',
          }}
        >
          <motion.div
            animate={{ x: ['-100%', '200%'] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', repeatDelay: 2 }}
            className="absolute inset-0 opacity-30"
            style={{
              background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.8), transparent)',
              width: '30%',
            }}
          />
        </div>
        {/* Tip */}
        <div
          className="flex-shrink-0 rounded-r-full relative"
          style={{
            width: Math.round(8 * scale),
            height: bodyH,
            background: 'linear-gradient(180deg, #E2E8F0, #CBD5E1)',
          }}
        >
          <motion.div
            animate={{ opacity: [0.5, 1, 0.5], scale: [1, 1.2, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="absolute -right-2 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full"
            style={{
              background: 'radial-gradient(circle, #FB923C, #EF4444, transparent)',
              boxShadow: '0 0 12px rgba(251,146,60,0.8)',
            }}
          />
        </div>
      </div>
    </motion.div>
  )
}
