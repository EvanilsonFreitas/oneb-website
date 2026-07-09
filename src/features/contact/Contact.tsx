import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { motion } from 'framer-motion'
import {
  Mail,
  Phone,
  MapPin,
  Calendar,
  Clock,
  ChevronRight,
  Check,
} from 'lucide-react'
import { leadService } from '@/services/leadService'
import { GlassCard } from '@/components/common/GlassCard'
import { GlowButton } from '@/components/common/GlowButton'

// Form validation schema with Zod
const contactSchema = z.object({
  name: z
    .string()
    .min(2, { message: 'O nome precisa ter pelo menos 2 caracteres.' }),
  email: z.string().email({ message: 'Informe um endereço de e-mail válido.' }),
  phone: z
    .string()
    .min(8, { message: 'Informe um número de telefone com DDD.' }),
  company: z.string().min(2, { message: 'Informe o nome da sua empresa.' }),
  solution: z.string(),
  message: z
    .string()
    .min(10, { message: 'Sua mensagem precisa ter pelo menos 10 caracteres.' }),
})

type ContactFormValues = z.infer<typeof contactSchema>

export function Contact() {
  const [formStatus, setFormStatus] = useState<{
    type: 'success' | 'error' | null
    message: string
  }>({
    type: null,
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  // React Hook Form initialization
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      solution: 'business-intelligence',
    },
  })

  const onSubmitContact = async (data: ContactFormValues) => {
    setIsSubmitting(true)
    setFormStatus({ type: null, message: '' })
    try {
      const res = await leadService.submitContact(data)
      setFormStatus({ type: 'success', message: res.message })
      reset()
    } catch {
      setFormStatus({
        type: 'error',
        message: 'Ocorreu um erro no servidor. Tente novamente.',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const onFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    void handleSubmit(onSubmitContact)(e)
  }

  // Interactive scheduler states
  const [selectedDate, setSelectedDate] = useState<string>('')
  const [selectedTime, setSelectedTime] = useState<string>('')
  const [schedulerName, setSchedulerName] = useState('')
  const [schedulerEmail, setSchedulerEmail] = useState('')
  const [schedulerCompany, setSchedulerCompany] = useState('')
  const [schedulerNotes, setSchedulerNotes] = useState('')
  const [schedulerStatus, setSchedulerStatus] = useState<string | null>(null)
  const [schedulerLoading, setSchedulerLoading] = useState(false)

  const dateOptions = [
    { day: 'Seg', date: '13 Jul', value: '2026-07-13' },
    { day: 'Ter', date: '14 Jul', value: '2026-07-14' },
    { day: 'Qua', date: '15 Jul', value: '2026-07-15' },
    { day: 'Qui', date: '16 Jul', value: '2026-07-16' },
    { day: 'Sex', date: '17 Jul', value: '2026-07-17' },
  ]

  const timeSlots = ['09:00', '10:00', '11:00', '14:00', '15:00', '16:00']

  const handleSchedule = async () => {
    if (
      !selectedDate ||
      !selectedTime ||
      !schedulerName ||
      !schedulerEmail ||
      !schedulerCompany
    ) {
      alert('Por favor, preencha todas as informações de agendamento.')
      return
    }

    setSchedulerLoading(true)
    setSchedulerStatus(null)

    try {
      const res = await leadService.scheduleMeeting({
        name: schedulerName,
        email: schedulerEmail,
        company: schedulerCompany,
        date: selectedDate,
        timeSlot: selectedTime,
        notes: schedulerNotes,
      })

      setSchedulerStatus(res.message)
      // Clear inputs
      setSchedulerName('')
      setSchedulerEmail('')
      setSchedulerCompany('')
      setSchedulerNotes('')
      setSelectedDate('')
      setSelectedTime('')
    } catch {
      alert('Erro ao agendar reunião. Tente de novo.')
    } finally {
      setSchedulerLoading(false)
    }
  }

  const onSchedulerSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    void handleSchedule()
  }

  return (
    <div className="relative pb-24">
      {/* 1. HERO HEADER */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-[7.5%]">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center"
          >
            <div className="border-primary-500/20 bg-primary-500/5 text-primary-400 mb-4 inline-flex items-center gap-2 rounded-full border px-4 py-1 text-xs font-semibold tracking-wider uppercase">
              Contate Nossos Consultores
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">
              Vamos Conversar sobre{' '}
              <span className="text-primary-500">Seus Dados?</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-neutral-400 md:text-lg">
              Preencha o formulário de contato abaixo ou selecione um horário em
              nossa agenda comercial para uma demonstração técnica.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. FORM & SCHEDULER GRID */}
      <section className="py-6">
        <div className="mx-auto max-w-7xl px-6 lg:px-[7.5%]">
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12">
            {/* Contact Details & Info (Left Panel) */}
            <div className="flex flex-col gap-8 lg:col-span-4">
              <GlassCard
                className="border-white/10"
                glowColor="rgba(62, 240, 170, 0.1)"
              >
                <h3 className="mb-6 text-base font-bold text-white">
                  Informações de Contato
                </h3>
                <div className="flex flex-col gap-6">
                  <div className="flex items-start gap-4">
                    <Mail className="text-primary-400 mt-0.5 h-5 w-5 shrink-0" />
                    <div>
                      <p className="text-xs font-semibold text-neutral-400 uppercase">
                        E-mail Comercial
                      </p>
                      <a
                        href="mailto:contato@onebi.com.br"
                        className="hover:text-primary-400 text-sm font-semibold text-white transition-colors"
                      >
                        contato@onebi.com.br
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Phone className="text-primary-400 mt-0.5 h-5 w-5 shrink-0" />
                    <div>
                      <p className="text-xs font-semibold text-neutral-400 uppercase">
                        Telefone / WhatsApp
                      </p>
                      <a
                        href="tel:+5511999999999"
                        className="hover:text-primary-400 text-sm font-semibold text-white transition-colors"
                      >
                        (11) 99999-9999
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <MapPin className="text-primary-400 mt-0.5 h-5 w-5 shrink-0" />
                    <div>
                      <p className="text-xs font-semibold text-neutral-400 uppercase">
                        Localização
                      </p>
                      <p className="text-sm font-semibold text-white">
                        São Paulo, SP — Atendimento Remoto & Híbrido
                      </p>
                    </div>
                  </div>
                </div>
              </GlassCard>

              {/* Informative lead conversion helper */}
              <GlassCard
                className="border-white/5 bg-neutral-950/20"
                interactive={false}
              >
                <h4 className="text-secondary-400 mb-3 text-xs font-bold tracking-wider uppercase">
                  Reunião Diagnóstica
                </h4>
                <p className="text-xs leading-relaxed text-neutral-400">
                  Nosso diagnóstico inicial de 30 minutos é focado na
                  identificação rápida de melhorias nos bancos de dados,
                  gargalos de performance DAX e redução de custos com licenças
                  desnecessárias.
                </p>
              </GlassCard>
            </div>

            {/* Forms Panel (Right/Center Grid) */}
            <div className="flex flex-col gap-12 lg:col-span-8">
              {/* Form 1: Classic Contact Form */}
              <GlassCard
                className="border-white/10 p-8"
                glowColor="rgba(62, 240, 170, 0.15)"
                interactive={false}
              >
                <h3 className="mb-6 text-lg font-bold text-white">
                  Enviar Mensagem Comercial
                </h3>
                <form onSubmit={onFormSubmit} className="flex flex-col gap-5">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="mb-2 block text-xs font-semibold text-neutral-400 uppercase"
                      >
                        Seu Nome
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        placeholder="Nome completo"
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
                        htmlFor="contact-email"
                        className="mb-2 block text-xs font-semibold text-neutral-400 uppercase"
                      >
                        E-mail Profissional
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        placeholder="Ex: seu-nome@empresa.com"
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
                        htmlFor="contact-phone"
                        className="mb-2 block text-xs font-semibold text-neutral-400 uppercase"
                      >
                        Telefone Comercial
                      </label>
                      <input
                        id="contact-phone"
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
                        htmlFor="contact-company"
                        className="mb-2 block text-xs font-semibold text-neutral-400 uppercase"
                      >
                        Nome da Empresa
                      </label>
                      <input
                        id="contact-company"
                        type="text"
                        placeholder="Empresa Ltda"
                        {...register('company')}
                        className="focus:border-primary-500/50 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-xs text-white placeholder-neutral-600 focus:outline-none"
                      />
                      {errors.company && (
                        <p className="mt-1 text-[10px] text-rose-400">
                          {errors.company.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-solution"
                      className="mb-2 block text-xs font-semibold text-neutral-400 uppercase"
                    >
                      Solução de Interesse
                    </label>
                    <select
                      id="contact-solution"
                      {...register('solution')}
                      className="focus:border-primary-500/50 w-full rounded-xl border border-white/10 bg-neutral-950 px-4 py-3 text-xs text-white focus:outline-none"
                    >
                      <option value="business-intelligence">
                        Business Intelligence & Dashboards
                      </option>
                      <option value="microsoft-fabric">
                        Microsoft Fabric Migração
                      </option>
                      <option value="engenharia-de-dados">
                        Engenharia de Dados & DW
                      </option>
                      <option value="inteligencia-artificial">
                        Inteligência Artificial & Machine Learning
                      </option>
                      <option value="consultoria">
                        Consultoria Estratégica & Mentoria
                      </option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-message"
                      className="mb-2 block text-xs font-semibold text-neutral-400 uppercase"
                    >
                      Mensagem / Escopo do Projeto
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      placeholder="Descreva brevemente os desafios analíticos de sua empresa..."
                      {...register('message')}
                      className="focus:border-primary-500/50 w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-xs text-white placeholder-neutral-600 focus:outline-none"
                    />
                    {errors.message && (
                      <p className="mt-1 text-[10px] text-rose-400">
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  <div className="mt-2 flex justify-end">
                    <GlowButton
                      type="submit"
                      disabled={isSubmitting}
                      variant="primary"
                      className="px-8 py-3"
                    >
                      {isSubmitting ? 'Enviando...' : 'Enviar Solicitação'}{' '}
                      <ChevronRight className="h-4 w-4" />
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

              {/* Form 2: Interactive Scheduler Calendar Simulation */}
              <GlassCard
                className="border-white/10 bg-neutral-950/20 p-8"
                glowColor="rgba(126, 87, 225, 0.15)"
                interactive={false}
              >
                <h3 className="mb-2 flex items-center gap-2 text-lg font-bold text-white">
                  <Calendar className="text-primary-400 h-5 w-5 animate-pulse" />
                  Agendar Reunião Técnica
                </h3>
                <p className="mb-6 text-xs text-neutral-400">
                  Selecione um dia da semana e o horário de sua preferência para
                  agendarmos de imediato.
                </p>

                <form
                  onSubmit={onSchedulerSubmit}
                  className="flex flex-col gap-6"
                >
                  {/* Date Grid */}
                  <div>
                    <span className="mb-3 block text-xs font-semibold text-neutral-400 uppercase">
                      1. Escolha a Data
                    </span>
                    <div className="grid grid-cols-5 gap-2">
                      {dateOptions.map((opt) => (
                        <button
                          key={opt.value}
                          type="button"
                          onClick={() => setSelectedDate(opt.value)}
                          className={`flex cursor-pointer flex-col items-center justify-center rounded-xl border p-2 transition-all ${
                            selectedDate === opt.value
                              ? 'border-primary-500 bg-primary-500/10 text-white shadow-[0_0_8px_rgba(62,240,170,0.15)]'
                              : 'border-white/5 bg-white/5 text-neutral-400 hover:border-white/10 hover:text-white'
                          }`}
                        >
                          <span className="text-[10px] font-bold uppercase">
                            {opt.day}
                          </span>
                          <span className="mt-1 text-xs font-extrabold">
                            {opt.date}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Time Slots Grid */}
                  <div>
                    <span className="mb-3 block text-xs font-semibold text-neutral-400 uppercase">
                      2. Escolha o Horário
                    </span>
                    <div className="grid grid-cols-3 gap-2 sm:grid-cols-6">
                      {timeSlots.map((time) => (
                        <button
                          key={time}
                          type="button"
                          onClick={() => setSelectedTime(time)}
                          className={`flex cursor-pointer items-center justify-center rounded-lg border py-2 text-xs font-bold transition-all ${
                            selectedTime === time
                              ? 'border-secondary-500 bg-secondary-500/10 text-white shadow-[0_0_8px_rgba(126,87,225,0.15)]'
                              : 'border-white/5 bg-white/5 text-neutral-400 hover:border-white/10 hover:text-white'
                          }`}
                        >
                          <Clock className="mr-1.5 h-3 w-3 shrink-0" />
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Required Info for Schedule */}
                  <div>
                    <span className="mb-3 block text-xs font-semibold text-neutral-400 uppercase">
                      3. Seus Dados de Contato
                    </span>
                    <div className="mb-3 grid grid-cols-1 gap-3 sm:grid-cols-3">
                      <input
                        type="text"
                        placeholder="Nome completo"
                        value={schedulerName}
                        onChange={(e) => setSchedulerName(e.target.value)}
                        className="focus:border-primary-500/50 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-xs text-white placeholder-neutral-600 focus:outline-none"
                        required
                      />
                      <input
                        type="email"
                        placeholder="E-mail profissional"
                        value={schedulerEmail}
                        onChange={(e) => setSchedulerEmail(e.target.value)}
                        className="focus:border-primary-500/50 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-xs text-white placeholder-neutral-600 focus:outline-none"
                        required
                      />
                      <input
                        type="text"
                        placeholder="Empresa"
                        value={schedulerCompany}
                        onChange={(e) => setSchedulerCompany(e.target.value)}
                        className="focus:border-primary-500/50 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-xs text-white placeholder-neutral-600 focus:outline-none"
                        required
                      />
                    </div>
                    <input
                      type="text"
                      placeholder="Notas adicionais (opcional)"
                      value={schedulerNotes}
                      onChange={(e) => setSchedulerNotes(e.target.value)}
                      className="focus:border-primary-500/50 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-xs text-white placeholder-neutral-600 focus:outline-none"
                    />
                  </div>

                  {/* Confirm Schedule Button */}
                  <div className="flex justify-end">
                    <GlowButton
                      type="submit"
                      disabled={schedulerLoading}
                      variant="secondary"
                      className="px-8 py-3 text-xs font-semibold"
                    >
                      {schedulerLoading
                        ? 'Reservando Horário...'
                        : 'Confirmar Agendamento Comercial'}
                    </GlowButton>
                  </div>

                  {schedulerStatus && (
                    <div className="flex items-center gap-3 rounded-xl border border-emerald-500/30 bg-emerald-500/5 p-4 text-xs font-medium text-emerald-400">
                      <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-neutral-950">
                        <Check className="h-3.5 w-3.5 stroke-[3]" />
                      </div>
                      <p>{schedulerStatus}</p>
                    </div>
                  )}
                </form>
              </GlassCard>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
export default Contact
