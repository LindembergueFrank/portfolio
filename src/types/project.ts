export type ProjectStatus = 'Em produção' | 'MVP validado' | 'Em evolução'

export interface Project {
  slug: string
  number: string
  title: string
  shortTitle: string
  status: ProjectStatus
  category: string
  summary: string
  impact: string
  problem: string
  solution: string
  role: string
  architecture: string[]
  decisions: string[]
  results: string[]
  technologies: string[]
  accent: string
}
