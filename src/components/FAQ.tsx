'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import { FAQ_ITEMS } from '../data/data';

export const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleOpen = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div className="flex items-center gap-2 justify-center">
        <HelpCircle className="w-5 h-5 text-red-500" />
        <h3 className="text-white font-black uppercase tracking-wider text-base">Perguntas Frequentes</h3>
      </div>

      <div className="space-y-3">
        {FAQ_ITEMS.map((item) => {
          const isOpen = openId === item.id;
          return (
            <div
              key={item.id}
              className="border border-white/5 bg-white/[0.01] rounded-2xl overflow-hidden transition-colors duration-300 hover:bg-white/[0.02]"
            >
              <button
                onClick={() => toggleOpen(item.id)}
                className="w-full py-4 px-6 flex items-center justify-between gap-4 text-left"
              >
                <span className="text-xs sm:text-sm font-black text-white uppercase tracking-wider">
                  {item.question}
                </span>
                <span className="text-red-500 flex-shrink-0">
                  {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                </span>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <div className="pb-4 px-6 text-xs sm:text-sm text-gray-400 font-medium leading-relaxed border-t border-white/[0.02] pt-3">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FAQ;
