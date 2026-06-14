'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Sun, Brain, Zap, Leaf } from 'lucide-react'

function SolarVisual() {
  return (
    <div className="relative w-32 h-32 mx-auto">
      {Array.from({ length: 8 }, (_, i) => (
        <motion.div
          key={i}
          animate={{ scaleY: [0.3, 1, 0.3], opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 2, repeat: Infinity, delay: i * 0.25 }}
          className="absolute w-1.5 rounded-full bg-gradient-to-b from-amber-300 to-transparent"
          style={{
            height: '40%', top: '10%', left: '50%',
            transformOrigin: 'bottom center',
            transform: `translateX(-50%) rotate(${i * 45}deg)`,
          }}
        />
      ))}
      <motion.div
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute inset-8 rounded-full bg-gradient-to-br from-amber-300 to-orange-400 shadow-lg"
        style={{ boxShadow: '0 0 30px rgba(245, 158, 11, 0.5)' }}
      />
    </div>
  )
}

function AIVisual() {
  return (
    <div className="relative w-32 h-32 mx-auto">
      <div className="absolute inset-0 rounded-xl border border-blue-300 opacity-50" />
      {Array.from({ length: 4 }, (_, i) => (
        <motion.div
          key={i}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.35 }}
          className="absolute border border-blue-400"
          style={{ inset: `${i * 8}px`, borderRadius: '8px' }}
        />
      ))}
      <motion.div
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
        className="absolute inset-10 rounded-full border-2 border-dashed border-blue-400"
      />
      <div className="absolute inset-12 rounded-full bg-gradient-to-br from-blue-400 to-indigo-500" />
    </div>
  )
}

