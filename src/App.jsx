import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <Hero />
      <Features />
      <CTA />
      <footer className="py-10 text-center text-slate-400 border-t border-white/10">
        Built with a playful block theme • Education • Gaming • Creative
      </footer>
    </div>
  )
}

export default App
