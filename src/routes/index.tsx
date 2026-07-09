/* eslint-disable react-refresh/only-export-components -- route config intentionally mixes lazy() bindings with the router export */
import { lazy } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import { PublicLayout } from '@/layouts/PublicLayout'
import { Home } from '@/features/home/Home'

const About = lazy(() =>
  import('@/features/about/About').then((m) => ({ default: m.About })),
)
const Mission = lazy(() =>
  import('@/features/about/Mission').then((m) => ({ default: m.Mission })),
)
const Values = lazy(() =>
  import('@/features/about/Values').then((m) => ({ default: m.Values })),
)
const Solutions = lazy(() =>
  import('@/features/solutions/Solutions').then((m) => ({
    default: m.Solutions,
  })),
)
const SolutionDetail = lazy(() =>
  import('@/features/solutions/SolutionDetail').then((m) => ({
    default: m.SolutionDetail,
  })),
)
const Cases = lazy(() =>
  import('@/features/cases/Cases').then((m) => ({ default: m.Cases })),
)
const CaseDetail = lazy(() =>
  import('@/features/cases/CaseDetail').then((m) => ({
    default: m.CaseDetail,
  })),
)
const Projects = lazy(() =>
  import('@/features/projects/Projects').then((m) => ({
    default: m.Projects,
  })),
)
const Technologies = lazy(() =>
  import('@/features/technologies/Technologies').then((m) => ({
    default: m.Technologies,
  })),
)
const Blog = lazy(() =>
  import('@/features/blog/Blog').then((m) => ({ default: m.Blog })),
)
const BlogDetail = lazy(() =>
  import('@/features/blog/BlogDetail').then((m) => ({
    default: m.BlogDetail,
  })),
)
const Faq = lazy(() =>
  import('@/features/faq/Faq').then((m) => ({ default: m.Faq })),
)
const Careers = lazy(() =>
  import('@/features/careers/Careers').then((m) => ({ default: m.Careers })),
)
const Contact = lazy(() =>
  import('@/features/contact/Contact').then((m) => ({ default: m.Contact })),
)
const NotFound = lazy(() =>
  import('@/features/errors/NotFound').then((m) => ({
    default: m.NotFound,
  })),
)
const Privacy = lazy(() =>
  import('@/features/legal/Privacy').then((m) => ({ default: m.Privacy })),
)
const Terms = lazy(() =>
  import('@/features/legal/Terms').then((m) => ({ default: m.Terms })),
)
const Lgpd = lazy(() =>
  import('@/features/legal/Lgpd').then((m) => ({ default: m.Lgpd })),
)

export const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <PublicLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: 'quem-somos',
          element: <About />,
        },
        {
          path: 'missao',
          element: <Mission />,
        },
        {
          path: 'valores',
          element: <Values />,
        },
        {
          path: 'solucoes',
          element: <Solutions />,
        },
        {
          path: 'solucoes/:slug',
          element: <SolutionDetail />,
        },
        {
          path: 'cases',
          element: <Cases />,
        },
        {
          path: 'cases/:slug',
          element: <CaseDetail />,
        },
        {
          path: 'projetos',
          element: <Projects />,
        },
        {
          path: 'tecnologias',
          element: <Technologies />,
        },
        {
          path: 'blog',
          element: <Blog />,
        },
        {
          path: 'blog/:slug',
          element: <BlogDetail />,
        },
        {
          path: 'faq',
          element: <Faq />,
        },
        {
          path: 'carreira',
          element: <Careers />,
        },
        {
          path: 'contato',
          element: <Contact />,
        },
        {
          path: 'privacidade',
          element: <Privacy />,
        },
        {
          path: 'termos',
          element: <Terms />,
        },
        {
          path: 'lgpd',
          element: <Lgpd />,
        },
        {
          path: '*',
          element: <NotFound />,
        },
      ],
    },
  ],
  { basename: import.meta.env.BASE_URL },
)
