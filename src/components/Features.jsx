import { Sparkles, Puzzle, Rocket } from 'lucide-react'

const features = [
  {
    icon: Sparkles,
    title: 'Creative & playful',
    desc: 'A colorful space to experiment, learn, and prototype with delight.',
  },
  {
    icon: Puzzle,
    title: 'Block-based thinking',
    desc: 'Compose ideas like building blocks. Mix, match, and iterate fast.',
  },
  {
    icon: Rocket,
    title: 'Launch-ready',
    desc: 'Turn your concept into something shareable in minutes, not weeks.',
  },
]

export default function Features() {
  return (
    <section id="features" className="relative py-20 bg-slate-900">
      <div className="absolute inset-0 bg-[radial-gradient(600px_200px_at_50%_-50px,rgba(251,146,60,0.15),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((f) => (
            <div key={f.title} className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6 hover:bg-white/10 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-400 to-pink-500 text-white flex items-center justify-center shadow-lg shadow-orange-500/30">
                <f.icon size={22} />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-white">{f.title}</h3>
              <p className="mt-2 text-slate-300/85">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
