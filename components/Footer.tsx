'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Mail, Phone, MapPin, Facebook, Instagram, MessageCircle } from 'lucide-react'
import { motion } from 'framer-motion'
import { useLocation, getDisplayAddress } from '@/hooks/useLocation'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const { country, isLoading } = useLocation()
  const displayAddress = getDisplayAddress(country)

  const footerLinks = {
    company: [
      { href: '/about', label: 'About Us' },
      { href: '/russia', label: 'Study in Russia' },
      { href: '/universities', label: 'Universities' },
      { href: '/jobs', label: 'Jobs in Russia' },
      { href: '/testimonials', label: 'Testimonials' },
      { href: '/community', label: 'Community' },
    ],
    resources: [
      { href: '/blog', label: 'Blog & News' },
      { href: '/apply', label: 'Apply Now' },
      { href: '/contact', label: 'Contact' },
      { href: '/login', label: 'Student Login' },
    ],
  }

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: MessageCircle, href: '#', label: 'Telegram' },
  ]

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="flex items-center mb-4">
              <Image
                src="/images/GLOBAL-EDU-GATEWAY-logo.png"
                alt="GlobalEdu Gateway Logo"
                width={100}
                height={100}
                className="h-[100px] w-[100px] object-contain"
              />
            </Link>
            <span className="text-xl font-bold text-white">
                GlobalEdu <span className="text-primary-400">Gateway</span>
              </span>
           
            <p className="text-sm text-gray-400 mb-4">
              Your trusted partner for studying in Russia. Helping Bangladeshi students achieve their dreams of international education.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-500 transition-colors"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                )
              })}
            </div>
          </motion.div>

          {/* Company Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-primary-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Resources Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-primary-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary-400 mt-0.5 flex-shrink-0" />
                <span className="text-sm whitespace-pre-line">
                  {isLoading ? 'Loading...' : displayAddress.full}
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary-400 flex-shrink-0" />
                <a href="tel:+8801234567890" className="text-sm hover:text-primary-400 transition-colors">
                  +880 1234 567 890
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary-400 flex-shrink-0" />
                <a href="mailto:info@globaledugateway.com" className="text-sm hover:text-primary-400 transition-colors">
                  info@globaledugateway.com
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-400">
            © {currentYear} GlobalEdu Gateway. All rights reserved.
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Designed and developed by{' '}
            <a
              href="https://nextzencode.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-400 hover:text-red-300 transition-colors"
            >
              NextZenCode
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}

