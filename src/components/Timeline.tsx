interface TimelineItem {
  period: string
  title: string
  subtitle?: string
  points?: string[]
}

interface TimelineProps {
  items: TimelineItem[]
  variant?: 'career' | 'education'
}

const Timeline = ({ items, variant = 'education' }: TimelineProps) => {
  return (
    <div className={`timeline timeline--${variant}`}>
      {items.map((item, index) => (
        <article key={`${item.title}-${index}`} className="timeline__item">
          <div className="timeline__marker" aria-hidden />
          <div className="timeline__content">
            <p className="timeline__period">{item.period}</p>
            <h3 className="timeline__title">{item.title}</h3>
            {item.subtitle && <p className="timeline__subtitle">{item.subtitle}</p>}
            {item.points && item.points.length > 0 && (
              <ul className="timeline__list">
                {item.points.map((point, idx) => (
                  <li key={`${item.title}-point-${idx}`}>{point}</li>
                ))}
              </ul>
            )}
          </div>
        </article>
      ))}
    </div>
  )
}

export default Timeline
