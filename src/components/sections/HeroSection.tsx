"use client";

import { motion } from "framer-motion";
import { ChevronDown, Sparkles } from "lucide-react";
import ParticleField from "@/components/ui/ParticleField";
import GlowEffect from "@/components/ui/GlowEffect";
import CigaretteModel from "@/components/ui/CigaretteModel";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay, ease: "easeOut" as const },
  }),
};

export default function HeroSection() {
  const scrollToNext = () => {
    const el = document.querySelector("#anatomy");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse 80% 60% at 50% 20%, #bae6fd 0%, #e0f2fe 35%, #ecfdf5 65%, #fefce8 100%)",
      }}
    >
      <ParticleField count={50} />

      {/* Atmospheric glows */}
      <GlowEffect color="sky" size={700} className="-top-40 -left-40" />
      <GlowEffect color="green" size={500} className="-bottom-20 -right-20" />
      <GlowEffect color="gold" size={400} className="top-1/2 right-1/4" animate={false} />

      {/* Sun orb */}
      <motion.div
        className="absolute top-16 right-20 w-32 h-32 rounded-full"
        style={{
          background: "radial-gradient(circle, #fcd34d 30%, #f59e0b 60%, rgba(245,158,11,0) 100%)",
          filter: "blur(4px)",
        }}
        animate={{ scale: [1, 1.08, 1], opacity: [0.8, 1, 0.8] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-16 right-20 w-32 h-32 rounded-full"
        style={{
          boxShadow: "0 0 80px 40px rgba(245,158,11,0.25)",
        }}
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Floating clouds / organic shapes */}
      {[
        { x: "10%", y: "25%", w: 180, delay: 0 },
        { x: "70%", y: "15%", w: 140, delay: 1 },
        { x: "5%", y: "65%", w: 120, delay: 2 },
        { x: "80%", y: "70%", w: 160, delay: 1.5 },
      ].map((c, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full opacity-30 pointer-events-none"
          style={{
            left: c.x,
            top: c.y,
            width: c.w,
            height: c.w * 0.4,
            background: "rgba(255,255,255,0.8)",
            filter: "blur(20px)",
          }}
          animate={{ x: [0, 10, 0], y: [0, -8, 0] }}
          transition={{ duration: 7 + i, repeat: Infinity, delay: c.delay, ease: "easeInOut" }}
        />
      ))}

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-5xl mx-auto">
        {/* Badge */}
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-sky-200 shadow-glass"
        >
          <Sparkles className="w-4 h-4 text-sky-500" />
          <span className="text-sm font-medium text-sky-700 tracking-wide">
            Revolutionary Technology · Patent Pending
          </span>
        </motion.div>

        {/* Cigarette model */}
        <motion.div
          custom={0.1}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="mb-12 flex justify-center"
        >
          <div className="relative">
            <CigaretteModel size="xl" rotate={true} />
            {/* Lens flare */}
            <motion.div
              className="absolute -top-4 left-1/3 w-2 h-2 rounded-full bg-white"
              style={{ boxShadow: "0 0 20px 10px rgba(255,255,255,0.9), 0 0 60px 30px rgba(56,189,248,0.4)" }}
              animate={{ opacity: [0.5, 1, 0.5], scale: [0.8, 1.2, 0.8] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h1
          custom={0.3}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="text-5xl md:text-7xl font-black tracking-tight mb-6 leading-none"
        >
          <span className="text-slate-900">Infinicig</span>
          <br />
          <span className="text-gradient-sky">Never Runs Out.</span>
        </motion.h1>

        <motion.p
          custom={0.5}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="text-xl md:text-2xl text-slate-600 font-light max-w-3xl leading-relaxed mb-4"
        >
          The First Actively Regenerating Cigarette
        </motion.p>

        <motion.p
          custom={0.6}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="text-base md:text-lg text-slate-500 max-w-2xl leading-relaxed mb-12"
        >
          We are moving from a disposable consumption logic to a{" "}
          <span className="font-semibold text-sky-600">sustainable biological cycle.</span>
        </motion.p>

        {/* CTAs */}
        <motion.div
          custom={0.7}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="flex flex-col sm:flex-row gap-4 items-center"
        >
          <button
            onClick={scrollToNext}
            className="group px-8 py-4 bg-sky-500 text-white font-semibold rounded-full shadow-glow hover:bg-sky-600 hover:shadow-glow-lg transition-all duration-300 hover:scale-105 active:scale-95 text-base"
          >
            Discover the Technology
            <span className="ml-2 group-hover:translate-x-1 inline-block transition-transform">→</span>
          </button>
          <button
            onClick={() => document.querySelector("#purchase")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-4 glass rounded-full font-semibold text-sky-700 border border-sky-200 hover:border-sky-400 hover:bg-white/90 transition-all duration-300 hover:scale-105 active:scale-95 text-base"
          >
            Order Now · €1,000
          </button>
        </motion.div>

        {/* Stats row */}
        <motion.div
          custom={0.9}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="mt-16 flex gap-8 md:gap-16"
        >
          {[
            { value: "∞", label: "Regenerations" },
            { value: "0", label: "Disposable Waste" },
            { value: "AI", label: "Powered" },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col items-center">
              <span className="text-3xl md:text-4xl font-black text-gradient-sky">{stat.value}</span>
              <span className="text-xs md:text-sm text-slate-500 mt-1 font-medium tracking-wide uppercase">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-400 hover:text-sky-500 transition-colors"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="text-xs font-medium tracking-widest uppercase">Explore</span>
        <ChevronDown className="w-5 h-5" />
      </motion.button>
    </section>
  );
}
