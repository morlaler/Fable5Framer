import { awards } from '../data/site'
import './Awards.css'

export default function Awards() {
  return (
    <section className="awards">
      <div className="awards-header container">
        <h2 className="t-display">Awards.</h2>
      </div>

      <div className="awards-list container">
        {awards.map((award) => (
          <div key={award.number} className="award-row">
            <span className="award-number">{award.number}</span>
            <div className="award-main">
              <span className="award-icon">
                <img src={award.icon} alt="" loading="lazy" />
              </span>
              <p className="award-name">{award.name}</p>
            </div>
            <p className="award-subtitle">{award.subtitle}</p>
            <div className="award-chips">
              <span className="award-chip award-chip--year">{award.year}</span>
              <span className="award-chip award-chip--count">{award.count}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
