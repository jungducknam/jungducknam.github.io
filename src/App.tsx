import { useEffect, useState } from 'react'
import Nav from './components/Nav'
import Section from './components/Section'
import Timeline from './components/Timeline'
import ProjectCard from './components/ProjectCard'
import ProjectDetail from './components/ProjectDetail'
import FeaturedCases from './components/FeaturedCases'
import SkillsGrid from './components/SkillsGrid'
import ExplorationCard from './components/ExplorationCard'
import usePortfolioNavigation from './hooks/usePortfolioNavigation'
import { profile } from './assets/data/profile'
import './App.css'

function App() {
  const [theme, setTheme] = useState(() => {
    try { return localStorage.getItem('theme') === 'light' ? 'light' : 'dark' }
    catch { return 'dark' }
  })
  const { route, backHref } = usePortfolioNavigation()
  const projects = [...profile.projects, ...profile.explorations, profile.sideProject]
  const activeProject = route ? projects.find((project) => project.slug === route.slug) : undefined

  useEffect(() => {
    document.body.classList.remove('light', 'dark')
    document.body.classList.add(theme)
    try { localStorage.setItem('theme', theme) } catch { /* The theme still works without storage. */ }
  }, [theme])

  useEffect(() => {
    const activeCase = activeProject?.cases.find((item) => item.id === route?.section)
    document.title = activeProject
      ? `${activeCase?.title || activeProject.name} | 남정덕 · Backend Engineer`
      : '남정덕 | Java·Spring Backend Engineer'
  }, [activeProject, route?.section])

  const themeButton = (
    <button
      type="button"
      onClick={() => setTheme((value) => value === 'dark' ? 'light' : 'dark')}
      className="theme-toggle-button"
      aria-label={theme === 'dark' ? '라이트 테마로 전환' : '다크 테마로 전환'}
      title={theme === 'dark' ? 'Switch to light' : 'Switch to dark'}
    >
      <svg key={theme} className="theme-toggle-icon" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.65" strokeLinecap="round" strokeLinejoin="round">
        {theme === 'dark' ? (
          <><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.93 4.93l1.42 1.42M17.65 17.65l1.42 1.42M19.07 4.93l-1.42 1.42M6.35 17.65l-1.42 1.42" /></>
        ) : (
          <path d="M20.5 13.3A8.7 8.7 0 0 1 10.7 3.5a8.7 8.7 0 1 0 9.8 9.8Z" />
        )}
      </svg>
    </button>
  )

  return (
    <div className="app-shell">
      <a className="skip-link" href={route ? `#/project/${route.slug}/project-overview` : '#main-content'}>본문으로 건너뛰기</a>
      <Nav detail={!!route} backHref={backHref} themeButton={themeButton} />
      <main id="main-content" tabIndex={-1} className={`portfolio-container${route ? ' portfolio-container--detail' : ''}`}>
        {route ? (
          activeProject ? (
            <ProjectDetail project={activeProject} section={route.section} backHref={backHref} />
          ) : (
            <section className="not-found">
              <p className="eyebrow">PAGE NOT FOUND</p>
              <h1>프로젝트를 찾을 수 없습니다.</h1>
              <p>프로젝트 목록에서 사례를 다시 선택해 주세요.</p>
              <a className="button" href="#projects">프로젝트 목록으로</a>
            </section>
          )
        ) : (
          <>
            <section id="profile" className="section hero-section" tabIndex={-1} aria-labelledby="profile-title">
              <div className="hero">
                <div className="hero__content">
                  <p className="hero__identity"><strong>{profile.hero.name}</strong><span>{profile.hero.title}</span></p>
                  <h1 id="profile-title" className="hero__title">{profile.hero.headline}</h1>
                  <p className="hero__lead">{profile.hero.summary}</p>
                  <div className="hero__cta">
                    <a className="button" href="#cases">대표 문제 해결 사례 <span aria-hidden="true">↓</span></a>
                    <a className="button button--ghost" href="#projects">프로젝트 살펴보기</a>
                  </div>
                </div>
                <div className="hero__media">
                  <img src={`${import.meta.env.BASE_URL}jdnam4.jpg`} alt="남정덕" className="hero__photo" width="180" height="240" fetchPriority="high" />
                </div>
              </div>
              <p className="hero__footnote">문항 저작부터 시험지·응시·채점까지, 데이터가 흐르는 전 과정을 다뤘습니다.</p>
            </section>

            <Section id="cases" title="문제를 해결한 세 가지 방식" subtitle="Selected engineering cases" intro="무엇을 관측했고, 왜 그 방법을 선택했는지 소개합니다.">
              <FeaturedCases />
            </Section>

            <Section id="career" title="운영에서 배운 기준을 개발에 담다" subtitle="Career" intro="데이터 복구로 도메인을 익히고, API 전환을 거쳐 정확성과 운영 안전성을 개발 단계에서 다루고 있습니다.">
              <Timeline items={profile.career} variant="career" />
            </Section>

            <Section id="projects" title="프로젝트와 담당 범위" subtitle="Projects" intro="전체 시스템의 맥락과 제가 직접 수행한 일을 나누어 정리했습니다.">
              <div className="projects-grid">
                {profile.projects.map((project) => <ProjectCard key={project.slug} project={project} />)}
              </div>
            </Section>

            <Section id="lab" title="관심을 실제로 동작하는 제품으로" subtitle="Independent projects · AI & interactive systems" intro="업무 밖에서는 로컬 AI와 실시간 게임을 만듭니다. 낯선 도메인에서도 현상을 관측하고, 계약과 검증 기준을 세우며 구현을 이어갑니다.">
              <div className="explorations-grid">
                {profile.explorations.map((project) => <ExplorationCard key={project.slug} project={project} />)}
              </div>
            </Section>

            <Section id="skills" title="기술을 사용한 맥락" subtitle="Technical skills">
              <SkillsGrid categories={profile.skills} />
            </Section>

            <Section id="more" title="그 밖의 경험" subtitle="Beyond backend">
              <div className="more-grid">
                <article id="project-keep-your-focus" tabIndex={-1} className="side-project">
                  <p className="eyebrow">SIDE PROJECT · {profile.sideProject.period}</p>
                  <h3>{profile.sideProject.name}</h3>
                  <p>{profile.sideProject.summary}</p>
                  <a id="side-project-link" href="#/project/keep-your-focus">개인 프로젝트 보기 <span aria-hidden="true">↗</span></a>
                </article>
                <div className="education">
                  <p className="eyebrow">EDUCATION</p>
                  <Timeline items={profile.education} />
                </div>
              </div>
            </Section>

            <Section id="contact" title="함께 일할 기회를 기다립니다" subtitle="Contact" intro="Java/Spring 백엔드에서 데이터와 운영의 정확성을 함께 고민하고 싶습니다.">
              <ul className="contact-list">
                <li><span>이메일</span><a href={`mailto:${profile.contact.email}`}>{profile.contact.email}</a></li>
                <li><span>GitHub</span><a href={profile.contact.github} target="_blank" rel="noreferrer noopener">jungducknam <span aria-hidden="true">↗</span></a></li>
                <li><span>기술 블로그</span><a href={profile.contact.blog} target="_blank" rel="noreferrer noopener">개발 기록 <span aria-hidden="true">↗</span></a></li>
              </ul>
            </Section>
          </>
        )}
      </main>
      <footer className="site-footer">남정덕 · Backend Engineer<span>경력 내용 기준 2026.09</span></footer>
    </div>
  )
}

export default App
