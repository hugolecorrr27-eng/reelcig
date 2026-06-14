'use client'

const glowColors: Record<string, string> = {
  sky: 'rgba(14, 165, 233, 0.08)',
  blue: 'rgba(59, 130, 246, 0.08)',
  emerald: 'rgba(34, 197, 94, 0.08)',
  amber: 'rgba(245, 158, 11, 0.08)',
  red: 'rgba(239, 68, 68, 0.08)',
}

export default function GlowEffect({ color = 'sky' }: { color?: string }) {
  return (
    <div
      className="absolute inset-0 rounded-3xl pointer-events-none"
      style={{
        background: `radial-gradient(ellipse at 50% 0%, ${glowColors[color] ?? glowColors.sky}, transparent 70%)`,
      }}
    />
  )
}
