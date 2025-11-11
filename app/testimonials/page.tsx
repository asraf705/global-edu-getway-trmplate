'use client'

import LazyImage from '@/components/LazyImage'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Quote, Star, Play, GraduationCap, CheckCircle2, Award, Users, ArrowRight, Verified } from 'lucide-react'

// Metadata moved to layout.tsx

const testimonials = [
  {
    name: 'Ahmed Rahman',
    course: 'Medicine',
    university: 'Moscow State University',
    year: '2023',
    quote: 'GlobalEdu Gateway made my dream of studying medicine in Russia come true. The entire process was smooth and professional. The team guided me through every step, from document preparation to visa application. I\'m now in my second year and couldn\'t be happier!',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&crop=face',
    verified: true,
    location: 'Dhaka, Bangladesh',
  },
  {
    name: 'Fatima Khan',
    course: 'Engineering',
    university: 'St. Petersburg State University',
    year: '2022',
    quote: 'Excellent guidance throughout the application process. I\'m now studying at one of the top engineering universities in Russia! The support didn\'t stop after enrollment - they helped me adjust to life in Russia too.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face',
    verified: true,
    location: 'Chittagong, Bangladesh',
  },
  {
    name: 'Rashid Ali',
    course: 'Computer Science',
    university: 'Novosibirsk State University',
    year: '2023',
    quote: 'The team was very supportive and helped me with every step. Highly recommended for anyone wanting to study in Russia. The scholarship guidance was particularly helpful.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
    verified: true,
    location: 'Sylhet, Bangladesh',
  },
  {
    name: 'Sara Ahmed',
    course: 'Business Administration',
    university: 'Kazan Federal University',
    year: '2022',
    quote: 'I was nervous about studying abroad, but GlobalEdu Gateway made everything so easy. They answered all my questions and helped me feel confident about my decision. Now I\'m thriving in my business program!',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
    verified: true,
    location: 'Dhaka, Bangladesh',
  },
  {
    name: 'Hasan Mahmud',
    course: 'Aerospace Engineering',
    university: 'Moscow Aviation Institute',
    year: '2023',
    quote: 'Outstanding service! They helped me secure admission to my dream university. The visa process was handled professionally, and I received my visa without any issues. The counselors were always available to help.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face',
    verified: true,
    location: 'Rajshahi, Bangladesh',
  },
  {
    name: 'Ayesha Rahman',
    course: 'Pharmacy',
    university: 'Tomsk State University',
    year: '2022',
    quote: 'The counselors were knowledgeable and patient. They helped me choose the right university and program. I\'m grateful for their support throughout this journey. Studying pharmacy in Russia has been amazing!',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face',
    verified: true,
    location: 'Dhaka, Bangladesh',
  },
  {
    name: 'Mohammad Hassan',
    course: 'Mechanical Engineering',
    university: 'Ural Federal University',
    year: '2023',
    quote: 'From application to arrival, GlobalEdu Gateway was there every step of the way. Their expertise in Russian university admissions is unmatched. I highly recommend their services!',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=face',
    verified: true,
    location: 'Khulna, Bangladesh',
  },
  {
    name: 'Nadia Islam',
    course: 'International Relations',
    university: 'Moscow State University',
    year: '2022',
    quote: 'The entire team was professional and caring. They made sure I understood every step of the process. Thanks to them, I\'m now studying at one of the best universities in Russia!',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop&crop=face',
    verified: true,
    location: 'Dhaka, Bangladesh',
  },
  {
    name: 'Karim Uddin',
    course: 'Economics',
    university: 'St. Petersburg State University',
    year: '2023',
    quote: 'GlobalEdu Gateway exceeded my expectations. They helped me secure a scholarship and made the entire process stress-free. I couldn\'t have done it without their support!',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=face&sig=2',
    verified: true,
    location: 'Comilla, Bangladesh',
  },
]

