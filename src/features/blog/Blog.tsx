import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, Clock } from 'lucide-react'
import { blogService } from '@/services/blogService'
import type { BlogPost } from '@/constants/mockData'
import { CardGridSkeleton } from '@/components/feedback/Skeleton'

export function Blog() {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('Todos')

  useEffect(() => {
    async function fetchPosts() {
      setLoading(true)
      try {
        const data = await blogService.getPosts()
        setPosts(data)
      } catch (err) {
        console.error('Erro ao buscar posts:', err)
      } finally {
        setLoading(false)
      }
    }
    void fetchPosts()
  }, [])

  // Handle live search and category updates synchronously during render
  const filteredPosts = posts.filter((post) => {
    const categoryMatches =
      selectedCategory === 'Todos' || post.category === selectedCategory
    const searchMatches =
      searchTerm.trim() === '' ||
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase()),
      )
    return categoryMatches && searchMatches
  })

  const categories = [
    'Todos',
    'Tecnologia',
    'Engenharia',
    'Inteligência Artificial',
  ]

  return (
    <div className="relative pb-24">
      {/* 1. HERO HEADER */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-[7.5%]">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center"
          >
            <div className="border-secondary-500/20 bg-secondary-500/5 text-secondary-400 mb-4 inline-flex items-center gap-2 rounded-full border px-4 py-1 text-xs font-semibold tracking-wider uppercase">
              Blog & insights
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">
              Nossos Artigos e{' '}
              <span className="text-secondary-500">Conhecimento</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-neutral-400 md:text-lg">
              Acompanhe novidades de engenharia analítica, tendências do
              ecossistema Microsoft Fabric, tutoriais de SQL/DAX e novidades em
              Machine Learning.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. SEARCH & FILTER OPTIONS */}
      <section className="pb-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-[7.5%]">
          <div className="flex flex-col items-center justify-between gap-4 border-b border-white/10 pb-6 md:flex-row">
            {/* Categories */}
            <div className="flex w-full flex-wrap gap-2 md:w-auto">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`cursor-pointer rounded-lg border px-4 py-2 text-xs font-semibold tracking-wider uppercase transition-all ${
                    selectedCategory === cat
                      ? 'bg-secondary-600 border-secondary-600 text-white shadow-md'
                      : 'border-white/5 bg-white/5 text-neutral-400 hover:border-white/15 hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Input search */}
            <div className="relative w-full md:w-80">
              <Search className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-neutral-500" />
              <input
                type="text"
                placeholder="Buscar no blog..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="focus:border-primary-500/50 w-full rounded-lg border border-white/10 bg-white/5 py-2.5 pr-4 pl-10 text-xs text-white placeholder-neutral-500 focus:outline-none"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. POST INDEX — minimal editorial list, not cards */}
      <section className="py-6">
        <div className="mx-auto max-w-4xl px-6 lg:px-[7.5%]">
          {loading ? (
            <CardGridSkeleton count={3} />
          ) : (
            <div className="flex flex-col border-t border-white/10">
              <AnimatePresence mode="popLayout" initial={false}>
                {filteredPosts.map((post) => (
                  <PostListItem key={post.slug} post={post} />
                ))}
              </AnimatePresence>
            </div>
          )}

          {!loading && filteredPosts.length === 0 && (
            <div className="py-20 text-center">
              <p className="text-sm text-neutral-500">
                Nenhum artigo corresponde à pesquisa realizada.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

/** A single article rendered as a minimal editorial list row — date/read time, headline, tags — not a card. Opens the full BlogDetail page on click. */
function PostListItem({ post }: { post: BlogPost }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
      className="border-b border-white/10"
    >
      <Link
        to={`/blog/${post.slug}`}
        className="group block py-8 transition-colors hover:bg-white/[0.02]"
      >
        <div className="flex items-center gap-2 font-mono text-xs text-neutral-500">
          <time>{post.date}</time>
          <span className="text-neutral-700">·</span>
          <span className="flex items-center gap-1">
            <Clock className="h-3 w-3" />
            {post.readTime} de leitura
          </span>
        </div>

        <h2 className="group-hover:text-primary-400 mt-3 text-2xl leading-snug font-extrabold tracking-tight text-white transition-colors md:text-3xl">
          {post.title}
        </h2>

        <div className="mt-4 flex flex-wrap gap-2">
          <span className="border-secondary-500/25 bg-secondary-500/5 text-secondary-400 rounded-full border px-3 py-1 text-[11px] font-semibold tracking-wide uppercase">
            {post.category}
          </span>
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/10 px-3 py-1 text-[11px] text-neutral-400 uppercase"
            >
              {tag}
            </span>
          ))}
        </div>
      </Link>
    </motion.article>
  )
}

export default Blog
