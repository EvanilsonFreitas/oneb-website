import { useEffect, useRef, useState } from 'react'
import { useInView, animate } from 'framer-motion'

interface CountUpProps {
  /** Target value with prefix/suffix baked in, e.g. "100M+", "99.9%", "+50", "<2s", "24/7". */
  value: string
  duration?: number
}

/**
 * Animates a stat number counting up from 0 to its target value whenever it
 * scrolls into view — the count replays on every viewport re-entry, following
 * the global animation rule of the project.
 *
 * Parses `value` as [prefixo][número][sufixo] (ex.: "+50", "<2s", "99.9%",
 * "24/7"); se não houver parte numérica, renderiza o texto como está.
 */
export function CountUp({ value, duration = 1.8 }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: false, margin: '-100px' })
  const match = value.match(/^([^\d]*)(\d[\d.,]*)(.*)$/)
  const prefix = match ? match[1] : ''
  const numeric = match ? match[2] : ''
  const suffix = match ? match[3] : ''
  const target = parseFloat(numeric.replace(',', '.'))
  const decimals = numeric.includes('.') ? numeric.split('.')[1].length : 0
  const hasNumber = !!match && !Number.isNaN(target)
  const [display, setDisplay] = useState(() => (0).toFixed(decimals))

  useEffect(() => {
    if (!hasNumber) return
    // Fora do viewport: volta a 0 para o replay; dentro: conta de 0 ao alvo.
    const controls = animate(0, isInView ? target : 0, {
      duration: isInView ? duration : 0,
      ease: 'easeOut',
      onUpdate: (latest) => setDisplay(latest.toFixed(decimals)),
    })
    return () => controls.stop()
  }, [isInView, target, duration, decimals, hasNumber])

  // Sem parte numérica (ex.: "N/A"): renderiza o texto como está.
  if (!hasNumber) {
    return <span ref={ref}>{value}</span>
  }

  return (
    <span ref={ref}>
      {prefix}
      {display}
      {suffix}
    </span>
  )
}
