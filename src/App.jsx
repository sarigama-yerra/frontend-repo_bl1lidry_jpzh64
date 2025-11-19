import TechHero from './components/TechHero'
import SegmentsMarquee from './components/SegmentsMarquee'
import FloatingClients from './components/FloatingClients'
import GlobalPresence from './components/GlobalPresence'
import Philosophy from './components/Philosophy'

function App() {
  return (
    <div className="min-h-screen bg-black text-white" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
      {/* Navbar */}
      <header className="sticky top-0 z-30 border-b border-white/10 bg-black/70 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 sm:px-8">
          <div className="flex items-center gap-3">
            <div className="h-7 w-7 rounded-md bg-gradient-to-br from-red-500 to-sky-500 shadow-[0_0_20px_rgba(239,68,68,0.6)]" />
            <div className="font-semibold">HallucinationGuard</div>
          </div>
          <nav className="hidden items-center gap-6 text-sm text-white/70 md:flex">
            <a href="#build" className="hover:text-white">What we build</a>
            <a href="#clients" className="hover:text-white">Clients</a>
            <a href="#global" className="hover:text-white">Global</a>
            <a href="#contact" className="rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-white hover:bg-white/10">Get a demo</a>
          </nav>
        </div>
      </header>

      {/* Sections */}
      <TechHero />
      <div id="build"><SegmentsMarquee /></div>
      <div id="clients"><FloatingClients /></div>
      <div id="global"><GlobalPresence /></div>
      <Philosophy />

      {/* Footer */}
      <footer id="contact" className="border-t border-white/10 bg-black/80">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-10 text-sm text-white/60 sm:flex-row sm:px-8">
          <div className="flex items-center gap-3">
            <div className="h-6 w-6 rounded-md bg-gradient-to-br from-red-500 to-sky-500" />
            <span className="font-semibold text-white">HallucinationGuard</span>
          </div>
          <div>© {new Date().getFullYear()} HallucinationGuard Inc. All rights reserved.</div>
        </div>
      </footer>
    </div>
  )
}

export default App
