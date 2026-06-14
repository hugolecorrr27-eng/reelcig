'use client'

import { motion } from 'framer-motion'
import CigaretteModel from '@/components/ui/CigaretteModel'
import ParticleField from '@/components/ui/ParticleField'
import { ChevronDown } from 'lucide-react'

export default function HeroSection() {
  const handleDiscover = () => {
    document.querySelector('#concept')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{
        background: 'radial-gradient(ellipse at 50% 0%, #bae6fd 0%, #e0f2fe 30%, #f0f9ff 60%, #ffffff 100%)',
      }}
    >
      <ParticleField />

      <motion.div
        animate={{ y: [0, -30, 0], x: [0, 15, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-20 left-10 w-64 h-64 rounded-full opacity-20 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #0EA5E9, transparent)' }}
      />
      <motion.div
        animate={{ y: [0, 20, 0], x: [0, -10, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute bottom-20 right-10 w-96 h-96 rounded-full opacity-15 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #22C55E, transparent)' }}
      />

      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-4"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest text-sky-600 bg-sky-100 border border-sky-200 uppercase">
            The Future of Sustainable Smoking
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-black text-slate-800 leading-tight mb-8"
        >
          The First{' '}
          <span
            style={{
              background: 'linear-gradient(135deg, #0EA5E9, #3B82F6)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Actively
          </span>
          <br />
          <span
            style={{
              background: 'linear-gradient(135deg, #0EA5E9, #3B82F6)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Regenerating
          </span>
          <br />
          Cigarette
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-10"
        >
          <CigaretteModel />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl text-slate-500 max-w-2xl mb-10 leading-relaxed"
        >
          We are moving from a disposable consumption logic to a{' '}
          <span className="text-emerald-500 font-semibold">sustainable biological cycle</span>.
          Powered by AI, solar energy, and nano-vascular technology.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 items-center"
        >
          <button
            onClick={handleDiscover}
            className="flex items-center gap-2 px-8 py-4 bg-sky-500 hover:bg-sky-600 text-white font-bold rounded-full transition-all duration-300 shadow-xl hover:scale-105 text-lg"
          >
            Discover
            <ChevronDown className="w-5 h-5 animate-bounce" />
          </button>
          <button
            onClick={() => document.querySelector('#order')?.scrollIntoView({ behavior: 'smooth' })}
            className="flex items-center gap-2 px-8 py-4 bg-amber-400 hover:bg-amber-500 text-white font-bold rounded-full transition-all duration-300 shadow-xl hover:scale-105 text-lg"
          >
            Pre-Order €1,000
          </button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-slate-400 tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-5 h-8 rounded-full border-2 border-slate-300 flex items-start justify-center p-1"
        >
          <div className="w-1 h-2 bg-sky-400 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}
