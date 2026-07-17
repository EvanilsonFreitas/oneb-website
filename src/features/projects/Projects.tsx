import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  AlertTriangle,
  ArrowDown,
  ArrowRight,
  Building2,
  Calendar,
  CheckCircle2,
  Cpu,
  Crosshair,
  Layers,
  Lightbulb,
  Target,
  TrendingUp,
  Workflow,
} from 'lucide-react'
import { GlassCard } from '@/components/common/GlassCard'
import { GlowButton } from '@/components/common/GlowButton'
import { CountUp } from '@/components/common/CountUp'
import { Modal } from '@/components/feedback/Modal'
import { Reveal } from '@/animations/Reveal'
import { projectsData, type Project } from '@/constants/mockData'

const statusStyles: Record<string, string> = {
  'Em produção': 'text-primary-400 border-primary-500/20 bg-primary-500/10',
  Concluído: 'text-secondary-400 border-secondary-500/20 bg-secondary-500/10',
  'Em manutenção': 'text-amber-400 border-amber-500/20 bg-amber-500/10',
}

/** Título de seção da documentação do projeto dentro do modal. */
function DocSectionTitle({
  icon,
  children,
}: {
  icon: React.ReactNode
  children: React.ReactNode
}) {
  return (
    <h4 className="text-primary-400 mt-10 mb-4 flex items-center gap-2 border-b border-white/10 pb-3 text-xs font-bold tracking-wider uppercase">
      {icon}
      {children}
    </h4>
  )
}

