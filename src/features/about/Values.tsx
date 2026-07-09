import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  Heart,
  ArrowRight,
  Award,
  Scale,
  Eye,
  Lightbulb,
  HandHeart,
  GraduationCap,
  ClipboardCheck,
  BadgeCheck,
  TrendingUp,
  Lock,
  Users,
  Target,
} from 'lucide-react'
import { GlassCard } from '@/components/common/GlassCard'
import { GlowButton } from '@/components/common/GlowButton'
import { fadeIn, staggerContainer } from '@/animations/variants'

const values = [
  {
    title: 'Excelência Técnica',
    desc: 'Rigor de engenharia em cada linha de código e em cada modelo de dados que entregamos.',
    icon: <Award className="h-6 w-6" />,
  },
  {
    title: 'Ética',
    desc: 'Recomendamos o que é certo para o cliente, mesmo quando isso significa um projeto menor.',
    icon: <Scale className="h-6 w-6" />,
  },
  {
    title: 'Transparência',
    desc: 'Prazos, custos e limitações técnicas são comunicados com clareza, sem letras miúdas.',
    icon: <Eye className="h-6 w-6" />,
  },
  {
    title: 'Inovação',
    desc: 'Acompanhamos a fronteira tecnológica em dados e IA para trazer o que realmente gera vantagem competitiva.',
    icon: <Lightbulb className="h-6 w-6" />,
  },
  {
    title: 'Compromisso',
    desc: 'Responsabilidade de ponta a ponta com o resultado combinado, não apenas com o escopo contratado.',
    icon: <HandHeart className="h-6 w-6" />,
  },
  {
    title: 'Aprendizado Contínuo',
    desc: 'Certificações, estudo constante e experimentação fazem parte da rotina de todos os nossos times.',
    icon: <GraduationCap className="h-6 w-6" />,
  },
  {
    title: 'Responsabilidade',
    desc: 'Tratamos dados de terceiros com o mesmo cuidado que gostaríamos que tivessem com os nossos.',
    icon: <ClipboardCheck className="h-6 w-6" />,
  },
  {
    title: 'Qualidade',
    desc: 'Nada vai para produção sem revisão técnica — testamos, validamos e documentamos antes de entregar.',
    icon: <BadgeCheck className="h-6 w-6" />,
  },
  {
    title: 'Escalabilidade',
    desc: 'Projetamos arquiteturas pensando no volume de dados de amanhã, não apenas no de hoje.',
    icon: <TrendingUp className="h-6 w-6" />,
  },
  {
    title: 'Segurança',
    desc: 'Governança, criptografia e conformidade com a LGPD não são opcionais em nenhum projeto.',
    icon: <Lock className="h-6 w-6" />,
  },
  {
    title: 'Colaboração',
    desc: 'Trabalhamos lado a lado com os times internos do cliente, transferindo conhecimento, não dependência.',
    icon: <Users className="h-6 w-6" />,
  },
  {
    title: 'Foco no Cliente',
    desc: 'Cada decisão técnica é avaliada por um único critério: o impacto real no negócio do cliente.',
    icon: <Target className="h-6 w-6" />,
  },
]

export function Values() {
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
              className="border-secondary-500/20 bg-secondary-500/5 text-secondary-400 mb-4 inline-flex items-center gap-2 rounded-full border px-4 py-1 text-xs font-semibold tracking-wider uppercase"
            >
              <Heart className="h-3.5 w-3.5" /> Nossos Valores
            </motion.div>
            <motion.h1
              variants={fadeIn('up', 0.6)}
              className="text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl"
            >
              Os princípios que{' '}
              <span className="text-secondary-500">não negociamos</span>
            </motion.h1>
            <motion.p
              variants={fadeIn('up', 0.7)}
              className="mt-6 max-w-2xl text-base leading-relaxed text-neutral-400 md:text-lg"
            >
              Doze compromissos que orientam cada decisão técnica, comercial e
              de relacionamento na OneB — independente do tamanho do projeto ou
              do cliente.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* 2. VALUES GRID */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-[7.5%]">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value, idx) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: (idx % 3) * 0.08 }}
              >
                <GlassCard
                  className="flex h-full flex-col"
                  glowColor={
                    idx % 2 === 0
                      ? 'rgba(62, 240, 170, 0.1)'
                      : 'rgba(62, 240, 170, 0.1)'
                  }
                >
                  <div
                    className={`mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/5 bg-neutral-900 ${
                      idx % 2 === 0 ? 'text-primary-400' : 'text-secondary-400'
                    }`}
                  >
                    {value.icon}
                  </div>
                  <h3 className="mb-2 text-base font-bold text-white">
                    {value.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-neutral-400">
                    {value.desc}
                  </p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CTA */}
      <section className="border-t border-white/5 py-24">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-[7.5%]">
          <h3 className="text-2xl font-extrabold tracking-tight text-white md:text-3xl">
            Valores só significam algo quando viram entrega.
          </h3>
          <p className="mt-4 text-sm text-neutral-400 md:text-base">
            Veja como eles aparecem nos projetos que já colocamos em produção.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link to="/cases">
              <GlowButton variant="primary" className="px-8 py-3">
                Ver Cases de Sucesso <ArrowRight className="h-4 w-4" />
              </GlowButton>
            </Link>
            <Link to="/missao">
              <GlowButton variant="glass" className="px-8 py-3">
                Conhecer Nossa Missão
              </GlowButton>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
export default Values
