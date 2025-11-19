import { motion } from 'framer-motion'

const projects = [
  { title: 'Zephyr', tag: 'SaaS', desc: 'Design system and web app for AI operations.', color: 'from-sky-400/30 to-blue-500/10' },
  { title: 'Atlas', tag: 'Brand', desc: 'Identity and web for crypto infra startup.', color: 'from-emerald-400/30 to-teal-500/10' },
  { title: 'Mercury', tag: 'Web', desc: 'Next-gen marketing site with CMS.', color: 'from-purple-400/30 to-violet-500/10' },
]

export default function ItempireWork(){
  return (
    <section id="work" className="relative bg-black py-24 text-white">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-semibold sm:text-5xl" style={{fontFamily:'Space Grotesk, Inter, sans-serif'}}>Selected work</h2>
            <p className="mt-3 text-white/60">A few recent collaborations and launches.</p>
          </div>
          <a href="#contact" className="hidden rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm hover:bg-white/10 md:block">Work with us</a>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br ${p.color} p-6`}
            >
              <div className="text-xs uppercase tracking-widest text-white/60">{p.tag}</div>
              <div className="mt-2 text-2xl font-semibold">{p.title}</div>
              <p className="mt-2 text-white/70">{p.desc}</p>
              <div className="mt-6 text-sm text-white/70 group-hover:text-white">View case →</div>
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100" style={{background:'radial-gradient(600px_circle_at_var(--x)_var(--y), rgba(255,255,255,0.12), transparent 40%)'}} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
