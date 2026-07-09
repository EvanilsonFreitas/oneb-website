import { type ReactNode } from 'react'
import { motion, type HTMLMotionProps } from 'framer-motion'
import { cn } from '@/lib/utils'

interface GlowButtonProps extends Omit<HTMLMotionProps<'button'>, 'children'> {
  children?: ReactNode
  variant?: 'primary' | 'secondary' | 'outline' | 'glass'
  glow?: boolean
  fullWidth?: boolean
}

export function GlowButton({
  children,
  className,
  variant = 'primary',
  glow = true,
  fullWidth = false,
  ...props
}: GlowButtonProps) {
  const getStyles = () => {
    switch (variant) {
      case 'primary':
        return 'bg-primary-500 hover:bg-primary-400 text-black font-semibold shadow-lg hover:shadow-primary-500/20'
      case 'secondary':
        return 'bg-secondary-600 hover:bg-secondary-500 text-white font-medium shadow-md shadow-secondary-900/10'
      case 'outline':
        return 'border border-primary-500/40 hover:border-primary-500 hover:bg-primary-500/10 text-primary-400 font-medium'
      case 'glass':
        return 'bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium backdrop-blur-md'
      default:
        return ''
    }
  }

  return (
    <motion.button
      whileHover={{ scale: 1.02, y: -1 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        'group focus:ring-primary-500/50 relative inline-flex cursor-pointer items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm transition-all focus:ring-2 focus:outline-none disabled:pointer-events-none disabled:opacity-50',
        getStyles(),
        fullWidth && 'w-full',
        className,
      )}
      {...props}
    >
      {/* Outer glow background element for premium aesthetic */}
      {glow && (variant === 'primary' || variant === 'secondary') && (
        <div
          className={cn(
            'absolute -inset-0.5 -z-10 rounded-xl opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-60',
            variant === 'primary' && 'bg-primary-500',
            variant === 'secondary' && 'bg-secondary-500',
          )}
        />
      )}
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
    </motion.button>
  )
}
