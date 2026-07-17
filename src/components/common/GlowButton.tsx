import { type ReactNode } from 'react'
import { motion, type HTMLMotionProps } from 'framer-motion'
import { Loader2 } from 'lucide-react'
import { cn } from '@/lib/utils'

/**
 * Botão global do Design System OneB — TODO botão do site usa este componente.
 *
 * Regras obrigatórias (não sobrescrever nos call-sites):
 * - Verde da marca sempre com texto #000000 (`text-black`).
 * - Tamanho, padding e border-radius únicos para todos os botões.
 * - Estados: normal, hover, active, disabled e loading.
 *
 * `variant="secondary"` é um alias legado de `primary` — não existe botão
 * verde com outra cor de texto.
 */
interface GlowButtonProps extends Omit<HTMLMotionProps<'button'>, 'children'> {
  children?: ReactNode
  variant?: 'primary' | 'secondary' | 'outline' | 'glass'
  glow?: boolean
  fullWidth?: boolean
  loading?: boolean
}

export function GlowButton({
  children,
  className,
  variant = 'primary',
  glow = true,
  fullWidth = false,
  loading = false,
  disabled,
  ...props
}: GlowButtonProps) {
  const isPrimary = variant === 'primary' || variant === 'secondary'

  const getStyles = () => {
    if (isPrimary) {
      // Verde da marca + texto preto obrigatório.
      return 'bg-primary-500 hover:bg-primary-400 active:bg-primary-600 text-black font-semibold shadow-lg hover:shadow-primary-500/20'
    }
    switch (variant) {
      case 'outline':
        return 'border border-primary-500/40 hover:border-primary-500 hover:bg-primary-500/10 active:bg-primary-500/15 text-primary-400 font-semibold'
      case 'glass':
        return 'bg-white/5 hover:bg-white/10 active:bg-white/15 border border-white/10 text-white font-semibold backdrop-blur-md'
      default:
        return ''
    }
  }

  const isDisabled = disabled || loading

  return (
    <motion.button
      whileHover={isDisabled ? undefined : { scale: 1.02, y: -1 }}
      whileTap={isDisabled ? undefined : { scale: 0.98 }}
      disabled={isDisabled}
      aria-busy={loading || undefined}
      className={cn(
        // Dimensões padronizadas do Design System — iguais em todo o site.
        'group focus-visible:ring-primary-500/50 relative inline-flex h-12 cursor-pointer items-center justify-center gap-2 rounded-xl px-6 text-sm transition-all focus:outline-none focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50',
        getStyles(),
        fullWidth && 'w-full',
        className,
      )}
      {...props}
    >
      {/* Outer glow background element for premium aesthetic */}
      {glow && isPrimary && !isDisabled && (
        <div className="bg-primary-500 absolute -inset-0.5 -z-10 rounded-xl opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-60" />
      )}
      <span className="relative z-10 flex items-center justify-center gap-2">
        {loading && <Loader2 className="h-4 w-4 animate-spin" />}
        {children}
      </span>
    </motion.button>
  )
}
