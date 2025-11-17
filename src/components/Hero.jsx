import { motion } from 'framer-motion'

function Hero() {
  return (
    <section id="top" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-white">
      <img
        src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2070&auto=format&fit=crop"
        alt="Lieu de réunion"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-white" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-white drop-shadow"
        >
          Bienvenue à notre congrégation
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-4 text-white/90 text-lg max-w-2xl mx-auto"
        >
          Un lieu d'accueil, de fraternité et de service.
        </motion.p>
      </div>
    </section>
  )
}

export default Hero
