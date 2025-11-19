import { useRef, useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'

const segments = [
  'Creators', 'Traders', 'Enterprises', 'DeFi Protocols', 'Gaming Studios', 'Market Makers', 'Validators', 'Banks', 'Exchanges', 'Foundations'
]

export default function SegmentsMarquee() {
  const controls = useAnimation()
  const containerRef = useRef(null)

  useEffect(() => {
    controls.start({ x: ['0%', '-50%'] , transition: { duration: 20, ease: 'linear', repeat: Infinity } })
  }, [controls])

  return (
    <section className="relative w-full overflow-hidden bg-black py-16 text-white">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.03] to-transparent" />
      <div className="relative">
        <div className="mb-8 text-center text-xs uppercase tracking-widest text-white/60">What we build for</div>
        <div ref={containerRef} className="relative flex">
          <motion.div animate={controls} className="flex min-w-full shrink-0 items-center gap-6 pr-6">
            {segments.concat(segments).map((s, i) => (
              <div key={i} className="whitespace-nowrap rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm text-white/80 backdrop-blur">
                {s}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
