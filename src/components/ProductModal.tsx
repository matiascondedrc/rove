import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShoppingBag, ShieldCheck, ChevronRight, Sparkles, Check } from 'lucide-react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';
import { GemaLogo } from './GemaLogo';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  const [selectedSize, setSelectedSize] = useState('');
  const [added, setAdded] = useState(false);
  const { addItem } = useCart();

  if (!product) return null;

  const handleAddToCart = () => {
    if (!selectedSize) return;
    addItem({ ...product, quantity: 1, selectedSize });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 md:p-8">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-rove-navy/90 backdrop-blur-md"
        />
        
        <motion.div 
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          className="relative bg-white w-full max-w-5xl rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row max-h-[90vh] overflow-y-auto"
        >
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 z-10 p-2 bg-rove-navy text-white rounded-full hover:scale-110 transition-transform"
          >
            <X size={20} />
          </button>

          {/* Left: Images */}
          <div className="md:w-1/2 bg-rove-surface h-[400px] md:h-auto flex items-center justify-center">
            {product.image ? (
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover"
              />
            ) : (
              <GemaLogo className="w-32 h-40 text-rove-navy/10" />
            )}
          </div>

          {/* Right: Info */}
          <div className="md:w-1/2 p-8 md:p-12 relative">
            <p className="label-uppercase text-gray-400 mb-2">{product.category}</p>
            <h2 className="text-4xl md:text-5xl font-serif text-rove-navy mb-4 italic">{product.name}</h2>
            <p className="font-serif text-2xl text-gray-500 mb-8 italic">${product.price.toLocaleString()} ARS</p>
            
            <p className="text-rove-navy/70 leading-relaxed font-light mb-10 text-lg">
              {product.description}
            </p>

            <div className="space-y-8">
              <div>
                <div className="flex justify-between items-center mb-4">
                  <p className="label-uppercase text-xs opacity-60 tracking-widest">Talles disponibles</p>
                  <button className="text-[10px] uppercase font-bold text-rove-navy-light underline underline-offset-4">Guía de talles</button>
                </div>
                <div className="flex gap-3">
                  {['S', 'M', 'L', 'XL'].map(size => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`
                        w-12 h-12 text-sm font-bold transition-all border
                        ${selectedSize === size 
                          ? 'bg-rove-navy text-white border-rove-navy' 
                          : 'border-rove-navy/10 hover:border-rove-navy/40 text-rove-navy'
                        }
                      `}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <div className="text-rove-navy-light mt-1"><ShieldCheck size={18} /></div>
                  <div className="text-[11px] leading-tight">
                    <p className="font-bold uppercase tracking-wider mb-1">Calidad ROVE</p>
                    <p className="text-rove-navy/60">Tela 500gsm reforzada.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="text-rove-navy-light mt-1"><Sparkles size={18} /></div>
                  <div className="text-[11px] leading-tight">
                    <p className="font-bold uppercase tracking-wider mb-1">Corte Wide</p>
                    <p className="text-rove-navy/60">Caída perfecta y amplia.</p>
                  </div>
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row gap-4">
                <button
                  onClick={handleAddToCart}
                  disabled={!selectedSize}
                  className={`
                    flex-1 py-4 flex items-center justify-center gap-3 font-bold tracking-[0.2em] text-sm transition-all
                    ${added 
                      ? 'bg-green-600 text-white' 
                      : 'bg-rove-navy text-white hover:bg-rove-navy-mid disabled:opacity-30'
                    }
                  `}
                >
                  {added ? <><Check size={20} /> AGREGADO</> : <><ShoppingBag size={20} /> AGREGAR AL CARRITO</>}
                </button>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-rove-navy/5 flex items-center justify-between text-rove-navy/40 uppercase tracking-[0.15em] text-[10px] font-bold">
              <span>SKU: ROV-{product.id.split('-')[1].toUpperCase()}</span>
              <div className="flex items-center gap-2">
                <span>Hecho en Argentina</span>
                <ChevronRight size={12} />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
