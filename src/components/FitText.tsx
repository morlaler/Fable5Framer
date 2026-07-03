import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react'

interface FitTextProps {
  text: string
  className?: string
  /** Extra scale multiplier (1 = exact fit) */
  scale?: number
}

/**
 * Scales a single line of text so it always spans the full width of its
 * container (Framer-style fit-text).
 */
export default function FitText({ text, className, scale = 1 }: FitTextProps) {
  const wrapRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLSpanElement>(null)
  const [fontSize, setFontSize] = useState(100)

  const fit = useCallback(() => {
    const wrap = wrapRef.current
    const span = textRef.current
    if (!wrap || !span) return
    const rendered = span.getBoundingClientRect().width
    const current = parseFloat(getComputedStyle(span).fontSize)
    if (rendered > 0 && current > 0 && wrap.clientWidth > 0) {
      const next = (wrap.clientWidth / rendered) * current * scale
      setFontSize((prev) => (Math.abs(prev - next) > 0.5 ? next : prev))
    }
  }, [scale])

  useLayoutEffect(() => {
    fit()
  }, [fit, fontSize])

  useEffect(() => {
    const ro = new ResizeObserver(() => fit())
    if (wrapRef.current) ro.observe(wrapRef.current)
    document.fonts?.ready.then(fit)
    return () => ro.disconnect()
  }, [fit])

  return (
    <div ref={wrapRef} className={className} style={{ width: '100%', overflow: 'hidden' }}>
      <span
        ref={textRef}
        style={{
          display: 'inline-block',
          fontSize,
          lineHeight: 0.9,
          whiteSpace: 'nowrap',
        }}
      >
        {text}
      </span>
    </div>
  )
}
