import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  BarChart3,
  Layers,
  Database,
  Brain,
  Compass,
  Users,
  CheckCircle2,
  TrendingUp,
  Cpu,
  Quote,
  Calendar,
} from 'lucide-react'
import { fadeIn, staggerContainer } from '@/animations/variants'
import { GlassCard } from '@/components/common/GlassCard'
import { GlowButton } from '@/components/common/GlowButton'
import { Marquee } from '@/components/common/Marquee'
import { CountUp } from '@/components/common/CountUp'
import { ScrollIndicator } from '@/components/common/ScrollIndicator'
import { brandLogos } from '@/components/common/BrandLogos'
import { IllustrationEngineering } from '@/components/common/illustrations/SolutionIllustrations'
import {
  solutionsData,
  casesData,
  blogData,
  testimonialsData,
} from '@/constants/mockData'

const getIcon = (iconName: string) => {
  switch (iconName) {
    case 'BarChart3':
      return <BarChart3 className="text-primary-400 h-7 w-7" />
    case 'Layers':
      return <Layers className="text-primary-400 h-7 w-7" />
    case 'Database':
      return <Database className="text-primary-400 h-7 w-7" />
    case 'Brain':
      return <Brain className="text-primary-400 h-7 w-7" />
    case 'Compass':
      return <Compass className="text-primary-400 h-7 w-7" />
    default:
      return <BarChart3 className="text-primary-400 h-7 w-7" />
  }
}

