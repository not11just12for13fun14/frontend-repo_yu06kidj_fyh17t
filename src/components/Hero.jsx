import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(251,146,60,0.25),transparent_35%),radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.25),transparent_35%),linear-gradient(to_bottom_right,#0f172a,#0b1220)]" />

      {/* Spline 3D Object */}
      <div className="relative z-10 h-[520px] md:h-[640px] lg:h-[720px]">
        <Spline scene="https://prod.spline.design/95Gu7tsx2K-0F3oi/scene.splinecode" style={{ width: '100%', height: '100%' }} />

        {/* Soft glow overlays */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-slate-900 to-transparent opacity-80" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-900/60" />
      </div>

      {/* Copy */}
      <div className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 -mt-24">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white drop-shadow-[0_2px_20px_rgba(251,146,60,0.25)]">
            Build playful ideas with blocks
          </h1>
          <p className="mt-5 text-lg sm:text-xl text-slate-200/85">
            A creative playground for education, gaming, and tinkering. Snap concepts together like orange blocks and watch them come to life.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#get-started" className="inline-flex items-center justify-center rounded-full bg-orange-500 hover:bg-orange-400 text-white px-6 py-3 font-semibold shadow-lg shadow-orange-500/30 transition-all">
              Start building
            </a>
            <a href="#showcase" className="inline-flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white px-6 py-3 font-semibold border border-white/10 backdrop-blur">
              See showcase
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
