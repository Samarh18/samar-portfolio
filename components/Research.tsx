'use client'
import { FadeUp, StaggerGroup, StaggerItem } from './Animate'

const publications = [
  { title: 'Advancing Research on Equitable AI Education Through a Focus on Implementation', venue: 'AAAI 2025', authors: 'Bosch, C. A., Gustafson-Quiett, M. C., Abu Hegly, S., et al.', description: 'Insights from a middle school computer vision module beta-test, examining how equitable AI education translates from research to real classroom implementation.', tag: 'tag-green', tagLabel: 'AI Education', link: 'https://dl.acm.org/doi/10.1609/aaai.v39i28.35184', linkLabel: 'Read paper' },
  { title: 'Supporting AI Literacy Teaching Through the Development of Assessments for Classroom Use', venue: 'AAAI 2025', authors: 'Masla, J., Bosch, C., Ravi, P., Abu Hegly, S., et al.', description: 'Developing and validating classroom assessments that help teachers gauge AI literacy in their students, bridging research and practice.', tag: 'tag-amber', tagLabel: 'AI Literacy', link: 'https://dl.acm.org/doi/10.1609/aaai.v39i28.35191', linkLabel: 'Read paper' },
  { title: 'Act Out An LLM', venue: 'AAAI 2025', authors: 'Wharton, S., Masla, J., Guterman, L., Gustafson-Quiett, M. C., Bosch, C., Abu Hegly, S., et al.', description: 'An activity in which students act as a large language model to generate a sentence based on a prompt. Students are introduced to the concept of a token in text generation through a next-token-voting activity repeated until a full sentence is generated.', tag: 'tag-green', tagLabel: 'AI Education', link: 'https://modelai.gettysburg.edu/', linkLabel: 'View activity' },
]

const presentations = [
  { title: 'Lessons Learned in The Path to Accessibility: Enhancing the RAISE Playground for All', venue: 'CATE 2025', description: 'Presented findings and lessons learned from the process of making the RAISE Playground accessible to blind and low-vision students.', tag: 'tag-red', tagLabel: 'Accessibility', link: 'https://drive.google.com/file/d/1fCr4QcKqJueqeKb1SqcCBSq8GuflgQFk/view?usp=sharing', linkLabel: 'View slides' },
]

const workshops = [
  { title: 'Introduction to the RAISE Playground', venue: 'MIT AI & Education Summit 2025', description: 'Led a hands-on workshop introducing the RAISE Playground, covering block-based programming, the Playground interface, example projects, and interactive coding challenges.', tag: 'tag-green', tagLabel: 'AI Education', link: 'https://docs.google.com/presentation/d/1CewqQQQN0uUPIkYbr1sVuvUsyh1XSAlJvgDBrigJxks/edit?usp=sharing', linkLabel: 'View slides' },
  { title: 'RAISE Playground demo', venue: 'MIT AI & Education Summit 2024', description: 'Demonstrated the core features of the RAISE Playground, showing how students can build interactive projects with sprites, blocks, sounds, motion, and AI-related extensions.', tag: 'tag-green', tagLabel: 'AI Education', link: '', linkLabel: '' },
]

const positions = [
  {
    lab: 'AIRE Lab', role: 'Research Assistant', period: 'Apr 2025 – Present', tag: 'tag-amber',
    bullets: [
      'Currently leading the design of an AIRE Lab pilot study examining whether an LLM-integrated assignment methodology strengthens critical thinking, verification behavior, and AI literacy among Arabic-speaking middle school students.',
      "Contributed to the evaluation of a patented LLM-integrated assignment methodology designed to preserve students' higher-order and critical thinking skills; analysis-informed assessment design and implementation insights.",
      'Developed a qualitative codebook and conducted thematic coding of 100+ student artifacts; supported inter-rater reliability checks in collaboration with the research team.',
    ]
  },
  {
    lab: 'MIT RAICA Lab', role: 'Graduate Research Assistant', period: 'Jan 2024 – Aug 2025', tag: 'tag-red',
    bullets: [
      'Designed and shipped two open-source Blockly accessibility plugins enabling independent programming for blind and low-vision students.',
      'Led an IRB-approved iterative co-design study across two phases; participants progressed from unable to use the platform to completing core tasks without assistance.',
      'Standardized pilot study data across projects into a reusable dataset schema; automated data logging with Python scripts.',
    ]
  },
]

