import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative overflow-hidden" style={{ backgroundColor: '#0F172A' }}>
      {/* glow */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-40 -left-40 h-80 w-80 rounded-full" style={{
          background: 'radial-gradient(closest-side, rgba(239,68,68,0.25), transparent)'
        }} />
        <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full" style={{
          background: 'radial-gradient(closest-side, rgba(56,189,248,0.18), transparent)'
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Copy */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-white/70 text-xs mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Real-time AI Safety Monitoring
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-white mb-5" style={{ fontFamily: 'Space Grotesk, Inter, system-ui, sans-serif' }}>
              Your AI Will Fuck Up. We Stop It Before Customers See It.
            </h1>
            <p className="text-base sm:text-lg text-white/70 mb-8 max-w-xl">
              Monitor every AI conversation in real-time. Block hallucinations, pricing errors, and policy violations before they cost you $500K in lawsuits.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                href="#cta"
                className="relative inline-flex items-center justify-center px-6 py-4 rounded-xl text-white font-semibold shadow-lg focus:outline-none focus:ring-2 focus:ring-red-500/50"
                style={{ backgroundColor: '#EF4444' }}
              >
                <span className="absolute inset-0 rounded-xl animate-ping opacity-30" style={{ backgroundColor: '#EF4444' }} />
                <span className="relative">Prevent Your First Disaster</span>
              </motion.a>

              <a
                href="#how"
                className="inline-flex items-center justify-center px-6 py-4 rounded-xl border text-white/90 hover:text-white transition border-white/20 hover:border-white/40"
              >
                See How It Works
              </a>
            </div>

            <div className="mt-8 flex items-center gap-4 text-xs text-white/50">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-400" />
                SOC2-ready
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-sky-400" />
                Sub-1s latency
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-red-400" />
                Enterprise-grade blocks
              </div>
            </div>
          </div>

          {/* Right: Animated dashboard + Spline */}
          <div className="relative h-[480px] lg:h-[560px]">
            {/* Spline 3D scene */}
            <div className="absolute inset-0 rounded-3xl overflow-hidden ring-1 ring-white/10 bg-slate-900/40">
              <Spline scene="https://prod.spline.design/DtQLjBkD1UpownGS/scene.splinecode" style={{ width: '100%', height: '100%' }} />
              {/* gradient overlay should not block interaction */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />
            </div>

            {/* Floating dashboard card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="absolute -bottom-6 -left-4 right-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-5 text-white shadow-2xl"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-xl">🚨</span>
                  <div>
                    <div className="text-sm font-semibold text-red-300">CRITICAL ALERT</div>
                    <div className="text-sm text-white/80">Price hallucination blocked</div>
                  </div>
                </div>
                <span className="text-xs px-2 py-1 rounded bg-red-500/20 text-red-300 border border-red-500/30">Live</span>
              </div>
              <div className="mt-4 grid grid-cols-3 gap-4">
                <div className="rounded-xl p-4 bg-white/5 border border-white/10">
                  <div className="text-emerald-300 text-2xl font-bold">✅ 23</div>
                  <div className="text-xs text-white/60 mt-1">incidents prevented today</div>
                </div>
                <div className="rounded-xl p-4 bg-white/5 border border-white/10">
                  <div className="text-white text-2xl font-bold">$2.1M</div>
                  <div className="text-xs text-white/60 mt-1">prevented losses this month</div>
                </div>
                <div className="rounded-xl p-4 bg-white/5 border border-white/10">
                  <div className="text-white text-2xl font-bold">0.8s</div>
                  <div className="text-xs text-white/60 mt-1">avg. decision latency</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
