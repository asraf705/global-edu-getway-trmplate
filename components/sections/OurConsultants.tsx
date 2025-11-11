'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Calendar, GraduationCap, MapPin, Star, X, Clock, User, Mail, Phone } from 'lucide-react'
import Image from 'next/image'

interface Consultant {
  id: string
  name: string
  image: string
  title: string
  specialization: string[]
  universities: string[]
  experience: string
  rating: number
  description: string
  email?: string
  phone?: string
}

const consultants: Consultant[] = [
  {
    id: '1',
    name: 'Ahmed Rahman',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop',
    title: 'Senior Education Consultant',
    specialization: ['Medicine', 'Engineering', 'Business'],
    universities: ['Moscow State University', 'St. Petersburg State University', 'ITMO University'],
    experience: '8+ Years',
    rating: 4.9,
    description: 'Expert in medical and engineering programs. Successfully placed 200+ students in top Russian universities.',
    email: 'ahmed@globaledugateway.com',
    phone: '+7 (495) 123-4567',
  },
  {
    id: '2',
    name: 'Fatima Khan',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop',
    title: 'University Relations Specialist',
    specialization: ['Science', 'Technology', 'Arts'],
    universities: ['Novosibirsk State University', 'Kazan Federal University', 'Tomsk State University'],
    experience: '6+ Years',
    rating: 4.8,
    description: 'Specializes in science and technology programs. Strong connections with leading research universities in Russia.',
    email: 'fatima@globaledugateway.com',
    phone: '+7 (495) 123-4568',
  },
  {
    id: '3',
    name: 'Rashid Ali',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    title: 'Admissions Counselor',
    specialization: ['Business', 'Economics', 'Law'],
    universities: ['Higher School of Economics', 'Moscow State University', 'St. Petersburg State University'],
    experience: '5+ Years',
    rating: 4.7,
    description: 'Expert in business and economics programs. Helps students navigate admission processes and scholarship opportunities.',
    email: 'rashid@globaledugateway.com',
    phone: '+7 (495) 123-4569',
  },
]

