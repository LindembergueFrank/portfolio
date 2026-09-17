import type { Project } from '../../types/project'

interface ProjectCaseProps {
  project: Project
  onClose: () => void
}

export function ProjectCase({ project, onClose }: ProjectCaseProps) {
  return (
    <section className="case-panel" aria-labelledby="case-title">
      <button className="case-close" type="button" onClick={onClose}>← Voltar aos projetos</button>
      <p className="kicker">CASE / {project.status.toUpperCase()}</p>
      <h2 id="case-title">{project.title}</h2>
      <p className="case-summary">{project.summary}</p>
      <div className="case-grid">
        <div><h3>Problema</h3><p>{project.problem}</p></div>
        <div><h3>Solução</h3><p>{project.solution}</p></div>
      </div>
      <div className="case-grid">
        <div><h3>Stack</h3><p>{project.stack.join(' · ')}</p></div>
        <div><h3>Destaques</h3><ul>{project.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul></div>
      </div>
    </section>
  )
}
