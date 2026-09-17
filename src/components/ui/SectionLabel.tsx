interface SectionLabelProps {
  index: string
  children: string
}

export function SectionLabel({ index, children }: SectionLabelProps) {
  return <p className="kicker">{index} / {children}</p>
}
