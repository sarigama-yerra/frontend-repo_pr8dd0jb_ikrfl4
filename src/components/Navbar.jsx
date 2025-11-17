import { useState, useEffect } from 'react'

function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const linkClass = 'text-gray-700 hover:text-blue-600 transition-colors px-3 py-2 rounded-md text-sm font-medium'

  return (
    <header className={`fixed top-0 inset-x-0 z-30 transition-all ${scrolled ? 'backdrop-blur bg-white/70 shadow-sm' : 'bg-transparent'}`}>
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#top" className="text-xl font-semibold text-gray-900">Congrégation</a>
        <div className="hidden sm:flex items-center space-x-1">
          <a href="#stats" className={linkClass}>Statistiques</a>
          <a href="#gallery" className={linkClass}>Galerie</a>
          <a href="#contact" className={linkClass}>Contact</a>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
