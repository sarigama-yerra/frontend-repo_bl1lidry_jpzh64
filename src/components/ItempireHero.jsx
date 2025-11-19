import { motion } from 'framer-motion'

export default function ItempireHero() {
  return (
    <section id="top" className="relative min-h-[90vh] w-full overflow-hidden bg-black text-white">
      {/* background texture and glows */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -left-40 h-[28rem] w-[28rem] rounded-full blur-3xl" style={{background:'radial-gradient(closest-side, rgba(255,255,255,0.12), transparent)'}} />
        <div className="absolute -bottom-40 -right-40 h-[28rem] w-[28rem] rounded-full blur-3xl" style={{background:'radial-gradient(closest-side, rgba(255,255,255,0.08), transparent)'}} />
        <div className="absolute inset-0 opacity-[0.06]" style={{backgroundImage:'linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)', backgroundSize:'36px 36px'}} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24">
        <div className="mb-6 text-xs uppercase tracking-widest text-white/60">Design • Development • Brand</div>
        <div className="max-w-3xl">
          <h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-6xl md:text-7xl" style={{fontFamily:'Space Grotesk, Inter, sans-serif'}}>
            Build sharp, credible products and brands.
          </h1>
          <p className="mt-6 max-w-xl text-white/70">
            We craft high-velocity websites, SaaS experiences, and brands that compound trust.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#contact" className="rounded-lg border border-white/10 bg-white/10 px-5 py-3 text-sm font-medium hover:bg-white/20">Start a project</a>
            <a href="#work" className="text-sm text-white/70 hover:text-white">See our work →</a>
          </div>
        </div>

        {/* right visual card */}
        <div className="pointer-events-none mt-12 md:pointer-events-auto md:mt-0 md:absolute md:right-6 md:top-1/2 md:-translate-y-1/2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative aspect-[4/5] w-[480px] overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-6 hidden md:block"
          >
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(255,255,255,0.08),transparent_45%),radial-gradient(ellipse_at_bottom_right,rgba(255,255,255,0.1),transparent_45%)]" />
            <div className="relative z-10 flex h-full flex-col items-start justify-between">
              <div>
                <div className="text-xs uppercase tracking-widest text-white/60">Recent</div>
                <div className="mt-2 text-3xl font-semibold">Launch: Commerce 2.0</div>
              </div>
              <motion.div
                initial={{ x: '-10%' }}
                animate={{ x: '10%' }}
                transition={{ repeat: Infinity, repeatType: 'reverse', duration: 7, ease: 'easeInOut' }}
                className="w-full"
              >
                <div className="overflow-hidden">
                  <div className="text-6xl font-semibold leading-none tracking-tight text-white/80" style={{fontFamily:'Space Grotesk, Inter, sans-serif'}}>
                    BRANDS • PRODUCTS • SYSTEMS • IMPACT •
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </section>
  )
}
