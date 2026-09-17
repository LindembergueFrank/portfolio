export type ProjectStatus = 'production' | 'mvp' | 'development'

export interface Project {
  slug: string
  title: string
  summary: string
  problem: string
  solution: string
  stack: string[]
  highlights: string[]
  status: ProjectStatus
  repositoryUrl?: string
}
