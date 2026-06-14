"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Layers, Zap, Network } from "lucide-react";

const panels = [
  {
    id: "filter",
    icon: <Layers className="w-7 h-7" />,
    title: "The Smart Filter",
    subtitle: "First Intelligent Barrier",
    color: "sky",
    from: "#0ea5e9",
    to: "#38bdf8",
    glowColor: "rgba(14,165,233,0.3)",
    description:
      "An advanced filtration system built from self-regenerative materials. The first intelligent barrier between the outside world and the internal biological engine — designed for virtually unlimited lifespan while maintaining a pristine smoking experience.",
    features: [
      "Advanced multi-layer filtration",
      "Self-regenerative nano-materials",
      "Virtually unlimited lifespan",
      "Experience quality preservation",
    ],
    visual: <FilterVisual />,
  },
  {
    id: "chamber",
    icon: <Zap className="w-7 h-7" />,
    title: "The Metabolic Chamber",
    subtitle: "Main Reactor",
    color: "green",
    from: "#22c55e",
    to: "#4ade80",
    glowColor: "rgba(34,197,94,0.3)",
    description:
      "The beating heart of Infinicig. This central bio-reactor converts captured solar energy into the precise resources needed to sustain, regenerate, and optimize the entire system — a living engine of perpetual renewal.",
    features: [
      "Solar energy conversion",
      "Bio-reactive processing",
      "Continuous self-optimization",
      "Artificial photosynthesis core",
    ],
    visual: <ChamberVisual />,
  },
  {
    id: "network",
    icon: <Network className="w-7 h-7" />,
    title: "The Nano-Vascular Network",
    subtitle: "Energy & Repair Matrix",
    color: "gold",
    from: "#f59e0b",
    to: "#fcd34d",
    glowColor: "rgba(245,158,11,0.3)",
    description:
      "A living network of intelligent nano-channels flowing throughout the entire structure. Distributes energy with precision, detects degraded zones in real-time, and dispatches repair resources — mimicking the circulatory system of a living organism.",
    features: [
      "Real-time energy distribution",
      "Intelligent damage detection",
      "Autonomous repair dispatch",
      "Adaptive network topology",
    ],
    visual: <NetworkVisual />,
  },
];

