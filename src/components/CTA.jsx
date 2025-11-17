export default function CTA() {
  return (
    <section id="get-started" className="relative py-20 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur">
          <div className="px-8 py-10 sm:px-12 sm:py-14 lg:px-16 lg:py-16 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                Bring your idea to life today
              </h2>
              <p className="mt-3 text-slate-300/85 max-w-2xl">
                Describe what you want to build and we’ll snap the blocks into place for you. No technical setup required.
              </p>
            </div>
            <a href="/test" className="inline-flex items-center justify-center rounded-full bg-white text-slate-900 px-6 py-3 font-semibold hover:bg-slate-100 transition-colors">
              Check backend & DB
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
