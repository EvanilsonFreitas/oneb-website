import { motion } from 'framer-motion'
import { ShieldAlert } from 'lucide-react'
import { GlassCard } from '@/components/common/GlassCard'

export function Privacy() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16 lg:px-[7.5%]">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-white/5 bg-neutral-900">
          <ShieldAlert className="text-primary-400 h-6 w-6" />
        </div>
        <h1 className="mb-8 text-3xl font-extrabold tracking-tight text-white md:text-5xl">
          Política de <span className="text-primary-500">Privacidade</span>
        </h1>

        <GlassCard
          className="space-y-6 border-white/10 bg-neutral-950/40 p-8 text-sm leading-relaxed text-neutral-300"
          interactive={false}
        >
          <p className="text-xs text-neutral-500">
            Última atualização: 08 de Julho de 2026
          </p>

          <h2 className="pt-4 text-base font-bold tracking-wider text-white uppercase">
            1. Coleta de Informações
          </h2>
          <p>
            Coletamos informações profissionais que você nos fornece
            voluntariamente ao enviar formulários comercial de contato, assinar
            nossa newsletter ou agendar reuniões diagnósticas. Essas informações
            incluem seu Nome, E-mail profissional, Telefone corporativo e
            Empresa onde atua.
          </p>

          <h2 className="pt-4 text-base font-bold tracking-wider text-white uppercase">
            2. Uso dos Dados
          </h2>
          <p>
            Utilizamos suas informações para responder suas consultas,
            qualificar leads de vendas, enviar artigos informativos do blog e
            gerenciar os agendamentos de consultoria de dados solicitados. Seus
            dados nunca serão vendidos ou compartilhados com terceiros para fins
            publicitários.
          </p>

          <h2 className="pt-4 text-base font-bold tracking-wider text-white uppercase">
            3. Armazenamento e Segurança
          </h2>
          <p>
            Adotamos medidas rígidas de segurança física e eletrônica (como
            criptografia e mascaramento de dados) para evitar acessos não
            autorizados e perda de informações analíticas corporativas dos
            nossos contatos.
          </p>
        </GlassCard>
      </motion.div>
    </div>
  )
}
export default Privacy
