import Stats from '../sections/Stats'
import Team from '../sections/Team'
import Awards from '../sections/Awards'
import Faq from '../sections/Faq'
import ContactCta from '../sections/ContactCta'
import About from '../sections/About'
import './pages.css'

const studioImages = [
  '/assets/images/studio-1.jpg',
  '/assets/images/studio-2.jpg',
  '/assets/images/studio-3.jpg',
  '/assets/images/studio-4.jpg',
]

export default function Studio() {
  return (
    <main>
      <section className="page-hero">
        <div className="page-hero-top container">
          <h1 className="t-display page-hero-title">Studio.</h1>
          <div className="page-hero-side">
            <p className="page-hero-count">100+</p>
            <p className="page-hero-note">Satisfied clients</p>
          </div>
        </div>
        <p className="page-hero-lede container">
          We're an independent design studio driven by intention, craft, and strategic clarity, helping founders and
          teams build brands that mean something and hold up.
        </p>
        <div className="page-hero-gallery container">
          {studioImages.map((src, i) => (
            <div className="page-hero-photo" key={i}>
              <img src={src} alt="Studio life" loading="lazy" />
            </div>
          ))}
        </div>
      </section>
      <About />
      <Stats />
      <Team />
      <Awards />
      <Faq />
      <ContactCta />
    </main>
  )
}
