'use client'

import LazyImage from '@/components/LazyImage'
import { motion } from 'framer-motion'
import { Target, Users, Award, Heart, CheckCircle2, Globe, TrendingUp } from 'lucide-react'

// Metadata moved to layout.tsx

const values = [
  {
    icon: Target,
    title: 'Our Mission',
    description: 'To empower Bangladeshi students with access to world-class education in Russia, providing expert guidance and support throughout their journey.',
  },
  {
    icon: Users,
    title: 'Our Team',
    description: 'Experienced counselors and education experts dedicated to helping students achieve their academic and career goals.',
  },
  {
    icon: Award,
    title: 'Our Achievements',
    description: '200+ successful placements, 50+ partner universities, and 5+ years of excellence in education consultancy.',
  },
  {
    icon: Heart,
    title: 'Our Commitment',
    description: 'We are committed to transparency, integrity, and student success. Your dreams are our priority.',
  },
]

export default function AboutPage() {
  const stats = [
    { number: '200+', label: 'Students Placed', icon: Users },
    { number: '50+', label: 'Partner Universities', icon: Award },
    { number: '5+', label: 'Years Experience', icon: TrendingUp },
    { number: '98%', label: 'Success Rate', icon: CheckCircle2 },
  ]

  const achievements = [
    'Recognized by top Russian universities as trusted partner',
    'Award-winning student support services',
    'ISO certified education consultancy',
    'Member of International Education Association',
    'Featured in leading education publications',
    '100% visa success rate for qualified students',
  ]

  return (
    <div className="pt-32 pb-20">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
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
              About Us
            </span>
          </motion.div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About GlobalEdu Gateway
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            We are a trusted educational consultancy helping Bangladeshi students achieve their dreams 
            of studying in Russia. With years of experience and a proven track record, we make the 
            application process simple, transparent, and successful.
          </p>
          
          {/* Quick Stats */}
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
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-3">
                    <Icon className="w-8 h-8 text-primary-600" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-1">{stat.number}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </section>

      {/* Story Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  GlobalEdu Gateway was founded with a simple mission: to make quality international 
                  education accessible to Bangladeshi students. We recognized the challenges students 
                  face when navigating the complex process of applying to foreign universities.
                </p>
                <p>
                  Over the years, we have built strong partnerships with top Russian universities and 
                  developed a comprehensive support system that guides students from initial inquiry 
                  to successful enrollment and beyond.
                </p>
                <p>
                  Today, we are proud to have helped hundreds of students realize their dreams of 
                  studying abroad, and we continue to expand our services to serve even more students 
                  in the future.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl p-8 shadow-xl"
            >
              <div className="aspect-video relative rounded-lg overflow-hidden">
                <LazyImage
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&h=800&fit=crop"
                  alt="GlobalEdu Gateway office team"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Students Trust Us
            </h2>
            <p className="text-xl text-gray-600">
              Our core values guide everything we do
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow"
                >
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Team
            </h2>
            <p className="text-xl text-gray-600">
              Meet the experts dedicated to your success
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              { name: 'Dr. Mohammad Rahman', role: 'Founder & CEO', bio: 'Education expert with 10+ years of experience helping students achieve their dreams. Former university professor with deep knowledge of international education systems.', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face' },
              { name: 'Fatima Ahmed', role: 'Senior Counselor', bio: 'Specialized in Russian university admissions with 8+ years of expertise. Fluent in Russian and Bengali, ensuring smooth communication.', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face' },
              { name: 'Rashid Khan', role: 'Student Support Manager', bio: 'Ensuring smooth journey for every student from application to arrival. Expert in visa processing and student accommodation.', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face' },
            ].map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow text-center group"
              >
                <div className="w-24 h-24 relative rounded-full mx-auto mb-4 overflow-hidden ring-4 ring-primary-100 group-hover:ring-primary-300 transition-all">
                  <LazyImage
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform rounded-full"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-primary-600 font-medium mb-2">{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Achievements & Recognition
            </h2>
            <p className="text-xl text-gray-600">
              Building trust through excellence and results
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start space-x-3 bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <p className="text-gray-700">{achievement}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Office Photos Grid */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Office
            </h2>
            <p className="text-xl text-gray-600">
              Visit us at our modern office in Dhaka
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { src: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop', alt: 'Office reception area' },
              { src: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&h=600&fit=crop', alt: 'Consultation room' },
              { src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop', alt: 'Team workspace' },
            ].map((photo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative aspect-video rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group"
              >
                <LazyImage
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
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
            <Globe className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Join hundreds of successful students who have achieved their dreams of studying in Russia with our help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/apply"
                className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Apply Now
              </a>
              <a
                href="/contact"
                className="bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-800 transition-colors border-2 border-white"
              >
                Contact Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

