import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student Dashboard - GlobalEdu Gateway',
  description: 'Track your application progress, manage documents, and stay updated with your study abroad journey.',
  robots: {
    index: false,
    follow: false,
  },
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

