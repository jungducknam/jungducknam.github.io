interface ProjectDiagramProps {
  slug: string
}

const AX = 'var(--accent-color)'
const SURFACE = 'var(--surface-color)'
const BORDER = 'var(--border-color)'
const TEXT = 'var(--text-color)'
const MUTED = 'var(--muted-text-color)'
const DANGER = '#ef4444'
const OK = '#10b981'

/* NTCN — Spring Cloud MSA 아키텍처 */
const NtcnDiagram = () => (
  <svg className="diagram__svg" viewBox="0 0 820 430" role="img" aria-label="NTCN 마이크로서비스 아키텍처 다이어그램">
    <defs>
      <marker id="arrow" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto">
        <path d="M0,0 L9,4.5 L0,9 z" fill={MUTED} />
      </marker>
    </defs>

    {/* Client */}
    <rect x="330" y="16" width="160" height="42" rx="10" fill={SURFACE} stroke={BORDER} strokeWidth="1.5" />
    <text x="410" y="42" textAnchor="middle" fill={TEXT} fontSize="15" fontWeight="600">클라이언트 (웹 · 응시)</text>
    <line x1="410" y1="58" x2="410" y2="86" stroke={MUTED} strokeWidth="1.5" markerEnd="url(#arrow)" />

    {/* Gateway */}
    <rect x="310" y="90" width="200" height="44" rx="10" fill="var(--accent-muted)" stroke={AX} strokeWidth="1.5" />
    <text x="410" y="117" textAnchor="middle" fill={AX} fontSize="15" fontWeight="700">API Gateway</text>

    {/* Discovery / Config flanking */}
    <rect x="40" y="90" width="200" height="44" rx="10" fill={SURFACE} stroke={BORDER} strokeWidth="1.5" />
    <text x="140" y="117" textAnchor="middle" fill={TEXT} fontSize="14">Service Discovery</text>
    <rect x="580" y="90" width="200" height="44" rx="10" fill={SURFACE} stroke={BORDER} strokeWidth="1.5" />
    <text x="680" y="112" textAnchor="middle" fill={TEXT} fontSize="14">Config</text>
    <text x="680" y="128" textAnchor="middle" fill={MUTED} fontSize="11">+ RabbitMQ 설정 버스</text>
    <line x1="240" y1="112" x2="308" y2="112" stroke={MUTED} strokeWidth="1.3" strokeDasharray="4 4" />
    <line x1="512" y1="112" x2="578" y2="112" stroke={MUTED} strokeWidth="1.3" strokeDasharray="4 4" />

    <line x1="410" y1="134" x2="410" y2="166" stroke={MUTED} strokeWidth="1.5" markerEnd="url(#arrow)" />
    {/* bus line */}
    <line x1="110" y1="176" x2="710" y2="176" stroke={BORDER} strokeWidth="1.5" />
    <line x1="410" y1="166" x2="410" y2="176" stroke={MUTED} strokeWidth="1.5" />

    {/* Services */}
    {[
      { x: 40, label: '문제은행', sub: '담당', accent: true },
      { x: 214, label: '출제관리', sub: 'MSA' },
      { x: 388, label: '시스템', sub: 'MSA' },
      { x: 562, label: '응시 F / B', sub: 'MSA' },
    ].map((s) => (
      <g key={s.label}>
        <line x1={s.x + 90} y1="176" x2={s.x + 90} y2="196" stroke={MUTED} strokeWidth="1.5" markerEnd="url(#arrow)" />
        <rect
          x={s.x}
          y="198"
          width="180"
          height="52"
          rx="10"
          fill={s.accent ? 'var(--accent-muted)' : SURFACE}
          stroke={s.accent ? AX : BORDER}
          strokeWidth="1.5"
        />
        <text x={s.x + 90} y="222" textAnchor="middle" fill={s.accent ? AX : TEXT} fontSize="14" fontWeight={s.accent ? 700 : 600}>
          {s.label}
        </text>
        <text x={s.x + 90} y="239" textAnchor="middle" fill={MUTED} fontSize="11">
          {s.sub}
        </text>
        <line x1={s.x + 90} y1="250" x2={s.x + 90} y2="286" stroke={MUTED} strokeWidth="1.5" markerEnd="url(#arrow)" />
      </g>
    ))}

    {/* DB */}
    <rect x="250" y="288" width="320" height="46" rx="10" fill={SURFACE} stroke={BORDER} strokeWidth="1.5" />
    <text x="410" y="316" textAnchor="middle" fill={TEXT} fontSize="14" fontWeight="600">PostgreSQL · 컨테이너 배포</text>

    <text x="410" y="366" textAnchor="middle" fill={MUTED} fontSize="12">
      기관별 수동 배포 → 공통 플랫폼(MSA)으로 전환 · 문제은행 모듈 담당
    </text>
  </svg>
)

