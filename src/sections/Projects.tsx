import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useAnimationFrame, useMotionValue } from 'framer-motion'
import SectionDivider from '../components/SectionDivider'
import { projects } from '../data/site'
import './Projects.css'

/** Auto-scrolling, curved project carousel. */
function ProjectCarousel() {
  const trackRef = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const paused = useRef(false)

  useAnimationFrame((_, delta) => {
    const track = trackRef.current
    if (!track) return
    const half = track.scrollWidth / 2
    if (!paused.current) {
      let next = x.get() - delta * 0.04
      if (Math.abs(next) >= half) next += half
      x.set(next)
    }
    // curved-deck effect: tilt cards relative to viewport center
    const vw = window.innerWidth
    track.querySelectorAll<HTMLElement>('.project-card').forEach((card) => {
      const rect = card.getBoundingClientRect()
      const center = rect.left + rect.width / 2
      const ratio = (center - vw / 2) / (vw / 2)
      card.style.transform = `perspective(1200px) rotateY(${ratio * -9}deg) translateY(${Math.abs(ratio) * 34}px)`
    })
  })

  return (
    <div
      className="projects-carousel"
      onMouseEnter={() => (paused.current = true)}
      onMouseLeave={() => (paused.current = false)}
    >
      <motion.div ref={trackRef} className="projects-track" style={{ x }}>
        {[...projects, ...projects].map((p, i) => (
          <div className="project-item" key={`${p.slug}-${i}`}>
            <Link to="/projects" className="project-card">
              <img src={p.image} alt={p.name} loading="lazy" />
              <span className="project-chip">{p.category}</span>
            </Link>
            <p className="project-name">{p.name}</p>
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export default function Projects() {
  return (
    <section className="projects">
      <SectionDivider label="Portfolio" />
      <div className="projects-header container">
        <h2 className="t-display projects-title">
          Projects.
          <sup className="projects-count">(07)</sup>
        </h2>
        <Link to="/projects" className="btn btn--green">
          All Projects
        </Link>
      </div>
      <ProjectCarousel />
    </section>
  )
}
