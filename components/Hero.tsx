'use client'
import { HeroEntrance } from './Animate'

const researchTags = [
  { label: 'HCI', cls: 'tag-gray' },
  { label: 'AI / ML', cls: 'tag-amber' },
  { label: 'Education', cls: 'tag-green' },
  { label: 'Accessibility', cls: 'tag-red' },
]

export default function Hero() {
  return (
    <section aria-label="Introduction" className="dot-pattern" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'relative', overflow: 'hidden', backgroundColor: '#F5F0E8' }}>

      <div className="content-wrap" style={{ position: 'relative', zIndex: 2 }}>

        <HeroEntrance delay={0.05}>
          <h1 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(3rem, 7vw, 5.5rem)', lineHeight: 1.08, letterSpacing: '-0.02em', color: '#1A1A18', marginBottom: '1rem' }}>
            Samar<br />
            <span style={{ color: '#B03A1F', fontStyle: 'italic' }}>Abu Hegly</span>
          </h1>
        </HeroEntrance>

        <HeroEntrance delay={0.13}>
          <div role="list" aria-label="Research areas" style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '1.75rem' }}>
            {researchTags.map(t => (
              <span key={t.label} role="listitem" className={`tag ${t.cls}`}>{t.label}</span>
            ))}
          </div>
        </HeroEntrance>

        <HeroEntrance delay={0.22}>
          <p style={{ fontSize: '1.15rem', color: '#3A3A38', maxWidth: '600px', lineHeight: 1.7, marginBottom: '2.5rem' }}>
            I research and build human-centered technologies for real-world use. My work examines the gap between technical promises and lived experience, from AI in classrooms to tools designed for users excluded by existing systems.
          </p>
        </HeroEntrance>

        <HeroEntrance delay={0.32}>
          <a href="#contact"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontFamily: 'var(--mono)', fontSize: '13px', fontWeight: 500, background: 'transparent', color: '#1A1A18', padding: '12px 28px', borderRadius: '100px', border: '2px solid #1A1A18', transition: 'all 0.2s' }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = '#B03A1F'; e.currentTarget.style.color = '#B03A1F' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = '#1A1A18'; e.currentTarget.style.color = '#1A1A18' }}>
            Get in touch <span aria-hidden="true">→</span>
          </a>
        </HeroEntrance>

      </div>
    </section>
  )
}
