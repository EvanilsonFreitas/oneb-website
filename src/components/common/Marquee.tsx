import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface MarqueeProps {
  children: ReactNode
  /** Seconds for one full loop. Lower = faster. Default 40. */
  durationSeconds?: number
  /** Reverse the scroll direction. */
  reverse?: boolean
  /** Pause the animation while hovered. Default true. */
  pauseOnHover?: boolean
  /** Fade the left/right edges into the background. Default true. */
  fade?: boolean
  className?: string
  /** Extra classes for the gap between items inside the track. */
  itemClassName?: string
}

/**
 * Seamless infinite horizontal marquee.
 *
 * Renders the children twice back-to-back and translates the track by -50%,
 * so the loop is perfectly continuous. Respects `prefers-reduced-motion`
 * (animation is disabled) and can pause on hover.
 */
export function Marquee({
  children,
  durationSeconds = 40,
  reverse = false,
  pauseOnHover = true,
  fade = true,
  className,
  itemClassName,
}: MarqueeProps) {
  return (
    <div
      className={cn(
        'onebi-marquee group relative w-full overflow-hidden',
        className,
      )}
    >
      {fade && (
        <>
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-black to-transparent sm:w-28" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-black to-transparent sm:w-28" />
        </>
      )}
      <div
        className={cn(
          'onebi-marquee-track',
          reverse && 'onebi-marquee-reverse',
        )}
        data-pause={pauseOnHover ? 'true' : 'false'}
        style={{ ['--marquee-duration' as string]: `${durationSeconds}s` }}
      >
        <div className={cn('flex shrink-0 items-center', itemClassName)}>
          {children}
        </div>
        <div
          className={cn('flex shrink-0 items-center', itemClassName)}
          aria-hidden="true"
        >
          {children}
        </div>
      </div>
    </div>
  )
}
