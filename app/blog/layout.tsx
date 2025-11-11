import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog & News - GlobalEdu Gateway',
  description: 'Latest news, tips, and insights about studying in Russia. Stay updated with important information for international students.',
  openGraph: {
    title: 'Blog & News - GlobalEdu Gateway',
    description: 'Latest news and insights about studying in Russia.',
  },
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

