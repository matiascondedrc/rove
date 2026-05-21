import React, { useEffect } from 'react';
import { useCart } from '../context/CartContext';
import { motion } from 'framer-motion';
import { Check, ArrowRight, MessageCircle } from 'lucide-react';
import { Link, useSearchParams } from 'react-router-dom';

export const Confirmation: React.FC = () => {
  const { clearCart } = useCart();
  const [searchParams] = useSearchParams();
  const status = searchParams.get('status');

  useEffect(() => {
    if (status === 'approved') {
      clearCart();
    }
  }, [status, clearCart]);

  const orderNumber = `ROV-${Date.now().toString().slice(-6)}`;

  return (
    <div className="min-h-screen bg-rove-bg flex items-center justify-center p-6 pt-24">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-xl w-full bg-white p-12 rounded-[3xl] shadow-2xl text-center border border-rove-navy/5"
      >
        <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-8 border border-green-100">
          <motion.div
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <Check size={48} className="text-green-600" />
          </motion.div>
        </div>

        <h1 className="serif-title text-4xl md:text-5xl text-rove-navy mb-6">
          {status === 'pending' ? 'Pedido pendiente de pago' : '¡Pedido confirmado!'}
        </h1>
        
        <p className="text-rove-navy/60 text-lg font-light leading-relaxed mb-10">
          {status === 'pending' 
            ? 'Tu pedido está pendiente. Te contactaremos cuando se acredite el pago.' 
            : 'Gracias por elegir ROVE. Ya estamos procesando tu pedido y pronto te contactaremos por WhatsApp para coordinar los detalles del envío.'
          }
        </p>

        <div className="bg-rove-bg p-6 rounded-2xl border border-rove-navy/5 mb-10 inline-block w-full">
          <div className="flex justify-between items-center px-4">
            <span className="label-uppercase text-[10px] opacity-40">Número de orden</span>
            <span className="font-bold tracking-widest text-rove-navy">{orderNumber}</span>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <a 
            href={`https://wa.me/5491100000000?text=Hola! Mi pedido es el ${orderNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-4 bg-rove-navy text-white font-bold tracking-[0.2em] text-sm hover:bg-rove-navy-mid transition-all flex items-center justify-center gap-3"
          >
            <MessageCircle size={20} /> CONTACTAR POR WHATSAPP
          </a>
          <Link 
            to="/" 
            className="w-full py-4 border border-rove-navy/10 text-rove-navy font-bold tracking-[0.2em] text-sm hover:bg-rove-surface transition-all flex items-center justify-center gap-3"
          >
            VOLVER AL INICIO <ArrowRight size={18} />
          </Link>
        </div>
      </motion.div>
    </div>
  );
};
