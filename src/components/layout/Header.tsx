import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'

interface HeaderProps {
  isCasePage?: boolean
}

export function Header({ isCasePage = false }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const close = () => setIsOpen(false)
    window.addEventListener('hashchange', close)
    return () => window.removeEventListener('hashchange', close)
  }, [])

  return (
    <header className="site-header">
      <div className="shell nav-wrap">
        <a className="brand" href="#inicio" aria-label="Lindembergue Frank — página inicial">
          <span>Lindembergue</span> Frank
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={isOpen}
          aria-controls="main-navigation"
          onClick={() => setIsOpen((current) => !current)}
        >
          {isOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
        <nav id="main-navigation" className={isOpen ? 'nav-links is-open' : 'nav-links'} aria-label="Navegação principal">
          {isCasePage ? (
            <a href="#projetos">← Todos os projetos</a>
          ) : (
            <>
              <a href="#sobre">Sobre</a>
              <a href="#projetos">Projetos</a>
              <a href="#stack">Stack</a>
            </>
          )}
        </nav>
        <a className="nav-cta" href="mailto:lindemberg.frank@gmail.com">Contato <span aria-hidden="true">↗</span></a>
      </div>
    </header>
  )
}