export function Home() {
  // Statistics items
  const stats = [
    {
      value: '100M+',
      label: 'Linhas de Dados Processadas',
      icon: <Database className="text-primary-400 h-5 w-5" />,
    },
    {
      value: '99.9%',
      label: 'SLA de Acurácia em Cargas',
      icon: <CheckCircle2 className="text-primary-400 h-5 w-5" />,
    },
    {
      value: '50+',
      label: 'Clientes Corporativos Atendidos',
      icon: <Users className="text-primary-400 h-5 w-5" />,
    },
    {
      value: '18% +',
      label: 'Média de Redução de Custos',
      icon: <TrendingUp className="text-primary-400 h-5 w-5" />,
    },
  ]

  // Partner technology list
  const techLogos = [
    'Microsoft Fabric',
    'Power BI',
    'SQL Server',
    'Azure Synapse',
    'Python',
    'Apache Spark',
    'Databricks',
    'Snowflake',
  ]

  // Value pillars (informative band)
  const valuePillars = [
    'Do dado bruto ao data analytics executivo',
    'UI/UX e acessibilidade em infografia de dados',
    'Performance sob medida — do pequeno ao grande porte',
  ]

  // "From raw data to decision" journey
  const journey = [
    {
      step: '01',
      title: 'Coletamos & Integramos',
      desc: 'Unificamos dados dispersos de ERPs, CRMs, planilhas e APIs em uma base confiável.',
      icon: <Database className="text-primary-400 h-6 w-6" />,
    },
    {
      step: '02',
      title: 'Estruturamos & Modelamos',
      desc: 'Construímos pipelines e Data Warehouses governados, limpos e prontos para análise.',
      icon: <Layers className="text-primary-400 h-6 w-6" />,
    },
    {
      step: '03',
      title: 'Analisamos & Preditamos',
      desc: 'Aplicamos BI, dashboards e modelos de IA para revelar padrões e antecipar tendências.',
      icon: <Brain className="text-secondary-400 h-6 w-6" />,
    },
    {
      step: '04',
      title: 'Decidimos & Evoluímos',
      desc: 'Entregamos inteligência acionável que orienta decisões e evolui com o seu negócio.',
      icon: <TrendingUp className="text-secondary-400 h-6 w-6" />,
    },
  ]

  return (
    <div className="relative overflow-hidden">
      {/* 1. HERO SECTION */}
      <section className="relative flex min-h-[85vh] items-center justify-center pt-20 pb-16">
        {/* Soft colorful blur background shapes */}
        <div className="bg-primary-500/10 absolute top-1/4 left-1/4 -z-10 h-72 w-72 animate-pulse rounded-full blur-[100px]" />
        <div className="bg-secondary-500/10 absolute right-1/4 bottom-1/4 -z-10 h-80 w-80 animate-pulse rounded-full blur-[120px]" />

        <div className="mx-auto max-w-7xl px-6 text-center lg:px-[7.5%]">
          <motion.div
            variants={staggerContainer(0.12, 0.05)}
            initial="hidden"
            animate="show"
            className="flex flex-col items-center"
          >
            {/* Tag/Banner superior */}
            <motion.div
              variants={fadeIn('up', 0.5)}
              className="border-primary-500/20 bg-primary-500/5 mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 backdrop-blur-md"
            >
              <Cpu
                className="text-primary-400 h-3.5 w-3.5 animate-spin"
                style={{ animationDuration: '4s' }}
              />
              <span className="text-primary-400 text-xs font-semibold tracking-wider uppercase">
                Plataforma Analítica Premium
              </span>
            </motion.div>

            {/* Principal Title */}
            <motion.h1
              variants={fadeIn('up', 0.6)}
              className="max-w-4xl font-sans text-4xl leading-[1.1] font-extrabold tracking-tight text-white md:text-6xl lg:text-7xl"
            >
              Decisões Inteligentes{' '}
              <span className="text-primary-500">Esculpidas em Dados</span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              variants={fadeIn('up', 0.7)}
              className="mt-8 max-w-2xl text-base leading-relaxed text-neutral-400 md:text-lg lg:text-xl"
            >
              Transformamos complexidade em clareza estratégica. Arquitetura de
              dados moderna, Microsoft Fabric, inteligência artificial e BI de
              alto impacto para líderes de mercado.
            </motion.p>

            {/* CTA Actions */}
            <motion.div
              variants={fadeIn('up', 0.8)}
              className="mt-10 flex w-full max-w-md flex-col justify-center gap-4 sm:flex-row"
            >
              <Link to="/contato" className="w-full sm:w-auto">
                <GlowButton
                  variant="primary"
                  className="w-full px-8 py-3.5 sm:w-auto"
                >
                  Agendar Diagnóstico <ArrowRight className="h-4 w-4" />
                </GlowButton>
              </Link>
              <Link to="/solucoes" className="w-full sm:w-auto">
                <GlowButton
                  variant="glass"
                  className="w-full px-8 py-3.5 sm:w-auto"
                >
                  Ver Soluções
                </GlowButton>
              </Link>
            </motion.div>

            <motion.div variants={fadeIn('up', 0.9)} className="mt-12">
              <ScrollIndicator />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 1.5. CLIENTS STRIP — label on dark bg, full-bleed green logo marquee below */}
      <section className="relative z-10 py-10">
        <p className="text-primary-400 mb-6 text-center text-xs font-semibold tracking-wider uppercase">
          Empresas que Confiam na OneB
        </p>
        <div className="bg-primary-500 py-14">
          <Marquee
            durationSeconds={38}
            itemClassName="gap-16 pr-16"
            fade={false}
          >
            {brandLogos.map((Logo, idx) => (
              <Logo key={idx} className="h-9 w-auto text-neutral-950" />
            ))}
          </Marquee>
        </div>
      </section>

      {/* 2. STATS SECTION */}
      <section className="relative z-10 border-y border-white/5 bg-neutral-950/20 py-12 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-6 lg:px-[7.5%]">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex flex-col items-center p-4 text-center"
              >
                <div className="mb-3 shrink-0 rounded-lg border border-white/5 bg-white/5 p-2">
                  {stat.icon}
                </div>
                <span className="text-3xl font-extrabold tracking-tight text-white md:text-4xl">
                  <CountUp value={stat.value} />
                </span>
                <span className="mt-2 text-xs text-neutral-400 md:text-sm">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 2.5. VALUE PILLARS BAND */}
      <section className="relative z-10 py-24">
        <div className="mx-auto max-w-5xl px-6 lg:px-[7.5%]">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-3xl text-center text-2xl font-extrabold tracking-tight text-white md:text-4xl"
          >
            Transformando dados em decisões que{' '}
            <span className="text-primary-500">impulsionam o futuro.</span>
          </motion.h2>

          <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/8 bg-white/8 md:grid-cols-3">
            {valuePillars.map((pillar, i) => (
              <motion.div
                key={pillar}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex flex-col items-center gap-4 bg-black px-6 py-10 text-center"
              >
                <div className="bg-primary-500/10 border-primary-500/20 flex h-11 w-11 items-center justify-center rounded-full border">
                  <CheckCircle2 className="text-primary-400 h-6 w-6" />
                </div>
                <p className="max-w-[220px] text-sm font-medium text-neutral-300">
                  {pillar}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. TECHNOLOGY SCROLLER — infinite marquee */}
      <section className="bg-black/40 py-10">
        <p className="text-primary-400 mb-6 text-center text-xs font-semibold tracking-wider uppercase">
          Especialistas nas Principais Tecnologias de Dados
        </p>
        <Marquee durationSeconds={30} itemClassName="gap-4 pr-4">
          {techLogos.map((tech, idx) => (
            <div
              key={idx}
              className="hover:text-primary-400 hover:border-primary-500/25 shrink-0 cursor-default rounded-xl border border-white/5 bg-neutral-950/50 px-6 py-3.5 text-sm font-medium text-neutral-400 backdrop-blur-md transition-all duration-300"
            >
              {tech}
            </div>
          ))}
        </Marquee>
      </section>

      {/* 4. CAPABILITIES / SOLUTIONS GRID */}
      <section className="relative z-10 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-[7.5%]">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="text-primary-400 mb-3 text-xs font-semibold tracking-wider uppercase">
              O que fazemos
            </h2>
            <h3 className="text-3xl font-extrabold tracking-tight text-white md:text-4xl">
              Nossas Especialidades Analíticas
            </h3>
            <p className="mt-4 text-neutral-400">
              Desenhamos e implementamos soluções sob medida, da infraestrutura
              de banco de dados até a tomada de decisões na diretoria.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {solutionsData.map((solution, i) => (
              <motion.div
                key={solution.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex h-full"
              >
                <GlassCard
                  className="group flex h-full flex-col justify-between"
                  glowColor="rgba(62, 240, 170, 0.12)"
                >
                  <div>
                    <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-white/5 bg-neutral-900">
                      {getIcon(solution.icon)}
                    </div>
                    <h4 className="group-hover:text-primary-400 mb-3 text-lg font-bold text-white transition-colors">
                      {solution.title}
                    </h4>
                    <p className="mb-6 text-sm leading-relaxed text-neutral-400">
                      {solution.description}
                    </p>
                  </div>

                  <div className="mt-auto">
                    <div className="mb-6 flex flex-wrap gap-1.5">
                      {solution.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="rounded border border-white/5 bg-white/5 px-2 py-0.5 text-[10px] text-neutral-400"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <Link
                      to={`/solucoes/${solution.slug}`}
                      className="text-primary-400 inline-flex items-center gap-1.5 text-xs font-semibold transition-colors group-hover:text-white"
                    >
                      Saiba mais <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4.5. DATA-TO-DECISION JOURNEY (informative + illustration) */}
      <section className="relative z-10 border-t border-white/5 bg-neutral-950/20 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-[7.5%]">
          <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
            <div>
              <h2 className="text-primary-400 mb-3 text-xs font-semibold tracking-wider uppercase">
                Nosso Método
              </h2>
              <h3 className="text-3xl font-extrabold tracking-tight text-white md:text-4xl">
                Do Dado Bruto à Decisão Estratégica
              </h3>
              <p className="mt-4 max-w-lg leading-relaxed text-neutral-400">
                Não entregamos apenas relatórios — conduzimos toda a jornada do
                dado, transformando complexidade em clareza acionável em quatro
                etapas.
              </p>

              <div className="mt-10 flex flex-col gap-6">
                {journey.map((item, idx) => (
                  <motion.div
                    key={item.step}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="flex flex-col items-center">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/8 bg-neutral-900">
                        {item.icon}
                      </div>
                      {idx < journey.length - 1 && (
                        <div className="mt-2 h-full w-px flex-1 bg-gradient-to-b from-white/15 to-transparent" />
                      )}
                    </div>
                    <div className="pb-2">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-bold tracking-widest text-neutral-600">
                          {item.step}
                        </span>
                        <h4 className="text-sm font-bold text-white">
                          {item.title}
                        </h4>
                      </div>
                      <p className="mt-1.5 text-sm leading-relaxed text-neutral-400">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="relative lg:sticky lg:top-28">
              <div className="bg-primary-500/10 pointer-events-none absolute inset-0 -z-10 rounded-3xl blur-[100px]" />
              <GlassCard
                className="overflow-hidden border-white/10 p-0"
                interactive={false}
                glowColor="rgba(62, 240, 170, 0.15)"
              >
                <IllustrationEngineering className="h-auto w-full" />
              </GlassCard>
              <div className="mt-6 grid grid-cols-3 gap-4">
                {[
                  { v: '+50', l: 'Fontes integradas' },
                  { v: '99.9%', l: 'SLA de cargas' },
                  { v: '24/7', l: 'Monitoramento' },
                ].map((s) => (
                  <div
                    key={s.l}
                    className="rounded-xl border border-white/8 bg-black/40 p-4 text-center"
                  >
                    <p className="text-primary-400 text-lg font-extrabold">
                      {s.v}
                    </p>
                    <p className="mt-1 text-[10px] text-neutral-500">{s.l}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FEATURED CASES */}
      <section className="relative z-10 border-t border-white/5 bg-neutral-950/20 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-[7.5%]">
          <div className="mb-16 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <div>
              <h2 className="text-primary-400 mb-3 text-xs font-semibold tracking-wider uppercase">
                Cases de Sucesso
              </h2>
              <h3 className="text-3xl font-extrabold tracking-tight text-white md:text-4xl">
                Histórias de Sucesso Reais
              </h3>
            </div>
            <Link to="/cases">
              <GlowButton variant="outline" className="px-5 py-2.5">
                Ver Todos os Cases
              </GlowButton>
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {casesData.map((item, i) => (
              <motion.div
                key={item.slug}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="flex h-full"
              >
                <GlassCard
                  className="flex h-full flex-col overflow-hidden p-0"
                  glowColor="rgba(62, 240, 170, 0.15)"
                >
                  {/* Visual card header image background placeholder */}
                  <div className="relative h-44 w-full overflow-hidden border-b border-white/5 bg-neutral-900">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover opacity-60 transition-transform duration-500 hover:scale-105"
                    />
                    <span className="text-primary-400 border-primary-500/20 absolute top-4 left-4 rounded border bg-black/75 px-3 py-1 text-xs font-semibold backdrop-blur-sm">
                      {item.category}
                    </span>
                  </div>

                  <div className="flex flex-grow flex-col justify-between p-6">
                    <div>
                      <span className="text-[11px] font-bold tracking-wider text-neutral-500 uppercase">
                        {item.client}
                      </span>
                      <h4 className="mt-2 mb-3 line-clamp-2 text-base font-bold text-white">
                        {item.title}
                      </h4>
                      <p className="mb-6 line-clamp-3 text-xs leading-relaxed text-neutral-400">
                        {item.summary}
                      </p>
                    </div>

                    <div className="mt-auto">
                      {/* Highlighted KPIs */}
                      <div className="mb-4 grid grid-cols-2 gap-2 border-t border-white/5 pt-4">
                        {item.kpis.slice(0, 2).map((kpi, idx) => (
                          <div key={idx}>
                            <p className="text-primary-400 text-sm font-extrabold">
                              {kpi.value}
                            </p>
                            <p className="text-[9px] tracking-tight text-neutral-400 uppercase">
                              {kpi.label}
                            </p>
                          </div>
                        ))}
                      </div>
                      <Link
                        to={`/cases/${item.slug}`}
                        className="hover:text-primary-400 inline-flex items-center gap-1.5 text-xs font-semibold text-white transition-colors"
                      >
                        Estudo de caso <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5.5. TESTIMONIALS SECTION */}
      <section className="relative z-10 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-[7.5%]">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="text-secondary-400 mb-3 text-xs font-semibold tracking-wider uppercase">
              Depoimentos
            </h2>
            <h3 className="text-3xl font-extrabold tracking-tight text-white md:text-4xl">
              O Que Nossos Clientes Dizem
            </h3>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {testimonialsData.map((testimonial, i) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex h-full"
              >
                <GlassCard
                  className="flex h-full flex-col justify-between"
                  glowColor="rgba(62, 240, 170, 0.12)"
                >
                  <Quote className="text-secondary-500/40 mb-4 h-7 w-7" />
                  <p className="mb-6 text-sm leading-relaxed text-neutral-300">
                    “{testimonial.quote}”
                  </p>
                  <div className="mt-auto flex items-center gap-3 border-t border-white/5 pt-4">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="h-10 w-10 rounded-full border border-white/10 object-cover"
                    />
                    <div>
                      <p className="text-sm font-semibold text-white">
                        {testimonial.name}
                      </p>
                      <p className="text-xs text-neutral-500">
                        {testimonial.role} · {testimonial.company}
                      </p>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. BLOG PREVIEW SECTION */}
      <section className="relative z-10 border-t border-white/5 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-[7.5%]">
          <div className="mb-16 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <div>
              <h2 className="text-primary-400 mb-3 text-xs font-semibold tracking-wider uppercase">
                Nosso Blog
              </h2>
              <h3 className="text-3xl font-extrabold tracking-tight text-white md:text-4xl">
                Artigos e Conhecimento
              </h3>
            </div>
            <Link to="/blog">
              <GlowButton variant="outline" className="px-5 py-2.5">
                Ir Para o Blog
              </GlowButton>
            </Link>
          </div>

          <div className="flex flex-col border-t border-white/10">
            {blogData.map((post, i) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group grid grid-cols-1 gap-3 border-b border-white/10 py-8 md:grid-cols-12 md:items-center md:gap-8"
              >
                <div className="flex items-center gap-3 text-xs text-neutral-500 md:col-span-3">
                  <Calendar className="h-3.5 w-3.5" />
                  <span>{post.date}</span>
                  <span className="text-neutral-700">•</span>
                  <span>{post.readTime} de leitura</span>
                </div>

                <div className="md:col-span-7">
                  <h4 className="group-hover:text-primary-400 text-lg leading-snug font-bold text-white transition-colors md:text-xl">
                    <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                  </h4>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <span className="border-secondary-500/25 bg-secondary-500/5 text-secondary-400 rounded-full border px-2.5 py-0.5 text-[10px] font-semibold tracking-wide uppercase">
                      {post.category}
                    </span>
                    {post.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 px-2.5 py-0.5 text-[10px] text-neutral-400"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex justify-start md:col-span-2 md:justify-end">
                  <Link
                    to={`/blog/${post.slug}`}
                    className="text-primary-400 inline-flex items-center gap-1.5 text-xs font-semibold whitespace-nowrap transition-all group-hover:gap-2.5 group-hover:text-white"
                  >
                    Ler artigo <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CTA SECTION */}
      <section className="relative z-10 border-t border-white/5 py-24">
        <div className="mx-auto max-w-5xl px-6 lg:px-[7.5%]">
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <GlassCard
              className="border-primary-500/20 relative overflow-hidden border bg-neutral-950/80 p-12 text-center"
              glowColor="rgba(62, 240, 170, 0.2)"
            >
              {/* Pulsing light behind */}
              <div className="bg-primary-500/10 absolute top-1/2 left-1/2 -z-10 h-72 w-72 -translate-x-1/2 -translate-y-1/2 animate-pulse rounded-full blur-[80px]" />

              <h3 className="text-3xl font-extrabold tracking-tight text-white md:text-5xl">
                Pronto Para Liderar na Era dos Dados?
              </h3>
              <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-neutral-300 md:text-lg">
                Agende uma reunião técnica de diagnóstico gratuita de 30 minutos
                com nossos consultores seniores. Identificaremos gargalos
                operacionais e oportunidades de otimização de custos em seus
                bancos de dados e relatórios.
              </p>
              <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
                <Link to="/contato">
                  <GlowButton
                    variant="primary"
                    className="w-full px-8 py-3.5 text-base sm:w-auto"
                  >
                    Agendar Diagnóstico Gratuito{' '}
                    <ArrowRight className="h-4 w-4" />
                  </GlowButton>
                </Link>
                <Link to="/quem-somos">
                  <GlowButton
                    variant="glass"
                    className="w-full px-8 py-3.5 text-base sm:w-auto"
                  >
                    Conhecer a OneB
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
export default Home
