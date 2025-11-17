export default function SocialProof() {
  const logos = ['NovaCloud','Syncly','DataForge','Promptly','HyperBeam','VectorAI']
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-10">
        <div className="text-center text-slate-500 text-sm mb-6">Trusted by fast-growing companies</div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
          {logos.map((name) => (
            <div key={name} className="flex items-center justify-center">
              <div className="w-28 h-10 rounded bg-slate-100 border border-slate-200 text-slate-500 flex items-center justify-center text-xs font-semibold">
                {name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
