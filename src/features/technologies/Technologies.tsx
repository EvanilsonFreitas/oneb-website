import { useState, type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowRight,
  Code2,
  Database,
  Cloud,
  BarChart3,
  Brain,
  Wrench,
} from 'lucide-react'
import { GlassCard } from '@/components/common/GlassCard'
import { GlowButton } from '@/components/common/GlowButton'
import { technologiesData, type Technology } from '@/constants/mockData'

const categories: { label: Technology['category']; icon: ReactNode }[] = [
  { label: 'Frontend', icon: <Code2 className="h-4 w-4" /> },
  { label: 'Backend & Dados', icon: <Database className="h-4 w-4" /> },
  { label: 'Cloud & Fabric', icon: <Cloud className="h-4 w-4" /> },
  {
    label: 'Business Intelligence',
    icon: <BarChart3 className="h-4 w-4" />,
  },
  { label: 'Inteligência Artificial', icon: <Brain className="h-4 w-4" /> },
  { label: 'DevOps & Qualidade', icon: <Wrench className="h-4 w-4" /> },
]

export function Technologies() {
  const [activeCategory, setActiveCategory] = useState<
    Technology['category'] | 'Todas'
  >('Todas')

  const filteredTechnologies = technologiesData.filter(
    (tech) => activeCategory === 'Todas' || tech.category === activeCategory,
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
            <div className="border-primary-500/20 bg-primary-500/5 text-primary-400 mb-4 inline-flex items-center gap-2 rounded-full border px-4 py-1 text-xs font-semibold tracking-wider uppercase">
              Stack Tecnológico
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">
              Tecnologia de Ponta em{' '}
              <span className="text-primary-500">Cada Camada</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-neutral-400 md:text-lg">
              Combinamos ferramentas consolidadas de mercado com as tecnologias
              mais modernas de dados e inteligência artificial para entregar
              soluções robustas, seguras e escaláveis.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. CATEGORY FILTERS */}
      <section className="pb-4">
        <div className="mx-auto max-w-7xl px-6 lg:px-[7.5%]">
          <div className="flex flex-wrap justify-center gap-2">
            <button
              onClick={() => setActiveCategory('Todas')}
              className={`cursor-pointer rounded-lg border px-4 py-2 text-xs font-semibold tracking-wider uppercase transition-all ${
                activeCategory === 'Todas'
                  ? 'bg-primary-500 border-primary-500 text-black shadow-md'
                  : 'border-white/5 bg-white/5 text-neutral-400 hover:border-white/15 hover:text-white'
              }`}
            >
              Todas
            </button>
            {categories.map((cat) => (
              <button
                key={cat.label}
                onClick={() => setActiveCategory(cat.label)}
                className={`inline-flex cursor-pointer items-center gap-2 rounded-lg border px-4 py-2 text-xs font-semibold tracking-wider uppercase transition-all ${
                  activeCategory === cat.label
                    ? 'bg-primary-500 border-primary-500 text-black shadow-md'
                    : 'border-white/5 bg-white/5 text-neutral-400 hover:border-white/15 hover:text-white'
                }`}
              >
                {cat.icon}
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 3. TECHNOLOGY GRID */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-[7.5%]">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout" initial={false}>
              {filteredTechnologies.map((tech) => (
                <motion.div
                  key={tech.name}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                >
                  <GlassCard
                    className="flex h-full flex-col gap-3 border-white/5"
                    glowColor="rgba(62, 240, 170, 0.12)"
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="text-base font-bold text-white">
                        {tech.name}
                      </h3>
                      <span className="text-primary-400 border-primary-500/20 rounded border bg-white/5 px-2 py-0.5 text-[9px] font-semibold tracking-wider uppercase">
                        {tech.category}
                      </span>
                    </div>
                    <p className="text-sm leading-relaxed text-neutral-400">
                      {tech.description}
                    </p>
                  </GlassCard>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* 4. CTA SECTION */}
      <section className="border-t border-white/5 py-20">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-[7.5%]">
          <h3 className="text-2xl font-extrabold tracking-tight text-white md:text-3xl">
            Não encontrou a tecnologia que sua empresa utiliza?
          </h3>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-neutral-400">
            Trabalhamos com integrações personalizadas para dezenas de outras
            ferramentas e plataformas. Fale com nossos consultores para
            avaliarmos seu ecossistema atual.
          </p>
          <div className="mt-8">
            <Link to="/contato">
              <GlowButton variant="primary" className="px-8 py-3">
                Falar com um Consultor <ArrowRight className="h-4 w-4" />
              </GlowButton>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
export default Technologies
