import { ArrowIcon } from '../components/ui/ArrowIcon'

export function Hero() {
  return (
    <section className="hero shell" id="inicio" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="eyebrow">DESENVOLVEDOR BACKEND · TÉCNICO EM INFORMÁTICA</p>
        <h1 id="hero-title">Olá, eu sou<br /><em>Lindembergue Frank.</em></h1>
        <p className="lead">Atuo com suporte, redes e sistemas internos no setor público. Desenvolvo principalmente com Java e Spring Boot, e uso Python e Django nos meus projetos de infraestrutura.</p>
        <div className="hero-actions">
          <a className="button button--primary" href="#projetos">Conhecer meus projetos <ArrowIcon /></a>
          <a className="text-link" href="https://github.com/LindembergueFrank" target="_blank" rel="noreferrer">github.com/LindembergueFrank <ArrowIcon /></a>
        </div>
      </div>
      <aside className="profile-card" aria-label="Resumo profissional">
        <img src="https://avatars.githubusercontent.com/u/101476903?v=4" alt="Foto de perfil de Lindembergue Frank" width="180" height="180" />
        <div>
          <strong>Lindembergue Frank</strong>
          <span>Natal/RN · Brasil</span>
          <span className="availability"><i /> Aberto a oportunidades backend</span>
        </div>
      </aside>
      <div className="metrics" aria-label="Áreas de especialidade">
        <div><strong>Backend</strong><span>Java · Spring Boot · APIs REST</span></div>
        <div><strong>Dados</strong><span>PostgreSQL · JPA · Flyway</span></div>
        <div><strong>Infraestrutura</strong><span>Docker · Redes · Windows Server</span></div>
      </div>
    </section>
  )
}
