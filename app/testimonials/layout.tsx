import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Testimonials - GlobalEdu Gateway',
  description: 'Read success stories from students who achieved their dreams of studying in Russia with GlobalEdu Gateway.',
  openGraph: {
    title: 'Testimonials - GlobalEdu Gateway',
    description: 'Success stories from our students.',
  },
}

export default function TestimonialsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

