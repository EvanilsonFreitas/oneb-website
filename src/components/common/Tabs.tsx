import { useState, type ReactNode } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

export interface TabItem {
  id: string
  label: string
  icon?: ReactNode
  content: ReactNode
}

interface TabsProps {
  tabs: TabItem[]
  /** Accent color for the active indicator. Default primary teal. */
  accentClassName?: string
  /** Text color for the active tab label — must stay readable against `accentClassName`. Default pure black (for the green accent). */
  activeTextClassName?: string
  className?: string
}

/**
 * Animated, accessible tab navigation with a sliding active indicator
 * (shared layout via framer-motion's layoutId).
 */
export function Tabs({
  tabs,
  accentClassName,
  activeTextClassName = 'text-black',
  className,
}: TabsProps) {
  const [active, setActive] = useState(tabs[0]?.id)
  const activeTab = tabs.find((t) => t.id === active) ?? tabs[0]

  return (
    <div className={className}>
      <div
        role="tablist"
        className="no-scrollbar flex gap-1 overflow-x-auto rounded-xl border border-white/10 bg-neutral-950/60 p-1.5"
      >
        {tabs.map((tab) => {
          const isActive = tab.id === active
          return (
            <button
              key={tab.id}
              role="tab"
              aria-selected={isActive}
              onClick={() => setActive(tab.id)}
              className={cn(
                'relative flex shrink-0 items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium whitespace-nowrap transition-colors',
                isActive
                  ? activeTextClassName
                  : 'text-neutral-400 hover:text-white',
              )}
            >
              {isActive && (
                <motion.span
                  layoutId="onebi-tab-indicator"
                  transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                  className={cn(
                    'bg-primary-500 absolute inset-0 rounded-lg',
                    accentClassName,
                  )}
                />
              )}
              <span className="relative z-10 flex items-center gap-2">
                {tab.icon}
                {tab.label}
              </span>
            </button>
          )
        })}
      </div>

      <motion.div
        key={activeTab?.id}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25 }}
        role="tabpanel"
        className="mt-8"
      >
        {activeTab?.content}
      </motion.div>
    </div>
  )
}
