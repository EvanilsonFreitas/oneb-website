# Arquitetura

## Stack

- React 19 + Vite 8 + TypeScript (strict, sem `any`)
- Tailwind CSS v4 (via `@tailwindcss/vite`, configuração CSS-first com `@theme`, sem `tailwind.config.js`)
- shadcn/ui (preset `nova`, base `base`) como fundação do Design System
- React Router DOM — roteamento
- React Hook Form + Zod (`@hookform/resolvers`) — formulários e validação
- TanStack Query — cache e sincronização de dados assíncronos
- Axios — cliente HTTP
- Framer Motion + GSAP — animações
- Three.js + React Three Fiber + Drei — cenas 3D (hero, constelações)
- Lenis — smooth scroll
- Lucide Icons, CVA, clsx, tailwind-merge — utilitários de UI

## Por que Tailwind v4 (CSS-first) em vez de v3 + `tailwind.config.js`

O projeto foi criado depois do lançamento da v4, que move a configuração de tema para o próprio CSS (`@theme` em `src/index.css`). Isso elimina um arquivo de configuração inteiro e mantém os tokens de design (cores, fontes, radius) no mesmo lugar onde são consumidos, reduzindo a chance de divergência entre tokens e uso real.

## Aliases de import

`@/*` aponta para `src/*`, configurado em três lugares que precisam ficar sincronizados: `tsconfig.json`, `tsconfig.app.json` (campo `paths`, sem `baseUrl` — deprecado a partir do TypeScript 6) e `vite.config.ts` (`resolve.alias`).

## Estrutura de pastas (`src/`)

```
app/            composição raiz (providers + router + layout)
assets/         fonts, icons, images, illustrations, logos
components/
  ui/           base gerada pelo shadcn — não usar direto nas páginas
  common/       componentes de propósito geral
  feedback/     toast, dialog, skeleton, etc.
  forms/        inputs construídos sobre RHF + Zod
  navigation/   navbar, mega menu, footer
  sections/     blocos de página reutilizáveis (Hero, CTA, FAQ...)
config/         configuração estática (env, seo defaults, integrações)
constants/      valores fixos compartilhados
contexts/       React Contexts globais
features/       módulos por domínio: home, about, blog, contact, solutions, projects, technologies
hooks/          custom hooks reutilizáveis
layouts/        PublicLayout, AuthLayout (futuro), MinimalLayout, ErrorLayout
lib/            integrações de baixo nível (utils do shadcn, cliente Supabase, axios)
providers/      Query Client, Theme, Analytics, Toaster
routes/         definição de rotas do React Router
services/       camada de abstração sobre o Supabase
styles/         estilos globais complementares
types/          tipos compartilhados entre features
utils/          funções puras sem dependência de React
animations/     variants Framer Motion e timelines GSAP reutilizáveis
```

Arquitetura baseada em **features** (por domínio de negócio), não por tipo de arquivo. Código específico de uma feature vive dentro dela; código compartilhado sobe para a raiz de `src/`.

## Backend

Somente **Supabase** (Auth, PostgreSQL, Storage) neste momento. Nenhum componente pode chamar o cliente Supabase diretamente — toda chamada passa por um service em `src/services`, mantendo a aplicação preparada para uma eventual migração de backend sem reescrever componentes.

## Qualidade de código

- **ESLint** (flat config, `eslint.config.js`) com `typescript-eslint` (`recommendedTypeChecked`), `eslint-plugin-react-hooks`, `eslint-plugin-react-refresh`, `eslint-plugin-jsx-a11y` e `eslint-config-prettier` para não conflitar com o Prettier. Regras reforçadas: `no-explicit-any: error`, `no-unused-vars: error`, `consistent-type-imports: error`.
  - **Decisão**: o scaffold `create-vite` mais recente vem com `oxlint` por padrão. Foi removido e substituído por ESLint, pois o master prompt exige ESLint + Prettier + Husky + lint-staged explicitamente.
  - `src/components/ui` é ignorado pelo lint — é código gerado pelo shadcn, mantido como upstream.
- **Prettier** (`.prettierrc.json`) com `prettier-plugin-tailwindcss` para ordenar classes utilitárias automaticamente. Sem ponto e vírgula, aspas simples, trailing comma `all`.
- **EditorConfig** (`.editorconfig`) para consistência de indentação/charset entre editores.
- **Husky + lint-staged**: hook `pre-commit` roda `npx lint-staged`, que aplica `eslint --fix` + `prettier --write` em `.ts/.tsx` staged e `prettier --write` em `.css/.md/.json` staged.

## Scripts (`package.json`)

| Script                    | Descrição                           |
| ------------------------- | ----------------------------------- |
| `dev`                     | Servidor de desenvolvimento Vite    |
| `build`                   | `tsc -b` (typecheck) + `vite build` |
| `typecheck`               | Apenas `tsc -b`, sem build          |
| `lint` / `lint:fix`       | ESLint                              |
| `format` / `format:check` | Prettier                            |
| `preview`                 | Preview do build de produção        |

## Performance

Fonte Plus Jakarta Sans carregada via `@fontsource` restrita ao subset `latin` (ver [02-design-system.md](./02-design-system.md)), evitando ~150KB de fontes não utilizadas (subsets latin-ext e vietnamese) no bundle final.
