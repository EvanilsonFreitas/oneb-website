# Backlog

Itens ainda não priorizados em uma fase específica do [roadmap](./04-roadmap.md). Priorização acontece no início de cada fase.

## Design System

- [ ] Definir escala tipográfica completa (Display XL → Code) com `clamp()` responsivo
- [ ] Componentizar Stats Card, Feature Card, Technology Card, Service Card, Case Card, Project Card, Blog Card, Pricing Card
- [ ] Timeline, Accordion, Tabs, Carousel
- [ ] Validar contraste AA de toda a paleta primary/secondary sobre `background`/`card`

## 3D / Motion

- [ ] Cena 3D do Hero (rede neural / constelações com React Three Fiber + Drei)
- [ ] Configurar Lenis (smooth scroll) globalmente via provider
- [ ] Biblioteca de variants Framer Motion (fade, scale, slide, blur) em `src/animations`
- [ ] Respeitar `prefers-reduced-motion` em todas as animações

## Conteúdo / CMS

- [ ] Modelagem das tabelas Supabase: `profiles`, `leads`, `contacts`, `meeting_requests`, `newsletter`, `blog_posts`, `blog_categories`, `blog_tags`, `authors`, `settings`, `uploads`
- [ ] Definir schema de SEO por página (title, description, og:image, canonical)

## Integrações (preparar via Providers, não implementar ainda)

- [ ] Google Analytics / Google Tag Manager
- [ ] Microsoft Clarity
- [ ] Meta Pixel
- [ ] LinkedIn Insight
- [ ] Hotjar

## Infraestrutura

- [ ] CI/CD (lint + typecheck + build) antes de deploy
- [ ] Deploy na Vercel conectado ao repositório
- [ ] Sitemap e robots.txt gerados no build
