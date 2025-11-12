import { useMemo } from 'react'

interface NavItem {
  id: string
  label: string
}

interface NavProps {
  items: NavItem[]
}

const Nav = ({ items }: NavProps) => {
  const safeItems = useMemo(() => (items.length > 0 ? items : [{ id: 'profile', label: 'Profile' }]), [items])

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
        {safeItems.map((item) => (
          <li key={item.id}>
            <button type="button" onClick={() => handleClick(item.id)} className="anchor-nav__link">
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Nav