function FilterVisual() {
  return (
    <div className="relative w-48 h-48 flex items-center justify-center">
      {[80, 110, 140, 170].map((size, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full border border-sky-300/60"
          style={{ width: size, height: size, background: `rgba(14,165,233,${0.08 - i * 0.015})` }}
          animate={{ scale: [1, 1.06, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 2.5 + i * 0.5, repeat: Infinity, delay: i * 0.4 }}
        />
      ))}
      {/* Central core */}
      <motion.div
        className="relative w-16 h-16 rounded-full flex items-center justify-center"
        style={{
          background: "linear-gradient(135deg, #38bdf8, #0ea5e9)",
          boxShadow: "0 0 30px rgba(14,165,233,0.6)",
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      >
        <div className="w-4 h-4 rounded-full bg-white/80" />
      </motion.div>
      {/* Particle dots */}
      {[0, 1, 2, 3, 4, 5].map((i) => {
        const angle = (i / 6) * Math.PI * 2;
        return (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-sky-400"
            style={{
              left: "50%",
              top: "50%",
              x: Math.cos(angle) * 55 - 4,
              y: Math.sin(angle) * 55 - 4,
              boxShadow: "0 0 8px 4px rgba(56,189,248,0.5)",
            }}
            animate={{ opacity: [0.4, 1, 0.4], scale: [0.8, 1.3, 0.8] }}
            transition={{ duration: 2, repeat: Infinity, delay: i * 0.33 }}
          />
        );
      })}
    </div>
  );
}

function ChamberVisual() {
  return (
    <div className="relative w-48 h-48 flex items-center justify-center">
      {/* Organic pulsing heart */}
      <motion.div
        className="absolute w-36 h-36 rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(74,222,128,0.4) 0%, rgba(34,197,94,0.15) 50%, transparent 100%)",
          boxShadow: "0 0 40px rgba(34,197,94,0.4)",
        }}
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-24 h-24 rounded-full"
        style={{
          background: "linear-gradient(135deg, #4ade80, #22c55e, #16a34a)",
          boxShadow: "0 0 20px rgba(34,197,94,0.7)",
        }}
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
      />
      {/* Energy lines */}
      {[0, 45, 90, 135].map((angle) => (
        <motion.div
          key={angle}
          className="absolute rounded-full"
          style={{
            width: 70,
            height: 2,
            background: "linear-gradient(90deg, transparent, rgba(74,222,128,0.8), transparent)",
            transformOrigin: "center",
            rotate: angle,
          }}
          animate={{ opacity: [0, 1, 0], scaleX: [0, 1, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, delay: (angle / 135) * 0.6 }}
        />
      ))}
      {/* Photosynthesis effect */}
      <motion.div
        className="absolute w-4 h-4 rounded-full"
        style={{ background: "rgba(252,211,77,0.9)", boxShadow: "0 0 12px 6px rgba(245,158,11,0.5)" }}
        animate={{
          x: [0, -40, 0, 40, 0],
          y: [0, 20, -30, 20, 0],
          opacity: [0, 1, 1, 1, 0],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}

function NetworkVisual() {
  const nodes = [
    { x: 96, y: 24 },
    { x: 168, y: 72 },
    { x: 144, y: 152 },
    { x: 48, y: 152 },
    { x: 24, y: 72 },
    { x: 96, y: 96 },
  ];

  return (
    <div className="relative w-48 h-48">
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 192 192">
        {/* Connections */}
        {nodes.slice(0, 5).map((node, i) => {
          const next = nodes[(i + 1) % 5];
          const center = nodes[5];
          return (
            <g key={i}>
              <motion.line
                x1={node.x} y1={node.y} x2={next.x} y2={next.y}
                stroke="rgba(245,158,11,0.3)" strokeWidth="1"
              />
              <motion.line
                x1={node.x} y1={node.y} x2={center.x} y2={center.y}
                stroke="rgba(245,158,11,0.2)" strokeWidth="1"
              />
              <motion.circle cx={node.x} cy={node.y} r="1.5" fill="rgba(245,158,11,0.8)">
                <animate attributeName="r" values="1.5;3;1.5" dur={`${1.5 + i * 0.3}s`} repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.5;1;0.5" dur={`${1.5 + i * 0.3}s`} repeatCount="indefinite" />
              </motion.circle>
              {/* Moving pulse along edge→center */}
              <motion.circle
                r="2"
                fill="rgba(252,211,77,1)"
                style={{ filter: "blur(1px)" }}
                animate={{
                  cx: [node.x, center.x],
                  cy: [node.y, center.y],
                  opacity: [0, 1, 0],
                }}
                transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.3 }}
              />
            </g>
          );
        })}
        {/* Center node */}
        <motion.circle
          cx={96} cy={96} r="10"
          fill="none" stroke="rgba(245,158,11,0.6)" strokeWidth="2"
          animate={{ r: [10, 14, 10] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <circle cx={96} cy={96} r="5" fill="rgba(245,158,11,0.9)" />
      </svg>
    </div>
  );
}

function PanelCard({
  panel,
  index,
}: {
  panel: (typeof panels)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      className="grid md:grid-cols-2 gap-10 items-center py-16 border-b border-slate-100 last:border-none"
    >
      {/* Text side */}
      <div className={index % 2 === 1 ? "md:order-2" : ""}>
        <div
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-semibold mb-4"
          style={{
            background: `linear-gradient(135deg, ${panel.from}22, ${panel.to}22)`,
            color: panel.from,
            border: `1px solid ${panel.from}33`,
          }}
        >
          {panel.icon}
          {panel.subtitle}
        </div>
        <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{panel.title}</h3>
        <p className="text-slate-600 text-lg leading-relaxed mb-6">{panel.description}</p>
        <ul className="space-y-2">
          {panel.features.map((f) => (
            <li key={f} className="flex items-center gap-3 text-slate-700">
              <div
                className="w-2 h-2 rounded-full flex-shrink-0"
                style={{ background: `linear-gradient(135deg, ${panel.from}, ${panel.to})` }}
              />
              {f}
            </li>
          ))}
        </ul>
      </div>

      {/* Visual side */}
      <div
        className={`flex justify-center items-center rounded-3xl p-10 ${index % 2 === 1 ? "md:order-1" : ""}`}
        style={{
          background: `radial-gradient(ellipse at center, ${panel.glowColor} 0%, rgba(248,250,252,0.8) 70%)`,
          boxShadow: `0 0 60px ${panel.glowColor}`,
        }}
      >
        {panel.visual}
      </div>
    </motion.div>
  );
}

export default function AnatomySection() {
  const titleRef = useRef<HTMLDivElement>(null);
  const titleInView = useInView(titleRef, { once: true });

  return (
    <section id="anatomy" className="relative py-24 overflow-hidden bg-gradient-to-b from-sky-50/40 to-white">
      {/* Background decoration */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full opacity-20"
        style={{ background: "linear-gradient(to bottom, transparent, #0ea5e9, transparent)" }}
      />

      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 40 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-50 border border-sky-200 text-sky-600 text-sm font-medium mb-6">
            Internal Engineering
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6">
            The Anatomy of the{" "}
            <span className="text-gradient-sky">System</span>
          </h2>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto">
            Three interlocking biological-synthetic systems working in harmony to create a perpetually self-renewing experience.
          </p>
        </motion.div>

        {panels.map((panel, i) => (
          <PanelCard key={panel.id} panel={panel} index={i} />
        ))}
      </div>
    </section>
  );
}
