import type { SkillCategory } from '../assets/data/profile'

export default function SkillsGrid({ categories }: { categories: SkillCategory[] }) {
  return (
    <div className="skills-grid">
      {categories.map((category, index) => (
        <article key={category.category} className="skills-grid__card">
          <h3>{category.category}</h3>
          <div className="skills-grid__items">
            {category.items.map((item) => <span key={item} className="chip chip--ghost">{item}</span>)}
          </div>
          <p>{category.context}</p>
          <a id={`skill-case-${index}`} href={category.href}>관련 사례 <span className="sr-only">: {category.category}</span><span aria-hidden="true">↗</span></a>
        </article>
      ))}
    </div>
  )
}
