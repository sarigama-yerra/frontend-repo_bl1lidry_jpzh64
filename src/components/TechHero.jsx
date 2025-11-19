import { useEffect, useState } from 'react'
import { motion, useMotionValue, animate } from 'framer-motion'

function Counter({ from = 0, to = 100, duration = 2, suffix = '' }) {
  const count = useMotionValue(from)
  const [display, setDisplay] = useState(from)

  useEffect(() => {
    // Animate the motion value
    const controls = animate(count, to, { duration, ease: 'easeOut' })
    // Subscribe to changes and push into React state for safe text rendering
    const unsubscribe = count.on('change', (latest) => {
      const isFloatTarget = Math.abs(to % 1) > 0
      const value = isFloatTarget ? Number(latest).toFixed(1) : Math.floor(Number(latest))
      setDisplay(value)
    })
    return () => {
      controls.stop()
      unsubscribe()
    }
  }, [to, duration, count])

  return (
    <span className="tabular-nums">{display}{suffix}</span>
  )
}

export default function TechHero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-black text-white">
      {/* Background glows */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full blur-3xl" style={{background:'radial-gradient(closest-side, rgba(239,68,68,0.25), transparent)'}} />
        <div className="absolute -bottom-40 -right-40 h-[28rem] w-[28rem] rounded-full blur-3xl" style={{background:'radial-gradient(closest-side, rgba(59,130,246,0.25), transparent)'}} />
        <div className="absolute inset-0 opacity-[0.08]" style={{backgroundImage:'linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)', backgroundSize:'40px 40px'}} />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24">
        <div className="mb-10 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-widest text-white/70">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-red-500" /> Live at planetary scale
        </div>

        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-6xl md:text-7xl" style={{fontFamily:'Space Grotesk, Inter, sans-serif'}}>
              We build systems that reshape reality.
            </h1>
            <p className="mt-6 max-w-xl text-white/70">
              What if reality is nothing more than a structure? We engineer the primitives that power economies, secure information, and move value across the planet.
            </p>

            {/* Stats */}
            <div className="mt-10 grid w-full grid-cols-2 gap-6 sm:grid-cols-3">
              <div className="rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur">
                <div className="text-3xl font-semibold"><Counter to={200} duration={2.4} suffix="" />M+</div>
                <div className="mt-1 text-xs uppercase tracking-wider text-white/60">Users</div>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur">
                <div className="text-3xl font-semibold"><Counter to={500} duration={2.2} />+</div>
                <div className="mt-1 text-xs uppercase tracking-wider text-white/60">Engineers</div>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur sm:col-span-1 col-span-2">
                <div className="text-3xl font-semibold"><Counter to={1.2} duration={2.0} /> ms</div>
                <div className="mt-1 text-xs uppercase tracking-wider text-white/60">Median settlement latency</div>
              </div>
            </div>
          </div>

          {/* Kinetic typography block */}
          <div className="relative hidden md:block">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-6"
            >
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(255,255,255,0.08),transparent_45%),radial-gradient(ellipse_at_bottom_right,rgba(239,68,68,0.12),transparent_45%)]" />
              <div className="relative z-10 flex h-full flex-col items-start justify-between">
                <div>
                  <div className="text-xs uppercase tracking-widest text-white/60">Throughput</div>
                  <div className="mt-2 text-5xl font-semibold">1.3M TPS</div>
                </div>
                <motion.div
                  initial={{ x: '-10%' }}
                  animate={{ x: '10%' }}
                  transition={{ repeat: Infinity, repeatType: 'reverse', duration: 6, ease: 'easeInOut' }}
                  className="w-full"
                >
                  <div className="overflow-hidden">
                    <div className="kinetic-text text-7xl font-semibold leading-none tracking-tight text-white/80" style={{fontFamily:'Space Grotesk, Inter, sans-serif'}}>
                      INFRASTRUCTURE • TRUST • VALUE • SCALE •
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom subtle divider */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </section>
  )
}
