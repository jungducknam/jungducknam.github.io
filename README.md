# jungducknam.github.io

Vite + React + TypeScript 기반의 개인 포트폴리오입니다. GSAP를 이용해 섹션 단위 페이드업 애니메이션을 적용했고, 단일 데이터 파일(`src/assets/data/profile.ts`)을 수정하는 것만으로 히어로·학력·프로젝트·스킬·경력·연락처 섹션을 동시에 갱신할 수 있도록 구성했습니다.

## 프로젝트 구조
- `src/assets/data/profile.ts`: ProfileData 타입과 실제 이력 데이터. 이 파일만 수정하면 모든 섹션 내용이 변경됩니다.
- `src/components/*`: 공통 섹션, 타임라인, 프로젝트 카드, 스킬 그리드, 내비게이션 등 재사용 컴포넌트.
- `src/hooks/useGsapFadeUp.ts`: 스크롤 진입 시 GSAP 페이드업 애니메이션 훅.
- `docs/`: GitHub Pages가 참조하는 정적 빌드 산출물. `dist/` 내용을 복사해 최신 상태를 유지합니다.

## 주요 스크립트
| 명령 | 설명 |
| --- | --- |
| `npm run dev` | 로컬 개발 서버(HMR) 실행 |
| `npm run lint` | ESLint 9 규칙 실행(React Hooks, Refresh, TS 포함) |
| `npm run build` | `tsc -b` 타입 검증 후 Vite 프로덕션 번들 + `404.html` 복제 |
| `npm run preview` | 마지막 빌드 결과를 로컬에서 서빙하여 배포 전 확인 |

## 데이터만 바꿔서 내용 갱신하기
1. `src/assets/data/profile.ts`의 `profile` 객체에서 이름, 요약, 학력, 프로젝트, 스킬, 경력, 연락처를 원하는 값으로 수정합니다.
2. 저장 후 `npm run dev`로 확인하거나, 필요 시 `npm run lint`로 규칙 위반 여부를 먼저 점검합니다.

## 개발 & 검증 절차
1. `npm install` (최초 1회)
2. 기능 추가 전 `npm run dev`로 개발 서버를 띄우고, 뷰포트(모바일/태블릿/데스크톱)와 라이트/다크 테마를 번갈아 확인합니다.
3. 작업 후 `npm run lint` → `npm run build` → `npm run preview` 순으로 이슈 여부를 점검합니다.

## 배포(GitHub Pages)
1. `npm run lint && npm run build`
2. `rm -rf docs/* && cp -R dist/* docs/`
3. `git add src docs package-lock.json` 등 필요한 파일을 스테이징 후 커밋/푸시하면 `main` 브랜치의 `docs/`를 기준으로 Pages가 갱신됩니다.
