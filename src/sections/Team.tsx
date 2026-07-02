import { Link } from 'react-router-dom'
import SectionDivider from '../components/SectionDivider'
import Marquee from '../components/Marquee'
import { team } from '../data/site'
import './Team.css'

const tilts = [-5, 4, -3, 5]

export default function Team() {
  return (
    <section className="team">
      <SectionDivider label="Team" />

      <div className="team-header container">
        <h2 className="t-display">Our Team.</h2>
        <Link to="/contact" className="btn btn--green">
          Join the team
        </Link>
      </div>

      <div className="team-marquee">
        <Marquee speed={26} gap={56}>
          {team.map((member, i) => (
            <article className="team-card" key={member.name} style={{ transform: `rotate(${tilts[i % tilts.length]}deg)` }}>
              <div className="team-photo">
                <img src={member.image} alt={member.name} loading="lazy" />
                <span className="team-chip">{member.department}</span>
              </div>
              <div className="team-meta">
                <p className="team-name">{member.name}</p>
                <p className="team-role">{member.role}</p>
              </div>
            </article>
          ))}
        </Marquee>
      </div>
    </section>
  )
}
