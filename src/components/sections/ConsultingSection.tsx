import { Link } from 'react-router-dom'
import {
  ArrowRight,
  Calculator,
  Check,
  Code2,
  Database,
  Wallet,
} from 'lucide-react'
import { GlassCard } from '@/components/common/GlassCard'
import { Reveal, RevealItem } from '@/animations/Reveal'
import { consultingData } from '@/constants/mockData'

const icons: Record<string, React.ReactNode> = {
  Database: <Database className="text-primary-400 h-6 w-6" />,
  Calculator: <Calculator className="text-primary-400 h-6 w-6" />,
  Wallet: <Wallet className="text-primary-400 h-6 w-6" />,
  Code2: <Code2 className="text-primary-400 h-6 w-6" />,
}

/**
 * Seção "Consultoria Especializada" — quatro frentes de atuação (Dados,
 * Contábil, Financeiro e Desenvolvimento Web). Reutilizável em qualquer página.
 */
export function ConsultingSection() {
  return (
    <section className="relative z-10 border-t border-white/5 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-[7.5%]">
        <Reveal className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="text-primary-400 mb-3 text-xs font-semibold tracking-wider uppercase">
            Além da tecnologia
          </h2>
          <h3 className="text-3xl font-extrabold tracking-tight text-white md:text-4xl">
            Consultoria Especializada
          </h3>
          <p className="mt-4 text-neutral-400">
            Especialistas que falam a língua do seu negócio — em dados,
            contabilidade, finanças e desenvolvimento web.
          </p>
        </Reveal>

        <Reveal
          stagger={0.08}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {consultingData.map((category) => (
            <RevealItem key={category.title} className="flex h-full">
              <GlassCard
                className="group flex h-full flex-col"
                glowColor="rgba(62, 240, 170, 0.12)"
              >
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-white/5 bg-neutral-900">
                  {icons[category.icon]}
                </div>
                <h4 className="group-hover:text-primary-400 mb-2 text-lg font-bold text-white transition-colors">
                  {category.title}
                </h4>
                <p className="mb-5 text-xs leading-relaxed text-neutral-400">
                  {category.description}
                </p>
                <ul className="mb-6 flex flex-col gap-2">
                  {category.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <Check className="text-primary-400 mt-0.5 h-3.5 w-3.5 shrink-0" />
                      <span className="text-sm text-neutral-300">{item}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contato"
                  className="text-primary-400 mt-auto inline-flex items-center gap-1.5 text-xs font-semibold transition-colors group-hover:text-white"
                >
                  Falar com especialista <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </GlassCard>
            </RevealItem>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
