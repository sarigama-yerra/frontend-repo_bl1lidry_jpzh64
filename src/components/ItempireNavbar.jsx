import { useState, useEffect } from 'react'

export default function ItempireNavbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`sticky top-0 z-40 transition-colors ${scrolled ? 'bg-black/70 backdrop-blur border-b border-white/10' : 'bg-transparent'}`}>
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 sm:px-8">
        <a href="#top" className="group inline-flex items-center gap-3">
          <div className="h-7 w-7 rounded-md bg-gradient-to-br from-white/80 to-white/20 group-hover:from-white group-hover:to-white/40 transition-colors" />
          <span className="text-lg font-semibold tracking-tight">Itempire</span>
        </a>
        <nav className="hidden items-center gap-6 text-sm text-white/70 md:flex">
          <a href="#services" className="hover:text-white">Services</a>
          <a href="#work" className="hover:text-white">Work</a>
          <a href="#about" className="hover:text-white">About</a>
          <a href="#contact" className="rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-white hover:bg-white/10">Get in touch</a>
        </nav>
      </div>
    </header>
  )
}
