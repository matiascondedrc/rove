import React from 'react';
import { GemaLogo } from './GemaLogo';
import { Instagram, Smartphone } from 'lucide-react';

const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || '542994199050';
const instagramUrl = import.meta.env.VITE_INSTAGRAM_URL || '#';
const locationText = import.meta.env.VITE_LOCATION_TEXT || 'Argentina';

export const Footer: React.FC = () => {
  return (
    <footer id="contacto" className="min-h-16 h-auto py-6 sm:py-0 bg-rove-navy border-t border-white/5 flex flex-col sm:flex-row items-center justify-between px-6 sm:px-12 text-[10px] uppercase tracking-[0.2em] font-bold gap-4 sm:gap-0">
      <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-8 opacity-40">
        <span className="text-white">© 2025 ROVE STORE</span>
        <span className="text-white">{locationText}</span>
      </div>
      <div className="flex space-x-8 opacity-40">
        <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="text-white hover:opacity-100 transition-opacity">Instagram</a>
        <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="text-white hover:opacity-100 transition-opacity">WhatsApp</a>
      </div>
    </footer>
  );
};
