import { useRef } from 'react'
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion'
import SectionDivider from '../components/SectionDivider'
import { services, Service } from '../data/site'
import './Services.css'

const fontMap: Record<Service['letterFont'], string> = {
  YUNGA: "'YUNGA', sans-serif",
  Rechteck: "'Rechteck', sans-serif",
  'ARK-ES': "'ARK-ES', sans-serif",
  'Zen Tokyo Zoo': "'Zen Tokyo Zoo', cursive",
}

interface CardProps {
  service: Service
  index: number
  progress: MotionValue<number>
}

function ServiceCard({ service, index, progress }: CardProps) {
  // Fanned deck (left) → tilted spread across panel → re-decked (right)
  const deckLeftX = 3 + index * 3.4
  const deckRightX = 68 + index * 2.2
  const spreadX = [3.2, 27.4, 51.6, 75.8][index]

  const deckLeftRot = [-14, -7, 1, 8][index]
  const spreadRot = [4, -5, 1.5, -4][index]
  const deckRightRot = [11, 5, -2, -8][index]

  const spreadY = [-7, -3, 2, 7][index]

  const x = useTransform(progress, [0, 0.5, 1], [`${deckLeftX}vw`, `${spreadX}vw`, `${deckRightX}vw`])
  const y = useTransform(progress, [0, 0.5, 1], ['32vh', `${spreadY}vh`, '10vh'])
  const rotate = useTransform(progress, [0, 0.5, 1], [deckLeftRot, spreadRot, deckRightRot])

  return (
    <motion.div className="service-card" style={{ x, y, rotate, zIndex: index + 1 }}>
      <span className="service-number">{service.number}</span>
      <span className="service-letter" style={{ fontFamily: fontMap[service.letterFont] }}>
        {service.letter}
      </span>
      <p className="service-name">{service.name}</p>
    </motion.div>
  )
}

export default function Services() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] })
  const spread = useTransform(scrollYProgress, [0.15, 0.75], [0, 1], { clamp: true })

  return (
    <section className="services-wrap">
      <div className="services-divider-holder">
        <SectionDivider label="services" />
      </div>

      <div ref={ref} className="services-scroll">
        <div className="services-sticky">
          <div className="services-panel">
            <h2 className="services-title">Services.</h2>
            <div className="services-cards">
              {services.map((s, i) => (
                <ServiceCard key={s.number} service={s} index={i} progress={spread} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
