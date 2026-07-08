'use client';

import React from 'react';
import { ShieldCheck, Zap, Headphones, Star } from 'lucide-react';

export const TopBadges: React.FC = () => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 border border-red-500/20 bg-black/40 backdrop-blur-md rounded-2xl py-3 px-6 max-w-2xl mx-auto shadow-[0_0_25px_rgba(239,68,68,0.1)]">
      <div className="flex items-center gap-2">
        <Zap className="w-4 h-4 text-red-500" />
        <span className="text-xs font-bold uppercase tracking-wider text-white">Ativação Imediata</span>
      </div>
      <div className="h-4 w-[1px] bg-red-500/20 hidden sm:block" />
      <div className="flex items-center gap-2">
        <Headphones className="w-4 h-4 text-red-500" />
        <span className="text-xs font-bold uppercase tracking-wider text-white">Suporte Premium</span>
      </div>
      <div className="h-4 w-[1px] bg-red-500/20 hidden sm:block" />
      <div className="flex items-center gap-2">
        <ShieldCheck className="w-4 h-4 text-red-500" />
        <span className="text-xs font-bold uppercase tracking-wider text-white">Pagamento Seguro</span>
      </div>
    </div>
  );
};

export const BottomBadges: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto border border-white/5 bg-white/[0.02] backdrop-blur-md rounded-3xl p-6 shadow-2xl">
      <div className="flex flex-col items-center text-center p-3">
        <ShieldCheck className="w-8 h-8 text-red-500 mb-2 drop-shadow-[0_0_8px_rgba(239,68,68,0.3)]" />
        <h4 className="text-xs font-black uppercase tracking-wider text-white">Compra 100% Segura</h4>
        <p className="text-[10px] text-gray-400 mt-1 font-medium">Seus dados protegidos</p>
      </div>

      <div className="flex flex-col items-center text-center p-3 border-t sm:border-t-0 sm:border-l border-white/5">
        <Headphones className="w-8 h-8 text-red-500 mb-2 drop-shadow-[0_0_8px_rgba(239,68,68,0.3)]" />
        <h4 className="text-xs font-black uppercase tracking-wider text-white">Suporte Especializado</h4>
        <p className="text-[10px] text-gray-400 mt-1 font-medium">Atendimento rápido no WhatsApp</p>
      </div>

      <div className="flex flex-col items-center text-center p-3 border-t lg:border-t-0 lg:border-l border-white/5">
        <Zap className="w-8 h-8 text-red-500 mb-2 drop-shadow-[0_0_8px_rgba(239,68,68,0.3)]" />
        <h4 className="text-xs font-black uppercase tracking-wider text-white">Reposição Garantida</h4>
        <p className="text-[10px] text-gray-400 mt-1 font-medium">Ficou offline? A gente resolve!</p>
      </div>

      <div className="flex flex-col items-center text-center p-3 border-t sm:border-t-0 sm:border-l border-white/5">
        <div className="flex gap-0.5 mb-2">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400 drop-shadow-[0_0_6px_rgba(251,191,36,0.5)]" />
          ))}
        </div>
        <h4 className="text-xs font-black uppercase tracking-wider text-white">Satisfação Garantida</h4>
        <p className="text-[10px] text-gray-400 mt-1 font-medium">Líder nacional em streaming</p>
      </div>
    </div>
  );
};
