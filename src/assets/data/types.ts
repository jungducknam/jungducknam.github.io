export type Axis = 'Correctness' | 'Performance' | 'Reliability'

export interface CaseStep {
  label: string
  paragraphs: string[]
}

export interface EngineeringCase {
  id: string
  navTitle?: string
  title: string
  axis: Axis
  summary: string
  role: string
  outcome: string
  steps: CaseStep[]
  learning?: string
  limits?: string
  future?: string
  status?: string
  compact?: boolean
  comparison?: {
    caption: string
    beforeLabel: string
    afterLabel: string
    rows: { label: string; before: string; after: string }[]
    note?: string
  }
  source?: { title: string; url: string }
}

export interface ProjectFlow {
  summary: string
  nodes: { title: string; description: string; contribution?: string }[]
  environment: string
}

export interface Project {
  slug: string
  name: string
  shortName: string
  role: string
  period: string
  tech: string[]
  summary: string
  focus: string
  context: string[]
  contributions: { title: string; description: string }[]
  flow?: ProjectFlow
  cases: EngineeringCase[]
  notes?: { title: string; text: string }[]
  links?: { title: string; url: string }[]
  showcase?: {
    category: string
    status: string
    image: string
    imageAlt: string
    caption: string
    question: string
  }
  writings?: { title: string; url: string; date: string; summary: string }[]
}

export interface SkillCategory {
  category: string
  items: string[]
  context: string
  href: string
}
