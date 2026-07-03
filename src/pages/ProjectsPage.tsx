import { useState } from 'react'
import { projects } from '../data/site'
import ContactCta from '../sections/ContactCta'
import './pages.css'

const filters = ['All', 'Development', 'SEO', 'UI/UX Design', 'Web design']

export default function ProjectsPage() {
  const [filter, setFilter] = useState('All')
  const visible = filter === 'All' ? projects : projects.filter((p) => p.category === filter)

  return (
    <main>
      <section className="page-hero">
        <div className="page-hero-top container">
          <h1 className="t-display page-hero-title">Projects.</h1>
        </div>
        <p className="page-hero-lede container">
          A curated selection of projects showcasing design expertise, creative problem-solving, &amp; client outcomes.
        </p>

        <div className="projects-filters container">
          {filters.map((f) => (
            <button
              key={f}
              className={`projects-filter${filter === f ? ' is-active' : ''}`}
              onClick={() => setFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="projects-grid container">
          {visible.map((p) => (
            <article key={p.slug} className="projects-grid-item">
              <div className="projects-grid-image">
                <img src={p.image} alt={p.name} loading="lazy" />
                <span className="project-chip">{p.category}</span>
              </div>
              <p className="projects-grid-name">{p.name}</p>
            </article>
          ))}
        </div>
      </section>
      <ContactCta />
    </main>
  )
}
