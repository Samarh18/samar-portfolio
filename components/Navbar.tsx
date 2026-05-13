'use client'
import { useEffect, useState } from 'react'

const links = [
  { label: 'About',    href: '#about' },
  { label: 'Research', href: '#research' },
  { label: 'Projects', href: '#projects' },
  { label: 'Teaching', href: '#experience' },
  { label: 'Contact',  href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <a href="#main-content" className="skip-link">Skip to main content</a>

      <nav
        aria-label="Main navigation"
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
          padding: '0 2rem', height: '56px',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          background: scrolled ? 'rgba(245,240,232,0.92)' : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          borderBottom: scrolled ? '1px solid #D8D3C8' : 'none',
          transition: 'all 0.3s ease',
        }}
      >
        <a href="#" aria-label="Samar Abu Hegly — home"
          style={{ fontFamily: 'var(--serif)', fontSize: '17px', color: '#1A1A18', letterSpacing: '-0.01em', zIndex: 101 }}>
          Samar Abu Hegly
        </a>

        {/* Desktop links */}
        <div className="nav-links" style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          {links.map(l => (
            <a key={l.href} href={l.href}
              style={{ fontFamily: 'var(--sans)', fontSize: '14px', color: '#5C5B59', fontWeight: 500, transition: 'color 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.color = '#B03A1F'}
              onMouseLeave={e => e.currentTarget.style.color = '#5C5B59'}>
              {l.label}
            </a>
          ))}
          <a href="https://drive.google.com/file/d/1VrNTxfKC7LRwmHa-xgu8xpQ2PDuDbT-4/view?usp=sharing"
            target="_blank" rel="noopener noreferrer"
            aria-label="Download CV (opens in new tab)"
            style={{ fontFamily: 'var(--mono)', fontSize: '12px', color: '#B03A1F', border: '1.5px solid #B03A1F', padding: '5px 14px', borderRadius: '100px', transition: 'all 0.2s' }}
            onMouseEnter={e => { e.currentTarget.style.background = '#B03A1F'; e.currentTarget.style.color = '#F5F0E8' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#B03A1F' }}>
            CV
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="nav-hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer', padding: '8px', zIndex: 101 }}
        >
          <div style={{ width: '22px', display: 'flex', flexDirection: 'column', gap: '5px' }}>
            <span style={{ display: 'block', height: '2px', background: '#1A1A18', borderRadius: '2px', transition: 'all 0.2s', transform: menuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }} />
            <span style={{ display: 'block', height: '2px', background: '#1A1A18', borderRadius: '2px', transition: 'all 0.2s', opacity: menuOpen ? 0 : 1 }} />
            <span style={{ display: 'block', height: '2px', background: '#1A1A18', borderRadius: '2px', transition: 'all 0.2s', transform: menuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }} />
          </div>
        </button>
      </nav>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div style={{ position: 'fixed', top: '56px', left: 0, right: 0, background: 'rgba(245,240,232,0.97)', backdropFilter: 'blur(12px)', zIndex: 99, borderBottom: '1px solid #D8D3C8', padding: '1.5rem 2rem 2rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {links.map(l => (
              <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}
                style={{ fontFamily: 'var(--sans)', fontSize: '18px', color: '#1A1A18', fontWeight: 500 }}>
                {l.label}
              </a>
            ))}
            <a href="https://drive.google.com/file/d/1VrNTxfKC7LRwmHa-xgu8xpQ2PDuDbT-4/view?usp=sharing"
              target="_blank" rel="noopener noreferrer" onClick={() => setMenuOpen(false)}
              style={{ fontFamily: 'var(--mono)', fontSize: '14px', color: '#B03A1F', alignSelf: 'flex-start', border: '1.5px solid #B03A1F', padding: '6px 18px', borderRadius: '100px' }}>
              CV
            </a>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .nav-links { display: none !important; }
          .nav-hamburger { display: flex !important; }
        }
      `}</style>
    </>
  )
}
