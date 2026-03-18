import React from 'react';
import { Bot } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="header glass" style={{ position: 'sticky', top: 0, zIndex: 100, padding: '1rem 0' }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        
        {/* Logo Section */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div style={{ 
            backgroundColor: 'var(--color-primary)', 
            color: 'white',
            padding: '0.5rem',
            borderRadius: '50%'
          }}>
            <Bot size={24} />
          </div>
          <div>
            <h1 style={{ 
              fontSize: '1.5rem', 
              margin: 0, 
              color: 'var(--color-dark)',
              fontWeight: 600
            }}>Ernest <span className="text-gold">Of Gaia</span></h1>
          </div>
        </div>

        {/* Navigation */}
        <nav style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          <a href="#services" style={{ fontWeight: 500, color: 'var(--color-text-light)' }}>Offerings</a>
          <a href="#about" style={{ fontWeight: 500, color: 'var(--color-text-light)' }}>Philosophy</a>
          <a href="#contact" className="btn btn-primary">Book a Session</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
