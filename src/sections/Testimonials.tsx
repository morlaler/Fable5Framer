import { useEffect, useState } from 'react'
import SectionDivider from '../components/SectionDivider'
import { testimonialItems } from '../data/site'
import './Testimonials.css'

export default function Testimonials() {
  const [index, setIndex] = useState(1)

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % testimonialItems.length), 4200)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="testimonials">
      <div className="testimonials-header container">
        <h2 className="t-display">Testimonials.</h2>
      </div>

      <div className="testimonials-viewport">
        <div
          className="testimonials-track"
          style={{ transform: `translateX(calc(50vw - var(--t-card-half) - ${index} * var(--t-step)))` }}
        >
          {testimonialItems.map((item, i) => {
            const active = i === index
            return item.kind === 'media' ? (
              <div key={i} className={`t-photo${active ? ' is-active' : ''}`} onClick={() => setIndex(i)}>
                <video src={item.video} poster={item.poster} autoPlay muted loop playsInline aria-label={`${item.name}, ${item.role}`} />
              </div>
            ) : (
              <div key={i} className={`t-quote${active ? ' is-active' : ''}`} onClick={() => setIndex(i)}>
                <div className="t-quote-author">
                  <img src={item.avatar} alt="" loading="lazy" />
                  <div>
                    <p className="t-quote-name">{item.name}</p>
                    <p className="t-quote-role">{item.role}</p>
                  </div>
                </div>
                <p className="t-quote-text">{item.quote}</p>
                <div className="t-dots">
                  {testimonialItems.map((_, d) => (
                    <button
                      key={d}
                      aria-label={`Show testimonial ${d + 1}`}
                      className={`t-dot${d === i ? ' is-active' : ''}`}
                      onClick={(e) => {
                        e.stopPropagation()
                        setIndex(d)
                      }}
                    />
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <SectionDivider label="Awards" />
    </section>
  )
}
