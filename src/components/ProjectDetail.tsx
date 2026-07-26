import { useEffect, useRef } from 'react'
import type { Project } from '../assets/data/profile'

interface ProjectDetailProps {
  project: Project
  onBack: () => void
}

const ProjectDetail = ({ project, onBack }: ProjectDetailProps) => {
  const topRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    topRef.current?.scrollIntoView({ block: 'start' })
  }, [project.slug])

  const detail = project.detail

  return (
    <div className="detail" ref={topRef}>
      <button type="button" className="detail__back" onClick={onBack}>
        ← 목록으로
      </button>

      <header className="detail__header">
        <p className="detail__period">{project.period}</p>
        <h1 className="detail__title">{project.name}</h1>
        {detail?.tagline && <p className="detail__tagline">{detail.tagline}</p>}
        <p className="detail__role">{project.role}</p>
        <div className="detail__tech" aria-label="사용 기술">
          {project.tech.map((stack) => (
            <span key={stack} className="chip">
              {stack}
            </span>
          ))}
        </div>
        {project.links && project.links.length > 0 && (
          <div className="detail__links">
            {project.links.map((link) => (
              <a key={link.title} href={link.url} target="_blank" rel="noreferrer noopener">
                {link.title} ↗
              </a>
            ))}
          </div>
        )}
      </header>

      {detail?.metrics && detail.metrics.length > 0 && (
        <div className="detail__metrics">
          {detail.metrics.map((metric) => (
            <div key={metric.label} className="metric">
              <p className="metric__value">{metric.value}</p>
              <p className="metric__label">{metric.label}</p>
              {metric.note && <p className="metric__note">{metric.note}</p>}
            </div>
          ))}
        </div>
      )}

      {detail?.context && detail.context.length > 0 && (
        <section className="detail__block">
          <h2 className="detail__block-title">프로젝트 개요</h2>
          {detail.context.map((paragraph, idx) => (
            <p key={idx} className="detail__paragraph">
              {paragraph}
            </p>
          ))}
        </section>
      )}

      {detail?.responsibilities && detail.responsibilities.length > 0 && (
        <section className="detail__block">
          <h2 className="detail__block-title">담당 범위</h2>
          <ul className="detail__list">
            {detail.responsibilities.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      )}

      {detail?.architecture && (
        <section className="detail__block">
          <h2 className="detail__block-title">아키텍처</h2>
          <p className="detail__paragraph">{detail.architecture.summary}</p>
          <div className="arch-grid">
            {detail.architecture.nodes.map((node) => (
              <div key={node.label} className="arch-node">
                <p className="arch-node__label">{node.label}</p>
                <p className="arch-node__value">{node.value}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {detail?.challenges && detail.challenges.length > 0 && (
        <section className="detail__block">
          <h2 className="detail__block-title">고민과 해결</h2>
          <div className="challenge-list">
            {detail.challenges.map((challenge, idx) => (
              <article key={challenge.title} className="challenge">
                <div className="challenge__index" aria-hidden>
                  {String(idx + 1).padStart(2, '0')}
                </div>
                <div className="challenge__body">
                  <h3 className="challenge__title">{challenge.title}</h3>
                  <div className="challenge__row">
                    <span className="challenge__tag challenge__tag--problem">고민</span>
                    <p>{challenge.problem}</p>
                  </div>
                  <div className="challenge__row">
                    <span className="challenge__tag challenge__tag--approach">해결</span>
                    <p>{challenge.approach}</p>
                  </div>
                  <div className="challenge__row">
                    <span className="challenge__tag challenge__tag--result">결과</span>
                    <p>{challenge.result}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}

      <section className="detail__block">
        <h2 className="detail__block-title">주요 기여</h2>
        <ul className="detail__list">
          {project.contributions.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      {project.outcomes.some((o) => o.trim().length > 0) && (
        <section className="detail__block">
          <h2 className="detail__block-title">성과</h2>
          <ul className="detail__list detail__list--outcome">
            {project.outcomes
              .filter((o) => o.trim().length > 0)
              .map((item) => (
                <li key={item}>{item}</li>
              ))}
          </ul>
        </section>
      )}

      {detail?.evidence && (
        <p className="detail__evidence">
          <span aria-hidden>ℹ️ </span>
          {detail.evidence}
        </p>
      )}

      <button type="button" className="detail__back detail__back--bottom" onClick={onBack}>
        ← 목록으로
      </button>
    </div>
  )
}

export default ProjectDetail
