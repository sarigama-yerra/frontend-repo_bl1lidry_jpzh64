export default function ItempireLogos(){
  const logos = ['LayerZero','Alchemy','Thirdweb','Vercel','Stripe','Linear']
  return (
    <section className="bg-black py-10 text-white">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="text-center text-sm text-white/50 mb-6">Trusted by teams shipping fast</div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
          {logos.map(name => (
            <div key={name} className="flex items-center justify-center">
              <div className="w-28 h-10 rounded border border-white/10 bg-white/5 text-white/60 flex items-center justify-center text-xs font-semibold">
                {name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
