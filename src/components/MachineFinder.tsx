import React from 'react';
import { FilterState } from '../types';
import { SlidersHorizontal, RotateCcw } from 'lucide-react';

interface MachineFinderProps {
  filters: FilterState;
  onFilterChange: (filters: FilterState) => void;
  onReset: () => void;
  matchedCount: number;
  totalCount: number;
}

export const MachineFinder: React.FC<MachineFinderProps> = ({
  filters,
  onFilterChange,
  onReset,
  matchedCount,
  totalCount
}) => {
  return (
    <section id="finder-section" className="w-full bg-[#09090b] py-8 border-b border-white/5">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="p-6 sm:p-8 rounded-3xl bg-[#121214] border border-white/5 shadow-2xl flex flex-col gap-6">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <SlidersHorizontal size={17} className="text-blue-400" />
                <span className="text-xs uppercase text-blue-400 tracking-wider font-semibold">
                  Algorithmic Selector
                </span>
              </div>
              <h2 className="font-headline text-xl sm:text-2xl uppercase font-bold text-white mt-1">
                Interactive Machine Finder
              </h2>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={onReset}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/70 hover:text-white hover:bg-white/10 transition-colors text-xs font-medium"
              >
                <RotateCcw size={14} />
                <span>Reset Criteria</span>
              </button>
            </div>
          </div>

          {/* Filter Controls Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Machine Category */}
            <div className="flex flex-col gap-1.5">
              <label className="text-[11px] uppercase tracking-wider text-white/60 font-medium">
                Machine Category
              </label>
              <select
                value={filters.category}
                onChange={(e) => onFilterChange({ ...filters, category: e.target.value as FilterState['category'] })}
                className="w-full bg-[#09090b] border border-white/10 text-white text-sm p-3 rounded-xl focus:outline-none focus:border-blue-500 transition-colors"
              >
                <option value="all">All Machinery ({totalCount} Models)</option>
                <option value="nail">Wire Nail Machines (5 Models)</option>
                <option value="wire">Wire Drawing Machines (2 Models)</option>
              </select>
            </div>

            {/* Target Speed */}
            <div className="flex flex-col gap-1.5">
              <label className="text-[11px] uppercase tracking-wider text-white/60 font-medium">
                Target Speed / Output
              </label>
              <select
                value={filters.speed}
                onChange={(e) => onFilterChange({ ...filters, speed: e.target.value as FilterState['speed'] })}
                className="w-full bg-[#09090b] border border-white/10 text-white text-sm p-3 rounded-xl focus:outline-none focus:border-blue-500 transition-colors"
              >
                <option value="all">Any Speed Range</option>
                <option value="high">High Speed (500 - 700 nails/min)</option>
                <option value="standard">Standard Duty (250 - 350 nails/min)</option>
                <option value="heavy">Heavy Wire Drawing (1 - 4 Ton/Day)</option>
              </select>
            </div>

            {/* Nail Length / Reduction */}
            <div className="flex flex-col gap-1.5">
              <label className="text-[11px] uppercase tracking-wider text-white/60 font-medium">
                Nail Length / Gauge Scope
              </label>
              <select
                value={filters.length}
                onChange={(e) => onFilterChange({ ...filters, length: e.target.value as FilterState['length'] })}
                className="w-full bg-[#09090b] border border-white/10 text-white text-sm p-3 rounded-xl focus:outline-none focus:border-blue-500 transition-colors"
              >
                <option value="all">Any Sizing Specification</option>
                <option value="small">Small Nails (Up to 2" / 50 mm)</option>
                <option value="medium">Medium Standard (1" to 4" / 100 mm)</option>
                <option value="large">Heavy Gauge (Up to 6" / 150 mm)</option>
                <option value="drawing">Continuous Rod Drawing (0.9 to 5.5 mm)</option>
              </select>
            </div>

            {/* Budget Tier */}
            <div className="flex flex-col gap-1.5">
              <label className="text-[11px] uppercase tracking-wider text-white/60 font-medium">
                Capital Budget (INR)
              </label>
              <select
                value={filters.budget}
                onChange={(e) => onFilterChange({ ...filters, budget: e.target.value as FilterState['budget'] })}
                className="w-full bg-[#09090b] border border-white/10 text-white text-sm p-3 rounded-xl focus:outline-none focus:border-blue-500 transition-colors"
              >
                <option value="all">All Capital Tiers</option>
                <option value="under5">Under ₹5,00,000</option>
                <option value="5to15">₹5,00,000 - ₹15,00,000</option>
                <option value="over15">₹15,00,000 &amp; Above</option>
              </select>
            </div>
          </div>

          {/* Footer status readout */}
          <div className="flex items-center justify-between text-xs uppercase text-white/60 pt-3 border-t border-white/5">
            <span className="text-blue-400 font-semibold">
              Displaying {matchedCount} of {totalCount} verified industrial units
            </span>
            <span className="text-white/40 hidden sm:inline font-medium">
              Live Stock Matrix | Rajkot Plant
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
