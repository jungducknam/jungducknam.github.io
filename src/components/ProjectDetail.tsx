import { useState } from 'react'
import type { Project } from '../assets/data/profile'
import ProjectDiagram from './ProjectDiagram'

interface ProjectDetailProps {
  project: Project
  section?: string
  backHref: string
}

export default function ProjectDetail({ project, section, backHref }: ProjectDetailProps) {
  const [mobileTocOpen, setMobileTocOpen] = useState(false)
  const href = (id: string) => `#/project/${project.slug}/${id}`
  const sections = [
    { id: 'project-overview', label: 'Overview' },
    ...(project.flow ? [{ id: 'architecture', label: 'Architecture' }] : []),
    { id: 'contributions', label: 'Contribution' },
    ...project.cases.map((item, index) => ({
      id: item.id,
      label: `0${index + 1}. ${item.navTitle || item.id.split('-').map((word) => word === 'api' ? 'API' : word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}`,
    })),
    ...(project.notes?.length ? [{ id: 'more-cases', label: 'More Cases' }] : []),
    ...(project.writings?.length ? [{ id: 'dev-notes', label: 'Dev Notes' }] : []),
  ]
  const tocLinks = (
    <ol className="detail-toc__list">
      {sections.map((item) => (
        <li key={item.id}>
          <a href={href(item.id)} aria-current={(section || 'project-overview') === item.id ? 'location' : undefined}
            onClick={() => setMobileTocOpen(false)}>{item.label}</a>
        </li>
      ))}
    </ol>
  )

  return (
    <div className="detail">
      <div className="detail-mobile-toc">
        <button type="button" aria-expanded={mobileTocOpen} aria-controls="mobile-toc-content"
          onClick={() => setMobileTocOpen((value) => !value)}>
          Contents · {project.cases.length ? `${project.cases.length} cases` : 'Overview'}
          <span aria-hidden="true">{mobileTocOpen ? '−' : '+'}</span>
        </button>
        <nav id="mobile-toc-content" hidden={!mobileTocOpen} aria-label="이 페이지 목차">{tocLinks}</nav>
      </div>
      <div className="detail-layout">
        <aside className="detail-sidebar">
          <nav className="detail-toc" aria-label="이 페이지 목차">
            <p className="eyebrow">{project.shortName}</p>
            {tocLinks}
            <a className="detail__back" href={backHref}>← Back</a>
          </nav>
        </aside>
        <div className="detail-content">
          {section && !sections.some((item) => item.id === section) && (
            <p className="detail-notice" role="status">선택한 항목을 찾을 수 없어 프로젝트 전체를 보여드립니다.</p>
          )}
          <section id="project-overview" tabIndex={-1} className="detail__block" aria-labelledby="project-title">
            <header className="detail__header">
              <p className="eyebrow">{project.period}</p>
              <h1 id="project-title" className="detail__title">{project.name}</h1>
              <p className="detail__role">{project.role}</p>
              <p className="detail__tagline">{project.summary}</p>
              <div className="detail__tech" aria-label="주요 사용 기술">
                {project.tech.map((stack) => <span key={stack} className="chip">{stack}</span>)}
              </div>
            </header>
            {project.showcase && (
              <figure className="detail-cover">
                <img src={`${import.meta.env.BASE_URL}${project.showcase.image}`} alt={project.showcase.imageAlt} width="1280" height="720" decoding="async" />
                <figcaption><span>{project.showcase.status}</span>{project.showcase.caption}</figcaption>
              </figure>
            )}
            <h2 className="detail__block-title">프로젝트 개요</h2>
            {project.context.map((paragraph) => <p key={paragraph} className="detail__paragraph">{paragraph}</p>)}
            {project.links && (
              <div className="detail__links">
                {project.links.map((link) => <a key={link.title} href={link.url} target="_blank" rel="noreferrer noopener">{link.title} ↗</a>)}
              </div>
            )}
          </section>

          {project.flow && (
            <section id="architecture" tabIndex={-1} className="detail__block" aria-labelledby="architecture-title">
              <p className="eyebrow">Architecture / Data flow</p>
              <h2 id="architecture-title" className="detail__block-title">시스템의 흐름과 개인 기여</h2>
              <ProjectDiagram flow={project.flow} />
            </section>
          )}

          <section id="contributions" tabIndex={-1} className="detail__block" aria-labelledby="contributions-title">
            <p className="eyebrow">My contribution</p>
            <h2 id="contributions-title" className="detail__block-title">직접 수행한 기여</h2>
            <div className="contribution-list">
              {project.contributions.map((item) => (
                <article key={item.title}><h3>{item.title}</h3><p>{item.description}</p></article>
              ))}
            </div>
          </section>

          {project.cases.length > 0 && (
            <section aria-labelledby="challenges-title">
              <header className="case-section-header">
                <p className="eyebrow">Engineering challenges</p>
                <h2 id="challenges-title" className="detail__block-title">관측에서 판단, 검증까지</h2>
                <p>사례별로 담당 범위와 확인된 결과를 구분했습니다. 현재의 개선안은 당시 구현과 별도로 표기했습니다.</p>
              </header>
              {project.cases.map((item, index) => (
                <article id={item.id} tabIndex={-1} className="engineering-case" key={item.id} aria-labelledby={`${item.id}-title`}>
                  <header className="engineering-case__header">
                    <div className="engineering-case__meta"><span className="case-number">CASE 0{index + 1}</span><span>{item.axis}</span>{item.status && <span>{item.status}</span>}</div>
                    <h3 id={`${item.id}-title`}>{item.title}</h3>
                    <p className="engineering-case__summary">{item.summary}</p>
                    <p className="engineering-case__role"><strong>내 역할</strong>{item.role}</p>
                  </header>
                  <ol className="case-steps">
                    {item.steps.map((step) => (
                      <li key={step.label}>
                        <h4>{step.label}</h4>
                        <div>{step.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
                      </li>
                    ))}
                  </ol>
                  <div className="case-result"><span>확인된 결과</span><p>{item.outcome}</p></div>
                  <div className="case-reflection">
                    <div><h4>이 경험에서 배운 점</h4><p>{item.learning}</p></div>
                    {item.limits && <div className="case-limit"><h4>기록의 한계 · 추가 확인</h4><p>{item.limits}</p></div>}
                    {item.future && <div><h4>현재 다시 설계한다면</h4><p>{item.future}</p></div>}
                  </div>
                  <a className="case-permalink" href={href(item.id)}>이 사례의 고유 링크 <span className="sr-only">: {item.title}</span><span aria-hidden="true">↗</span></a>
                  {item.source && (
                    <div className="case-source"><span>개발 기록에서 확인하기</span><a href={item.source.url} target="_blank" rel="noreferrer noopener">{item.source.title} <span aria-hidden="true">↗</span></a></div>
                  )}
                </article>
              ))}
            </section>
          )}

          {project.notes && (
            <section id="more-cases" tabIndex={-1} className="detail__block" aria-labelledby="more-cases-title">
              <h2 id="more-cases-title" className="detail__block-title">추가 개발·진단 기록</h2>
              <div className="detail-notes">
                {project.notes.map((note) => <details key={note.title}><summary>{note.title}</summary><p>{note.text}</p></details>)}
              </div>
            </section>
          )}
          {!!project.writings?.length && (
            <section id="dev-notes" tabIndex={-1} className="detail__block" aria-labelledby="dev-notes-title">
              <p className="eyebrow">Behind the build</p>
              <h2 id="dev-notes-title" className="detail__block-title">판단이 바뀐 순간을 기록했습니다</h2>
              <div className="dev-notes">
                {project.writings.map((post) => (
                  <a className="dev-note" key={post.url} href={post.url} target="_blank" rel="noreferrer noopener">
                    <span className="dev-note__date">{post.date} · Development journal <span aria-hidden="true">↗</span></span>
                    <h3>{post.title}</h3>
                    <p>{post.summary}</p>
                  </a>
                ))}
              </div>
            </section>
          )}
          <div className="detail-end">
            <p>다른 문제 해결 과정도 살펴보세요.</p>
            <a className="button button--ghost" href={backHref}>← 목록의 읽던 위치로</a>
            <a href={href('project-overview')}>프로젝트 처음으로 ↑</a>
          </div>
        </div>
      </div>
    </div>
  )
}
