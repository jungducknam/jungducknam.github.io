import { kice } from './kice'
import { futurenuri } from './futurenuri'
import { ntcn } from './ntcn'
import { charanest } from './charanest'
import { kracing } from './kracing'
import type { Project, SkillCategory } from './types'
export type { Project, SkillCategory } from './types'

const sideProject: Project = {
  slug: 'keep-your-focus',
  name: 'Keep Your Focus',
  shortName: 'Keep Your Focus',
  period: '2025.01~2025.02',
  role: '개인 프로젝트 · 기획·개발·배포',
  tech: ['TypeScript', 'Chrome Extensions (MV3)', 'Vite'],
  summary: '집중 타이머와 사이트 차단을 제공하는 Chrome 확장 앱을 만들어 스토어에 배포했습니다.',
  focus: '개인의 생산성 문제를 사용 가능한 제품으로',
  context: ['작업 중 주의가 분산되는 문제에서 출발한 개인 프로젝트입니다. 집중 시간을 설정하고 특정 사이트 또는 허용 목록 외 사이트를 차단할 수 있습니다.'],
  contributions: [
    { title: '브라우저 확장 앱 개발·배포', description: '옵션 화면과 사이트 차단·집중 타이머를 구성하고 Chrome Web Store에 배포했습니다.' },
  ],
  cases: [],
  links: [{ title: 'Chrome Web Store에서 보기', url: 'https://chromewebstore.google.com/detail/keep-your-focus/oijcceoleoibbniknolbkhcocggnckgp' }],
}

export const profile = {
  hero: {
    name: '남정덕',
    title: 'Backend Engineer · Java / Spring',
    headline: '정확한 데이터,\n안정적인 시험 흐름을 만듭니다.',
    summary: '문제은행·온라인 시험 시스템에서 API 계약, 이벤트 순서, DB 병목을 다룹니다. 로그·데이터·코드를 따라 원인을 좁히고, 변경 이후의 정합성까지 확인합니다.',
  },
  projects: [kice, futurenuri, ntcn],
  explorations: [charanest, kracing],
  sideProject,
  career: [
    {
      period: '2021.10~2024.09',
      title: '퓨쳐누리 · 운영에서 도메인을 익히다',
      subtitle: 'Java Backend Engineer · 2년 11개월',
      points: ['문제은행·온라인 시험·수련관리 운영에서 응시·답안·채점 관계를 추적하고, DB·서버·파일 장애를 분석·복구했습니다.'],
    },
    {
      period: '퓨쳐누리 재직 중 · 2023년 전환·안정화 기록',
      title: 'NTCN · API 경계에서 데이터 의미를 지키다',
      subtitle: '사내 최초 MSA 기반 클라우드 SaaS 전환 참여',
      points: ['QST 문항·시험지·검수 API 전환과 논리삭제·집계 범위·부모-자식 저장 정합성 안정화에 참여했습니다.'],
    },
    {
      period: '2025.07~현재',
      title: 'KICE · 정확성과 운영 안전성을 개발 단계로',
      subtitle: 'Backend Engineer · 프리랜서',
      points: ['문항 저작부터 시험지·응시·채점까지 직접 개발하며 저장 계약, 이벤트 순서와 재채점의 보존 기준을 다룹니다.'],
    },
  ],
  education: [
    { period: '2015.03~2021.02', title: '계명대학교', subtitle: '문헌정보학 학사' },
  ],
  skills: [
    { category: '도메인과 API 구현', items: ['Java 17', 'Spring Boot', 'MyBatis', 'OpenFeign'], context: '다유형 문항 CRUD·레거시 변환, 시험지 생성·패키징, 기관별 Excel 저장 계약을 개발했습니다.', href: '#/project/kice/excel-contract' },
    { category: 'SQL과 데이터 정합성', items: ['PostgreSQL', 'MSSQL', 'Oracle', 'SQL'], context: '조회 조건과 대용량 테이블을 분석해 병목을 제거하고, 집계 단위·운영 데이터의 전후 결과를 검증했습니다.', href: '#/project/neotest-maintenance/database-bottleneck' },
    { category: '이벤트와 운영 신뢰성', items: ['Kafka', 'Redis', 'Tomcat', 'Docker'], context: '채점 순서 역전, 테넌트 캐시, 노드별 배포 편차를 추적하고 변경·복구 후 동작을 확인했습니다.', href: '#/project/kice/kafka-order' },
    { category: '검증과 서비스 연결', items: ['ArchUnit', 'Jasypt', 'JavaScript', 'TypeScript'], context: '계층 검사·설정 암호화를 적용하고, API·관리자 화면·Excel·채점 결과를 함께 대조했습니다.', href: '#/project/kice' },
  ] satisfies SkillCategory[],
  contact: {
    email: 'jdnam1996@gmail.com',
    github: 'https://github.com/jungducknam',
    blog: 'https://clsrn4561.tistory.com',
  },
}

export const featuredCases = [
  {
    project: futurenuri, caseId: 'database-bottleneck', axis: 'Performance',
    label: 'DB 병목 분석', headline: '93,051 → 382ms', title: '응답 없는 조회를 DB까지 추적',
    description: 'DB CPU 100%와 3,062만 건 테이블을 조사하고, JOIN 조건에 맞춘 복합 인덱스로 핵심 조회를 개선했습니다.',
  },
  {
    project: kice, caseId: 'kafka-order', axis: 'Reliability',
    label: '이벤트 순서', headline: '답안 저장 → 채점', title: '채점이 답안보다 먼저 끝난 이유',
    description: '서로 다른 Topic의 순서 역전을 분석하고, 동일 Topic·Key와 저장 후 발행을 제안해 구현·검증에 참여했습니다.',
  },
  {
    project: kice, caseId: 'excel-contract', axis: 'Correctness',
    label: 'API·데이터 계약', headline: '미입력 ≠ 삭제', title: 'Excel에 없는 데이터가 사라진 이유',
    description: '파싱·Feign·저장 흐름을 추적해 기존 자료가 지워지는 계약을 수정하고, 변경과 보존을 함께 검증했습니다.',
  },
] as const
