import { useEffect, useState } from 'react'
import Nav from './components/Nav'
import Section from './components/Section'
import Timeline from './components/Timeline'
import ProjectCard from './components/ProjectCard'
import ProjectDetail from './components/ProjectDetail'
import SkillsGrid from './components/SkillsGrid'
import { profile } from './assets/data/profile'
import './App.css'

const PROJECT_HASH_PREFIX = '#/project/'

function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark')
  const [hash, setHash] = useState(() => window.location.hash)

  useEffect(() => {
    document.body.classList.remove('light', 'dark')
    document.body.classList.add(theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  useEffect(() => {
    const onHashChange = () => setHash(window.location.hash)
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))
  }

  const activeSlug = hash.startsWith(PROJECT_HASH_PREFIX)
    ? hash.slice(PROJECT_HASH_PREFIX.length)
    : null
  const activeProject = activeSlug
    ? profile.projects.find((project) => project.slug === activeSlug) ?? null
    : null

  const goBack = () => {
    window.location.hash = ''
  }

  const themeButton = (
    <button type="button" onClick={toggleTheme} className="theme-toggle-button" aria-label="테마 전환">
      {theme === 'light' ? '🌙' : '☀️'}
    </button>
  )

  if (activeProject) {
    return (
      <div className="app-shell">
        <main className="portfolio-container portfolio-container--detail" role="main">
          <ProjectDetail project={activeProject} onBack={goBack} />
        </main>
        {themeButton}
      </div>
    )
  }

  const [heroIntro, ...heroDetails] = profile.hero.summary
  const heroSummaryLines = heroDetails.length > 0 ? heroDetails : profile.hero.summary
  const heroLead = heroSummaryLines[0] || heroIntro
  const heroBulletLines = heroSummaryLines.length > 1 ? heroSummaryLines.slice(1) : []

  const navItems = [
    { id: 'profile', label: 'Profile' },
    { id: 'education', label: 'Education' },
    { id: 'career', label: 'Career' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    ...(profile.contact ? [{ id: 'contact', label: 'Contact' }] : []),
  ]

  const educationItems = profile.education.map((edu) => ({
    period: edu.period,
    title: edu.school,
    subtitle: edu.major,
    points: edu.note ? [edu.note] : undefined,
  }))

  const careerItems = profile.career.map((job) => ({
    period: job.period,
    title: job.company,
    subtitle: job.teamRole,
    points: [...job.highlights, `Stacks: ${job.stacks.join(', ')}`],
  }))

  return (
    <div className="app-shell">
      <Nav items={navItems} />
      <main className="portfolio-container" role="main">
        <Section
          id="profile"
          title={profile.hero.name}
          subtitle={profile.hero.title}
          intro={heroIntro}
          renderLayout={({ header, body }) => (
            <div className="hero">
              <div className="hero__media">
                <img src="/jdnam4.jpg" alt="남정덕 프로필 사진" className="hero__photo" loading="lazy" />
              </div>
              <div className="hero__content">
                {header}
                {body}
              </div>
            </div>
          )}
        >
          <div className="hero__details">
            {heroLead && <p className="hero__lead">{heroLead}</p>}
            {heroBulletLines.length > 0 && (
              <ul className="hero__summary">
                {heroBulletLines.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            )}
          </div>
        </Section>

        <Section id="education" title="Education" subtitle="구조화 사고의 기반">
          <Timeline items={educationItems} variant="education" />
        </Section>
        
        <Section id="career" title="Career" subtitle="실제 문제를 해결한 경험" intro="서비스 성장을 뒷받침한 하이라이트">
          <Timeline items={careerItems} variant="career" />
        </Section>

        <Section id="projects" title="Projects" subtitle="도메인 임팩트를 만든 핵심 작업" intro="운영 중인 평가/문항 시스템과 실험적 사이드 프로젝트를 함께 정리했습니다.">
          <div className="projects-grid">
            {profile.projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </Section>

        <Section id="skills" title="Skills" subtitle="핵심 역량" intro="백엔드 중심 스택과 운영 도구 경험">
          <SkillsGrid categories={profile.skills} />
        </Section>

        {profile.contact && (
          <Section id="contact" title="Contact" subtitle="함께 문제를 풀어보고 싶다면 ">
            <ul className="contact-list">
              {profile.contact.email && (
                <li>
                  <span>이메일</span>
                  <a href={`mailto:${profile.contact.email}`}>{profile.contact.email}</a>
                </li>
              )}
              {profile.contact.github && (
                <li>
                  <span>GitHub</span>
                  <a href={profile.contact.github} target="_blank" rel="noreferrer noopener">
                    {profile.contact.github}
                  </a>
                </li>
              )}
              {profile.contact.blog && (
                <li>
                  <span>Blog</span>
                  <a href={profile.contact.blog} target="_blank" rel="noreferrer noopener">
                    {profile.contact.blog}
                  </a>
                </li>
              )}
            </ul>
          </Section>
        )}
      </main>

      {themeButton}
    </div>
  )
}

export default App
