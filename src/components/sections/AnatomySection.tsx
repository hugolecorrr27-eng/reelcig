'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import GlowEffect from '@/components/ui/GlowEffect'

function SmartFilterVisual() {
  return (
    <div className="relative w-40 h-40 mx-auto">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        className="absolute inset-0 rounded-full border-2 border-sky-300 border-dashed opacity-50"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
        className="absolute inset-4 rounded-full border-2 border-blue-300 border-dotted opacity-40"
      />
      <div className="absolute inset-8 rounded-full bg-gradient-to-br from-sky-200 to-blue-300 opacity-80 flex items-center justify-center">
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-10 h-10 rounded-full bg-gradient-to-br from-sky-400 to-blue-500 shadow-lg"
          style={{ boxShadow: '0 0 20px rgba(14,165,233,0.5)' }}
        />
      </div>
      {[0, 60, 120, 180, 240, 300].map((angle, i) => (
        <motion.div
          key={i}
          animate={{ scale: [0, 1, 0], opacity: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
          className="absolute w-2 h-2 rounded-full bg-sky-400"
          style={{
            top: `${50 + 42 * Math.sin((angle * Math.PI) / 180)}%`,
            left: `${50 + 42 * Math.cos((angle * Math.PI) / 180)}%`,
            transform: 'translate(-50%, -50%)',
          }}
        />
      ))}
    </div>
  )
}

function MetabolicChamberVisual() {
  return (
    <div className="relative w-40 h-40 mx-auto">
      <motion.div
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute inset-6 rounded-full"
        style={{ background: 'radial-gradient(circle, #4ADE80, #22C55E, #16A34A)', boxShadow: '0 0 30px rgba(34,197,94,0.4)' }}
      />
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
        <motion.div
          key={i}
          animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.15 }}
          className="absolute w-3 h-3 rounded-full bg-emerald-400"
          style={{
            top: `${50 + 38 * Math.sin((angle * Math.PI) / 180)}%`,
            left: `${50 + 38 * Math.cos((angle * Math.PI) / 180)}%`,
            transform: 'translate(-50%, -50%)',
          }}
        />
      ))}
    </div>
  )
}

function NanoVascularVisual() {
  return (
    <div className="relative w-40 h-40 mx-auto">
      <svg viewBox="0 0 160 160" className="w-full h-full">
        <defs>
          <radialGradient id="goldGrad">
            <stop offset="0%" stopColor="#FCD34D" />
            <stop offset="100%" stopColor="#F59E0B" />
          </radialGradient>
        </defs>
        {[
          'M80 80 L30 30', 'M80 80 L130 30', 'M80 80 L20 80',
          'M80 80 L140 80', 'M80 80 L30 130', 'M80 80 L130 130',
          'M80 80 L80 20', 'M80 80 L80 140',
        ].map((d, i) => (
          <motion.path
            key={i}
            d={d}
            stroke="#F59E0B"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: [0, 1, 0], opacity: [0, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
          />
        ))}
        {([[30,30],[130,30],[20,80],[140,80],[80,20]] as [number,number][]).map(([cx, cy], i) => (
          <motion.circle
            key={i}
            cx={cx}
            cy={cy}
            r="5"
            fill="#FCD34D"
            animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.3 }}
          />
        ))}
        <circle cx="80" cy="80" r="12" fill="url(#goldGrad)" />
      </svg>
    </div>
  )
}

const panels = [
  {
    id: 'smart-filter',
    title: 'Smart Filter',
    subtitle: 'Nanotechnology Filtration',
    description: 'Our proprietary nano-mesh filter captures 99.7% of harmful particles while intelligently preserving beneficial compounds. Real-time AI monitoring adjusts filtration intensity based on smoking patterns.',
    color: 'sky',
    visual: <SmartFilterVisual />,
    features: ['99.7% particle capture', 'AI-adaptive filtration', 'Self-cleaning nano-mesh'],
  },
  {
    id: 'metabolic-chamber',
    title: 'Metabolic Chamber',
    subtitle: 'Biological Processing Core',
    description: 'The heart of Infinicig — a living chamber where organic compounds are processed through proprietary enzymatic reactions. Toxins are broken down at the molecular level before inhalation.',
    color: 'emerald',
    visual: <MetabolicChamberVisual />,
    features: ['Enzymatic detoxification', 'Organic compound processing', 'Zero harmful byproducts'],
  },
  {
    id: 'nano-vascular',
    title: 'Nano-Vascular Network',
    subtitle: 'Energy Distribution System',
    description: 'A microscopic network of bio-compatible channels distributes solar energy and regenerative compounds throughout the cigarette structure. Modeled on biological vascular systems.',
    color: 'amber',
    visual: <NanoVascularVisual />,
    features: ['Solar energy distribution', 'Bio-compatible channels', 'Self-healing pathways'],
  },
]

const colorMap: Record<string, { bg: string; border: string; badge: string; text: string; dot: string }> = {
  sky: { bg: 'from-sky-50 to-blue-50', border: 'border-sky-200', badge: 'bg-sky-100 text-sky-700', text: 'text-sky-600', dot: 'bg-sky-500' },
  emerald: { bg: 'from-emerald-50 to-green-50', border: 'border-emerald-200', badge: 'bg-emerald-100 text-emerald-700', text: 'text-emerald-600', dot: 'bg-emerald-500' },
  amber: { bg: 'from-amber-50 to-yellow-50', border: 'border-amber-200', badge: 'bg-amber-100 text-amber-700', text: 'text-amber-600', dot: 'bg-amber-500' },
}

function PanelCard({ panel, index }: { panel: typeof panels[0]; index: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  const colors = colorMap[panel.color]

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.15 }}
      className={`relative rounded-3xl border ${colors.border} bg-gradient-to-br ${colors.bg} p-8 shadow-xl overflow-hidden`}
    >
      <GlowEffect color={panel.color} />
      <div className="relative z-10">
        <div className="mb-6">{panel.visual}</div>
        <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${colors.badge} mb-3`}>
          {panel.subtitle}
        </span>
        <h3 className={`text-2xl font-black ${colors.text} mb-3`}>{panel.title}</h3>
        <p className="text-slate-600 leading-relaxed mb-5 text-sm">{panel.description}</p>
        <ul className="space-y-2">
          {panel.features.map((f) => (
            <li key={f} className="flex items-center gap-2 text-sm text-slate-600">
              <div className={`w-2 h-2 rounded-full ${colors.dot}`} />
              {f}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}

export default function AnatomySection() {
  const titleRef = useRef(null)
  const titleInView = useInView(titleRef, { once: true })

  return (
    <section
      id="concept"
      className="min-h-screen py-24 px-6"
      style={{ background: 'linear-gradient(180deg, #ffffff 0%, #f0f9ff 50%, #ffffff 100%)' }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 40 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest text-sky-600 bg-sky-100 border border-sky-200 uppercase mb-4">
            Internal Architecture
          </span>
          <h2 className="text-5xl font-black text-slate-800 mb-4">
            Three Pillars of{' '}
            <span style={{ background: 'linear-gradient(135deg, #0EA5E9, #3B82F6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Innovation
            </span>
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Each component works in harmony, creating a biological feedback loop that regenerates the cigarette from within.
          </p>
        </motion.div>
        <div id="technology" className="grid md:grid-cols-3 gap-8">
          {panels.map((panel, i) => (
            <PanelCard key={panel.id} panel={panel} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
