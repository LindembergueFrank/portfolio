# Arquitetura do portfólio

## Objetivo

Manter um portfólio rápido, acessível e simples de atualizar. O projeto é uma SPA estática: não existe backend porque o conteúdo é público e não há dados dinâmicos.

## Decisões

- **React:** composição das seções e dos cases.
- **TypeScript estrito:** contratos explícitos para os dados dos projetos.
- **Tailwind CSS:** pipeline de CSS e utilitários disponíveis; os estilos compartilhados ficam em `src/styles`.
- **Hash routing:** cases individuais sem dependência adicional e sem problemas de fallback no GitHub Pages.
- **Dados separados da interface:** novos projetos são adicionados em `src/data/projects.ts`.
- **GitHub Actions:** validação e deploy automático no GitHub Pages.

## Qualidade

O comando `npm run check` executa ESLint, testes com Vitest e Testing Library, verificação TypeScript e build de produção.

O layout possui HTML semântico, navegação por teclado, foco visível, link para pular ao conteúdo, suporte a movimento reduzido e breakpoint específico para celular.
