interface SectionHeadingProps {
  eyebrow: string
  title: string
  accent?: string
  description?: string
}

export function SectionHeading({ eyebrow, title, accent, description }: SectionHeadingProps) {
  return (
    <div className="section-heading">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title} {accent && <em>{accent}</em>}</h2>
      </div>
      {description && <p className="section-description">{description}</p>}
    </div>
  )
}
