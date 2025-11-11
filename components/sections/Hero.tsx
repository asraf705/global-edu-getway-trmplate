'use client'

import Link from 'next/link'
import LazyImage from '@/components/LazyImage'
import { motion } from 'framer-motion'
import { ArrowRight, Play } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-primary-50 via-white to-primary-50">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block mb-4"
            >
              <span className="bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium">
                🇷🇺 Study in Russia
              </span>
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Your Gateway to{' '}
              <span className="text-primary-600">Study in Russia</span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Helping Bangladeshi students achieve their dreams of international education. 
              Expert guidance, trusted partnerships, and successful placements.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/apply"
                className="group bg-primary-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-600 transition-all shadow-lg hover:shadow-xl flex items-center justify-center"
              >
                Apply Now
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/russia"
                className="group bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold border-2 border-primary-500 hover:bg-primary-50 transition-all flex items-center justify-center"
              >
                <Play className="mr-2 w-5 h-5" />
                Learn More
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="mt-12 flex flex-wrap gap-8 text-sm text-gray-600">
              <div>
                <span className="font-bold text-gray-900">200+</span> Students Placed
              </div>
              <div>
                <span className="font-bold text-gray-900">5+</span> Years Experience
              </div>
              <div>
                <span className="font-bold text-gray-900">50+</span> Partner Universities
              </div>
            </div>
          </motion.div>

          {/* Right Image/Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-lg mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-primary-600 rounded-3xl transform rotate-6"></div>
              <div className="relative bg-white rounded-3xl shadow-2xl p-8 border-4 border-primary-100 overflow-hidden">
                {/* Student Image */}
                <div className="relative h-48 mb-6 rounded-lg overflow-hidden">
                  <LazyImage
                    src="https://images.unsplash.com/photo-1523059623039-a9ed027e7fad?w=800&h=600&fit=crop"
                    alt="Students studying in Russia"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                      <span className="text-2xl">🎓</span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Quality Education</div>
                      <div className="text-sm text-gray-600">Top Russian Universities</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                      <span className="text-2xl">💰</span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Affordable Tuition</div>
                      <div className="text-sm text-gray-600">Scholarships Available</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                      <span className="text-2xl">🌍</span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Global Recognition</div>
                      <div className="text-sm text-gray-600">World-Class Degrees</div>
                    </div>
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

