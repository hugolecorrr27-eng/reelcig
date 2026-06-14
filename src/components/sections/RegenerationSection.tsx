"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Sun, Brain, Waves, Leaf } from "lucide-react";

const steps = [
  {
    id: 1,
    icon: <Sun className="w-7 h-7" />,
    title: "Solar Capture",
    subtitle: "Step 01",
    color: "#f59e0b",
    bg: "rgba(245,158,11,",
    description:
      "The energy core absorbs ambient sunlight through photovoltaic nano-layers embedded in the outer shell. Every photon is captured and converted into clean bioelectrical energy, feeding the metabolic chamber's continuous operation.",
    visual: <SolarVisual />,
  },
  {
    id: 2,
    icon: <Brain className="w-7 h-7" />,
    title: "AI Analysis",
    subtitle: "Step 02",
    color: "#3b82f6",
    bg: "rgba(59,130,246,",
    description:
      "Embedded micro-processors run continuous diagnostic cycles — scanning for worn, oxidized, or degraded cells in milliseconds. Holographic mapping projects real-time structural integrity across the nano-vascular matrix.",
    visual: <AIVisual />,
  },
  {
    id: 3,
    icon: <Waves className="w-7 h-7" />,
    title: "Distribution",
    subtitle: "Step 03",
    color: "#0ea5e9",
    bg: "rgba(14,165,233,",
    description:
      "Light impulses traverse the nano-vascular network at near-instantaneous speed. Targeted energy packets are routed to each damaged zone with surgical precision, bypassing healthy tissue and maximizing efficiency.",
    visual: <DistributionVisual />,
  },
  {
    id: 4,
    icon: <Leaf className="w-7 h-7" />,
    title: "Regeneration",
    subtitle: "Step 04",
    color: "#22c55e",
    bg: "rgba(34,197,94,",
    description:
      "Artificial photosynthesis rebuilds degraded cells organically. Damaged zones are progressively reconstructed — molecule by molecule — as living material is synthesized from captured sunlight and bioavailable compounds.",
    visual: <RegenerationVisual />,
  },
];

function SolarVisual() {
  return (
    <div className="relative w-56 h-56 flex items-center justify-center">
      {/* Sun core */}
      <motion.div
        className="absolute w-20 h-20 rounded-full"
        style={{
          background: "radial-gradient(circle, #fef08a 30%, #fcd34d 60%, #f59e0b 100%)",
          boxShadow: "0 0 60px rgba(245,158,11,0.8), 0 0 120px rgba(245,158,11,0.3)",
        }}
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      {/* Rays */}
      {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle) => (
        <motion.div
          key={angle}
          className="absolute rounded-full"
          style={{
            width: 40,
            height: 3,
            background: "linear-gradient(90deg, rgba(252,211,77,0.8), transparent)",
            transformOrigin: "left center",
            left: "50%",
            top: "50%",
            rotate: angle,
            marginTop: -1.5,
          }}
          animate={{ scaleX: [0.6, 1.2, 0.6], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, delay: (angle / 360) * 2 }}
        />
      ))}
      {/* Energy streams going down */}
      {[-1, 0, 1].map((offset) => (
        <motion.div
          key={offset}
          className="absolute rounded-full"
          style={{
            width: 3,
            background: "linear-gradient(180deg, rgba(252,211,77,0.8), rgba(14,165,233,0.4), transparent)",
            left: `calc(50% + ${offset * 14}px)`,
            top: "55%",
            height: 80,
          }}
          animate={{ opacity: [0, 1, 0], scaleY: [0, 1, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, delay: Math.abs(offset) * 0.3 }}
        />
      ))}
    </div>
  );
}

