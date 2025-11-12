interface ProjectCardProps {
  name: string
  role: string
  period: string
  tech: string[]
  summary: string
  contributions: string[]
  outcomes: string[]
  links?: { title: string; url: string }[]
}

const ProjectCard = ({ name, role, period, tech, summary, contributions, outcomes, links }: ProjectCardProps) => {
  return (
    <article className="project-card">
      <header className="project-card__header">
        <div>
          <p className="project-card__period">{period}</p>
          <h3 className="project-card__name">{name}</h3>
        </div>
        <div className="project-card__role">{role}</div>
      </header>
      <p className="project-card__summary">{summary}</p>

      <div className="project-card__tech" aria-label="사용 기술">
        {tech.map((stack) => (
          <span key={stack} className="chip">
            {stack}
          </span>
        ))}
      </div>

      <div className="project-card__details">
        <section>
          <h4>기여</h4>
          <ul>
            {contributions.map((item) => (
              <li key={`${name}-contrib-${item}`}>{item}</li>
            ))}
          </ul>
        </section>
        <section>
          <h4>성과</h4>
          <ul>
            {outcomes.map((item) => (
              <li key={`${name}-outcome-${item}`}>{item}</li>
            ))}
          </ul>
        </section>
      </div>

      {links && links.length > 0 && (
        <div className="project-card__links">
          {links.map((link) => (
            <a key={link.title} href={link.url} target="_blank" rel="noreferrer noopener">
              {link.title}
            </a>
          ))}
        </div>
      )}
    </article>
  )
}

export default ProjectCard