export function Projects() {
  const categories = [
    'Todos',
    ...Array.from(new Set(projectsData.map((p) => p.category))),
  ]
  const [activeCategory, setActiveCategory] = useState('Todos')
  const [selected, setSelected] = useState<Project | null>(null)

  const filteredProjects = projectsData.filter(
    (project) =>
      activeCategory === 'Todos' || project.category === activeCategory,
  )

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
            <div className="border-secondary-500/20 bg-secondary-500/5 text-secondary-400 mb-4 inline-flex items-center gap-2 rounded-full border px-4 py-1 text-xs font-semibold tracking-wider uppercase">
              Portfólio Técnico
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">
              Projetos que{' '}
              <span className="text-secondary-500">Colocamos em Produção</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-neutral-400 md:text-lg">
              Cada projeto abaixo é documentado como uma apresentação comercial:
              contexto, problema, solução, arquitetura e resultados. Clique em
              "Ver detalhes" para abrir a documentação completa.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. CATEGORY FILTERS */}
      <section className="pb-4">
        <div className="mx-auto max-w-7xl px-6 lg:px-[7.5%]">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`cursor-pointer rounded-lg border px-4 py-2 text-xs font-semibold tracking-wider uppercase transition-all ${
                  activeCategory === cat
                    ? 'bg-primary-500 border-primary-500 text-black shadow-md'
                    : 'border-white/5 bg-white/5 text-neutral-400 hover:border-white/15 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 3. PROJECT MASONRY GRID */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-[7.5%]">
          <div className="columns-1 gap-6 sm:columns-2 lg:columns-3">
            <AnimatePresence mode="popLayout" initial={false}>
              {filteredProjects.map((project, idx) => (
                <motion.div
                  key={project.slug}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.4, delay: (idx % 3) * 0.05 }}
                  className="mb-6 break-inside-avoid"
                >
                  <button
                    onClick={() => setSelected(project)}
                    className="w-full cursor-pointer text-left"
                  >
                    <GlassCard
                      className="flex flex-col overflow-hidden p-0"
                      glowColor="rgba(62, 240, 170, 0.15)"
                    >
                      <div className="relative h-44 w-full overflow-hidden border-b border-white/5 bg-neutral-900">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="h-full w-full object-cover opacity-60 transition-transform duration-500 hover:scale-105"
                        />
                        <span
                          className={`absolute top-4 right-4 rounded border px-2.5 py-1 text-[10px] font-semibold backdrop-blur-sm ${statusStyles[project.status]}`}
                        >
                          {project.status}
                        </span>
                      </div>

                      <div className="flex flex-col gap-3 p-6">
                        <div className="flex items-center justify-between">
                          <span className="text-secondary-400 text-[10px] font-bold tracking-wider uppercase">
                            {project.category}
                          </span>
                          <span className="flex items-center gap-1 text-[10px] text-neutral-500">
                            <Calendar className="h-3 w-3" /> {project.year}
                          </span>
                        </div>
                        <h3 className="text-base font-bold text-white">
                          {project.title}
                        </h3>
                        <p className="text-xs leading-relaxed text-neutral-400">
                          {project.description}
                        </p>
                        <div className="mt-2 flex flex-wrap gap-1.5">
                          {project.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="rounded border border-white/5 bg-white/5 px-2 py-0.5 text-[10px] text-neutral-400"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                        <span className="text-secondary-400 mt-2 inline-flex items-center gap-1.5 text-xs font-semibold">
                          Ver detalhes <ArrowRight className="h-3.5 w-3.5" />
                        </span>
                      </div>
                    </GlassCard>
                  </button>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* 4. CTA SECTION */}
      <section className="border-t border-white/5 py-20">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-[7.5%]">
          <Reveal>
            <h3 className="text-2xl font-extrabold tracking-tight text-white md:text-3xl">
              Quer ver um estudo de caso completo?
            </h3>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-neutral-400">
              Conheça os desafios de negócio, arquiteturas e resultados
              mensuráveis por trás dos nossos principais projetos.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Link to="/cases">
                <GlowButton variant="primary">
                  Ver Cases de Sucesso <ArrowRight className="h-4 w-4" />
                </GlowButton>
              </Link>
              <Link to="/contato">
                <GlowButton variant="glass">Iniciar um Projeto</GlowButton>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* PROJECT DOCUMENTATION MODAL */}
      <Modal
        open={!!selected}
        onClose={() => setSelected(null)}
        eyebrow={selected?.category}
        title={selected?.title}
        className="max-w-4xl"
      >
        {selected && (
          <div>
            {/* Cover */}
            <div className="relative mb-8 h-52 w-full overflow-hidden rounded-xl border border-white/10">
              <img
                src={selected.image}
                alt={selected.title}
                className="h-full w-full object-cover opacity-70"
              />
              <span
                className={`absolute top-4 right-4 rounded border px-2.5 py-1 text-[10px] font-semibold backdrop-blur-sm ${statusStyles[selected.status]}`}
              >
                {selected.status}
              </span>
            </div>

            {/* ── RESUMO DO PROJETO ───────────────────────────── */}
            <DocSectionTitle icon={<Building2 className="h-4 w-4" />}>
              Resumo do Projeto
            </DocSectionTitle>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-white/5 bg-white/5 p-4">
                <p className="text-[10px] font-semibold tracking-wider text-neutral-500 uppercase">
                  Cliente / Contexto
                </p>
                <p className="mt-1.5 text-sm font-medium text-white">
                  {selected.doc.summary.client}
                </p>
              </div>
              <div className="rounded-xl border border-white/5 bg-white/5 p-4">
                <p className="text-[10px] font-semibold tracking-wider text-neutral-500 uppercase">
                  Área
                </p>
                <p className="mt-1.5 text-sm font-medium text-white">
                  {selected.doc.summary.area}
                </p>
              </div>
              <div className="rounded-xl border border-white/5 bg-white/5 p-4 sm:col-span-2">
                <p className="text-[10px] font-semibold tracking-wider text-neutral-500 uppercase">
                  Objetivo
                </p>
                <p className="mt-1.5 text-sm leading-relaxed text-neutral-200">
                  {selected.doc.summary.objective}
                </p>
              </div>
            </div>

            {/* ── PROBLEMA ────────────────────────────────────── */}
            <DocSectionTitle icon={<AlertTriangle className="h-4 w-4" />}>
              Problema
            </DocSectionTitle>
            <p className="text-sm leading-relaxed text-neutral-300">
              <span className="font-semibold text-white">
                Cenário anterior:{' '}
              </span>
              {selected.doc.problem.scenario}
            </p>
            <div className="mt-4 rounded-xl border border-amber-500/20 bg-amber-500/5 p-4">
              <p className="text-[10px] font-bold tracking-wider text-amber-400 uppercase">
                Dor identificada
              </p>
              <p className="mt-1.5 text-sm leading-relaxed text-neutral-200">
                {selected.doc.problem.pain}
              </p>
            </div>
            <div className="mt-4 grid grid-cols-1 gap-2">
              {selected.doc.problem.impacts.map((impact) => (
                <div key={impact} className="flex items-start gap-2.5">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-400/70" />
                  <span className="text-sm text-neutral-400">{impact}</span>
                </div>
              ))}
            </div>
            <p className="mt-4 text-sm leading-relaxed text-neutral-300">
              <span className="font-semibold text-white">Necessidade: </span>
              {selected.doc.problem.need}
            </p>

            {/* ── SOLUÇÃO ─────────────────────────────────────── */}
            <DocSectionTitle icon={<Lightbulb className="h-4 w-4" />}>
              Solução
            </DocSectionTitle>
            <p className="text-sm leading-relaxed text-neutral-300">
              <span className="font-semibold text-white">
                Estratégia aplicada:{' '}
              </span>
              {selected.doc.solution.strategy}
            </p>

            <p className="mt-6 mb-2 flex items-center gap-2 text-[11px] font-bold tracking-wider text-neutral-400 uppercase">
              <Cpu className="h-3.5 w-3.5" /> Tecnologias utilizadas
            </p>
            <div className="flex flex-wrap gap-2">
              {selected.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-lg border border-white/5 bg-neutral-900 px-3 py-1.5 text-xs font-medium text-neutral-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <p className="mb-3 flex items-center gap-2 text-[11px] font-bold tracking-wider text-neutral-400 uppercase">
                  <Layers className="h-3.5 w-3.5" /> Arquitetura
                </p>
                <div className="flex flex-col gap-2">
                  {selected.doc.solution.architecture.map((item) => (
                    <div key={item} className="flex items-start gap-2.5">
                      <CheckCircle2 className="text-primary-400 mt-0.5 h-4 w-4 shrink-0" />
                      <span className="text-sm text-neutral-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <p className="mb-3 flex items-center gap-2 text-[11px] font-bold tracking-wider text-neutral-400 uppercase">
                  <Workflow className="h-3.5 w-3.5" /> Processo desenvolvido
                </p>
                <div className="flex flex-col gap-2">
                  {selected.doc.solution.process.map((item, idx) => (
                    <div key={item} className="flex items-start gap-2.5">
                      <span className="text-primary-400 mt-0.5 shrink-0 text-xs font-extrabold">
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                      <span className="text-sm text-neutral-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* ── FLUXO VISUAL ────────────────────────────────── */}
            <DocSectionTitle icon={<Workflow className="h-4 w-4" />}>
              Fluxo da Solução
            </DocSectionTitle>
            <div className="rounded-2xl border border-white/8 bg-neutral-950/60 p-5">
              <div className="flex flex-col gap-0 md:flex-row md:items-stretch md:gap-0">
                {selected.doc.flow.map((step, idx) => (
                  <div
                    key={step.title}
                    className="flex flex-1 flex-col md:flex-row md:items-stretch"
                  >
                    <div className="border-primary-500/20 relative flex-1 rounded-xl border bg-black/50 p-4">
                      <span className="bg-primary-500 absolute -top-2.5 left-4 rounded px-1.5 py-0.5 text-[9px] font-extrabold text-black">
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                      <p className="text-xs font-bold text-white">
                        {step.title}
                      </p>
                      <p className="mt-1.5 text-[11px] leading-relaxed text-neutral-400">
                        {step.description}
                      </p>
                    </div>
                    {idx < selected.doc.flow.length - 1 && (
                      <div className="flex items-center justify-center py-1.5 md:px-1.5 md:py-0">
                        <ArrowDown className="text-primary-500/60 h-4 w-4 md:hidden" />
                        <ArrowRight className="text-primary-500/60 hidden h-4 w-4 shrink-0 md:block" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* ── RESULTADOS ──────────────────────────────────── */}
            <DocSectionTitle icon={<TrendingUp className="h-4 w-4" />}>
              Resultados
            </DocSectionTitle>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              {selected.doc.results.kpis.map((kpi) => (
                <div
                  key={kpi.label}
                  className="border-primary-500/15 bg-primary-500/5 rounded-xl border p-4 text-center"
                >
                  <p className="text-primary-400 text-2xl font-extrabold tracking-tight">
                    <CountUp value={kpi.value} />
                  </p>
                  <p className="mt-1 text-[10px] leading-tight tracking-wide text-neutral-400 uppercase">
                    {kpi.label}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <p className="mb-3 flex items-center gap-2 text-[11px] font-bold tracking-wider text-neutral-400 uppercase">
                  <Crosshair className="h-3.5 w-3.5" /> Metas do projeto
                </p>
                <div className="flex flex-col gap-2">
                  {selected.doc.results.goals.map((goal) => (
                    <div key={goal} className="flex items-start gap-2.5">
                      <Target className="text-primary-400 mt-0.5 h-4 w-4 shrink-0" />
                      <span className="text-sm text-neutral-300">{goal}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <p className="mb-3 flex items-center gap-2 text-[11px] font-bold tracking-wider text-neutral-400 uppercase">
                  <TrendingUp className="h-3.5 w-3.5" /> Ganhos gerados
                </p>
                <div className="flex flex-col gap-2">
                  {selected.doc.results.gains.map((gain) => (
                    <div key={gain} className="flex items-start gap-2.5">
                      <CheckCircle2 className="text-primary-400 mt-0.5 h-4 w-4 shrink-0" />
                      <span className="text-sm text-neutral-300">{gain}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-10 border-t border-white/10 pt-6">
              <Link to="/contato" onClick={() => setSelected(null)}>
                <GlowButton variant="primary" fullWidth>
                  Quero um projeto assim <ArrowRight className="h-4 w-4" />
                </GlowButton>
              </Link>
            </div>
          </div>
        )}
      </Modal>
    </div>
  )
}
export default Projects
