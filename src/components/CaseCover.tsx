type Props = {
  variant: 'dashboard' | 'flow' | 'recommend';
  label?: string;
};

/**
 * 纯 SVG 案例封面 — 模拟 dashboard / 流程图 / 推荐系统视觉
 * 避免使用真实截图时的占位方案，风格克制、品牌一致
 */
export default function CaseCover({ variant, label }: Props) {
  return (
    <div
      className="case-cover"
      style={{ background: 'linear-gradient(135deg, #0F2A44 0%, #1a3a5c 100%)' }}
      aria-label={label}
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 400 225"
        preserveAspectRatio="xMidYMid slice"
        style={{ display: 'block' }}
      >
        {/* grid backdrop */}
        <defs>
          <pattern id={`grid-${variant}`} width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="400" height="225" fill={`url(#grid-${variant})`} />

        {variant === 'dashboard' && <DashboardScene />}
        {variant === 'flow' && <FlowScene />}
        {variant === 'recommend' && <RecommendScene />}

        {label && (
          <text
            x="24"
            y="200"
            fill="rgba(255,255,255,0.5)"
            fontSize="11"
            fontFamily="Inter, sans-serif"
            letterSpacing="0.1em"
          >
            {label.toUpperCase()}
          </text>
        )}
      </svg>
    </div>
  );
}

function DashboardScene() {
  const bars = [40, 65, 50, 80, 55, 72, 90, 60];
  return (
    <>
      {/* top bar */}
      <rect x="24" y="24" width="120" height="8" rx="4" fill="rgba(255,255,255,0.3)" />
      <rect x="24" y="40" width="60" height="6" rx="3" fill="rgba(255,255,255,0.15)" />
      {/* KPI cards */}
      {[0, 1, 2].map((i) => (
        <g key={i} transform={`translate(${24 + i * 118}, 64)`}>
          <rect width="104" height="52" rx="6" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.1)" />
          <rect x="10" y="10" width="40" height="5" rx="2.5" fill="rgba(255,255,255,0.25)" />
          <text x="10" y="36" fill="#fff" fontSize="16" fontWeight="700" fontFamily="Inter">+{(i + 1) * 23}%</text>
        </g>
      ))}
      {/* chart */}
      <g transform="translate(24, 130)">
        <line x1="0" y1="60" x2="352" y2="60" stroke="rgba(255,255,255,0.1)" />
        {bars.map((h, i) => (
          <rect
            key={i}
            x={i * 44}
            y={60 - h * 0.6}
            width="24"
            height={h * 0.6}
            rx="3"
            fill={i === 6 ? '#2563EB' : 'rgba(255,255,255,0.25)'}
          />
        ))}
      </g>
    </>
  );
}

function FlowScene() {
  const nodes = [
    { x: 40, y: 60, w: 80, label: '流程' },
    { x: 160, y: 60, w: 80, label: '系统' },
    { x: 280, y: 60, w: 80, label: 'AI' },
  ];
  return (
    <>
      {nodes.map((n, i) => (
        <g key={i}>
          <rect
            x={n.x}
            y={n.y}
            width={n.w}
            height="50"
            rx="8"
            fill="rgba(255,255,255,0.08)"
            stroke={i === 2 ? '#2563EB' : 'rgba(255,255,255,0.15)'}
            strokeWidth={i === 2 ? 1.5 : 1}
          />
          <text x={n.x + n.w / 2} y={n.y + 30} fill="#fff" fontSize="13" fontWeight="600" textAnchor="middle" fontFamily="Inter, 'PingFang SC'">
            {n.label}
          </text>
          {i < 2 && (
            <g stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" fill="none">
              <line x1={n.x + n.w} y1={n.y + 25} x2={n.x + n.w + 18} y2={n.y + 25} />
              <path d={`M ${n.x + n.w + 14} ${n.y + 21} L ${n.x + n.w + 18} ${n.y + 25} L ${n.x + n.w + 14} ${n.y + 29}`} />
            </g>
          )}
        </g>
      ))}
      {/* result */}
      <g transform="translate(40, 140)">
        <rect width="320" height="56" rx="8" fill="rgba(37,99,235,0.15)" stroke="rgba(37,99,235,0.4)" />
        <circle cx="24" cy="28" r="10" fill="#2563EB" />
        <path d="M 20 28 L 23 31 L 29 25" stroke="#fff" strokeWidth="2" fill="none" strokeLinecap="round" />
        <text x="44" y="25" fill="#fff" fontSize="12" fontWeight="600" fontFamily="Inter, 'PingFang SC'">效率提升</text>
        <text x="44" y="42" fill="rgba(255,255,255,0.7)" fontSize="11" fontFamily="Inter, 'PingFang SC'">2 天 → 10 分钟</text>
      </g>
    </>
  );
}

function RecommendScene() {
  return (
    <>
      {/* person card */}
      <g transform="translate(24, 40)">
        <rect width="352" height="44" rx="8" fill="rgba(255,255,255,0.06)" />
        <circle cx="24" cy="22" r="12" fill="rgba(255,255,255,0.2)" />
        <rect x="44" y="14" width="80" height="6" rx="3" fill="rgba(255,255,255,0.3)" />
        <rect x="44" y="26" width="50" height="5" rx="2.5" fill="rgba(255,255,255,0.15)" />
        <rect x="280" y="16" width="56" height="16" rx="8" fill="rgba(37,99,235,0.3)" />
      </g>
      {/* recommended courses */}
      {[0, 1, 2].map((i) => (
        <g key={i} transform={`translate(24, ${100 + i * 34})`}>
          <rect width="352" height="28" rx="6" fill="rgba(255,255,255,0.04)" />
          <rect x="10" y="9" width="8" height="10" rx="2" fill={i === 0 ? '#2563EB' : 'rgba(255,255,255,0.2)'} />
          <rect x="26" y="9" width={180 - i * 30} height="5" rx="2.5" fill="rgba(255,255,255,0.25)" />
          <rect x="300" y="9" width="40" height="5" rx="2.5" fill="rgba(255,255,255,0.12)" />
        </g>
      ))}
    </>
  );
}
