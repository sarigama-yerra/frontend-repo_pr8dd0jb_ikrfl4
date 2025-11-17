import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

function Gallery() {
  const [images, setImages] = useState([])

  useEffect(() => {
    const load = async () => {
      try {
        const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const res = await fetch(`${baseUrl}/api/gallery`)
        const data = await res.json()
        setImages(Array.isArray(data) ? data.slice(0, 4) : [])
      } catch (e) {
        setImages([])
      }
    }
    load()
  }, [])

  const fallback = [
    'https://images.unsplash.com/photo-1520975922203-b6b77b6772e5?q=80&w=1974&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=1974&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1974&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1935&auto=format&fit=crop'
  ]

  const display = images.length ? images.map(i => i.url) : fallback

  return (
    <section id="gallery" className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-gray-900 mb-8 text-center"
        >
          Galerie
        </motion.h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {display.slice(0,4).map((url, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="relative overflow-hidden rounded-2xl shadow group"
            >
              <img src={url} alt="Galerie" className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery
