'use client';

import React from 'react';
import { Shield } from 'lucide-react';

export const Navbar: React.FC = () => {
  return (
    <nav className="w-full bg-[#050505]/80 backdrop-blur-md border-b border-white/5 py-4 px-6 md:px-12 fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3 cursor-pointer">
          <img 
            src="/logo.png" 
            alt="RedFeet TV Logo" 
            className="w-16 h-16 rounded-xl object-cover border border-red-500/20 shadow-[0_0_20px_rgba(239,68,68,0.4)]" 
          />
          <span className="font-extrabold text-2xl tracking-wider text-white">
            RED<span className="text-red-600">FEET</span> <span className="text-xs font-black uppercase text-gray-500 tracking-widest border border-white/10 px-1.5 py-0.5 rounded bg-white/[0.02]">TV</span>
          </span>
        </div>

        {/* Action Link */}
        <button
          onClick={() => {
            const phone = '5511999999999';
            const text = "Olá REDFEET TV! Quero assinar e tirar dúvidas sobre as telinhas.";
            window.open(`https://wa.me/${phone}?text=${encodeURIComponent(text)}`, '_blank');
          }}
          className="text-sm font-black uppercase tracking-widest text-white bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-400 hover:to-green-500 px-10 py-4.5 rounded-full transition-all duration-300 shadow-[0_0_30px_rgba(34,197,94,0.5)] hover:scale-105 active:scale-95 border border-white/20 cursor-pointer"
        >
          Fale Conosco no WhatsApp
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
