export default function Problem() {
  return (
    <section className="relative overflow-hidden" style={{ background: 'linear-gradient(180deg, rgba(239,68,68,0.92), rgba(239,68,68,0.85))' }}>
      <div className="absolute inset-0" aria-hidden>
        <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full blur-3xl opacity-40" style={{background:'radial-gradient(closest-side, #ffffff, transparent)'}} />
        <div className="absolute -bottom-40 -right-40 w-[28rem] h-[28rem] rounded-full blur-3xl opacity-40" style={{background:'radial-gradient(closest-side, #0F172A, transparent)'}} />
      </div>
      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 py-16 text-white">
        <h2 className="text-2xl sm:text-3xl font-bold mb-10" style={{ fontFamily: 'Space Grotesk, Inter, system-ui, sans-serif' }}>
          Every Company Using AI Is One Viral Screenshot Away From Disaster
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white/10 border border-white/20 rounded-2xl p-6">
            <div className="text-3xl mb-3">⚖️</div>
            <div className="font-semibold mb-1">Air Canada: Sued</div>
            <p className="text-white/90">AI hallucinated refund policy. Lost lawsuit. $500K+ in damages.</p>
          </div>
          <div className="bg-white/10 border border-white/20 rounded-2xl p-6">
            <div className="text-3xl mb-3">📱</div>
            <div className="font-semibold mb-1">DPD: Viral Disaster</div>
            <p className="text-white/90">AI cursed at customers. 4 million views. Brand destroyed overnight.</p>
          </div>
          <div className="bg-white/10 border border-white/20 rounded-2xl p-6">
            <div className="text-3xl mb-3">🚗</div>
            <div className="font-semibold mb-1">Chevy: Legal Nightmare</div>
            <p className="text-white/90">AI agreed to sell cars for $1. Had to honor deals. Legal mess.</p>
          </div>
        </div>
        <div className="text-center mt-10 font-semibold">This is happening RIGHT NOW. Don't be next.</div>
      </div>
    </section>
  )
}
