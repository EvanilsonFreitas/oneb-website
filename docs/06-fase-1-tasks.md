# Fase 1 — Checklist de Conclusão

Critério de conclusão definido no master prompt de fundação. Todos os itens abaixo foram concluídos.

- [x] Projeto React criado (Vite + TypeScript, template `react-ts`)
- [x] Vite configurado (`vite.config.ts` com plugin React + Tailwind + alias `@/`)
- [x] Tailwind CSS configurado (v4, CSS-first, tokens de marca em `src/index.css`)
- [x] shadcn/ui configurado (preset `nova`, tokens remapeados para a paleta OneB)
- [x] Aliases de import (`@/*` → `src/*`) sincronizados em `tsconfig.json`, `tsconfig.app.json` e `vite.config.ts`
- [x] ESLint configurado (flat config, TypeScript + React Hooks + jsx-a11y + Prettier, substituindo o `oxlint` padrão do scaffold)
- [x] Prettier configurado (`prettier-plugin-tailwindcss`, sem conflito com ESLint)
- [x] Husky configurado (repositório Git inicializado + hook `pre-commit`)
- [x] lint-staged configurado (roda ESLint + Prettier nos arquivos staged)
- [x] Estrutura de pastas enterprise criada em `src/` (ver [03-arquitetura.md](./03-arquitetura.md))
- [x] Pasta `docs/` criada
- [x] Documentação em Markdown gerada (visão, design system, arquitetura, roadmap, backlog)
- [x] Roadmap criado
- [x] Backlog criado
- [x] Tasks da Fase 1 documentadas (este arquivo)
- [x] `npm run typecheck`, `npm run lint`, `npm run format:check` e `npm run build` executados sem erros

## Validado em

`npm run typecheck` · `npm run lint` · `npm run format:check` · `npm run build` — todos verdes, sem warnings.

## O que foi deliberadamente NÃO feito nesta fase

Nenhuma página, Hero, Navbar, Footer, componente visual, animação, layout, formulário, banco de dados, autenticação ou conteúdo visual — conforme escopo da Fase 1. Essas entregas pertencem às fases seguintes (ver [04-roadmap.md](./04-roadmap.md)).

## Próximo passo

Aguardar autorização explícita para iniciar a Fase 2 (Design System Visual).
