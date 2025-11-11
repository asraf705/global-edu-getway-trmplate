import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Partner Universities - GlobalEdu Gateway',
  description: 'Explore our network of top-ranked Russian universities offering world-class education in various fields of study.',
  openGraph: {
    title: 'Partner Universities - GlobalEdu Gateway',
    description: 'Explore our network of top-ranked Russian universities.',
  },
}

export default function UniversitiesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

