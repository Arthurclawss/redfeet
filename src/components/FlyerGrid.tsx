'use client';

import React, { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useMotionTemplate, AnimatePresence } from 'framer-motion';
import { Check } from 'lucide-react';
import confetti from 'canvas-confetti';
import { PRODUCTS, type Product } from '../data/data';
import BrandLogo from './BrandLogo';

interface FlyerGridProps {
  selectedIds: string[];
  onToggleSelect: (product: Product) => void;
}

interface FlyerCardProps {
  product: Product;
  isSelected: boolean;
  idx: number;
  onToggleSelect: (product: Product) => void;
}

const FlyerCard: React.FC<FlyerCardProps> = ({ product, isSelected, idx, onToggleSelect }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  // 3D Motion Values
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['10deg', '-10deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-10deg', '10deg']);

  // Precise pixel coordinate tracking for cursor glow
  const mouseRawX = useMotionValue(0);
  const mouseRawY = useMotionValue(0);
  const glowBackground = useMotionTemplate`radial-gradient(circle 180px at ${mouseRawX}px ${mouseRawY}px, ${product.glowColor}, transparent 80%)`;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const normalizedX = (e.clientX - rect.left) / rect.width - 0.5;
    const normalizedY = (e.clientY - rect.top) / rect.height - 0.5;

    x.set(normalizedX);
    y.set(normalizedY);

    // Track raw pixel coordinate offsets
    mouseRawX.set(e.clientX - rect.left);
    mouseRawY.set(e.clientY - rect.top);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const handleToggle = () => {
    if (!isSelected) {
      const rect = cardRef.current?.getBoundingClientRect();
      if (rect) {
        const xPercent = (rect.left + rect.width / 2) / window.innerWidth;
        const yPercent = (rect.top + rect.height / 2) / window.innerHeight;
        
        confetti({
          particleCount: 25,
          spread: 45,
          origin: { x: xPercent, y: yPercent },
          colors: [product.textColor, '#ffffff'],
          ticks: 60
        });
      }
    }
    onToggleSelect(product);
  };

  return (
    <motion.div
      ref={cardRef}
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={handleToggle}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
        boxShadow: isSelected ? `0 0 25px ${product.glowColor}` : undefined
      }}
      className={`relative h-52 sm:h-64 rounded-2xl sm:rounded-3xl bg-black/40 border cursor-pointer select-none overflow-hidden transition-all duration-300 flex flex-col justify-between group ${
        isSelected
          ? 'border-red-600 bg-red-950/10'
          : 'border-white/5 hover:border-white/10 hover:bg-white/[0.02]'
      }`}
    >
      {/* Background Hover Glow */}
      <motion.div
        style={{ background: glowBackground }}
        className="absolute inset-0 z-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      />

      {/* Top Row / Popular Badge */}
      <div 
        style={{ transform: 'translateZ(20px)' }}
        className="p-4 flex justify-between items-start relative z-10"
      >
        {product.popular ? (
          <span className="text-[8px] sm:text-[10px] font-black tracking-widest text-red-500 bg-red-500/10 border border-red-500/20 px-2 py-0.5 sm:py-1 rounded-full uppercase">
            Popular
          </span>
        ) : (
          <span />
        )}
        <div
          className={`w-5.5 h-5.5 sm:w-6 h-6 rounded-full flex items-center justify-center border transition-all duration-300 ${
            isSelected
              ? 'bg-red-600 border-red-600 text-white'
              : 'border-white/10 bg-black/40 text-transparent'
          }`}
        >
          <Check className="w-3.5 h-3.5 stroke-[3]" />
        </div>
      </div>

      {/* Logo (Centered) - Floating 3D Parallax Effect */}
      <div 
        style={{ transform: 'translateZ(50px)' }}
        className="flex-grow flex items-center justify-center p-4 relative z-10 scale-[1.7] sm:scale-[2.1] group-hover:scale-[1.85] group-hover:sm:scale-[2.3] transition-transform duration-355"
      >
        <BrandLogo logoKey={product.logoKey} />
      </div>

      {/* Price Banner with Brand-aligned Glow */}
      <div
        style={{ transform: 'translateZ(15px)' }}
        className={`h-12 sm:h-14 border-t flex items-center justify-center px-4 relative z-10 transition-colors duration-300 ${
          isSelected
            ? 'border-red-500/20 bg-red-500/10 text-red-500'
            : 'border-white/5 bg-white/[0.02] text-gray-400'
        }`}
      >
        <div className="text-center">
          <span 
            className="text-xs sm:text-base font-black mr-0.5 sm:mr-1 transition-all duration-300"
            style={{ 
              color: isSelected ? product.textColor : '#ffffff',
              textShadow: isSelected ? `0 0 10px ${product.glowColor}` : undefined
            }}
          >
            R$ {product.price.toFixed(2)}
          </span>
          <span className="text-[8px] sm:text-[10px] uppercase tracking-widest font-bold opacity-60">/ mês</span>
        </div>
      </div>
    </motion.div>
  );
};

export const FlyerGrid: React.FC<FlyerGridProps> = ({ selectedIds, onToggleSelect }) => {
  const [activeCategory, setActiveCategory] = useState<string>('Todos');

  const categories = ['Todos', 'Filmes', 'Séries', 'TV', 'Esportes', 'Música'];

  const filteredProducts = PRODUCTS.filter(p => {
    if (activeCategory === 'Todos') return true;
    return p.category === activeCategory;
  });

  return (
    <div className="w-full space-y-6 sm:space-y-8">
      {/* Category Filters */}
      <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-black uppercase tracking-wider transition-all duration-300 ${
              activeCategory === category
                ? 'bg-red-600 text-white shadow-[0_0_15px_rgba(220,38,38,0.5)]'
                : 'bg-white/[0.03] text-gray-400 hover:bg-white/[0.08] hover:text-white border border-white/5'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Grid with Framer Motion AnimatePresence & layout transitions */}
      <motion.div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6">
        <AnimatePresence mode="popLayout">
          {filteredProducts.map((product, idx) => {
            const isSelected = selectedIds.includes(product.id);
            return (
              <FlyerCard
                key={product.id}
                product={product}
                isSelected={isSelected}
                idx={idx}
                onToggleSelect={onToggleSelect}
              />
            );
          })}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default FlyerGrid;
