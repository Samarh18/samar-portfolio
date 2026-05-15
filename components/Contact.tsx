'use client'
import { useState } from 'react'
import { FadeUp } from './Animate'

export default function Contact() {
  const [copied, setCopied] = useState(false)

  const copyEmail = () => {
    const email = 'samar.h18@gmail.com'
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(email).then(() => {
        setCopied(true)
        setTimeout(() => setCopied(false), 2500)
      })
    } else {
      const textarea = document.createElement('textarea')
      textarea.value = email
      textarea.style.position = 'fixed'
      textarea.style.opacity = '0'
      document.body.appendChild(textarea)
      textarea.focus()
      textarea.select()
      document.execCommand('copy')
      document.body.removeChild(textarea)
      setCopied(true)
      setTimeout(() => setCopied(false), 2500)
    }
  }

  return (
    <section id="contact" className="dot-pattern" style={{ padding: '5rem 0' }}>
      <div className="content-wrap">
        <FadeUp><p className="section-label" aria-label="Section: Contact">06 — CONTACT</p></FadeUp>
        <FadeUp delay={0.05}>
          <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(2rem, 5vw, 3.5rem)', lineHeight: 1.1, marginBottom: '1rem', letterSpacing: '-0.02em' }}>Let's talk.</h2>
          <p style={{ color: '#4A4A48', maxWidth: '480px', lineHeight: 1.75, marginBottom: '3rem' }}>
            I'm currently open to research collaborations, particularly around AI education, accessibility, and human-centered technology. I'm also happy to talk through my work, swap ideas with people asking similar questions, or just connect if our paths seem like they should cross.
          </p>
        </FadeUp>
        <FadeUp delay={0.12}>
          <div style={{ position: 'relative', display: 'inline-block', marginBottom: '3rem' }}>
            <button
              onClick={copyEmail}
              aria-label="Copy email address to clipboard"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', fontFamily: 'var(--mono)', fontSize: '14px', fontWeight: 500, background: '#1A1A18', color: '#F5F0E8', padding: '14px 32px', borderRadius: '100px', border: '2px solid #1A1A18', cursor: 'pointer', transition: 'background 0.2s, border-color 0.2s' }}
              onMouseEnter={e => { e.currentTarget.style.background='#B03A1F'; e.currentTarget.style.borderColor='#B03A1F' }}
              onMouseLeave={e => { e.currentTarget.style.background='#1A1A18'; e.currentTarget.style.borderColor='#1A1A18' }}
            >
              samar.h18@gmail.com
              <span aria-hidden="true" style={{ fontSize: '16px' }}>{copied ? '✓' : '⧉'}</span>
            </button>
            {copied && (
              <span role="status" aria-live="polite" style={{ position: 'absolute', top: '-2.2rem', left: '50%', transform: 'translateX(-50%)', fontFamily: 'var(--mono)', fontSize: '12px', color: '#2D5A0A', background: '#EAF0DC', padding: '3px 12px', borderRadius: '100px', whiteSpace: 'nowrap', animation: 'fadeUp 0.2s ease' }}>
                Email copied!
              </span>
            )}
          </div>
        </FadeUp>
        <FadeUp delay={0.18}>
          <div className="contact-footer-links" style={{ display: 'flex', gap: '2rem', borderTop: '1px solid #D8D3C8', paddingTop: '2rem' }}>
            {[
              { label: 'GitHub',      href: 'https://github.com/Samarh18' },
              { label: 'LinkedIn',    href: 'https://www.linkedin.com/in/samar-abu-hegly-99558716b/' },
              { label: 'CV / Resume', href: '/cv.pdf' },
            ].map(link => (
              <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer"
                style={{ fontFamily: 'var(--mono)', fontSize: '14px', color: '#5C5B59', transition: 'color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.color='#B03A1F'}
                onMouseLeave={e => e.currentTarget.style.color='#5C5B59'}>
                {link.label}
              </a>
            ))}
          </div>
          <p style={{ fontFamily: 'var(--mono)', fontSize: '11px', color: '#D8D3C8', marginTop: '3rem' }}>© 2025 Samar Abu Hegly</p>
        </FadeUp>
      </div>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateX(-50%) translateY(6px); }
          to   { opacity: 1; transform: translateX(-50%) translateY(0); }
        }
      `}</style>
    </section>
  )
}
