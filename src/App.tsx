const projects = [
  ['Plataforma de Chamados', 'Java · Spring Boot · PostgreSQL · Docker'],
  ['NetWatch RN', 'Python · Django · Docker · CI'],
  ['Painel de Autos', 'Web · Dashboard · Automação'],
  ['ViaNux Tecnologia', 'Software · Infraestrutura · Produtos'],
]

export function App() {
  return (
    <main>
      <header className="nav container">
        <a className="brand" href="#top">LF<span>.</span></a>
        <nav aria-label="Navegação principal">
          <a href="#sobre">Sobre</a><a href="#projetos">Projetos</a><a href="#stack">Stack</a>
        </nav>
        <a className="button ghost" href="https://github.com/LindembergueFrank" target="_blank" rel="noreferrer">GitHub ↗</a>
      </header>

      <section id="top" className="hero container">
        <p className="kicker">DESENVOLVEDOR BACKEND · SOFTWARE ENGINEERING</p>
        <h1>Construindo software para<br/><em>problemas reais.</em></h1>
        <p className="lead">Desenvolvedor focado em backend, APIs e sistemas corporativos. Transformo processos e necessidades de infraestrutura em soluções de software confiáveis.</p>
        <div className="actions"><a className="button primary" href="#projetos">Ver projetos ↗</a><a className="button ghost" href="mailto:lindemberg.frank@gmail.com">Entre em contato</a></div>
        <div className="metrics"><div><strong>Java</strong><small>Spring Boot · APIs</small></div><div><strong>Python</strong><small>Django · Automação</small></div><div><strong>Infra</strong><small>Redes · Windows Server</small></div></div>
      </section>

      <section id="sobre" className="about container section"><div><p className="kicker">01 / SOBRE</p><h2>Engenharia além<br/>do <em>código.</em></h2></div><div className="copy"><p>Sou <strong>Lindembergue Frank</strong>, desenvolvedor e profissional de tecnologia com experiência prática em desenvolvimento de sistemas, infraestrutura e redes.</p><p>Minha abordagem combina engenharia de software com entendimento do ambiente onde a aplicação realmente será utilizada.</p></div></section>

      <section id="projetos" className="projects section"><div className="container"><p className="kicker">02 / PROJETOS SELECIONADOS</p><div className="section-title"><h2>Trabalho que gera<br/><em>resultado.</em></h2><p>Cases selecionados pela profundidade técnica e pelo problema resolvido.</p></div><div className="project-grid">{projects.map(([title, stack], index)=><article className="project-card" key={title}><div className="project-meta"><span>0{index+1}</span><span>CASE</span></div><div className="preview"><span>&lt;/&gt;</span></div><h3>{title}</h3><p>{stack}</p><a href="#">Ver case ↗</a></article>)}</div></div></section>

      <section id="stack" className="container section stack"><p className="kicker">03 / STACK</p><h2>Tecnologia com <em>propósito.</em></h2><div className="stack-line"><strong>Backend</strong><span>Java · Spring Boot · Spring Security · JPA/Hibernate · Python · Django</span></div><div className="stack-line"><strong>Dados & Infra</strong><span>PostgreSQL · Docker · GitHub Actions · Windows Server · Redes</span></div><div className="stack-line"><strong>Frontend</strong><span>React · TypeScript · Tailwind CSS · HTML · CSS</span></div></section>

      <footer><div className="container"><p className="kicker">04 / CONTATO</p><h2>Vamos construir algo<br/><em>que importe?</em></h2><a className="button footer-button" href="mailto:lindemberg.frank@gmail.com">E-mail</a><a className="button footer-button" href="https://github.com/LindembergueFrank">GitHub</a><p className="copyright">© 2026 Lindembergue Frank · React + TypeScript</p></div></footer>
    </main>
  )
}
