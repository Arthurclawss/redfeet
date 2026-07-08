'use client';

import React from 'react';
import { Shield } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#050505] border-t border-white/5 pt-12 pb-8 relative z-20">
      <div className="max-w-7xl mx-auto px-6 text-center space-y-6">
        <div className="flex items-center justify-center gap-3">
          <img 
            src="/logo.png" 
            alt="RedFeet TV Logo" 
            className="w-14 h-14 rounded-xl object-cover border border-red-500/20 shadow-[0_0_20px_rgba(239,68,68,0.4)]" 
          />
          <span className="font-extrabold text-xl tracking-wider text-white">
            RED<span className="text-red-600">FEET</span> <span className="text-xs font-black uppercase text-gray-500 tracking-widest border border-white/10 px-1.5 py-0.5 rounded bg-white/[0.02]">TV</span>
          </span>
        </div>
        <p className="text-xs text-gray-500 font-medium max-w-md mx-auto">
          O novo padrão em entretenimento digital. Entregando conexões de alta performance, qualidade Ultra HD 4K sem travamentos e atendimento prioritário para todo o Brasil.
        </p>
        <div className="h-[1px] bg-white/5 w-full my-4" />
        <p className="text-[10px] font-bold uppercase tracking-wider text-gray-600">
          &copy; {new Date().getFullYear()} REDFEET TV. TODOS OS DIREITOS RESERVADOS.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
