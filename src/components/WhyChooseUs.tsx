import React from 'react';
import { motion } from 'framer-motion';
import { Award, UserCircle, Shirt } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const points = [
    {
      icon: <Award className="text-white" size={40} />,
      title: 'Calidad real',
      description: 'Telas de gramaje 500gsm. No hay atajos en lo que usás todos los días. Durabilidad garantizada.'
    },
    {
      icon: <UserCircle className="text-white" size={40} />,
      title: 'Atención directa',
      description: 'Emprendimiento independiente. Tu pedido tiene nombre y apellido para nosotros. Trato humano y cercano.'
    },
    {
      icon: <Shirt className="text-white" size={40} />,
      title: 'Estilo sin exagerar',
      description: 'Wide fit contenido. Cómodo para todo el día, presentable para cualquier ocasión.'
    }
  ];

  return (
    <section className="bg-rove-navy py-24 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-16 text-center">
          {points.map((point, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 0.8 }}
              className="flex flex-col items-center"
            >
              <div className="mb-8 p-6 rounded-2xl bg-white/5 border border-white/10">
                {point.icon}
              </div>
              <h3 className="serif-title text-2xl text-white mb-4">{point.title}</h3>
              <p className="text-white/70 leading-relaxed font-light">{point.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
