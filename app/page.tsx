import { Metadata } from 'next'
import Hero from '@/components/sections/Hero'
import Stats from '@/components/sections/Stats'
import WhyChooseUs from '@/components/sections/WhyChooseUs'
import StudyInRussiaHighlight from '@/components/sections/StudyInRussiaHighlight'
import TestimonialsPreview from '@/components/sections/TestimonialsPreview'
import PartnerUniversities from '@/components/sections/PartnerUniversities'
import OurConsultants from '@/components/sections/OurConsultants'

export const metadata: Metadata = {
  title: 'Home - GlobalEdu Gateway | Your Gateway to Study in Russia',
  description: 'Helping Bangladeshi students apply to study in Russia. Expert guidance, trusted partners, successful placements. Start your journey today!',
  openGraph: {
    title: 'GlobalEdu Gateway - Your Gateway to Study in Russia',
    description: 'Helping Bangladeshi students apply to study in Russia and other countries.',
  },
}

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <WhyChooseUs />
      <StudyInRussiaHighlight />
      <OurConsultants />
      <TestimonialsPreview />
      <PartnerUniversities />
    </>
  )
}

