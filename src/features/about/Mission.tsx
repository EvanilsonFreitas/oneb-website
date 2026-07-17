import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Target, ArrowRight, Zap, Layers, Rocket, Eye } from 'lucide-react'
import { GlassCard } from '@/components/common/GlassCard'
import { GlowButton } from '@/components/common/GlowButton'
import { fadeIn, staggerContainer } from '@/animations/variants'

const pillars = [
  {
    title: 'Soluções inteligentes',
    desc: 'Não entregamos relatórios genéricos. Cada solução nasce de um problema de negócio real, modelado com rigor técnico.',
    icon: <Zap className="text-primary-400 h-6 w-6" />,
  },
  {
    title: 'Arquiteturas escaláveis',
    desc: 'O que construímos hoje precisa aguentar o volume de dados de amanhã, sem retrabalho nem migrações traumáticas.',
    icon: <Layers className="text-primary-400 h-6 w-6" />,
  },
  {
    title: 'Tecnologia que simplifica',
    desc: 'Reduzimos a complexidade operacional dos nossos clientes — não a transferimos para dentro dos seus times.',
    icon: <Target className="text-primary-400 h-6 w-6" />,
  },
  {
    title: 'Evolução digital acelerada',
    desc: 'Cada projeto entregue deixa o cliente mais maduro digitalmente do que encontramos, não apenas com um painel a mais.',
    icon: <Rocket className="text-primary-400 h-6 w-6" />,
  },
]

export function Mission() {
  return (
    <div className="relative pb-24">
      {/* 1. HERO */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-[7.5%]">
          <motion.div
            variants={staggerContainer(0.1, 0.05)}
            initial="hidden"
            animate="show"
            className="flex flex-col items-center"
          >
            <motion.div
              variants={fadeIn('up', 0.5)}
              className="border-primary-500/20 bg-primary-500/5 text-primary-400 mb-4 inline-flex items-center gap-2 rounded-full border px-4 py-1 text-xs font-semibold tracking-wider uppercase"
            >
              <Target className="h-3.5 w-3.5" /> Nossa Missão
            </motion.div>
            <motion.h1
              variants={fadeIn('up', 0.6)}
              className="text-3xl leading-tight font-extrabold tracking-tight text-white md:text-5xl"
            >
              Transformar dados em decisões estratégicas por meio de soluções
              inteligentes, escaláveis e inovadoras.
            </motion.h1>
            <motion.p
              variants={fadeIn('up', 0.7)}
              className="mt-6 max-w-2xl text-base leading-relaxed text-neutral-400 md:text-lg"
            >
              Desenvolvemos tecnologias que simplificam processos, impulsionam
              resultados e aceleram a evolução digital dos nossos clientes —
              essa é a razão de a OneB existir.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* 2. PILLARS */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-[7.5%]">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <h2 className="text-primary-400 mb-3 text-xs font-semibold tracking-wider uppercase">
              Como colocamos isso em prática
            </h2>
            <h3 className="text-2xl font-extrabold tracking-tight text-white md:text-3xl">
              Quatro compromissos por trás de cada entrega
            </h3>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {pillars.map((pillar, idx) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: '-100px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <GlassCard
                  className="flex h-full flex-col"
                  glowColor="rgba(62, 240, 170, 0.1)"
                >
                  <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/5 bg-neutral-900">
                    {pillar.icon}
                  </div>
                  <h4 className="mb-2 text-base font-bold text-white">
                    {pillar.title}
                  </h4>
                  <p className="text-sm leading-relaxed text-neutral-400">
                    {pillar.desc}
                  </p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. VISION CALLOUT */}
      <section className="border-t border-white/5 bg-neutral-950/20 py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-[7.5%]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
          >
            <GlassCard
              className="border-secondary-500/20 border p-10 text-center md:p-14"
              glowColor="rgba(62, 240, 170, 0.15)"
            >
              <Eye className="text-secondary-400 mx-auto mb-5 h-8 w-8" />
              <p className="text-secondary-400 mb-3 text-xs font-semibold tracking-wider uppercase">
                Nossa Visão
              </p>
              <p className="text-lg leading-relaxed font-medium text-white md:text-xl">
                Ser reconhecida como uma das principais empresas brasileiras em
                Business Intelligence, Engenharia de Dados e Inteligência
                Artificial — referência em inovação, excelência técnica e
                geração de valor para empresas de todos os portes.
              </p>
            </GlassCard>
          </motion.div>
        </div>
      </section>

      {/* 4. CTA */}
      <section className="py-24">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-[7.5%]">
          <h3 className="text-2xl font-extrabold tracking-tight text-white md:text-3xl">
            Quer entender como a nossa missão se aplica ao seu negócio?
          </h3>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link to="/contato">
              <GlowButton variant="primary">
                Agendar Diagnóstico <ArrowRight className="h-4 w-4" />
              </GlowButton>
            </Link>
            <Link to="/valores">
              <GlowButton variant="glass">Conhecer Nossos Valores</GlowButton>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
export default Mission
