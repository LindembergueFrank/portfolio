import { ArrowIcon } from '../ui/ArrowIcon'

export function Footer() {
  return (
    <footer className="site-footer" id="contato">
      <div className="shell">
        <p className="eyebrow eyebrow--light">04 / CONTATO</p>
        <div className="footer-grid">
          <h2>Quer conversar<br /><em>sobre tecnologia?</em></h2>
          <p>Estou buscando oportunidades em backend e também gosto de trocar ideias sobre Java, infraestrutura e projetos reais.</p>
        </div>
        <div className="footer-actions">
          <a className="button button--light" href="mailto:lindemberg.frank@gmail.com">E-mail <ArrowIcon /></a>
          <a className="button button--light" href="https://github.com/LindembergueFrank" target="_blank" rel="noreferrer">GitHub <ArrowIcon /></a>
        </div>
        <div className="footer-base">
          <span>© 2026 Lindembergue Frank</span>
          <span>Feito por mim com React, TypeScript e Tailwind CSS</span>
        </div>
      </div>
    </footer>
  )
}
