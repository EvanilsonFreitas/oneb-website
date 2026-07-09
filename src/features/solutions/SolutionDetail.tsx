import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  ArrowLeft,
  ArrowRight,
  Check,
  ChevronDown,
  HelpCircle,
  Layers,
  ListChecks,
  PlayCircle,
  Rocket,
  Sparkles,
  Target,
} from 'lucide-react'
import { blogService } from '@/services/blogService'
import { solutionsData, type Solution } from '@/constants/mockData'
import { GlassCard } from '@/components/common/GlassCard'
import { GlowButton } from '@/components/common/GlowButton'
import { Tabs, type TabItem } from '@/components/common/Tabs'
import { Breadcrumb } from '@/components/navigation/Breadcrumb'
import { Modal } from '@/components/feedback/Modal'
import { DetailSkeleton } from '@/components/feedback/Skeleton'
import { solutionIllustrations } from '@/components/common/illustrations/SolutionIllustrations'

const accentStyles = {
  primary: {
    text: 'text-primary-400',
    bgSoft: 'bg-primary-500/10',
    border: 'border-primary-500/20',
    dot: 'bg-primary-500',
    tab: 'bg-primary-500',
    tabText: 'text-black',
    glow: 'rgba(62, 240, 170, 0.15)',
    check: 'bg-primary-500/10 text-primary-400',
  },
  secondary: {
    text: 'text-secondary-400',
    bgSoft: 'bg-secondary-500/10',
    border: 'border-secondary-500/20',
    dot: 'bg-secondary-500',
    tab: 'bg-secondary-500',
    tabText: 'text-white',
    glow: 'rgba(126, 87, 225, 0.18)',
    check: 'bg-secondary-500/10 text-secondary-400',
  },
} as const

