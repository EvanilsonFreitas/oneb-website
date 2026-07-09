import React, { useRef, useState } from 'react'
import { cn } from '@/lib/utils'

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  glowColor?: string // e.g. "rgba(62, 240, 170, 0.15)"
  interactive?: boolean
}

export function GlassCard({
  children,
  className,
  glowColor = 'rgba(126, 87, 225, 0.15)', // Default is secondary (violet)
  interactive = true,
  ...props
}: GlassCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [coords, setCoords] = useState({ x: 0, y: 0 })
  const [isFocused, setIsFocused] = useState(false)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || !interactive) return
    const rect = cardRef.current.getBoundingClientRect()
    setCoords({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsFocused(true)}
      onMouseLeave={() => setIsFocused(false)}
      className={cn(
        'relative overflow-hidden rounded-2xl border border-white/8 bg-neutral-950/40 p-6 backdrop-blur-xl transition-all duration-300',
        interactive &&
          'hover:border-white/15 hover:shadow-[0_8px_30px_rgb(0,0,0,0.5)]',
        className,
      )}
      {...props}
    >
      {interactive && isFocused && (
        <div
          className="pointer-events-none absolute -inset-px transition-opacity duration-300"
          style={{
            background: `radial-gradient(400px circle at ${coords.x}px ${coords.y}px, ${glowColor}, transparent 80%)`,
            opacity: 1,
          }}
        />
      )}
      {/* Visual content container to stay above the absolute glow background */}
      <div className="relative z-10">{children}</div>
    </div>
  )
}
