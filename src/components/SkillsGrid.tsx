interface SkillCategory {
  category: string
  items: string[]
}

interface SkillsGridProps {
  categories: SkillCategory[]
}

const SkillsGrid = ({ categories }: SkillsGridProps) => {
  return (
    <div className="skills-grid">
      {categories.map((category) => (
        <article key={category.category} className="skills-grid__card">
          <h3>{category.category}</h3>
          <div className="skills-grid__items">
            {category.items.map((item) => (
              <span key={`${category.category}-${item}`} className="chip chip--ghost">
                {item}
              </span>
            ))}
          </div>
        </article>
      ))}
    </div>
  )
}

export default SkillsGrid