/* 유지보수 — MAX+1 vs Sequence */
const SequenceDiagram = () => (
  <svg className="diagram__svg" viewBox="0 0 820 380" role="img" aria-label="MAX+1 채번과 Sequence 채번 비교 다이어그램">
    <defs>
      <marker id="arrow2" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto">
        <path d="M0,0 L9,4.5 L0,9 z" fill={MUTED} />
      </marker>
    </defs>

    {/* Panel Before */}
    <rect x="10" y="10" width="390" height="360" rx="16" fill="none" stroke={BORDER} strokeWidth="1.5" />
    <rect x="10" y="10" width="390" height="40" rx="16" fill={`color-mix(in srgb, ${DANGER} 12%, transparent)`} />
    <text x="30" y="36" fill={DANGER} fontSize="15" fontWeight="700">Before · MAX+1 채번</text>

    <rect x="40" y="66" width="150" height="38" rx="9" fill={SURFACE} stroke={BORDER} />
    <text x="115" y="90" textAnchor="middle" fill={TEXT} fontSize="13">요청 A (동시)</text>
    <rect x="220" y="66" width="150" height="38" rx="9" fill={SURFACE} stroke={BORDER} />
    <text x="295" y="90" textAnchor="middle" fill={TEXT} fontSize="13">요청 B (동시)</text>

    <line x1="115" y1="104" x2="160" y2="140" stroke={MUTED} strokeWidth="1.4" markerEnd="url(#arrow2)" />
    <line x1="295" y1="104" x2="250" y2="140" stroke={MUTED} strokeWidth="1.4" markerEnd="url(#arrow2)" />

    <rect x="120" y="142" width="170" height="40" rx="9" fill={SURFACE} stroke={BORDER} />
    <text x="205" y="167" textAnchor="middle" fill={TEXT} fontSize="13">SELECT MAX(id) → 100</text>

    <line x1="205" y1="182" x2="205" y2="214" stroke={MUTED} strokeWidth="1.4" markerEnd="url(#arrow2)" />
    <rect x="120" y="216" width="170" height="40" rx="9" fill={SURFACE} stroke={BORDER} />
    <text x="205" y="241" textAnchor="middle" fill={TEXT} fontSize="13">둘 다 100 + 1 = 101</text>

    <line x1="205" y1="256" x2="205" y2="290" stroke={DANGER} strokeWidth="1.6" markerEnd="url(#arrow2)" />
    <rect x="120" y="292" width="170" height="58" rx="9" fill={`color-mix(in srgb, ${DANGER} 12%, transparent)`} stroke={DANGER} strokeWidth="1.5" />
    <text x="205" y="316" textAnchor="middle" fill={DANGER} fontSize="13" fontWeight="700">id = 101 충돌 ⚠</text>
    <text x="205" y="334" textAnchor="middle" fill={DANGER} fontSize="11">파일 뒤섞임 · 중복 키</text>

    {/* Panel After */}
    <rect x="420" y="10" width="390" height="360" rx="16" fill="none" stroke={BORDER} strokeWidth="1.5" />
    <rect x="420" y="10" width="390" height="40" rx="16" fill={`color-mix(in srgb, ${OK} 14%, transparent)`} />
    <text x="440" y="36" fill={OK} fontSize="15" fontWeight="700">After · DB Sequence</text>

    <rect x="450" y="66" width="150" height="38" rx="9" fill={SURFACE} stroke={BORDER} />
    <text x="525" y="90" textAnchor="middle" fill={TEXT} fontSize="13">요청 A (동시)</text>
    <rect x="630" y="66" width="150" height="38" rx="9" fill={SURFACE} stroke={BORDER} />
    <text x="705" y="90" textAnchor="middle" fill={TEXT} fontSize="13">요청 B (동시)</text>

    <line x1="525" y1="104" x2="580" y2="150" stroke={MUTED} strokeWidth="1.4" markerEnd="url(#arrow2)" />
    <line x1="705" y1="104" x2="650" y2="150" stroke={MUTED} strokeWidth="1.4" markerEnd="url(#arrow2)" />

    <rect x="525" y="152" width="180" height="42" rx="9" fill="var(--accent-muted)" stroke={AX} strokeWidth="1.5" />
    <text x="615" y="178" textAnchor="middle" fill={AX} fontSize="13" fontWeight="700">Sequence.nextval</text>

    <line x1="580" y1="194" x2="530" y2="248" stroke={OK} strokeWidth="1.5" markerEnd="url(#arrow2)" />
    <line x1="650" y1="194" x2="700" y2="248" stroke={OK} strokeWidth="1.5" markerEnd="url(#arrow2)" />

    <rect x="450" y="250" width="150" height="46" rx="9" fill={`color-mix(in srgb, ${OK} 12%, transparent)`} stroke={OK} strokeWidth="1.5" />
    <text x="525" y="278" textAnchor="middle" fill={OK} fontSize="13" fontWeight="700">id = 101</text>
    <rect x="630" y="250" width="150" height="46" rx="9" fill={`color-mix(in srgb, ${OK} 12%, transparent)`} stroke={OK} strokeWidth="1.5" />
    <text x="705" y="278" textAnchor="middle" fill={OK} fontSize="13" fontWeight="700">id = 102</text>

    <text x="615" y="330" textAnchor="middle" fill={OK} fontSize="12" fontWeight="600">충돌 원인 자체를 제거</text>
  </svg>
)

