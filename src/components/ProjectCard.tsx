import type { Project } from '../assets/data/profile'

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article id={`project-${project.slug}`} tabIndex={-1} className="project-card">
      <div className="project-card__meta">
        <p className="project-card__period">{project.period}</p>
        <h3 className="project-card__name">{project.name}</h3>
        <p className="project-card__role">{project.role}</p>
        <div className="project-card__tech" aria-label="주요 사용 기술">
          {project.tech.slice(0, 4).map((stack) => <span key={stack} className="chip">{stack}</span>)}
        </div>
      </div>
      <div className="project-card__content">
        <p className="project-card__summary">{project.summary}</p>
        <p className="project-card__scope"><span>담당 영역</span>{project.focus}</p>
        <a id={`open-${project.slug}`} className="project-card__detail-cta" href={`#/project/${project.slug}`}>
          담당한 개발과 사례 읽기 <span className="sr-only">: {project.shortName}</span><span aria-hidden="true">→</span>
        </a>
      </div>
    </article>
  )
}
