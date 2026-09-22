# Portfólio — Lindembergue Frank

Meu portfólio profissional, com foco em desenvolvimento backend, APIs e sistemas internos.

**Site:** [lindemberguefrank.github.io/portfolio](https://lindemberguefrank.github.io/portfolio/)

## Tecnologias

React, TypeScript, Vite e Tailwind CSS.

## Executar localmente

```bash
npm install
npm run dev
```

Para validar a aplicação:

```bash
npm run check
```

Esse comando executa lint, testes e build de produção.

## Organização

```text
src/
├── components/     # componentes de layout e interface
├── data/           # conteúdo tipado dos projetos
├── sections/       # seções e páginas dos cases
├── styles/         # estilos globais e responsivos
└── types/          # contratos TypeScript
```

## Publicação

O deploy no GitHub Pages é realizado automaticamente pelo workflow `.github/workflows/pages.yml` após atualizações na branch `main`.
