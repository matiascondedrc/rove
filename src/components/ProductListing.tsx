import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PRODUCTS } from '../constants';
import { ProductCard } from './ProductCard';
import { Product } from '../types';

export const ProductListing: React.FC<{ onShowDetail: (p: Product) => void }> = ({ onShowDetail }) => {
  const [filter, setFilter] = useState('Todos');

  const categories = ['Todos', 'Buzos', 'Joggins', 'Conjuntos'];

  const filteredProducts = PRODUCTS.filter(p => filter === 'Todos' || p.category === filter);

  return (
    <section id="productos" className="py-16 sm:py-24 px-4 sm:px-6 bg-rove-bg">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="label-uppercase text-rove-navy-light mb-4"
          >
            BUZOS · JOGGINS · CONJUNTOS
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="serif-title text-4xl md:text-5xl text-rove-navy"
          >
            La Colección
          </motion.h2>

          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-2 mt-8"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`
                  px-6 py-2 rounded-full text-xs font-bold tracking-widest transition-all border
                  ${filter === cat 
                    ? 'bg-rove-navy text-white border-rove-navy' 
                    : 'bg-transparent text-rove-navy border-rove-navy/20 hover:border-rove-navy/60'
                  }
                `}
              >
                {cat.toUpperCase()}
              </button>
            ))}
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-24 gap-12">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product, idx) => (
              <motion.div
                layout
                key={product.id}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
              >
                <ProductCard product={product} onShowDetail={onShowDetail} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
