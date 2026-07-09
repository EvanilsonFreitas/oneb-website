import type { ReactNode } from 'react'
import { motion } from 'framer-motion'

interface PageTransitionProps {
  pathname: string
  children: ReactNode
}

/**
 * Enter-only page transition keyed on the route.
 *
 * We deliberately avoid `AnimatePresence` + `exit` here: combined with lazy
 * routes and Suspense, the presence machinery could strand the incoming page
 * in its exit state (opacity 0) — a fully black screen. Keying a plain
 * `motion.div` on the pathname forces a clean remount, so the enter animation
 * always replays from scratch and can never get stuck.
 */
export function PageTransition({ pathname, children }: PageTransitionProps) {
  return (
    <motion.div
      key={pathname}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
    >
      {children}
    </motion.div>
  )
}
