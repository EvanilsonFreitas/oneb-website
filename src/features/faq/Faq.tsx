import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, ChevronDown, HelpCircle, Search } from 'lucide-react'
import { GlassCard } from '@/components/common/GlassCard'
import { GlowButton } from '@/components/common/GlowButton'
import { generalFaqData, type FaqCategory } from '@/constants/mockData'

const faqCategories: ('Todas' | FaqCategory)[] = [
  'Todas',
  'Serviços',
  'Projetos',
  'Consultoria',
  'Tecnologia',
  'Processo Comercial',
  'Atendimento',
]

export function Faq() {
  const [searchTerm, setSearchTerm] = useState('')
  const [activeCategory, setActiveCategory] = useState<'Todas' | FaqCategory>(
    'Todas',
  )
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const filteredFaqs = generalFaqData.filter((faq) => {
    const categoryMatches =
      activeCategory === 'Todas' || faq.category === activeCategory
    const searchMatches =
      searchTerm.trim() === '' ||
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
    return categoryMatches && searchMatches
  })

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="relative pb-24">
      {/* 1. HERO HEADER */}
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-[7.5%]">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center"
          >
            <div className="border-primary-500/20 bg-primary-500/5 mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl border">
              <HelpCircle className="text-primary-400 h-6 w-6" />
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl">
              Perguntas <span className="text-primary-500">Frequentes</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-neutral-400">
              Dúvidas comuns sobre como funciona o processo de contratação,
              execução e suporte dos projetos da OneB.
            </p>

            <div className="relative mt-8 w-full max-w-md">
              <Search className="absolute top-1/2 left-4 h-4 w-4 -translate-y-1/2 text-neutral-500" />
              <input
                type="text"
                placeholder="Buscar uma pergunta..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="focus:border-primary-500/50 w-full rounded-xl border border-white/10 bg-white/5 py-3 pr-4 pl-11 text-sm text-white placeholder-neutral-500 focus:outline-none"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. CATEGORY FILTERS */}
      <section className="pb-8">
        <div className="mx-auto max-w-4xl px-6 lg:px-[7.5%]">
          <div className="flex flex-wrap justify-center gap-2">
            {faqCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat)
                  setOpenIndex(0)
                }}
                className={`cursor-pointer rounded-lg border px-4 py-2 text-xs font-semibold tracking-wider uppercase transition-all ${
                  activeCategory === cat
                    ? 'bg-primary-500 border-primary-500 text-black shadow-md'
                    : 'border-white/5 bg-white/5 text-neutral-400 hover:border-white/15 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 3. FAQ ACCORDION */}
      <section className="pb-12">
        <div className="mx-auto max-w-3xl px-6 lg:px-[7.5%]">
          <div className="flex flex-col gap-4">
            {filteredFaqs.map((faq, idx) => {
              const isOpen = openIndex === idx
              return (
                <GlassCard
                  key={faq.question}
                  className="cursor-pointer border-white/5 p-5 transition-colors hover:border-white/10"
                  interactive={false}
                  onClick={() => toggle(idx)}
                >
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <span className="text-primary-400 text-[10px] font-bold tracking-wider uppercase">
                        {faq.category}
                      </span>
                      <h3 className="mt-1 text-sm font-bold text-white md:text-base">
                        {faq.question}
                      </h3>
                    </div>
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-neutral-400 transition-transform duration-300 ${
                        isOpen ? 'text-primary-400 rotate-180' : ''
                      }`}
                    />
                  </div>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      transition={{ duration: 0.25 }}
                      className="mt-4 border-t border-white/5 pt-4 text-xs leading-relaxed text-neutral-400 md:text-sm"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </GlassCard>
              )
            })}

            {filteredFaqs.length === 0 && (
              <p className="py-16 text-center text-sm text-neutral-500">
                Nenhuma pergunta encontrada. Tente outro termo de busca.
              </p>
            )}
          </div>
        </div>
      </section>

      {/* 3. CTA SECTION */}
      <section className="border-t border-white/5 py-20">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-[7.5%]">
          <h3 className="text-2xl font-extrabold tracking-tight text-white md:text-3xl">
            Não encontrou o que procurava?
          </h3>
          <p className="mt-4 text-sm leading-relaxed text-neutral-400">
            Fale diretamente com um de nossos consultores e tire suas dúvidas
            específicas sobre o seu projeto.
          </p>
          <div className="mt-8">
            <Link to="/contato">
              <GlowButton variant="primary">
                Falar com um Consultor <ArrowRight className="h-4 w-4" />
              </GlowButton>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
export default Faq
