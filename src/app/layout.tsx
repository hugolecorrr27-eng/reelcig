import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Infinicig – The First Actively Regenerating Cigarette',
  description: 'Infinicig introduces a groundbreaking sustainable cigarette technology. AI-powered regeneration, nano-vascular networks, and solar capture.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body style={{ fontFamily: 'Inter, sans-serif' }} className="antialiased">{children}</body>
    </html>
  )
}
