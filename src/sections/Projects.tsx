import { ArrowIcon } from '../components/ui/ArrowIcon'
import { SectionHeading } from '../components/ui/SectionHeading'
import { projects } from '../data/projects'

export function Projects() {
  return (
    <section className="projects" id="projetos" aria-labelledby="projects-title">
      <div className="shell">
        <div id="projects-title">
          <SectionHeading
            eyebrow="03 / PROJETOS SELECIONADOS"
            title="Projetos que contam"
            accent="minha trajetória."
            description="Soluções desenvolvidas a partir de necessidades reais do trabalho e de projetos práticos."
          />
        </div>
        <div className="project-list">
          {projects.map((project) => (
            <article className="project-card" key={project.slug} style={{ '--accent': project.accent } as React.CSSProperties}>
              <div className="project-card__index">
                <span>{project.number}</span>
                <span>{project.status}</span>
              </div>
              <div className="project-card__body">
                <p className="project-category">{project.category}</p>
                <h3>{project.shortTitle}</h3>
                <p>{project.summary}</p>
                <strong className="project-impact">{project.impact}</strong>
                <ul className="tag-list" aria-label={`Tecnologias de ${project.shortTitle}`}>
                  {project.technologies.slice(0, 4).map((technology) => <li key={technology}>{technology}</li>)}
                </ul>
                <a className="case-link" href={`#/cases/${project.slug}`} aria-label={`Ver case ${project.title}`}>Ver case <ArrowIcon /></a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
