import React from 'react';
import { PenTool, Compass, Sparkles } from 'lucide-react';

const Services: React.FC = () => {
  const offerings = [
    {
      title: "Foundations",
      icon: <Compass size={32} color="var(--color-primary)" />,
      subtitle: "For the curious beginner",
      description: "An introduction to AI assistants. Learn how to converse with LLMs naturally, craft basic prompts, and integrate simple AI tools into your daily workflow.",
      price: "$85 / session",
      features: ["ChatGPT & Claude Basics", "Prompt Anatomy", "Safety & Privacy"]
    },
    {
      title: "The Workshop",
      icon: <PenTool size={32} color="var(--color-primary)" />,
      subtitle: "For the active creator",
      description: "Intermediate coaching on leveraging AI for writing, design, and coding. We'll build custom GPTs tailored to your unique voice and professional needs.",
      price: "$120 / session",
      features: ["Custom System Prompts", "Multi-modal Workflows", "Iterative Refinement"]
    },
    {
      title: "Masterclass",
      icon: <Sparkles size={32} color="var(--color-primary)" />,
      subtitle: "For the local visionary",
      description: "Advanced automation and integrative systems. Treat AI as a collaborative partner to scale your local business or creative practice.",
      price: "$180 / session",
      features: ["Agentic Workflows", "API Integrations", "Long-term AI Strategy"]
    }
  ];

  return (
    <section id="services" className="section" style={{ backgroundColor: 'var(--color-surface)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 'var(--space-xl)' }}>
          <h2 style={{ fontSize: '3rem', color: 'var(--color-dark)', marginBottom: '1rem' }}>Tutoring Offerings</h2>
          <div style={{ width: '60px', height: '4px', backgroundColor: 'var(--color-accent-light)', margin: '0 auto' }}></div>
          <p style={{ marginTop: '1.5rem', color: 'var(--color-text-light)', maxWidth: '600px', margin: '1.5rem auto 0 auto', fontSize: '1.1rem' }}>
            Structured learning paths designed to un-mystify artificial intelligence. Choose the level that matches your current harmony.
          </p>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '2rem' 
        }}>
          {offerings.map((pkg, index) => (
            <div key={index} style={{
              backgroundColor: 'var(--color-background)',
              borderRadius: 'var(--radius-lg)',
              padding: '2.5rem',
              border: '1px solid var(--color-sand)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              display: 'flex',
              flexDirection: 'column',
              boxShadow: 'var(--shadow-sm)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-10px)';
              e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
            }}
            >
              <div style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                backgroundColor: 'rgba(92, 148, 150, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.5rem'
              }}>
                {pkg.icon}
              </div>
              <h3 style={{ fontSize: '1.8rem', marginBottom: '0.25rem' }}>{pkg.title}</h3>
              <span style={{ color: 'var(--color-accent-sage)', fontWeight: 500, fontSize: '0.9rem', marginBottom: '1.5rem', display: 'block', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                {pkg.subtitle}
              </span>
              <p style={{ color: 'var(--color-text-light)', marginBottom: '2rem', flexGrow: 1 }}>
                {pkg.description}
              </p>
              
              <div style={{ marginBottom: '2rem' }}>
                {pkg.features.map((feat, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                    <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--color-gold)' }}></div>
                    <span style={{ fontSize: '0.95rem' }}>{feat}</span>
                  </div>
                ))}
              </div>

              <div style={{ 
                borderTop: '1px solid var(--color-sand)', 
                paddingTop: '1.5rem',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}>
                <span style={{ fontWeight: 600, fontSize: '1.2rem', color: 'var(--color-dark)' }}>{pkg.price}</span>
                <button className="btn btn-outline" style={{ padding: '0.5rem 1rem' }}>Inquire</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
