import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, Clock, Calendar, User, Tag } from 'lucide-react'
import { blogService } from '@/services/blogService'
import type { BlogPost } from '@/constants/mockData'
import { GlassCard } from '@/components/common/GlassCard'
import { GlowButton } from '@/components/common/GlowButton'
import { DetailSkeleton } from '@/components/feedback/Skeleton'
import { Breadcrumb } from '@/components/navigation/Breadcrumb'

export function BlogDetail() {
  const { slug } = useParams<{ slug: string }>()
  const [post, setPost] = useState<BlogPost | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchPost() {
      if (!slug) return
      setLoading(true)
      try {
        const data = await blogService.getPostBySlug(slug)
        setPost(data)
      } catch (err) {
        console.error('Erro ao buscar post:', err)
      } finally {
        setLoading(false)
      }
    }
    void fetchPost()
  }, [slug])

  if (loading) {
    return <DetailSkeleton />
  }

  if (!post) {
    return (
      <div className="mx-auto max-w-7xl px-6 py-32 text-center lg:px-[7.5%]">
        <h2 className="text-2xl font-bold text-white">Artigo não encontrado</h2>
        <p className="mt-2 text-neutral-400">
          O post que você está procurando não existe ou foi removido.
        </p>
        <Link
          to="/blog"
          className="text-primary-400 mt-6 inline-flex items-center gap-2 hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" /> Voltar para o Blog
        </Link>
      </div>
    )
  }

  return (
    <article className="relative pb-24">
      {/* 1. ARTICLE HEADER */}
      <section className="py-8">
        <div className="mx-auto max-w-6xl px-6 lg:px-[7.5%]">
          <Breadcrumb
            items={[{ label: 'Blog', to: '/blog' }, { label: post.title }]}
          />

          <span className="border-secondary-500/20 bg-secondary-500/10 text-secondary-400 rounded-full border px-3 py-1 text-xs font-semibold tracking-wider uppercase">
            {post.category}
          </span>

          <h1 className="mt-6 text-3xl leading-tight font-extrabold tracking-tight text-white md:text-5xl">
            {post.title}
          </h1>

          <div className="mt-6 flex flex-wrap items-center gap-4 border-b border-white/10 pb-6 text-xs text-neutral-500">
            <span className="flex items-center gap-1.5">
              <Calendar className="h-3.5 w-3.5" /> {post.date}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5" /> {post.readTime} de leitura
            </span>
            <span className="flex items-center gap-1.5">
              <User className="h-3.5 w-3.5" /> Por {post.author.name} (
              {post.author.role})
            </span>
          </div>
        </div>
      </section>

      {/* 2. COVER IMAGE */}
      <section className="py-2">
        <div className="mx-auto max-w-6xl px-6 lg:px-[7.5%]">
          <div className="relative h-64 w-full overflow-hidden rounded-3xl border border-white/10 md:h-[440px]">
            <img
              src={post.image}
              alt={post.title}
              className="h-full w-full object-cover opacity-70"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>
        </div>
      </section>

      {/* 3. BODY TEXT AND CONTENT — largura ampliada com sidebar lateral */}
      <section className="py-12">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 lg:grid-cols-12 lg:px-[7.5%]">
          <div className="lg:col-span-8">
            {/* HTML rendered with premium typography styling */}
            <div
              className="prose prose-invert prose-headings:text-white prose-headings:font-bold prose-headings:tracking-tight prose-headings:pt-4 prose-h3:text-lg md:prose-h3:text-xl prose-ul:list-disc prose-ul:pl-6 prose-ul:space-y-2 prose-ol:list-decimal prose-ol:pl-6 prose-ol:space-y-2 prose-strong:text-white prose-strong:font-semibold max-w-none space-y-6 text-sm leading-relaxed text-neutral-300 md:text-base"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Tags */}
            <div className="mt-12 flex flex-wrap gap-2 border-t border-white/10 pt-6">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1 rounded border border-white/5 bg-neutral-900 px-2.5 py-1 text-xs text-neutral-400"
                >
                  <Tag className="h-3 w-3" /> {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Sidebar lateral — autor, ilustração e CTA */}
          <aside className="lg:col-span-4">
            <div className="flex flex-col gap-6 lg:sticky lg:top-28">
              <GlassCard
                className="flex flex-col items-center gap-4 border-white/10 bg-neutral-950/60 p-6 text-center"
                glowColor="rgba(62, 240, 170, 0.1)"
              >
                <img
                  src={post.author.avatar}
                  alt={post.author.name}
                  className="h-16 w-16 shrink-0 rounded-full border border-white/15 object-cover"
                />
                <div>
                  <h4 className="mb-1 text-sm font-bold text-white">
                    Escrito por {post.author.name}
                  </h4>
                  <p className="text-primary-400 mb-2 text-xs font-medium">
                    {post.author.role}
                  </p>
                  <p className="text-xs leading-relaxed text-neutral-400">
                    Especialista sênior da OneB. Dedica-se a impulsionar a
                    performance analítica corporativa e a democratizar a
                    arquitetura de dados moderna.
                  </p>
                </div>
              </GlassCard>

              <GlassCard
                className="border-white/10"
                glowColor="rgba(62, 240, 170, 0.12)"
              >
                <p className="text-sm font-bold text-white">
                  Quer aplicar isso na sua empresa?
                </p>
                <p className="mt-2 text-xs leading-relaxed text-neutral-400">
                  Agende uma reunião diagnóstica gratuita com nossos
                  consultores.
                </p>
                <Link to="/contato" className="mt-5 block w-full">
                  <GlowButton variant="primary" fullWidth>
                    Agendar Diagnóstico
                  </GlowButton>
                </Link>
              </GlassCard>
            </div>
          </aside>
        </div>
      </section>
    </article>
  )
}
export default BlogDetail
