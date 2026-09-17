# Arquitetura do Portfólio

## Objetivo
Construir um portfólio rápido, acessível e simples de manter, usando decisões compatíveis com aplicações frontend profissionais sem adicionar complexidade sem necessidade.

## Stack
- React
- TypeScript em modo `strict`
- Vite
- Tailwind CSS
- GitHub Pages

## Estrutura alvo
```text
src/
├── assets/
├── components/
│   ├── layout/
│   └── ui/
├── data/
├── sections/
├── services/
├── styles/
├── types/
├── App.tsx
└── main.tsx
```

## Princípios
1. **Single Responsibility:** componentes devem possuir responsabilidades pequenas e claras.
2. **Separation of Concerns:** conteúdo dos projetos não deve permanecer acoplado aos componentes visuais.
3. **Composition over configuration:** preferir composição React a componentes genéricos excessivamente configuráveis.
4. **Type safety:** contratos de dados representados por tipos TypeScript.
5. **YAGNI:** não adicionar backend enquanto não existir requisito que o justifique.
6. **DRY com critério:** abstrair duplicação real, evitando abstrações prematuras.

## Git workflow
`main` representa código publicável. Mudanças relevantes são desenvolvidas em branches curtas e integradas por Pull Request. Commits seguem Conventional Commits.

## ADR-001 — SPA estática
O primeiro release será uma SPA estática. GitHub Pages reduz infraestrutura e custo operacional.

## ADR-002 — React + TypeScript
React fornece composição e ecossistema maduro. TypeScript em modo estrito melhora contratos, refatoração e manutenção.

## ADR-003 — Tailwind CSS
Tailwind será usado como ferramenta de estilização e design system. Tokens e padrões visuais devem ser consistentes e o CSS global ficará reservado a fundamentos compartilhados.

## Qualidade
A evolução inclui lint, build automatizado, testes de componentes críticos, auditoria de acessibilidade, SEO, Core Web Vitals e pipeline CI/CD.
