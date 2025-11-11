import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us - GlobalEdu Gateway',
  description: 'Learn about GlobalEdu Gateway - your trusted partner for studying in Russia. Our mission, team, and commitment to student success.',
  openGraph: {
    title: 'About Us - GlobalEdu Gateway',
    description: 'Learn about GlobalEdu Gateway - your trusted partner for studying in Russia.',
  },
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