export function SolutionDetail() {
  const { slug } = useParams<{ slug: string }>()
  const [solution, setSolution] = useState<Solution | null>(null)
  const [loading, setLoading] = useState(true)
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0)
  const [exampleOpen, setExampleOpen] = useState(false)

  useEffect(() => {
    async function fetchSolution() {
      if (!slug) return
      setLoading(true)
      try {
        const data = await blogService.getSolutionBySlug(slug)
        setSolution(data)
      } catch (err) {
        console.error('Erro ao buscar solução:', err)
      } finally {
        setLoading(false)
      }
    }
    void fetchSolution()
  }, [slug])

  if (loading) {
    return <DetailSkeleton />
  }

  if (!solution) {
    return (
      <div className="mx-auto max-w-7xl px-6 py-32 text-center lg:px-[7.5%]">
        <h2 className="text-2xl font-bold text-white">
          Solução não encontrada
        </h2>
        <p className="mt-2 text-neutral-400">
          O serviço que você procura não está disponível ou foi movido.
        </p>
        <Link
          to="/solucoes"
          className="text-primary-400 mt-6 inline-flex items-center gap-2 hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" /> Voltar para Soluções
        </Link>
      </div>
    )
  }

  const accent = accentStyles[solution.accent]
  const Illustration = solutionIllustrations[solution.illustration]
  const related = solutionsData
    .filter((s) => s.slug !== solution.slug)
    .slice(0, 3)

  const tabs: TabItem[] = [
    {
      id: 'overview',
      label: 'Visão Geral',
      icon: <Sparkles className="h-4 w-4" />,
      content: (
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <p className="text-base leading-relaxed text-neutral-300">
              {solution.fullDescription}
            </p>
            <h4
              className={`mt-8 mb-4 text-sm font-bold tracking-wider uppercase ${accent.text}`}
            >
              O que entregamos nesta solução
            </h4>
            <div className="grid grid-cols-1 gap-3">
              {solution.benefits.map((benefit, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div
                    className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${accent.check}`}
                  >
                    <Check className="h-3 w-3" />
                  </div>
                  <span className="text-sm leading-normal text-neutral-300">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-2">
            <GlassCard
              className="flex h-full flex-col justify-between"
              glowColor={accent.glow}
            >
              <div>
                <p className="text-xs font-semibold tracking-wider text-neutral-500 uppercase">
                  Exemplo real
                </p>
                <h4 className="mt-2 text-base font-bold text-white">
                  {solution.example.title}
                </h4>
                <p className="mt-3 line-clamp-4 text-sm leading-relaxed text-neutral-400">
                  {solution.example.scenario}
                </p>
              </div>
              <button
                onClick={() => setExampleOpen(true)}
                className={`mt-6 inline-flex items-center gap-2 text-sm font-semibold ${accent.text} transition-colors hover:text-white`}
              >
                <PlayCircle className="h-4 w-4" /> Ver exemplo completo
              </button>
            </GlassCard>
          </div>
        </div>
      ),
    },
    {
      id: 'process',
      label: 'Como Funciona',
      icon: <Layers className="h-4 w-4" />,
      content: (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {solution.process.map((step, idx) => (
            <GlassCard key={idx} className="flex gap-4" glowColor={accent.glow}>
              <div
                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border ${accent.border} ${accent.bgSoft} text-sm font-extrabold ${accent.text}`}
              >
                {String(idx + 1).padStart(2, '0')}
              </div>
              <div>
                <h4 className="mb-1.5 text-sm font-bold text-white">
                  {step.title}
                </h4>
                <p className="text-sm leading-relaxed text-neutral-400">
                  {step.description}
                </p>
              </div>
            </GlassCard>
          ))}
        </div>
      ),
    },
    {
      id: 'deliverables',
      label: 'Entregas & Casos',
      icon: <ListChecks className="h-4 w-4" />,
      content: (
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          <div>
            <h4 className="mb-5 flex items-center gap-2 text-sm font-bold tracking-wider text-white uppercase">
              <Rocket className={`h-4 w-4 ${accent.text}`} /> Entregáveis
            </h4>
            <div className="flex flex-col gap-3">
              {solution.deliverables.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 rounded-xl border border-white/5 bg-white/5 px-4 py-3"
                >
                  <Check className={`mt-0.5 h-4 w-4 shrink-0 ${accent.text}`} />
                  <span className="text-sm text-neutral-300">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h4 className="mb-5 flex items-center gap-2 text-sm font-bold tracking-wider text-white uppercase">
              <Target className={`h-4 w-4 ${accent.text}`} /> Casos de uso
            </h4>
            <div className="flex flex-col gap-3">
              {solution.useCases.map((useCase, idx) => (
                <GlassCard
                  key={idx}
                  className="border-white/5"
                  interactive={false}
                >
                  <h5 className="mb-1.5 text-sm font-bold text-white">
                    {useCase.title}
                  </h5>
                  <p className="text-xs leading-relaxed text-neutral-400">
                    {useCase.description}
                  </p>
                </GlassCard>
              ))}
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'faq',
      label: 'FAQ',
      icon: <HelpCircle className="h-4 w-4" />,
      content: (
        <div className="mx-auto flex max-w-3xl flex-col gap-4">
          {solution.faqs.map((faq, idx) => {
            const isOpen = openFaqIndex === idx
            return (
              <GlassCard
                key={idx}
                className="cursor-pointer border-white/5 p-5 transition-colors hover:border-white/10"
                interactive={false}
                onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
              >
                <div className="flex items-center justify-between gap-4">
                  <h4 className="text-sm font-bold text-white md:text-base">
                    {faq.question}
                  </h4>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-neutral-400 transition-transform duration-300 ${
                      isOpen ? `${accent.text} rotate-180` : ''
                    }`}
                  />
                </div>
                {isOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    transition={{ duration: 0.25 }}
                    className="mt-4 border-t border-white/5 pt-4 text-xs leading-relaxed text-neutral-400 md:text-sm"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </GlassCard>
            )
          })}
        </div>
      ),
    },
  ]

  return (
    <div className="relative pb-24">
      {/* 1. HERO */}
      <section className="relative overflow-hidden py-12">
        <div
          className="pointer-events-none absolute -top-20 right-0 -z-10 h-96 w-96 rounded-full blur-[130px]"
          style={{ background: accent.glow }}
        />
        <div className="mx-auto max-w-7xl px-6 lg:px-[7.5%]">
          <Breadcrumb
            items={[
              { label: 'Soluções', to: '/solucoes' },
              { label: solution.title },
            ]}
          />

          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div>
              <div
                className={`mb-5 inline-flex items-center gap-2 rounded-full border px-4 py-1 text-xs font-semibold tracking-wider uppercase ${accent.border} ${accent.bgSoft} ${accent.text}`}
              >
                Solução OneBI
              </div>
              <h1 className="text-3xl font-extrabold tracking-tight text-white md:text-5xl">
                {solution.title}
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-neutral-300">
                {solution.tagline}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/contato">
                  <GlowButton
                    variant={
                      solution.accent === 'primary' ? 'primary' : 'secondary'
                    }
                    className="px-6 py-3"
                  >
                    Solicitar Orçamento <ArrowRight className="h-4 w-4" />
                  </GlowButton>
                </Link>
                <GlowButton
                  variant="glass"
                  className="px-6 py-3"
                  onClick={() => setExampleOpen(true)}
                >
                  <PlayCircle className="h-4 w-4" /> Ver Exemplo
                </GlowButton>
              </div>
            </div>

            <div className="relative">
              <GlassCard
                className="overflow-hidden border-white/10 p-0"
                interactive={false}
                glowColor={accent.glow}
              >
                <Illustration className="h-auto w-full" />
              </GlassCard>
            </div>
          </div>

          {/* Metrics band */}
          <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {solution.metrics.map((metric, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="rounded-2xl border border-white/8 bg-neutral-950/40 p-6 text-center"
              >
                <p
                  className={`text-3xl font-extrabold tracking-tight ${accent.text}`}
                >
                  {metric.value}
                </p>
                <p className="mt-2 text-xs text-neutral-400">{metric.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. TABBED CONTENT + STICKY STACK */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-[7.5%]">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <Tabs
                tabs={tabs}
                accentClassName={accent.tab}
                activeTextClassName={accent.tabText}
              />
            </div>

            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-28">
                <GlassCard className="border-white/10" glowColor={accent.glow}>
                  <h3 className="mb-4 text-sm font-bold text-white">
                    Stack Tecnológico
                  </h3>
                  <div className="mb-6 flex flex-wrap gap-2">
                    {solution.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-lg border border-white/5 bg-neutral-900 px-3 py-1.5 text-xs font-medium text-neutral-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <Link to="/contato" className="w-full">
                    <GlowButton
                      variant={
                        solution.accent === 'primary' ? 'primary' : 'secondary'
                      }
                      fullWidth
                      className="py-3"
                    >
                      Falar com Especialista <ArrowRight className="h-4 w-4" />
                    </GlowButton>
                  </Link>
                </GlassCard>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. RELATED SOLUTIONS */}
      <section className="border-t border-white/5 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-[7.5%]">
          <h3 className="mb-8 text-xl font-bold tracking-tight text-white">
            Explore outras soluções
          </h3>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {related.map((rel) => (
              <Link key={rel.slug} to={`/solucoes/${rel.slug}`}>
                <GlassCard
                  className="group flex h-full flex-col justify-between"
                  glowColor={accentStyles[rel.accent].glow}
                >
                  <div>
                    <h4 className="mb-2 text-base font-bold text-white transition-colors group-hover:text-white">
                      {rel.title}
                    </h4>
                    <p className="line-clamp-2 text-sm text-neutral-400">
                      {rel.tagline}
                    </p>
                  </div>
                  <span
                    className={`mt-5 inline-flex items-center gap-1.5 text-xs font-semibold ${accentStyles[rel.accent].text}`}
                  >
                    Ver solução <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </GlassCard>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* EXAMPLE MODAL */}
      <Modal
        open={exampleOpen}
        onClose={() => setExampleOpen(false)}
        eyebrow="Exemplo real"
        title={solution.example.title}
      >
        <p className="text-sm leading-relaxed text-neutral-300">
          {solution.example.scenario}
        </p>
        <h4
          className={`mt-6 mb-3 text-xs font-bold tracking-wider uppercase ${accent.text}`}
        >
          Destaques da entrega
        </h4>
        <div className="flex flex-col gap-3">
          {solution.example.highlights.map((highlight, idx) => (
            <div key={idx} className="flex items-start gap-3">
              <div
                className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${accent.check}`}
              >
                <Check className="h-3 w-3" />
              </div>
              <span className="text-sm text-neutral-300">{highlight}</span>
            </div>
          ))}
        </div>
        <div className="mt-8 border-t border-white/10 pt-6">
          <Link to="/contato" onClick={() => setExampleOpen(false)}>
            <GlowButton
              variant={solution.accent === 'primary' ? 'primary' : 'secondary'}
              fullWidth
              className="py-3"
            >
              Quero um resultado assim <ArrowRight className="h-4 w-4" />
            </GlowButton>
          </Link>
        </div>
      </Modal>
    </div>
  )
}
export default SolutionDetail
