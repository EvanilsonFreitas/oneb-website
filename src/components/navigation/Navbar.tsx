import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Menu,
  X,
  ChevronDown,
  ArrowRight,
  BarChart3,
  Layers,
  Database,
  Brain,
  Compass,
  Building2,
  Target,
  Heart,
  Briefcase,
} from 'lucide-react'
import { cn, asset } from '@/lib/utils'
import { GlowButton } from '@/components/common/GlowButton'
import { solutionsData } from '@/constants/mockData'

// Helper function to map string icon names to Lucide icon components
const getSolutionIcon = (iconName: string) => {
  switch (iconName) {
    case 'BarChart3':
      return <BarChart3 className="text-primary-400 h-5 w-5" />
    case 'Layers':
      return <Layers className="text-primary-400 h-5 w-5" />
    case 'Database':
      return <Database className="text-primary-400 h-5 w-5" />
    case 'Brain':
      return <Brain className="text-primary-400 h-5 w-5" />
    case 'Compass':
      return <Compass className="text-primary-400 h-5 w-5" />
    default:
      return <BarChart3 className="text-primary-400 h-5 w-5" />
  }
}

const institutionalLinks = [
  {
    to: '/quem-somos',
    title: 'Quem Somos',
    description: 'Nossa história, cultura e metodologia de trabalho.',
    icon: <Building2 className="text-primary-400 h-5 w-5" />,
  },
  {
    to: '/missao',
    title: 'Nossa Missão',
    description: 'Por que existimos e o que buscamos transformar.',
    icon: <Target className="text-primary-400 h-5 w-5" />,
  },
  {
    to: '/valores',
    title: 'Nossos Valores',
    description: 'Os princípios que guiam cada projeto que entregamos.',
    icon: <Heart className="text-primary-400 h-5 w-5" />,
  },
  {
    to: '/carreira',
    title: 'Carreira',
    description: 'Vagas abertas e nosso banco de talentos.',
    icon: <Briefcase className="text-primary-400 h-5 w-5" />,
  },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [solutionsOpen, setSolutionsOpen] = useState(false)
  const [institutionalOpen, setInstitutionalOpen] = useState(false)
  const [mobileInstitutionalOpen, setMobileInstitutionalOpen] = useState(false)
  const location = useLocation()

  // Track page scroll to toggle dark sticky background opacity
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Lock body scroll while the off-canvas mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const isInstitutionalActive = institutionalLinks.some((link) =>
    location.pathname.startsWith(link.to),
  )

  return (
    <>
      <header
        className={cn(
          'fixed top-0 right-0 left-0 z-50 border-b transition-all duration-300',
          scrolled
            ? 'border-white/10 bg-black/80 py-4 backdrop-blur-md'
            : 'border-transparent bg-transparent py-6',
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-[7.5%]">
          {/* Logo */}
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="flex items-center"
          >
            <img
              src={asset('Logo/logo.svg')}
              alt="OneBI"
              className="h-8 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 md:flex">
            {/* Solutions Dropdown Menu */}
            <div
              className="relative"
              onMouseEnter={() => setSolutionsOpen(true)}
              onMouseLeave={() => setSolutionsOpen(false)}
            >
              <button
                className={cn(
                  'flex cursor-pointer items-center gap-1 py-2 text-sm font-medium text-neutral-400 transition-colors hover:text-white',
                  location.pathname.startsWith('/solucoes') &&
                    'text-primary-400',
                )}
              >
                Soluções
                <ChevronDown
                  className={cn(
                    'h-4 w-4 transition-transform duration-200',
                    solutionsOpen && 'rotate-180',
                  )}
                />
              </button>

              <AnimatePresence>
                {solutionsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-1/2 w-[460px] -translate-x-1/2 rounded-2xl border border-white/10 bg-neutral-950 p-4 shadow-2xl backdrop-blur-2xl"
                  >
                    <div className="grid gap-2">
                      <p className="px-3 py-1.5 text-xs font-semibold tracking-wider text-neutral-500 uppercase">
                        Nossas Especialidades
                      </p>
                      {solutionsData.map((solution) => (
                        <Link
                          key={solution.slug}
                          to={`/solucoes/${solution.slug}`}
                          className="flex items-start gap-4 rounded-xl p-3 transition-colors hover:bg-white/5"
                        >
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/5 bg-neutral-900">
                            {getSolutionIcon(solution.icon)}
                          </div>
                          <div>
                            <p className="hover:text-primary-400 text-sm font-semibold text-white transition-colors">
                              {solution.title}
                            </p>
                            <p className="mt-0.5 line-clamp-1 text-xs text-neutral-400">
                              {solution.description}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                    <Link
                      to="/tecnologias"
                      className="text-primary-400 mt-3 flex items-center justify-center gap-1.5 rounded-xl border-t border-white/5 pt-3 text-xs font-semibold transition-colors hover:text-white"
                    >
                      Ver Stack Tecnológico Completo{' '}
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <NavLink
              to="/projetos"
              className={({ isActive }) =>
                cn(
                  'text-sm font-medium text-neutral-400 transition-colors hover:text-white',
                  isActive && 'text-primary-400',
                )
              }
            >
              Projetos
            </NavLink>

            <NavLink
              to="/cases"
              className={({ isActive }) =>
                cn(
                  'text-sm font-medium text-neutral-400 transition-colors hover:text-white',
                  isActive && 'text-primary-400',
                )
              }
            >
              Cases
            </NavLink>

            <NavLink
              to="/blog"
              className={({ isActive }) =>
                cn(
                  'text-sm font-medium text-neutral-400 transition-colors hover:text-white',
                  isActive && 'text-primary-400',
                )
              }
            >
              Blog
            </NavLink>

            {/* Institutional Dropdown Menu */}
            <div
              className="relative"
              onMouseEnter={() => setInstitutionalOpen(true)}
              onMouseLeave={() => setInstitutionalOpen(false)}
            >
              <button
                className={cn(
                  'flex cursor-pointer items-center gap-1 py-2 text-sm font-medium text-neutral-400 transition-colors hover:text-white',
                  isInstitutionalActive && 'text-primary-400',
                )}
              >
                Institucional
                <ChevronDown
                  className={cn(
                    'h-4 w-4 transition-transform duration-200',
                    institutionalOpen && 'rotate-180',
                  )}
                />
              </button>

              <AnimatePresence>
                {institutionalOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full right-0 w-[380px] rounded-2xl border border-white/10 bg-neutral-950 p-4 shadow-2xl backdrop-blur-2xl"
                  >
                    <div className="grid gap-2">
                      <p className="px-3 py-1.5 text-xs font-semibold tracking-wider text-neutral-500 uppercase">
                        A Empresa
                      </p>
                      {institutionalLinks.map((link) => (
                        <Link
                          key={link.to}
                          to={link.to}
                          className="flex items-start gap-4 rounded-xl p-3 transition-colors hover:bg-white/5"
                        >
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/5 bg-neutral-900">
                            {link.icon}
                          </div>
                          <div>
                            <p className="hover:text-primary-400 text-sm font-semibold text-white transition-colors">
                              {link.title}
                            </p>
                            <p className="mt-0.5 line-clamp-1 text-xs text-neutral-400">
                              {link.description}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                    <Link
                      to="/contato"
                      className="text-primary-400 mt-3 flex items-center justify-center gap-1.5 rounded-xl border-t border-white/5 pt-3 text-xs font-semibold transition-colors hover:text-white"
                    >
                      Falar com um Consultor{' '}
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>

          {/* Desktop Right Actions */}
          <div className="hidden md:block">
            <Link to="/contato">
              <GlowButton variant="primary" className="px-5 py-2.5">
                Falar com Consultor <ArrowRight className="h-4 w-4" />
              </GlowButton>
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="block cursor-pointer rounded-lg p-2 text-neutral-400 hover:bg-white/5 hover:text-white md:hidden"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Off-Canvas Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="mobile-menu-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm md:hidden"
            />

            {/* Side panel sliding in from the right */}
            <motion.div
              key="mobile-menu-panel"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3, ease: 'easeOut' }}
              className="fixed inset-y-0 right-0 z-50 flex w-[85%] max-w-sm flex-col border-l border-white/10 bg-neutral-950 md:hidden"
            >
              {/* Panel header */}
              <div className="flex items-center justify-between border-b border-white/10 px-6 py-5">
                <Link
                  to="/"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center"
                >
                  <img
                    src={asset('Logo/logo.svg')}
                    alt="OneBI"
                    className="h-7 w-auto"
                  />
                </Link>
                <button
                  onClick={() => setIsOpen(false)}
                  className="cursor-pointer rounded-lg p-2 text-neutral-400 hover:bg-white/5 hover:text-white"
                  aria-label="Fechar menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Scrollable nav content */}
              <div className="flex flex-1 flex-col gap-6 overflow-y-auto px-6 py-6">
                <div className="flex flex-col gap-2">
                  <p className="text-xs font-semibold tracking-wider text-neutral-500 uppercase">
                    Soluções
                  </p>
                  <div className="grid grid-cols-1 gap-2 pl-2">
                    {solutionsData.map((solution) => (
                      <Link
                        key={solution.slug}
                        to={`/solucoes/${solution.slug}`}
                        onClick={() => setIsOpen(false)}
                        className="flex items-center gap-3 py-1.5 text-sm text-neutral-300 hover:text-white"
                      >
                        {getSolutionIcon(solution.icon)}
                        {solution.title}
                      </Link>
                    ))}
                  </div>
                </div>

                <hr className="border-white/5" />

                <Link
                  to="/tecnologias"
                  onClick={() => setIsOpen(false)}
                  className="text-base font-medium text-neutral-300 hover:text-white"
                >
                  Tecnologias
                </Link>

                <Link
                  to="/projetos"
                  onClick={() => setIsOpen(false)}
                  className="text-base font-medium text-neutral-300 hover:text-white"
                >
                  Projetos
                </Link>

                <Link
                  to="/cases"
                  onClick={() => setIsOpen(false)}
                  className="text-base font-medium text-neutral-300 hover:text-white"
                >
                  Cases
                </Link>

                <Link
                  to="/blog"
                  onClick={() => setIsOpen(false)}
                  className="text-base font-medium text-neutral-300 hover:text-white"
                >
                  Blog
                </Link>

                <hr className="border-white/5" />

                {/* Institutional Accordion */}
                <div className="flex flex-col gap-2">
                  <button
                    onClick={() =>
                      setMobileInstitutionalOpen(!mobileInstitutionalOpen)
                    }
                    className="flex w-full cursor-pointer items-center justify-between text-base font-medium text-neutral-300 hover:text-white"
                  >
                    Institucional
                    <ChevronDown
                      className={cn(
                        'h-4 w-4 transition-transform duration-200',
                        mobileInstitutionalOpen && 'rotate-180',
                      )}
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {mobileInstitutionalOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div className="grid grid-cols-1 gap-2 pt-2 pl-2">
                          {institutionalLinks.map((link) => (
                            <Link
                              key={link.to}
                              to={link.to}
                              onClick={() => setIsOpen(false)}
                              className="flex items-center gap-3 py-1.5 text-sm text-neutral-300 hover:text-white"
                            >
                              {link.icon}
                              {link.title}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              {/* Pinned CTA footer */}
              <div className="border-t border-white/10 px-6 py-6">
                <Link
                  to="/contato"
                  onClick={() => setIsOpen(false)}
                  className="w-full"
                >
                  <GlowButton variant="primary" fullWidth className="py-3">
                    Falar com Consultor <ArrowRight className="h-4 w-4" />
                  </GlowButton>
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
