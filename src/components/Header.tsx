import React, { useState, useEffect } from 'react';

// ─── CONFIGURE YOUR SMS NUMBER HERE ────────────────────────────────────────
// Replace with your phone number in E.164 format, e.g. "+15551234567"
const SMS_NUMBER = '+1YOURNUMBER';
// ───────────────────────────────────────────────────────────────────────────

const Header: React.FC = () => {
  const [hovered, setHovered] = useState(false);

  // Detect and react to the OS dark/light mode preference
  const [isDark, setIsDark] = useState<boolean>(
    () => window.matchMedia?.('(prefers-color-scheme: dark)').matches ?? false
  );

  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const handler = (e: MediaQueryListEvent) => setIsDark(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  const sketchSrc = isDark ? '/header-sketch-dark.png' : '/header-sketch.png';

  return (
    <header
      aria-label="Site header"
      style={{
        position: 'relative',
        width: '100%',
        height: '260px',
        overflow: 'hidden',
      }}
    >
      {/*
        Sketch image — flipped horizontally so the portrait (originally on
        the right) appears on the top-left of the header.
        Light mode → public/header-sketch.png
        Dark mode  → public/header-sketch-dark.png
      */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url(${sketchSrc})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
          transform: 'scaleX(-1)',
          transition: 'background-image 0.3s ease',
        }}
      />

      {/* Soft paper-tone vignette — fades right edge without washing out the art */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          background: isDark
            ? 'linear-gradient(to right, rgba(30,42,56,0.08) 0%, rgba(30,42,56,0.15) 55%, rgba(30,42,56,0.55) 100%),' +
              'linear-gradient(to bottom, rgba(30,42,56,0.0) 0%, rgba(30,42,56,0.35) 100%)'
            : 'linear-gradient(to right, rgba(248,246,240,0.08) 0%, rgba(248,246,240,0.15) 55%, rgba(248,246,240,0.55) 100%),' +
              'linear-gradient(to bottom, rgba(248,246,240,0.0) 0%, rgba(248,246,240,0.35) 100%)',
        }}
      />

      {/* Button — sits bottom-right in the open landscape area */}
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          height: '100%',
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'flex-end',
          padding: '2rem 2.5rem',
        }}
      >
        <a
          href={`sms:${SMS_NUMBER}`}
          className="sketch-btn"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          style={{
            boxShadow: hovered
              ? '3px 3px 0px rgba(84, 97, 112, 0.55)'
              : '2px 2px 0px rgba(84, 97, 112, 0.35)',
            transform: hovered ? 'translate(-1px, -1px)' : 'translate(0, 0)',
          }}
        >
          Leave a text message
        </a>
      </div>
    </header>
  );
};

export default Header;
