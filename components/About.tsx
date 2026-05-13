'use client'
import { useState } from 'react'
import { FadeUp, StaggerGroup, StaggerItem } from './Animate'

export default function About() {
  const [hovered, setHovered] = useState(false)

  return (
    <section id="about" style={{ padding: '5rem 0' }}>
      <div className="content-wrap">
        <FadeUp>
          <p className="section-label" aria-label="Section: About">01 — ABOUT</p>
        </FadeUp>

        <div className="about-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 280px', gap: '4rem', alignItems: 'start' }}>

          {/* Left: text */}
          <div>
            <FadeUp delay={0.05}>
              <h2
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                aria-label="Marhaba - Hello in Arabic"
                style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: 1.2, marginBottom: '1.5rem', letterSpacing: '-0.01em', cursor: 'default', position: 'relative', display: 'inline-block', minWidth: '260px', height: '1.3em' }}
              >
                <span style={{ position: 'absolute', left: 0, transition: 'opacity 0.35s ease, transform 0.35s ease', opacity: hovered ? 0 : 1, transform: hovered ? 'translateX(-20px)' : 'translateX(0)', whiteSpace: 'nowrap' }}>
                  Marhaba 👋
                </span>
                <span style={{ position: 'absolute', left: 0, fontFamily: '"Playpen Sans Arabic", "Noto Sans Arabic", sans-serif', fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', color: '#B03A1F', transition: 'opacity 0.35s ease, transform 0.35s ease', opacity: hovered ? 1 : 0, transform: hovered ? 'translateX(0)' : 'translateX(20px)', whiteSpace: 'nowrap', direction: 'rtl' }}>
                  مرحبا 👋
                </span>
              </h2>
            </FadeUp>

            <StaggerGroup>
              <StaggerItem>
                <p style={{ color: '#3A3A38', lineHeight: 1.8, marginBottom: '1rem' }}>
                  I'm Samar <span style={{ fontFamily: 'var(--mono)', fontSize: '12px', color: '#5C5B59' }}>(pronounced similar to summer)</span>. I studied Computation and Cognition at MIT, where I completed both my bachelor's and master's degrees. Currently, I am working across several research projects, teaching, and volunteering at my local community center, where I help bring technology literacy and skills to the community.
                </p>
              </StaggerItem>
              <StaggerItem>
                <p style={{ color: '#3A3A38', lineHeight: 1.8, marginBottom: '1rem' }}>
                  I've always believed technology can change the world for the better, but the harder question, the one I've spent years trying to answer, is how I can be part of making that change. Exploring across fields, I kept arriving at the same place: the most positively impactful technologies are the ones designed as tools in service of people, not as ends in themselves. That's what drew me to human-centered technologies.
                </p>
              </StaggerItem>
              <StaggerItem>
                <p style={{ color: '#3A3A38', lineHeight: 1.8, marginBottom: '1rem' }}>
                  I'm a <strong style={{ color: '#B03A1F', fontWeight: 600 }}>researcher</strong> at heart, curious and willing to follow a problem wherever it leads. I'm also a <strong style={{ color: '#8C5200', fontWeight: 600 }}>builder</strong>. I think in systems and prototypes and want to see ideas become real products. And I'm an <strong style={{ color: '#2D5A0A', fontWeight: 600 }}>educator</strong>, because teaching has been one of the most grounding parts of my journey; building with and for people means meeting them where they are. I work best across disciplines, and I believe the people a system is meant to serve should have a voice in shaping it, whenever that's possible.
                </p>
              </StaggerItem>
              <StaggerItem>
                <p style={{ color: '#3A3A38', lineHeight: 1.8 }}>
                  When I'm not at my desk, you'll find me on long walks by the water, spoiling my dog, or deep in a book (I'm always open to new recommendations!).
                </p>
              </StaggerItem>
            </StaggerGroup>

            <FadeUp delay={0.2}>
              <nav aria-label="Social links" style={{ marginTop: '2rem', display: 'flex', gap: '1.25rem', flexWrap: 'wrap' }}>
                {[
                  { label: 'GitHub',   href: 'https://github.com/Samarh18' },
                  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/samar-abu-hegly-99558716b/' },
                  { label: 'Email',    href: 'mailto:samar.h18@gmail.com' },
                ].map(link => (
                  <a key={link.label} href={link.href}
                    style={{ fontFamily: 'var(--mono)', fontSize: '14px', color: '#5C5B59', borderBottom: '1px solid #D8D3C8', paddingBottom: '2px', transition: 'color 0.2s, border-color 0.2s' }}
                    onMouseEnter={e => { e.currentTarget.style.color = '#B03A1F'; e.currentTarget.style.borderColor = '#B03A1F' }}
                    onMouseLeave={e => { e.currentTarget.style.color = '#5C5B59'; e.currentTarget.style.borderColor = '#D8D3C8' }}>
                    {link.label}
                  </a>
                ))}
              </nav>
            </FadeUp>
          </div>

          {/* Right: sticky photo — uses CSS position:sticky, no JS needed */}
          <div className="about-photo" style={{ position: 'sticky', top: '88px', alignSelf: 'start' }}>
            <FadeUp delay={0.1}>
              <div className="photo-wrap" style={{ position: 'relative' }}>
                <img
                  src="/photo.jpg"
                  alt="Samar Abu Hegly smiling outdoors, holding her dog Mario"
                  className="photo-img"
                  style={{ width: '100%', aspectRatio: '3/4', objectFit: 'cover', objectPosition: 'top', borderRadius: '6px', display: 'block', transition: 'transform 0.4s cubic-bezier(0.34,1.56,0.64,1)' }}
                />

                {/* Labels appear on hover — positioned on RIGHT side of image */}
                <div aria-hidden="true">
                  {/* "Me!" — upper right, arrow curves left into Samar's face */}
                  <div className="label-samar" style={{ position: 'absolute', top: '10%', right: '-105px', opacity: 0, transition: 'opacity 0.3s ease 0.1s', pointerEvents: 'none', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                    <span style={{ fontFamily: '"Caveat", cursive', fontSize: '20px', color: '#B03A1F', marginBottom: '2px', letterSpacing: '0.02em' }}>Me!</span>
                    {/* Arrow curves from right label leftward into image */}
                    <svg width="90" height="36" viewBox="0 0 90 36" fill="none">
                      <path d="M85 8 C60 4, 30 4, 10 24" stroke="#B03A1F" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M13 18 C12 22, 9 25, 10 24 C11 23, 7 24, 5 27" stroke="#B03A1F" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>

                  {/* "Mario <3" — lower right, arrow curves left to dog */}
                  <div className="label-mario" style={{ position: 'absolute', bottom: '20%', right: '-115px', opacity: 0, transition: 'opacity 0.3s ease 0.2s', pointerEvents: 'none', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                    <span style={{ fontFamily: '"Caveat", cursive', fontSize: '20px', color: '#2D5A0A', marginBottom: '2px', letterSpacing: '0.02em' }}>Mario ♡</span>
                    <svg width="90" height="36" viewBox="0 0 90 36" fill="none">
                      <path d="M85 28 C60 32, 30 32, 10 12" stroke="#2D5A0A" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M13 18 C12 14, 9 11, 10 12 C11 13, 7 12, 5 9" stroke="#2D5A0A" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </div>
            </FadeUp>
          </div>

        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@500&family=Playpen+Sans+Arabic:wght@400;500&display=swap');

        .photo-wrap:hover .photo-img { transform: rotate(1.5deg) scale(1.02); }
        .photo-wrap:hover .label-samar,
        .photo-wrap:hover .label-mario { opacity: 1 !important; }

        @media (prefers-reduced-motion: reduce) {
          .photo-img { transition: none; }
          .label-samar, .label-mario { transition: none; }
        }
      `}</style>
    </section>
  )
}
