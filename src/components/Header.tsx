import React from 'react';
import { Bot } from 'lucide-react';

const Header: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className="header glass"
      style={{ position: 'sticky', top: 0, zIndex: 100, padding: '1rem 0' }}
    >
      <div
        className="container"
        style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
      >
        {/* Logo Section */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div
            style={{
              backgroundColor: 'var(--color-primary)',
              color: 'white',
              padding: '0.5rem',
              borderRadius: '50%',
            }}
          >
            <Bot size={24} />
          </div>
          <div>
            <h1
              style={{
                fontSize: '1.5rem',
                margin: 0,
                color: 'var(--color-dark)',
                fontWeight: 600,
              }}
            >
              Ernest <span className="text-gold">Of Gaia</span>
            </h1>
          </div>
        </div>

        {/* Navigation */}
        <nav
          role="navigation"
          aria-label="Main navigation"
          style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}
        >
          <button
            onClick={() => scrollTo('services')}
            style={{
              fontWeight: 500,
              color: 'var(--color-text-light)',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              fontSize: '1rem',
              padding: 0,
            }}
          >
            Offerings
          </button>
          <button
            onClick={() => scrollTo('about')}
            style={{
              fontWeight: 500,
              color: 'var(--color-text-light)',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              fontSize: '1rem',
              padding: 0,
            }}
          >
            Philosophy
          </button>
          <button
            onClick={() => scrollTo('contact')}
            className="btn btn-primary"
          >
            Book a Session
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
