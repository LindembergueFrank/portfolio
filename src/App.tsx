import { useEffect, useMemo, useState } from 'react'
import { Footer } from './components/layout/Footer'
import { Header } from './components/layout/Header'
import { findProject } from './data/projects'
import { About } from './sections/About'
import { Hero } from './sections/Hero'
import { ProjectCase } from './sections/ProjectCase'
import { Projects } from './sections/Projects'
import { Stack } from './sections/Stack'

function routeFromHash() {
  const match = window.location.hash.match(/^#\/cases\/([^/]+)$/)
  return match?.[1]
}

export function App() {
  const [caseSlug, setCaseSlug] = useState(routeFromHash)
  const project = useMemo(() => caseSlug ? findProject(caseSlug) : undefined, [caseSlug])

  useEffect(() => {
    const onHashChange = () => {
      setCaseSlug(routeFromHash())
      window.scrollTo({ top: 0, behavior: 'auto' })
    }
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  useEffect(() => {
    document.title = project ? `${project.title} | Lindembergue Frank` : 'Lindembergue Frank | Desenvolvedor Backend'
  }, [project])

  if (project) {
    return (
      <>
        <Header isCasePage />
        <ProjectCase project={project} />
        <Footer />
      </>
    )
  }

  return (
    <>
      <Header />
      <main id="conteudo">
        <Hero />
        <section className="profile-section shell" aria-label="Sobre e tecnologias">
          <About />
          <Stack />
        </section>
        <Projects />
      </main>
      <Footer />
    </>
  )
}
