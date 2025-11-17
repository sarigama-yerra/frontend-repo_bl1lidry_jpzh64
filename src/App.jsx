import Hero from './components/Hero'
import SocialProof from './components/SocialProof'
import Problem from './components/Problem'
import HowItWorks from './components/HowItWorks'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
      {/* Navbar */}
      <header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-md" style={{ backgroundColor: '#EF4444' }} />
            <div className="text-slate-900 font-semibold">HallucinationGuard</div>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm text-slate-600">
            <a href="#how" className="hover:text-slate-900">How it works</a>
            <a href="#cta" className="hover:text-slate-900">Pricing</a>
            <a href="#" className="hover:text-slate-900">Docs</a>
            <a href="#cta" className="px-4 py-2 rounded-lg text-white" style={{ backgroundColor: '#EF4444' }}>Get a demo</a>
          </div>
        </div>
      </header>

      <Hero />
      <SocialProof />
      <Problem />
      <HowItWorks />
      <CTA />

      {/* Footer */}
      <footer className="bg-white border-t">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 py-10 text-sm text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 rounded-md" style={{ backgroundColor: '#EF4444' }} />
            <span className="font-semibold text-slate-900">HallucinationGuard</span>
          </div>
          <div className="text-slate-500">© {new Date().getFullYear()} HallucinationGuard Inc. All rights reserved.</div>
        </div>
      </footer>
    </div>
  )
}

export default App
