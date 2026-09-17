export function Header() {
  return (
    <header className="nav container">
      <a className="brand" href="#top" aria-label="Lindembergue Frank - início">LF<span>.</span></a>
      <nav aria-label="Navegação principal"><a href="#sobre">Sobre</a><a href="#projetos">Projetos</a><a href="#stack">Stack</a></nav>
      <a className="button ghost" href="https://github.com/LindembergueFrank" target="_blank" rel="noreferrer">GitHub ↗</a>
    </header>
  )
}
