import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import ChatWidget from '@/components/ChatWidget'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'GlobalEdu Gateway - Your Gateway to Study in Russia',
  description: 'Helping Bangladeshi students apply to study in Russia and other countries. Expert guidance, trusted partners, successful placements.',
  keywords: 'study in Russia, Bangladesh students, education consultancy, Russia universities, study abroad',
  authors: [{ name: 'GlobalEdu Gateway' }],
  openGraph: {
    title: 'GlobalEdu Gateway - Your Gateway to Study in Russia',
    description: 'Helping Bangladeshi students apply to study in Russia and other countries.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GlobalEdu Gateway - Your Gateway to Study in Russia',
    description: 'Helping Bangladeshi students apply to study in Russia and other countries.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'EducationalOrganization',
              name: 'GlobalEdu Gateway',
              description: 'Educational agency helping Bangladeshi students study in Russia',
              url: 'https://globaledugateway.com',
              logo: '/images/GLOBAL-EDU-GATEWAY-logo.png',
              contactPoint: {
                '@type': 'ContactPoint',
                contactType: 'Customer Service',
                availableLanguage: ['English', 'Bengali'],
              },
            }),
          }}
        />
      </head>
      <body>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <WhatsAppButton />
        <ChatWidget />
      </body>
    </html>
  )
}

