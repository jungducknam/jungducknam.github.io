import type { ReactNode } from 'react'

interface SectionProps {
  id: string
  title: string
  subtitle?: string
  intro?: string
  children: ReactNode
}

export default function Section({ id, title, subtitle, intro, children }: SectionProps) {
  return (
    <section id={id} tabIndex={-1} className="section" aria-labelledby={`${id}-title`}>
      <header className="section__header">
        {subtitle && <p className="section__subtitle">{subtitle}</p>}
        <h2 id={`${id}-title`} className="section__title">{title}</h2>
        {intro && <p className="section__intro">{intro}</p>}
      </header>
      <div className="section__body">{children}</div>
    </section>
  )
}
