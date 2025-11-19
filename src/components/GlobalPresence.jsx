import { motion } from 'framer-motion'

const locations = [
  { city: 'Dubai', x: 72, y: 46 },
  { city: 'Krakow', x: 55, y: 38 },
  { city: 'Hong Kong', x: 80, y: 44 },
]

export default function GlobalPresence() {
  return (
    <section className="relative overflow-hidden bg-black py-24 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-semibold sm:text-5xl" style={{fontFamily:'Space Grotesk, Inter, sans-serif'}}>
            Global footprint
          </h2>
          <p className="mt-3 text-white/60">Operating where capital, computation, and velocity converge.</p>
        </div>

        <div className="relative mx-auto aspect-[2/1] w-full max-w-5xl overflow-hidden rounded-2xl border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),transparent)]">
          {/* Simplified map grid */}
          <div className="absolute inset-0 opacity-20" style={{backgroundImage:'linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)', backgroundSize:'40px 40px'}} />

          {locations.map((loc, i) => (
            <motion.div
              key={loc.city}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, type: 'spring', stiffness: 160 }}
              className="absolute"
              style={{ left: `${loc.x}%`, top: `${loc.y}%` }}
            >
              <div className="group relative flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-red-500 shadow-[0_0_20px_rgba(239,68,68,0.8)]" />
                <span className="rounded bg-black/60 px-2 py-1 text-xs text-white/80 opacity-0 backdrop-blur transition-opacity group-hover:opacity-100">{loc.city}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
