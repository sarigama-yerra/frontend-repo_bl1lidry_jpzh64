export default function ItempireCTA(){
  return (
    <section id="contact" className="relative bg-black py-20 text-white">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-8 text-center backdrop-blur">
          <h3 className="text-2xl font-semibold sm:text-4xl" style={{fontFamily:'Space Grotesk, Inter, sans-serif'}}>Have an idea worth shipping?</h3>
          <p className="mt-3 text-white/70">Tell us about your product and timeline. We respond in 24 hours.</p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href="mailto:hello@itempire.com" className="rounded-lg border border-white/10 bg-white/10 px-5 py-3 text-sm font-medium hover:bg-white/20">Email us</a>
            <a href="#" className="text-sm text-white/70 hover:text-white">See FAQs →</a>
          </div>
        </div>
      </div>
    </section>
  )
}
