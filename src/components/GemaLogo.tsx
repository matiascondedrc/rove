import React from 'react';

export const GemaLogo: React.FC<{ className?: string }> = ({ className = "w-10 h-10" }) => (
  <svg viewBox="0 0 100 130" xmlns="http://www.w3.org/2000/svg" fill="none" className={className}>
    <polygon points="50,2 98,48 50,128 2,48" stroke="currentColor" strokeWidth="3" strokeLinejoin="round"/>
    <line x1="2" y1="48" x2="98" y2="48" stroke="currentColor" strokeWidth="2.5"/>
    <line x1="50" y1="2" x2="50" y2="48" stroke="currentColor" strokeWidth="2"/>
    <line x1="50" y1="2" x2="20" y2="48" stroke="currentColor" strokeWidth="2"/>
    <line x1="50" y1="2" x2="80" y2="48" stroke="currentColor" strokeWidth="2"/>
    <line x1="20" y1="48" x2="50" y2="128" stroke="currentColor" strokeWidth="2"/>
    <line x1="80" y1="48" x2="50" y2="128" stroke="currentColor" strokeWidth="2"/>
    <line x1="50" y1="48" x2="50" y2="128" stroke="currentColor" strokeWidth="1.5" opacity="0.5"/>
  </svg>
);
