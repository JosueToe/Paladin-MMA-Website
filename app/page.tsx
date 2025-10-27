import Navigation from '@/components/layout/Navigation'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import ProgramsSchedule from '@/components/sections/ProgramsSchedule'
import Testimonials from '@/components/sections/Testimonials'
import Gallery from '@/components/sections/Gallery'
import ContactLocation from '@/components/sections/ContactLocation'
import Footer from '@/components/layout/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-dark">
      <Navigation />
      <Hero />
      <About />
      <ProgramsSchedule />
      <ContactLocation />
      <Gallery />
      <Testimonials />
      <Footer />
    </main>
  )
}

