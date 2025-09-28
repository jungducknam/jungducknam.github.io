import { useState, useEffect } from 'react';
import './App.css';

// 기술 스택 데이터
const skillsData = {
  backend: [
    { name: 'Java', level: 'proficient' },
    { name: 'Spring Boot', level: 'proficient' },
    { name: 'Python', level: 'experienced' },
    { name: 'Node.js', level: 'experienced' },
  ],
  frontend: [
    { name: 'React', level: 'experienced' },
    { name: 'TypeScript', level: 'experienced' },
    { name: 'JavaScript', level: 'proficient' },
    { name: 'HTML/CSS', level: 'proficient' },
  ],
  database: [
    { name: 'PostgreSQL', level: 'proficient' },
    { name: 'MySQL', level: 'experienced' },
    { name: 'Redis', level: 'familiar' },
  ],
  devops: [
    { name: 'Docker', level: 'experienced' },
    { name: 'AWS (EC2, S3, RDS)', level: 'experienced' },
    { name: 'Git', level: 'proficient' },
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
  // 1. 테마 상태 관리 (localStorage에서 초기값 가져오기)
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light';
  });

  // 2. 테마 변경 함수
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  // 3. 테마가 변경될 때마다 <body> 태그의 클래스를 업데이트하고 localStorage에 저장
  useEffect(() => {
    document.body.className = ''; // 기존 클래스 초기화
    document.body.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <div className="portfolio-container">
      {/* 소개 섹션 */}
      <section className="intro-section">
        <h1>안녕하세요, Jungduck Nam입니다.</h1>
        <p>
          복잡한 문제를 해결하고 효율적인 시스템을 만드는 것을 즐기는 백엔드 개발자입니다. 
          견고한 서버 아키텍처 설계와 데이터 처리에 강점을 가지고 있습니다. 
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

      {/* 4. 다크 모드 전환 플로팅 버튼 */}
      <button onClick={toggleTheme} className="theme-toggle-button">
        {theme === 'light' ? '🌙' : '☀️'}
      </button>
    </div>
  );
}

export default App;