export default function TestimonialsPage() {
  const stats = [
    { number: '200+', label: 'Happy Students', icon: Users },
    { number: '98%', label: 'Satisfaction Rate', icon: Award },
    { number: '5.0', label: 'Average Rating', icon: Star },
    { number: '100%', label: 'Verified Reviews', icon: CheckCircle2 },
  ]

  return (
    <div className="pt-32 pb-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-primary-50 pt-12 pb-16 mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block mb-6"
            >
              <span className="bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium">
                Student Testimonials
              </span>
            </motion.div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Success Stories from Our Students
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
              Real stories from students who achieved their dreams of studying in Russia with our help. 
              See how we've helped hundreds of students start their journey to world-class education.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              {stats.map((stat, index) => {
                const Icon = stat.icon
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="text-center"
                  >
                    <div className="inline-flex items-center justify-center w-14 h-14 bg-primary-100 rounded-full mb-3">
                      <Icon className="w-7 h-7 text-primary-600" />
                    </div>
                    <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">{stat.number}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all border border-gray-100 group"
            >
              {/* Quote Icon */}
              <div className="flex justify-end mb-4">
                <Quote className="w-10 h-10 text-primary-200 group-hover:text-primary-300 transition-colors" />
              </div>

              {/* Testimonial Content */}
              <p className="text-gray-700 mb-6 leading-relaxed text-sm">
                "{testimonial.quote}"
              </p>

              {/* Rating */}
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400 mr-2">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <span className="text-xs text-gray-500">Verified</span>
              </div>

              {/* Student Info */}
              <div className="border-t border-gray-100 pt-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 relative rounded-full overflow-hidden ring-2 ring-primary-100 flex-shrink-0">
                    <LazyImage
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover rounded-full"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-2">
                      <div className="font-semibold text-gray-900 text-sm">{testimonial.name}</div>
                      {testimonial.verified && (
                        <Verified className="w-4 h-4 text-primary-600 flex-shrink-0" />
                      )}
                    </div>
                    <div className="text-xs text-gray-600 truncate">
                      {testimonial.course}
                    </div>
                    <div className="flex items-center space-x-2 mt-1">
                      <GraduationCap className="w-3 h-3 text-gray-400" />
                      <span className="text-xs text-gray-500 truncate">{testimonial.university}</span>
                    </div>
                  </div>
                </div>
                <div className="mt-3 flex items-center justify-between text-xs text-gray-500">
                  <span>{testimonial.location}</span>
                  <span>{testimonial.year}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Video Testimonials Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Video Testimonials
            </h2>
            <p className="text-xl text-gray-600">
              Hear directly from our students about their journey
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: 'Ahmed Rahman', course: 'Medicine', university: 'Moscow State University' },
              { name: 'Fatima Khan', course: 'Engineering', university: 'St. Petersburg State University' },
              { name: 'Rashid Ali', course: 'Computer Science', university: 'Novosibirsk State University' },
            ].map((student, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-900 rounded-xl aspect-video flex items-center justify-center relative group cursor-pointer overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-primary-700 opacity-90 group-hover:opacity-95 transition-opacity"></div>
                <div className="relative z-10 text-center p-6">
                  <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-4 mx-auto group-hover:scale-110 group-hover:bg-white/30 transition-all">
                    <Play className="w-10 h-10 text-white ml-1" />
                  </div>
                  <p className="text-white font-semibold mb-1">{student.name}</p>
                  <p className="text-white/80 text-sm">{student.course}</p>
                  <p className="text-white/60 text-xs mt-1">{student.university}</p>
                  <p className="text-white/80 text-xs mt-3">Click to watch</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl p-8 md:p-12 text-white text-center"
          >
            <Award className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Join Our Success Stories
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Be the next success story! Let us help you achieve your dream of studying in Russia. 
              Our expert team is ready to guide you through every step.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/apply"
                className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center"
              >
                Start Your Application
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href="/contact"
                className="bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-800 transition-colors border-2 border-white flex items-center justify-center"
              >
                Get Free Consultation
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

