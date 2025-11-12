export interface Education {
  school: string
  major: string
  period: string
  note?: string
}

export interface Project {
  name: string
  role: string
  period: string
  tech: string[]
  summary: string
  contributions: string[]
  outcomes: string[]
  links?: { title: string; url: string }[]
}

export interface Career {
  company: string
  teamRole: string
  period: string
  stacks: string[]
  highlights: string[]
}

export interface SkillCategory {
  category: string
  items: string[]
}

export interface ProfileData {
  hero: {
    name: string
    title: string
    summary: string[]
  }
  education: Education[]
  projects: Project[]
  skills: SkillCategory[]
  career: Career[]
  contact?: { email?: string; github?: string; blog?: string }
}

export const profile: ProfileData = {
  hero: {
    name: '남정덕',
    title: 'Backend Engineer (Java/Spring)',
    summary: [
      '',
      'EduTech 3년+ 백엔드 경험. 안정적인 서비스 설계와 기능 우선 개발 후 리팩토링의 반복 지향.',
      '문헌정보학과를 전공하며 데이터를 저장 및 가공하는 것에 흥미를 느꼈으며, 이는 백엔드 개발자가 되는 계기가 되었습니다.',
      '항상 최고의 코드를 만들기 보다, 주어진 환경 내에서 최선의 방법으로 목표한 기능을 개발하는것이 중요하다고 생각합니다.',
      '18개 기관의 유지보수를 담당하며, 고객의 요구사항을 정확히 이해하고 설명할 수 있는 능력을 배웠습니다.',
    ],
  },
  education: [
    {
      school: '계명대학교',
      major: '문헌정보학 학사',
      period: '2015.03 ~ 2021.02',
      note: '정보 구조화/분류 이론을 서비스 설계와 데이터 모델링에 접목',
    },
  ],
  career: [
    {
      company: '㈜ 퓨쳐누리 · 개발9팀 · 대리',
      teamRole: 'Backend Engineer(정규)',
      period: '2021.10~2024.09',
      stacks: ['Java', 'Spring', 'PostgreSQL', 'Redis', 'Docker'],
      highlights: [
        '공공의료 평가 시스템 대량 업로드 시 풀스로틀/지연 이슈 근본 해결',
        'PK 생성 로직 MAX+1 → Sequence 전환으로 동시성 병목·충돌 제거',
        '문항은행 도메인 모델 수립(지문-문항-시험지, 일괄 이동/난이도 변경 등)',
        '18개 기관의 문제은행 솔루션 유지보수 및 운영지원',
      ],
    },
    {
      company: '한국교육과정평가원 AI 기반 학력진단 구축 사업 · 프리랜서',
      teamRole: 'Backend Engineer(계약)',
      period: '2025.07~현재',
      stacks: ['Java', 'Spring', 'PostgreSQL', 'Kafka', 'Docker'],
      highlights: [
        '서비스 간 결합도 완화 위해 MQ 도입(Kafka vs RabbitMQ 비교·적용)',
        '모듈화된 DB와 코드 설계로 다양한 요구에 대응',
        '이벤트 기반 처리로 확장성·자원 효율 개선',
      ],
    },
  ],
  projects: [
    {
      name: '한국교육과정평가원 학력진단 시스템 구축',
      role: 'Backend',
      period: '2025.07 ~ ',
      tech: [
        'Java 17',
        'Spring Boot',
        'MyBatis',
        'PostgreSQL',
        'Spring Batch',
        'Redis',
        'Kafka',
        'MSA',
        'Next.js',
        'Docker',
      ],
      summary:
        '문항(선택형/단답/서술 등 14개 유형) 생성 및 관리, 일괄등록/이동, 시험지 패키징, 채점 등 학력진단 시스템의 핵심 API와 DDL 설계/구축',
      contributions: [
        '문항 마이크로서비스 설계 구축, 사용자 답안 저장 및 채점, 검증 기능 구축',
        'JWT 기반 인증/인가 및 공통 필터 도입, Swagger 문서화 작업',
        'Redis 캐시 사용으로 읽기 부하 완화, 다건 조회 응답 TTFB 개선',
        'Kafka를 통한 메시징 큐 도입으로 비동기적 작업 처리와 장애 전파 최소화',
        'Spring Batch를 통한 Bulk Insert 및 스케줄 작업, 오류 건 별도 처리 기능 구축',
        '공공 데이터베이스 표준화 관리 지침에 맞춰 기존 솔루션 DDL 재설계 참여',
      ],
      outcomes: [
        '유연한 구조 설계로 인한 새로운 기획 요구에 빠르게 대응하여 진척률 타인 대비 10% 향상',
        '패키징 처리 안정성 향상(재시도/트랜잭션 경계 정리)으로 오류 재현율 감소',
        '비동기 작업 & 스케줄링 도입으로 과부하 작업 분산 효과'
      ],
    },
    {
      name: 'NeoTest Cloud Native (NTCN) Saas 전환 프로젝트',
      role: 'Full Stack',
      period: '2024.02 ~ 2024.09',
      tech: [
        'Java 11',
        'Spring Boot',
        'MyBatis',
        'PostgreSQL',
        'Redis',
        'MSA',
        'Docker',
        'k8s',
        'JavaScript',
        'JSP',
        'JQuery',
      ],
      summary:
        '기존 On-Premises 방식의 솔루션을 Cloud Native한 Saas로 재구축',
      contributions: [
        '문항 마이크로서비스의 문항 CRUD 및 시험지 CRUD API 구축',
        '문항 및 시험지 관리 화면 구축',
        'Cloud 배포 전략 및 Scale-out 전략 구축',
        '구축 후 실제 서비스 운영 및 유지보수 경험',
      ],
      outcomes: [
        'On-Premises의 솔루션을 Cloud Native로 전환 시킨 사내 첫 사례',
        '클라우드 자원 활용을 통한 유연한 부하 대처로 peak시 기존 대비 지연율 20% 감소',
      ],
    },
    {
      name: 'Chrome 확장 앱 : 뽀모도로 타이머',
      role: 'Full Stack',
      period: '2025.01 ~ 2025.02',
      tech: ['TypeScript', 'Chrome Extensions', 'Vite'],
      summary: '설정 시간 동안 특정 사이트 차단 또는 화이트리스트 외 전면 차단',
      contributions: [
        '옵션 페이지, 백그라운드 스크립트 및 스토리지 스키마 설계',
        'tsconfig 세분화 및 번들 최적화',
      ],
      outcomes: ['집중 시간 동안 SNS 체류시간 감소 (Apple 스크린타임 데이터 기준)'],
      links: [{ title: 'Keep Your Focus (link)', url: 'https://chromewebstore.google.com/detail/keep-your-focus/oijcceoleoibbniknolbkhcocggnckgp' }],
    },
  ],
  skills: [
    {
      category: 'Backend',
      items: ['Java', 'Kotlin', 'Python', 'Spring Boot', 'MyBatis', 'JPA', 'Kafka', ],
    },
    {
      category: 'Frontend',
      items: ['JavaScript', 'React', 'Next.js', 'JSP', 'JQuery'],
    },
    { category: 'DB/Cache', items: ['PostgreSQL', 'SQL Server', 'Oracle', 'Redis', 'Spring Batch'] },
    { category: 'DevOps', items: ['Docker', 'Github Actions', 'Gradle', 'SonarQube', 'k8s'] },
    { category: 'Cloud/Etc', items: ['OCI', 'Naver Cloud', 'AWS', 'Linux', 'Git', 'Swagger/OpenAPI', 'Jira/Slack'] },
  ],
  contact: {
    email: 'jdnam1996@gmail.com',
    github: 'https://github.com/jungducknam',
    blog: 'https://clsrn4561.tistory.com',
  },
}
