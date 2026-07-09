import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Check } from 'lucide-react'
import { GlassCard } from '@/components/common/GlassCard'
import { GlowButton } from '@/components/common/GlowButton'
import { solutionIllustrations } from '@/components/common/illustrations/SolutionIllustrations'
import { solutionsData } from '@/constants/mockData'

const accentStyles = {
  primary: {
    text: 'text-primary-400',
    bgSoft: 'bg-primary-500/10',
    border: 'border-primary-500/20',
    glow: 'rgba(62, 240, 170, 0.14)',
  },
  secondary: {
    text: 'text-secondary-400',
    bgSoft: 'bg-secondary-500/10',
    border: 'border-secondary-500/20',
    glow: 'rgba(62, 240, 170, 0.16)',
  },
} as const

export function Solutions() {
  return (
    <div className="relative pb-24">
      {/* 1. HERO HEADER */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-[7.5%]">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center"
          >
            <div className="border-primary-500/20 bg-primary-500/5 text-primary-400 mb-4 inline-flex items-center gap-2 rounded-full border px-4 py-1 text-xs font-semibold tracking-wider uppercase">
              Serviços Corporativos
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">
              Nossas Soluções de{' '}
              <span className="text-primary-500">Ponta a Ponta</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-neutral-400 md:text-lg">
              Da infraestrutura de dados à decisão na diretoria. Cada solução é
              desenhada sob medida, com metodologia própria, resultados
              mensuráveis e a tecnologia certa para o seu contexto.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. ZIG-ZAG SOLUTIONS */}
      <section className="py-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-24 px-6 lg:px-[7.5%]">
          {solutionsData.map((sol, idx) => {
            const accent = accentStyles[sol.accent]
            const Illustration = solutionIllustrations[sol.illustration]
            const reversed = idx % 2 === 1
            return (
              <motion.div
                key={sol.slug}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6 }}
                className={`grid grid-cols-1 items-center gap-10 lg:grid-cols-2 ${
                  reversed ? 'lg:[&>*:first-child]:order-2' : ''
                }`}
              >
                {/* Text side */}
                <div>
                  <span
                    className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[11px] font-semibold tracking-wider uppercase ${accent.border} ${accent.bgSoft} ${accent.text}`}
                  >
                    0{idx + 1} — Solução
                  </span>
                  <h2 className="mt-4 text-2xl font-extrabold tracking-tight text-white md:text-3xl">
                    {sol.title}
                  </h2>
                  <p className="mt-2 text-base font-medium text-neutral-300">
                    {sol.tagline}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-neutral-400">
                    {sol.description}
                  </p>

                  {/* Mini metrics */}
                  <div className="mt-6 flex flex-wrap gap-6">
                    {sol.metrics.map((metric) => (
                      <div key={metric.label}>
                        <p className={`text-xl font-extrabold ${accent.text}`}>
                          {metric.value}
                        </p>
                        <p className="mt-0.5 max-w-[130px] text-[11px] leading-tight text-neutral-500">
                          {metric.label}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Top benefits */}
                  <div className="mt-6 flex flex-col gap-2.5">
                    {sol.benefits.slice(0, 3).map((benefit) => (
                      <div key={benefit} className="flex items-start gap-2.5">
                        <Check
                          className={`mt-0.5 h-4 w-4 shrink-0 ${accent.text}`}
                        />
                        <span className="text-sm text-neutral-300">
                          {benefit}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8">
                    <Link to={`/solucoes/${sol.slug}`}>
                      <GlowButton
                        variant={
                          sol.accent === 'primary' ? 'primary' : 'secondary'
                        }
                        className="px-6 py-3"
                      >
                        Explorar Solução <ArrowRight className="h-4 w-4" />
                      </GlowButton>
                    </Link>
                  </div>
                </div>

                {/* Illustration side */}
                <div className="relative">
                  <div
                    className="pointer-events-none absolute inset-0 -z-10 rounded-3xl blur-[90px]"
                    style={{ background: accent.glow }}
                  />
                  <GlassCard
                    className="overflow-hidden border-white/10 p-0"
                    interactive={false}
                    glowColor={accent.glow}
                  >
                    <Illustration className="h-auto w-full" />
                  </GlassCard>
                  <div className="mt-4 flex flex-wrap justify-center gap-2">
                    {sol.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="rounded-lg border border-white/5 bg-white/5 px-2.5 py-1 text-[11px] font-medium text-neutral-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </section>

      {/* 3. CTA */}
      <section className="mt-20 border-t border-white/5 py-20">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-[7.5%]">
          <h3 className="text-2xl font-extrabold tracking-tight text-white md:text-3xl">
            Não sabe por onde começar?
          </h3>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-neutral-400">
            Nosso diagnóstico gratuito identifica qual solução gera o maior
            impacto para o seu momento — sem compromisso.
          </p>
          <div className="mt-8">
            <Link to="/contato">
              <GlowButton variant="primary" className="px-8 py-3">
                Agendar Diagnóstico Gratuito <ArrowRight className="h-4 w-4" />
              </GlowButton>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
export default Solutions
