import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Trash2, Minus, Plus } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import { GemaLogo } from './GemaLogo';

export const CartSidebar: React.FC<{ isOpen: boolean, onClose: () => void }> = ({ isOpen, onClose }) => {
  const { items, total, updateQuantity, removeItem } = useCart();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-rove-navy/60 backdrop-blur-sm z-[100]"
          />
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 bottom-0 w-full max-w-[400px] bg-white z-[101] shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="p-8 flex items-center justify-between mb-4">
              <h2 className="serif-title text-3xl text-rove-navy italic">Tu Carrito</h2>
              <button 
                onClick={onClose} 
                className="text-2xl hover:opacity-50 transition-opacity"
              >
                ✕
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto px-8 space-y-8">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center opacity-40">
                  <p className="font-serif italic text-xl mb-4">Tu carrito está vacío</p>
                  <button onClick={onClose} className="text-[10px] uppercase font-bold tracking-widest underline underline-offset-4">Empezar a comprar</button>
                </div>
              ) : (
                items.map((item) => (
                  <div key={`${item.id}-${item.selectedSize}`} className="flex items-center gap-6 pb-6 border-b border-gray-100 last:border-0 group">
                    <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-100 flex-shrink-0 flex items-center justify-center">
                      {item.image ? (
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                      ) : (
                        <GemaLogo className="h-8 w-8 text-rove-navy/20" />
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <div className="space-y-1">
                          <h3 className="font-bold text-[10px] uppercase tracking-widest text-rove-navy">{item.name}</h3>
                          <p className="text-[10px] text-gray-500 uppercase tracking-widest">
                            {item.selectedSize} · {item.color}
                          </p>
                        </div>
                        <p className="font-serif italic text-rove-navy">
                          ${(item.price * item.quantity).toLocaleString()}
                        </p>
                      </div>
                      <div className="flex items-center gap-4 mt-3">
                        <div className="flex items-center gap-3">
                          <button 
                            onClick={() => updateQuantity(item.id, item.selectedSize, item.quantity - 1)}
                            className="text-xs opacity-40 hover:opacity-100 disabled:opacity-10"
                            disabled={item.quantity <= 1}
                          >
                            —
                          </button>
                          <span className="text-[10px] font-bold w-4 text-center">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.id, item.selectedSize, item.quantity + 1)}
                            className="text-xs opacity-40 hover:opacity-100"
                          >
                            +
                          </button>
                        </div>
                        <button 
                          onClick={() => removeItem(item.id, item.selectedSize)}
                          className="text-[10px] text-red-400 uppercase tracking-widest font-bold opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          Eliminar
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="p-8 border-t border-gray-100 mt-auto">
                <div className="flex justify-between items-center mb-6">
                  <p className="uppercase text-[10px] font-bold tracking-widest opacity-40">Subtotal</p>
                  <p className="font-serif text-2xl text-rove-navy">${total.toLocaleString()}</p>
                </div>
                
                <Link 
                  to="/checkout" 
                  onClick={onClose}
                  className="w-full py-5 bg-rove-navy text-white text-center font-bold tracking-[0.2em] text-[10px] uppercase hover:bg-rove-navy-mid transition-all block mb-4"
                >
                  Ir al Checkout
                </Link>
                <p className="text-[10px] text-center text-gray-400 uppercase tracking-widest leading-loose">
                  Envíos a todo el país<br />coordinados vía WhatsApp
                </p>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
