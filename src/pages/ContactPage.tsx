import { FormEvent, useState } from 'react'
import Faq from '../sections/Faq'
import './pages.css'

export default function ContactPage() {
  const [sent, setSent] = useState(false)

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <main>
      <section className="page-hero">
        <div className="page-hero-top container">
          <h1 className="t-display page-hero-title">Contact.</h1>
          <div className="page-hero-side">
            <p className="page-hero-count">100+</p>
            <p className="page-hero-note">Satisfied clients</p>
          </div>
        </div>

        <div className="contact-layout container">
          <div className="contact-photo">
            <img src="/assets/images/contact-1.jpg" alt="Studio portrait" loading="lazy" />
          </div>

          <form className="contact-form" onSubmit={onSubmit}>
            <div className="contact-field">
              <label htmlFor="name">Name</label>
              <input id="name" name="name" type="text" placeholder="Your name" required />
            </div>
            <div className="contact-field">
              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" placeholder="name@company.com" required />
            </div>
            <div className="contact-field">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows={5} placeholder="Tell us about your project" required />
            </div>
            <button type="submit" className="btn btn--green contact-submit">
              {sent ? 'Message sent ✓' : 'Send Message'}
            </button>
          </form>
        </div>
      </section>
      <Faq />
    </main>
  )
}
