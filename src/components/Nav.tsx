import { useEffect, useState } from 'react'

const navItems = [
  { id: 'hero', label: 'Hero' },
  { id: 'education', label: 'Education' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'career', label: 'Career' },
]

const Nav = () => {
  const [activeId, setActiveId] = useState(navItems[0].id)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: '-40% 0px -40% 0px', threshold: 0.1 },
    )

    navItems.forEach((item) => {
      const section = document.getElementById(item.id)
      if (section) observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  const handleClick = (id: string) => {
    const target = document.getElementById(id)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <nav className="anchor-nav" aria-label="주요 섹션 이동">
      <div className="anchor-nav__brand">jungducknam.dev</div>
      <ul className="anchor-nav__list">
        {navItems.map((item) => (
          <li key={item.id}>
            <button
              type="button"
              onClick={() => handleClick(item.id)}
              className={`anchor-nav__link ${activeId === item.id ? 'is-active' : ''}`}
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Nav
