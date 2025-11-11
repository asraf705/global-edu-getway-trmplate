import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Jobs in Russia - GlobalEdu Gateway',
  description: 'Find part-time, full-time, and temporary jobs in Russia. Browse job opportunities from top Russian job portals or post your own job listing.',
  keywords: 'jobs in Russia, part-time jobs Russia, full-time jobs Russia, temporary jobs Russia, Russian job portals',
}

export default function JobsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

