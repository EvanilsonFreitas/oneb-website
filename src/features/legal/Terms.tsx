import { motion } from 'framer-motion'
import { FileText } from 'lucide-react'
import { GlassCard } from '@/components/common/GlassCard'

export function Terms() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16 lg:px-[7.5%]">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-white/5 bg-neutral-900">
          <FileText className="text-primary-400 h-6 w-6" />
        </div>
        <h1 className="mb-8 text-3xl font-extrabold tracking-tight text-white md:text-5xl">
          Termos de <span className="text-primary-500">Uso</span>
        </h1>

        <GlassCard
          className="space-y-6 border-white/10 bg-neutral-950/40 p-8 text-sm leading-relaxed text-neutral-300"
          interactive={false}
        >
          <p className="text-xs text-neutral-500">
            Última atualização: 08 de Julho de 2026
          </p>

          <h2 className="pt-4 text-base font-bold tracking-wider text-white uppercase">
            1. Propriedade Intelectual
          </h2>
          <p>
            Todo o conteúdo textual, ilustrações técnicas de arquitetura,
            códigos demonstrativos e logotipos exibidos no portal OneB são de
            propriedade intelectual exclusiva da OneB Ltda. É proibida a
            reprodução ou cópia de nossos dashboards e artigos analíticos sem
            autorização prévia por escrito.
          </p>

          <h2 className="pt-4 text-base font-bold tracking-wider text-white uppercase">
            2. Limitação de Responsabilidade
          </h2>
          <p>
            O conteúdo do blog e as simulações de agendamento são oferecidos
            para fins demonstrativos e informativos. Embora nossa meta técnica
            seja a exatidão absoluta, a OneB não se responsabiliza por perdas e
            danos decorrentes de decisões tomadas com base exclusiva nos artigos
            públicos sem consultoria personalizada.
          </p>
        </GlassCard>
      </motion.div>
    </div>
  )
}
export default Terms
