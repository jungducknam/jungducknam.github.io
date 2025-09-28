import { useState, useEffect, useLayoutEffect } from 'react';
import gsap from 'gsap';
import './App.css';

// 기술 스택 데이터
const skillsData = {
  backend: [
    { name: 'Java', level: 'proficient' },
    { name: 'Python', level: 'experienced' },
    { name: 'Kotlin', level: 'familiar' },
    { name: 'Spring Boot', level: 'proficient' },
    { name: 'Node.js', level: 'familiar' },
    { name: 'Kafka', level: 'familiar' },
  ],
  frontend: [
    { name: 'React', level: 'experienced' },
    { name: 'TypeScript', level: 'experienced' },
    { name: 'JavaScript', level: 'proficient' },
    { name: 'JQuery', level: 'proficient' },
    { name: 'JSP', level: 'proficient' },
    { name: 'HTML/CSS', level: 'proficient' },
  ],
  database: [
    { name: 'PostgreSQL', level: 'proficient' },
    { name: 'SQL server', level: 'proficient' },
    { name: 'MySQL', level: 'experienced' },
    { name: 'ORACLE', level: 'experienced' },
    { name: 'Redis', level: 'experienced' },
  ],
  devops: [
    { name: 'Cloud (NAVER, OCI, AWS, etc.)', level: 'experienced' },
    { name: 'Docker', level: 'proficient' },
    { name: 'Kubernetes', level: 'experienced' },
    { name: 'Git', level: 'proficient' },
    { name: 'GitHub Actions', level: 'experienced' },
    { name: 'JUnit', level: 'experienced' },
  ],
};

// 스킬 레벨 설명
const skillLevels = {
  proficient: {
    title: 'Proficient (능숙)',
    description: '주력 기술로, 깊이 있는 이해를 바탕으로 대부분의 문제를 해결할 수 있으며, 최적화 및 트러블슈팅에 익숙합니다.',
  },
  experienced: {
    title: 'Experienced (경험)',
    description: '실무 프로젝트에서 여러 번 사용해 본 경험이 있으며, 독립적으로 기능을 개발하고 문제를 해결할 수 있습니다.',
  },
  familiar: {
    title: 'Familiar (이해)',
    description: '개인 프로젝트나 학습을 통해 사용해 본 경험이 있으며, 기본적인 개념을 이해하고 문서를 참고하여 활용할 수 있습니다.',
  },
};

function App() {
  // 테마 상태 관리
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light';
  });

  // 테마 변경 함수
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  // 테마 적용 및 저장
  useEffect(() => {
    document.body.className = '';
    document.body.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  // GSAP 애니메이션
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.intro-section', {
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: 'power3.out'
      });
      gsap.from('.skills-section', {
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: 'power3.out',
        delay: 0.2
      });
      gsap.from('.skill-legend-section', {
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: 'power3.out',
        delay: 0.4
      });
    });
    return () => ctx.revert(); // cleanup
  }, []);

  return (
    <div className="portfolio-container">
      {/* 소개 섹션 */}
      <section className="intro-section">
        <h1>상황에 따라 최선의 시스템을 제공하는 개발자. 남정덕입니다.</h1>
        <p>
          복잡한 문제를 해결하고 효율적인 시스템을 만드는 것을 즐기는 백엔드 개발자입니다. 
          주어진 상황에서 최선의 아키텍쳐와 서비스를 제공하기 위해 노력하고 있습니다.
          사용자에게 더 나은 경험을 제공하기 위해 프론트엔드 기술에도 꾸준히 관심을 가지고 학습하며, 풀스택 개발 역량을 키워나가고 있습니다.
        </p>
      </section>

      {/* 기술 스택 섹션 */}
      <section className="skills-section">
        <h2>기술 스택</h2>
        <div className="skills-grid">
          {(Object.keys(skillsData) as Array<keyof typeof skillsData>).map((category) => (
            <div key={category} className="skill-category">
              <h3>{category.charAt(0).toUpperCase() + category.slice(1)}</h3>
              <ul>
                {skillsData[category].map((skill) => (
                  <li key={skill.name}>
                    {skill.name}
                    <span className={`skill-level-dot ${skill.level}`}></span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* 스킬 수준 설명 섹션 */}
      <section className="skill-legend-section">
        <h3>스킬 수준 설명</h3>
        <div className="legend-grid">
          {(Object.keys(skillLevels) as Array<keyof typeof skillLevels>).map((level) => (
            <div key={level} className="legend-item">
              <h4>
                <span className={`skill-level-dot ${level}`}></span>
                {skillLevels[level].title}
              </h4>
              <p>{skillLevels[level].description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 다크 모드 전환 플로팅 버튼 */}
      <button onClick={toggleTheme} className="theme-toggle-button">
        {theme === 'light' ? '🌙' : '☀️'}
      </button>
    </div>
  );
}

export default App; 