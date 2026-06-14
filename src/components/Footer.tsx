'use client'

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-100 py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-sky-400 to-blue-600 flex items-center justify-center shadow-lg">
            <div className="w-3 h-3 rounded-full bg-white opacity-80" />
          </div>
          <span className="text-xl font-black tracking-tight text-sky-600">INFINICIG</span>
        </div>
        <p className="text-sm text-slate-400 text-center">
          © 2024 Infinicig Technologies. Moving from disposable to sustainable.
        </p>
        <nav className="flex items-center gap-6">
          {['Privacy Policy', 'Terms of Service', 'Contact'].map((link) => (
            <a key={link} href="#" className="text-sm text-slate-400 hover:text-sky-500 transition-colors duration-200">
              {link}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  )
}
