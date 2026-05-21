import React from 'react';
import { motion } from 'framer-motion';
import { GemaLogo } from './GemaLogo';

export const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex flex-col md:flex-row items-stretch overflow-hidden bg-rove-navy">
      {/* Left: Content */}
      <div className="relative flex-1 p-8 sm:p-12 md:p-20 flex flex-col justify-center space-y-8 sm:space-y-10 z-10">
        <div className="space-y-4">
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-500 text-sm font-semibold tracking-[0.15em] uppercase"
          >
            Nueva Colección 2025
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-white text-[50px] sm:text-[70px] md:text-[100px] leading-[0.9] sm:leading-[0.88] font-serif tracking-tight"
          >
            Calidad que<br />se siente.
          </motion.h1>
        </div>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-white text-lg opacity-80 max-w-md font-light"
        >
          Buzos y joggins diseñados para quienes no negocian comodidad ni estilo. Hecho para durar, pensado para vos.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-6"
        >
          <a 
            href="#productos" 
            className="bg-white text-rove-navy px-12 py-5 font-bold uppercase tracking-widest text-xs text-center transition-transform hover:-translate-y-1"
          >
            Ver Colección
          </a>
          <a 
            href="#quienes-somos" 
            className="border border-white/30 text-white px-12 py-5 font-bold uppercase tracking-widest text-xs text-center transition-colors hover:bg-white/5"
          >
            Quiénes Somos
          </a>
        </motion.div>
      </div>

      {/* Right: Visual Section Inspired by Artistic Flair */}
      <div className="flex-1 relative bg-rove-navy-mid hidden md:flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 radial-dots opacity-20" />
        <div className="absolute inset-0 noise-texture opacity-10" />
        
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="relative w-[400px] h-[400px] rounded-full border border-white/10 flex items-center justify-center"
        >
          <div className="w-[320px] h-[320px] rounded-full bg-rove-navy border border-white/5 shadow-2xl flex items-center justify-center relative group">
            <GemaLogo className="w-32 h-40 text-white opacity-10 group-hover:opacity-20 transition-opacity" />
            
            {/* Artistic Floating Element */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -right-8 bottom-1/4 w-24 h-32 bg-rove-accent rounded-xl border border-white/5 shadow-xl opacity-40 backdrop-blur-sm"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
