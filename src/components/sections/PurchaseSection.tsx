"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ShoppingCart, Zap, Leaf, Shield, Star, Check } from "lucide-react";
import CigaretteModel from "@/components/ui/CigaretteModel";
import ParticleField from "@/components/ui/ParticleField";

const badges = [
  { icon: <Leaf className="w-4 h-4" />, label: "Eco-Certified" },
  { icon: <Zap className="w-4 h-4" />, label: "AI-Powered" },
  { icon: <Shield className="w-4 h-4" />, label: "Lifetime Warranty" },
];

const included = [
  "Infinicig unit — perpetually regenerating",
  "Solar charging dock (oak + aluminium)",
  "Lifetime AI diagnostic subscription",
  "Global maintenance concierge access",
  "Certificate of authenticity",
];

const reviews = [
  { name: "Alex M.", rating: 5, text: "Changed the way I think about smoking entirely." },
  { name: "Sophie L.", rating: 5, text: "The technology is breathtaking. Worth every cent." },
  { name: "Jordan R.", rating: 5, text: "Never buying disposables again. This is the future." },
];

export default function PurchaseSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true });
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 2500);
  };

  return (
    <section
      id="purchase"
      ref={sectionRef}
      className="relative min-h-screen py-24 overflow-hidden flex items-center"
      style={{
        background: "radial-gradient(ellipse 80% 60% at 50% 20%, #bae6fd 0%, #e0f2fe 35%, #ecfdf5 65%, #fefce8 100%)",
      }}
    >
      <ParticleField count={30} />

      {/* Sun */}
      <div
        className="absolute top-10 right-16 w-28 h-28 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, #fcd34d 30%, #f59e0b 60%, rgba(245,158,11,0) 100%)",
          filter: "blur(4px)",
          boxShadow: "0 0 80px 40px rgba(245,158,11,0.2)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-50/80 border border-sky-200 text-sky-600 text-sm font-medium mb-6">
            Limited First Edition
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-4">
            Own the{" "}
            <span className="text-gradient-sky">Future</span>
          </h2>
          <p className="text-xl text-slate-500 max-w-xl mx-auto">
            The world&apos;s first perpetually regenerating cigarette. One purchase. A lifetime of use.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Product display */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="flex flex-col items-center"
          >
            <div
              className="w-full max-w-md rounded-3xl p-12 flex flex-col items-center gap-8"
              style={{
                background: "rgba(255,255,255,0.7)",
                backdropFilter: "blur(30px)",
                border: "1px solid rgba(255,255,255,0.6)",
                boxShadow: "0 30px 80px rgba(14,165,233,0.15)",
              }}
            >
              <CigaretteModel size="xl" rotate={true} />

              {/* Price */}
              <div className="text-center">
                <div className="text-6xl font-black text-slate-900">
                  €<span className="text-gradient-sky">1,000</span>
                </div>
                <div className="text-slate-400 text-sm mt-1">One-time investment · Free worldwide shipping</div>
              </div>

              {/* Stars */}
              <div className="flex items-center gap-1">
                {[1,2,3,4,5].map(i => (
                  <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
                ))}
                <span className="ml-2 text-sm text-slate-500">4.9 · 847 reviews</span>
              </div>

              {/* Badges */}
              <div className="flex flex-wrap gap-2 justify-center">
                {badges.map((b) => (
                  <div
                    key={b.label}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium text-sky-700 bg-sky-50 border border-sky-100"
                  >
                    {b.icon}
                    {b.label}
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="w-full space-y-3">
                <motion.button
                  onClick={handleAddToCart}
                  whileTap={{ scale: 0.97 }}
                  className="w-full flex items-center justify-center gap-3 py-4 rounded-2xl text-white font-bold text-lg transition-all duration-300"
                  style={{
                    background: added
                      ? "linear-gradient(135deg, #22c55e, #16a34a)"
                      : "linear-gradient(135deg, #0ea5e9, #0284c7)",
                    boxShadow: added
                      ? "0 8px 30px rgba(34,197,94,0.4)"
                      : "0 8px 30px rgba(14,165,233,0.4)",
                  }}
                >
                  {added ? (
                    <>
                      <Check className="w-5 h-5" />
                      Added to Cart!
                    </>
                  ) : (
                    <>
                      <ShoppingCart className="w-5 h-5" />
                      Add to Cart
                    </>
                  )}
                </motion.button>

                <motion.button
                  whileTap={{ scale: 0.97 }}
                  className="w-full py-4 rounded-2xl font-bold text-lg transition-all duration-300"
                  style={{
                    background: "linear-gradient(135deg, #f59e0b, #d97706)",
                    color: "white",
                    boxShadow: "0 8px 30px rgba(245,158,11,0.4)",
                  }}
                  whileHover={{ scale: 1.02 }}
                >
                  Order Now →
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Details */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.35 }}
            className="space-y-8"
          >
            {/* What&apos;s included */}
            <div
              className="rounded-2xl p-6"
              style={{
                background: "rgba(255,255,255,0.8)",
                backdropFilter: "blur(20px)",
                border: "1px solid rgba(255,255,255,0.5)",
                boxShadow: "0 8px 30px rgba(0,0,0,0.06)",
              }}
            >
              <h3 className="font-bold text-slate-900 text-lg mb-4">What&apos;s Included</h3>
              <ul className="space-y-3">
                {included.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-slate-700">
                    <div className="w-5 h-5 rounded-full bg-sky-100 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-sky-600" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Reviews */}
            <div>
              <h3 className="font-bold text-slate-900 text-lg mb-4">Early Adopter Reviews</h3>
              <div className="space-y-3">
                {reviews.map((r, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    className="p-4 rounded-xl"
                    style={{
                      background: "rgba(255,255,255,0.7)",
                      border: "1px solid rgba(255,255,255,0.5)",
                    }}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <div className="flex gap-0.5">
                        {[...Array(r.rating)].map((_, j) => (
                          <Star key={j} className="w-3 h-3 text-amber-400 fill-amber-400" />
                        ))}
                      </div>
                      <span className="text-sm font-medium text-slate-700">{r.name}</span>
                    </div>
                    <p className="text-slate-600 text-sm">{r.text}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
