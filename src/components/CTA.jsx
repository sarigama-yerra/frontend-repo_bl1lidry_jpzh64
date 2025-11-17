export default function CTA() {
  return (
    <section id="cta" className="relative" style={{ backgroundColor: '#0F172A' }}>
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -inset-x-20 top-0 h-px bg-gradient-to-r from-transparent via-red-500/50 to-transparent" />
      </div>
      <div className="max-w-4xl mx-auto px-6 sm:px-8 py-16 text-center text-white">
        <h3 className="text-2xl sm:text-3xl font-bold mb-4" style={{ fontFamily: 'Space Grotesk, Inter, system-ui, sans-serif' }}>
          Stop AI Disasters Before They Happen
        </h3>
        <p className="text-white/70 mb-8">Plug into your LLM stack in minutes. Start blocking high-risk responses today.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#" className="px-6 py-4 rounded-xl text-white font-semibold shadow-lg" style={{ backgroundColor: '#EF4444' }}>
            Get a Demo
          </a>
          <a href="#" className="px-6 py-4 rounded-xl border border-white/20 text-white/90 hover:text-white">Read the Docs</a>
        </div>
      </div>
    </section>
  )
}
