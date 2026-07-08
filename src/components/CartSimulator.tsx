'use client';

import React, { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, MessageCircle, Info, Percent, Tv, Plus, Minus, Trash2 } from 'lucide-react';
import { type Product } from '../data/data';

interface CartItem {
  product: Product;
  screens: number;
}

interface CartSimulatorProps {
  selectedItems: Product[];
  onRemoveItem: (productId: string) => void;
  onClearCart: () => void;
  onUpdateScreens: (productId: string, delta: number) => void;
  screensMap: Record<string, number>;
}

type PeriodType = 'monthly' | 'quarterly' | 'semiannual' | 'annual';

const PERIOD_CONFIG: Record<PeriodType, { label: string; discount: number; months: number; tag: string }> = {
  monthly:    { label: 'Mensal',    discount: 0,   months: 1,  tag: 'Preço padrão' },
  quarterly:  { label: 'Trimestral', discount: 10,  months: 3,  tag: '10% OFF' },
  semiannual: { label: 'Semestral',  discount: 15,  months: 6,  tag: '15% OFF' },
  annual:     { label: 'Anual',      discount: 20,  months: 12, tag: '20% OFF' },
};

export const CartSimulator: React.FC<CartSimulatorProps> = ({
  selectedItems,
  onRemoveItem,
  onClearCart,
  onUpdateScreens,
  screensMap
}) => {
  const [period, setPeriod] = useState<PeriodType>('monthly');

  const pricing = useMemo(() => {
    let basePrice = 0;
    selectedItems.forEach(item => {
      const screens = screensMap[item.id] || 1;
      basePrice += item.price * screens;
    });

    // Period discount (e.g. 20% for Annual)
    const periodDiscountPercent = PERIOD_CONFIG[period].discount;
    const priceAfterPeriodDiscount = basePrice * (1 - periodDiscountPercent / 100);

    // Multi-service combo discount
    let comboDiscountPercent = 0;
    if (selectedItems.length >= 6) comboDiscountPercent = 15;
    else if (selectedItems.length >= 4) comboDiscountPercent = 10;
    else if (selectedItems.length >= 2) comboDiscountPercent = 5;

    const finalPrice = priceAfterPeriodDiscount * (1 - comboDiscountPercent / 100);
    const savings = basePrice - finalPrice;

    return {
      basePrice,
      periodDiscountPercent,
      comboDiscountPercent,
      savings,
      finalPrice,
      totalMonths: PERIOD_CONFIG[period].months,
      upfrontTotal: finalPrice * PERIOD_CONFIG[period].months
    };
  }, [selectedItems, period, screensMap]);

  const handleWhatsAppCheckout = () => {
    const phone = '5511999999999'; // Default configurable WhatsApp number
    let message = `Olá REDFEET TV! Quero assinar o seguinte combo:\n\n`;

    selectedItems.forEach(item => {
      const screens = screensMap[item.id] || 1;
      message += `• ${item.name} (${screens} tela${screens > 1 ? 's' : ''}) - R$ ${item.price.toFixed(2)}/mês\n`;
    });

    message += `\n📅 Plano: *${PERIOD_CONFIG[period].label}*`;
    if (pricing.periodDiscountPercent > 0) {
      message += ` (${pricing.periodDiscountPercent}% OFF)`;
    }
    if (pricing.comboDiscountPercent > 0) {
      message += `\n🎁 Desconto Combo: *${pricing.comboDiscountPercent}% OFF*`;
    }
    message += `\n\n💵 Valor Mensal Final: *R$ ${pricing.finalPrice.toFixed(2)}*`;
    if (pricing.totalMonths > 1) {
      message += `\n💳 Total do Período (${pricing.totalMonths} meses): *R$ ${pricing.upfrontTotal.toFixed(2)}*`;
    }
    message += `\n\nQuero ativar meus acessos agora!`;

    const encodedText = encodeURIComponent(message);
    window.open(`https://wa.me/${phone}?text=${encodedText}`, '_blank');
  };

  if (selectedItems.length === 0) {
    return (
      <div className="border border-white/5 bg-black/30 backdrop-blur-md rounded-3xl p-8 text-center text-gray-400 space-y-4">
        <ShoppingCart className="w-12 h-12 mx-auto text-gray-600 animate-pulse" />
        <h3 className="text-white font-black uppercase tracking-wider text-sm">Seu Combo está Vazio</h3>
        <p className="text-xs max-w-xs mx-auto">
          Selecione as telinhas do catálogo acima para simular seu desconto progressivo e montar o combo ideal.
        </p>
      </div>
    );
  }

  return (
    <div className="border border-red-500/20 bg-black/60 backdrop-blur-xl rounded-3xl p-6 lg:p-8 shadow-[0_0_50px_rgba(239,68,68,0.08)] space-y-6 relative overflow-hidden">
      {/* Decorative neon gradient */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-red-600/10 blur-2xl rounded-full" />

      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <ShoppingCart className="w-5 h-5 text-red-500" />
          <h3 className="text-white font-black uppercase tracking-wider text-base">Seu Combo Personalizado</h3>
        </div>
        <button
          onClick={onClearCart}
          className="text-xs font-bold text-gray-400 hover:text-red-500 transition-colors uppercase tracking-wider"
        >
          Limpar Tudo
        </button>
      </div>

      {/* Item List */}
      <div className="space-y-3 max-h-60 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-white/10">
        <AnimatePresence>
          {selectedItems.map((item) => {
            const screens = screensMap[item.id] || 1;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] border border-white/5 gap-3"
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ backgroundColor: item.textColor }}
                  />
                  <div>
                    <h4 className="text-xs font-black text-white uppercase">{item.name}</h4>
                    <p className="text-[10px] text-gray-400">R$ {item.price.toFixed(2)}/mês</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  {/* Screens Controls */}
                  <div className="flex items-center bg-black/40 border border-white/10 rounded-lg p-1">
                    <button
                      onClick={() => onUpdateScreens(item.id, -1)}
                      className="p-1 hover:text-red-500 text-gray-400 transition-colors"
                      disabled={screens <= 1}
                    >
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="text-xs font-black text-white px-2 select-none w-5 text-center">
                      {screens}
                    </span>
                    <button
                      onClick={() => onUpdateScreens(item.id, 1)}
                      className="p-1 hover:text-red-500 text-gray-400 transition-colors"
                      disabled={screens >= 5}
                    >
                      <Plus className="w-3 h-3" />
                    </button>
                  </div>

                  <button
                    onClick={() => onRemoveItem(item.id)}
                    className="text-gray-500 hover:text-red-500 transition-colors p-1"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Period Selection */}
      <div className="space-y-2">
        <label className="text-[10px] font-black uppercase tracking-wider text-gray-400 flex items-center gap-1.5">
          <Percent className="w-3.5 h-3.5 text-red-500" />
          Selecione a Duração do Plano (Desconto Progressivo)
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {(Object.keys(PERIOD_CONFIG) as PeriodType[]).map((key) => {
            const isSelected = period === key;
            const config = PERIOD_CONFIG[key];
            return (
              <button
                key={key}
                onClick={() => setPeriod(key)}
                className={`py-2 px-3 rounded-xl border flex flex-col items-center justify-center transition-all duration-300 ${
                  isSelected
                    ? 'border-red-600 bg-red-600/10 text-white shadow-[0_0_15px_rgba(220,38,38,0.15)]'
                    : 'border-white/5 bg-white/[0.02] text-gray-400 hover:bg-white/[0.05] hover:text-white'
                }`}
              >
                <span className="text-[10px] font-black uppercase tracking-wider">{config.label}</span>
                <span className="text-[8px] font-bold text-red-400 mt-0.5">{config.tag}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Discount Summary */}
      <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2 text-xs">
        <div className="flex justify-between text-gray-400 font-medium">
          <span>Subtotal mensal</span>
          <span>R$ {pricing.basePrice.toFixed(2)}</span>
        </div>

        {pricing.periodDiscountPercent > 0 && (
          <div className="flex justify-between text-red-400 font-bold">
            <span>Desconto Plano ({PERIOD_CONFIG[period].label})</span>
            <span>-{pricing.periodDiscountPercent}%</span>
          </div>
        )}

        {pricing.comboDiscountPercent > 0 && (
          <div className="flex justify-between text-red-400 font-bold">
            <span>Desconto Combo ({selectedItems.length} telinhas)</span>
            <span>-{pricing.comboDiscountPercent}%</span>
          </div>
        )}

        <div className="h-[1px] bg-white/5 my-2" />

        <div className="flex justify-between items-baseline text-white">
          <span className="font-black uppercase tracking-wider text-xs">Mensal Final</span>
          <span className="text-lg font-black text-red-500 drop-shadow-[0_0_12px_rgba(239,68,68,0.3)]">
            R$ {pricing.finalPrice.toFixed(2)}
          </span>
        </div>

        {pricing.totalMonths > 1 && (
          <div className="flex justify-between items-baseline text-gray-400 text-[10px] pt-1">
            <span>Total a pagar por {pricing.totalMonths} meses</span>
            <span className="font-bold text-white">R$ {pricing.upfrontTotal.toFixed(2)}</span>
          </div>
        )}
      </div>

      {/* CTA Button */}
      <button
        onClick={handleWhatsAppCheckout}
        className="w-full py-4 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-black uppercase tracking-widest text-xs rounded-2xl flex items-center justify-center gap-2 shadow-[0_4px_25px_rgba(220,38,38,0.3)] transition-all duration-300 hover:scale-[1.01] active:scale-[0.99] border-t border-white/10"
      >
        <MessageCircle className="w-4 h-4 fill-white" />
        Contratar Combo no WhatsApp
      </button>

      <div className="flex items-center gap-1.5 justify-center text-[9px] text-gray-500 font-semibold uppercase tracking-wider">
        <Info className="w-3.5 h-3.5" />
        Ativação automática em até 5 minutos pós PIX
      </div>
    </div>
  );
};

export default CartSimulator;
