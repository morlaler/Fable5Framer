import { useRef } from 'react'
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion'
import SectionDivider from '../components/SectionDivider'
import Marquee from '../components/Marquee'
import { aboutStatement, clientLogos } from '../data/site'
import './About.css'

function Word({ children, progress, range }: { children: string; progress: MotionValue<number>; range: [number, number] }) {
  const opacity = useTransform(progress, range, [0.18, 1])
  return (
    <motion.span className="about-word" style={{ opacity }}>
      {children}{' '}
    </motion.span>
  )
}

export default function About() {
  const textRef = useRef<HTMLParagraphElement>(null)
  const { scrollYProgress } = useScroll({ target: textRef, offset: ['start 0.85', 'start 0.35'] })
  const words = aboutStatement.split(' ')

  return (
    <section className="about">
      <SectionDivider label="About Us" />

      <div className="about-inner container">
        <p ref={textRef} className="about-statement">
          {words.map((word, i) => (
            <Word key={i} progress={scrollYProgress} range={[i / words.length, (i + 1) / words.length]}>
              {word}
            </Word>
          ))}
        </p>
      </div>

      <div className="about-logos">
        <Marquee speed={28}>
          {clientLogos.map((logo, i) => (
            <div className="about-logo-card" key={i}>
              <img src={logo} alt="" loading="lazy" />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  )
}
