import ItempireNavbar from './components/ItempireNavbar'
import ItempireHero from './components/ItempireHero'
import ItempireLogos from './components/ItempireLogos'
import ItempireServices from './components/ItempireServices'
import ItempireWork from './components/ItempireWork'
import ItempireCTA from './components/ItempireCTA'
import ItempireFooter from './components/ItempireFooter'

function App() {
  return (
    <div className="min-h-screen bg-black text-white" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
      <ItempireNavbar />
      <main>
        <ItempireHero />
        <ItempireLogos />
        <ItempireServices />
        <ItempireWork />
        <ItempireCTA />
      </main>
      <ItempireFooter />
    </div>
  )
}

export default App
