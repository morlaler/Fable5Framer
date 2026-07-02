import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import FlowerIcon from './FlowerIcon'
import './Navbar.css'

const links = [
  { to: '/studio', label: 'Studio' },
  { to: '/projects', label: 'Projects', sup: '07' },
  { to: '/blog', label: 'Blog' },
]

export default function Navbar() {
  const [collapsed, setCollapsed] = useState(false)
  const [hovered, setHovered] = useState(false)

  useEffect(() => {
    let lastY = window.scrollY
    const onScroll = () => {
      const y = window.scrollY
      setCollapsed(y > 80 && y > lastY)
      if (y <= 80) setCollapsed(false)
      lastY = y
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const isOpen = !collapsed || hovered

  return (
    <header className="nav-wrap">
      <motion.nav
        layout
        className="nav-pill"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        transition={{ duration: 0.45, ease: [0.25, 1, 0.5, 1] }}
      >
        <Link to="/" className="nav-logo" aria-label="MATTTER — home">
          <FlowerIcon size={17} color="#fff" />
          <span>MATTTER®</span>
        </Link>

        <AnimatePresence initial={false} mode="popLayout">
          {isOpen ? (
            <motion.div
              key="links"
              className="nav-links"
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: 'auto' }}
              exit={{ opacity: 0, width: 0 }}
              transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
            >
              {links.map((l) => (
                <NavLink key={l.to} to={l.to} className="nav-link">
                  {l.label}
                  {l.sup && <sup>{l.sup}</sup>}
                </NavLink>
              ))}
              <NavLink to="/contact" className="btn btn--green nav-contact">
                Contact
              </NavLink>
            </motion.div>
          ) : (
            <motion.button
              key="dots"
              className="nav-dots"
              aria-label="Open menu"
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: 'auto' }}
              exit={{ opacity: 0, width: 0 }}
              transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
              onClick={() => setHovered(true)}
            >
              <span className="nav-dot" />
              <span className="nav-dot nav-dot--bar" />
              <span className="nav-dot" />
            </motion.button>
          )}
        </AnimatePresence>
      </motion.nav>
    </header>
  )
}
