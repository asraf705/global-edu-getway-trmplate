import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us - GlobalEdu Gateway',
  description: 'Get in touch with GlobalEdu Gateway. We\'re here to help you with your questions about studying in Russia.',
  openGraph: {
    title: 'Contact Us - GlobalEdu Gateway',
    description: 'Get in touch with us.',
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

