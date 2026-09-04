import React, { useState } from 'react';
import { Layers, ArrowRight, Check } from 'lucide-react';
import { MACHINES } from '../data/machines';

interface SpecMatrixProps {
  onSelectMachine: (machineName: string) => void;
}

export const SpecMatrix: React.FC<SpecMatrixProps> = ({ onSelectMachine }) => {
  const [activeTab, setActiveTab] = useState<'nail' | 'wire'>('nail');

  const nailMachines = MACHINES.filter((m) => m.category === 'nail');
  const wireMachines = MACHINES.filter((m) => m.category === 'wire');

  return (
    <section id="matrix-section" className="w-full py-16 bg-[#09090b] border-b border-white/5">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 flex flex-col gap-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <Layers size={18} className="text-blue-400" />
              <span className="text-xs uppercase text-blue-400 tracking-wider font-semibold">
                Cross-Evaluation Matrix
              </span>
            </div>
            <h2 className="font-headline text-2xl sm:text-3xl uppercase font-bold text-white">
              Interactive Spec Comparison
            </h2>
            <p className="text-xs sm:text-sm text-white/60">
              Standardized mechanical engineering parameters across our Rajkot plant production lineup.
            </p>
          </div>

          {/* Toggle Tabs */}
          <div className="flex items-center p-1 rounded-full bg-[#121214] border border-white/10 self-start md:self-auto">
            <button
              onClick={() => setActiveTab('nail')}
              className={`px-4 py-2 rounded-full font-headline text-xs uppercase transition-all ${
                activeTab === 'nail'
                  ? 'bg-blue-600 text-white font-semibold shadow-md shadow-blue-600/30'
                  : 'text-white/60 hover:text-white'
              }`}
            >
              Wire Nail Machines (5 Models)
            </button>

            <button
              onClick={() => setActiveTab('wire')}
              className={`px-4 py-2 rounded-full font-headline text-xs uppercase transition-all ${
                activeTab === 'wire'
                  ? 'bg-blue-600 text-white font-semibold shadow-md shadow-blue-600/30'
                  : 'text-white/60 hover:text-white'
              }`}
            >
              Wire Drawing Machines (2 Models)
            </button>
          </div>
        </div>

        {/* Nail Machines Table */}
        {activeTab === 'nail' && (
          <div className="w-full overflow-x-auto rounded-2xl bg-[#121214] border border-white/5 shadow-2xl">
            <table className="w-full text-left text-xs font-mono text-white/70 border-collapse min-w-[700px]">
              <thead className="bg-[#121214] text-white uppercase font-headline text-[11px] border-b border-white/10">
                <tr>
                  <th className="p-4 sticky left-0 bg-[#121214] z-10">Model</th>
                  <th className="p-4">Nail Length</th>
                  <th className="p-4">Wire Gauge</th>
                  <th className="p-4">Forging Velocity</th>
                  <th className="p-4">Shift / Daily Yield</th>
                  <th className="p-4">Motor Power</th>
                  <th className="p-4">Net Mass</th>
                  <th className="p-4 text-right">Standard Net Price</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {nailMachines.map((item) => (
                  <tr
                    key={item.id}
                    onClick={() => onSelectMachine(item.name)}
                    className="hover:bg-white/[0.03] transition-colors cursor-pointer"
                  >
                    <td className="p-4 font-headline font-bold text-white sticky left-0 bg-[#121214] z-10 flex items-center gap-2">
                      <span className={item.isBestSeller ? 'text-blue-400' : ''}>{item.name.split(' (')[0]}</span>
                      {item.isBestSeller && (
                        <span className="font-headline text-[9px] px-2 py-0.5 rounded-full bg-blue-600/20 text-blue-400 border border-blue-500/30 uppercase">
                          Best Seller
                        </span>
                      )}
                      {item.isHighSpeed && (
                        <span className="font-headline text-[9px] px-2 py-0.5 rounded-full bg-white/10 text-white/80 border border-white/10 uppercase">
                          Rotary
                        </span>
                      )}
                    </td>
                    <td className="p-4 text-white/80">{item.lengthRange}</td>
                    <td className="p-4 text-white/80">{item.wireDiameter}</td>
                    <td className="p-4 text-blue-400 font-bold">{item.productionSpeed}</td>
                    <td className="p-4 text-white/80">{item.dailyYield}</td>
                    <td className="p-4 text-white/80">{item.motorRequired.split(' (')[0]}</td>
                    <td className="p-4 text-white/80">{item.machineWeight}</td>
                    <td className="p-4 text-right font-bold text-blue-400">{item.priceFormatted}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Wire Drawing Table */}
        {activeTab === 'wire' && (
          <div className="w-full flex flex-col rounded-2xl bg-[#121214] border border-white/5 shadow-2xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs font-mono text-white/70 border-collapse min-w-[700px]">
                <thead className="bg-[#121214] text-white uppercase font-headline text-[11px] border-b border-white/10">
                  <tr>
                    <th className="p-4 sticky left-0 bg-[#121214] z-10">Model Description</th>
                    <th className="p-4">Drum Specs</th>
                    <th className="p-4">Reduction Path</th>
                    <th className="p-4">Daily Yield</th>
                    <th className="p-4">Total Motor Line</th>
                    <th className="p-4">Chassis Mass</th>
                    <th className="p-4">Primary Application</th>
                    <th className="p-4 text-right">Bare Base Price</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {wireMachines.map((item) => (
                    <tr
                      key={item.id}
                      onClick={() => onSelectMachine(item.name)}
                      className="hover:bg-white/[0.03] transition-colors cursor-pointer"
                    >
                      <td className="p-4 font-headline font-bold text-white sticky left-0 bg-[#121214] z-10">
                        {item.name}
                      </td>
                      <td className="p-4 text-white/80">{item.drumSpecs}</td>
                      <td className="p-4 text-blue-400 font-bold">{item.reductionSpan}</td>
                      <td className="p-4 text-white/80">{item.dailyYield}</td>
                      <td className="p-4 text-white/80">{item.motorRequired.split(' (')[0]}</td>
                      <td className="p-4 text-white/80">{item.machineWeight}</td>
                      <td className="p-4 text-white/70 font-sans text-[11px] max-w-xs">{item.targetMaterial}</td>
                      <td className="p-4 text-right font-bold text-blue-400">{item.priceFormatted}*</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="p-4 bg-[#09090b] text-white/60 text-xs border-t border-white/5 flex items-center gap-2">
              <span className="text-amber-400 font-bold">* Price Condition:</span>
              <span>Bare wire drawing machines are priced without accessories, without electric panels, and without electric motors. Full turnkey electric integration quoted upon request.</span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
