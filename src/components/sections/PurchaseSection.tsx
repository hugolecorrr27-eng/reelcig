'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { ShoppingCart, Zap, Shield, Leaf } from 'lucide-react'
import CigaretteModel from '@/components/ui/CigaretteModel'

const trustBadges = [
  { icon: Leaf, label: 'Eco-Certified', sub: 'ISO 14001 Compliant' },
  { icon: Zap, label: 'AI-Powered', sub: 'Neural Processing' },
  { icon: Shield, label: 'Lifetime Warranty', sub: 'Full Replacement' },
]

export default function PurchaseSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const [added, setAdded] = useState(false)

  const handleAddToCart = () => {
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  return (
    <section
      id="order"
      className="min-h-screen py-24 px-6 relative overflow-hidden"
      style={{
        background: 'radial-gradient(ellipse at 50% 0%, #bae6fd 0%, #e0f2fe 30%, #f0f9ff 70%, #f0fdf4 100%)',
      }}
    >
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-20 right-20 w-64 h-64 rounded-full opacity-20 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #22C55E, transparent)' }}
      />

      <div ref={ref} className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest text-amber-600 bg-amber-100 border border-amber-200 uppercase mb-4">
            Limited First Edition
          </span>
          <h2 className="text-5xl font-black text-slate-800 mb-4">
            Own the{' '}
            <span style={{ background: 'linear-gradient(135deg, #F59E0B, #FCD34D)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Future
            </span>
          </h2>
          <p className="text-lg text-slate-500 max-w-xl mx-auto">
            Be among the first to experience the world&apos;s only self-regenerating cigarette. Production limited to 1,000 units.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col items-center"
          >
            <CigaretteModel large />
            <div className="mt-8 flex items-center gap-6">
              <div className="text-center">
                <div className="text-4xl font-black text-slate-800">€1,000</div>
                <div className="text-sm text-slate-500">One-time investment</div>
              </div>
              <div className="text-left">
                <div className="text-sm font-semibold text-emerald-600">Replaces 10,000+ disposables</div>
                <div className="text-xs text-slate-500">Saves ~€50,000 over lifetime</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="rounded-3xl glass border border-sky-200 p-8 shadow-2xl"
          >
            <div className="space-y-4 mb-8">
              {[
                { label: 'Smart Filter System', value: 'Included' },
                { label: 'Metabolic Chamber', value: 'Gen 1.0' },
                { label: 'Nano-Vascular Network', value: '1,200 channels' },
                { label: 'Solar Panels', value: '48 micro-cells' },
                { label: 'AI Processor', value: 'InfiniCore™ v3' },
                { label: 'Battery Life', value: 'Perpetual (solar)' },
              ].map(({ label, value }) => (
                <div key={label} className="flex justify-between text-sm border-b border-slate-100 pb-3">
                  <span className="text-slate-600">{label}</span>
                  <span className="font-semibold text-slate-800">{value}</span>
                </div>
              ))}
            </div>

            <div className="space-y-3 mb-8">
              <motion.button
                onClick={handleAddToCart}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-center gap-3 py-4 bg-sky-500 hover:bg-sky-600 text-white font-bold rounded-2xl transition-all duration-300 shadow-lg text-lg"
              >
                <ShoppingCart className="w-5 h-5" />
                {added ? '✓ Added to Cart!' : 'Add to Cart'}
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 bg-gradient-to-r from-amber-400 to-orange-400 hover:from-amber-500 hover:to-orange-500 text-white font-bold rounded-2xl transition-all duration-300 shadow-lg text-lg"
              >
                Order Now — €1,000
              </motion.button>
            </div>

            <div className="grid grid-cols-3 gap-3">
              {trustBadges.map(({ icon: Icon, label, sub }) => (
                <div key={label} className="text-center p-3 rounded-2xl bg-slate-50 border border-slate-100">
                  <Icon className="w-5 h-5 text-sky-500 mx-auto mb-1" />
                  <div className="text-xs font-bold text-slate-700">{label}</div>
                  <div className="text-xs text-slate-400">{sub}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
