'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Clock, Send, MessageCircle, Facebook, Instagram, MessageSquare, CheckCircle2 } from 'lucide-react'
import { useLocation, getDisplayAddress } from '@/hooks/useLocation'

export default function ContactPage() {
  const { country, isLoading } = useLocation()
  const displayAddress = getDisplayAddress(country)
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Create mailto link
    const mailtoLink = `mailto:globaledugateway1@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`
    window.location.href = mailtoLink
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Office Address',
      content: isLoading ? 'Loading...' : displayAddress.full,
    },
    {
      icon: Phone,
      title: 'Phone Numbers',
      content: '+79171234292 (Russia)\n+8801314924003 (Bangladesh)',
      phones: [
        { number: '+79171234292', country: 'Russia', whatsapp: '79171234292', telegram: '79171234292' },
        { number: '+8801314924003', country: 'Bangladesh', whatsapp: '8801314924003', telegram: '8801314924003' },
      ],
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'globaledugateway1@gmail.com',
      link: 'mailto:globaledugateway1@gmail.com',
    },
    {
      icon: Clock,
      title: 'Office Hours',
      content: 'Sunday - Thursday\n9:00 AM - 6:00 PM',
    },
  ]

  const socialLinks = [
    { icon: MessageCircle, href: '#', label: 'Telegram', color: 'bg-blue-500' },
    { icon: Facebook, href: '#', label: 'Facebook', color: 'bg-blue-600' },
    { icon: Instagram, href: '#', label: 'Instagram', color: 'bg-pink-500' },
  ]

  return (
    <div className="pt-32 pb-20">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Have questions? We're here to help. Contact us and we'll get back to you as soon as possible.
          </p>
        </motion.div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Info Cards */}
          <div className="lg:col-span-1 space-y-6">
            {contactInfo.map((info, index) => {
              const Icon = info.icon
              return (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-xl shadow-md"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2 text-lg">
                      {info.title}
                      {info.phones && (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-green-100 text-green-700 rounded-full text-xs font-semibold">
                          <CheckCircle2 className="w-3 h-3" />
                          Available
                        </span>
                      )}
                    </h3>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="text-gray-600 hover:text-primary-600 transition-colors whitespace-pre-line flex items-start gap-2 group"
                      >
                        {info.title === 'Email' && <Mail className="w-4 h-4 text-gray-400 group-hover:text-primary-600 mt-0.5 flex-shrink-0" />}
                        <span>{info.content}</span>
                      </a>
                    ) : info.phones ? (
                      <div className="space-y-4">
                        {info.phones.map((phone, idx) => (
                          <div key={idx} className="p-4 bg-gradient-to-br from-gray-50 to-white rounded-lg border-2 border-gray-200 hover:border-primary-300 transition-all shadow-sm hover:shadow-md">
                            <div className="flex items-center gap-2 mb-2">
                              <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                                <Phone className="w-4 h-4 text-primary-600" />
                              </div>
                              <div className="flex-1">
                                <a
                                  href={`tel:${phone.number.replace(/\s/g, '')}`}
                                  className="text-gray-900 font-semibold hover:text-primary-600 transition-colors text-base"
                                >
                                  {phone.number}
                                </a>
                                <div className="flex items-center gap-1 mt-0.5">
                                  <MapPin className="w-3 h-3 text-gray-500" />
                                  <span className="text-xs text-gray-600 font-medium">{phone.country}</span>
                                </div>
                              </div>
                            </div>
                            <div className="flex gap-2 mt-3 pt-3 border-t border-gray-200">
                              <a
                                href={`https://wa.me/${phone.whatsapp}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2.5 bg-green-500 text-white rounded-lg text-xs font-semibold hover:bg-green-600 transition-all shadow-sm hover:shadow-md hover:scale-105"
                                title="Contact via WhatsApp"
                              >
                                <MessageSquare className="w-4 h-4" />
                                WhatsApp
                              </a>
                              <a
                                href={`https://t.me/${phone.telegram}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2.5 bg-blue-500 text-white rounded-lg text-xs font-semibold hover:bg-blue-600 transition-all shadow-sm hover:shadow-md hover:scale-105"
                                title="Contact via Telegram"
                              >
                                <MessageCircle className="w-4 h-4" />
                                Telegram
                              </a>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-gray-600 whitespace-pre-line flex items-start gap-2">
                        {info.title === 'Office Hours' && <Clock className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />}
                        <span>{info.content}</span>
                      </p>
                    )}
                  </div>
                  </div>
                </motion.div>
              )
            })}

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white p-6 rounded-xl shadow-md"
            >
              <h3 className="font-semibold text-gray-900 mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${social.color} w-12 h-12 rounded-lg flex items-center justify-center text-white hover:scale-110 transition-transform`}
                      aria-label={social.label}
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  )
                })}
              </div>
            </motion.div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-xl shadow-md p-8"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="What is this regarding?"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Tell us how we can help you..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-600 transition-colors flex items-center justify-center"
                >
                  Send Message
                  <Send className="ml-2 w-5 h-5" />
                </button>
              </form>
            </motion.div>

            {/* Google Maps Embed */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-8 rounded-xl overflow-hidden shadow-lg aspect-video"
            >
              {isLoading ? (
                <div className="bg-gray-200 rounded-xl aspect-video flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-16 h-16 text-gray-400 mx-auto mb-4 animate-pulse" />
                    <p className="text-gray-600">Loading map...</p>
                  </div>
                </div>
              ) : (
                <iframe
                  src={displayAddress.mapUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                  title={`${displayAddress.city} Office Location`}
                />
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

