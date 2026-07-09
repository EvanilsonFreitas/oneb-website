import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, Home } from 'lucide-react'
import { GlowButton } from '@/components/common/GlowButton'
import { IllustrationAstronaut } from '@/components/common/illustrations/SpaceIllustrations'

export function NotFound() {
  return (
    <div className="relative flex min-h-[70vh] items-center justify-center overflow-hidden py-20">
      {/* Background glowing shape */}
      <div className="bg-secondary-500/10 absolute top-1/2 left-1/2 -z-10 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full blur-[80px]" />

      <div className="mx-auto max-w-xl px-6 text-center lg:px-[7.5%]">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center"
        >
          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="mb-2 h-40 w-40"
          >
            <IllustrationAstronaut className="h-full w-full" />
          </motion.div>

          <h1 className="text-6xl font-extrabold tracking-tight text-white md:text-8xl">
            404
          </h1>

          <h2 className="mt-6 text-xl font-bold text-white md:text-2xl">
            Perdido no Espaço de Dados
          </h2>

          <p className="mt-4 text-xs leading-relaxed text-neutral-400 md:text-sm">
            A consulta analítica ou o relatório que você está tentando acessar
            não pôde ser localizado em nossa base histórica. Ele pode ter sido
            movido, renomeado ou arquivado.
          </p>

          <div className="mt-10 flex w-full flex-col justify-center gap-4 sm:flex-row">
            <Link to="/" className="w-full sm:w-auto">
              <GlowButton
                variant="primary"
                className="w-full px-6 py-2.5 text-xs font-semibold sm:w-auto"
              >
                <Home className="h-4 w-4" /> Voltar ao Início
              </GlowButton>
            </Link>
            <Link to="/solucoes" className="w-full sm:w-auto">
              <GlowButton
                variant="glass"
                className="w-full px-6 py-2.5 text-xs font-semibold sm:w-auto"
              >
                <ArrowLeft className="h-4 w-4" /> Ver Soluções
              </GlowButton>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
export default NotFound
