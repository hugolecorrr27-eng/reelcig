import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        sky: {
          50: "#f0f9ff",
          100: "#e0f2fe",
          200: "#bae6fd",
          300: "#7dd3fc",
          400: "#38bdf8",
          500: "#0ea5e9",
          600: "#0284c7",
          700: "#0369a1",
          800: "#075985",
          900: "#0c4a6e",
        },
        brand: {
          sky: "#0ea5e9",
          skyLight: "#38bdf8",
          green: "#22c55e",
          greenLight: "#4ade80",
          gold: "#f59e0b",
          goldLight: "#fcd34d",
          white: "#ffffff",
          offWhite: "#f8fafc",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-slow": "float 8s ease-in-out infinite",
        "float-fast": "float 4s ease-in-out infinite",
        "spin-slow": "spin 20s linear infinite",
        "pulse-glow": "pulseGlow 3s ease-in-out infinite",
        "slide-up": "slideUp 0.6s ease-out forwards",
        shimmer: "shimmer 2s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.6", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.05)" },
        },
        slideUp: {
          from: { opacity: "0", transform: "translateY(30px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      backgroundImage: {
        "sky-gradient": "linear-gradient(135deg, #e0f2fe 0%, #f0f9ff 50%, #ecfdf5 100%)",
        "hero-gradient": "radial-gradient(ellipse at 50% 30%, #bae6fd 0%, #e0f2fe 40%, #f0fdf4 70%, #fefce8 100%)",
        "glow-sky": "radial-gradient(circle, rgba(14,165,233,0.3) 0%, transparent 70%)",
        "glow-green": "radial-gradient(circle, rgba(34,197,94,0.3) 0%, transparent 70%)",
        "glow-gold": "radial-gradient(circle, rgba(245,158,11,0.3) 0%, transparent 70%)",
      },
      boxShadow: {
        glow: "0 0 30px rgba(14,165,233,0.4)",
        "glow-lg": "0 0 60px rgba(14,165,233,0.3)",
        "glow-green": "0 0 30px rgba(34,197,94,0.4)",
        "glow-gold": "0 0 30px rgba(245,158,11,0.4)",
        glass: "0 8px 32px rgba(14,165,233,0.15)",
        premium: "0 25px 60px rgba(0,0,0,0.12), 0 8px 20px rgba(14,165,233,0.08)",
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};

export default config;
