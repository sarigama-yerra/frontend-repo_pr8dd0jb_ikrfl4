import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Gallery from './components/Gallery'
import Contact from './components/Contact'

function App() {
  return (
    <div className="bg-white text-gray-900">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <Stats />
        <Gallery />
        <Contact />
        <footer className="text-center text-sm text-gray-500 py-8">© {new Date().getFullYear()} Congrégation</footer>
      </main>
    </div>
  )
}

export default App
