# Design System

## Tema

Dark Theme obrigatório — não existe versão Light. `<html class="dark">` é fixo em [index.html](../index.html).

## Cores

Definidas como tokens Tailwind v4 (`@theme`) em [src/index.css](../src/index.css).

### Primary — `#3EF0AA`

Convertido para `hsl(156 85% 59%)` como base da escala 50–950 (tecnologia, inovação, energia, inteligência).

### Secondary — `#7E57E1`

Convertido para `hsl(257 70% 61%)` como base da escala 50–950 (IA, futuro, criatividade).

### Superfícies (dark-only)

`background` (#000), `surface`, `elevated`, `card`, `overlay`, `border`, `divider` — todas variações muito escuras/translúcidas sobre preto puro.

> As escalas de cor (50–950) foram derivadas matematicamente a partir do HSL de cada cor-base, ajustando apenas a luminosidade. Ajustes finos de percepção (ex.: contraste AA, WCAG) devem ser validados na Fase 2, quando os componentes visuais forem construídos.

## Tipografia

Fonte oficial: **Plus Jakarta Sans**, carregada via `@fontsource/plus-jakarta-sans` (self-hosted, sem dependência de Google Fonts em runtime — melhor performance e privacidade).

Decisão de performance: apenas o subset **latin** e os pesos 400/500/600/700/800 são importados (ver [src/main.tsx](../src/main.tsx)). Os demais subsets (latin-ext, vietnamese) e o peso italic não são usados pelo site institucional e foram excluídos do bundle.

Fallback: `"Plus Jakarta Sans Fallback", system-ui, sans-serif`.

Escalas de texto (Display, Heading, Title, Subtitle, Body, Caption, Button, Label, Overline) serão definidas como componentes de tipografia na Fase 2, quando as páginas começarem a ser construídas.

## Base de componentes — shadcn/ui

Inicializado com `shadcn@latest init --template vite --base base --preset nova`, usando **Tailwind v4** e aliases `@/components`, `@/lib`, `@/hooks`. Os tokens semânticos do shadcn (`--primary`, `--secondary`, `--background`, `--card`, etc.) foram remapeados em `src/index.css` para apontar para a paleta OneB, e não para os tons neutros padrão do preset.

Regra de arquitetura: componentes gerados por `npx shadcn add` vivem em `src/components/ui` e servem apenas como **base**. Qualquer componente exposto às páginas do site deve passar por adaptação em `src/components/common` ou `src/components/sections` para refletir a identidade visual OneB.

## Espaçamento

Sistema baseado em múltiplos de 4px: 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128 (usar diretamente a escala padrão do Tailwind, que já segue essa progressão).

## Border radius

Tokens `--radius-sm` até `--radius-4xl` derivados de `--radius: 0.625rem` (definido em `src/index.css`), seguindo a convenção do preset shadcn "nova".
