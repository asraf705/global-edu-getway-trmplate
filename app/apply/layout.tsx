import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Apply Now - GlobalEdu Gateway',
  description: 'Start your journey to study in Russia. Fill out our application form and get expert guidance from our team.',
  openGraph: {
    title: 'Apply Now - GlobalEdu Gateway',
    description: 'Start your journey to study in Russia.',
  },
}

export default function ApplyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

