import { motion } from 'framer-motion'
import { Landmark } from 'lucide-react'
import { GlassCard } from '@/components/common/GlassCard'

export function Lgpd() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16 lg:px-[7.5%]">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-white/5 bg-neutral-900">
          <Landmark className="text-primary-400 h-6 w-6" />
        </div>
        <h1 className="mb-8 text-3xl font-extrabold tracking-tight text-white md:text-5xl">
          Conformidade <span className="text-primary-500">LGPD</span>
        </h1>

        <GlassCard
          className="space-y-6 border-white/10 bg-neutral-950/40 p-8 text-sm leading-relaxed text-neutral-300"
          interactive={false}
        >
          <p className="text-xs text-neutral-500">
            Última atualização: 08 de Julho de 2026
          </p>

          <h2 className="pt-4 text-base font-bold tracking-wider text-white uppercase">
            1. Direitos do Titular de Dados
          </h2>
          <p>
            Em total conformidade com a Lei Geral de Proteção de Dados (Lei nº
            13.709/2018), garantimos aos nossos usuários os direitos de
            confirmação da existência de tratamento de dados pessoais, acesso
            facilitado aos dados coletados, correção de informações
            desatualizadas ou eliminação completa de sua presença em nosso banco
            de dados.
          </p>

          <h2 className="pt-4 text-base font-bold tracking-wider text-white uppercase">
            2. Solicitação de Exclusão
          </h2>
          <p>
            Se você deseja exercer qualquer direito do titular (como excluir seu
            e-mail cadastrado na newsletter ou seus dados de leads comercial),
            envie um e-mail para{' '}
            <a
              href="mailto:privacidade@oneb.com.br"
              className="text-primary-400 font-semibold hover:text-white"
            >
              privacidade@oneb.com.br
            </a>
            . Processaremos sua solicitação legal em até 15 dias úteis.
          </p>
        </GlassCard>
      </motion.div>
    </div>
  )
}
export default Lgpd
