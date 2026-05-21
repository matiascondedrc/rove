import React from 'react';
import { motion } from 'framer-motion';
import { GemaLogo } from './GemaLogo';
import { ShieldCheck, Ruler, Sparkles, MessageCircle } from 'lucide-react';

export const AboutUs: React.FC = () => {
  const values = [
    { icon: <ShieldCheck size={20} />, text: 'Tela de gramaje alto (500gsm)' },
    { icon: <Ruler size={20} />, text: 'Corte wide fit, amplio y cómodo' },
    { icon: <Sparkles size={20} />, text: 'Detalles cuidados en cada prenda' },
    { icon: <MessageCircle size={20} />, text: 'Atención directa y pedidos rápidos' },
  ];

  return (
    <section id="quienes-somos" className="bg-rove-navy py-16 sm:py-24 px-4 sm:px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        {/* Text Column */}
        <motion.div 
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="serif-title text-4xl md:text-5xl text-white mb-8">
            Hecho para durar.<br />Pensado para vos.
          </h2>
          
          <div className="space-y-6 text-white/70 text-lg leading-relaxed font-light">
            <p>
              ROVE nace de una idea simple: que la ropa cómoda no tiene que sacrificar calidad ni estética. 
              Seleccionamos cada prenda con criterio, priorizando telas de alto gramaje, costuras firmes 
              y cortes que se adaptan al cuerpo sin exagerar.
            </p>
            <p>
              Somos un emprendimiento independiente. Sin intermediarios, sin precios inflados. 
              Solo ropa que vale lo que cuesta.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((value, idx) => (
              <div key={idx} className="flex items-center gap-4 text-white">
                <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-rove-navy-light bg-white/5">
                  {value.icon}
                </div>
                <span className="text-sm font-medium tracking-wide">{value.text}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Visual Column */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative aspect-square flex items-center justify-center group"
        >
          <div className="absolute inset-0 bg-rove-navy-mid rounded-3xl rotate-3 scale-95 transition-transform group-hover:rotate-6 shadow-2xl opacity-50" />
          <div className="absolute inset-0 bg-rove-navy-mid rounded-3xl -rotate-3 scale-95 transition-transform group-hover:-rotate-6 shadow-2xl opacity-50" />
          
          <div className="relative w-full h-full bg-rove-navy-mid rounded-3xl flex items-center justify-center border border-white/5 overflow-hidden">
            <div className="absolute inset-0 noise-texture opacity-[0.03]" />
            <GemaLogo className="w-48 h-64 text-white opacity-90 drop-shadow-[0_0_40px_rgba(255,255,255,0.1)]" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
