import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Product } from '../types';
import { Plus, Check, MoreHorizontal, MousePointerClick } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { GemaLogo } from './GemaLogo';

interface ProductCardProps {
  product: Product;
  onShowDetail: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onShowDetail }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedSize, setSelectedSize] = useState('');
  const [added, setAdded] = useState(false);
  const { addItem } = useCart();

  const handleAddToCart = () => {
    if (!selectedSize) return;
    
    addItem({
      ...product,
      quantity: 1,
      selectedSize,
    });
    
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
      setIsExpanded(false);
    }, 2000);
  };

  return (
    <div className="flex flex-col items-center w-full max-w-[340px] px-2 sm:px-0">
      {/* Circle Image Wrapper */}
      <motion.div 
        layout
        className="relative group cursor-pointer w-full"
        onMouseEnter={() => !isExpanded && setIsExpanded(false)} // Just for clarity
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <motion.div 
          className={`
            relative overflow-hidden rounded-full border-2 border-white/20 bg-rove-navy shadow-2xl 
            aspect-square transition-all duration-500
            w-full max-w-[300px] sm:max-w-[340px] mx-auto
            ${isExpanded ? 'ring-4 ring-white/10 ring-offset-4 ring-offset-rove-navy' : ''}
          `}
          whileHover={!isExpanded ? { scale: 1.05 } : {}}
        >
          {/* Main Image with Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-rove-navy to-transparent z-[1] opacity-60" />
          {product.image && (
            <motion.img 
              src={product.image} 
              alt={product.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-115"
            />
          )}

          {/* Hover Overlay */}
          <AnimatePresence>
            {!isExpanded && (
              <motion.div 
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-[#0A1628]/96 flex flex-col items-center justify-between p-4 sm:p-6 text-white z-20 group/overlay"
              >
                {/* Logo and Icon Header */}
                <div className="mt-2 flex flex-col items-center gap-2">
                  <GemaLogo className="h-6 w-6 text-white/40" />
                  <MousePointerClick size={20} className="text-white/40 animate-pulse" />
                </div>

                {/* Main Info - Very Compact */}
                <div className="flex flex-col gap-2 sm:gap-3 w-full py-2">
                  <div className="flex flex-col items-center">
                    <span className="text-[6px] sm:text-[7px] text-white/40 uppercase tracking-[0.3em] font-bold">GRAMAJE</span>
                    <span className="text-[11px] sm:text-[13px] text-white font-bold tracking-widest">500 GSM</span>
                  </div>

                  <div className="flex flex-col items-center">
                    <span className="text-[6px] sm:text-[7px] text-white/40 uppercase tracking-[0.3em] font-bold">CORTE</span>
                    <span className="text-[11px] sm:text-[13px] text-white font-bold tracking-widest">WIDE FIT</span>
                  </div>

                  <div className="flex flex-col items-center">
                    <span className="text-[6px] sm:text-[7px] text-white/40 uppercase tracking-[0.3em] font-bold">COLOR</span>
                    <span className="text-[11px] sm:text-[13px] text-white font-bold tracking-widest text-center">
                       {product.color === 'Negro' ? 'NOIR' : product.color === 'Gris' ? 'GREY' : 'NAVY BLUE'}
                    </span>
                  </div>
                </div>

                {/* Final CTA - Prominent and Clear */}
                <div className="mb-2 w-full px-2 sm:px-4">
                  <div className="w-full py-2 sm:py-2.5 bg-white text-[#0A1628] rounded-full text-center shadow-2xl active:scale-95 transition-transform">
                    <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.1em]">PULSAR PARA COMPRAR</span>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Floating Icons */}
        <div className="absolute top-4 right-4 z-10 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <button className="w-8 h-8 rounded-full bg-white text-rove-navy flex items-center justify-center shadow-md hover:bg-rove-surface">
            <MoreHorizontal size={16} />
          </button>
        </div>
      </motion.div>

      {/* Basic Info */}
      <div className="mt-4 text-center">
        <h3 className="text-sm uppercase tracking-widest font-semibold text-rove-navy">{product.name}</h3>
        <p className="text-gray-500 font-serif italic text-base mt-1">
          ${product.price.toLocaleString()} ARS
        </p>
      </div>

      {/* Expanded Panel */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden w-full max-w-sm mt-4 bg-white border border-rove-navy/10 rounded-2xl p-6 shadow-2xl z-20"
          >
            <div className="flex items-center gap-4 mb-6 pb-6 border-b border-rove-navy/5">
              <div className="relative">
                {product.image ? (
                  <img src={product.image} className="w-12 h-12 rounded-full object-cover border border-rove-navy/20" alt="" />
                ) : (
                  <div className="w-12 h-12 rounded-full bg-rove-navy-light/10 border border-rove-navy/20 flex items-center justify-center text-rove-navy/20">
                    <GemaLogo className="h-6 w-6" />
                  </div>
                )}
                <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-0.5 border border-rove-navy/10">
                  <GemaLogo className="h-3 w-3 text-rove-navy" />
                </div>
              </div>
              <div className="text-start">
                <p className="text-[10px] uppercase tracking-widest text-rove-navy-light">{product.category}</p>
                <p className="font-serif text-lg leading-tight">{product.name}</p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <p className="label-uppercase text-[10px] mb-3 opacity-60">Seleccioná tu talle</p>
                <div className="flex gap-2">
                  {['S', 'M', 'L', 'XL'].map(size => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`
                        w-10 h-10 border text-xs font-bold transition-all
                        ${selectedSize === size 
                          ? 'bg-rove-navy text-white border-rove-navy' 
                          : 'border-rove-navy/20 hover:border-rove-navy/40 text-rove-navy'
                        }
                      `}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex gap-2 pt-2">
                <button
                  onClick={handleAddToCart}
                  disabled={!selectedSize || added}
                  className={`
                    flex-1 py-3 px-4 flex items-center justify-center gap-2 font-bold tracking-widest text-xs transition-all
                    ${added 
                      ? 'bg-green-600 text-white' 
                      : 'bg-rove-navy text-white hover:bg-rove-navy-mid disabled:opacity-30'
                    }
                  `}
                >
                  {added ? (
                    <><Check size={16} /> AGREGADO</>
                  ) : (
                    <><Plus size={16} /> AGREGAR</>
                  )}
                </button>
                <button 
                  onClick={() => onShowDetail(product)}
                  className="w-12 h-12 flex items-center justify-center border border-rove-navy/20 text-rove-navy hover:bg-rove-surface transition-colors"
                >
                  <MoreHorizontal size={20} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
