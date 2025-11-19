export default function ItempireFooter(){
  return (
    <footer className="border-t border-white/10 bg-black/80 text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-10 text-sm text-white/60 sm:flex-row sm:px-8">
        <div className="flex items-center gap-3">
          <div className="h-6 w-6 rounded-md bg-gradient-to-br from-white/90 to-white/20" />
          <span className="font-semibold text-white">Itempire</span>
        </div>
        <div>© {new Date().getFullYear()} Itempire. All rights reserved.</div>
      </div>
    </footer>
  )
}
