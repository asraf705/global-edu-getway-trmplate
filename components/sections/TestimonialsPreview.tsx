'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Ahmed Rahman',
    course: 'Medicine',
    university: 'Moscow State University',
    quote: 'GlobalEdu Gateway made my dream of studying medicine in Russia come true. The entire process was smooth and professional.',
    rating: 5,
  },
  {
    name: 'Fatima Khan',
    course: 'Engineering',
    university: 'St. Petersburg University',
    quote: 'Excellent guidance throughout the application process. I\'m now studying at one of the top engineering universities in Russia!',
    rating: 5,
  },
  {
    name: 'Rashid Ali',
    course: 'Computer Science',
    university: 'Novosibirsk State University',
    quote: 'The team was very supportive and helped me with every step. Highly recommended for anyone wanting to study in Russia.',
    rating: 5,
  },
]

export default function TestimonialsPreview() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Students Say
          </h2>
          <p className="text-xl text-gray-600">
            Real stories from students who achieved their dreams with us
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow"
            >
              <Quote className="w-8 h-8 text-primary-500 mb-4" />
              <p className="text-gray-700 mb-4 italic">"{testimonial.quote}"</p>
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">
                    {testimonial.course} - {testimonial.university}
                  </div>
                </div>
                <div className="flex text-yellow-400">
                  {'★'.repeat(testimonial.rating)}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/testimonials"
            className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 group"
          >
            View All Testimonials
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  )
}

