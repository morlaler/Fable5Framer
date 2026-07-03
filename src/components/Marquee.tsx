import { ReactNode } from 'react'
import './Marquee.css'

interface MarqueeProps {
  children: ReactNode
  /** Seconds for one full loop */
  speed?: number
  reverse?: boolean
  gap?: number
}

/** Infinite horizontal marquee. Content is duplicated to loop seamlessly. */
export default function Marquee({ children, speed = 30, reverse = false, gap = 24 }: MarqueeProps) {
  return (
    <div className="marquee" style={{ ['--marquee-gap' as string]: `${gap}px` }}>
      {[0, 1].map((i) => (
        <div
          key={i}
          aria-hidden={i === 1}
          className={`marquee-track${reverse ? ' marquee-track--reverse' : ''}`}
          style={{ animationDuration: `${speed}s` }}
        >
          {children}
        </div>
      ))}
    </div>
  )
}
