"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Droplets, Trash2, Leaf, Brain, Shield, Infinity } from "lucide-react";

function AnimatedNumber({ target, suffix = "", duration = 2 }: { target: number; suffix?: string; duration?: number }) {
  const [current, setCurrent] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start: number;
    const step = (ts: number) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCurrent(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, target, duration]);

  return <span ref={ref}>{current.toLocaleString()}{suffix}</span>;
}

const problems = [
  {
    icon: <Droplets className="w-6 h-6" />,
    stat: 500,
    suffix: "L",
    label: "Of Water Contaminated",
    detail: "per cigarette butt discarded into nature",
    color: "#ef4444",
  },
  {
    icon: <Trash2 className="w-6 h-6" />,
    stat: 4500,
    suffix: "yrs",
    label: "To Biodegrade",
    detail: "synthetic filters persist in the environment",
    color: "#f97316",
  },
  {
    icon: <Leaf className="w-6 h-6" />,
    stat: 6000,
    suffix: "B",
    label: "Butts Per Year",
    detail: "discarded globally — the #1 plastic pollutant",
    color: "#eab308",
  },
];

const solutions = [
  {
    icon: <Leaf className="w-7 h-7" />,
    title: "Sustainable Organic Structure",
    description:
      "Hybrid bio-synthetic materials engineered for longevity. The outer shell integrates naturally with the environment while the internal system achieves a closed-loop material cycle — zero net waste.",
    color: "#22c55e",
    bg: "rgba(34,197,94,",
  },
  {
    icon: <Brain className="w-7 h-7" />,
    title: "Toxin Reduction via AI",
    description:
      "The metabolic chamber and embedded AI actively neutralize harmful residues through artificial photosynthesis. Each inhalation is cleaner than the last as the system continuously optimizes its filtration chemistry.",
    color: "#0ea5e9",
    bg: "rgba(14,165,233,",
  },
  {
    icon: <Infinity className="w-7 h-7" />,
    title: "Industrial Durability",
    description:
      "A single Infinicig is designed to replace 10,000+ conventional disposables over its lifespan. One product. Zero packaging waste. A purchasing decision you make once — for a lifetime.",
    color: "#f59e0b",
    bg: "rgba(245,158,11,",
  },
];

export default function BenefitsSection() {
  const titleRef = useRef<HTMLDivElement>(null);
  const titleInView = useInView(titleRef, { once: true });

  return (
    <section
      id="benefits"
      className="relative py-24 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #f0f9ff 0%, #f8fafc 50%, #f0fdf4 100%)" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 40 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-50 border border-sky-200 text-sky-600 text-sm font-medium mb-6">
            Environmental Impact
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6">
            The Case for{" "}
            <span className="text-gradient-sky">Change</span>
          </h2>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto">
            Every conventional cigarette is an ecological act of negligence. Infinicig ends that equation.
          </p>
        </motion.div>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Problem column */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <h3 className="text-2xl font-bold text-slate-900">The Problem</h3>
            </div>
            <p className="text-slate-500 mb-8 leading-relaxed">
              Conventional cigarettes are ecological time bombs. Each one carries a devastating environmental cost that accumulates silently across billions of smokers worldwide.
            </p>

            <div className="space-y-4">
              {problems.map((p, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  className="flex items-start gap-5 p-5 rounded-2xl"
                  style={{
                    background: `linear-gradient(135deg, ${p.color}10, rgba(255,255,255,0.8))`,
                    border: `1px solid ${p.color}25`,
                  }}
                >
                  <div
                    className="flex-shrink-0 p-3 rounded-xl"
                    style={{ background: `${p.color}20`, color: p.color }}
                  >
                    {p.icon}
                  </div>
                  <div>
                    <div className="text-3xl font-black" style={{ color: p.color }}>
                      <AnimatedNumber target={p.stat} suffix={p.suffix} />
                    </div>
                    <div className="font-semibold text-slate-800">{p.label}</div>
                    <div className="text-sm text-slate-500 mt-0.5">{p.detail}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Solution column */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <h3 className="text-2xl font-bold text-slate-900">The Infinicig Solution</h3>
            </div>
            <p className="text-slate-500 mb-8 leading-relaxed">
              Infinicig doesn&apos;t just reduce harm — it eliminates the very concept of disposability from the smoking experience.
            </p>

            <div className="space-y-4">
              {solutions.map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  whileHover={{ scale: 1.02 }}
                  className="p-6 rounded-2xl transition-all duration-300"
                  style={{
                    background: `linear-gradient(135deg, ${s.bg}0.08), rgba(255,255,255,0.9))`,
                    border: `1px solid ${s.bg}0.2)`,
                    boxShadow: `0 4px 20px ${s.bg}0.1)`,
                  }}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="flex-shrink-0 p-2.5 rounded-xl"
                      style={{ background: `${s.bg}0.15)`, color: s.color }}
                    >
                      {s.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-2">{s.title}</h4>
                      <p className="text-slate-600 text-sm leading-relaxed">{s.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom impact banner */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 rounded-3xl p-10 text-center"
          style={{
            background: "linear-gradient(135deg, #0ea5e9, #22c55e)",
            boxShadow: "0 30px 60px rgba(14,165,233,0.3)",
          }}
        >
          <Shield className="w-10 h-10 text-white mx-auto mb-4 opacity-80" />
          <h3 className="text-3xl md:text-4xl font-black text-white mb-4">
            One Infinicig Replaces 10,000+ Disposables
          </h3>
          <p className="text-sky-100 text-lg max-w-2xl mx-auto">
            The most sustainable choice you can make as a smoker. A single purchase that lasts a lifetime — powered by sunlight.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
