import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="hero" style={{ 
      position: 'relative',
      minHeight: '80vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      overflow: 'hidden'
    }}>
      {/* Background with an ocean/rock structure mimicking the reference */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: 'url(https://images.unsplash.com/photo-1541094254804-5d51c0997ee4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        zIndex: -2
      }}></div>

      {/* Subtle overlay gradient to match the soft dreamy feel of the reference */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'linear-gradient(to bottom, rgba(239, 228, 208, 0.4) 0%, rgba(248, 246, 240, 0.8) 100%)',
        zIndex: -1
      }}></div>

      <div className="container fade-in" style={{
        maxWidth: '800px',
        background: 'rgba(255, 255, 255, 0.65)',
        backdropFilter: 'blur(12px)',
        padding: '4rem 2rem',
        borderRadius: 'var(--radius-lg)',
        border: '1px solid rgba(255, 255, 255, 0.5)',
        boxShadow: 'var(--shadow-lg)'
      }}>
        <h1 style={{ 
          fontSize: '4.5rem', 
          marginBottom: '1rem',
          color: 'var(--color-primary)'
        }}>
          Ernest <span style={{ color: 'var(--color-gold)' }}>Of Gaia</span>
        </h1>
        <p style={{ 
          fontSize: '1.25rem', 
          letterSpacing: '0.15em', 
          textTransform: 'uppercase',
          color: 'var(--color-text-light)',
          fontWeight: 500,
          marginBottom: '2.5rem'
        }}>
          Your Local Guide to AI Tools
        </p>
        <p style={{
          fontSize: '1.2rem',
          color: 'var(--color-text)',
          marginBottom: '3rem',
          maxWidth: '600px',
          margin: '0 auto 3rem auto'
        }}>
          Master the art of prompt engineering and lifecycle automation through personalized, 1-on-1 holistic coaching. Like learning an instrument, we start with the fundamentals and build toward mastery.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          <a href="#services" className="btn btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}>
            Explore Offerings
          </a>
          <a href="#about" className="btn btn-outline" style={{ padding: '1rem 2rem', fontSize: '1.1rem', backgroundColor: 'rgba(255,255,255,0.5)' }}>
            Meet Your Guide
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