function DistributionVisual() {
  return (
    <div className="relative w-32 h-32 mx-auto">
      <svg viewBox="0 0 128 128" className="w-full h-full">
        {[
          { d: 'M64 64 L20 20', delay: 0 },
          { d: 'M64 64 L108 20', delay: 0.3 },
          { d: 'M64 64 L20 108', delay: 0.6 },
          { d: 'M64 64 L108 108', delay: 0.9 },
        ].map(({ d, delay }, i) => (
          <motion.path
            key={i}
            d={d}
            stroke="#38BDF8"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
            animate={{ pathLength: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay, ease: 'easeInOut' }}
          />
        ))}
        <circle cx="64" cy="64" r="10" fill="#0EA5E9" />
        {([[20, 20], [108, 20], [20, 108], [108, 108]] as [number,number][]).map(([cx, cy], i) => (
          <motion.circle
            key={i}
            cx={cx}
            cy={cy}
            r="6"
            fill="#38BDF8"
            animate={{ scale: [1, 1.5, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.3 }}
          />
        ))}
      </svg>
    </div>
  )
}

function RegenerationVisual() {
  return (
    <div className="relative w-32 h-32 mx-auto">
      {Array.from({ length: 12 }, (_, i) => (
        <motion.div
          key={i}
          animate={{
            x: [0, Math.cos(i * 30 * Math.PI / 180) * 40],
            y: [0, Math.sin(i * 30 * Math.PI / 180) * 40],
            scale: [0, 1, 0],
            opacity: [0, 1, 0],
          }}
          transition={{ duration: 2, repeat: Infinity, delay: i * 0.15, ease: 'easeOut' }}
          className="absolute w-2 h-2 rounded-full bg-emerald-400"
          style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
        />
      ))}
      <motion.div
        animate={{ scale: [0.8, 1.2, 0.8] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute inset-6 rounded-full bg-gradient-to-br from-emerald-300 to-green-500"
        style={{ boxShadow: '0 0 30px rgba(34,197,94,0.5)' }}
      />
    </div>
  )
}

const steps = [
  { id: 1, icon: Sun, title: 'Solar Capture', subtitle: 'Photovoltaic Nano-Layer', description: 'Microscopic photovoltaic cells embedded in the outer layer harvest ambient light and UV radiation. Even indoor fluorescent lighting generates enough energy for a 30-minute regeneration cycle.', color: 'amber', visual: 'solar' },
  { id: 2, icon: Brain, title: 'AI Analysis', subtitle: 'Real-Time Diagnostics', description: 'Our onboard neural processor analyzes tobacco degradation at 10,000 samples per second. It identifies depleted compounds, toxin accumulation zones, and optimal regeneration pathways.', color: 'blue', visual: 'ai' },
  { id: 3, icon: Zap, title: 'Distribution', subtitle: 'Nano-Vascular Delivery', description: 'Regenerative compounds are precisely delivered through the nano-vascular network. Each pathway is individually controlled, ensuring uniform regeneration across the entire structure.', color: 'sky', visual: 'distribution' },
  { id: 4, icon: Leaf, title: 'Regeneration', subtitle: 'Biological Restoration', description: 'Depleted tobacco compounds are rebuilt from base molecular components. The biological matrix reforms, restoring the cigarette to its original condition — ready for the next use cycle.', color: 'emerald', visual: 'regeneration' },
]

const visualMap: Record<string, React.ReactNode> = {
  solar: <SolarVisual />,
  ai: <AIVisual />,
  distribution: <DistributionVisual />,
  regeneration: <RegenerationVisual />,
}

const colorStyles: Record<string, { card: string; icon: string; badge: string; title: string; border: string }> = {
  amber: { card: 'from-amber-50 to-yellow-50', icon: 'bg-amber-100 text-amber-600', badge: 'bg-amber-100 text-amber-700', title: 'text-amber-600', border: 'border-amber-200' },
  blue: { card: 'from-blue-50 to-indigo-50', icon: 'bg-blue-100 text-blue-600', badge: 'bg-blue-100 text-blue-700', title: 'text-blue-600', border: 'border-blue-200' },
  sky: { card: 'from-sky-50 to-cyan-50', icon: 'bg-sky-100 text-sky-600', badge: 'bg-sky-100 text-sky-700', title: 'text-sky-600', border: 'border-sky-200' },
  emerald: { card: 'from-emerald-50 to-green-50', icon: 'bg-emerald-100 text-emerald-600', badge: 'bg-emerald-100 text-emerald-700', title: 'text-emerald-600', border: 'border-emerald-200' },
}

function StepCard({ step, index }: { step: typeof steps[0]; index: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [active, setActive] = useState(false)
  const colors = colorStyles[step.color]
  const Icon = step.icon

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      onClick={() => setActive(!active)}
      className={`relative rounded-3xl border ${colors.border} bg-gradient-to-br ${colors.card} p-8 cursor-pointer transition-all duration-300 shadow-lg hover:shadow-2xl`}
    >
      <div className="flex items-start gap-6">
        <div className="flex-shrink-0">
          <div className={`w-12 h-12 rounded-2xl ${colors.icon} flex items-center justify-center`}>
            <Icon className="w-6 h-6" />
          </div>
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${colors.badge}`}>Step {step.id}</span>
            <span className="text-xs text-slate-400">{step.subtitle}</span>
          </div>
          <h3 className={`text-2xl font-black ${colors.title} mb-3`}>{step.title}</h3>
          {active && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="mb-6"
            >
              {visualMap[step.visual]}
            </motion.div>
          )}
          <p className="text-slate-600 text-sm leading-relaxed">{step.description}</p>
        </div>
      </div>
    </motion.div>
  )
}

export default function RegenerationSection() {
  const titleRef = useRef(null)
  const titleInView = useInView(titleRef, { once: true })

  return (
    <section
      id="regeneration"
      className="min-h-screen py-24 px-6"
      style={{ background: 'linear-gradient(180deg, #ffffff 0%, #f0fdf4 50%, #fff7ed 100%)' }}
    >
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 40 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest text-emerald-600 bg-emerald-100 border border-emerald-200 uppercase mb-4">
            The Regeneration Cycle
          </span>
          <h2 className="text-5xl font-black text-slate-800 mb-4">
            How Infinicig{' '}
            <span style={{ background: 'linear-gradient(135deg, #0EA5E9, #3B82F6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Regenerates
            </span>
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            A seamless 4-step process that restores your cigarette to factory condition — powered by solar energy and artificial intelligence.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-6">
          {steps.map((step, i) => (
            <StepCard key={step.id} step={step} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
