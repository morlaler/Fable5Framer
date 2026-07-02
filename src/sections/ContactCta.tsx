import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './ContactCta.css'

const words = ['Website?', 'Branding?', 'UI/UX?', 'SEO?', 'Development?']

export default function ContactCta() {
  const [wordIndex, setWordIndex] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const word = words[wordIndex]
    const timeout = setTimeout(
      () => {
        if (!deleting) {
          const next = word.slice(0, text.length + 1)
          setText(next)
          if (next === word) setTimeout(() => setDeleting(true), 1400)
        } else {
          const next = word.slice(0, text.length - 1)
          setText(next)
          if (next === '') {
            setDeleting(false)
            setWordIndex((i) => (i + 1) % words.length)
          }
        }
      },
      deleting ? 55 : 95,
    )
    return () => clearTimeout(timeout)
  }, [text, deleting, wordIndex])

  return (
    <div className="contact-cta-wrap">
      <div className="contact-cta">
        <p className="contact-cta-text">
          Need {text}
          <span className="contact-cta-caret" />
        </p>
        <Link to="/contact" className="contact-cta-btn">
          Contact us
        </Link>
      </div>
    </div>
  )
}
