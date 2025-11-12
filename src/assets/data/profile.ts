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
      '문항은행/평가 도메인 3년+ 백엔드 경험. Java 17 + Spring Boot, PostgreSQL 중심으로 설계/구현/운영.',
      '레거시 → 모던화: MyBatis + eGovFrame 기반 시스템을 점진 개선, JWT 인증·Redis 캐시·Docker 배포 표준화.',
      'MSA 전환 대비 토큰 검증 구조(JWT)와 메시징(Kafka/RabbitMQ) 도입 검토·운영 경험.',
    ],
  },
  education: [
    {
      school: '계명대학교',
      major: '문헌정보학 학사',
      period: '2015.03~2021.02',
      note: '정보 구조화/분류 이론을 서비스 설계와 데이터 모델링에 접목',
    },
  ],
  projects: [
    {
      name: '문항관리/문제은행 백엔드(NeoTest-Plus Type2, 가칭)',
      role: 'Backend Lead',
      period: '2024.01~2025.08',
      tech: [
        'Java 17',
        'Spring Boot 2.7',
        'MyBatis',
        'PostgreSQL',
        'Redis',
        'JWT',
        'Gradle',
        'Docker',
        'GitLab CI',
        'SonarQube',
        'Snyk',
      ],
      summary:
        '지문·문항(선택형/단답/서술/드래그/매칭) 관리, 일괄등록/이동, 난이도 변경, 패키징 등 핵심 API와 DDL 설계/구현.',
      contributions: [
        '문항 핵심 테이블 설계 및 FK 정합성 검증, 시퀀스/인덱스 튜닝',
        'JWT 기반 인증/인가 및 공통 필터 도입, Swagger 문서화, PageHelper 페이징',
        'Redis 캐시 유틸과 Caffeine 보조로 읽기 부하 완화, 다건 조회 응답 TTFB 개선',
        '레거시 JSON(QHT/QHS/QDT/QDI 등) → v2 단일 아이템 스키마 컨버터 설계',
      ],
      outcomes: [
        '목록 조회 P95 응답시간 약 35% 단축',
        '패키징 처리 안정성 향상(재시도/트랜잭션 경계 정리)으로 오류 재현율 감소',
      ],
      links: [{ title: 'Swagger 문서(내부)', url: '#' }],
    },
    {
      name: 'Chrome 확장: 집중 웹 차단',
      role: 'Developer',
      period: '2025.01~2025.02',
      tech: ['TypeScript', 'Chrome Extensions', 'Vite'],
      summary: '설정 시간 동안 특정 사이트 차단 또는 화이트리스트 외 전면 차단.',
      contributions: [
        '옵션 페이지/백그라운드 스크립트/스토리지 스키마 설계',
        'tsconfig 세분화 및 번들 최적화',
      ],
      outcomes: ['집중 시간 동안 SNS 체류시간 유의미 감소(자가 리포트)'],
    },
  ],
  skills: [
    {
      category: 'Backend',
      items: ['Java 17', 'Spring Boot', 'MyBatis', 'JPA(기초)', 'REST API', 'Swagger/OpenAPI'],
    },
    { category: 'DB/Cache', items: ['PostgreSQL', 'Query Tuning', 'Redis', 'Caffeine'] },
    { category: 'Messaging', items: ['Kafka(검토/PoC)', 'RabbitMQ(운영 경험)'] },
    { category: 'DevOps', items: ['Docker', 'GitLab CI/CD', 'Gradle', 'SonarQube', 'Snyk'] },
    { category: 'Cloud/Etc', items: ['Linux', 'Nginx', 'AWS(기초)', 'Git', 'Jira/Slack'] },
  ],
  career: [
    {
      company: '㈜ 퓨쳐누리 · 개발9팀',
      teamRole: 'Backend Engineer(정규)',
      period: '2021.10~2024.09',
      stacks: ['Java', 'Spring', 'PostgreSQL', 'Redis', 'Docker'],
      highlights: [
        '공공의료 평가 시스템 대량 업로드 시 풀스로틀/지연 이슈 근본 해결',
        'PK 생성 로직 MAX+1 → Sequence 전환으로 동시성 병목·충돌 제거',
        '문항은행 도메인 모델 수립(지문-문항-시험지, 일괄 이동/난이도 변경 등)',
      ],
    },
    {
      company: '한국교육과정평가원 AI 기반 학력진단(프리랜서)',
      teamRole: 'Backend Engineer(계약)',
      period: '2025.07~현재',
      stacks: ['Java', 'Spring', 'PostgreSQL', 'RabbitMQ/Kafka', 'Docker'],
      highlights: [
        '서비스 간 결합도 완화 위해 MQ 도입(Kafka vs RabbitMQ 비교·적용)',
        'TTL/큐 사이즈/prefetch 튜닝으로 지연·타임아웃 안정화',
        '이벤트 기반 처리로 확장성·자원 효율 개선',
      ],
    },
  ],
  contact: {
    email: 'jdnam1996@gmail.com',
    github: 'https://github.com/jungducknam',
    blog: 'https://jungducknam.github.io',
  },
}