function AIVisual() {
  return (
    <div className="relative w-56 h-56 flex items-center justify-center">
      {/* Holographic scan lines */}
      {[0, 1, 2, 3, 4, 5, 6].map((i) => (
        <motion.div
          key={i}
          className="absolute left-8 right-8 rounded-full"
          style={{
            height: 1,
            background: `rgba(59,130,246,${0.15 + (i % 2) * 0.1})`,
            top: `${20 + i * 20}px`,
          }}
          animate={{ opacity: [0.2, 0.8, 0.2], scaleX: [0.6, 1, 0.6] }}
          transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.15 }}
        />
      ))}

      {/* Scan beam */}
      <motion.div
        className="absolute left-8 right-8 h-0.5 rounded-full"
        style={{
          background: "linear-gradient(90deg, transparent, rgba(59,130,246,0.9), transparent)",
          boxShadow: "0 0 10px rgba(59,130,246,0.8)",
        }}
        animate={{ top: ["10%", "90%", "10%"] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Data points */}
      {[
        { x: 35, y: 50, ok: true },
        { x: 100, y: 80, ok: false },
        { x: 130, y: 40, ok: true },
        { x: 70, y: 110, ok: false },
        { x: 150, y: 100, ok: true },
      ].map((pt, i) => (
        <motion.div
          key={i}
          className="absolute w-3 h-3 rounded-full"
          style={{
            left: pt.x,
            top: pt.y,
            background: pt.ok ? "rgba(34,197,94,0.9)" : "rgba(239,68,68,0.9)",
            boxShadow: `0 0 8px ${pt.ok ? "rgba(34,197,94,0.7)" : "rgba(239,68,68,0.7)"}`,
          }}
          animate={{ opacity: [0.4, 1, 0.4], scale: [0.8, 1.2, 0.8] }}
          transition={{ duration: 1.8, repeat: Infinity, delay: i * 0.3 }}
        />
      ))}

      {/* Central CPU */}
      <div
        className="absolute w-14 h-14 rounded-xl border-2 border-blue-400 flex items-center justify-center"
        style={{
          background: "rgba(59,130,246,0.15)",
          boxShadow: "0 0 20px rgba(59,130,246,0.4)",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <Brain className="w-6 h-6 text-blue-500" />
      </div>
    </div>
  );
}

function DistributionVisual() {
  return (
    <div className="relative w-56 h-56 flex items-center justify-center">
      <svg viewBox="0 0 220 220" className="absolute inset-0 w-full h-full">
        {/* Network paths */}
        {[
          "M110,110 L40,40", "M110,110 L180,40", "M110,110 L180,180",
          "M110,110 L40,180", "M110,110 L110,30", "M110,110 L190,110",
          "M110,110 L110,190", "M110,110 L30,110",
        ].map((d, i) => (
          <g key={i}>
            <path d={d} stroke="rgba(14,165,233,0.2)" strokeWidth="1.5" fill="none" />
            <motion.circle r="3" fill="#38bdf8" style={{ filter: "blur(1px)" }}>
              <animateMotion
                path={d}
                dur={`${1.2 + i * 0.15}s`}
                repeatCount="indefinite"
                begin={`${i * 0.2}s`}
              />
              <animate attributeName="opacity" values="0;1;0" dur={`${1.2 + i * 0.15}s`} repeatCount="indefinite" begin={`${i * 0.2}s`} />
            </motion.circle>
          </g>
        ))}
        {/* End nodes */}
        {[
          [40,40], [180,40], [180,180], [40,180],
          [110,30], [190,110], [110,190], [30,110],
        ].map(([cx,cy], i) => (
          <circle key={i} cx={cx} cy={cy} r="4" fill="rgba(14,165,233,0.7)">
            <animate attributeName="r" values="4;6;4" dur="2s" repeatCount="indefinite" begin={`${i*0.25}s`}/>
          </circle>
        ))}
        {/* Center */}
        <circle cx="110" cy="110" r="12" fill="rgba(14,165,233,0.2)" stroke="#0ea5e9" strokeWidth="2">
          <animate attributeName="r" values="12;16;12" dur="2s" repeatCount="indefinite"/>
        </circle>
        <circle cx="110" cy="110" r="5" fill="#0ea5e9"/>
      </svg>
    </div>
  );
}

function RegenerationVisual() {
  return (
    <div className="relative w-56 h-56 flex items-center justify-center overflow-hidden">
      {/* Growing organic structure */}
      {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => {
        const angle = (i / 8) * Math.PI * 2;
        const r = 55 + (i % 2) * 20;
        return (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: 12 + (i % 3) * 4,
              height: 12 + (i % 3) * 4,
              background: "radial-gradient(circle, rgba(74,222,128,0.9), rgba(34,197,94,0.5))",
              boxShadow: "0 0 10px rgba(34,197,94,0.6)",
              left: "50%",
              top: "50%",
              x: Math.cos(angle) * r - 8,
              y: Math.sin(angle) * r - 8,
            }}
            animate={{
              scale: [0, 1, 1.2, 1],
              opacity: [0, 1, 1, 0.8],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 0.4,
              ease: "easeOut",
            }}
          />
        );
      })}
      {/* Center bloom */}
      <motion.div
        className="absolute w-24 h-24 rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(74,222,128,0.6), rgba(34,197,94,0.2), transparent)",
        }}
        animate={{ scale: [0.8, 1.3, 0.8], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 3, repeat: Infinity }}
      />
      {/* Floating particles */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1.5 h-1.5 rounded-full bg-green-400"
          style={{ left: "50%", top: "50%" }}
          animate={{
            x: [0, (Math.random() - 0.5) * 100],
            y: [0, -60 - Math.random() * 60],
            opacity: [1, 0],
            scale: [1, 0.3],
          }}
          transition={{
            duration: 2 + Math.random() * 2,
            repeat: Infinity,
            delay: i * 0.25,
            ease: "easeOut",
          }}
        />
      ))}
      {/* Sun light from above */}
      <motion.div
        className="absolute top-0 left-1/2 w-1 -translate-x-1/2"
        style={{
          height: 80,
          background: "linear-gradient(180deg, rgba(252,211,77,0.8), transparent)",
        }}
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 2.5, repeat: Infinity }}
      />
    </div>
  );
}

