import { featuredCases } from '../assets/data/profile'

export default function FeaturedCases() {
  return (
    <div className="featured-grid">
      {featuredCases.map((item, index) => (
        <article className="featured-card" key={item.caseId}>
          <div className="featured-card__eyebrow">
            <span>{item.label}</span><span className="eyebrow">{item.axis}</span>
          </div>
          <p className="featured-card__signal">{item.headline}</p>
          <h3>{item.title}</h3>
          <p className="featured-card__description">{item.description}</p>
          <a id={`featured-${item.caseId}`} href={`#/project/${item.project.slug}/${item.caseId}`} className="featured-card__link">
            <span><span className="featured-card__number">0{index + 1}</span>조사와 판단 읽기<span className="sr-only">: {item.title}</span></span>
            <span aria-hidden="true">↗</span>
          </a>
          <span className="featured-card__project">{item.project.shortName}</span>
        </article>
      ))}
    </div>
  )
}
