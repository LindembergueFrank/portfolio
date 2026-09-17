import type { Project } from '../../types/project'

interface ProjectCardProps {
  project: Project
  index: number
  onOpen: (project: Project) => void
}

export function ProjectCard({ project, index, onOpen }: ProjectCardProps) {
  return (
    <article className="project-card">
      <div className="project-meta"><span>{String(index + 1).padStart(2, '0')}</span><span>{project.status.toUpperCase()}</span></div>
      <div className="preview" aria-hidden="true"><span>&lt;/&gt;</span></div>
      <h3>{project.title}</h3>
      <p>{project.summary}</p>
      <ul className="tag-list" aria-label={`Tecnologias de ${project.title}`}>
        {project.stack.map((technology) => <li key={technology}>{technology}</li>)}
      </ul>
      <button className="case-link" type="button" onClick={() => onOpen(project)} aria-label={`Ver case ${project.title}`}>Ver case ↗</button>
    </article>
  )
}
