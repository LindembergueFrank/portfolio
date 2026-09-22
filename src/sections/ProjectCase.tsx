import { Check, ChevronLeft } from 'lucide-react'
import type { Project } from '../types/project'

interface ProjectCaseProps {
  project: Project
}

export function ProjectCase({ project }: ProjectCaseProps) {
  return (
    <main id="conteudo" className="case-page" style={{ '--accent': project.accent } as React.CSSProperties}>
      <section className="case-hero shell">
        <a className="back-link" href="#projetos"><ChevronLeft aria-hidden="true" size={18} /> Projetos</a>
        <p className="eyebrow">CASE {project.number} · {project.category.toUpperCase()}</p>
        <h1>{project.title}</h1>
        <p className="case-lead">{project.summary}</p>
        <div className="case-meta">
          <div><span>Status</span><strong>{project.status}</strong></div>
          <div><span>Meu papel</span><strong>Produto + engenharia</strong></div>
          <div><span>Impacto</span><strong>{project.impact}</strong></div>
        </div>
      </section>

      <section className="case-story shell" aria-label="História do projeto">
        <article><span>01</span><h2>O problema</h2><p>{project.problem}</p></article>
        <article><span>02</span><h2>A solução</h2><p>{project.solution}</p></article>
        <article><span>03</span><h2>Minha atuação</h2><p>{project.role}</p></article>
      </section>

      <section className="case-details shell">
        <div>
          <p className="eyebrow">ARQUITETURA</p>
          <h2>Decisões que sustentam o produto.</h2>
        </div>
        <div className="detail-columns">
          <article><h3>Estrutura</h3><ul>{project.architecture.map((item) => <li key={item}><Check aria-hidden="true" size={16} />{item}</li>)}</ul></article>
          <article><h3>Decisões</h3><ul>{project.decisions.map((item) => <li key={item}><Check aria-hidden="true" size={16} />{item}</li>)}</ul></article>
          <article><h3>Resultados</h3><ul>{project.results.map((item) => <li key={item}><Check aria-hidden="true" size={16} />{item}</li>)}</ul></article>
        </div>
        <ul className="case-tech" aria-label="Tecnologias utilizadas">
          {project.technologies.map((technology) => <li key={technology}>{technology}</li>)}
        </ul>
        <a className="next-project" href="#projetos">Ver todos os projetos <span aria-hidden="true">→</span></a>
      </section>
    </main>
  )
}
