'use client'

import LazyImage from '@/components/LazyImage'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { MapPin, DollarSign, GraduationCap, FileText, Award, Home, Clock, BookOpen, Users, CheckCircle2, ArrowRight, Calendar } from 'lucide-react'

// Metadata moved to layout.tsx

const cities = [
  { 
    name: 'Moscow', 
    description: 'Capital city with top universities and vibrant culture',
    universities: '50+',
    image: 'https://images.unsplash.com/photo-1513326738677-b964603b136d?w=600&h=400&fit=crop',
    highlights: ['Moscow State University', 'Peoples\' Friendship University', 'Moscow Aviation Institute']
  },
  { 
    name: 'St. Petersburg', 
    description: 'Cultural capital with historic universities',
    universities: '30+',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop',
    highlights: ['St. Petersburg State University', 'ITMO University', 'Peter the Great University']
  },
  { 
    name: 'Novosibirsk', 
    description: 'Major scientific and educational center',
    universities: '15+',
    image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=600&h=400&fit=crop',
    highlights: ['Novosibirsk State University', 'Novosibirsk Technical University']
  },
  { 
    name: 'Kazan', 
    description: 'Beautiful city with strong academic traditions',
    universities: '20+',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop&sig=2',
    highlights: ['Kazan Federal University', 'Kazan State Medical University']
  },
]

const costs = [
  { item: 'Tuition Fees (per year)', amount: '$2,000 - $8,000', note: 'Varies by program' },
  { item: 'Accommodation', amount: '$100 - $300/month', note: 'University dormitory' },
  { item: 'Food & Living', amount: '$200 - $400/month', note: 'Depends on lifestyle' },
  { item: 'Health Insurance', amount: '$100 - $200/year', note: 'Mandatory' },
]

const documents = [
  'Passport (valid for at least 18 months)',
  'High school certificate (translated and notarized)',
  'Medical certificate',
  'HIV test certificate',
  'Passport photos',
  'Application form',
  'Motivation letter',
  'Language proficiency certificate (if required)',
]

const popularPrograms = [
  { name: 'Medicine', duration: '6 years', icon: '⚕️', description: 'MBBS and medical degrees recognized worldwide' },
  { name: 'Engineering', duration: '4-5 years', icon: '🔧', description: 'Civil, Mechanical, Electrical, and more' },
  { name: 'Computer Science', duration: '4 years', icon: '💻', description: 'IT, Software Engineering, AI' },
  { name: 'Business', duration: '4 years', icon: '📊', description: 'MBA, Economics, Management' },
  { name: 'Arts & Humanities', duration: '4 years', icon: '🎨', description: 'Literature, History, Philosophy' },
  { name: 'Science', duration: '4-5 years', icon: '🔬', description: 'Physics, Chemistry, Mathematics' },
]

const applicationTimeline = [
  { step: 1, title: 'Research & Choose', duration: '1-2 months', description: 'Select university and program' },
  { step: 2, title: 'Prepare Documents', duration: '1 month', description: 'Gather and translate all required documents' },
  { step: 3, title: 'Submit Application', duration: '2-4 weeks', description: 'Apply to chosen universities' },
  { step: 4, title: 'Receive Admission', duration: '1-2 months', description: 'Get acceptance letter' },
  { step: 5, title: 'Apply for Visa', duration: '1-2 months', description: 'Complete visa application process' },
  { step: 6, title: 'Travel & Enroll', duration: 'Ready!', description: 'Arrive in Russia and start studies' },
]

