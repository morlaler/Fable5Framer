import Hero from '../sections/Hero'
import About from '../sections/About'
import Projects from '../sections/Projects'
import Services from '../sections/Services'
import Pricing from '../sections/Pricing'
import Testimonials from '../sections/Testimonials'
import Awards from '../sections/Awards'
import Stats from '../sections/Stats'
import Team from '../sections/Team'
import Faq from '../sections/Faq'
import Blogs from '../sections/Blogs'
import ContactCta from '../sections/ContactCta'

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Projects />
      <Services />
      <Pricing />
      <Testimonials />
      <Awards />
      <Stats />
      <Team />
      <Faq />
      <Blogs />
      <ContactCta />
    </main>
  )
}
