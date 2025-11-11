import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student Login - GlobalEdu Gateway',
  description: 'Access your student dashboard to track your application progress and manage your documents.',
  robots: {
    index: false,
    follow: false,
  },
}

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

