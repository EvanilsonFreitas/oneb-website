import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, ArrowRight, Clock, Users, Quote, Cpu } from 'lucide-react'
import { blogService } from '@/services/blogService'
import type { CaseStudy } from '@/constants/mockData'
import { GlassCard } from '@/components/common/GlassCard'
import { GlowButton } from '@/components/common/GlowButton'
import { CountUp } from '@/components/common/CountUp'
import { Reveal } from '@/animations/Reveal'
import { DetailSkeleton } from '@/components/feedback/Skeleton'
import { Breadcrumb } from '@/components/navigation/Breadcrumb'

export function CaseDetail() {
  const { slug } = useParams<{ slug: string }>()
  const [caseStudy, setCaseStudy] = useState<CaseStudy | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchCase() {
      if (!slug) return
      setLoading(true)
      try {
        const data = await blogService.getCaseBySlug(slug)
        setCaseStudy(data)
      } catch (err) {
        console.error('Erro ao buscar case:', err)
      } finally {
        setLoading(false)
      }
    }
    void fetchCase()
  }, [slug])

  if (loading) {
    return <DetailSkeleton />
  }

  if (!caseStudy) {
    return (
      <div className="mx-auto max-w-7xl px-6 py-32 text-center lg:px-[7.5%]">
        <h2 className="text-2xl font-bold text-white">
          Estudo de caso não encontrado
        </h2>
        <p className="mt-2 text-neutral-400">
          O case que você procura não está cadastrado ou foi removido.
        </p>
        <Link
          to="/cases"
          className="text-primary-400 mt-6 inline-flex items-center gap-2 hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" /> Voltar para Cases
        </Link>
      </div>
    )
  }

  return (
    <div className="relative pb-24">
      {/* 1. COVER HEADER */}
      <section className="py-8">
        <div className="mx-auto max-w-6xl px-6 lg:px-[7.5%]">
          <Breadcrumb
            items={[
              { label: 'Cases', to: '/cases' },
              { label: caseStudy.title },
            ]}
          />

          <div className="relative mt-6 overflow-hidden rounded-3xl border border-white/10 bg-neutral-950/40 p-8 md:p-14">
            <div className="absolute inset-0 -z-10 bg-neutral-950">
              <img
                src={caseStudy.image}
                alt={caseStudy.title}
                className="h-full w-full object-cover opacity-20 blur-sm"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/85 to-black/40" />
            </div>

            <div className="flex flex-wrap items-center gap-3 text-xs font-bold tracking-widest text-neutral-400 uppercase">
              <span className="text-primary-400">{caseStudy.industry}</span>
              <span className="text-neutral-700">·</span>
              <span>Cliente: {caseStudy.client}</span>
            </div>

            <h1 className="mt-6 max-w-3xl text-2xl leading-tight font-extrabold tracking-tight text-white md:text-4xl lg:text-5xl">
              {caseStudy.title}
            </h1>
            <p className="mt-6 max-w-2xl text-sm leading-relaxed text-neutral-300 md:text-base">
              {caseStudy.summary}
            </p>

            <div className="mt-8 flex flex-wrap gap-6 border-t border-white/10 pt-6 text-xs text-neutral-400">
              <span className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-neutral-500" /> Duração:{' '}
                <span className="font-semibold text-white">
                  {caseStudy.duration}
                </span>
              </span>
              <span className="flex items-center gap-2">
                <Users className="h-4 w-4 text-neutral-500" /> Equipe:{' '}
                <span className="font-semibold text-white">
                  {caseStudy.teamSize}
                </span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. HERO KPI STRIP */}
      <section className="border-y border-white/10 bg-neutral-950/30 py-10">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-6 sm:grid-cols-3 lg:px-[7.5%]">
          {caseStudy.kpis.map((kpi, idx) => (
            <motion.div
              key={kpi.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: '-60px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="text-center sm:text-left"
            >
              <p className="text-primary-400 text-4xl font-extrabold tracking-tight md:text-5xl">
                <CountUp value={kpi.value} />
              </p>
              <p className="mt-2 text-xs tracking-wide text-neutral-400 uppercase">
                {kpi.label}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. NUMBERED NARRATIVE — Problema / Solução / Impacto */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6 lg:px-[7.5%]">
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-12">
            <div className="flex flex-col gap-16 lg:col-span-8">
              <NarrativeStage
                index="01"
                title="Qual era o problema?"
                accent="text-primary-400"
                text={caseStudy.challenge}
              />
              <NarrativeStage
                index="02"
                title="Como foi identificado?"
                accent="text-primary-400"
                text={caseStudy.discovery}
              />
              <NarrativeStage
                index="03"
                title="Qual solução foi criada?"
                accent="text-primary-400"
                text={caseStudy.solution}
              />

              {/* Architecture workflow — como foi implementada */}
              <div className="border-t border-white/10 pt-12">
                <div className="flex items-baseline gap-4">
                  <span className="text-primary-400 font-mono text-4xl font-extrabold opacity-40">
                    04
                  </span>
                  <h3 className="text-xl font-extrabold tracking-tight text-white md:text-2xl">
                    Como foi implementada?
                  </h3>
                </div>
                <h4 className="mt-6 mb-8 flex items-center gap-2 text-xs font-bold tracking-widest text-neutral-400 uppercase">
                  <Cpu className="h-4 w-4 text-neutral-500" />
                  Arquitetura da solução
                </h4>
                <div className="relative ml-3 flex flex-col gap-8 border-l border-white/10 pl-6">
                  {caseStudy.architecture.map((step, idx) => (
                    <div key={idx} className="relative">
                      <div className="border-primary-500 absolute top-1 left-[-30px] flex h-4 w-4 items-center justify-center rounded-full border bg-black">
                        <span className="text-primary-400 text-[9px] font-bold">
                          {idx + 1}
                        </span>
                      </div>
                      <p className="text-sm leading-relaxed font-medium text-neutral-300">
                        {step}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <NarrativeStage
                index="05"
                title="Qual resultado gerou?"
                accent="text-primary-400"
                text={caseStudy.impact}
              />

              {/* Galeria visual — prints, dashboards e exemplos práticos */}
              <div className="border-t border-white/10 pt-12">
                <h3 className="mb-8 flex items-center gap-2 text-xs font-bold tracking-widest text-neutral-400 uppercase">
                  <Cpu className="h-4 w-4 text-neutral-500" />O projeto na
                  prática
                </h3>
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  {caseStudy.gallery.map((shot, idx) => (
                    <Reveal
                      key={shot.src}
                      direction="up"
                      delay={idx * 0.08}
                      className={idx === 0 ? 'sm:col-span-2' : ''}
                    >
                      <figure className="group overflow-hidden rounded-2xl border border-white/10 bg-neutral-950/40">
                        <div
                          className={`overflow-hidden ${idx === 0 ? 'h-64 md:h-80' : 'h-48'}`}
                        >
                          <img
                            src={shot.src}
                            alt={shot.caption}
                            loading="lazy"
                            className="h-full w-full object-cover opacity-80 transition-transform duration-700 group-hover:scale-105"
                          />
                        </div>
                        <figcaption className="border-t border-white/5 px-4 py-3 text-xs text-neutral-400">
                          {shot.caption}
                        </figcaption>
                      </figure>
                    </Reveal>
                  ))}
                </div>
              </div>
            </div>

            {/* Sticky sidebar: quote + CTA */}
            <div className="lg:col-span-4">
              <div className="flex flex-col gap-6 lg:sticky lg:top-28">
                <GlassCard
                  className="border-white/10"
                  glowColor="rgba(62, 240, 170, 0.15)"
                >
                  <Quote className="text-secondary-400 h-6 w-6 -scale-x-100" />
                  <p className="mt-4 text-sm leading-relaxed text-neutral-200 italic">
                    "{caseStudy.quote.text}"
                  </p>
                  <div className="mt-5 border-t border-white/10 pt-4">
                    <p className="text-sm font-bold text-white">
                      {caseStudy.quote.author}
                    </p>
                    <p className="text-xs text-neutral-500">
                      {caseStudy.quote.role}
                    </p>
                  </div>
                </GlassCard>

                <GlassCard
                  className="border-white/10"
                  glowColor="rgba(62, 240, 170, 0.15)"
                >
                  <p className="text-sm font-bold text-white">
                    Quer um resultado parecido?
                  </p>
                  <p className="mt-2 text-xs leading-relaxed text-neutral-400">
                    Agende um diagnóstico gratuito e descubra por onde começar
                    na sua operação.
                  </p>
                  <Link to="/contato" className="mt-5 block w-full">
                    <GlowButton variant="primary" fullWidth>
                      Obter Diagnóstico Similar{' '}
                      <ArrowRight className="h-4 w-4" />
                    </GlowButton>
                  </Link>
                </GlassCard>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. BEFORE / AFTER COMPARISON */}
      <section className="border-t border-white/10 bg-neutral-950/20 py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-[7.5%]">
          <h2 className="mb-10 text-center text-2xl font-extrabold tracking-tight text-white md:text-3xl">
            Antes <span className="text-neutral-600">→</span>{' '}
            <span className="text-primary-500">Depois</span>
          </h2>
          <div className="flex flex-col gap-4">
            {caseStudy.beforeAfter.map((row, idx) => (
              <motion.div
                key={row.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: '-60px' }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="grid grid-cols-1 items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.02] p-5 sm:grid-cols-[1fr_auto_1fr] sm:gap-6"
              >
                <div className="text-center sm:text-right">
                  <p className="text-[10px] font-bold tracking-widest text-neutral-500 uppercase">
                    {row.label}
                  </p>
                  <p className="mt-1 text-sm text-neutral-400 line-through decoration-neutral-600">
                    {row.before}
                  </p>
                </div>
                <ArrowRight className="mx-auto hidden h-4 w-4 shrink-0 text-neutral-600 sm:block" />
                <div className="text-center sm:text-left">
                  <p className="text-primary-400 text-sm font-bold">
                    {row.after}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

function NarrativeStage({
  index,
  title,
  accent,
  text,
}: {
  index: string
  title: string
  accent: string
  text: string
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: '-80px' }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-baseline gap-4">
        <span
          className={`font-mono text-4xl font-extrabold ${accent} opacity-40`}
        >
          {index}
        </span>
        <h3 className="text-xl font-extrabold tracking-tight text-white md:text-2xl">
          {title}
        </h3>
      </div>
      <p className="mt-5 text-sm leading-relaxed text-neutral-300 md:text-base">
        {text}
      </p>
    </motion.div>
  )
}

export default CaseDetail
