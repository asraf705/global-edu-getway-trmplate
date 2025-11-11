import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Study in Russia - GlobalEdu Gateway',
  description: 'Complete guide to studying in Russia: top universities, living costs, scholarships, required documents, and application process.',
  openGraph: {
    title: 'Study in Russia - GlobalEdu Gateway',
    description: 'Complete guide to studying in Russia for Bangladeshi students.',
  },
}

export default function RussiaLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