function StepCard({ step, index }: { step: (typeof steps)[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative rounded-3xl p-8 transition-all duration-300 cursor-default"
      style={{
        background: hovered
          ? `radial-gradient(ellipse at center, ${step.bg}0.08) 0%, rgba(255,255,255,0.95) 70%)`
          : "rgba(255,255,255,0.8)",
        boxShadow: hovered
          ? `0 30px 60px rgba(0,0,0,0.1), 0 0 40px ${step.bg}0.2)`
          : "0 4px 20px rgba(0,0,0,0.06)",
        border: `1px solid ${step.bg}${hovered ? "0.3" : "0.15"})`,
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
      }}
    >
      {/* Step number */}
      <div
        className="text-xs font-bold tracking-widest uppercase mb-4 opacity-50"
        style={{ color: step.color }}
      >
        {step.subtitle}
      </div>

      {/* Visual */}
      <div className="flex justify-center mb-6">{step.visual}</div>

      {/* Icon + Title */}
      <div className="flex items-center gap-3 mb-3">
        <div
          className="p-2 rounded-xl"
          style={{ background: `${step.bg}0.15)`, color: step.color }}
        >
          {step.icon}
        </div>
        <h3 className="text-xl font-bold text-slate-900">{step.title}</h3>
      </div>

      <p className="text-slate-600 leading-relaxed">{step.description}</p>

      {/* Bottom accent line */}
      <motion.div
        className="absolute bottom-0 left-8 right-8 h-0.5 rounded-full"
        style={{ background: `linear-gradient(90deg, transparent, ${step.color}, transparent)` }}
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
}

export default function RegenerationSection() {
  const titleRef = useRef<HTMLDivElement>(null);
  const titleInView = useInView(titleRef, { once: true });

  return (
    <section
      id="regeneration"
      className="relative py-24 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #ffffff 0%, #f0fdf4 50%, #f0f9ff 100%)",
      }}
    >
      {/* Decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute -top-20 -right-20 w-96 h-96 rounded-full"
          style={{ background: "radial-gradient(circle, rgba(34,197,94,0.08) 0%, transparent 70%)" }}
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full"
          style={{ background: "radial-gradient(circle, rgba(14,165,233,0.08) 0%, transparent 70%)" }}
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative">
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 40 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 border border-green-200 text-green-600 text-sm font-medium mb-6">
            Perpetual Renewal
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6">
            How Infinicig{" "}
            <span className="text-gradient-sky">Rebuilds Itself?</span>
          </h2>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto">
            A 4-stage biological-synthetic cycle that operates continuously — every second, without interruption.
          </p>
        </motion.div>

        {/* Step flow connector */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <div key={step.id} className="relative">
              <StepCard step={step} index={i} />
              {/* Connector arrow */}
              {i < steps.length - 1 && (
                <motion.div
                  className="hidden lg:flex absolute top-1/2 -right-3 z-10 items-center justify-center w-6 h-6 rounded-full bg-white shadow-md border border-slate-200"
                  animate={{ x: [0, 3, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <span className="text-slate-400 text-xs">→</span>
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
