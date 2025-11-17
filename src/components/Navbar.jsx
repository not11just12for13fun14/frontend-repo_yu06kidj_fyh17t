import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Features', href: '#features' },
    { label: 'Showcase', href: '#showcase' },
    { label: 'Pricing', href: '#pricing' },
  ]

  return (
    <header className="relative z-20">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-5 flex items-center justify-between">
        <a href="#" className="inline-flex items-center gap-2">
          <span className="inline-block w-8 h-8 rounded-lg bg-gradient-to-br from-orange-400 to-pink-500 shadow-lg shadow-orange-500/30" />
          <span className="text-white font-semibold text-lg tracking-tight">Blocks</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="text-slate-200/80 hover:text-white transition-colors">
              {item.label}
            </a>
          ))}
          <a href="#get-started" className="inline-flex items-center rounded-full bg-white/10 hover:bg-white/20 text-white px-4 py-2 transition-colors border border-white/10">
            Get started
          </a>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden text-white">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden mx-4 rounded-xl border border-white/10 bg-slate-900/80 backdrop-blur p-4 space-y-3">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="block text-slate-200/90 hover:text-white">
              {item.label}
            </a>
          ))}
          <a href="#get-started" className="block text-center rounded-lg bg-white/10 hover:bg-white/20 text-white px-4 py-2 transition-colors border border-white/10">
            Get started
          </a>
        </div>
      )}
    </header>
  )
}
