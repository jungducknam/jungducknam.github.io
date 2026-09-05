# 남정덕 · Backend Engineer 포트폴리오

Java/Spring 기반 문제은행·온라인 시험 경험을 기술 사례로 소개하는 React + TypeScript + Vite 사이트입니다. 기존 색상·테마·카드·타임라인을 유지하면서 데이터 정합성, DB 병목, 이벤트 처리와 운영 복구 경험을 중심으로 구성했습니다.

## 내용과 화면

- 첫 화면 → 대표 사례 3개 → 경력 성장 → 주요 프로젝트 → Lab (CharaNest·K-Racing) → 기술 사용 맥락 → 확장 앱·학력 → 연락처
- 주요 프로젝트: KICE, 퓨쳐누리 개발·운영, NTCN
- 개인 프로젝트: CharaNest (로컬 AI 프로토타입), K-Racing (공개 웹 게임), Keep Your Focus (스토어 배포 확장 앱)
- 상단 메뉴와 상세 목차는 영문, 테마는 접근 가능한 해·달 아이콘 버튼
- 상세: 개요 → 구조·기여 구분 → 직접 수행 → 조사·판단·구현·검증 → 결과·한계·현재 개선안
- 데스크톱 측면 목차, 모바일 접이식 고정 목차, 사례 고유 링크와 목록 위치·포커스 복귀
- 콘텐츠는 처음부터 표시됩니다. 긴 섹션의 노출 여부를 스크롤 애니메이션에 의존하지 않습니다.

## 파일 구조

| 파일 | 역할 |
| --- | --- |
| `src/assets/data/profile.ts` | 첫 화면, 대표 사례, 경력, 기술, 개인 프로젝트, 연락처 |
| `src/assets/data/kice.ts` | KICE 기여·기술 사례 |
| `src/assets/data/futurenuri.ts` | 퓨쳐누리 개발·운영 사례 |
| `src/assets/data/ntcn.ts` | NTCN 전환·안정화 사례 |
| `src/assets/data/charanest.ts`, `kracing.ts` | 개인 프로젝트·기술 사례·개발 회고와 출처 |
| `src/assets/data/types.ts` | 프로젝트·기술 사례·흐름 데이터 타입 |
| `src/hooks/usePortfolioNavigation.ts` | 해시 경로, 사례 이동, 목록 위치·포커스 복귀 |
| `src/components/` | 기존 공통 UI와 대표 사례·상세·흐름 컴포넌트 |
| `src/App.css` | 공통 테마, 반응형·인쇄·포커스 스타일 |
| `docs/` | Vite가 직접 생성하는 GitHub Pages 산출물 |

## 실행과 검증

Node.js 20.19+ 또는 22.12+ 환경에서 실행합니다.

```sh
npm ci
npm run dev
npm run lint
npm run build
npm run preview
```

`build`는 타입 검사와 Vite 빌드 후 `docs/index.html`을 `docs/404.html`로 복제합니다. 복제 단계는 Windows와 Linux에서 동일하게 동작합니다. `dist/`를 별도로 복사하지 않습니다.

브라우저 확인 항목:

- 모바일·태블릿·데스크톱에서 헤더 겹침과 가로 넘침이 없는지
- 대표 사례 → 해당 사례 → 목록 복귀와 포커스
- 상세 목차, 기존 프로젝트 주소, 사례 주소 직접 진입·새로고침
- 라이트·다크 테마, 접힌 추가 기록, 키보드 포커스와 본문 건너뛰기

## 주소 규칙

기존 프로젝트 주소를 유지합니다.

- `#/project/kice`
- `#/project/neotest-maintenance`
- `#/project/ntcn`
- `#/project/keep-your-focus`
- `#/project/charanest`
- `#/project/k-racing`

사례는 `#/project/{slug}/{case-id}`로 직접 연결합니다. 예: `#/project/kice/kafka-order`. 개요·구조·기여도 같은 경로의 `project-overview`, `architecture`, `contributions`로 연결할 수 있습니다.

## 경력 내용 수정 원칙

사실 기준은 비공개 Resume 자료의 프로젝트별 소스 마스터 → 증거색인 → 개인기여 상세근거입니다. 원본 자료·내부 소스·실데이터·운영 SQL을 이 저장소나 빌드 산출물에 복사하지 않습니다.

- A: 직접 구현·수정·설계가 연결된 확인 범위에서 능동형 사용
- B: 수행·참여와 기록의 한계를 구분. 확인된 직접 수행을 불필요하게 축소하지 않음
- C: 프로젝트 환경과 전체 구조에만 사용
- D: 공개하지 않음. 당시 가설은 가설로, 현재 개선안은 별도 필드로 구분
- 커밋·매핑·체크리스트 건수를 개인 기능 수나 KPI로 변환하지 않음
- DB 개선 수치는 핵심 쿼리에 한정하며 주변 쿼리의 미개선도 함께 표기
- NTCN tenant schema와 KICE 기관별 DB 분리를 혼용하지 않음

`steps`에는 자료로 확인되는 사고 흐름만 추가합니다. 확인되지 않은 조사·대안·검증을 채우지 말고 `limits`에 추가 확인 사항을 적습니다. 현재 관점의 개선은 `future`에 기록합니다.

## 개인 프로젝트 출처

2026.09.05에 공개 쇼케이스와 본인 블로그를 대조했습니다. 공개된 설명·회고에 근거하며, 비공개 애플리케이션의 소스 감사나 테스트 재실행 결과로 표현하지 않습니다.

- [CharaNest 쇼케이스](https://github.com/jungducknam/CharaNest-showcase): 8월 기준 로컬 우선 실행, 프로토타입·다운로드 미제공, 역할·권한·기억·품질 기준
- [5월 대화모델 회고](https://clsrn4561.tistory.com/30), [6월 대화 품질 검증](https://clsrn4561.tistory.com/31): 당시 검색 파이프라인 실험과 현재 기본 앱 경로를 구분
- [K-Racing 쇼케이스](https://github.com/jungducknam/K-Racing-showcase), [기술 설계](https://github.com/jungducknam/K-Racing-showcase/blob/main/docs/TECHNICAL_NOTES.md), [8월 회고](https://clsrn4561.tistory.com/33): 초기 서버 권위 방식의 장애와 현재 호스트 Worker·WebRTC 구조를 구분. AI 도구 활용과 본인의 판단·검증 역할 명시
- `public/projects/charanest-overlay.jpg`: CharaNest 쇼케이스의 `docs/screenshots/main-overlay.jpg`
- `public/projects/k-racing-race.png`: K-Racing 쇼케이스의 `assets/k-racing-race.png`

화면은 소유자의 포트폴리오 반영 요청에 따라 공개 원본을 변형 없이 사용했습니다. 각 저장소의 원래 이용 조건을 유지하며 별도 재배포 허가를 부여하지 않습니다.

## GitHub Pages

`.github/workflows/main-ci.yml`은 main에 push하면 의존성 설치 → lint → build → `docs/` artifact 업로드 → Pages 배포를 수행합니다. 로컬 변경이나 build만으로는 공개 사이트가 바뀌지 않습니다.
