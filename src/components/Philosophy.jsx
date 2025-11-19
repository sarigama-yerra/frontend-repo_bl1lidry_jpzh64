import { motion } from 'framer-motion'

export default function Philosophy() {
  const lines = [
    'What if reality is nothing more than a structure?',
    'What we build becomes the substrate for coordination.',
    'Trust is a primitive. Speed is an advantage. Clarity is power.'
  ]

  return (
    <section className="relative overflow-hidden bg-black py-24 text-white">
      <div className="absolute inset-0 -z-10 opacity-30" style={{background:'radial-gradient(closest-side, rgba(255,255,255,0.08), transparent)'}}/>
      <div className="mx-auto max-w-4xl px-6 text-center">
        {lines.map((l, i) => (
          <motion.p
            key={i}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.7, delay: i * 0.15, ease: 'easeOut' }}
            className="mb-6 text-lg text-white/80 sm:text-2xl"
            style={{fontFamily:'Inter, system-ui'}}
          >
            {l}
          </motion.p>
        ))}
      </div>
    </section>
  )
}
