import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const StatCard = ({ label, value, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
    className="bg-white rounded-2xl shadow-md p-6 border border-gray-100"
  >
    <p className="text-sm text-gray-500">{label}</p>
    <p className="text-3xl font-semibold text-gray-900 mt-2">{value}</p>
  </motion.div>
)

function Stats() {
  const [stats, setStats] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const load = async () => {
      try {
        const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const res = await fetch(`${baseUrl}/api/stats`)
        const data = await res.json()
        setStats(data?.[0] || null)
      } catch (e) {
        setStats(null)
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  return (
    <section id="stats" className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-gray-900 mb-8 text-center"
        >
          Statistiques de la congrégation
        </motion.h2>

        {loading ? (
          <p className="text-center text-gray-500">Chargement...</p>
        ) : stats ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCard label="Nombre de proclamateurs" value={stats.publishers} />
            <StatCard label="Nombre de pionniers" value={stats.pioneers} delay={0.05} />
            <StatCard label="Le plus jeune proclamateur" value={`${stats.youngest_publisher}${stats.youngest_age ? ` (${stats.youngest_age} ans)` : ''}`} delay={0.1} />
            <StatCard label="Le plus âgé" value={`${stats.oldest_publisher}${stats.oldest_age ? ` (${stats.oldest_age} ans)` : ''}`} delay={0.15} />
          </div>
        ) : (
          <div className="bg-white rounded-xl p-6 shadow-sm text-center text-gray-600">
            Aucune donnée pour le moment. Ajoutez des statistiques depuis la base de données.
          </div>
        )}
      </div>
    </section>
  )
}

export default Stats
