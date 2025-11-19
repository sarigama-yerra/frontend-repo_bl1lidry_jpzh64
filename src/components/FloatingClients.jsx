import { motion } from 'framer-motion'

const items = [
  { title: 'Institutions', x: -120, y: -40 },
  { title: 'Millions of People', x: 40, y: -80 },
  { title: 'Governments', x: 120, y: 40 },
]

export default function FloatingClients() {
  return (
    <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden bg-black py-24 text-white">
      <div className="absolute inset-0 -z-10 opacity-40" style={{background:'radial-gradient(closest-side, rgba(59,130,246,0.15), transparent), radial-gradient(closest-side, rgba(239,68,68,0.15), transparent)'}} />
      <div className="relative mx-auto max-w-5xl px-6 text-center">
        <h2 className="mb-12 text-3xl font-semibold sm:text-5xl" style={{fontFamily:'Space Grotesk, Inter, sans-serif'}}>
          The clients we design for
        </h2>
        <div className="relative h-80">
          {items.map((it, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
              style={{ transform: `translate(calc(-50% + ${it.x}px), calc(-50% + ${it.y}px))` }}
            >
              <div className="rounded-2xl border border-white/10 bg-white/5 px-6 py-4 shadow-2xl backdrop-blur">
                <div className="text-white/80">{it.title}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
