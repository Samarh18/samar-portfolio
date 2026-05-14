'use client'
import { FadeUp, StaggerGroup, StaggerItem } from './Animate'

const projects = [
  { title: 'Exploring Practical Applications for LLM-Generated Synthetic Data', tag: 'tag-amber', tagLabel: 'AI / ML', description: 'Designed and evaluated a reusable workflow for generating synthetic data with LLMs across two use cases: tabular augmentation and human-behavior simulation.', links: [{ label: 'Report', href: 'https://drive.google.com/file/d/1p81MhMbim8OLGKjR4-tdxB9-Q1Df2RCt/view?usp=sharing' }] },
  { title: 'Ethical AI in College Essay Scoring', tag: 'tag-red', tagLabel: 'Fairness / Ethics', description: 'Built an AI-powered essay evaluation tool using GPT and Gemini, then asked the harder question: where does it fail?', links: [{ label: 'Report', href: 'https://drive.google.com/file/d/1d4lrhifkrLkJXlfDusbLVZ0Kif3sPK5q/view?usp=sharing' }] },
  { title: 'Modeling Course Success with Probabilistic Programs', tag: 'tag-green', tagLabel: 'Education / ML', description: 'Built a Bayesian generative model predicting student success from study behaviors.', links: [{ label: 'Report', href: 'https://drive.google.com/file/d/1-s5BbponJY5rjscOq67AMlAhaqgsnGpw/view?usp=sharing' }] },
  { title: 'Computer-Aided Diagnosis: Diabetic Retinopathy Detection', tag: 'tag-amber', tagLabel: 'Computer Vision', description: 'Developed a ResNet50-ViT hybrid model achieving 97% accuracy on the APTOS 2019 benchmark dataset.', links: [{ label: 'Report', href: 'https://drive.google.com/file/d/1kmeLHCoFlZBkEs5XpcsIyK3tzyJr7i4x/view?usp=sharing' }] },
  { title: 'The Effect of Limited Early Color Perception on Object Detection', tag: 'tag-amber', tagLabel: 'Computer Vision', description: 'Comparing human and machine object detection performance when color information is restricted during early training.', links: [{ label: 'Report', href: 'https://drive.google.com/file/d/1Gyr-eQv8NPG-JUOIoSzMZQRt6l3k7OXJ/view?usp=sharing' }] },
  { title: 'Student Voices: Surveying Principles for a New Educational Institution', tag: 'tag-green', tagLabel: 'Education Research', description: 'A comparative survey study across MIT, Harvard, and Roxbury Community College examining student perspectives on proposed principles for an affordable new educational institution.', links: [{ label: 'Presentation', href: 'https://drive.google.com/file/d/1LlKn5U5Jndkl9ZqnbEJdHC2Riqjn93w-/view?usp=sharing' }] },
]

export default function Projects() {
  return (
    <section id="projects" style={{ padding: '5rem 0' }}>
      <div className="content-wrap">
        <FadeUp><p className="section-label" aria-label="Section: Projects">03 — PROJECTS</p></FadeUp>
        <FadeUp delay={0.05}>
          <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', lineHeight: 1.2, marginBottom: '3rem', letterSpacing: '-0.01em' }}>Projects</h2>
        </FadeUp>
        <StaggerGroup className="projects-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
          {projects.map((proj, i) => (
            <StaggerItem key={i}>
              <article aria-label={proj.title} style={{ background: '#F5F0E8', border: '1px solid #D8D3C8', borderRadius: '8px', padding: '1.5rem', display: 'flex', flexDirection: 'column', height: '100%', transition: 'border-color 0.2s, transform 0.2s, box-shadow 0.2s' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor='#1A1A18'; e.currentTarget.style.transform='translateY(-2px)'; e.currentTarget.style.boxShadow='0 4px 16px rgba(26,26,24,0.08)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor='#D8D3C8'; e.currentTarget.style.transform='translateY(0)'; e.currentTarget.style.boxShadow='none' }}>
                <div style={{ marginBottom: '0.75rem' }}><span className={`tag ${proj.tag}`}>{proj.tagLabel}</span></div>
                <h3 style={{ fontFamily: 'var(--serif)', fontSize: '1.1rem', marginBottom: '0.75rem', lineHeight: 1.35, letterSpacing: '-0.01em' }}>{proj.title}</h3>
                <p style={{ fontSize: '14px', color: '#3A3A38', lineHeight: 1.7, marginBottom: '1.25rem' }}>{proj.description}</p>
                {proj.links.length > 0 && (
                  <div style={{ marginTop: 'auto', display: 'flex', gap: '1rem' }}>
                    {proj.links.map(link => (
                      <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer"
                        style={{ fontFamily: 'var(--mono)', fontSize: '12px', color: '#B03A1F', borderBottom: '1px solid #B03A1F', paddingBottom: '1px', transition: 'opacity 0.2s' }}
                        onMouseEnter={e => e.currentTarget.style.opacity='0.7'} onMouseLeave={e => e.currentTarget.style.opacity='1'}>
                        {link.label} →
                      </a>
                    ))}
                  </div>
                )}
              </article>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  )
}
