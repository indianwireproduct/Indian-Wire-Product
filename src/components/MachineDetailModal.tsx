import React from 'react';
import { MachineSpec } from '../types';
import { X, Check, ShoppingCart, Zap, Send, ShieldAlert, Cpu } from 'lucide-react';

interface MachineDetailModalProps {
  machine: MachineSpec | null;
  onClose: () => void;
  onAddToCart: (machine: MachineSpec) => void;
  onInstantBuy: (machine: MachineSpec) => void;
  onOpenQuote: (machineName: string) => void;
}

export const MachineDetailModal: React.FC<MachineDetailModalProps> = ({
  machine,
  onClose,
  onAddToCart,
  onInstantBuy,
  onOpenQuote
}) => {
  if (!machine) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="w-full max-w-3xl bg-[#121214] rounded-2xl shadow-2xl border border-white/10 overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="p-5 bg-[#121214] border-b border-white/5 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="p-1.5 rounded-lg bg-blue-600/10 text-blue-400 border border-blue-500/20">
              <Cpu size={20} />
            </div>
            <div>
              <span className="text-[10px] uppercase text-blue-400 tracking-wider font-semibold">
                {machine.modelCode}
              </span>
              <h3 className="font-headline text-lg sm:text-xl uppercase text-white font-bold leading-tight">
                {machine.name}
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-white/60 hover:text-white hover:bg-white/5 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content Scroll */}
        <div className="p-6 overflow-y-auto flex flex-col gap-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
            {/* Image Preview */}
            <div className="relative rounded-2xl overflow-hidden bg-[#09090b] border border-white/5 aspect-[4/3]">
              <img
                src={machine.image}
                alt={machine.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-3 left-3 px-3 py-1 rounded-xl bg-[#09090b]/90 border border-white/10 text-blue-400 font-headline text-base font-bold">
                {machine.priceFormatted}
              </div>
            </div>

            {/* Description & Narrative */}
            <div className="flex flex-col gap-3">
              <span className="text-xs uppercase tracking-wider text-blue-400 font-semibold">
                {machine.subtitle}
              </span>
              <p className="text-sm text-white/60 leading-relaxed">
                {machine.fullDescription}
              </p>

              {machine.hasPriceCondition && (
                <div className="p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-300 text-xs flex items-start gap-2">
                  <ShieldAlert size={16} className="shrink-0 mt-0.5 text-rose-400" />
                  <span>{machine.priceConditionText}</span>
                </div>
              )}
            </div>
          </div>

          {/* Technical Parameter Matrix */}
          <div className="flex flex-col gap-3">
            <h4 className="font-headline text-sm uppercase text-white font-bold border-b border-white/5 pb-2">
              Engineering Specification Matrix
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs font-headline">
              {machine.lengthRange && (
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                  <span className="text-[10px] text-white/40 uppercase block font-medium">Nail Length</span>
                  <span className="text-white font-bold">{machine.lengthRange}</span>
                </div>
              )}
              {machine.wireDiameter && (
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                  <span className="text-[10px] text-white/40 uppercase block font-medium">Wire Diameter</span>
                  <span className="text-white font-bold">{machine.wireDiameter}</span>
                </div>
              )}
              {machine.productionSpeed && (
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                  <span className="text-[10px] text-white/40 uppercase block font-medium">Max Speed</span>
                  <span className="text-blue-400 font-bold">{machine.productionSpeed}</span>
                </div>
              )}
              {machine.drumSpecs && (
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                  <span className="text-[10px] text-white/40 uppercase block font-medium">Drum Specs</span>
                  <span className="text-white font-bold">{machine.drumSpecs}</span>
                </div>
              )}
              {machine.reductionSpan && (
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                  <span className="text-[10px] text-white/40 uppercase block font-medium">Reduction Span</span>
                  <span className="text-blue-400 font-bold">{machine.reductionSpan}</span>
                </div>
              )}
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                <span className="text-[10px] text-white/40 uppercase block font-medium">Rated Yield</span>
                <span className="text-white font-bold">{machine.dailyYield}</span>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                <span className="text-[10px] text-white/40 uppercase block font-medium">Motor Power</span>
                <span className="text-white font-bold">{machine.motorRequired}</span>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                <span className="text-[10px] text-white/40 uppercase block font-medium">Machine Net Mass</span>
                <span className="text-white font-bold">{machine.machineWeight}</span>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                <span className="text-[10px] text-white/40 uppercase block font-medium">Plant Origin</span>
                <span className="text-white font-bold">Aji GIDC, Rajkot</span>
              </div>
            </div>
          </div>

          {/* Key Standard Features */}
          <div className="flex flex-col gap-2">
            <h4 className="font-headline text-sm uppercase text-white font-bold">Standard Integrated Features</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-white/70">
              {machine.features.map((feature, i) => (
                <div key={i} className="flex items-center gap-2 p-2.5 rounded-xl bg-white/[0.02] border border-white/5">
                  <Check size={14} className="text-blue-400 shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-5 bg-[#121214] border-t border-white/5 flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-col">
            <span className="text-[10px] text-white/40 uppercase font-medium">Ex-Factory Base Price</span>
            <span className="font-headline text-xl text-blue-400 font-bold">{machine.priceFormatted}</span>
          </div>

          <div className="flex items-center gap-2 text-xs uppercase font-semibold">
            <button
              onClick={() => {
                onAddToCart(machine);
                onClose();
              }}
              className="px-4 py-2.5 rounded-xl bg-white/5 text-white hover:bg-white/10 transition-colors flex items-center gap-1.5"
            >
              <ShoppingCart size={15} />
              <span>Add to Cart</span>
            </button>

            <button
              onClick={() => {
                onInstantBuy(machine);
                onClose();
              }}
              className="px-5 py-2.5 rounded-xl bg-blue-600 text-white hover:bg-blue-500 transition-all flex items-center gap-1.5 shadow-lg shadow-blue-600/25 active:scale-95"
            >
              <Zap size={15} />
              <span>Buy Now</span>
            </button>

            <button
              onClick={() => {
                onOpenQuote(machine.name);
                onClose();
              }}
              className="px-4 py-2.5 rounded-xl bg-white/[0.02] border border-white/10 text-white/70 hover:text-white hover:border-white/20 transition-colors flex items-center gap-1.5"
            >
              <Send size={14} />
              <span>Request RFQ</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