export default function OurConsultants() {
  const [selectedConsultant, setSelectedConsultant] = useState<Consultant | null>(null)
  const [showBookingModal, setShowBookingModal] = useState(false)

  const handleBookAppointment = (consultant: Consultant) => {
    setSelectedConsultant(consultant)
    setShowBookingModal(true)
  }

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Expert Consultants
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet our experienced team of education consultants who specialize in helping students achieve their dreams of studying in Russia.
          </p>
        </motion.div>

        {/* Consultants Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {consultants.map((consultant, index) => (
            <motion.div
              key={consultant.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 group"
            >
              {/* Consultant Image */}
              <div className="relative h-64 overflow-hidden bg-gradient-to-br from-primary-100 to-primary-200">
                <Image
                  src={consultant.image}
                  alt={consultant.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-white rounded-full px-3 py-1 flex items-center gap-1 shadow-md">
                  <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  <span className="text-sm font-semibold text-gray-900">{consultant.rating}</span>
                </div>
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1">
                  <span className="text-xs font-medium text-gray-700">{consultant.experience}</span>
                </div>
              </div>

              {/* Consultant Info */}
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{consultant.name}</h3>
                  <p className="text-sm text-primary-600 font-medium">{consultant.title}</p>
                </div>

                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{consultant.description}</p>

                {/* Specializations */}
                <div className="mb-4">
                  <div className="flex items-center gap-1 mb-2">
                    <GraduationCap className="w-4 h-4 text-primary-600" />
                    <span className="text-xs font-semibold text-gray-700 uppercase tracking-wide">Specializations</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {consultant.specialization.map((spec, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-primary-50 text-primary-700 rounded-md text-xs font-medium"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Universities */}
                <div className="mb-6">
                  <div className="flex items-center gap-1 mb-2">
                    <MapPin className="w-4 h-4 text-primary-600" />
                    <span className="text-xs font-semibold text-gray-700 uppercase tracking-wide">Universities</span>
                  </div>
                  <div className="space-y-1">
                    {consultant.universities.slice(0, 2).map((uni, idx) => (
                      <p key={idx} className="text-xs text-gray-600 truncate">
                        {uni}
                      </p>
                    ))}
                    {consultant.universities.length > 2 && (
                      <p className="text-xs text-primary-600 font-medium">
                        +{consultant.universities.length - 2} more universities
                      </p>
                    )}
                  </div>
                </div>

                {/* Book Appointment Button */}
                <button
                  onClick={() => handleBookAppointment(consultant)}
                  className="w-full bg-primary-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-600 transition-colors flex items-center justify-center gap-2 group-hover:shadow-lg"
                >
                  <Calendar className="w-5 h-5" />
                  Book Appointment
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Booking Modal */}
      {showBookingModal && selectedConsultant && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="bg-white rounded-xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          >
            {/* Modal Header */}
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="relative w-16 h-16 rounded-full overflow-hidden">
                  <Image
                    src={selectedConsultant.image}
                    alt={selectedConsultant.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{selectedConsultant.name}</h3>
                  <p className="text-sm text-gray-600">{selectedConsultant.title}</p>
                </div>
              </div>
              <button
                onClick={() => setShowBookingModal(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              {/* Consultant Details */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">About {selectedConsultant.name}</h4>
                <p className="text-gray-600 text-sm mb-4">{selectedConsultant.description}</p>
                
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <GraduationCap className="w-4 h-4 text-primary-600" />
                      <span className="text-sm font-semibold text-gray-700">Specializations</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {selectedConsultant.specialization.map((spec, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-primary-50 text-primary-700 rounded-md text-xs font-medium"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <MapPin className="w-4 h-4 text-primary-600" />
                      <span className="text-sm font-semibold text-gray-700">Universities</span>
                    </div>
                    <ul className="space-y-1">
                      {selectedConsultant.universities.map((uni, idx) => (
                        <li key={idx} className="text-xs text-gray-600 flex items-center gap-1">
                          <span className="w-1.5 h-1.5 bg-primary-500 rounded-full"></span>
                          {uni}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Contact Info */}
                {(selectedConsultant.email || selectedConsultant.phone) && (
                  <div className="flex flex-wrap gap-4 pt-4 border-t border-gray-200">
                    {selectedConsultant.email && (
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Mail className="w-4 h-4 text-primary-600" />
                        <a href={`mailto:${selectedConsultant.email}`} className="hover:text-primary-600">
                          {selectedConsultant.email}
                        </a>
                      </div>
                    )}
                    {selectedConsultant.phone && (
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Phone className="w-4 h-4 text-primary-600" />
                        <a href={`tel:${selectedConsultant.phone}`} className="hover:text-primary-600">
                          {selectedConsultant.phone}
                        </a>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Booking Form */}
              <div className="border-t border-gray-200 pt-6">
                <h4 className="font-semibold text-gray-900 mb-4">Book an Appointment</h4>
                <form className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="Enter your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="+880 1XXX-XXXXXX"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Preferred Date *
                      </label>
                      <input
                        type="date"
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Time *
                    </label>
                    <select
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    >
                      <option value="">Select time</option>
                      <option value="09:00">9:00 AM</option>
                      <option value="10:00">10:00 AM</option>
                      <option value="11:00">11:00 AM</option>
                      <option value="12:00">12:00 PM</option>
                      <option value="14:00">2:00 PM</option>
                      <option value="15:00">3:00 PM</option>
                      <option value="16:00">4:00 PM</option>
                      <option value="17:00">5:00 PM</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message (Optional)
                    </label>
                    <textarea
                      rows={3}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Tell us about your study goals or any questions..."
                    />
                  </div>
                  <div className="flex gap-3 pt-4">
                    <button
                      type="submit"
                      className="flex-1 bg-primary-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-600 transition-colors flex items-center justify-center gap-2"
                    >
                      <Calendar className="w-5 h-5" />
                      Confirm Appointment
                    </button>
                    <button
                      type="button"
                      onClick={() => setShowBookingModal(false)}
                      className="px-6 py-3 border border-gray-300 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  )
}

