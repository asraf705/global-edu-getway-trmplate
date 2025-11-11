'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Building2, ArrowRight } from 'lucide-react'

const universities = [
  { name: 'Moscow State University', city: 'Moscow' },
  { name: 'St. Petersburg University', city: 'St. Petersburg' },
  { name: 'Novosibirsk State University', city: 'Novosibirsk' },
  { name: 'Kazan Federal University', city: 'Kazan' },
  { name: 'Tomsk State University', city: 'Tomsk' },
  { name: 'Ural Federal University', city: 'Yekaterinburg' },
]

export default function PartnerUniversities() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Partner Universities
          </h2>
          <p className="text-xl text-gray-600">
            Top-ranked universities across Russia
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {universities.map((university, index) => (
            <motion.div
              key={university.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 p-6 rounded-xl border-2 border-transparent hover:border-primary-500 transition-all cursor-pointer group"
            >
              <Building2 className="w-10 h-10 text-primary-600 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {university.name}
              </h3>
              <p className="text-gray-600">{university.city}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/universities"
            className="inline-flex items-center bg-primary-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-600 transition-all shadow-md hover:shadow-lg group"
          >
            View All Universities
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  )
}

