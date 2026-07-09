import { useEffect, useRef, useState } from 'react'
import { useInView, animate } from 'framer-motion'

interface CountUpProps {
  /** Target value with its suffix baked in, e.g. "100M+", "99.9%", "18% +". */
  value: string
  duration?: number
}

/**
 * Animates a stat number counting up from 0 to its target value once it
 * scrolls into view. Parses the leading numeric portion of `value` (keeping
 * its decimal precision) and re-attaches whatever suffix follows it.
 */
export function CountUp({ value, duration = 1.8 }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const match = value.match(/^([\d.,]+)(.*)$/)
  const numeric = match ? match[1] : '0'
  const suffix = match ? match[2] : ''
  const target = parseFloat(numeric.replace(',', '.'))
  const decimals = numeric.includes('.') ? numeric.split('.')[1].length : 0
  const [display, setDisplay] = useState(() => (0).toFixed(decimals))

  useEffect(() => {
    if (!isInView || Number.isNaN(target)) return
    const controls = animate(0, target, {
      duration,
      ease: 'easeOut',
      onUpdate: (latest) => setDisplay(latest.toFixed(decimals)),
    })
    return () => controls.stop()
  }, [isInView, target, duration, decimals])

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  )
}
