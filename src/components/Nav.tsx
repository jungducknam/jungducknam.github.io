import type { ReactNode } from 'react'

interface NavProps {
  detail: boolean
  backHref: string
  themeButton: ReactNode
}

const items = [
  { id: 'cases', label: 'Cases' },
  { id: 'career', label: 'Career' },
  { id: 'projects', label: 'Projects' },
  { id: 'lab', label: 'Lab' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
]

export default function Nav({ detail, backHref, themeButton }: NavProps) {
  return (
    <header className={`anchor-nav${detail ? ' anchor-nav--detail' : ''}`}>
      <div className="anchor-nav__inner">
        <a href="#profile" className="anchor-nav__brand">남정덕<span> / Backend</span></a>
        <nav className="anchor-nav__navigation" aria-label={detail ? '프로젝트 탐색' : '주요 섹션 이동'}>
          {detail ? <a className="anchor-nav__link" href={backHref}>← Back</a> : (
            <ul className="anchor-nav__list">
              {items.map((item) => <li key={item.id}><a className="anchor-nav__link" href={`#${item.id}`}>{item.label}</a></li>)}
            </ul>
          )}
        </nav>
        {themeButton}
      </div>
    </header>
  )
}