const linkStyle: React.CSSProperties = { fontFamily: 'var(--mono)', fontSize: '13px', color: '#B03A1F', borderBottom: '1px solid #B03A1F', paddingBottom: '1px', transition: 'opacity 0.2s' }


export default function Research() {
  return (
    <section id="research" style={{ padding: '5rem 0', background: '#EFE9DF' }}>
      <div className="content-wrap">

        <FadeUp><p className="section-label" aria-label="Section: Research">02 — RESEARCH</p></FadeUp>

        <FadeUp delay={0.05}>
          <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', lineHeight: 1.2, marginBottom: '1rem', letterSpacing: '-0.01em' }}>Research</h2>
        </FadeUp>

        <FadeUp delay={0.1}>
          <p style={{ color: '#3A3A38', lineHeight: 1.75, marginBottom: '3rem' }}>
            Technology rarely works the same way for everyone, and understanding why and what to do about it is the underlying thread that connects my work. I approach problems from multiple angles, combining design, evaluation, and implementation, and drawing on whatever disciplines the question demands. That's taken me across AI, education, and accessibility: studying how tools perform in real classrooms, building systems that work for students they were never designed for, and asking whether AI-powered technologies actually deliver on what they promise. I'm interested in the full arc from research question to working system, and in the spaces where those two things don't yet meet.
          </p>
        </FadeUp>

        {/* Thesis */}
        <FadeUp delay={0.05}><h3 style={{ fontFamily: 'var(--mono)', fontSize: '14px', fontWeight: 500, color: '#5C5B59', letterSpacing: '0.08em', marginBottom: '1.25rem' }}>M.ENG THESIS</h3></FadeUp>
        <FadeUp delay={0.1}>
          <article aria-label="M.Eng. Thesis" style={{ border: '2px solid #B03A1F', borderRadius: '8px', padding: '1.75rem', marginBottom: '3rem', background: '#F5F0E8' }}>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '1rem' }}>
              <span className="tag tag-red">Accessibility</span>
              <span className="tag tag-green">AI Education</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.75rem' }}>
              <h3 style={{ fontFamily: 'var(--serif)', fontSize: '1.4rem', letterSpacing: '-0.01em', lineHeight: 1.3 }}>Blocks Without Barriers: Making Blockly Accessible for Blind and Visually Impaired Students</h3>
            </div>
            <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
              <span style={{ fontFamily: 'var(--mono)', fontSize: '12px', color: '#5C5B59' }}>2024 – 2025</span>
              <span style={{ fontFamily: 'var(--mono)', fontSize: '12px', color: '#5C5B59' }}>·</span>
              <a href="https://raica.mit.edu/" target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'var(--mono)', fontSize: '12px', color: '#5C5B59', borderBottom: '1px solid #D8D3C8' }}
                onMouseEnter={e => { e.currentTarget.style.color='#B03A1F'; e.currentTarget.style.borderColor='#B03A1F' }}
                onMouseLeave={e => { e.currentTarget.style.color='#5C5B59'; e.currentTarget.style.borderColor='#D8D3C8' }}>
                MIT RAICA Lab
              </a>
            </div>
            <p style={{ fontFamily: 'var(--mono)', fontSize: '11px', color: '#5C5B59', letterSpacing: '0.06em', marginBottom: '0.5rem' }}>ABSTRACT</p>
            <p style={{ color: '#3A3A38', lineHeight: 1.75, fontSize: '14px', marginBottom: '1.25rem' }}>
              Block-based programming environments are commonly used to introduce programming and AI concepts, but are often inaccessible to blind and visually impaired learners. This thesis explores how a Blockly-based environment can be adapted to help these students program independently. Two portable, co-designed plugins were developed: a custom screen reader providing real-time audio feedback using the Web Speech API, and an enhanced keyboard navigation plugin extended with student-tested features. Development followed an iterative, user-centered co-design process, with feedback from blind and visually impaired students directly shaping implementation priorities. By the final session, all participants were able to complete essential tasks to build functional programs independently.
            </p>
            <div style={{ display: "flex", gap: "1.25rem", alignItems: "center", flexWrap: "wrap" }}>
              <span style={{ fontFamily: "var(--mono)", fontSize: "12px", color: "#5C5B59" }}>Advisor: <a href="https://education.mit.edu/person/eric_klopfer/" target="_blank" rel="noopener noreferrer" style={{ color: "#5C5B59", borderBottom: "1px solid #D8D3C8" }} onMouseEnter={e => { e.currentTarget.style.color="#B03A1F"; e.currentTarget.style.borderColor="#B03A1F" }} onMouseLeave={e => { e.currentTarget.style.color="#5C5B59"; e.currentTarget.style.borderColor="#D8D3C8" }}>Eric Klopfer</a></span>
              <a href="https://drive.google.com/file/d/1iBOg6rg0I5fVOvxMZPn4lg8KquCNQ0dR/view?usp=sharing" target="_blank" rel="noopener noreferrer" style={linkStyle} onMouseEnter={e => e.currentTarget.style.opacity='0.7'} onMouseLeave={e => e.currentTarget.style.opacity='1'}>Read thesis →</a>
              <a href="https://samarh18.github.io/blockly-Keyboard-ScreenReader-plugins/" target="_blank" rel="noopener noreferrer" style={linkStyle} onMouseEnter={e => e.currentTarget.style.opacity='0.7'} onMouseLeave={e => e.currentTarget.style.opacity='1'}>Demo →</a>
              <a href="https://github.com/Samarh18/blockly-Keyboard-ScreenReader-plugins" target="_blank" rel="noopener noreferrer" style={{ ...linkStyle, color: '#5C5B59', borderColor: '#D8D3C8' }} onMouseEnter={e => { e.currentTarget.style.color='#B03A1F'; e.currentTarget.style.borderColor='#B03A1F' }} onMouseLeave={e => { e.currentTarget.style.color='#5C5B59'; e.currentTarget.style.borderColor='#D8D3C8' }}>GitHub →</a>
            </div>
          </article>
        </FadeUp>

        {/* Publications */}
        <FadeUp><h3 style={{ fontFamily: 'var(--mono)', fontSize: '14px', fontWeight: 500, color: '#5C5B59', letterSpacing: '0.08em', marginBottom: '1.5rem' }}>CONFERENCE PUBLICATIONS</h3></FadeUp>
        <StaggerGroup style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '3.5rem' }}>
          {publications.map((pub, i) => (
            <StaggerItem key={i}>
              <article style={{ background: '#F5F0E8', border: '1px solid #D8D3C8', borderRadius: '8px', padding: '1.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem', flexWrap: 'wrap', gap: '8px' }}>
                  <span className={`tag ${pub.tag}`}>{pub.tagLabel}</span>
                  <span style={{ fontFamily: 'var(--mono)', fontSize: '12px', color: '#5C5B59' }}>{pub.venue}</span>
                </div>
                <h4 style={{ fontFamily: 'var(--serif)', fontSize: '1.1rem', marginBottom: '0.4rem', lineHeight: 1.4 }}>{pub.title}</h4>
                <p style={{ fontFamily: 'var(--mono)', fontSize: '12px', color: '#5C5B59', marginBottom: '0.75rem' }}>{pub.authors}</p>
                <p style={{ fontSize: '14px', color: '#3A3A38', lineHeight: 1.7, marginBottom: '1rem' }}>{pub.description}</p>
                <a href={pub.link} target="_blank" rel="noopener noreferrer" style={linkStyle} onMouseEnter={e => e.currentTarget.style.opacity='0.7'} onMouseLeave={e => e.currentTarget.style.opacity='1'}>{pub.linkLabel} →</a>
              </article>
            </StaggerItem>
          ))}
        </StaggerGroup>

        {/* Presentations */}
        <FadeUp><h3 style={{ fontFamily: 'var(--mono)', fontSize: '14px', fontWeight: 500, color: '#5C5B59', letterSpacing: '0.08em', marginBottom: '1.5rem' }}>PRESENTATIONS</h3></FadeUp>
        <StaggerGroup style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '3.5rem' }}>
          {presentations.map((item, i) => (
            <StaggerItem key={i}>
              <article style={{ background: '#F5F0E8', border: '1px solid #D8D3C8', borderRadius: '8px', padding: '1.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem', flexWrap: 'wrap', gap: '8px' }}>
                  <span className={`tag ${item.tag}`}>{item.tagLabel}</span>
                  <span style={{ fontFamily: 'var(--mono)', fontSize: '12px', color: '#5C5B59' }}>{item.venue}</span>
                </div>
                <h4 style={{ fontFamily: 'var(--serif)', fontSize: '1.1rem', marginBottom: item.description || item.link ? '0.75rem' : 0, lineHeight: 1.4 }}>{item.title}</h4>
                {item.description && <p style={{ fontSize: '14px', color: '#3A3A38', lineHeight: 1.7, marginBottom: item.link ? '1rem' : 0 }}>{item.description}</p>}
                {item.link && <a href={item.link} target="_blank" rel="noopener noreferrer" style={linkStyle} onMouseEnter={e => e.currentTarget.style.opacity='0.7'} onMouseLeave={e => e.currentTarget.style.opacity='1'}>{item.linkLabel} →</a>}
              </article>
            </StaggerItem>
          ))}
        </StaggerGroup>

        {/* Workshops */}
        <FadeUp><h3 style={{ fontFamily: 'var(--mono)', fontSize: '14px', fontWeight: 500, color: '#5C5B59', letterSpacing: '0.08em', marginBottom: '1.5rem' }}>WORKSHOPS</h3></FadeUp>
        <StaggerGroup style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '3.5rem' }}>
          {workshops.map((item, i) => (
            <StaggerItem key={i}>
              <article style={{ background: '#F5F0E8', border: '1px solid #D8D3C8', borderRadius: '8px', padding: '1.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem', flexWrap: 'wrap', gap: '8px' }}>
                  <span className={`tag ${item.tag}`}>{item.tagLabel}</span>
                  <span style={{ fontFamily: 'var(--mono)', fontSize: '12px', color: '#5C5B59' }}>{item.venue}</span>
                </div>
                <h4 style={{ fontFamily: 'var(--serif)', fontSize: '1.1rem', marginBottom: item.description || item.link ? '0.75rem' : 0, lineHeight: 1.4 }}>{item.title}</h4>
                {item.description && <p style={{ fontSize: '14px', color: '#3A3A38', lineHeight: 1.7, marginBottom: item.link ? '1rem' : 0 }}>{item.description}</p>}
                {item.link && <a href={item.link} target="_blank" rel="noopener noreferrer" style={linkStyle} onMouseEnter={e => e.currentTarget.style.opacity='0.7'} onMouseLeave={e => e.currentTarget.style.opacity='1'}>{item.linkLabel} →</a>}
              </article>
            </StaggerItem>
          ))}
        </StaggerGroup>

        {/* Research positions */}
        <FadeUp><h3 style={{ fontFamily: 'var(--mono)', fontSize: '14px', fontWeight: 500, color: '#5C5B59', letterSpacing: '0.08em', marginBottom: '1.5rem' }}>RESEARCH POSITIONS</h3></FadeUp>
        <StaggerGroup>
          {positions.map((pos, i) => (
            <StaggerItem key={i}>
              <div style={{ borderTop: '1px solid #D8D3C8', padding: '1.5rem 0' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                  <div>
                    <div style={{ marginBottom: '0.6rem' }}>
                      <span className={`tag ${pos.tag}`}>{pos.lab}</span>
                    </div>
                    <h4 style={{ fontWeight: 500, fontSize: '15px' }}>{pos.role}</h4>
                  </div>
                  <span style={{ fontFamily: 'var(--mono)', fontSize: '12px', color: '#5C5B59', whiteSpace: 'nowrap' }}>{pos.period}</span>
                </div>
                <ul style={{ paddingLeft: '1.1rem' }}>
                  {pos.bullets.map((b, j) => <li key={j} style={{ fontSize: '14px', color: '#3A3A38', lineHeight: 1.75, marginBottom: '0.4rem' }}>{b}</li>)}
                </ul>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>

      </div>
    </section>
  )
}
