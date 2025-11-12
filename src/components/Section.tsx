import { ReactNode, useRef } from 'react'
import useGsapFadeUp from '../hooks/useGsapFadeUp'

interface SectionProps {
  id: string
  title: string
  subtitle?: string
  intro?: string
  children: ReactNode
}

const Section = ({ id, title, subtitle, intro, children }: SectionProps) => {
  const sectionRef = useRef<HTMLElement>(null)
  useGsapFadeUp(sectionRef)

  return (
    <section id={id} ref={sectionRef} className="section" aria-labelledby={`${id}-title`}>
      <header className="section__header">
        {subtitle && (
          <p className="section__subtitle" aria-label="섹션 부제">
            {subtitle}
          </p>
        )}
        <h2 id={`${id}-title`} className="section__title">
          {title}
        </h2>
        {intro && <p className="section__intro">{intro}</p>}
      </header>
      <div className="section__body">{children}</div>
    </section>
  )
}

export default Section
