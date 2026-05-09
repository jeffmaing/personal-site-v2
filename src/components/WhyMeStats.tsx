import { useState, useEffect, useRef } from 'react'
import { useInView, useWidth } from '../hooks/useAnimatedNumber'
import CareerTimeline from './CareerTimeline'

interface StatItem {
  value: number
  suffix: string
  label: string
  prefix?: string
}

const STATS: StatItem[] = [
  { value: 19, suffix: '年', label: '汽车行业深耕' },
  { value: 1000, suffix: '+', label: '累计服务店次' },
  { value: 2, suffix: '天→10分钟', label: '单店诊断效率', prefix: '' },
  { value: 5, suffix: '个品牌', label: '服务头部品牌' },
]

export default function WhyMeStats() {
  const [ref, visible] = useInView(0.2)
  const w = useWidth()
  const isMobile = w < 768

  return (
    <div
      ref={ref}
      style={{
        marginTop: isMobile ? '32px' : '48px',
        opacity: visible ? 1 : 0,
        transform: visible ? 'none' : 'translateY(20px)',
        transition: 'opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s',
      }}
    >
      {/* Key numbers */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
          gap: isMobile ? '12px' : '24px',
        }}
      >
        {STATS.map((stat, i) => (
          <AnimatedStat key={i} stat={stat} visible={visible} delay={0.3 + i * 0.1} />
        ))}
      </div>

      {/* Career timeline */}
      <CareerTimeline />
    </div>
  )
}

function AnimatedStat({
  stat,
  visible,
  delay,
}: {
  stat: StatItem
  visible: boolean
  delay: number
}) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!visible) return

    const duration = 2000
    const startTime = Date.now()

    const animate = () => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(eased * stat.value))

      if (progress < 1) {
        requestAnimationFrame(animate)
      } else {
        setCount(stat.value)
      }
    }

    const timer = setTimeout(() => {
      requestAnimationFrame(animate)
    }, delay * 1000)

    return () => clearTimeout(timer)
  }, [visible, stat.value, delay])

  // Special display for "2天→10分钟" metric
  const displayValue =
    stat.label === '单店诊断效率'
      ? `${count}天→10分钟`
      : `${count}${stat.suffix}`

  return (
    <div style={{ textAlign: 'center' }}>
      <div
        style={{
          fontSize: 'clamp(28px, 4vw, 42px)',
          fontWeight: 800,
          color: '#1e2a3a',
          lineHeight: 1.2,
          letterSpacing: '-0.03em',
          marginBottom: '6px',
          fontFamily: '-apple-system, "PingFang SC", "Helvetica Neue", sans-serif',
        }}
      >
        {displayValue}
      </div>
      <div
        style={{
          fontSize: '12px',
          color: '#999',
          letterSpacing: '0.03em',
        }}
      >
        {stat.label}
      </div>
    </div>
  )
}
