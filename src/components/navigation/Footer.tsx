import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Send, ShieldCheck } from 'lucide-react'
import { leadService } from '@/services/leadService'
import { asset } from '@/lib/utils'
import {
  IconLinkedIn,
  IconX,
  IconInstagram,
  IconFacebook,
  IconGitHub,
} from '@/components/common/SocialIcons'

const socialLinks = [
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/company/onebi',
    Icon: IconLinkedIn,
  },
  { name: 'X', href: 'https://x.com/onebi', Icon: IconX },
  {
    name: 'Instagram',
    href: 'https://instagram.com/onebi',
    Icon: IconInstagram,
  },
  { name: 'Facebook', href: 'https://facebook.com/onebi', Icon: IconFacebook },
  { name: 'GitHub', href: 'https://github.com/onebi', Icon: IconGitHub },
]

export function Footer() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<{
    type: 'success' | 'error' | null
    message: string
  }>({
    type: null,
    message: '',
  })
  const [loading, setLoading] = useState(false)

  const handleSubscribe = async () => {
    if (!email) {
      setStatus({ type: 'error', message: 'Por favor, informe seu e-mail.' })
      return
    }

    // Basic email validation regex
    if (!/\S+@\S+\.\S+/.test(email)) {
      setStatus({
        type: 'error',
        message: 'Por favor, informe um e-mail válido.',
      })
      return
    }

    setLoading(true)
    setStatus({ type: null, message: '' })

    try {
      const res = await leadService.subscribeNewsletter(email)
      setStatus({ type: 'success', message: res.message })
      setEmail('')
    } catch {
      setStatus({
        type: 'error',
        message: 'Ocorreu um erro. Tente novamente mais tarde.',
      })
    } finally {
      setLoading(false)
    }
  }

  const onSubscribeSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    void handleSubscribe()
  }

  return (
    <footer className="relative z-10 border-t border-white/10 bg-neutral-950/80 pt-20 pb-10 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-6 lg:px-[7.5%]">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo & About Column */}
          <div className="flex flex-col gap-6">
            <Link to="/" className="flex items-center">
              <img
                src={asset('Logo/logo.svg')}
                alt="OneBI"
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-sm leading-relaxed text-neutral-400">
              Desenvolvemos inteligência de dados de alta performance,
              transformando bases complexas em decisões estratégicas que
              aceleram o crescimento empresarial.
            </p>
            {/* Parceria fictícia premium */}
            <div className="flex items-center gap-3 rounded-xl border border-white/5 bg-white/5 p-3.5">
              <ShieldCheck className="text-primary-400 h-6 w-6 shrink-0" />
              <div>
                <p className="text-xs font-bold text-white">
                  Microsoft Partner
                </p>
                <p className="text-[10px] text-neutral-400">
                  Solutions Partner Analytics
                </p>
              </div>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-3">
              {socialLinks.map(({ name, href, Icon }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                  className="hover:border-primary-500/30 hover:text-primary-400 flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-neutral-400 transition-colors"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Solutions Column */}
          <div>
            <h4 className="mb-6 text-sm font-semibold tracking-wider text-white uppercase">
              Soluções
            </h4>
            <ul className="flex flex-col gap-3.5">
              <li>
                <Link
                  to="/solucoes/business-intelligence"
                  className="text-sm text-neutral-400 transition-colors hover:text-white"
                >
                  Business Intelligence
                </Link>
              </li>
              <li>
                <Link
                  to="/solucoes/microsoft-fabric"
                  className="text-sm text-neutral-400 transition-colors hover:text-white"
                >
                  Microsoft Fabric
                </Link>
              </li>
              <li>
                <Link
                  to="/solucoes/engenharia-de-dados"
                  className="text-sm text-neutral-400 transition-colors hover:text-white"
                >
                  Engenharia de Dados & DW
                </Link>
              </li>
              <li>
                <Link
                  to="/solucoes/inteligencia-artificial"
                  className="text-sm text-neutral-400 transition-colors hover:text-white"
                >
                  Inteligência Artificial
                </Link>
              </li>
              <li>
                <Link
                  to="/solucoes/consultoria"
                  className="text-sm text-neutral-400 transition-colors hover:text-white"
                >
                  Consultoria Estratégica
                </Link>
              </li>
              <li>
                <Link
                  to="/tecnologias"
                  className="text-sm text-neutral-400 transition-colors hover:text-white"
                >
                  Stack Tecnológico
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="mb-6 text-sm font-semibold tracking-wider text-white uppercase">
              Empresa
            </h4>
            <ul className="flex flex-col gap-3.5">
              <li>
                <Link
                  to="/quem-somos"
                  className="text-sm text-neutral-400 transition-colors hover:text-white"
                >
                  Quem Somos
                </Link>
              </li>
              <li>
                <Link
                  to="/missao"
                  className="text-sm text-neutral-400 transition-colors hover:text-white"
                >
                  Nossa Missão
                </Link>
              </li>
              <li>
                <Link
                  to="/valores"
                  className="text-sm text-neutral-400 transition-colors hover:text-white"
                >
                  Nossos Valores
                </Link>
              </li>
              <li>
                <Link
                  to="/projetos"
                  className="text-sm text-neutral-400 transition-colors hover:text-white"
                >
                  Projetos
                </Link>
              </li>
              <li>
                <Link
                  to="/cases"
                  className="text-sm text-neutral-400 transition-colors hover:text-white"
                >
                  Cases de Sucesso
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="text-sm text-neutral-400 transition-colors hover:text-white"
                >
                  Blog & Artigos
                </Link>
              </li>
              <li>
                <Link
                  to="/carreira"
                  className="text-sm text-neutral-400 transition-colors hover:text-white"
                >
                  Carreira
                </Link>
              </li>
              <li>
                <Link
                  to="/faq"
                  className="text-sm text-neutral-400 transition-colors hover:text-white"
                >
                  Perguntas Frequentes
                </Link>
              </li>
              <li>
                <Link
                  to="/contato"
                  className="text-sm text-neutral-400 transition-colors hover:text-white"
                >
                  Fale Conosco
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="flex flex-col gap-6">
            <h4 className="text-sm font-semibold tracking-wider text-white uppercase">
              Newsletter
            </h4>
            <p className="text-sm leading-relaxed text-neutral-400">
              Inscreva-se para receber artigos semanais sobre BI, Engenharia de
              Dados e tendências de IA.
            </p>
            <form
              onSubmit={onSubscribeSubmit}
              className="relative flex items-center"
            >
              <input
                type="email"
                placeholder="Seu e-mail profissional"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={loading}
                className="focus:border-primary-500/50 w-full rounded-xl border border-white/10 bg-white/5 py-3 pr-12 pl-4 text-sm text-white placeholder-neutral-500 focus:outline-none disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={loading}
                className="bg-primary-500 hover:bg-primary-400 absolute right-2 cursor-pointer rounded-lg p-2 text-black transition-colors disabled:opacity-50"
                aria-label="Inscrever-se"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>
            {status.message && (
              <p
                className={`mt-1 text-xs ${
                  status.type === 'success'
                    ? 'text-primary-400'
                    : 'text-rose-400'
                }`}
              >
                {status.message}
              </p>
            )}
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 text-xs text-neutral-500 md:flex-row">
          <p>
            © {new Date().getFullYear()} OneBI Ltda. Todos os direitos
            reservados.
          </p>
          <div className="flex gap-6">
            <Link
              to="/privacidade"
              className="transition-colors hover:text-neutral-400"
            >
              Políticas de Privacidade
            </Link>
            <Link
              to="/termos"
              className="transition-colors hover:text-neutral-400"
            >
              Termos de Uso
            </Link>
            <Link
              to="/lgpd"
              className="transition-colors hover:text-neutral-400"
            >
              Conformidade LGPD
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
