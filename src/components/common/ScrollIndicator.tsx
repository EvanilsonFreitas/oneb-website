interface ScrollIndicatorProps {
  className?: string
}

/**
 * Classic "scroll mouse" affordance: a pill-shaped outline with a dot that
 * slides down and fades, looped, plus a gentle bob on the whole icon.
 * Clicking scrolls down roughly one viewport height.
 */
export function ScrollIndicator({ className }: ScrollIndicatorProps) {
  const handleClick = () => {
    window.scrollTo({ top: window.innerHeight * 0.85, behavior: 'smooth' })
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label="Rolar para baixo"
      className={`onebi-float-bob cursor-pointer ${className ?? ''}`}
    >
      <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-white/25 p-1.5">
        <div className="onebi-scroll-dot bg-primary-400 h-1.5 w-1.5 shrink-0 rounded-full" />
      </div>
    </button>
  )
}
