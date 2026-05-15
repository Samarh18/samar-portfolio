'use client'
import { FadeUp, StaggerGroup, StaggerItem } from './Animate'

const degrees = [
  {
    degree: 'M.Eng. Computation and Cognition',
    school: 'Massachusetts Institute of Technology (MIT)',
    graduated: 'Graduated Sep 2025',
    location: 'Cambridge, MA',
  },
  {
    degree: 'B.Sc. Computation and Cognition',
    school: 'Massachusetts Institute of Technology (MIT)',
    graduated: 'Graduated Jun 2023',
    location: 'Cambridge, MA',
  },
]

export default function Education() {
  return (
    <section id="education" style={{ padding: '5rem 0' }}>
      <div className="content-wrap">

        <FadeUp>
          <p className="section-label" aria-label="Section: Education">03 — EDUCATION</p>
        </FadeUp>

        <FadeUp delay={0.05}>
          <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', lineHeight: 1.2, marginBottom: '2.5rem', letterSpacing: '-0.01em' }}>Education</h2>
        </FadeUp>

        <StaggerGroup>
          {degrees.map((d, i) => (
            <StaggerItem key={i}>
              <div style={{ borderTop: '1px solid #D8D3C8', padding: '1.75rem 0', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.75rem' }}>
                <div>
                  <h3 style={{ fontFamily: 'var(--serif)', fontSize: '1.2rem', lineHeight: 1.3, marginBottom: '0.35rem', letterSpacing: '-0.01em' }}>{d.degree}</h3>
                  <p style={{ fontFamily: 'var(--sans)', fontSize: '14px', color: '#3A3A38', marginBottom: '0.25rem' }}>{d.school}</p>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <p style={{ fontFamily: 'var(--mono)', fontSize: '12px', color: '#5C5B59', marginBottom: '0.2rem' }}>{d.graduated}</p>
                  <p style={{ fontFamily: 'var(--mono)', fontSize: '12px', color: '#5C5B59' }}>{d.location}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
          <div style={{ borderTop: '1px solid #D8D3C8' }} />
        </StaggerGroup>

      </div>
    </section>
  )
}
