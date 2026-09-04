import React from 'react';
import { MachineSpec } from '../types';
import { ShoppingCart, Zap, FileText, AlertTriangle, Eye, CheckCircle2 } from 'lucide-react';

interface MachineCatalogProps {
  machines: MachineSpec[];
  onAddToCart: (machine: MachineSpec) => void;
  onInstantBuy: (machine: MachineSpec) => void;
  onOpenQuote: (machineName: string) => void;
  onSelectMachine: (machine: MachineSpec) => void;
}

export const MachineCatalog: React.FC<MachineCatalogProps> = ({
  machines,
  onAddToCart,
  onInstantBuy,
  onOpenQuote,
  onSelectMachine
}) => {
  return (
    <section id="catalog-section" className="w-full py-16 bg-[#09090b] border-b border-white/5">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 flex flex-col gap-10">
        {/* Catalog Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/5 pb-6">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-500"></span>
              <span className="text-xs uppercase text-blue-400 tracking-widest font-semibold">
                VERIFIED FACTUAL SPECIFICATIONS
              </span>
            </div>
            <h2 className="font-headline text-2xl sm:text-4xl uppercase font-bold text-white tracking-tight">
              Machinery Production Catalog
            </h2>
            <p className="text-sm sm:text-base text-white/60 max-w-2xl">
              Zero-fabrication pricing, exact motor ratings, and precise reduction parameters engineered at our Aji GIDC manufacturing base.
            </p>
          </div>

          <div className="text-xs uppercase text-white/60 flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10">
            <CheckCircle2 size={16} className="text-blue-400" />
            <span>Transparent Pricing (INR)</span>
          </div>
        </div>

        {/* Catalog Cards Grid */}
        {machines.length === 0 ? (
          <div className="text-center py-16 bg-[#121214] rounded-3xl border border-white/5 text-white/60">
            <p className="font-headline text-lg font-bold text-white mb-2">No matching machinery found</p>
            <p className="text-sm">Try resetting your search parameters in the Interactive Machine Finder above.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {machines.map((machine) => (
              <article
                key={machine.id}
                className={`machine-card flex flex-col bg-[#121214] rounded-2xl overflow-hidden border shadow-xl transition-all duration-300 hover:shadow-2xl hover:border-white/20 ${
                  machine.isBestSeller ? 'border-blue-500/40 ring-1 ring-blue-500/20' : 'border-white/5'
                }`}
              >
                {/* Header Image Frame */}
                <div className="relative w-full h-52 bg-[#09090b] overflow-hidden group">
                  <img
                    src={machine.image}
                    alt={machine.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 brightness-95"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121214] via-transparent to-black/40"></div>

                  {/* Badges on Image */}
                  <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 z-10">
                    <span className="px-2.5 py-1 rounded-full bg-[#09090b]/80 border border-white/10 text-[10px] text-blue-400 font-bold uppercase tracking-wider backdrop-blur-md">
                      {machine.modelCode}
                    </span>
                    {machine.category === 'wire' && (
                      <span className="px-2.5 py-1 rounded-full bg-[#09090b]/80 border border-white/10 text-[10px] text-purple-300 font-bold uppercase backdrop-blur-md">
                        Wire Drawing
                      </span>
                    )}
                  </div>

                  <div className="absolute top-3 right-3 flex flex-col items-end gap-1.5 z-10">
                    {machine.isBestSeller && (
                      <span className="px-3 py-1 rounded-full bg-blue-600 text-white text-[10px] uppercase font-bold shadow-md shadow-blue-600/30">
                        Best Seller
                      </span>
                    )}
                    {machine.isHighSpeed && (
                      <span className="px-3 py-1 rounded-full bg-white/10 border border-white/10 text-white text-[10px] uppercase font-bold backdrop-blur-md">
                        High Speed
                      </span>
                    )}
                  </div>

                  {/* Net Price Banner on Image Bottom Right */}
                  <div className="absolute bottom-3 right-3 px-3.5 py-1 rounded-xl bg-[#09090b]/90 border border-white/10 font-headline text-base sm:text-lg text-white font-bold tracking-tight shadow-md backdrop-blur-md">
                    {machine.priceFormatted}
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-5 sm:p-6 flex flex-col flex-grow justify-between gap-5">
                  <div className="flex flex-col gap-3">
                    <div>
                      <span className="text-[11px] uppercase tracking-wider text-blue-400 font-semibold">
                        {machine.categoryLabel}
                      </span>
                      <h3 className="font-headline text-lg sm:text-xl uppercase font-bold text-white leading-tight mt-0.5">
                        {machine.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-white/60 mt-1.5 leading-relaxed line-clamp-2">
                        {machine.shortDescription}
                      </p>
                    </div>

                    {/* Price Condition Exclusion Badge (Mandatory for Wire Drawing) */}
                    {machine.hasPriceCondition && (
                      <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-start gap-2 text-left">
                        <AlertTriangle size={15} className="text-amber-400 shrink-0 mt-0.5" />
                        <span className="text-[11px] text-amber-300 leading-snug font-medium">
                          {machine.priceConditionText}
                        </span>
                      </div>
                    )}

                    {/* Quick Specs Grid */}
                    <div className="grid grid-cols-2 gap-2 text-left text-xs">
                      {machine.lengthRange && (
                        <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/5 flex flex-col">
                          <span className="text-[10px] text-white/40 uppercase font-medium">Nail Length</span>
                          <span className="text-white font-semibold text-xs truncate">{machine.lengthRange}</span>
                        </div>
                      )}

                      {machine.wireDiameter && (
                        <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/5 flex flex-col">
                          <span className="text-[10px] text-white/40 uppercase font-medium">Wire Gauge</span>
                          <span className="text-white font-semibold text-xs truncate">{machine.wireDiameter}</span>
                        </div>
                      )}

                      {machine.drumSpecs && (
                        <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/5 flex flex-col">
                          <span className="text-[10px] text-white/40 uppercase font-medium">Drum Specs</span>
                          <span className="text-white font-semibold text-xs truncate">{machine.drumSpecs}</span>
                        </div>
                      )}

                      {machine.reductionSpan && (
                        <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/5 flex flex-col">
                          <span className="text-[10px] text-white/40 uppercase font-medium">Reduction Path</span>
                          <span className="text-blue-400 font-semibold text-xs truncate">{machine.reductionSpan}</span>
                        </div>
                      )}

                      {machine.productionSpeed && (
                        <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/5 flex flex-col">
                          <span className="text-[10px] text-white/40 uppercase font-medium">Production Speed</span>
                          <span className="text-blue-400 font-semibold text-xs truncate">{machine.productionSpeed}</span>
                        </div>
                      )}

                      <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/5 flex flex-col">
                        <span className="text-[10px] text-white/40 uppercase font-medium">Output Capacity</span>
                        <span className="text-white font-semibold text-xs truncate">{machine.dailyYield}</span>
                      </div>

                      <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/5 flex flex-col">
                        <span className="text-[10px] text-white/40 uppercase font-medium">Motor Required</span>
                        <span className="text-white/80 font-semibold text-xs truncate">{machine.motorRequired}</span>
                      </div>

                      <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/5 flex flex-col">
                        <span className="text-[10px] text-white/40 uppercase font-medium">Weight / Chassis</span>
                        <span className="text-white/80 font-semibold text-xs truncate">{machine.machineWeight}</span>
                      </div>
                    </div>
                  </div>

                  {/* Actions & Price Area */}
                  <div className="flex flex-col gap-2.5 pt-3 border-t border-white/5">
                    <div className="flex items-baseline justify-between text-xs uppercase">
                      <span className="text-white/50 font-medium">Factory Net Base</span>
                      <span className="text-blue-400 font-headline text-xl font-bold">{machine.priceFormatted}</span>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <button
                        onClick={() => onAddToCart(machine)}
                        className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-xs uppercase font-medium hover:bg-white/10 hover:border-white/20 transition-all active:scale-95"
                      >
                        <ShoppingCart size={15} />
                        <span>Add to Cart</span>
                      </button>

                      <button
                        onClick={() => onInstantBuy(machine)}
                        className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-blue-600 text-white text-xs uppercase font-semibold hover:bg-blue-500 transition-all shadow-lg shadow-blue-600/20 active:scale-95"
                      >
                        <Zap size={15} />
                        <span>Buy Now</span>
                      </button>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <button
                        onClick={() => onSelectMachine(machine)}
                        className="w-full py-2 rounded-xl bg-white/[0.03] border border-white/5 text-white/70 hover:text-white hover:bg-white/5 text-[11px] uppercase tracking-wider transition-colors flex items-center justify-center gap-1 font-medium"
                      >
                        <Eye size={13} />
                        <span>Full Specs</span>
                      </button>

                      <button
                        onClick={() => onOpenQuote(machine.name)}
                        className="w-full py-2 rounded-xl bg-blue-600/10 border border-blue-500/20 text-blue-400 hover:bg-blue-600/20 hover:border-blue-500/30 text-[11px] uppercase tracking-wider transition-colors flex items-center justify-center gap-1 font-medium"
                      >
                        <FileText size={13} />
                        <span>Get Quote</span>
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