export default function RussiaPage() {
  return (
    <div className="pt-32 pb-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-primary-50 pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-block mb-4"
              >
                <span className="bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium">
                  🇷🇺 Study in Russia
                </span>
              </motion.div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Your Gateway to World-Class Education in Russia
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Discover world-class education, affordable tuition, and a rich cultural experience. 
                Russia offers exceptional opportunities for international students with globally recognized degrees.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/apply"
                  className="bg-primary-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-600 transition-colors flex items-center justify-center"
                >
                  Apply Now
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  href="/universities"
                  className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold border-2 border-primary-500 hover:bg-primary-50 transition-colors flex items-center justify-center"
                >
                  View Universities
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative"
            >
              <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <LazyImage
                  src="https://images.unsplash.com/photo-1523059623039-a9ed027e7fad?w=800&h=800&fit=crop"
                  alt="Students studying in Russia"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
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
                Why Study in Russia?
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Russia is home to some of the world's most prestigious universities, offering 
                  high-quality education at affordable prices. Russian degrees are recognized 
                  globally, opening doors to international career opportunities.
                </p>
                <p>
                  The country offers a diverse range of programs in medicine, engineering, 
                  technology, humanities, and sciences. Many universities provide instruction 
                  in English, making it accessible for international students.
                </p>
                <p>
                  With a rich cultural heritage, vibrant student life, and excellent facilities, 
                  studying in Russia is an enriching experience that goes beyond academics.
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
              <div className="relative h-64 mb-6 rounded-lg overflow-hidden">
                <LazyImage
                  src="https://images.unsplash.com/photo-1523059623039-a9ed027e7fad?w=800&h=600&fit=crop"
                  alt="Students studying in Russia"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <GraduationCap className="w-8 h-8 text-primary-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">World-Class Education</h3>
                    <p className="text-gray-600 text-sm">Top-ranked universities globally</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <DollarSign className="w-8 h-8 text-primary-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Affordable Tuition</h3>
                    <p className="text-gray-600 text-sm">Lower costs compared to Western countries</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Award className="w-8 h-8 text-primary-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Scholarships Available</h3>
                    <p className="text-gray-600 text-sm">Government and university scholarships</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Home className="w-8 h-8 text-primary-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Safe & Welcoming</h3>
                    <p className="text-gray-600 text-sm">Friendly environment for international students</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Top Cities Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Top Cities for Students
            </h2>
            <p className="text-xl text-gray-600">
              Popular destinations for international students
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cities.map((city, index) => (
              <motion.div
                key={city.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow overflow-hidden group cursor-pointer"
              >
                <div className="relative h-40 overflow-hidden">
                  <LazyImage
                    src={city.image}
                    alt={city.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-2 right-2 bg-primary-500 text-white px-2 py-1 rounded text-xs font-semibold z-20">
                    {city.universities}
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center mb-2">
                    <MapPin className="w-5 h-5 text-primary-600 mr-2" />
                    <h3 className="text-lg font-semibold text-gray-900">
                      {city.name}
                    </h3>
                  </div>
                  <p className="text-gray-600 text-sm mb-3">{city.description}</p>
                  <div className="space-y-1">
                    {city.highlights.slice(0, 2).map((uni, idx) => (
                      <p key={idx} className="text-xs text-gray-500">• {uni}</p>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Living Costs Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Living Costs & Expenses
            </h2>
            <p className="text-xl text-gray-600">
              Affordable education and living expenses
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {costs.map((cost, index) => (
              <motion.div
                key={cost.item}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-md"
              >
                <DollarSign className="w-8 h-8 text-primary-600 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {cost.item}
                </h3>
                <p className="text-2xl font-bold text-primary-600 mb-1">
                  {cost.amount}
                </p>
                <p className="text-sm text-gray-600">{cost.note}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Scholarships Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl p-8 md:p-12 text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Scholarships & Financial Aid
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">Government Scholarships</h3>
                <p className="text-primary-100">
                  The Russian government offers scholarships covering tuition fees and living expenses 
                  for outstanding international students.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">University Scholarships</h3>
                <p className="text-primary-100">
                  Many universities provide merit-based scholarships and financial aid programs 
                  for international students.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Popular Programs Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Popular Programs
            </h2>
            <p className="text-xl text-gray-600">
              Wide range of academic programs available
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularPrograms.map((program, index) => (
              <motion.div
                key={program.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow border-l-4 border-primary-500"
              >
                <div className="text-4xl mb-3">{program.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {program.name}
                </h3>
                <div className="flex items-center text-sm text-gray-600 mb-3">
                  <Clock className="w-4 h-4 mr-2" />
                  <span>{program.duration}</span>
                </div>
                <p className="text-gray-600 text-sm">{program.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Timeline */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Application Timeline
            </h2>
            <p className="text-xl text-gray-600">
              Step-by-step guide to your application process
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary-200 hidden md:block"></div>
            <div className="space-y-8">
              {applicationTimeline.map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative flex items-start space-x-6"
                >
                  <div className="flex-shrink-0 w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold text-xl relative z-10">
                    {item.step}
                  </div>
                  <div className="flex-1 bg-white p-6 rounded-xl shadow-md">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
                      <span className="text-sm text-primary-600 font-medium">{item.duration}</span>
                    </div>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Required Documents Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Required Documents
            </h2>
            <p className="text-xl text-gray-600">
              Essential documents for your application
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl p-8 shadow-md"
          >
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              {documents.map((doc, index) => (
                <div key={index} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{doc}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 p-4 bg-primary-50 rounded-lg border-l-4 border-primary-500">
              <p className="text-sm text-gray-700">
                <strong>Note:</strong> All documents must be translated into Russian and notarized. 
                Our team can help you prepare and verify all required documents. Contact us for assistance!
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-primary-500 to-primary-700 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <GraduationCap className="w-16 h-16 mx-auto mb-6 text-white" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Let us help you achieve your dream of studying in Russia. Our expert team will guide you through every step.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/apply"
                className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center"
              >
                Start Application
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

