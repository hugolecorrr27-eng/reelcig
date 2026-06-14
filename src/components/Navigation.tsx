'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const navLinks = [
  { label: 'Concept', href: '#concept' },
  { label: 'Technology', href: '#technology' },
  { label: 'Regeneration', href: '#regeneration' },
  { label: 'Benefits', href: '#benefits' },
  { label: 'Order', href: '#order' },
]

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) target.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'py-3 glass shadow-lg shadow-sky-100/50' : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-sky-400 to-blue-600 flex items-center justify-center shadow-lg">
            <div className="w-3 h-3 rounded-full bg-white opacity-80" />
          </div>
          <span className="text-xl font-black tracking-tight text-sky-600">INFINICIG</span>
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-sm font-medium text-slate-600 hover:text-sky-500 transition-colors duration-200 relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-sky-500 transition-all duration-300 group-hover:w-full rounded-full" />
            </a>
          ))}
        </nav>
        <a
          href="#order"
          onClick={(e) => handleNavClick(e, '#order')}
          className="hidden md:flex items-center gap-2 px-5 py-2 bg-sky-500 hover:bg-sky-600 text-white text-sm font-semibold rounded-full transition-all duration-200 shadow-lg shadow-sky-200 hover:scale-105"
        >
          Pre-Order
        </a>
      </div>
    </motion.header>
  )
}
