import React from 'react';
import heroImage from '../assets/hero.png';

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="section"
      style={{ backgroundColor: 'var(--color-background)', position: 'relative' }}
    >
      <div
        className="container"
        style={{ display: 'flex', flexWrap: 'wrap', gap: '4rem', alignItems: 'center' }}
      >
        {/* Photo / image column */}
        <div style={{ flex: '1 1 400px' }}>
          <div
            style={{
              position: 'relative',
              borderRadius: 'var(--radius-lg)',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-md)',
            }}
          >
            <img
              src={heroImage}
              alt="Ernest — AI coach and local guide"
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
            <div
              className="glass"
              style={{
                position: 'absolute',
                bottom: '2rem',
                left: '-1rem',
                padding: '1.5rem',
                borderRadius: 'var(--radius-md)',
                maxWidth: '260px',
              }}
            >
              <p style={{ fontStyle: 'italic', color: 'var(--color-dark)', margin: 0 }}>
                "Learning AI doesn't mean leaving our humanity behind; it means
                giving our minds room to breathe."
              </p>
            </div>
          </div>
        </div>

        {/* Text column */}
        <div style={{ flex: '1 1 500px' }}>
          <h2
            style={{ fontSize: '2.5rem', color: 'var(--color-dark)', marginBottom: '1.5rem' }}
          >
            Rooted in Local Community
          </h2>
          <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem', color: 'var(--color-text)' }}>
            My name is Ernest, and I believe that the rapid advancement of Artificial
            Intelligence shouldn't feel overwhelming. Just as a good tutor guides you
            through the nuances of a complex piece of music, I am here to demystify
            these powerful new tools.
          </p>
          <p style={{ fontSize: '1.1rem', marginBottom: '2rem', color: 'var(--color-text)' }}>
            We focus on practical, localized learning — sitting down together, looking
            at the real problems you face in your work or creative life, and constructing
            gentle, effective AI workflows to solve them.
          </p>
          <ul style={{ listStyle: 'none', padding: 0, marginBottom: '2rem' }}>
            {[
              { color: 'var(--color-accent-sage)',  text: 'In-person sessions across the valley' },
              { color: 'var(--color-accent-light)', text: 'Tailored curriculums for non-technical individuals' },
              { color: 'var(--color-primary)',       text: 'Holistic approach to tech adoption' },
            ].map(({ color, text }) => (
              <li
                key={text}
                style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}
              >
                <div
                  style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: color, flexShrink: 0 }}
                />
                <span>{text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
