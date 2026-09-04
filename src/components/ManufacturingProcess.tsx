import React from 'react';
import { MANUFACTURING_STEPS } from '../data/company';
import { CheckCircle2, ShieldCheck, Factory, Anchor } from 'lucide-react';

export const ManufacturingProcess: React.FC = () => {
  return (
    <section id="process-section" className="w-full py-16 bg-[#09090b] border-b border-white/5">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 flex flex-col gap-10">
        {/* Section Header */}
        <div className="flex flex-col gap-2 max-w-3xl">
          <div className="flex items-center gap-2">
            <Factory size={18} className="text-blue-400" />
            <span className="text-xs uppercase text-blue-400 tracking-widest font-semibold">
              Aji GIDC Quality Protocol
            </span>
          </div>
          <h2 className="font-headline text-2xl sm:text-4xl uppercase font-bold text-white tracking-tight">
            7-Step Precision Manufacturing Cycle
          </h2>
          <p className="text-sm sm:text-base text-white/60">
            Every single machine delivered domestically or exported overseas adheres to Rajkot's rigorous mechanical production protocol.
          </p>
        </div>

        {/* 7-Step Sequence Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {MANUFACTURING_STEPS.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#121214] border border-white/5 flex flex-col justify-between gap-4 hover:border-white/20 transition-all group"
            >
              <div className="flex items-start justify-between">
                <span className="font-mono text-xl sm:text-2xl font-bold text-blue-400 group-hover:text-white transition-colors">
                  {item.step}
                </span>
                <span className="p-1.5 rounded-full bg-white/5 text-white/40 group-hover:text-blue-400 transition-colors">
                  <CheckCircle2 size={16} />
                </span>
              </div>

              <div>
                <h3 className="font-headline text-base sm:text-lg uppercase text-white font-bold mb-1.5 leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-white/60 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-white/40 font-medium">
                <span className="uppercase tracking-wider">Quality Verified</span>
                <span>Stage {item.step} / 07</span>
              </div>
            </div>
          ))}

          {/* Highlights Card */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-950/40 via-[#121214] to-[#121214] border border-blue-500/30 flex flex-col justify-between gap-4 text-white">
            <div className="flex items-center gap-2 text-blue-400">
              <ShieldCheck size={24} />
              <span className="text-xs uppercase tracking-widest font-bold">
                Export Certification
              </span>
            </div>

            <div>
              <h3 className="font-headline text-xl uppercase font-bold text-white mb-2">
                Mundra &amp; Kandla Port Proximity
              </h3>
              <p className="text-xs text-white/70 leading-relaxed">
                Strategic industrial hub location in Rajkot, Gujarat guarantees rapid container trucking directly to major deep-water ports for seamless global export handling.
              </p>
            </div>

            <div className="flex items-center gap-2 text-xs text-blue-400 font-semibold">
              <Anchor size={16} />
              <span>35+ Global Destination Countries</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
