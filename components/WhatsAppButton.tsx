'use client'

import { MessageCircle } from 'lucide-react'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function WhatsAppButton() {
  const whatsappNumber = '8801234567890' // Replace with actual WhatsApp number
  const message = encodeURIComponent('Hello! I\'m interested in studying in Russia. Can you help me?')

  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, type: 'spring', stiffness: 200 }}
      className="fixed bottom-6 right-6 z-40"
    >
      <Link
        href={`https://wa.me/${whatsappNumber}?text=${message}`}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative"
      >
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="bg-[#25D366] w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow"
        >
          <MessageCircle className="w-7 h-7 text-white" />
        </motion.div>
        <span className="absolute right-16 top-1/2 -translate-y-1/2 bg-gray-900 text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          Chat on WhatsApp
        </span>
      </Link>
    </motion.div>
  )
}

