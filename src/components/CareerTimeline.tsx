import { useInView, useWidth } from '../hooks/useAnimatedNumber'

interface TimelineStep {
  year: string
  label: string
  role: string
  color: string
}

const TIMELINE_DATA: TimelineStep[] = [
  { year: '2007', label: '比亚迪', role: '技术起点', color: '#e07070' },
  { year: '2009', label: '丰田', role: '精益管理', color: '#d4a853' },
  { year: '2011', label: '奔驰', role: '豪华标准', color: '#1e2a3a' },
  { year: '2014', label: '英菲尼迪', role: '品牌升级', color: '#1a365d' },
  { year: '2017', label: '安永', role: '咨询视角', color: '#8c5a2b' },
  { year: '2024', label: '易车', role: '数字化', color: '#e05c2b' },
  { year: '2025', label: 'AI 提效', role: '效能革命', color: '#52b788' },
]

export default function CareerTimeline() {
  const [ref, visible] = useInView(0.1)
  const w = useWidth()
  const isMobile = w < 768

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'none' : 'translateY(20px)',
        transition: 'opacity 0.8s ease 0.3s, transform 0.8s ease 0.3s',
      }}
    >
      {/* Section label */}
      <div style={{
        fontSize: '11px',
        color: '#bbb',
        letterSpacing: '0.2em',
        marginBottom: isMobile ? '24px' : '32px',
      }}>
        职业历程
      </div>

      {/* Milestone cards grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
        gap: '16px',
      }}>
        {TIMELINE_DATA.map((step, i) => (
          <div
            key={i}
            style={{
              background: '#fff',
              borderRadius: '14px',
              padding: '20px 16px',
              border: '1px solid rgba(0,0,0,0.04)',
              boxShadow: '0 2px 8px rgba(0,0,0,0.03)',
              opacity: visible ? 1 : 0,
              transform: visible ? 'none' : 'translateY(12px)',
              transition: `opacity 0.5s ease, transform 0.5s ease`,
              transitionDelay: `${0.1 + i * 0.08}s`,
            }}
          >
            {/* Year badge */}
            <div style={{
              display: 'inline-block',
              fontSize: '12px',
              fontWeight: 700,
              color: step.color,
              background: `${step.color}12`,
              padding: '4px 10px',
              borderRadius: '6px',
              marginBottom: '10px',
            }}>
              {step.year}
            </div>

            {/* Company */}
            <div style={{
              fontSize: '16px',
              fontWeight: 700,
              color: '#1e2a3a',
              marginBottom: '4px',
            }}>
              {step.label}
            </div>

            {/* Role */}
            <div style={{
              fontSize: '12px',
              color: '#999',
              letterSpacing: '0.02em',
            }}>
              {step.role}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
