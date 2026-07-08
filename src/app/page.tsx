'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, MessageCircle, Play } from 'lucide-react';
import { type Product } from '../data/data';
import Navbar from '../components/Navbar';
import ParallaxBackground from '../components/ParallaxBackground';
import { TopBadges, BottomBadges } from '../components/TrustBadges';
import FlyerGrid from '../components/FlyerGrid';
import CartSimulator from '../components/CartSimulator';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';

export default function Home() {
  const [selectedItems, setSelectedItems] = useState<Product[]>([]);
  const [screensMap, setScreensMap] = useState<Record<string, number>>({});

  const handleToggleSelect = (product: Product) => {
    if (selectedItems.some((item) => item.id === product.id)) {
      setSelectedItems((prev) => prev.filter((item) => item.id !== product.id));
      const updatedScreens = { ...screensMap };
      delete updatedScreens[product.id];
      setScreensMap(updatedScreens);
    } else {
      setSelectedItems((prev) => [...prev, product]);
      setScreensMap((prev) => ({ ...prev, [product.id]: 1 }));
    }
  };

  const handleRemoveItem = (productId: string) => {
    setSelectedItems((prev) => prev.filter((item) => item.id !== productId));
    const updatedScreens = { ...screensMap };
    delete updatedScreens[productId];
    setScreensMap(updatedScreens);
  };

  const handleClearCart = () => {
    setSelectedItems([]);
    setScreensMap({});
  };

  const handleUpdateScreens = (productId: string, delta: number) => {
    const current = screensMap[productId] || 1;
    const nextValue = Math.min(5, Math.max(1, current + delta));
    setScreensMap((prev) => ({ ...prev, [productId]: nextValue }));
  };

  const selectedIds = selectedItems.map((item) => item.id);

  return (
    <>
      <Navbar />

      <main className="relative min-h-screen flex-grow pt-24 pb-16 overflow-hidden">
        {/* Parallax elements */}
        <ParallaxBackground />

        {/* Hero Section */}
        <section className="relative z-10 max-w-7xl mx-auto px-6 text-center pt-8 md:pt-16 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-red-500/35 bg-red-950/15 text-red-500 text-xs font-black uppercase tracking-widest"
          >
            <Sparkles className="w-3.5 h-3.5" />
            LÍDERES DE TELINHAS NO MERCADO
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-2"
          >
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold uppercase tracking-tight text-white leading-[0.95]">
              AS MELHORES <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-red-500 to-red-400 drop-shadow-[0_0_30px_rgba(220,38,38,0.3)]">
                TELINHAS
              </span>{' '}
              DO BRASIL!
            </h1>
            <h2 className="text-2xl sm:text-4xl font-black italic tracking-widest text-red-600 drop-shadow-[0_0_12px_rgba(220,38,38,0.25)]">
              REDFEET TV
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xs sm:text-sm font-black uppercase tracking-wider text-gray-400"
          >
            ESCOLHA A SUA E <span className="text-red-500">APROVEITE!</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="pt-2"
          >
            <TopBadges />
          </motion.div>
        </section>

        {/* Catalog & Cart Section */}
        <section id="catalog" className="relative z-10 max-w-[94vw] xl:max-w-[1600px] mx-auto px-4 pt-16 md:pt-24 space-y-12">
          {/* Channel Grid */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 border-b border-white/5 pb-3">
              <Play className="w-5 h-5 text-red-500 fill-red-500" />
              <h3 className="text-white font-black uppercase tracking-wider text-sm">
                PLANOS INDIVIDUAIS
              </h3>
            </div>
            <FlyerGrid selectedIds={selectedIds} onToggleSelect={handleToggleSelect} />
          </div>

          {/* Massive WhatsApp Button (Stacked below the grid) */}
          <div className="max-w-xl mx-auto pt-8 text-center space-y-4">
            <button
              onClick={() => {
                const phone = '5511999999999';
                let text = "Olá REDFEET TV! Quero assinar e tirar dúvidas sobre as telinhas.";
                if (selectedItems.length > 0) {
                  text = `Olá REDFEET TV! Tenho interesse em assinar o combo com as telinhas:\n\n` + 
                         selectedItems.map(item => `• ${item.name}`).join('\n') + 
                         `\n\nComo posso prosseguir para ativação imediata?`;
                }
                window.open(`https://wa.me/${phone}?text=${encodeURIComponent(text)}`, '_blank');
              }}
              className="w-full py-5 bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-400 hover:to-green-500 text-white font-black uppercase tracking-widest text-sm rounded-2xl flex items-center justify-center gap-3 shadow-[0_0_40px_rgba(34,197,94,0.4)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] border-t border-white/20 cursor-pointer"
            >
              <MessageCircle className="w-6 h-6 fill-white" />
              Fale conosco pelo WhatsApp
            </button>
            
            {selectedItems.length > 0 && (
              <p className="text-[10px] text-emerald-400 font-bold uppercase tracking-wider">
                {selectedItems.length} telinha{selectedItems.length > 1 ? 's' : ''} selecionada{selectedItems.length > 1 ? 's' : ''} no catálogo acima
              </p>
            )}
          </div>
        </section>

        {/* Bottom Badges */}
        <section className="relative z-10 max-w-7xl mx-auto px-6 pt-24">
          <BottomBadges />
        </section>

        {/* FAQ Section */}
        <section className="relative z-10 max-w-7xl mx-auto px-6 pt-24">
          <FAQ />
        </section>
      </main>

      {/* Floating Bottom CTA */}
      <div className="fixed bottom-6 left-0 right-0 z-40 px-6 flex justify-center pointer-events-none">
        <button
          onClick={() => {
            const phone = '5511999999999';
            let text = "Olá REDFEET TV! Quero assinar e tirar dúvidas sobre as telinhas.";
            if (selectedItems.length > 0) {
              text = `Olá REDFEET TV! Tenho interesse em assinar o combo com as telinhas:\n\n` + 
                     selectedItems.map(item => `• ${item.name}`).join('\n') + 
                     `\n\nComo posso prosseguir para ativação imediata?`;
            }
            window.open(`https://wa.me/${phone}?text=${encodeURIComponent(text)}`, '_blank');
          }}
          className="pointer-events-auto bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-400 hover:to-green-500 text-white text-xs font-black uppercase tracking-widest px-6 py-4 rounded-full flex items-center gap-2 shadow-[0_8px_30px_rgba(16,185,129,0.4)] border border-white/10 transition-transform hover:scale-105 active:scale-95 text-center cursor-pointer"
        >
          <MessageCircle className="w-4 h-4 fill-white" />
          Fale conosco pelo WhatsApp
        </button>
      </div>

      <Footer />
    </>
  );
}
