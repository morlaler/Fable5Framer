import { Link } from 'react-router-dom'
import SectionDivider from '../components/SectionDivider'
import { pricingQuote, pricingPlans } from '../data/site'
import './Pricing.css'

export default function Pricing() {
  return (
    <section className="pricing">
      <SectionDivider label="Pricing" />

      <div className="pricing-header container">
        <h2 className="t-display">Pricing.</h2>
      </div>

      <div className="pricing-quote container">
        <div className="pricing-quote-author">
          <img src={pricingQuote.image} alt={pricingQuote.name} loading="lazy" />
          <div>
            <p className="pricing-quote-name">{pricingQuote.name}</p>
            <p className="pricing-quote-role">{pricingQuote.role}</p>
          </div>
        </div>
        <p className="pricing-quote-text">{pricingQuote.quote}</p>
      </div>

      <div className="pricing-grid container">
        {pricingPlans.map((plan) => (
          <article key={plan.name} className={`pricing-card${plan.featured ? ' pricing-card--featured' : ''}`}>
            <div className="pricing-card-top">
              <h3 className="pricing-card-name">{plan.name}</h3>
              <p className="pricing-card-desc">{plan.description}</p>
              <div className="pricing-card-price">
                <span className="pricing-card-amount">{plan.price}</span>
                <span className="pricing-card-period">/ Month</span>
              </div>
              <Link to="/contact" className={`btn ${plan.featured ? 'btn--white' : 'btn--green'} pricing-card-cta`}>
                {plan.cta}
              </Link>
            </div>
            <div className="pricing-card-includes">
              <p className="pricing-card-includes-title">What’s included</p>
              <ul>
                {plan.includes.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
