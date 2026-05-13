'use client'
import { useEffect, useRef } from 'react'
import { HeroEntrance } from './Animate'

const COLORS = ['#B03A1F', '#D4872A', '#3B6D11', '#C94B2A', '#8C5200', '#2D5A0A']
const GRID = 26

interface Dot {
  x: number; y: number; ox: number; oy: number
  color: string; radius: number; delay: number
  opacity: number; born: boolean; birthTime: number | null
}

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const canvasRef  = useRef<HTMLCanvasElement>(null)
  const stateRef   = useRef({
    dots: [] as Dot[], mouse: { x: -999, y: -999 },
    parallax: { x: 0, y: 0 }, entered: false,
    startTime: null as number | null,
    W: 0, H: 0, rafId: 0, prefersReduced: false,
  })

  useEffect(() => {
    const s = stateRef.current
    const section = sectionRef.current
    const canvas  = canvasRef.current
    if (!section || !canvas) return
    s.prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const ctx = canvas.getContext('2d')!

    function resize() {
      const rect = section!.getBoundingClientRect()
      s.W = rect.width; s.H = rect.height
      canvas!.width  = s.W * devicePixelRatio
      canvas!.height = s.H * devicePixelRatio
      ctx.scale(devicePixelRatio, devicePixelRatio)
      buildDots()
    }

    function buildDots() {
      s.dots = []
      if (s.prefersReduced) return
      const { W, H } = s
      const cx = W / 2, cy = H / 2
      const clusters = [
        { x: cx * 1.65, y: cy * 0.35 },
        { x: cx * 0.25, y: cy * 1.65 },
        { x: cx * 1.85, y: cy * 1.75 },
        { x: cx * 0.55, y: cy * 0.45 },
      ]
      const cols = Math.ceil(W / GRID) + 2
      const rows = Math.ceil(H / GRID) + 2
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const bx = c * GRID + (r % 2) * (GRID / 2)
          const by = r * GRID
          const x  = bx + (Math.random() - 0.5) * 6
          const y  = by + (Math.random() - 0.5) * 6
          let minDist = Infinity
          clusters.forEach(cl => { const d = Math.hypot(x - cl.x, y - cl.y); if (d < minDist) minDist = d })
          const maxR = Math.min(W, H) * 0.55
          const cf   = Math.max(0, 1 - minDist / maxR)
          const gd   = Math.hypot(x - cx, y - cy)
          const gf   = Math.max(0, 1 - gd / (Math.max(W, H) * 0.72))
          const prob = Math.pow(cf * 0.7 + gf * 0.3, 1.4)
          if (Math.random() > prob * 0.85 + 0.02) continue
          s.dots.push({
            x, y, ox: x, oy: y,
            color:  COLORS[Math.floor(Math.random() * COLORS.length)],
            radius: Math.random() * 1.5 + 0.8,
            delay:  minDist * 3.5 + Math.random() * 800,
            opacity: 0, born: false, birthTime: null,
          })
        }
      }
    }

    function animate(ts: number) {
      if (!s.startTime) s.startTime = ts
      const elapsed = ts - s.startTime
      const { W, H, mouse, parallax, entered, dots } = s
      ctx.clearRect(0, 0, W, H)
      dots.forEach(dot => {
        if (!dot.born && elapsed > dot.delay) { dot.born = true; dot.birthTime = ts }
        if (!dot.born) return
        const age    = ts - dot.birthTime!
        const appear = Math.min(1, age / 900)
        const dist   = Math.hypot((dot.ox + parallax.x) - mouse.x, (dot.oy + parallax.y) - mouse.y)
        const fade   = entered ? Math.min(1, Math.max(0, (dist - 12) / 80)) : 1
        const target = appear * fade * 0.82
        dot.opacity += (target - dot.opacity) * 0.08
        dot.x = dot.ox + parallax.x
        dot.y = dot.oy + parallax.y
        if (dot.opacity < 0.01) return
        ctx.beginPath()
        ctx.arc(dot.x, dot.y, dot.radius, 0, Math.PI * 2)
        ctx.fillStyle = dot.color
        ctx.globalAlpha = dot.opacity
        ctx.fill()
        ctx.globalAlpha = 1
      })
      s.rafId = requestAnimationFrame(animate)
    }

    function onMove(e: MouseEvent) {
      const rect = section!.getBoundingClientRect()
      const mx = e.clientX - rect.left, my = e.clientY - rect.top
      s.mouse.x = mx; s.mouse.y = my
      s.parallax.x = (mx / s.W - 0.5) * 16
      s.parallax.y = (my / s.H - 0.5) * 10
    }

    resize()
    window.addEventListener('resize', resize)
    section.addEventListener('mousemove', onMove)
    section.addEventListener('mouseenter', () => { s.entered = true })
    section.addEventListener('mouseleave', () => {
      s.entered = false; s.mouse.x = -999; s.mouse.y = -999
      s.parallax.x = 0; s.parallax.y = 0
    })
    s.rafId = requestAnimationFrame(animate)
    return () => { cancelAnimationFrame(s.rafId); window.removeEventListener('resize', resize) }
  }, [])

  return (
    <section ref={sectionRef} aria-label="Introduction" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'relative', overflow: 'hidden', background: '#F5F0E8' }}>
      <canvas ref={canvasRef} aria-hidden="true" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }} />
      <div aria-hidden="true" style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '180px', background: 'linear-gradient(to bottom, transparent, #F5F0E8)', pointerEvents: 'none', zIndex: 1 }} />

      <div className="content-wrap" style={{ position: 'relative', zIndex: 2 }}>

        <HeroEntrance delay={0.05}>
          <h1 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(3rem, 7vw, 5.5rem)', lineHeight: 1.08, letterSpacing: '-0.02em', color: '#1A1A18', marginBottom: '1.75rem' }}>
            Samar<br />
            <span style={{ color: '#B03A1F', fontStyle: 'italic' }}>Abu Hegly</span>
          </h1>
        </HeroEntrance>

        <HeroEntrance delay={0.18}>
          <p style={{ fontSize: '1.15rem', color: '#3A3A38', maxWidth: '600px', lineHeight: 1.7, marginBottom: '2.5rem' }}>
            I research and build at the intersection of people and technology, starting from the gap between what a system was built for and how it serves the people using it, with a focus on making AI technologies more{' '}
            <strong style={{ color: '#2D5A0A', fontWeight: 600 }}>human</strong>,{' '}
            <strong style={{ color: '#8C5200', fontWeight: 600 }}>ethical</strong>, and{' '}
            <strong style={{ color: '#7A2510', fontWeight: 600 }}>accessible</strong>.
          </p>
        </HeroEntrance>

        <HeroEntrance delay={0.3}>
          <a href="#contact"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontFamily: 'var(--mono)', fontSize: '13px', fontWeight: 500, background: 'transparent', color: '#1A1A18', padding: '12px 28px', borderRadius: '100px', border: '2px solid #1A1A18', transition: 'all 0.2s' }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = '#B03A1F'; e.currentTarget.style.color = '#B03A1F' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = '#1A1A18'; e.currentTarget.style.color = '#1A1A18' }}>
            Get in touch <span aria-hidden="true">→</span>
          </a>
        </HeroEntrance>

      </div>

      <style>{`
        @media (prefers-reduced-motion: reduce) {
          .hero-tag { transition: none; }
          .hero-tag:hover { transform: none; box-shadow: none; }
        }
      `}</style>
    </section>
  )
}
