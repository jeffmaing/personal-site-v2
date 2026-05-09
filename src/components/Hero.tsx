import { useEffect, useState } from 'react'
import { siteConfig } from '../site-config'

export default function Hero() {
  const { hero } = siteConfig
  const [typed, setTyped] = useState('')
  const [showCursor, setShowCursor] = useState(true)
  const fullText = hero.headline2
  const [w, setW] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024)
  const isMobile = w < 768

  useEffect(() => {
    const h = () => setW(window.innerWidth)
    window.addEventListener('resize', h)
    return () => window.removeEventListener('resize', h)
  }, [])

  // Typewriter effect — slower (140ms per char)
  useEffect(() => {
    let i = 0
    const interval = setInterval(() => {
      if (i <= fullText.length) {
        setTyped(fullText.slice(0, i))
        i++
      } else {
        clearInterval(interval)
      }
    }, 140)
    return () => clearInterval(interval)
  }, [])

  // Blinking cursor — slower (800ms)
  useEffect(() => {
    const interval = setInterval(() => setShowCursor(prev => !prev), 800)
    return () => clearInterval(interval)
  }, [])

  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: 'clamp(100px, 15vh, 200px)',
      padding: isMobile ? '100px 16px 80px' : 'clamp(120px, 20vh, 200px) 24px 120px',
      background: '#f7f8fc',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Subtle radial glow */}
      <div style={{
        position: 'absolute',
        top: '40%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '700px',
        height: '700px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(82,183,136,0.04) 0%, rgba(91,125,177,0.03) 40%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: '800px' }}>
        {/* Profile photo */}
        <img
          src="/profile.png"
          alt="麻明"
          loading="lazy"
          decoding="async"
          style={{
            width: isMobile ? '90px' : 'clamp(100px, 15vw, 140px)',
            height: isMobile ? '90px' : 'clamp(100px, 15vw, 140px)',
            borderRadius: '50%',
            objectFit: 'cover',
            border: isMobile ? '2px solid rgba(91,125,177,0.2)' : '3px solid rgba(91,125,177,0.2)',
            marginBottom: isMobile ? '20px' : '32px',
            boxShadow: '0 8px 32px rgba(91,125,177,0.15)',
          }}
        />

        {/* Main headline — bigger */}
        <h1 style={{
          fontSize: isMobile ? '36px' : 'clamp(48px, 9vw, 96px)',
          fontWeight: 800,
          lineHeight: 1.1,
          letterSpacing: '-0.04em',
          color: '#1e2a3a',
          marginBottom: isMobile ? '12px' : '20px',
        }}>
          {hero.headline}
        </h1>

        {/* Typewriter subtitle — bigger, sans-serif (no monospace) */}
        <div style={{
          fontSize: isMobile ? '20px' : 'clamp(28px, 5vw, 56px)',
          fontWeight: 600,
          lineHeight: 1.2,
          color: '#5b7db1',
          marginBottom: isMobile ? '24px' : '40px',
          minHeight: '1.3em',
        }}>
          {typed}
          <span style={{
            opacity: showCursor ? 1 : 0,
            color: '#5b7db1',
            transition: 'opacity 0.4s',
          }}>▌</span>
        </div>

        {/* Meta badge — cleaner */}
        <div style={{
          display: 'inline-block',
          padding: isMobile ? '8px 16px' : '10px 24px',
          border: '1px solid rgba(0,0,0,0.08)',
          borderRadius: '100px',
          fontSize: isMobile ? '12px' : 'clamp(13px, 1.5vw, 15px)',
          color: '#6b7a8d',
          letterSpacing: '0.03em',
          marginBottom: isMobile ? '32px' : '48px',
        }}>
          {hero.meta}
        </div>

        {/* Trust bar — wider spacing, slower hover */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'center',
          gap: isMobile ? '0 12px' : '0 20px',
          padding: isMobile ? '12px 0' : '16px 0',
          maxWidth: '700px',
          margin: '0 auto',
        }}>
          {hero.brands.map((brand, i) => (
            <span
              key={i}
              style={{
                fontSize: '13px',
                color: '#b0b8c4',
                fontWeight: 400,
                letterSpacing: '0.08em',
                transition: 'color 0.5s ease',
                cursor: 'default',
              }}
              onMouseEnter={e => { e.currentTarget.style.color = '#1e2a3a' }}
              onMouseLeave={e => { e.currentTarget.style.color = '#b0b8c4' }}
            >
              {brand}
            </span>
          ))}
        </div>
      </div>

      {/* Slow pulse animation */}
      <style>{`
        @keyframes slowPulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.15; }
        }
      `}</style>
    </section>
  )
}
