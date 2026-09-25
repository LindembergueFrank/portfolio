const stackGroups = [
  { title: 'Backend', items: ['Java', 'Spring Boot', 'Spring Security', 'JPA / Hibernate', 'Python', 'Django'] },
  { title: 'Dados & qualidade', items: ['PostgreSQL', 'Flyway', 'JUnit', 'Pytest', 'REST', 'GitHub Actions'] },
  { title: 'Infra & entrega', items: ['Docker', 'Docker Compose', 'Windows Server', 'AD / GPO', 'Redes', 'Render'] },
  { title: 'Frontend', items: ['React', 'TypeScript', 'Tailwind CSS', 'HTML semântico', 'Acessibilidade'] },
]

export function Stack() {
  return (
    <div className="stack" id="stack">
      <p className="eyebrow">02 / STACK</p>
      <h2>Ferramentas<br /><em>de trabalho.</em></h2>
      <div className="stack-list">
        {stackGroups.map((group) => (
          <div className="stack-row" key={group.title}>
            <h3>{group.title}</h3>
            <ul aria-label={group.title}>
              {group.items.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}
