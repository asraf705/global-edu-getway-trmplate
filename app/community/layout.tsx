import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Community - GlobalEdu Gateway',
  description: 'Join city and university-based communities in Russia. Connect with students, post events, share requests, and participate in community activities.',
  keywords: 'Russia student community, Moscow community, St. Petersburg community, university communities, student events Russia',
}

export default function CommunityLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

