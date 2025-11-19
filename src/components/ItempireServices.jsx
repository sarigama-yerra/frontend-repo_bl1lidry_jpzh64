import { motion } from 'framer-motion'

const services = [
  {
    title: 'Product Design',
    desc: 'From concept to high-fidelity UI systems that scale.',
  },
  {
    title: 'Web Engineering',
    desc: 'Blazing-fast frontends and robust APIs built right.',
  },
  {
    title: 'Brand Systems',
    desc: 'Naming, identity, and guidelines for lasting trust.',
  },
]

export default function ItempireServices(){
  return (
    <section id="services" className="relative bg-black py-20 text-white">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-semibold sm:text-5xl" style={{fontFamily:'Space Grotesk, Inter, sans-serif'}}>What we do</h2>
          <p className="mt-3 text-white/60">We blend design and engineering to ship outcomes, not decks.</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="rounded-2xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur hover:bg-white/[0.1] transition-colors"
            >
              <div className="text-xl font-semibold">{s.title}</div>
              <p className="mt-2 text-white/70">{s.desc}</p>
              <div className="mt-6 text-sm text-white/60">Explore →</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
