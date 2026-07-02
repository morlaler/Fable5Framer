import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import FitText from '../components/FitText'
import { heroHeadline } from '../data/site'
import './Hero.css'

export default function Hero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.94])
  const dim = useTransform(scrollYProgress, [0, 1], [0, 0.55])

  return (
    <section ref={ref} className="hero">
      <motion.div className="hero-card" style={{ scale }}>
        <video
          className="hero-video"
          src="/assets/video/hero-gummy.mp4"
          autoPlay
          muted
          loop
          playsInline
          aria-label="Colorful gummy bears floating in a blue sky"
        />
        <motion.div className="hero-dim" style={{ opacity: dim }} />

        <div className="hero-content">
          <motion.p
            className="hero-headline"
            initial={{ opacity: 0, y: 170 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.25, 1, 0.5, 1], delay: 0.2 }}
          >
            {heroHeadline}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 120 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.25, 1, 0.5, 1], delay: 0.35 }}
          >
            <Link to="/contact" className="btn btn--green hero-cta">
              Start Your Project
            </Link>
          </motion.div>
        </div>

        <div className="hero-watermark">
          <FitText text="MATTTER®" className="hero-watermark-text" />
        </div>
      </motion.div>
    </section>
  )
}
