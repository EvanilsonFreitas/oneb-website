import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { motion } from 'framer-motion'
import {
  Sparkles,
  Users,
  Rocket,
  GraduationCap,
  MapPin,
  Briefcase,
  Send,
} from 'lucide-react'
import { leadService } from '@/services/leadService'
import { GlassCard } from '@/components/common/GlassCard'
import { GlowButton } from '@/components/common/GlowButton'
import { careersData } from '@/constants/mockData'
import { IllustrationRocket } from '@/components/common/illustrations/SpaceIllustrations'

const talentSchema = z.object({
  name: z
    .string()
    .min(2, { message: 'O nome precisa ter pelo menos 2 caracteres.' }),
  email: z.string().email({ message: 'Informe um endereço de e-mail válido.' }),
  phone: z
    .string()
    .min(8, { message: 'Informe um número de telefone com DDD.' }),
  position: z.string(),
  linkedin: z
    .string()
    .min(3, { message: 'Informe o link do seu perfil no LinkedIn.' }),
  message: z.string().optional(),
})

type TalentFormValues = z.infer<typeof talentSchema>

const cultureValues = [
  {
    title: 'Aprendizado Contínuo',
    desc: 'Incentivamos certificações, estudo e experimentação com novas tecnologias de dados.',
    icon: <GraduationCap className="text-primary-400 h-6 w-6" />,
  },
  {
    title: 'Trabalho Remoto-First',
    desc: 'Times distribuídos em todo o Brasil, com encontros presenciais pontuais e opcionais.',
    icon: <MapPin className="text-primary-400 h-6 w-6" />,
  },
  {
    title: 'Times Enxutos e Autônomos',
    desc: 'Squads pequenos com autonomia real de decisão técnica e proximidade com o cliente.',
    icon: <Users className="text-secondary-400 h-6 w-6" />,
  },
  {
    title: 'Crescimento Acelerado',
    desc: 'Projetos desafiadores desde o primeiro mês, com mentoria direta de especialistas seniores.',
    icon: <Rocket className="text-secondary-400 h-6 w-6" />,
  },
]

