'use client';

import React from 'react';
import { Tv } from 'lucide-react';

interface BrandLogoProps {
  logoKey: string;
  className?: string;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({ logoKey, className = "w-full" }) => {
  switch (logoKey) {
    case 'netflix':
      return (
        <div className="flex items-center justify-center select-none w-full">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" 
            alt="Netflix" 
            className="w-20 h-8 object-contain drop-shadow-[0_4px_12px_rgba(229,9,20,0.3)]" 
          />
        </div>
      );
    case 'disney':
      return (
        <div className="flex items-center justify-center select-none w-full">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/3/3e/Disney%2B_logo.svg" 
            alt="Disney+" 
            className="w-36 h-12 object-contain" 
          />
        </div>
      );
    case 'prime':
      return (
        <div className="flex flex-col items-center justify-center select-none pt-1">
          <div className="flex items-baseline gap-0.5">
            <span className="text-lg font-black lowercase text-[#00A8E0]">prime</span>
            <span className="text-xs font-bold text-white">video</span>
          </div>
          <svg viewBox="0 0 40 8" fill="none" className="w-14 h-2 text-[#00A8E0] -mt-1">
            <path d="M2,2 Q20,9 38,2" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M38,2 l-3,2.2 M38,2 l-1.5,3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>
      );
    case 'prime-adicionais':
      return (
        <div className="flex flex-col items-center justify-center select-none">
          <div className="flex items-baseline gap-0.5 leading-none">
            <span className="text-lg font-black lowercase text-[#00A8E0]">prime</span>
            <span className="text-[10px] font-bold text-white">+28</span>
          </div>
          <span className="text-[7.5px] font-black tracking-wider text-amber-400 bg-amber-400/10 px-1 py-0.5 rounded border border-amber-400/25 mt-0.5">ADICIONAIS</span>
        </div>
      );
    case 'globoplay':
      return (
        <div className="flex items-center justify-center gap-1.5 select-none">
          <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
            <circle cx="12" cy="12" r="10" fill="url(#globoplay-grad)" />
            <defs>
              <radialGradient id="globoplay-grad" cx="20%" cy="20%" r="90%">
                <stop offset="0%" stopColor="#FF4A00" />
                <stop offset="50%" stopColor="#FF007A" />
                <stop offset="100%" stopColor="#7A00FF" />
              </radialGradient>
            </defs>
            <rect x="7" y="7" width="10" height="10" rx="2.5" stroke="white" strokeWidth="1.5" />
          </svg>
          <span className="text-sm font-black tracking-tight text-white">
            globoplay
          </span>
        </div>
      );
    case 'telecine':
      return (
        <div className="flex flex-col items-center justify-center select-none tracking-tighter leading-[0.9] pt-1">
          <span className="text-lg font-black text-[#EB0028]">TELE</span>
          <span className="text-base font-bold text-white">CINE</span>
        </div>
      );
    case 'hbomax':
      return (
        <div className="flex items-baseline justify-center gap-0.5 select-none pt-1">
          <span className="text-2xl font-black text-white tracking-tighter">HBO</span>
          <span className="text-sm font-black text-[#9933FF]">max</span>
        </div>
      );
    case 'starplus':
      return (
        <div className="flex items-center justify-center gap-1 select-none font-black text-white">
          <span className="text-lg tracking-widest font-black italic">STAR</span>
          <span className="text-xl text-[#E50914] font-black">+</span>
        </div>
      );
    case 'paramount':
      return (
        <div className="flex flex-col items-center justify-center gap-0.5 select-none">
          <span className="text-sm font-black tracking-widest text-[#0057FF] uppercase">Paramount+</span>
        </div>
      );
    case 'discovery':
      return (
        <div className="flex items-center justify-center gap-1 select-none">
          <span className="text-sm font-black text-white tracking-tight">discovery<span className="text-[#22C55E]">+</span></span>
        </div>
      );
    case 'skycompleta':
      return (
        <div className="flex flex-col items-center justify-center select-none leading-none pt-1">
          <span className="text-2xl font-black text-[#EF4444] italic tracking-tighter">SKY<span className="text-[#EF4444] font-black">+</span></span>
          <span className="text-[7.5px] font-black tracking-widest text-white/50 bg-white/5 px-2 py-0.5 rounded border border-white/5 mt-1">COMPLETA</span>
        </div>
      );
    case 'clarotv':
      return (
        <div className="flex items-center justify-center gap-1 select-none">
          <span className="text-base font-black text-white italic tracking-tight">Claro<span className="text-[#E50914] font-black">tv+</span></span>
        </div>
      );
    case 'clarocompleta':
      return (
        <div className="flex flex-col items-center justify-center select-none leading-none">
          <span className="text-base font-black text-white italic tracking-tight">Claro<span className="text-[#E50914] font-black">tv+</span></span>
          <span className="text-[7.5px] font-black tracking-widest text-white/50 bg-[#E50914]/15 px-2 py-0.5 rounded border border-[#E50914]/20 mt-1">COMPLETA</span>
        </div>
      );
    case 'premiere':
      return (
        <div className="px-2.5 py-0.5 rounded border border-[#22C55E] bg-[#22C55E]/5 text-center select-none">
          <span className="text-[10px] font-black italic text-[#22C55E] tracking-wider">PREMIERE</span>
        </div>
      );
    case 'ufc':
      return (
        <div className="flex items-center justify-center gap-1 select-none font-black text-white">
          <span className="text-xl tracking-tighter text-[#E50914] font-black italic">UFC</span>
          <span className="text-[8px] font-bold text-white/50 tracking-wider">FIGHT PASS</span>
        </div>
      );
    case 'spotify':
      return (
        <div className="flex items-center justify-center gap-1.5 select-none">
          <svg viewBox="0 0 168 168" className="w-6 h-6 text-[#1DB954] fill-[#1DB954]">
            <circle cx="84" cy="84" r="84"/>
            <path d="M120.7 121.6c-1.6 2.6-4.9 3.4-7.5 1.8-20.5-12.5-46.3-15.4-76.7-8.4-2.9.7-5.9-1.1-6.6-4-.7-2.9 1.1-5.9 4-6.6 33.3-7.6 61.8-4.3 84.9 9.7 2.6 1.6 3.4 4.9 1.9 7.5zm10.1-22.5c-2 3.2-6.2 4.2-9.4 2.2-23.5-14.4-59.3-18.6-87-10.2-3.6 1.1-7.4-.9-8.5-4.5-1.1-3.6.9-7.4 4.5-8.5 31.7-9.6 71.1-4.9 98.2 11.6 3.2 2 4.2 6.2 2.2 9.4zm.9-23.4c-28.2-16.8-74.7-18.3-101.6-10.1-4.3 1.3-8.8-1.1-10.1-5.4-1.3-4.3 1.1-8.8 5.4-10.1 30.9-9.4 82.3-7.6 114.8 11.7 3.9 2.3 5.2 7.3 2.9 11.2-2.3 3.9-7.3 5.2-11.2 2.9l-.2-.2z" fill="white"/>
          </svg>
          <span className="text-sm font-black tracking-wider text-white">Spotify</span>
        </div>
      );
    case 'youtube':
      return (
        <div className="flex items-center justify-center gap-1 select-none">
          <svg viewBox="0 0 576 512" className="w-6 h-5 fill-[#FF0000]">
            <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" />
          </svg>
          <span className="text-xs font-black tracking-wider text-white uppercase">Premium</span>
        </div>
      );
    case 'viki':
      return (
        <div className="flex items-baseline justify-center gap-0.5 select-none">
          <span className="text-[10px] font-bold text-white/40 uppercase mr-0.5">Rakuten</span>
          <span className="text-[21px] font-black text-[#00A8E5]">Viki</span>
        </div>
      );
    case 'vivoplay':
      return (
        <div className="flex items-baseline justify-center gap-1 select-none">
          <span className="text-[22px] font-black italic text-[#9933FF]">vivo</span>
          <span className="text-[12px] font-bold text-white tracking-widest">PLAY</span>
        </div>
      );
    case 'crunchyroll':
      return (
        <div className="flex items-center justify-center gap-1.5 select-none">
          <svg viewBox="0 0 100 100" className="w-5 h-5">
            <circle cx="50" cy="50" r="50" fill="#F47521"/>
            <circle cx="58" cy="50" r="30" fill="#1a1a1a"/>
            <circle cx="65" cy="50" r="13" fill="#F47521"/>
          </svg>
          <span className="text-xs font-black tracking-tight text-white">Crunchyroll</span>
        </div>
      );
    default:
      return <Tv className={className} />;
  }
};
export default BrandLogo;
