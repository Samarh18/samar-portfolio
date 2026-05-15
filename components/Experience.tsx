'use client'

const inspiritBullets = [
  'Taught foundational AI/ML concepts to 320+ students across 32+ cohorts; mentored student projects spanning object/cancer detection, distracted-driver analysis, and voice interfaces, guiding the full ML pipeline from data preparation through responsible-AI evaluation.',
  'Maintained and redesigned portions of the AI/ML curriculum; reviewed and debugged course materials and prepared instructor-facing resources, consistently receiving highly positive feedback.',
  'Progressed from Instructor to Program Manager, Curriculum Manager, and ultimately Weekend Lead; managed cohorts of 250+ students and led scheduling, onboarding, and coordination efforts.',
  "Provided personalized 1:1 instruction, adapting AI/ML concepts to each learner's background and pace.",
]

const mitRoles = [
  {
    code: '6.00',
    title: 'Introduction to Computer Science and Programming',
    role: 'Lab Assistant',
    period: 'MIT',
  },
  {
    code: '9.40',
    title: 'Introduction to Neural Computation',
    role: 'Lab Assistant & Grader',
    period: 'MIT',
  },
  {
    code: '6.C01',
    title: 'Modeling with Machine Learning',
    role: 'Grader',
    period: 'MIT',
  },
]

export default function Experience() {
  return (
    <section id="experience" style={{ padding: '5rem 0', background: '#EFE9DF' }}>
      <div className="content-wrap">

        <p className="section-label" aria-label="Section: Teaching Experience">05 — TEACHING EXPERIENCE</p>

        <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', lineHeight: 1.2, marginBottom: '3rem', letterSpacing: '-0.01em' }}>
          Teaching Experience
        </h2>

        {/* Inspirit AI — featured card */}
        <article aria-label="Inspirit AI" style={{
          background: '#F5F0E8',
          border: '1px solid #D8D3C8',
          borderRadius: '8px',
          padding: '1.75rem',
          marginBottom: '2rem',
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem', flexWrap: 'wrap', gap: '0.5rem' }}>
            <div>
              <div style={{ display: 'flex', gap: '8px', marginBottom: '0.4rem', flexWrap: 'wrap' }}>
                <span className="tag tag-amber">Inspirit AI</span>
                <span className="tag tag-green">Industry</span>
              </div>
              <h3 style={{ fontWeight: 500, fontSize: '15px' }}>Instructor → Weekend Lead, Program &amp; Curriculum Manager</h3>
            </div>
            <span style={{ fontFamily: 'var(--mono)', fontSize: '12px', color: '#5C5B59', whiteSpace: 'nowrap' }}>Mar 2021 – Present</span>
          </div>
          <ul style={{ paddingLeft: '1.1rem' }}>
            {inspiritBullets.map((b, i) => (
              <li key={i} style={{ fontSize: '14px', color: '#3A3A38', lineHeight: 1.75, marginBottom: '0.3rem' }}>{b}</li>
            ))}
          </ul>
        </article>

        {/* MIT Course Roles */}
        <article aria-label="MIT Teaching Roles" style={{
          background: '#F5F0E8',
          border: '1px solid #D8D3C8',
          borderRadius: '8px',
          padding: '1.75rem',
          marginBottom: '2rem',
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.25rem', flexWrap: 'wrap', gap: '0.5rem' }}>
            <div>
              <div style={{ display: 'flex', gap: '8px', marginBottom: '0.4rem' }}>
                <span className="tag tag-red">MIT</span>
                <span className="tag tag-gray">Course Staff</span>
              </div>
              <h3 style={{ fontWeight: 500, fontSize: '15px' }}>Lab Assistant &amp; Grader</h3>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {mitRoles.map((course, i) => (
              <div
                key={i}
                style={{
                  borderTop: '1px solid #D8D3C8',
                  padding: '0.85rem 0',
                  display: 'grid', // course-row
                  gridTemplateColumns: '52px 1fr auto',
                  gap: '1rem',
                  alignItems: 'center',
                }}
              >
                <span style={{ fontFamily: 'var(--mono)', fontSize: '12px', color: '#B03A1F', fontWeight: 500 }}>{course.code}</span>
                <span style={{ fontSize: '14px', color: '#1A1A18' }}>{course.title}</span>
                <span style={{ fontFamily: 'var(--mono)', fontSize: '12px', color: '#5C5B59', whiteSpace: 'nowrap' }}>{course.role}</span>
              </div>
            ))}
          </div>
        </article>

        {/* HKN */}
        <article aria-label="HKN Honor Society" style={{
          background: '#F5F0E8',
          border: '1px solid #D8D3C8',
          borderRadius: '8px',
          padding: '1.75rem',
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem', flexWrap: 'wrap', gap: '0.5rem' }}>
            <div>
              <div style={{ display: 'flex', gap: '8px', marginBottom: '0.4rem' }}>
                <span className="tag tag-amber">IEEE-HKN</span>
                <span className="tag tag-gray">Honor Society</span>
              </div>
              <h3 style={{ fontWeight: 500, fontSize: '15px' }}>Member &amp; Peer Tutor · Eta Kappa Nu</h3>
            </div>
            <span style={{ fontFamily: 'var(--mono)', fontSize: '12px', color: '#5C5B59', whiteSpace: 'nowrap' }}>2021 – 2022 · MIT</span>
          </div>
          <p style={{ fontSize: '14px', color: '#3A3A38', lineHeight: 1.75 }}>
            Selected as a member of the MIT chapter of HKN, the electrical engineering and computer science honor society. Provided peer tutoring to fellow members across a variety of EECS courses, adapting explanations to each student's background and pace.
          </p>
        </article>

      </div>
    </section>
  )
}
