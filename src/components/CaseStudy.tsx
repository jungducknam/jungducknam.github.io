import type { EngineeringCase } from '../assets/data/types'

interface CaseStudyProps {
  item: EngineeringCase
  index: number
  href: string
  expanded: boolean
}

const axisLabels = {
  Correctness: '데이터와 도메인',
  Performance: '성능 개선',
  Reliability: '이벤트와 운영',
}

export default function CaseStudy({ item, index, href, expanded }: CaseStudyProps) {
  const body = (
    <>
      <ol className="case-steps">
        {item.steps.map((step, stepIndex) => (
          <li key={step.label}>
            <h4><span aria-hidden="true">{String(stepIndex + 1).padStart(2, '0')}</span>{step.label}</h4>
            {step.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </li>
        ))}
      </ol>
      {item.comparison && (
        <div className="case-comparison">
          <table>
            <caption>{item.comparison.caption}</caption>
            <thead><tr><th scope="col">항목</th><th scope="col">{item.comparison.beforeLabel}</th><th scope="col">{item.comparison.afterLabel}</th></tr></thead>
            <tbody>{item.comparison.rows.map((row) => (
              <tr key={row.label}><th scope="row">{row.label}</th><td>{row.before}</td><td>{row.after}</td></tr>
            ))}</tbody>
          </table>
          {item.comparison.note && <p className="case-comparison__note">{item.comparison.note}</p>}
        </div>
      )}
      {(item.learning || item.future) && (
        <details className="case-reflection">
          <summary>판단의 기준과 회고</summary>
          {item.learning && <p>{item.learning}</p>}
          {item.future && <div><h4>현재 검토하는 대안</h4><p>{item.future}</p></div>}
        </details>
      )}
    </>
  )

  return (
    <article id={item.id} tabIndex={-1} className={`engineering-case${item.compact ? ' engineering-case--compact' : ''}`} aria-labelledby={`${item.id}-title`}>
      <header className="engineering-case__header">
        <div className="engineering-case__meta">
          <span className="case-number">CASE {String(index + 1).padStart(2, '0')}</span>
          <span>{axisLabels[item.axis]}</span>
          {item.status && <span className="case-status">{item.status}</span>}
        </div>
        <h3 id={`${item.id}-title`}>{item.title}</h3>
        <p className="engineering-case__summary">{item.summary}</p>
        <p className="engineering-case__role"><strong>담당</strong><span>{item.role}</span></p>
      </header>
      <div className="case-result"><span>결과</span><p>{item.outcome}</p></div>
      {item.limits && <p className="case-scope"><strong>확인 범위</strong>{item.limits}</p>}
      {item.compact ? (
        <details className="case-supporting" open={expanded || undefined}>
          <summary>분석과 조치 자세히 읽기</summary>
          {body}
        </details>
      ) : body}
      <footer className="case-footer">
        <a className="case-permalink" href={href}>사례 바로가기<span className="sr-only">: {item.title}</span><span aria-hidden="true">↗</span></a>
        {item.source && <a className="case-source" href={item.source.url} target="_blank" rel="noreferrer noopener">{item.source.title} <span aria-hidden="true">↗</span></a>}
      </footer>
    </article>
  )
}
