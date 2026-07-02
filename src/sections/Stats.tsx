import { useEffect, useRef, useState } from 'react'
import SectionDivider from '../components/SectionDivider'
import { stats, statsStatement } from '../data/site'
import './Stats.css'

function useInView<T extends HTMLElement>(threshold = 0.35) {
  const ref = useRef<T>(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          obs.disconnect()
        }
      },
      { threshold },
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])
  return { ref, inView }
}

function Counter({ value, decimals = 0, suffix, run }: { value: number; decimals?: number; suffix: string; run: boolean }) {
  const [display, setDisplay] = useState(0)
  useEffect(() => {
    if (!run) return
    const duration = 1600
    const start = performance.now()
    let raf: number
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - p, 4)
      setDisplay(value * eased)
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [run, value])
  return (
    <span className="stat-value">
      {display.toFixed(decimals)}
      {suffix}
    </span>
  )
}

export default function Stats() {
  const { ref, inView } = useInView<HTMLDivElement>()

  return (
    <section className="stats">
      <SectionDivider label="Stats" />

      <div className="stats-statement container">
        <p>{statsStatement}</p>
      </div>

      <div ref={ref} className="stats-grid container">
        {stats.map((s) => (
          <div key={s.label} className="stat-cell">
            <p className="stat-label">{s.label}</p>
            <Counter value={s.value} decimals={s.decimals} suffix={s.suffix} run={inView} />
            <p className="stat-note">{s.note}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
