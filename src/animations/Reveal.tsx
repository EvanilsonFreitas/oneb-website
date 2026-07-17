import { useRef, type ReactNode } from 'react'
import {
  motion,
  useScroll,
  useTransform,
  type HTMLMotionProps,
  type Variants,
} from 'framer-motion'

/**
 * Padrão global de animação do site OneB.
 *
 * Regras do projeto:
 * - Toda seção nova deve entrar no viewport com um Reveal (fade + slide).
 * - As animações REEXECUTAM sempre que o elemento volta a entrar no viewport
 *   (viewport.once = false) — rolar para cima e para baixo repete o efeito.
 * - Elementos decorativos/imagens de seção devem usar Parallax sutil.
 */
export type RevealDirection =
  'up' | 'down' | 'left' | 'right' | 'none' | 'scale'

/** Viewport padrão: replay a cada entrada no viewport. */
export const revealViewport = { once: false, margin: '-80px' } as const

const buildVariants = (
  direction: RevealDirection,
  duration: number,
  delay: number,
): Variants => ({
  hidden: {
    opacity: 0,
    y: direction === 'up' ? 32 : direction === 'down' ? -32 : 0,
    x: direction === 'left' ? 32 : direction === 'right' ? -32 : 0,
    scale: direction === 'scale' ? 0.94 : 1,
  },
  show: {
    opacity: 1,
    y: 0,
    x: 0,
    scale: 1,
    transition: { type: 'tween', duration, delay, ease: [0.22, 0.61, 0.36, 1] },
  },
})

interface RevealProps extends HTMLMotionProps<'div'> {
  children?: ReactNode
  direction?: RevealDirection
  delay?: number
  duration?: number
  /** Quando true, anima só os filhos com stagger (use <RevealItem/> dentro). */
  stagger?: number
}

/** Bloco que revela ao entrar no viewport — reexecuta a cada passagem. */
export function Reveal({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.6,
  stagger,
  ...props
}: RevealProps) {
  const variants: Variants = stagger
    ? {
        hidden: {},
        show: {
          transition: { staggerChildren: stagger, delayChildren: delay },
        },
      }
    : buildVariants(direction, duration, delay)

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={revealViewport}
      variants={variants}
      {...props}
    >
      {children}
    </motion.div>
  )
}

/** Item filho de um <Reveal stagger={...}> — herda o timing do pai. */
export function RevealItem({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.55,
  ...props
}: RevealProps) {
  return (
    <motion.div variants={buildVariants(direction, duration, delay)} {...props}>
      {children}
    </motion.div>
  )
}

interface ParallaxProps {
  children?: ReactNode
  className?: string
  /**
   * Intensidade do deslocamento em px enquanto o elemento cruza o viewport.
   * Positivo = move mais devagar que o scroll (fundo); negativo = mais rápido.
   */
  offset?: number
}

/** Parallax vertical sutil ligado ao scroll da página. */
export function Parallax({ children, className, offset = 48 }: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], [offset, -offset])

  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  )
}
