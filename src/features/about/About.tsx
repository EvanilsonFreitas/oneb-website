import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  Award,
  Compass,
  Heart,
  Shield,
  Calendar,
  ArrowUpRight,
  ArrowRight,
  Search,
  DraftingCompass,
  Rocket,
  LineChart,
} from 'lucide-react'
import { GlassCard } from '@/components/common/GlassCard'
import { GlowButton } from '@/components/common/GlowButton'
import { fadeIn, staggerContainer } from '@/animations/variants'
import { teamData } from '@/constants/mockData'
import { Illustration } from '@/components/common/Illustration'

export function About() {
  const pillars = [
    {
      title: 'Nossa Missão',
      desc: 'Transformar dados brutos em decisões inteligentes, simplificando fluxos operacionais e impulsionando a eficiência dos nossos clientes.',
      icon: <Compass className="text-primary-400 h-6 w-6" />,
      to: '/missao',
    },
    {
      title: 'Nossa Visão',
      desc: 'Ser o principal ecossistema analítico de referência no Brasil em Business Intelligence, Microsoft Fabric e Inteligência Artificial corporativa.',
      icon: <Award className="text-secondary-400 h-6 w-6" />,
      to: null,
    },
    {
      title: 'Nossos Valores',
      desc: 'Excelência técnica intransigente, ética em todas as relações comerciais, inovação contínua e compromisso absoluto com o retorno sobre investimento (ROI).',
      icon: <Heart className="text-primary-400 h-6 w-6" />,
      to: '/valores',
    },
  ]

  const timeline = [
    {
      year: '2024',
      title: 'A Fundação',
      desc: 'Fundada por engenheiros de dados e consultores seniores focados exclusivamente em consultoria avançada de SQL Server e relatórios complexos em Power BI.',
    },
    {
      year: '2025',
      title: 'Expansão em Cloud & IA',
      desc: 'Estruturação da célula de Engenharia de Dados em nuvem (Azure/AWS) e primeiros modelos de Machine Learning entregues em grandes indústrias.',
    },
    {
      year: '2026',
      title: 'A Era do Microsoft Fabric',
      desc: 'Parceria estendida, foco absoluto na integração SaaS com Fabric e desenvolvimento de agentes autônomos inteligentes integrados aos bancos SQL.',
    },
  ]

  const methodology = [
    {
      step: '01',
      title: 'Diagnóstico',
      desc: 'Mapeamos a maturidade analítica atual, os sistemas de origem e os principais gargalos de decisão do negócio.',
      icon: <Search className="text-primary-400 h-6 w-6" />,
    },
    {
      step: '02',
      title: 'Arquitetura',
      desc: 'Desenhamos a arquitetura de dados ideal, priorizando custo-benefício, segurança e escalabilidade futura.',
      icon: <DraftingCompass className="text-primary-400 h-6 w-6" />,
    },
    {
      step: '03',
      title: 'Implementação',
      desc: 'Executamos em sprints curtos, com entregas incrementais validadas junto aos stakeholders do projeto.',
      icon: <Rocket className="text-primary-400 h-6 w-6" />,
    },
    {
      step: '04',
      title: 'Evolução Contínua',
      desc: 'Monitoramos performance, governança e ROI, evoluindo a solução junto ao crescimento da operação.',
      icon: <LineChart className="text-primary-400 h-6 w-6" />,
    },
  ]

  return (
    <div className="relative pb-24">
      {/* 1. HERO HEADER */}
      <section className="relative overflow-hidden py-20">
        {/* Decorative planet, half-visible off the top-right edge */}
        <div className="pointer-events-none absolute -top-16 -right-16 h-72 w-72 opacity-70 md:h-96 md:w-96">
          <Illustration
            name="planet.png"
            alt="Planeta com anéis"
            className="h-full w-full object-contain"
          />
        </div>

        <div className="mx-auto max-w-4xl px-6 text-center lg:px-[7.5%]">
          <motion.div
            variants={staggerContainer(0.1, 0.05)}
            initial="hidden"
            animate="show"
            className="flex flex-col items-center"
          >
            <motion.div
              variants={fadeIn('up', 0.5)}
              className="border-secondary-500/20 bg-secondary-500/5 text-secondary-400 mb-4 inline-flex items-center gap-2 rounded-full border px-4 py-1 text-xs font-semibold tracking-wider uppercase"
            >
              Sobre Nós
            </motion.div>
            <motion.h1
              variants={fadeIn('up', 0.6)}
              className="text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl"
            >
              Não Vendemos Relatórios.{' '}
              <span className="text-secondary-500">Vendemos Decisões.</span>
            </motion.h1>
            <motion.p
              variants={fadeIn('up', 0.7)}
              className="mt-6 max-w-2xl text-base leading-relaxed text-neutral-400 md:text-lg"
            >
              A OneB nasceu do inconformismo com painéis lentos e planilhas
              instáveis. Construímos infraestruturas de dados seguras e
              relatórios velozes para que você lidere seu segmento de mercado
              sem dúvidas analíticas.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* 2. PILLARS GRID */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-[7.5%]">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {pillars.map((pillar, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex h-full"
              >
                <GlassCard
                  className="flex h-full flex-col"
                  glowColor="rgba(62, 240, 170, 0.1)"
                >
                  <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/5 bg-neutral-900">
                    {pillar.icon}
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-white">
                    {pillar.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-neutral-400">
                    {pillar.desc}
                  </p>
                  {pillar.to && (
                    <Link
                      to={pillar.to}
                      className="text-primary-400 mt-4 inline-flex items-center gap-1.5 text-xs font-semibold transition-colors hover:text-white"
                    >
                      Saiba mais <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  )}
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. VERTICAL TIMELINE */}
      <section className="border-t border-white/5 bg-neutral-950/20 py-24">
        <div className="mx-auto max-w-5xl px-6 lg:px-[7.5%]">
          <div className="mb-16 text-center">
            <h2 className="text-primary-400 mb-3 text-xs font-semibold tracking-wider uppercase">
              Linha do Tempo
            </h2>
            <h3 className="text-3xl font-extrabold tracking-tight text-white md:text-4xl">
              Nossa Trajetória até Aqui
            </h3>
          </div>

          <div className="relative ml-4 flex flex-col gap-16 border-l border-white/10 pl-6 md:ml-24 md:pl-12">
            {timeline.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="relative"
              >
                {/* Year Indicator left label on desktop */}
                <div className="absolute top-1 left-[-23px] flex w-[90px] items-center justify-end pr-2 md:left-[-170px] md:w-[130px]">
                  <span className="mt-1 mr-3 hidden text-xs font-semibold tracking-widest text-neutral-500 uppercase md:inline">
                    Ano Fiscal
                  </span>
                  <span className="text-primary-400 border-primary-500/20 rounded border bg-neutral-950 px-2 py-0.5 text-lg font-extrabold">
                    {step.year}
                  </span>
                </div>

                {/* Bullets point on the border */}
                <div className="border-primary-500 absolute top-2.5 left-[-31px] z-10 h-3.5 w-3.5 rounded-full border-2 bg-black shadow-[0_0_8px_#3EF0AA] md:left-[-53px]" />

                {/* Content Box */}
                <GlassCard
                  className="max-w-2xl bg-neutral-950/60"
                  glowColor="rgba(62, 240, 170, 0.12)"
                >
                  <h4 className="mb-2 flex items-center gap-2 text-base font-bold text-white">
                    <Calendar className="h-4 w-4 text-neutral-400" />
                    {step.title}
                  </h4>
                  <p className="text-sm leading-relaxed text-neutral-400">
                    {step.desc}
                  </p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3.5. METODOLOGIA */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-[7.5%]">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="text-primary-400 mb-3 text-xs font-semibold tracking-wider uppercase">
              Nossa Metodologia
            </h2>
            <h3 className="text-3xl font-extrabold tracking-tight text-white md:text-4xl">
              Como Conduzimos Cada Projeto
            </h3>
            <p className="mt-4 text-neutral-400">
              Um processo estruturado em quatro etapas, do diagnóstico inicial à
              evolução contínua da solução entregue.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {methodology.map((item, idx) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex h-full"
              >
                <GlassCard
                  className="flex h-full flex-col"
                  glowColor="rgba(62, 240, 170, 0.1)"
                >
                  <span className="mb-4 text-3xl font-extrabold text-white/10">
                    {item.step}
                  </span>
                  <div className="-mt-8 mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/5 bg-neutral-900">
                    {item.icon}
                  </div>
                  <h4 className="mb-2 text-base font-bold text-white">
                    {item.title}
                  </h4>
                  <p className="text-sm leading-relaxed text-neutral-400">
                    {item.desc}
                  </p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. VALUE SHOWCASE */}
      <section className="border-t border-white/5 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-[7.5%]">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            {/* Left side description */}
            <div>
              <h2 className="text-primary-400 mb-3 text-xs font-semibold tracking-wider uppercase">
                Diferenciais
              </h2>
              <h3 className="text-3xl font-extrabold tracking-tight text-white md:text-4xl">
                Por que Empresas Escolhem a OneB?
              </h3>
              <p className="mt-6 leading-relaxed text-neutral-400">
                Nossos especialistas atuam com proximidade, entendendo os
                gargalos reais da sua operação de negócios. Unimos o rigor
                analítico clássico (governança de data warehouses) com a
                agilidade moderna (IA generativa e Microsoft Fabric).
              </p>

              <div className="mt-8 flex flex-col gap-4">
                {[
                  'Consultoria 100% personalizada sem templates prontos',
                  'Arquitetos de dados seniores liderando a execução técnica',
                  'Foco obsessivo em performance e queries de banco leves',
                  'Desenho metodológico estruturado com documentação robusta',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="bg-primary-500 h-1.5 w-1.5 rounded-full" />
                    <span className="text-sm font-medium text-neutral-300">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right side graphical statistics */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <GlassCard
                className="border-white/10 p-8 text-center"
                glowColor="rgba(62, 240, 170, 0.15)"
              >
                <Shield className="text-primary-400 mx-auto mb-4 h-8 w-8" />
                <h4 className="mb-1 text-base font-bold text-white">
                  Segurança Total
                </h4>
                <p className="text-xs text-neutral-400">
                  Padrões de criptografia e conformidade total com LGPD.
                </p>
              </GlassCard>

              <GlassCard
                className="border-white/10 p-8 text-center"
                glowColor="rgba(62, 240, 170, 0.15)"
              >
                <ArrowUpRight
                  className="text-secondary-400 mx-auto mb-4 h-8 w-8 animate-bounce"
                  style={{ animationDuration: '3s' }}
                />
                <h4 className="mb-1 text-base font-bold text-white">
                  Aceleração de Performance
                </h4>
                <p className="text-xs text-neutral-400">
                  Redução média de 70% no tempo de processamento de queries.
                </p>
              </GlassCard>
            </div>
          </div>
        </div>
      </section>

      {/* 5. TEAM SECTION */}
      <section className="border-t border-white/5 bg-neutral-950/20 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-[7.5%]">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="text-secondary-400 mb-3 text-xs font-semibold tracking-wider uppercase">
              Nosso Time
            </h2>
            <h3 className="text-3xl font-extrabold tracking-tight text-white md:text-4xl">
              Especialistas Por Trás dos Resultados
            </h3>
            <p className="mt-4 text-neutral-400">
              Um time enxuto de arquitetos, engenheiros e cientistas de dados
              seniores, cada um focado em sua área de excelência.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {teamData.map((member, idx) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <GlassCard
                  className="flex flex-col items-center gap-3 p-6 text-center"
                  glowColor="rgba(62, 240, 170, 0.1)"
                >
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="h-20 w-20 rounded-full border border-white/10 object-cover"
                  />
                  <h4 className="text-sm font-bold text-white">
                    {member.name}
                  </h4>
                  <p className="text-primary-400 text-xs font-medium">
                    {member.role}
                  </p>
                  <p className="text-xs leading-relaxed text-neutral-400">
                    {member.bio}
                  </p>
                </GlassCard>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="mb-4 text-sm text-neutral-400">
              Quer fazer parte do nosso time?
            </p>
            <Link to="/carreira">
              <GlowButton variant="outline" className="px-6 py-2.5">
                Ver Vagas Abertas <ArrowRight className="h-4 w-4" />
              </GlowButton>
            </Link>
          </div>
        </div>
      </section>

      {/* 6. CTA SECTION */}
      <section className="py-24">
        <div className="mx-auto max-w-5xl px-6 lg:px-[7.5%]">
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <GlassCard
              className="border-secondary-500/20 relative overflow-hidden border bg-neutral-950/80 p-12 text-center"
              glowColor="rgba(62, 240, 170, 0.2)"
            >
              <h3 className="text-3xl font-extrabold tracking-tight text-white md:text-5xl">
                Vamos Construir Sua Estratégia de Dados?
              </h3>
              <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-neutral-300 md:text-lg">
                Fale com nosso time e descubra como transformar sua operação em
                uma referência de decisões orientadas por dados.
              </p>
              <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
                <Link to="/contato">
                  <GlowButton
                    variant="secondary"
                    className="w-full px-8 py-3.5 text-base sm:w-auto"
                  >
                    Falar com um Consultor <ArrowRight className="h-4 w-4" />
                  </GlowButton>
                </Link>
                <Link to="/solucoes">
                  <GlowButton
                    variant="glass"
                    className="w-full px-8 py-3.5 text-base sm:w-auto"
                  >
                    Ver Nossas Soluções
                  </GlowButton>
                </Link>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
export default About
