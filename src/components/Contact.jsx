import { useState } from 'react'
import { motion } from 'framer-motion'

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState(null)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('success')
        setForm({ name: '', email: '', subject: '', message: '' })
      } else {
        const err = await res.json().catch(() => ({}))
        setStatus(err?.detail || 'error')
      }
    } catch (e) {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="bg-gray-50 py-16">
      <div className="max-w-3xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-gray-900 mb-8 text-center"
        >
          Contact
        </motion.h2>

        <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow p-6 grid grid-cols-1 gap-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <input name="name" value={form.name} onChange={handleChange} placeholder="Nom" className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500" required />
            <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Email" className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500" required />
          </div>
          <input name="subject" value={form.subject} onChange={handleChange} placeholder="Sujet" className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500" required />
          <textarea name="message" value={form.message} onChange={handleChange} placeholder="Votre message" rows="5" className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500" required />
          <button type="submit" className="inline-flex justify-center bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg transition-colors">
            {status === 'loading' ? 'Envoi...' : 'Envoyer'}
          </button>
          {status && status !== 'loading' && (
            <p className={`text-sm ${status === 'success' ? 'text-green-600' : 'text-red-600'}`}>
              {status === 'success' ? 'Message envoyé avec succès.' : 'Une erreur est survenue. Réessayez plus tard.'}
            </p>
          )}
        </form>
      </div>
    </section>
  )
}

export default Contact
