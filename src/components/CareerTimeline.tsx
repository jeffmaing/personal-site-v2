import { useInView, useWidth } from '../hooks/useAnimatedNumber'

interface TimelineStep {
  year: string
  label: string
  color: string
}

const TIMELINE_DATA: TimelineStep[] = [
  { year: '2007', label: '比亚迪', color: '#e07070' },
  { year: '2009', label: '丰田', color: '#d4a853' },
  { year: '2011', label: '奔驰', color: '#1e2a3a' },
  { year: '2014', label: '英菲尼迪', color: '#1a365d' },
  { year: '2017', label: '安永', color: '#8c5a2b' },
  { year: '2024', label: '易车', color: '#e05c2b' },
  { year: '2025', label: 'AI', color: '#5b7db1' },
]

export default function CareerTimeline() {
  const [ref, visible] = useInView(0.2)
  const w = useWidth()
  const isMobile = w < 768

  return (
    <div
      ref={ref}
      style={{
        marginTop: isMobile ? '48px' : '64px',
        opacity: visible ? 1 : 0,
        transform: visible ? 'none' : 'translateY(20px)',
        transition: 'opacity 0.8s ease 0.3s, transform 0.8s ease 0.3s',
      }}
    >
      {/* Section label */}
      <div
        style={{
          fontSize: '11px',
          color: '#bbb',
          letterSpacing: '0.2em',
          marginBottom: isMobile ? '24px' : '32px',
        }}
      >
        CAREER PATH
      </div>

      {/* Horizontal timeline */}
      <div
        style={{
          position: 'relative',
          padding: isMobile ? '0 4px' : '0 8px',
        }}
      >
        {/* Main bar */}
        <div
          style={{
            height: '3px',
            background: 'linear-gradient(90deg, #e07070 0%, #d4a853 16%, #1e2a3a 28%, #1a365d 42%, #8c5a2b 56%, #e05c2b 78%, #5b7db1 100%)',
            borderRadius: '2px',
            position: 'relative',
            marginBottom: isMobile ? '32px' : '48px',
          }}
        >
          {/* Animated fill */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              height: '100%',
              width: visible ? '100%' : '0%',
              background: 'linear-gradient(90deg, #e07070 0%, #d4a853 16%, #1e2a3a 28%, #1a365d 42%, #8c5a2b 56%, #e05c2b 78%, #5b7db1 100%)',
              borderRadius: '2px',
              transition: 'width 1.5s cubic-bezier(0.4, 0, 0.2, 1)',
              transitionDelay: '0.4s',
            }}
          />
        </div>

        {/* Nodes and labels */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            pointerEvents: 'none',
          }}
        >
          {TIMELINE_DATA.map((step, i) => {
            const isLast = i === TIMELINE_DATA.length - 1
            const position = i / (TIMELINE_DATA.length - 1)

            return (
              <div
                key={i}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  position: 'absolute',
                  left: `${position * 100}%`,
                  transform: 'translateX(-50%)',
                }}
              >
                {/* Dot */}
                <div
                  style={{
                    width: isLast ? '12px' : '10px',
                    height: isLast ? '12px' : '10px',
                    borderRadius: '50%',
                    background: step.color,
                    border: '3px solid #fafafa',
                    boxShadow: `0 0 0 1px ${step.color}`,
                    marginTop: '-5px',
                    position: 'relative',
                    zIndex: 1,
                    transition: 'transform 0.5s ease',
                    transform: visible ? 'scale(1)' : 'scale(0)',
                    transitionDelay: `${0.4 + i * 0.1}s`,
                  }}
                />

                {/* Year label */}
                <div
                  style={{
                    marginTop: '10px',
                    fontSize: isMobile ? '10px' : '11px',
                    fontWeight: 600,
                    color: step.color,
                    letterSpacing: '-0.01em',
                    whiteSpace: 'nowrap',
                    opacity: visible ? 1 : 0,
                    transition: 'opacity 0.6s ease',
                    transitionDelay: `${0.6 + i * 0.08}s`,
                  }}
                >
                  {step.year}
                </div>

                {/* Company label */}
                <div
                  style={{
                    marginTop: '2px',
                    fontSize: isMobile ? '9px' : '10px',
                    color: '#999',
                    letterSpacing: '0.02em',
                    whiteSpace: 'nowrap',
                    opacity: visible ? 1 : 0,
                    transition: 'opacity 0.6s ease',
                    transitionDelay: `${0.7 + i * 0.08}s`,
                  }}
                >
                  {step.label}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
