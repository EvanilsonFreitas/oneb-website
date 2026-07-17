import { Quote, Star } from 'lucide-react'
import { GlassCard } from '@/components/common/GlassCard'
import { Reveal, RevealItem } from '@/animations/Reveal'
import { CountUp } from '@/components/common/CountUp'
import { testimonialsData } from '@/constants/mockData'

function Stars({ rating }: { rating: number }) {
  return (
    <div
      className="flex items-center gap-0.5"
      aria-label={`${rating} de 5 estrelas`}
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-3.5 w-3.5 ${
            i < rating
              ? 'fill-primary-400 text-primary-400'
              : 'fill-neutral-800 text-neutral-800'
          }`}
        />
      ))}
    </div>
  )
}

/**
 * Seção "Feedbacks de Clientes" — depoimentos com avaliação e resultado
 * objetivo, em visual de produto SaaS. Reutilizável em qualquer página.
 */
export function TestimonialsSection() {
  const average =
    testimonialsData.reduce((acc, t) => acc + t.rating, 0) /
    testimonialsData.length

  return (
    <section className="relative z-10 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-[7.5%]">
        <Reveal className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="text-primary-400 mb-3 text-xs font-semibold tracking-wider uppercase">
            Feedbacks de Clientes
          </h2>
          <h3 className="text-3xl font-extrabold tracking-tight text-white md:text-4xl">
            Quem usa, recomenda
          </h3>

          {/* Barra de avaliação agregada — prova social estilo SaaS */}
          <div className="mt-6 inline-flex flex-wrap items-center justify-center gap-x-6 gap-y-2 rounded-2xl border border-white/8 bg-white/[0.03] px-6 py-3">
            <span className="flex items-center gap-2">
              <span className="text-2xl font-extrabold text-white">
                <CountUp value={average.toFixed(1)} />
              </span>
              <Stars rating={Math.round(average)} />
            </span>
            <span className="hidden h-6 w-px bg-white/10 sm:block" />
            <span className="text-xs text-neutral-400">
              Avaliação média dos projetos entregues
            </span>
          </div>
        </Reveal>

        <Reveal stagger={0.1} className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonialsData.map((testimonial) => (
            <RevealItem key={testimonial.name} className="flex h-full">
              <GlassCard
                className="flex h-full flex-col"
                glowColor="rgba(62, 240, 170, 0.12)"
              >
                <div className="flex items-center justify-between">
                  <Stars rating={testimonial.rating} />
                  <Quote className="text-primary-500/30 h-6 w-6" />
                </div>

                <p className="mt-4 mb-5 text-sm leading-relaxed text-neutral-300">
                  “{testimonial.quote}”
                </p>

                {/* Resultado objetivo — o "número que ficou" */}
                <div className="border-primary-500/15 bg-primary-500/5 mb-5 inline-flex items-center gap-2 self-start rounded-lg border px-3 py-1.5">
                  <span className="bg-primary-400 h-1.5 w-1.5 rounded-full" />
                  <span className="text-primary-400 text-xs font-bold">
                    {testimonial.result}
                  </span>
                </div>

                <div className="mt-auto flex items-center gap-3 border-t border-white/5 pt-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    loading="lazy"
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
            </RevealItem>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
