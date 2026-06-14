'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { Leaf, Brain, Shield } from 'lucide-react'
import GlowEffect from '@/components/ui/GlowEffect'

function useCounter(target: number, duration: number, start: boolean) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!start) return
    let startTime: number | null = null
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1)
      setCount(Math.floor(progress * target))
      if (progress < 1) requestAnimationFrame(step)
    }
    const id = requestAnimationFrame(step)
    return () => cancelAnimationFrame(id)
  }, [start, target, duration])
  return count
}

function StatCounter({ value, label, unit = '' }: { value: number; label: string; unit?: string }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const count = useCounter(value, 2, inView)

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl font-black mb-2 text-rose-500">
        {count.toLocaleString()}{unit}
      </div>
      <div className="text-xs text-slate-500 font-medium leading-tight">{label}</div>
    </div>
  )
}

const benefits = [
  { icon: Leaf, title: 'Sustainable Organic Structure', description: 'Fully biodegradable materials derived from renewable sources. Zero microplastic pollution, zero toxic residue.', color: 'emerald' },
  { icon: Brain, title: 'AI-Powered Toxin Reduction', description: 'Real-time analysis reduces harmful compounds by up to 94% through adaptive filtration and metabolic processing.', color: 'blue' },
  { icon: Shield, title: 'Industrial Durability', description: 'Each Infinicig replaces over 10,000 disposable cigarettes. A lifetime of sustainable smoking from a single device.', color: 'amber' },
]

const colorStyles: Record<string, { icon: string; card: string; border: string; title: string }> = {
  emerald: { icon: 'bg-emerald-100 text-emerald-600', card: 'from-emerald-50 to-green-50', border: 'border-emerald-200', title: 'text-emerald-700' },
  blue: { icon: 'bg-blue-100 text-blue-600', card: 'from-blue-50 to-indigo-50', border: 'border-blue-200', title: 'text-blue-700' },
  amber: { icon: 'bg-amber-100 text-amber-600', card: 'from-amber-50 to-yellow-50', border: 'border-amber-200', title: 'text-amber-700' },
}

export default function BenefitsSection() {
  const titleRef = useRef(null)
  const titleInView = useInView(titleRef, { once: true })

  return (
    <section
      id="benefits"
      className="min-h-screen py-24 px-6"
      style={{ background: 'linear-gradient(180deg, #fff7ed 0%, #ffffff 40%, #f0fdf4 100%)' }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 40 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest text-rose-600 bg-rose-100 border border-rose-200 uppercase mb-4">
            Why It Matters
          </span>
          <h2 className="text-5xl font-black text-slate-800 mb-4">
            The <span className="text-rose-500">Problem</span> &{' '}
            <span style={{ background: 'linear-gradient(135deg, #0EA5E9, #3B82F6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Solution
            </span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={titleInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative rounded-3xl border border-rose-200 bg-gradient-to-br from-rose-50 to-orange-50 p-10 shadow-xl"
          >
            <h3 className="text-2xl font-black text-rose-600 mb-8">The Problem</h3>
            <div className="grid grid-cols-2 gap-8 mb-8">
              <StatCounter value={500} label="Liters of water polluted per cigarette butt" unit="L" />
              <StatCounter value={4500} label="Toxic chemicals in traditional cigarette smoke" />
              <StatCounter value={6} label="Trillion cigarettes produced annually" unit="T" />
              <StatCounter value={95} label="Percentage that end up in the environment" unit="%" />
            </div>
            <div className="space-y-3">
              {[
                'Cigarette butts are the #1 collected ocean waste item',
                'Filters take 10+ years to decompose',
                'Each butt leaches carcinogens into groundwater',
                'Current eco alternatives lack durability',
              ].map((fact, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={titleInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="flex items-start gap-3 text-sm text-slate-600"
                >
                  <div className="w-5 h-5 rounded-full bg-rose-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-rose-500" />
                  </div>
                  {fact}
                </motion.div>
              ))}
            </div>
          </motion.div>

          <div className="space-y-6">
            <motion.p
              initial={{ opacity: 0, x: 60 }}
              animate={titleInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-lg text-slate-500 mb-8 leading-relaxed"
            >
              Infinicig was engineered to eliminate every one of these problems simultaneously — without asking smokers to compromise on experience.
            </motion.p>
            {benefits.map((benefit, i) => {
              const colors = colorStyles[benefit.color]
              const Icon = benefit.icon
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 60 }}
                  animate={titleInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.7, delay: 0.2 + i * 0.15 }}
                  className={`relative rounded-2xl border ${colors.border} bg-gradient-to-br ${colors.card} p-6 shadow-lg overflow-hidden`}
                >
                  <GlowEffect color={benefit.color} />
                  <div className="relative z-10 flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-2xl ${colors.icon} flex items-center justify-center flex-shrink-0`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className={`font-bold ${colors.title} mb-1`}>{benefit.title}</h4>
                      <p className="text-sm text-slate-600 leading-relaxed">{benefit.description}</p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
