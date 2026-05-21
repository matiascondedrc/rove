import React, { useState, useEffect } from 'react';
import { ShoppingBag, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { GemaLogo } from './GemaLogo';
import { useCart } from '../context/CartContext';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar: React.FC<{ onCartOpen: () => void }> = ({ onCartOpen }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { items } = useCart();
  const location = useLocation();

  const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', path: '/' },
    { name: 'Productos', path: '/#productos' },
    { name: 'Quiénes Somos', path: '/#quienes-somos' },
    { name: 'Contacto', path: '/#contacto' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 h-16 flex items-center px-4 sm:px-6 md:px-12 ${
        scrolled ? 'bg-rove-navy shadow-lg' : 'bg-rove-navy shadow-none'
      } border-b border-white/10`}
    >
      <div className="max-w-7xl mx-auto w-full flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-4 group">
          <GemaLogo className="w-8 h-10 text-white" />
          <span className="text-white font-sans font-bold tracking-[0.35em] text-xl hidden sm:block">ROVE</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.path}
              className="nav-link text-sm uppercase tracking-widest font-medium"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Icons */}
        <div className="flex items-center gap-4">
          <button 
            onClick={onCartOpen}
            className="relative text-white p-2 hover:opacity-70 transition-opacity"
            aria-label="Carrito"
          >
            <ShoppingBag size={24} strokeWidth={1.5} />
            <AnimatePresence>
              {totalItems > 0 && (
                <motion.span 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  className="absolute -top-1 -right-1 bg-rove-navy-light text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-bold border border-white/20"
                >
                  {totalItems}
                </motion.span>
              )}
            </AnimatePresence>
          </button>

          <button 
            className="md:hidden text-white p-2"
            onClick={() => setIsOpen(true)}
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 z-[60] md:hidden"
            />
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              className="fixed top-0 right-0 bottom-0 w-[280px] bg-rove-navy z-[70] p-8 md:hidden shadow-2xl"
            >
              <button 
                className="absolute top-6 right-6 text-white"
                onClick={() => setIsOpen(false)}
              >
                <X size={28} />
              </button>

              <div className="mt-12 flex flex-col gap-8">
                {navLinks.map((link) => (
                  <a 
                    key={link.name} 
                    href={link.path}
                    className="text-white text-xl font-serif tracking-wide border-b border-white/10 pb-2"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </a>
                ))}
              </div>

              <div className="absolute bottom-12 left-8">
                <GemaLogo className="w-12 h-16 text-white/20" />
                <p className="text-white/40 text-xs mt-4 tracking-widest uppercase">ROVE STORE © 2025</p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};
