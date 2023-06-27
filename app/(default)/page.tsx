export const metadata = {
  title: 'Dyonisas',
  description: 'Homepage of Dionysas',
}

import Hero from '@/components/hero'
import Features from '@/components/features'
import Newsletter from '@/components/newsletter'
import Zigzag from '@/components/zigzag'
import Testimonials from '@/components/testimonials'
import Contact from '@/components/contact'

export default function Home() {
  const testimonals=false;
  const newsletter=false;
  return (
    <>
      <Hero />
      <Features />
      <Zigzag />
      {testimonals&&<Testimonials />}
      {newsletter&&<Newsletter />}
      <Contact/>
    </>
  )
}