/* KICE — 콘텐츠 생명주기 파이프라인 */
const KiceDiagram = () => {
  const steps = [
    { label: '문항', sub: '생성·검증' },
    { label: '시험지', sub: '패키징' },
    { label: '응시', sub: '답안 저장' },
    { label: '채점', sub: '자동·수동' },
    { label: '통계', sub: '이원분류표' },
  ]
  const bands = [
    { x: 24, w: 300, label: '문제은행 서비스' },
    { x: 336, w: 148, label: '응시' },
    { x: 496, w: 300, label: '채점 서비스' },
  ]
  return (
    <svg className="diagram__svg" viewBox="0 0 820 250" role="img" aria-label="KICE 문항 생명주기 데이터 흐름 다이어그램">
      <defs>
        <marker id="arrow3" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto">
          <path d="M0,0 L9,4.5 L0,9 z" fill={MUTED} />
        </marker>
      </defs>

      {steps.map((s, i) => {
        const x = 24 + i * 160
        return (
          <g key={s.label}>
            <rect x={x} y="70" width="140" height="60" rx="12" fill={i === 3 ? 'var(--accent-muted)' : SURFACE} stroke={i === 3 ? AX : BORDER} strokeWidth="1.5" />
            <text x={x + 70} y="98" textAnchor="middle" fill={i === 3 ? AX : TEXT} fontSize="16" fontWeight="700">{s.label}</text>
            <text x={x + 70} y="117" textAnchor="middle" fill={MUTED} fontSize="12">{s.sub}</text>
            {i < steps.length - 1 && (
              <line x1={x + 140} y1="100" x2={x + 160} y2="100" stroke={MUTED} strokeWidth="1.6" markerEnd="url(#arrow3)" />
            )}
          </g>
        )
      })}

      {/* Kafka label on 응시 → 채점 arrow */}
      <text x="504" y="60" textAnchor="middle" fill={AX} fontSize="12" fontWeight="600">Kafka 이벤트</text>
      <line x1="504" y1="64" x2="504" y2="88" stroke={AX} strokeWidth="1.3" strokeDasharray="3 3" />

      {/* service bands */}
      {bands.map((b) => (
        <g key={b.label}>
          <rect x={b.x} y="150" width={b.w} height="26" rx="8" fill="none" stroke={BORDER} strokeWidth="1.2" strokeDasharray="5 4" />
          <text x={b.x + b.w / 2} y="168" textAnchor="middle" fill={MUTED} fontSize="12">{b.label}</text>
        </g>
      ))}

      <text x="410" y="212" textAnchor="middle" fill={MUTED} fontSize="12">
        다중 테넌트 라우팅 위에서 공통 흐름 + 기관별 정책 분리
      </text>
    </svg>
  )
}

const ProjectDiagram = ({ slug }: ProjectDiagramProps) => {
  let content = null
  if (slug === 'ntcn') content = <NtcnDiagram />
  else if (slug === 'neotest-maintenance') content = <SequenceDiagram />
  else if (slug === 'kice') content = <KiceDiagram />

  if (!content) return null
  return <div className="diagram">{content}</div>
}

export default ProjectDiagram
