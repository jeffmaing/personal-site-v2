type Props = {
  variant?: 'dashboard' | 'flow' | 'recommend';
  label?: string;
};

/**
 * 统一深蓝数字化系统风格封面
 * 三个 variant 共用同一套视觉语言，仅微调内部元素，保持全站一致性
 */
export default function CaseCover({ variant = 'dashboard', label }: Props) {
  return (
    <div
      className="case-cover"
      style={{ background: 'linear-gradient(135deg, #0F2A44 0%, #183756 100%)' }}
      aria-label={label}
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 400 225"
        preserveAspectRatio="xMidYMid slice"
        style={{ display: 'block' }}
      >
        <defs>
          <pattern id={`cvg-${variant}`} width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(255,255,255,0.045)" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="400" height="225" fill={`url(#cvg-${variant})`} />

        {/* 统一顶部标题条 */}
        <rect x="28" y="26" width="120" height="7" rx="3.5" fill="rgba(255,255,255,0.35)" />
        <rect x="28" y="40" width="64" height="5" rx="2.5" fill="rgba(255,255,255,0.16)" />

        {/* 三块统一 KPI 卡 */}
        {[
          { x: 28, v: '+45%' },
          { x: 156, v: '35' },
          { x: 284, v: '200+' },
        ].map((k, i) => (
          <g key={i} transform={`translate(${k.x}, 64)`}>
            <rect width="88" height="44" rx="6" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.1)" />
            <rect x="10" y="10" width="32" height="4" rx="2" fill="rgba(255,255,255,0.22)" />
            <text x="10" y="34" fill="#fff" fontSize="14" fontWeight="700" fontFamily="Inter, sans-serif">{k.v}</text>
          </g>
        ))}

        {/* 统一底部柱状图 */}
        <g transform="translate(28, 128)">
          <line x1="0" y1="62" x2="344" y2="62" stroke="rgba(255,255,255,0.1)" />
          {variant === 'flow'
            ? <FlowMini />
            : variant === 'recommend'
            ? <RecommendMini />
            : <BarsMini />}
        </g>

        {label && (
          <text
            x="28" y="212"
            fill="rgba(255,255,255,0.5)"
            fontSize="10"
            fontFamily="Inter, sans-serif"
            letterSpacing="0.14em"
          >
            {label.toUpperCase()}
          </text>
        )}
        <text
          x="372" y="212" textAnchor="end"
          fill="rgba(255,255,255,0.35)"
          fontSize="10"
          fontFamily="Inter, sans-serif"
          letterSpacing="0.14em"
        >
          CASE STUDY
        </text>
      </svg>
    </div>
  );
}

function BarsMini() {
  const bars = [38, 60, 48, 78, 54, 70, 92, 62];
  return (
    <>
      {bars.map((h, i) => (
        <rect
          key={i}
          x={i * 43}
          y={62 - h * 0.6}
          width="24"
          height={h * 0.6}
          rx="3"
          fill={i === 6 ? '#2563EB' : 'rgba(255,255,255,0.22)'}
        />
      ))}
    </>
  );
}

function FlowMini() {
  const nodes = [
    { x: 0, w: 70, label: '流程' },
    { x: 100, w: 70, label: '系统' },
    { x: 200, w: 70, label: 'AI', accent: true },
    { x: 300, w: 70, label: '执行' },
  ];
  return (
    <>
      {nodes.map((n, i) => (
        <g key={i}>
          <rect
            x={n.x} y={18} width={n.w} height="40" rx="7"
            fill="rgba(255,255,255,0.07)"
            stroke={n.accent ? '#2563EB' : 'rgba(255,255,255,0.16)'}
            strokeWidth={n.accent ? 1.5 : 1}
          />
          <text x={n.x + n.w / 2} y={43} fill="#fff" fontSize="12" fontWeight="600" textAnchor="middle" fontFamily="Inter, 'PingFang SC'">
            {n.label}
          </text>
          {i < 3 && (
            <line x1={n.x + n.w + 4} y1={38} x2={n.x + n.w + 22} y2={38} stroke="rgba(255,255,255,0.3)" strokeWidth="1.2" />
          )}
        </g>
      ))}
    </>
  );
}

function RecommendMini() {
  return (
    <>
      {[0, 1, 2, 3].map((i) => (
        <g key={i} transform={`translate(0, ${i * 16})`}>
          <rect width="344" height="12" rx="3" fill="rgba(255,255,255,0.05)" />
          <rect x="8" y="3" width="6" height="6" rx="1.5" fill={i === 0 ? '#2563EB' : 'rgba(255,255,255,0.2)'} />
          <rect x="22" y="4" width={180 - i * 28} height="4" rx="2" fill="rgba(255,255,255,0.22)" />
          <rect x="290" y="4" width="46" height="4" rx="2" fill="rgba(255,255,255,0.12)" />
        </g>
      ))}
    </>
  );
}
