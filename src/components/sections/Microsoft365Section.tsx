import { CheckCircle2 } from 'lucide-react'
import { GlassCard } from '@/components/common/GlassCard'
import { Reveal, RevealItem } from '@/animations/Reveal'
import { microsoft365Data } from '@/constants/mockData'

/** Cores de identidade (aproximadas) de cada ferramenta Microsoft. */
const toolColors: Record<string, string> = {
  Excel: '#21A366',
  'Power Query': '#00B7C3',
  'Power Pivot': '#0E7A5F',
  'Power BI': '#F2C811',
  'Power Automate': '#0066FF',
  'Power Apps': '#742774',
  SharePoint: '#036C70',
  'Microsoft Fabric': '#12876F',
}

/**
 * Seção "Soluções Microsoft 365" — apresenta as aplicações práticas e os
 * resultados obtidos com o ecossistema Microsoft. Reutilizável em qualquer
 * página (Tecnologias, Home, landing pages).
 */
export function Microsoft365Section() {
  return (
    <section className="relative z-10 border-t border-white/5 bg-neutral-950/20 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-[7.5%]">
        <Reveal className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="text-primary-400 mb-3 text-xs font-semibold tracking-wider uppercase">
            Ecossistema Microsoft
          </h2>
          <h3 className="text-3xl font-extrabold tracking-tight text-white md:text-4xl">
            Soluções Microsoft 365
          </h3>
          <p className="mt-4 text-neutral-400">
            Dominamos cada camada do ecossistema Microsoft — da planilha ao
            Lakehouse corporativo. Veja como aplicamos cada ferramenta e o
            resultado que ela gera na prática.
          </p>
        </Reveal>

        <Reveal
          stagger={0.06}
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {microsoft365Data.map((tool) => (
            <RevealItem key={tool.name} className="flex h-full">
              <GlassCard
                className="flex h-full flex-col gap-3 border-white/5"
                glowColor="rgba(62, 240, 170, 0.12)"
              >
                <div className="flex items-center gap-3">
                  <span
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-sm font-extrabold text-white"
                    style={{ backgroundColor: toolColors[tool.name] }}
                    aria-hidden
                  >
                    {tool.name
                      .replace('Microsoft ', '')
                      .replace('Power ', 'P')
                      .slice(0, 2)}
                  </span>
                  <h4 className="text-sm font-bold text-white">{tool.name}</h4>
                </div>
                <p className="text-xs leading-relaxed text-neutral-400">
                  {tool.application}
                </p>
                <div className="mt-auto flex items-start gap-2 border-t border-white/5 pt-3">
                  <CheckCircle2 className="text-primary-400 mt-0.5 h-3.5 w-3.5 shrink-0" />
                  <p className="text-primary-400 text-xs font-semibold">
                    {tool.result}
                  </p>
                </div>
              </GlassCard>
            </RevealItem>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
