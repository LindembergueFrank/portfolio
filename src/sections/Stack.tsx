import { SectionLabel } from '../components/ui/SectionLabel'

const stack = [
  ['Backend', 'Java · Spring Boot · Spring Security · JPA/Hibernate · Python · Django'],
  ['Dados & Infra', 'PostgreSQL · Docker · GitHub Actions · Windows Server · Redes'],
  ['Frontend', 'React · TypeScript · Tailwind CSS · HTML · CSS'],
]

export function Stack() {
  return <section id="stack" className="container section stack"><SectionLabel index="03">STACK</SectionLabel><h2>Tecnologia com <em>propósito.</em></h2>{stack.map(([area, technologies]) => <div className="stack-line" key={area}><strong>{area}</strong><span>{technologies}</span></div>)}</section>
}
