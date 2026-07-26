export interface Education {
  school: string
  major: string
  period: string
  note?: string
}

export interface Challenge {
  title: string
  problem: string
  approach: string
  result: string
}

export interface DetailMetric {
  label: string
  value: string
  note?: string
}

export interface ArchitectureNode {
  label: string
  value: string
}

export interface ProjectDetail {
  tagline: string
  context: string[]
  responsibilities: string[]
  architecture?: {
    summary: string
    nodes: ArchitectureNode[]
  }
  challenges: Challenge[]
  metrics?: DetailMetric[]
  evidence?: string
}

export interface Project {
  slug: string
  name: string
  role: string
  period: string
  tech: string[]
  summary: string
  contributions: string[]
  outcomes: string[]
  links?: { title: string; url: string }[]
  detail?: ProjectDetail
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
      'EduTech 4년+ 백엔드 경험. 안정적인 서비스 설계와 기능 우선 개발 후 리팩토링의 반복 지향.',
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
      company: '한국교육과정평가원 AI 기반 학력진단 구축 사업 · 프리랜서',
      teamRole: 'Backend Engineer(계약)',
      period: '2025.08 ~ 현재',
      stacks: ['Java 17', 'Spring Boot', 'MyBatis', 'PostgreSQL', 'Kafka', 'Redis', 'Docker', 'MSA'],
      highlights: [
        '문항 유형별 저장 처리기·시험지 패키징·채점 파이프라인 개발',
        '메시지 브로커(Kafka·RabbitMQ) 비교 후 시험 종료 이벤트 채점에 Kafka 적용',
        '다중 테넌트(본원·기초학력·복수 시·도 교육청) 공통 흐름과 기관별 정책 분리',
        'ArchUnit·SpotBugs·Jacoco 기반 코드 품질 게이트 도입',
      ],
    },
    {
      company: '㈜ 퓨쳐누리 · 개발9팀 · 대리',
      teamRole: 'Backend Engineer(정규)',
      period: '2021.10 ~ 2024.09',
      stacks: ['Java', 'Spring', 'MyBatis', 'MSSQL', 'PostgreSQL', 'Redis', 'Docker'],
      highlights: [
        '공공의료 평가 시스템 대량 업로드 시 파일 뒤섞임·키 충돌 이슈 근본 해결',
        'PK 생성 로직 MAX+1 → Sequence 전환으로 동시성 병목·충돌 제거',
        '문항은행 도메인 모델 수립(지문-문항-시험지, 일괄 이동/난이도 변경 등)',
        '18개+ 공공·교육 기관 문제은행 솔루션 유지보수 및 운영 지원',
        '온프레미스 문제은행을 Cloud Native SaaS(MSA)로 전환하는 사내 첫 사례에 참여',
      ],
    },
  ],
  projects: [
    {
      slug: 'kice',
      name: '한국교육과정평가원 학력진단 시스템 구축',
      role: 'Backend',
      period: '2025.08 ~ 현재',
      tech: [
        'Java 17',
        'Spring Boot',
        'MyBatis',
        'PostgreSQL',
        'Redis',
        'Kafka',
        'MSA',
        'OpenFeign',
        'Docker',
      ],
      summary:
        '선택형·단답·서술·핫스팟·끌어넣기 등 다양한 문항 유형의 저장/관리, 일괄 등록·이동, 시험지 패키징, 자동·수동 채점을 담당하는 학력진단 백엔드. 문제은행·응시·채점 3개 서비스에 걸쳐 문항 도메인과 채점 파이프라인을 개발.',
      contributions: [
        '표준 코드로 정의된 문항 유형 중 서비스에 연결된 11개 유형의 공통 저장 흐름과 유형별 처리기 구현',
        '시험 종료 이벤트를 소비하는 Kafka 자동채점 컨슈머 구현, 수동채점 override·부분점수·재채점 연결',
        '다중 테넌트(본원·기초학력·시·도 교육청) 공통 도메인과 기관별 정책(문항번호 자리수·역할·분류) 분리',
        '문항 엑셀 일괄 업로드/다운로드, 자료·출처 배치 저장 및 실패 건 반환 처리',
        '이원분류표 CTE 쿼리 재구성, 문항 리스트 검색 쿼리 최적화',
        '문항 서비스 개발·검증 원칙을 가이드 문서로 정리(AI 코딩 에이전트 운영에 활용)',
        'Jasypt 설정 암호화·GlobalExceptionHandler 민감정보 마스킹, ArchUnit/SpotBugs/Jacoco 품질 게이트 도입',
      ],
      outcomes: [
        '유형이 계속 추가되어도 공통 저장 흐름이 흔들리지 않는 구조 확보',
        '자동+수동 혼합 채점과 정답 변경 시 재채점이 가능한 파이프라인 구축',
        '한 코드베이스로 복수 기관을 운영하되 특정 기관 정책 변경이 타 기관에 전파되지 않도록 경계 유지',
      ],
      detail: {
        tagline: '핵심 콘텐츠(문항)의 저장부터 채점·통계까지 정합성을 책임진 백엔드',
        context: [
          '전국 단위 학력진단을 위한 AI 기반 평가 시스템으로, 문제은행(출제)·응시(CBT)·시행/채점의 3개 백엔드 서비스로 구성됩니다. 저는 문항 도메인과 채점 파이프라인을 중심으로 세 서비스에 걸쳐 개발했습니다.',
          '문항은 단순한 텍스트가 아니라 지문·보기·정답·좌표·난이도·분류가 함께 묶인 자산이고, 저장 단계의 작은 오류가 시험지 구성·응시·채점·통계까지 연쇄적으로 번집니다. 그래서 기능마다 데이터의 상태 변화와 실패 정책을 먼저 정하고 구현했습니다.',
        ],
        responsibilities: [
          '문항 유형별 저장/조회/수정 API와 유형별 처리기(선택형·단답·서술·핫스팟·끌어넣기·짝연결·펼치기·그래프 등)',
          '시험지 패키징(온라인/오프라인 동시 생성, 멀티미디어 파일 핸들링)',
          '채점 파이프라인(자동채점 Kafka 컨슈머, 수동채점 override, 부분점수, 재채점)',
          '다중 테넌트 라우팅 위에서의 기관별 정책 분리',
          '코드 품질 자동화(네이버 코딩 컨벤션·ArchUnit·SpotBugs·Jacoco)와 보안 조치',
        ],
        architecture: {
          summary:
            'Java 17 / Spring Boot / MyBatis 공통 골격 위에서 문제은행·응시·채점을 서비스로 분리하고, 서비스 간에는 OpenFeign(동기)과 Kafka(비동기 이벤트)를 사용합니다. 요청 host 기반으로 테넌트를 결정해 테넌트별 스키마로 라우팅합니다.',
          nodes: [
            { label: '문제은행 서비스', value: '문항·시험지·출제계획·분류 관리 API' },
            { label: '응시 서비스', value: '응시 생명주기·답안 저장, 답안/종료 이벤트 발행' },
            { label: '채점 서비스', value: '시행계획·자동/수동 채점·재채점·결과' },
            { label: '비동기 채널', value: 'Kafka — 답안/시험종료 이벤트를 채점이 소비' },
            { label: '저장소', value: 'PostgreSQL(테넌트별 스키마 라우팅) + Redis' },
          ],
        },
        challenges: [
          {
            title: '유형이 계속 늘어나는 문항을 하나의 골격으로',
            problem:
              '문항 유형마다 정답·보기·좌표·드래그 슬롯 등 저장 구조가 다른데, 요구되는 유형이 개발 중에도 계속 추가됐습니다. 유형별로 저장 로직을 조건 분기로 쌓으면 유형 하나를 추가할 때마다 공통 흐름이 흔들릴 위험이 있었습니다.',
            approach:
              '공통 속성(문항 공통 테이블)과 유형별 상세를 분리하고, 공통 저장이 끝나면 유형별 처리기가 선택지·정답·좌표·드래그 정보를 이어서 저장하도록 구현했습니다. 레거시 포맷과 현재 포맷을 오가는 매핑 유틸도 함께 만들어, 기존 데이터와의 호환을 유지했습니다.',
            result:
              '서비스에 연결된 11개 유형을 같은 저장 흐름으로 처리하고, 새 유형을 붙일 때 공통 흐름은 건드리지 않아도 되는 구조를 확보했습니다.',
          },
          {
            title: '자동채점과 수동채점, 그리고 재채점',
            problem:
              '선택형은 자동채점이 가능하지만 서술형·부분점수는 사람이 개입해야 하고, 정답이 바뀌면 이미 채점된 건을 다시 채점해야 했습니다. 자동 결과와 수동 결과가 충돌하면 어느 쪽이 최종인지 규칙이 필요했습니다.',
            approach:
              '비동기 채널로는 RabbitMQ와 Kafka를 비교해, 처리 이력이 로그로 남고 컨슈머를 나중에 늘리기 쉬운 Kafka를 택했습니다. 시험 종료 이벤트를 Kafka 컨슈머로 소비해 1차 자동채점을 수행하고, 수동 점수가 들어오면 자동 결과를 덮어쓰도록(override) 순서를 고정했습니다. 부분점수를 반영하고, 재채점을 대비해 문항 점수를 별도 테이블에 합산해 두었습니다.',
            result:
              '자동+수동이 섞인 채점을 일관된 규칙으로 확정하고, 정답 변경 시 재채점이 가능한 파이프라인을 만들었습니다.',
          },
          {
            title: '한 코드베이스에서 여러 기관의 정책이 섞이지 않게',
            problem:
              '본원(학업성취도)·기초학력·복수 시·도 교육청이 같은 코드 위에서 각각 다른 문항번호 자리수, 역할 권한, 분류 기준을 씁니다. 정책이 섞이면 한 기관을 위한 변경이 다른 기관의 사고로 이어집니다.',
            approach:
              '요청 시점에 테넌트를 결정해 테넌트별 스키마로 라우팅하고, 모든 기관에 공통인 문항·시험지 흐름은 도메인에 두되 기관마다 달라지는 규칙(번호 정책·역할 제한·분류 매핑)은 분기 지점을 분리했습니다.',
            result:
              '한 코드베이스로 복수 기관을 운영하면서, 특정 기관의 정책 변경이 다른 기관으로 전파되지 않도록 경계를 유지했습니다.',
          },
          {
            title: '단답 채점의 오채점 줄이기',
            problem:
              '같은 정답인데도 수식 표기, 공백, 여러 입력 칸 때문에 오답으로 처리되는 경우가 있었습니다.',
            approach:
              '단답 정규화 규칙을 정리했습니다. 수식(분수 등) 표기를 정규화하고, 공백 구분자를 제거하며, 응시자 답안 슬롯 위치에 맞춰 채점하도록 보완했습니다.',
            result:
              '표기 차이로 인한 오채점을 줄이고, 채점 결과의 신뢰도를 높였습니다.',
          },
          {
            title: '오류 응답에 내부 정보가 새지 않게',
            problem:
              '과거 오류 응답에 SQL·스택트레이스 같은 내부 정보가 노출된 이력이 있었습니다. 운영에서 이런 노출은 곧 보안 사고입니다.',
            approach:
              '공통 예외 처리에서 응답을 정제(sanitize)하고, 설정값은 Jasypt로 암호화했으며, 신고된 취약점을 조치했습니다.',
            result:
              '운영 응답에 내부 정보가 노출되지 않도록 차단하고, 예외 로깅은 서버 로그로만 남도록 정리했습니다.',
          },
        ],
        metrics: [
          { label: '담당 백엔드 서비스', value: '3종', note: '문제은행·응시·채점' },
          { label: '구현한 활성 문항 유형', value: '11종', note: '표준 정의 기준 일부 연결' },
          { label: '개인 커밋(로컬 git)', value: '약 1,200건', note: '2025.08 ~ 진행 중' },
        ],
        evidence:
          '수치는 문제은행·응시·채점 로컬 git 저장소의 본인 계정 커밋 이력을 기준으로 합니다. 내부 스키마·테넌트 식별자·접속 정보 등 대외비는 표기에서 제외했습니다.',
      },
    },
    {
      slug: 'ntcn',
      name: 'NeoTest Cloud Native (NTCN) SaaS 전환',
      role: 'Full Stack',
      period: '2024.02 ~ 2024.09',
      tech: [
        'Java 11',
        'Spring Boot',
        'Spring Cloud',
        'MyBatis',
        'PostgreSQL',
        'Redis',
        'RabbitMQ',
        'MSA',
        'Docker',
        'Kubernetes',
      ],
      summary:
        '기관마다 수동 패치로 배포하던 온프레미스 문제은행 솔루션을 Spring Cloud 기반 MSA·컨테이너 SaaS로 재구축한 사내 첫 사례. 문제은행(ntcn-bank) 모듈을 담당.',
      contributions: [
        '기존 솔루션 유지보수 경험을 녹여 서비스 분리 설계 단계에 기여',
        '문제은행 마이크로서비스의 문항·시험지 CRUD API 구축',
        '문항·시험지 관리 화면 구축',
        '화면 이벤트별 담당 서비스·API 계약을 매핑 문서로 정리해 프론트/인프라와 공유',
        '구축 후 실제 서비스 운영·유지보수 참여',
      ],
      outcomes: [
        '온프레미스 솔루션을 Cloud Native로 전환한 사내 첫 사례',
        '외부 성능 시험에서 동시접속 1만 명·평균 4,500 TPS·응답 3초 기준 충족 확인(상세 결과 보고서는 대외비)',
      ],
      detail: {
        tagline: '기관별 수동 배포를 공통 플랫폼으로 — 사내 첫 Cloud Native 전환',
        context: [
          '기존 NeoTest는 기관마다 별도 서버에 수동으로 패치를 배포하는 온프레미스 솔루션이었습니다. 기관이 늘수록 배포·운영 비용이 커졌고, 공통 기능 하나를 고쳐도 기관마다 반영해야 했습니다.',
          '이를 Spring Cloud 기반 MSA로 재구축하는 전환 프로젝트였고, 저는 핵심 콘텐츠인 문항을 다루는 문제은행 모듈을 담당하며 백엔드·프론트·인프라 사이에서 기능이 실제 배포 환경까지 이어지도록 연결했습니다.',
        ],
        responsibilities: [
          '문제은행 서비스의 문항·시험지 CRUD API',
          '문항·시험지 관리 화면(풀스택)',
          '화면 URI → 담당 서비스 매핑 및 API 계약 문서화',
          '전환 이후 실제 운영·유지보수',
        ],
        architecture: {
          summary:
            'Spring Cloud 기반으로 문제은행·출제관리·시스템·응시(F/B)를 서비스로 분리하고, 서비스 디스커버리·API 게이트웨이·설정 관리를 두었습니다. 설정 전파에는 메시지 버스(RabbitMQ)를 사용하고, 컨테이너로 배포하며 저장소는 PostgreSQL을 사용했습니다.',
          nodes: [
            { label: '서비스 디스커버리', value: 'MSA 서비스 등록·발견' },
            { label: 'API 게이트웨이', value: '외부 요청 라우팅' },
            { label: '설정 관리', value: '중앙 설정 + RabbitMQ 버스로 설정 전파' },
            { label: '문제은행(담당)', value: '문항·시험지 CRUD 풀스택' },
            { label: '배포', value: '컨테이너 기반 배포 / PostgreSQL' },
          ],
        },
        challenges: [
          {
            title: '무엇을 공통으로 두고, 어디를 서비스로 나눌 것인가',
            problem:
              '온프레미스 코드를 그대로 옮기는 게 아니라 저장 방식·서비스 경계·배포까지 다시 설계해야 했습니다. 서비스를 잘못 나누면 데이터 소유권과 호출 실패 시 책임이 모호해집니다.',
            approach:
              '기존 시스템의 문항 생성·검증·시험지 편성 흐름을 먼저 정리하고, 어떤 데이터와 규칙을 문제은행 서비스가 소유하고 다른 서비스·화면에는 어떤 API 계약으로 제공할지를 상태·시나리오 단위로 문서화했습니다.',
            result:
              '서비스를 나누는 것보다 데이터 소유권과 호출 실패 시의 책임, 배포 단위를 분명히 하는 것이 더 중요하다는 기준을 세웠고, 이후 KICE의 멀티테넌트 설계로 이어졌습니다.',
          },
          {
            title: '화면과 서비스가 같은 지도를 보게',
            problem:
              '화면 이벤트마다 어느 서비스가 데이터를 소유하는지 불명확하면, 통합 시점에 기능 누락이나 책임 중복이 뒤늦게 드러납니다.',
            approach:
              '관리 화면의 각 URI가 호출하는 API와 그 담당 서비스를 매핑한 문서를 만들어 프론트·인프라와 공유하고, 상태 명칭을 같은 용어로 맞췄습니다.',
            result:
              '기획·개발·QA가 같은 기준으로 검증할 수 있게 되어, 서비스 경계를 사이에 둔 협업의 마찰을 줄였습니다.',
          },
          {
            title: '대규모 동시 응시를 견디는지 검증',
            problem:
              '시험은 특정 시각에 동시 응시가 몰립니다. 전환한 구조가 실제 부하를 견디는지 확인이 필요했습니다.',
            approach:
              '동시접속 1만 명이 실패 없이 접속하는지, 평균 4,500 TPS 이상인지, 페이지 응답이 3초 이내인지를 측정 지표·산정식·반복 횟수로 정의한 성능 시험 기준을 세우고, 외부 시험업체의 검증에 대응했습니다.',
            result:
              '정의한 기준의 충족을 확인했습니다(상세 결과 보고서는 대외비). 성능을 체감이 아니라 지표로 검증하는 방식을 경험했습니다.',
          },
        ],
        metrics: [
          { label: '분리한 서비스', value: '8+', note: '문제은행·출제·시스템·응시 등' },
          { label: '성능 기준(동시접속)', value: '10,000명', note: '실패 없이 접속' },
          { label: '성능 기준(처리량/응답)', value: '4,500 TPS / 3초', note: '평균 TPS / 페이지 응답' },
        ],
        evidence:
          '성능 수치는 프로젝트 성능 시험의 기준값이며, 외부 시험업체의 상세 결과 보고서는 대외비로 첨부하지 않습니다. 서비스 구성은 아키텍처·매핑 산출물을 근거로 하며 내부 도메인/호스트 등 대외비는 표기에서 제외했습니다.',
      },
    },
    {
      slug: 'neotest-maintenance',
      name: 'NeoTest 솔루션 유지보수 및 기능개발',
      role: 'Full Stack',
      period: '2021.10 ~ 2024.09',
      tech: [
        'Java 8',
        'Spring Legacy',
        'MyBatis',
        'MSSQL',
        'Oracle',
        'Tibero',
        'Windows Server',
        'JavaScript',
        'JSP',
        'jQuery',
      ],
      summary:
        '18개+ 공공·교육 기관의 문제은행·평가 시스템을 3년간 유지보수·운영 지원. 다양한 레거시 기술 스택과 기관별 요구가 공존하는 환경에서 장애 대응과 기능 개선을 수행.',
      contributions: [
        '기관별 운영 장애·데이터 문제를 직접 접수해 원인 추적 후 조치',
        '대량 업로드 동시성 병목(MAX+1 채번)을 Sequence로 전환해 근본 해결',
        '레거시 기능을 현재 표준으로 전환(Flash → HTML5 재구축 등)',
        'JVM 메모리·DB 커넥션 풀·인덱스 튜닝으로 응답 지연 개선',
      ],
      outcomes: [
        '재직 기간 중 유지보수 접수 건 다수를 직접 처리(게시판 기준 본인 처리 315건)',
        '반복되는 변경의 영향 범위를 사람 기억이 아닌 도구·문서로 줄이는 업무 방식 정립',
      ],
      detail: {
        tagline: '증상이 아니라 원인을 추적하는 운영 — 3년, 여러 기관, 여러 레거시',
        context: [
          '문헌정보·의학·사이버대학·공공기관 등 성격이 제각각인 기관들의 문제은행·평가 시스템을 동시에 담당했습니다. Java 8 레거시부터 여러 DBMS(MSSQL·Oracle·Tibero)까지 스택이 섞여 있었고, 기관마다 용어·승인 절차·통계 기준이 달랐습니다.',
          '고객 요청을 그대로 받기보다 실제 업무 흐름과 요청이 생긴 이유를 먼저 확인하고, 변경이 어떤 화면·쿼리·데이터에 닿는지 추적한 뒤 조치하는 방식으로 일했습니다.',
        ],
        responsibilities: [
          '기관별 운영 장애·데이터 정정·기능 개선 접수 및 처리',
          '동시성/성능 병목 원인 분석과 구조적 개선',
          '레거시 기능의 표준 전환 및 보안 대응',
        ],
        challenges: [
          {
            title: '다른 기관의 파일이 섞여 저장된 사고 (MAX+1 → Sequence)',
            problem:
              '여러 기관이 동시에 파일을 올리자 일부 기관에 다른 기관의 파일이 저장되고 로그에는 중복 키 오류가 쌓였습니다. 콘텐츠가 다른 고객에게 섞이는 사고였기에 증상만 덮을 수 없었습니다.',
            approach:
              '선임과 함께 로그를 추적하고 실데이터를 백업받아 같은 상황을 재현했습니다. 파일 시리얼 번호를 “요청마다 MAX 값을 조회해 +1”하는 방식이 동시 요청에서 경합·충돌을 만든다는 것을 확인하고, DB Sequence 방식으로 전환하는 구현을 맡았습니다.',
            result:
              '채번 경합이라는 원인 자체를 제거해 파일 뒤섞임과 중복 키 오류를 해소했고, 전환 후 정상 저장을 모니터링으로 확인했습니다.',
          },
          {
            title: '같은 학교가 통계에서 두 번 잡히는 문제',
            problem:
              '접수 통계에서 같은 학교가 2개 행으로 분리 집계됐습니다. 통계는 여러 상위 화면과 엑셀 다운로드로 이어지므로 원인을 정확히 짚어야 했습니다.',
            approach:
              '통계 쿼리의 GROUP BY에 접수 인원 컬럼이 포함되어, 반별 인원이 다른 학교가 서로 다른 행으로 나뉜다는 것을 확인했습니다. 그룹핑을 수정하고, 영향받는 상위 통계·접수 통계·엑셀 다운로드 3개 경로의 정상 출력을 함께 확인했습니다.',
            result:
              '통계 정합성을 복구하고, 수정 후 영향 범위를 끝까지 확인하는 절차의 중요성을 다시 확인했습니다.',
          },
          {
            title: '입사 2개월 차, 전 고객사 보안 취약점 대응 (Log4Shell)',
            problem:
              'Log4j 원격 실행 취약점이 공개됐을 때, 담당하던 여러 기관 중 어디가 취약한지 즉시 알 수 없었습니다.',
            approach:
              '유지보수 대상 사이트 전체의 log4j·JDK 버전을 전수 조사해 표로 정리하고, 실제 취약한 버전을 쓰는 시스템만 식별했습니다. 조치는 로컬 환경에서 테스트한 뒤 적용하는 원칙으로 진행했습니다.',
            result:
              '영향 범위를 확정하고 취약 시스템을 선별 조치했습니다. 신입 시기에 전 고객사 인시던트를 스스로 정리해 본 경험이 됐습니다.',
          },
          {
            title: '레거시를 현재 표준으로',
            problem:
              '브라우저 지원이 끝난 Flash 기반 기능, 무부하 시에도 메모리를 과점유하는 WAS 설정 등 오래된 기술이 운영을 위협했습니다.',
            approach:
              'Flash 기능을 HTML5 표준으로 재구축하고, JVM 메모리 설정을 재조정했으며, 지연이 큰 화면은 DB 커넥션 풀 확장과 누락 인덱스 추가로 응답을 개선했습니다.',
            result:
              '지원 종료된 기술을 걷어내고, 병목 지점별로 원인을 확인한 뒤 조치해 응답 속도 개선을 확인했습니다.',
          },
        ],
        metrics: [
          { label: '담당 기관', value: '18개+', note: '공공·교육 기관' },
          { label: '본인 처리 건', value: '315건', note: '재직 중 유지보수 게시판 기준' },
          { label: '운영 기간', value: '약 3년', note: '2021.10 ~ 2024.09' },
        ],
        evidence:
          '처리 건수는 유지보수 접수·처리 내역에서 본인 처리 건을 집계한 값입니다. 기관 실명·실데이터 등 대외비는 표기에서 제외하고 도메인 유형으로만 서술했습니다.',
      },
    },
    {
      slug: 'keep-your-focus',
      name: 'Chrome 확장 앱 : 집중 타이머 (Keep Your Focus)',
      role: 'Full Stack',
      period: '2025.01 ~ 2025.02',
      tech: ['TypeScript', 'Chrome Extensions (MV3)', 'Vite'],
      summary:
        '설정한 시간 동안 특정 사이트를 차단하거나 화이트리스트 외 사이트를 전면 차단하는 브라우저 확장 앱. 개인 생산성 문제를 직접 제품으로 만든 사이드 프로젝트.',
      contributions: [
        '옵션 페이지·백그라운드 스크립트·스토리지 스키마 설계',
        'tsconfig 세분화 및 번들 최적화',
        'Chrome Web Store 배포',
      ],
      outcomes: ['집중 시간 동안 SNS 체류시간 감소(개인 스크린타임 기준)'],
      links: [
        {
          title: 'Chrome Web Store',
          url: 'https://chromewebstore.google.com/detail/keep-your-focus/oijcceoleoibbniknolbkhcocggnckgp',
        },
      ],
      detail: {
        tagline: '내 문제를 직접 제품으로 — 배포까지 마친 사이드 프로젝트',
        context: [
          '작업 중 무심코 SNS로 새는 시간을 줄이고 싶어 직접 만든 브라우저 확장 앱입니다. 설정한 집중 시간 동안 지정 사이트를 차단하거나, 허용 목록 외 사이트를 전면 차단합니다.',
        ],
        responsibilities: [
          '옵션 UI, 백그라운드 스크립트, 저장 스키마 설계',
          'Manifest V3 구조 구성 및 번들 최적화',
          'Chrome Web Store 심사·배포',
        ],
        challenges: [
          {
            title: '브라우저 상태와 설정을 어떻게 저장할까',
            problem:
              '탭이 여러 개 열리고 브라우저가 재시작돼도 차단 규칙과 남은 시간이 유지되어야 했습니다.',
            approach:
              '확장 스토리지에 설정·상태 스키마를 정의하고 백그라운드 스크립트에서 규칙을 적용했습니다. tsconfig를 용도별로 나눠 번들을 최적화했습니다.',
            result:
              '브라우저 API·상태 저장·제품 배포까지 한 사이클을 직접 경험했고, 실제 스토어에 배포했습니다.',
          },
        ],
        metrics: [
          { label: '배포', value: 'Chrome Web Store', note: '실제 게시' },
          { label: '스택', value: 'TypeScript / MV3', note: 'Vite 번들' },
        ],
      },
    },
  ],
  skills: [
    {
      category: 'Backend',
      items: ['Java', 'Spring Boot', 'MyBatis', 'Kafka', 'RabbitMQ', 'OpenFeign', 'Python'],
    },
    {
      category: 'Frontend',
      items: ['JavaScript', 'TypeScript', 'React', 'Next.js', 'JSP', 'jQuery'],
    },
    { category: 'DB/Cache', items: ['PostgreSQL', 'MSSQL', 'Oracle', 'Redis'] },
    { category: 'DevOps', items: ['Docker', 'Kubernetes', 'GitHub Actions', 'Gradle', 'ArchUnit', 'SpotBugs', 'Jacoco'] },
    { category: 'Cloud/Etc', items: ['Naver Cloud', 'AWS', 'Linux', 'Git', 'Swagger/OpenAPI'] },
  ],
  contact: {
    email: 'jdnam1996@gmail.com',
    github: 'https://github.com/jungducknam',
    blog: 'https://clsrn4561.tistory.com',
  },
}
