'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, GraduationCap, DollarSign, Globe, BookOpen } from 'lucide-react'

const highlights = [
  { icon: GraduationCap, text: 'World-Class Education' },
  { icon: DollarSign, text: 'Affordable Tuition Fees' },
  { icon: Globe, text: 'Global Recognition' },
  { icon: BookOpen, text: 'Wide Range of Programs' },
]

export default function StudyInRussiaHighlight() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why Study in Russia? 🇷🇺
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Russia offers exceptional educational opportunities with internationally recognized degrees, 
              affordable tuition fees, and a rich cultural experience. Many Russian universities rank among 
              the world's best, providing quality education in medicine, engineering, technology, and more.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {highlights.map((highlight, index) => {
                const Icon = highlight.icon
                return (
                  <motion.div
                    key={highlight.text}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center space-x-3 p-4 bg-primary-50 rounded-lg"
                  >
                    <Icon className="w-6 h-6 text-primary-600 flex-shrink-0" />
                    <span className="text-gray-900 font-medium">{highlight.text}</span>
                  </motion.div>
                )
              })}
            </div>

            <Link
              href="/russia"
              className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 group"
            >
              Learn More About Studying in Russia
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl p-8 text-white shadow-2xl">
              <div className="space-y-6">
                <div>
                  <div className="text-4xl font-bold mb-2">Top Universities</div>
                  <p className="text-primary-100">QS World University Rankings</p>
                </div>
                <div className="space-y-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                    <div className="font-semibold text-lg">Moscow State University</div>
                    <div className="text-primary-100">Ranked #74 globally</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                    <div className="font-semibold text-lg">St. Petersburg University</div>
                    <div className="text-primary-100">Ranked #242 globally</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                    <div className="font-semibold text-lg">Novosibirsk State University</div>
                    <div className="text-primary-100">Ranked #246 globally</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

