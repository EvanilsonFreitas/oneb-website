import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Calendar, Layers, Cpu } from 'lucide-react'
import { GlassCard } from '@/components/common/GlassCard'
import { GlowButton } from '@/components/common/GlowButton'
import { Modal } from '@/components/feedback/Modal'
import { projectsData, type Project } from '@/constants/mockData'

const statusStyles: Record<string, string> = {
  'Em produção': 'text-primary-400 border-primary-500/20 bg-primary-500/10',
  Concluído: 'text-secondary-400 border-secondary-500/20 bg-secondary-500/10',
  'Em manutenção': 'text-amber-400 border-amber-500/20 bg-amber-500/10',
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
              Uma vitrine técnica das plataformas, pipelines e produtos de dados
              que arquitetamos e mantemos para nossos clientes. Clique em um
              projeto para ver os detalhes.
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
                    ? 'bg-secondary-600 border-secondary-600 text-white shadow-md'
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
                      glowColor="rgba(126, 87, 225, 0.15)"
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
          <h3 className="text-2xl font-extrabold tracking-tight text-white md:text-3xl">
            Quer ver um estudo de caso completo?
          </h3>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-neutral-400">
            Conheça os desafios de negócio, arquiteturas e resultados
            mensuráveis por trás dos nossos principais projetos.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link to="/cases">
              <GlowButton variant="secondary" className="px-8 py-3">
                Ver Cases de Sucesso <ArrowRight className="h-4 w-4" />
              </GlowButton>
            </Link>
            <Link to="/contato">
              <GlowButton variant="glass" className="px-8 py-3">
                Iniciar um Projeto
              </GlowButton>
            </Link>
          </div>
        </div>
      </section>

      {/* PROJECT DETAIL MODAL */}
      <Modal
        open={!!selected}
        onClose={() => setSelected(null)}
        eyebrow={selected?.category}
        title={selected?.title}
      >
        {selected && (
          <div>
            <div className="relative mb-6 h-48 w-full overflow-hidden rounded-xl border border-white/10">
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

            <div className="mb-6 flex flex-wrap gap-6">
              <div>
                <p className="flex items-center gap-1.5 text-[10px] font-semibold tracking-wider text-neutral-500 uppercase">
                  <Calendar className="h-3 w-3" /> Ano
                </p>
                <p className="mt-1 text-sm font-semibold text-white">
                  {selected.year}
                </p>
              </div>
              <div>
                <p className="flex items-center gap-1.5 text-[10px] font-semibold tracking-wider text-neutral-500 uppercase">
                  <Layers className="h-3 w-3" /> Categoria
                </p>
                <p className="mt-1 text-sm font-semibold text-white">
                  {selected.category}
                </p>
              </div>
            </div>

            <p className="text-sm leading-relaxed text-neutral-300">
              {selected.description}
            </p>

            <h4 className="text-secondary-400 mt-6 mb-3 flex items-center gap-2 text-xs font-bold tracking-wider uppercase">
              <Cpu className="h-4 w-4" /> Stack utilizada
            </h4>
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

            <div className="mt-8 border-t border-white/10 pt-6">
              <Link to="/contato" onClick={() => setSelected(null)}>
                <GlowButton variant="secondary" fullWidth className="py-3">
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
