import { Link } from 'react-router-dom'
import FitText from './FitText'
import './Footer.css'

const menu = [
  { label: 'Home', to: '/' },
  { label: 'Studio', to: '/studio' },
  { label: 'projects', to: '/projects' },
  { label: 'Blog', to: '/blog' },
  { label: 'Contact', to: '/contact' },
]

const social = [
  { label: 'Twitter / X', href: 'https://x.com/ImDannydo' },
  { label: 'Instagram', href: 'https://instagram.com' },
  { label: 'Dribbble', href: 'https://dribbble.com' },
]

export default function Footer() {
  const backToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-media">
          <img src="/assets/images/footer-gummy.jpg" alt="Gummy bears floating in a blue sky" loading="lazy" />
          <button className="btn btn--black footer-backtop" onClick={backToTop}>
            Back to top
          </button>
        </div>

        <div className="footer-cols">
          <div className="footer-col">
            <p className="footer-col-title">Menu</p>
            <ul>
              {menu.map((m) => (
                <li key={m.label}>
                  <Link to={m.to}>{m.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer-col">
            <p className="footer-col-title">Social Media</p>
            <ul>
              {social.map((s) => (
                <li key={s.label}>
                  <a href={s.href} target="_blank" rel="noreferrer">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <FitText text="MATTTER®" className="footer-wordmark" />

      <div className="footer-bottom">
        <a href="https://x.com/ImDannydo" target="_blank" rel="noreferrer" className="footer-credit">
          Created by <span className="footer-credit-dot" /> Danny
        </a>
        <div className="footer-legal">
          <Link to="/">Privacy Policy</Link>
          <Link to="/">Terms of Service</Link>
        </div>
        <a href="https://framer.com" target="_blank" rel="noreferrer" className="footer-framer">
          Built in Framer
        </a>
        <span className="footer-copy">© 2025</span>
      </div>
    </footer>
  )
}
