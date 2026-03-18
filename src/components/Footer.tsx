import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="glass" style={{ 
      padding: '1rem 0',
      textAlign: 'center',
      borderTop: '1px solid rgba(255,255,255,0.3)'
    }}>
      <div className="container">
        <div style={{ color: 'var(--color-dark)', fontSize: '0.85rem', fontWeight: 500 }}>
          &copy; {new Date().getFullYear()} Ernest Of Gaia Coaching. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
