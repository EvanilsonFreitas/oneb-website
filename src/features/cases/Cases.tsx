import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Search, Clock, Users, Quote } from 'lucide-react'
import { blogService } from '@/services/blogService'
import type { CaseStudy } from '@/constants/mockData'
import { CardGridSkeleton } from '@/components/feedback/Skeleton'

export function Cases() {
  const [cases, setCases] = useState<CaseStudy[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedIndustry, setSelectedIndustry] = useState('Todos')

  useEffect(() => {
    async function fetchCases() {
      setLoading(true)
      try {
        const data = await blogService.getCases()
        setCases(data)
      } catch (err) {
        console.error('Erro ao buscar cases:', err)
      } finally {
        setLoading(false)
      }
    }
    void fetchCases()
  }, [])

  const industries = [
    'Todos',
    ...Array.from(new Set(cases.map((c) => c.industry))),
  ]

  const filteredCases = cases.filter((item) => {
    const industryMatches =
      selectedIndustry === 'Todos' || item.industry === selectedIndustry
    const searchMatches =
      searchTerm.trim() === '' ||
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.summary.toLowerCase().includes(searchTerm.toLowerCase())
    return industryMatches && searchMatches
  })

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
              Resultados de Negócio
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">
              Não é sobre dashboards.{' '}
              <span className="text-primary-500">É sobre impacto.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-neutral-400 md:text-lg">
              Cada case abaixo carrega um problema de negócio real, a solução
              que arquitetamos e o resultado mensurável que ficou. Sem genérico,
              sem "case de vitrine".
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. FILTER & SEARCH BAR */}
      <section className="pb-10">
        <div className="mx-auto max-w-6xl px-6 lg:px-[7.5%]">
          <div className="flex flex-col items-center justify-between gap-4 border-b border-white/10 pb-6 md:flex-row">
            <div className="flex w-full flex-wrap gap-2 md:w-auto">
              {industries.map((ind) => (
                <button
                  key={ind}
                  onClick={() => setSelectedIndustry(ind)}
                  className={`cursor-pointer rounded-lg border px-4 py-2 text-xs font-semibold tracking-wider uppercase transition-all ${
                    selectedIndustry === ind
                      ? 'bg-primary-500 border-primary-500 text-black shadow-md'
                      : 'border-white/5 bg-white/5 text-neutral-400 hover:border-white/15 hover:text-white'
                  }`}
                >
                  {ind}
                </button>
              ))}
            </div>

            <div className="relative w-full md:w-80">
              <Search className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-neutral-500" />
              <input
                type="text"
                placeholder="Buscar por cliente ou setor"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="focus:border-primary-500/50 w-full rounded-lg border border-white/10 bg-white/5 py-2.5 pr-4 pl-10 text-xs text-white placeholder-neutral-500 focus:outline-none"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. EXECUTIVE CASE INDEX — alternating editorial rows, not a card grid */}
      <section className="py-6">
        <div className="mx-auto max-w-6xl px-6 lg:px-[7.5%]">
          {loading ? (
            <CardGridSkeleton count={3} />
          ) : (
            <div className="flex flex-col divide-y divide-white/10 border-t border-white/10">
              <AnimatePresence mode="popLayout" initial={false}>
                {filteredCases.map((item, idx) => (
                  <CaseRow
                    key={item.slug}
                    item={item}
                    reverse={idx % 2 === 1}
                  />
                ))}
              </AnimatePresence>
            </div>
          )}

          {!loading && filteredCases.length === 0 && (
            <div className="py-20 text-center">
              <p className="text-sm text-neutral-500">
                Nenhum case corresponde aos filtros selecionados.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

function CaseRow({ item, reverse }: { item: CaseStudy; reverse: boolean }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6 }}
      className="grid grid-cols-1 items-center gap-10 py-14 lg:grid-cols-12 lg:gap-14"
    >
      {/* Image */}
      <div
        className={`relative overflow-hidden rounded-3xl border border-white/10 lg:col-span-5 ${
          reverse ? 'lg:order-2' : ''
        }`}
      >
        <img
          src={item.image}
          alt={item.title}
          className="h-64 w-full object-cover opacity-70 transition-transform duration-700 hover:scale-105 lg:h-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
        <div className="absolute bottom-5 left-5 flex items-center gap-4 text-[11px] font-semibold text-neutral-200">
          <span className="flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5" /> {item.duration}
          </span>
          <span className="flex items-center gap-1.5">
            <Users className="h-3.5 w-3.5" /> {item.teamSize}
          </span>
        </div>
      </div>

      {/* Narrative */}
      <div className={`lg:col-span-7 ${reverse ? 'lg:order-1' : ''}`}>
        <div className="flex items-center gap-3 text-xs font-bold tracking-widest text-neutral-500 uppercase">
          <span className="text-primary-400">{item.industry}</span>
          <span className="text-neutral-700">·</span>
          <span>{item.client}</span>
        </div>

        <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-white md:text-3xl">
          <Link
            to={`/cases/${item.slug}`}
            className="hover:text-primary-400 transition-colors"
          >
            {item.title}
          </Link>
        </h2>

        <p className="mt-4 text-sm leading-relaxed text-neutral-400 md:text-base">
          {item.summary}
        </p>

        {/* Hero KPI numbers — the executive takeaway, visible without a click */}
        <div className="mt-8 grid grid-cols-3 gap-4 border-t border-white/10 pt-6">
          {item.kpis.slice(0, 3).map((kpi) => (
            <div key={kpi.label}>
              <p className="text-primary-400 text-2xl font-extrabold tracking-tight md:text-3xl">
                {kpi.value}
              </p>
              <p className="mt-1 text-[10px] leading-tight tracking-wide text-neutral-500 uppercase">
                {kpi.label}
              </p>
            </div>
          ))}
        </div>

        <blockquote className="mt-6 flex gap-3 border-l-2 border-white/10 pl-4">
          <Quote className="text-secondary-400 h-4 w-4 shrink-0 -scale-x-100" />
          <p className="text-sm leading-relaxed text-neutral-300 italic">
            "{item.quote.text}"
          </p>
        </blockquote>

        <Link
          to={`/cases/${item.slug}`}
          className="text-primary-400 mt-7 inline-flex items-center gap-2 text-sm font-semibold transition-all hover:gap-3 hover:text-white"
        >
          Ler o estudo de caso completo <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </motion.article>
  )
}

export default Cases
