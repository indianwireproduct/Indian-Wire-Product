import React from 'react';
import { Cpu, Send, Download, Activity, Award, ShieldCheck, Gauge, Layers } from 'lucide-react';
import { COMPANY_INFO } from '../data/company';

interface HeroProps {
  onExplore: () => void;
  onOpenQuote: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExplore, onOpenQuote }) => {
  return (
    <section id="hero-section" className="relative w-full overflow-hidden bg-[#09090b] pt-28 pb-16 lg:pt-36 lg:pb-24 border-b border-white/5">
      {/* Ambient Subtle Grid Layer */}
      <div className="absolute inset-0 opacity-25 pointer-events-none bg-blueprint-grid"></div>
      <div className="absolute -top-40 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Industrial Headline & Value Props */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            {/* Live Indicator Eyebrow */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs w-fit">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-[11px] uppercase text-white/80 tracking-widest font-medium">
                INDUSTRIAL MACHINERY MANUFACTURER &amp; EXPORTER
              </span>
            </div>

            {/* Main Headline */}
            <div className="flex flex-col gap-3">
              <h1 className="font-headline text-3xl sm:text-5xl lg:text-6xl uppercase text-white tracking-tight font-bold leading-[1.1]">
                Precision Machinery.<br />
                <span className="text-blue-400 block">Built for Production.</span>
              </h1>
              <p className="text-white/60 text-sm sm:text-base lg:text-lg leading-relaxed max-w-xl">
                Indian Wire Product manufactures and exports industrial machinery for wire nail and wire production applications. Engineered with tight CNC tolerances in Rajkot, Gujarat for sustained 24/7 industrial yield.
              </p>
            </div>

            {/* Call to Actions */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={onExplore}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-headline text-sm uppercase font-semibold tracking-wider shadow-lg shadow-blue-600/25 transition-all active:scale-95"
              >
                <Cpu size={18} />
                <span>Explore Machines (7)</span>
              </button>

              <button
                onClick={onOpenQuote}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-white/20 font-headline text-sm uppercase font-medium transition-all active:scale-95"
              >
                <Send size={16} className="text-blue-400" />
                <span>Get a Quote</span>
              </button>

              <a
                href={COMPANY_INFO.brochurePdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl bg-white/5 border border-white/5 text-white/70 hover:text-white hover:bg-white/10 font-headline text-xs uppercase font-medium tracking-wider transition-all"
              >
                <Download size={16} className="text-blue-400" />
                <span>Brochure (PDF)</span>
              </a>
            </div>

            {/* Live Engineering Badges */}
            <div className="grid grid-cols-3 gap-3 pt-4 border-t border-white/5">
              <div className="flex flex-col p-4 rounded-2xl bg-[#121214] border border-white/5">
                <div className="flex items-center gap-1.5 text-blue-400 mb-1">
                  <Award size={16} />
                  <span className="font-headline text-xl sm:text-2xl text-white font-bold">{COMPANY_INFO.installationsCount}</span>
                </div>
                <span className="text-[11px] text-white/50 uppercase font-medium">Global Installations</span>
              </div>

              <div className="flex flex-col p-4 rounded-2xl bg-[#121214] border border-white/5">
                <div className="flex items-center gap-1.5 text-blue-400 mb-1">
                  <Gauge size={16} />
                  <span className="font-headline text-xl sm:text-2xl text-white font-bold">{COMPANY_INFO.tolerance}</span>
                </div>
                <span className="text-[11px] text-white/50 uppercase font-medium">Forging Tolerance</span>
              </div>

              <div className="flex flex-col p-4 rounded-2xl bg-[#121214] border border-white/5">
                <div className="flex items-center gap-1.5 text-blue-400 mb-1">
                  <Layers size={16} />
                  <span className="font-headline text-xl sm:text-2xl text-white font-bold">Rajkot</span>
                </div>
                <span className="text-[11px] text-white/50 uppercase font-medium">Aji GIDC Hub</span>
              </div>
            </div>
          </div>

          {/* Right Column: Cinematic Visual Showcase with HUD Data Overlays */}
          <div className="lg:col-span-6 relative mt-6 lg:mt-0">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-[#121214] border border-white/10 aspect-[16/10] group">
              <img
                src={COMPANY_INFO.heroImage}
                alt="Indian Wire Product Heavy Machinery Plant Rajkot Gujarat"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-95"
              />

              {/* Vignette Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none"></div>

              {/* Top HUD Badges */}
              <div className="absolute top-4 left-4 flex flex-col gap-2 pointer-events-none">
                <div className="px-3.5 py-1.5 rounded-full bg-[#09090b]/80 border border-white/10 backdrop-blur-md flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                  <span className="text-[10px] uppercase text-white/80 tracking-wider font-medium">
                    ACTIVE TELEMETRY : PLANT-AJI-01
                  </span>
                </div>
              </div>

              <div className="absolute top-4 right-4 flex items-center gap-2">
                <span className="px-3.5 py-1.5 rounded-full bg-[#09090b]/80 border border-white/10 text-white font-headline text-[10px] uppercase backdrop-blur-md flex items-center gap-1.5">
                  <ShieldCheck size={14} className="text-blue-400" />
                  ISO 9001:2015 CERTIFIED
                </span>
              </div>

              {/* Lower Telemetry Readout Floaters */}
              <div className="absolute bottom-4 left-4 right-4 grid grid-cols-3 gap-2">
                <div className="p-3 rounded-2xl bg-[#09090b]/85 border border-white/10 backdrop-blur-md flex flex-col">
                  <span className="text-[10px] text-blue-400 uppercase font-semibold">HS90 Series</span>
                  <span className="font-headline text-xs sm:text-sm text-white font-bold">700 nails/min</span>
                  <span className="text-[10px] text-white/50 truncate">High-Speed Continuous</span>
                </div>

                <div className="p-3 rounded-2xl bg-[#09090b]/85 border border-white/10 backdrop-blur-md flex flex-col">
                  <span className="text-[10px] text-blue-300 uppercase font-semibold">6-Stage Drawing</span>
                  <span className="font-headline text-xs sm:text-sm text-white font-bold">5.5 → 2.5 mm</span>
                  <span className="text-[10px] text-white/50 truncate">4 Ton/Day Capacity</span>
                </div>

                <div className="p-3 rounded-2xl bg-[#09090b]/85 border border-white/10 backdrop-blur-md flex flex-col">
                  <span className="text-[10px] text-emerald-400 uppercase font-semibold">Machining Hub</span>
                  <span className="font-headline text-xs sm:text-sm text-white font-bold">Rajkot, Gujarat</span>
                  <span className="text-[10px] text-white/50 truncate">Global Export Base</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
