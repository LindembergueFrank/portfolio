# Portfólio — Lindembergue Frank

Portfólio profissional desenvolvido para apresentar projetos, experiência e decisões de engenharia de software.

## Stack
**React · TypeScript · Vite · Tailwind CSS**

## Desenvolvimento
```bash
npm install
npm run dev
```

Build: `npm run build`

## Engenharia
- TypeScript `strict`
- arquitetura orientada a componentes e seções
- conteúdo desacoplado da apresentação na evolução do projeto
- responsividade mobile-first
- acessibilidade e HTML semântico
- Conventional Commits
- branches curtas por feature
- Pull Requests para integração
- CI/CD e GitHub Pages no pipeline de release

## Conventional Commits
Formato: `<tipo>(<escopo>): <descrição>`

Exemplos:
- `feat(hero): implement portfolio introduction`
- `feat(projects): add selected project cards`
- `refactor(data): decouple project data from UI`
- `docs(architecture): record frontend decisions`
- `ci(pages): automate GitHub Pages deployment`

Tipos: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `build`, `ci` e `chore`.

## Arquitetura
Consulte [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md).

## Roadmap
- [x] Fundação React + TypeScript + Vite
- [x] Primeira direção visual responsiva
- [x] Documentação arquitetural inicial
- [ ] Componentizar seções e dados
- [ ] Criar páginas/cases dos projetos
- [ ] Adicionar lint e testes
- [ ] Configurar CI
- [ ] Configurar deploy GitHub Pages
- [ ] Auditoria de acessibilidade e performance
- [ ] SEO e metadados sociais