export function Careers() {
  const [formStatus, setFormStatus] = useState<{
    type: 'success' | 'error' | null
    message: string
  }>({ type: null, message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<TalentFormValues>({
    resolver: zodResolver(talentSchema),
    defaultValues: { position: 'banco-de-talentos' },
  })

  const onSubmitApplication = async (data: TalentFormValues) => {
    setIsSubmitting(true)
    setFormStatus({ type: null, message: '' })
    try {
      const res = await leadService.submitTalentApplication(data)
      setFormStatus({ type: 'success', message: res.message })
      reset()
    } catch {
      setFormStatus({
        type: 'error',
        message: 'Ocorreu um erro no envio. Tente novamente.',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const onFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    void handleSubmit(onSubmitApplication)(e)
  }

  return (
    <div className="relative pb-24">
      {/* 1. HERO HEADER */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6 lg:px-[7.5%]">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center text-center lg:items-start lg:text-left"
            >
              <div className="border-secondary-500/20 bg-secondary-500/5 text-secondary-400 mb-4 inline-flex items-center gap-2 rounded-full border px-4 py-1 text-xs font-semibold tracking-wider uppercase">
                <Sparkles className="h-3.5 w-3.5" /> Carreira
              </div>
              <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">
                Construa o Futuro dos{' '}
                <span className="text-secondary-500">Dados Conosco</span>
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-neutral-400 md:text-lg">
                Somos um time remoto-first de especialistas em dados, engenharia
                e inteligência artificial. Se você tem paixão por resolver
                problemas complexos com dados, queremos te conhecer.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mx-auto hidden h-72 w-72 lg:block"
            >
              <IllustrationRocket className="h-full w-full" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. CULTURE GRID */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-[7.5%]">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {cultureValues.map((value, idx) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <GlassCard
                  className="flex h-full items-start gap-4"
                  glowColor="rgba(126, 87, 225, 0.12)"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/5 bg-neutral-900">
                    {value.icon}
                  </div>
                  <div>
                    <h3 className="mb-1.5 text-sm font-bold text-white">
                      {value.title}
                    </h3>
                    <p className="text-xs leading-relaxed text-neutral-400">
                      {value.desc}
                    </p>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. OPEN POSITIONS */}
      <section className="border-t border-white/5 bg-neutral-950/20 py-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-[7.5%]">
          <div className="mb-12 text-center">
            <h2 className="text-primary-400 mb-3 text-xs font-semibold tracking-wider uppercase">
              Vagas Abertas
            </h2>
            <h3 className="text-3xl font-extrabold tracking-tight text-white md:text-4xl">
              Oportunidades no Time OneBI
            </h3>
          </div>

          <div className="flex flex-col gap-4">
            {careersData.map((position) => (
              <GlassCard
                key={position.slug}
                className="flex flex-col items-start justify-between gap-4 border-white/5 sm:flex-row sm:items-center"
                interactive={false}
              >
                <div>
                  <h4 className="text-sm font-bold text-white md:text-base">
                    {position.title}
                  </h4>
                  <div className="mt-2 flex flex-wrap items-center gap-3 text-xs text-neutral-400">
                    <span className="flex items-center gap-1.5">
                      <Briefcase className="h-3.5 w-3.5" />{' '}
                      {position.department}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="h-3.5 w-3.5" /> {position.location}
                    </span>
                    <span className="border-primary-500/20 bg-primary-500/10 text-primary-400 rounded border px-2 py-0.5 text-[10px] font-semibold uppercase">
                      {position.level}
                    </span>
                  </div>
                  <p className="mt-3 max-w-2xl text-xs leading-relaxed text-neutral-400">
                    {position.description}
                  </p>
                </div>
                <GlowButton
                  variant="outline"
                  className="w-full shrink-0 px-5 py-2.5 text-xs sm:w-auto"
                  onClick={() =>
                    setValue('position', position.slug, {
                      shouldValidate: true,
                    })
                  }
                >
                  Candidatar-se
                </GlowButton>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* 4. TALENT POOL FORM */}
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-6 lg:px-[7.5%]">
          <div className="mb-10 text-center">
            <h2 className="text-secondary-400 mb-3 text-xs font-semibold tracking-wider uppercase">
              Banco de Talentos
            </h2>
            <h3 className="text-2xl font-extrabold tracking-tight text-white md:text-3xl">
              Não tem uma vaga aberta para você agora?
            </h3>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-neutral-400">
              Deixe seu perfil em nosso banco de talentos. Entramos em contato
              assim que surgir uma oportunidade compatível.
            </p>
          </div>

          <GlassCard className="border-white/10 p-8" interactive={false}>
            <form onSubmit={onFormSubmit} className="flex flex-col gap-5">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="talent-name"
                    className="mb-2 block text-xs font-semibold text-neutral-400 uppercase"
                  >
                    Nome Completo
                  </label>
                  <input
                    id="talent-name"
                    type="text"
                    placeholder="Seu nome"
                    {...register('name')}
                    className="focus:border-primary-500/50 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-xs text-white placeholder-neutral-600 focus:outline-none"
                  />
                  {errors.name && (
                    <p className="mt-1 text-[10px] text-rose-400">
                      {errors.name.message}
                    </p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="talent-email"
                    className="mb-2 block text-xs font-semibold text-neutral-400 uppercase"
                  >
                    E-mail
                  </label>
                  <input
                    id="talent-email"
                    type="email"
                    placeholder="seu-nome@email.com"
                    {...register('email')}
                    className="focus:border-primary-500/50 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-xs text-white placeholder-neutral-600 focus:outline-none"
                  />
                  {errors.email && (
                    <p className="mt-1 text-[10px] text-rose-400">
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="talent-phone"
                    className="mb-2 block text-xs font-semibold text-neutral-400 uppercase"
                  >
                    Telefone
                  </label>
                  <input
                    id="talent-phone"
                    type="text"
                    placeholder="(11) 99999-9999"
                    {...register('phone')}
                    className="focus:border-primary-500/50 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-xs text-white placeholder-neutral-600 focus:outline-none"
                  />
                  {errors.phone && (
                    <p className="mt-1 text-[10px] text-rose-400">
                      {errors.phone.message}
                    </p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="talent-linkedin"
                    className="mb-2 block text-xs font-semibold text-neutral-400 uppercase"
                  >
                    Perfil no LinkedIn
                  </label>
                  <input
                    id="talent-linkedin"
                    type="text"
                    placeholder="linkedin.com/in/seu-perfil"
                    {...register('linkedin')}
                    className="focus:border-primary-500/50 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-xs text-white placeholder-neutral-600 focus:outline-none"
                  />
                  {errors.linkedin && (
                    <p className="mt-1 text-[10px] text-rose-400">
                      {errors.linkedin.message}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label
                  htmlFor="talent-position"
                  className="mb-2 block text-xs font-semibold text-neutral-400 uppercase"
                >
                  Vaga de Interesse
                </label>
                <select
                  id="talent-position"
                  {...register('position')}
                  className="focus:border-primary-500/50 w-full rounded-xl border border-white/10 bg-neutral-950 px-4 py-3 text-xs text-white focus:outline-none"
                >
                  <option value="banco-de-talentos">
                    Banco de Talentos (sem vaga específica)
                  </option>
                  {careersData.map((position) => (
                    <option key={position.slug} value={position.slug}>
                      {position.title}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="talent-message"
                  className="mb-2 block text-xs font-semibold text-neutral-400 uppercase"
                >
                  Mensagem (opcional)
                </label>
                <textarea
                  id="talent-message"
                  rows={3}
                  placeholder="Conte brevemente sobre sua experiência..."
                  {...register('message')}
                  className="focus:border-primary-500/50 w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-xs text-white placeholder-neutral-600 focus:outline-none"
                />
              </div>

              <div className="mt-2 flex justify-end">
                <GlowButton
                  type="submit"
                  disabled={isSubmitting}
                  variant="secondary"
                  className="px-8 py-3"
                >
                  {isSubmitting ? 'Enviando...' : 'Enviar Candidatura'}{' '}
                  <Send className="h-4 w-4" />
                </GlowButton>
              </div>

              {formStatus.message && (
                <div
                  className={`mt-4 rounded-xl border p-4 text-xs font-medium ${
                    formStatus.type === 'success'
                      ? 'border-emerald-500/30 bg-emerald-500/5 text-emerald-400'
                      : 'border-rose-500/30 bg-rose-500/5 text-rose-400'
                  }`}
                >
                  {formStatus.message}
                </div>
              )}
            </form>
          </GlassCard>
        </div>
      </section>
    </div>
  )
}
export default Careers
