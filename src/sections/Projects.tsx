import { useState } from 'react'
import { projects } from '../data/projects'
import type { Project } from '../types/project'
import { ProjectCard } from '../components/ui/ProjectCard'
import { ProjectCase } from '../components/ui/ProjectCase'
import { SectionLabel } from '../components/ui/SectionLabel'

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  return (
    <section id="projetos" className="projects section"><div className="container">
      <SectionLabel index="02">PROJETOS SELECIONADOS</SectionLabel>
      {selectedProject ? <ProjectCase project={selectedProject} onClose={() => setSelectedProject(null)} /> : <><div className="section-title"><h2>Trabalho que gera<br/><em>resultado.</em></h2><p>Cases selecionados pela profundidade técnica e pelo problema resolvido.</p></div><div className="project-grid">{projects.map((project, index) => <ProjectCard project={project} index={index} onOpen={setSelectedProject} key={project.slug} />)}</div></>}
    </div></section>
  )
}
