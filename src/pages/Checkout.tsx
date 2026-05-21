import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { motion } from 'framer-motion';
import { PayerInfo } from '../types';
import { ShoppingBag, ChevronLeft, CreditCard, Lock, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Checkout: React.FC = () => {
  const { items, total } = useCart();
  const [loading, setLoading] = useState(false);
  const [payer, setPayer] = useState<PayerInfo>({
    name: '',
    email: '',
    phone: '',
    province: 'Buenos Aires',
    city: '',
    address: '',
    zipCode: '',
    notes: ''
  });

  const provinces = [
    'Buenos Aires', 'CABA', 'Catamarca', 'Chaco', 'Chubut', 'Córdoba', 'Corrientes', 'Entre Ríos',
    'Formosa', 'Jujuy', 'La Pampa', 'La Rioja', 'Mendoza', 'Misiones', 'Neuquén', 'Río Negro',
    'Salta', 'San Juan', 'San Luis', 'Santa Cruz', 'Santa Fe', 'Santiago del Estero', 'Tierra del Fuego', 'Tucumán'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setPayer(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/create-preference', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ items, payer })
      });

      const data = await response.json();
      if (data.init_point) {
        window.location.href = data.init_point;
      } else {
        alert("Error al procesar el pago. Por favor intenta de nuevo.");
      }
    } catch (error) {
      console.error(error);
      alert("Error de conexión. Inténtalo más tarde.");
    } finally {
      setLoading(false);
    }
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen pt-32 px-6 flex flex-col items-center justify-center text-center">
        <ShoppingBag size={64} className="text-rove-navy/20 mb-6" />
        <h2 className="serif-title text-3xl mb-4">No hay productos en el carrito</h2>
        <Link to="/" className="label-uppercase text-rove-navy-light underline underline-offset-8">Volver a la tienda</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-rove-bg pt-24 pb-24 px-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
        
        {/* Form Column */}
        <div className="flex-1">
          <Link to="/" className="flex items-center gap-2 text-rove-navy/40 hover:text-rove-navy transition-colors mb-8 text-xs font-bold uppercase tracking-widest">
            <ChevronLeft size={16} /> Volver a la tienda
          </Link>
          
          <h1 className="serif-title text-4xl text-rove-navy mb-12">Tus datos</h1>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="label-uppercase text-[10px] opacity-40">Nombre Completo *</label>
                <input 
                  required name="name" value={payer.name} onChange={handleInputChange}
                  className="w-full bg-white border border-rove-navy/10 p-4 focus:border-rove-navy outline-none transition-colors font-medium"
                  placeholder="Ej: Juan Pérez"
                />
              </div>
              <div className="space-y-2">
                <label className="label-uppercase text-[10px] opacity-40">Email *</label>
                <input 
                  required type="email" name="email" value={payer.email} onChange={handleInputChange}
                  className="w-full bg-white border border-rove-navy/10 p-4 focus:border-rove-navy outline-none transition-colors font-medium"
                  placeholder="ejemplo@correo.com"
                />
              </div>
              <div className="space-y-2">
                <label className="label-uppercase text-[10px] opacity-40">WhatsApp / Teléfono *</label>
                <input 
                  required name="phone" value={payer.phone} onChange={handleInputChange}
                  className="w-full bg-white border border-rove-navy/10 p-4 focus:border-rove-navy outline-none transition-colors font-medium"
                  placeholder="11 2345 6789"
                />
              </div>
              <div className="space-y-2">
                <label className="label-uppercase text-[10px] opacity-40">Provincia *</label>
                <select 
                  required name="province" value={payer.province} onChange={handleInputChange}
                  className="w-full bg-white border border-rove-navy/10 p-4 focus:border-rove-navy outline-none transition-colors font-medium appearance-none"
                >
                  {provinces.map(p => <option key={p} value={p}>{p}</option>)}
                </select>
              </div>
              <div className="space-y-2">
                <label className="label-uppercase text-[10px] opacity-40">Ciudad *</label>
                <input 
                  required name="city" value={payer.city} onChange={handleInputChange}
                  className="w-full bg-white border border-rove-navy/10 p-4 focus:border-rove-navy outline-none transition-colors font-medium"
                />
              </div>
              <div className="space-y-2">
                <label className="label-uppercase text-[10px] opacity-40">Dirección *</label>
                <input 
                  required name="address" value={payer.address} onChange={handleInputChange}
                  className="w-full bg-white border border-rove-navy/10 p-4 focus:border-rove-navy outline-none transition-colors font-medium"
                  placeholder="Calle y altura"
                />
              </div>
              <div className="space-y-2">
                <label className="label-uppercase text-[10px] opacity-40">Código Postal *</label>
                <input 
                  required name="zipCode" value={payer.zipCode} onChange={handleInputChange}
                  className="w-full bg-white border border-rove-navy/10 p-4 focus:border-rove-navy outline-none transition-colors font-medium"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="label-uppercase text-[10px] opacity-40">Notas adicionales (Opcional)</label>
              <textarea 
                name="notes" value={payer.notes} onChange={handleInputChange}
                className="w-full bg-white border border-rove-navy/10 p-4 focus:border-rove-navy outline-none transition-colors font-medium h-32 resize-none"
                placeholder="Ej: Entrega en horario de tarde, puerta azul..."
              />
            </div>

            <button 
              type="submit" 
              disabled={loading}
              className="w-full py-6 bg-rove-navy text-white font-bold tracking-[0.3em] text-sm hover:bg-rove-navy-mid transition-all flex items-center justify-center gap-3 disabled:opacity-50"
            >
              {loading ? (
                <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
              ) : (
                <><CreditCard size={20} /> PAGAR CON MERCADOPAGO</>
              )}
            </button>
            
            <div className="flex items-center justify-center gap-2 text-rove-navy/30">
              <Lock size={12} />
              <span className="text-[10px] uppercase font-bold tracking-widest">Pago seguro · MercadoPago Checkout Pro</span>
            </div>
          </form>
        </div>

        {/* Summary Column */}
        <div className="lg:w-[400px]">
          <div className="bg-white border border-rove-navy/5 p-8 sticky top-32 rounded-3xl shadow-sm">
            <h2 className="label-uppercase text-xs mb-8 opacity-40">Resumen de pedido</h2>
            
            <div className="space-y-6 mb-8 max-h-[400px] overflow-y-auto pr-2">
              {items.map(item => (
                <div key={`${item.id}-${item.selectedSize}`} className="flex gap-4">
                  <img src={item.image} className="w-16 h-16 rounded-full object-cover border border-rove-navy/10" alt="" />
                  <div className="flex-1">
                    <p className="font-bold text-xs text-rove-navy">{item.name}</p>
                    <p className="text-[10px] uppercase text-rove-navy-light mt-1">Talle {item.selectedSize} · Qty: {item.quantity}</p>
                    <p className="font-serif text-sm mt-1 text-rove-navy-light">${(item.price * item.quantity).toLocaleString()}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-4 pt-8 border-t border-rove-navy/5">
              <div className="flex justify-between items-center text-rove-navy/60 font-medium">
                <span>Subtotal</span>
                <span>${total.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center text-rove-navy/60 font-medium border-b border-rove-navy/5 pb-4">
                <span>Envío</span>
                <span className="text-[10px] uppercase font-bold tracking-widest text-rove-navy-light italic">A coordinar</span>
              </div>
              <div className="flex justify-between items-center py-4">
                <span className="serif-title text-2xl text-rove-navy">Total</span>
                <span className="serif-title text-3xl text-rove-navy">${total.toLocaleString()}</span>
              </div>
            </div>
            
            <div className="mt-8 p-4 bg-rove-bg rounded-xl border border-rove-navy/5 flex items-start gap-3">
              <ShieldCheck className="text-rove-navy-light mt-0.5" size={16} />
              <p className="text-[10px] leading-relaxed text-rove-navy/60 font-medium">
                Al confirmar, serás redirigido a MercadoPago. Una vez pago, nos pondremos en contacto vía WhatsApp para coordinar el envío.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
