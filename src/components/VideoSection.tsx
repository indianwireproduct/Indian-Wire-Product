import React from 'react';
import { PlayCircle, ExternalLink, Activity } from 'lucide-react';
import { COMPANY_INFO } from '../data/company';

export const VideoSection: React.FC = () => {
  return (
    <section id="video-section" className="w-full py-16 bg-[#09090b] border-b border-white/5">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 flex flex-col gap-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
              <span className="text-xs uppercase text-blue-400 tracking-widest font-semibold">
                SEE THE MACHINE IN ACTION
              </span>
            </div>
            <h2 className="font-headline text-2xl sm:text-3xl uppercase font-bold text-white tracking-tight">
              Precision High-Speed In Operation
            </h2>
            <p className="text-xs sm:text-sm text-white/60 max-w-xl">
              Watch our Rajkot-assembled high-speed nail production systems form heads, cut diamond points, and cycle continuously at sustained industrial RPMs.
            </p>
          </div>

          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs text-blue-400 self-start md:self-auto font-medium">
            <Activity size={15} />
            <span>Rotary Gripper Technology • 700 NPM</span>
          </div>
        </div>

        {/* Video Player Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          <div className="lg:col-span-8 flex flex-col gap-3">
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-[#09090b] border border-white/10 shadow-2xl">
              <iframe
                src={COMPANY_INFO.youtubeEmbedUrl}
                title="Indian Wire Product Machine in Action"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full border-0"
              />
            </div>
            <div className="flex items-center justify-between text-xs text-white/60 px-1">
              <div className="flex items-center gap-2">
                <PlayCircle size={15} className="text-blue-400" />
                <span>Direct plant footage from Indian Wire Product machining works, Aji GIDC, Rajkot.</span>
              </div>
              <a
                href={`https://youtube.com/shorts/${COMPANY_INFO.youtubeVideoId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 flex items-center gap-1 text-blue-400"
              >
                <span>YouTube</span>
                <ExternalLink size={12} />
              </a>
            </div>
          </div>

          {/* Operational Metrics Panel */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <div className="p-6 rounded-2xl bg-[#121214] border border-white/5 flex flex-col gap-4 shadow-xl">
              <h3 className="font-headline text-base uppercase text-white font-bold border-b border-white/5 pb-3">
                Live Production Benchmark
              </h3>

              <div className="flex flex-col gap-2.5 text-xs">
                <div className="flex items-center justify-between p-3 rounded-xl bg-white/[0.03] border border-white/5">
                  <span className="text-white/40 uppercase font-medium">Model Featured</span>
                  <span className="text-white font-semibold">HS90 Rotary Cold Heading</span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-xl bg-white/[0.03] border border-white/5">
                  <span className="text-white/40 uppercase font-medium">Velocity</span>
                  <span className="text-blue-400 font-bold">700 Nails / Min</span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-xl bg-white/[0.03] border border-white/5">
                  <span className="text-white/40 uppercase font-medium">Nail Head Center</span>
                  <span className="text-white font-semibold">Concentric &lt; 0.05 mm</span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-xl bg-white/[0.03] border border-white/5">
                  <span className="text-white/40 uppercase font-medium">Point Type</span>
                  <span className="text-white font-semibold">4-Facet Diamond Cut</span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-xl bg-white/[0.03] border border-white/5">
                  <span className="text-white/40 uppercase font-medium">Sound Level</span>
                  <span className="text-blue-300 font-semibold">&lt; 78 dB (Enclosed)</span>
                </div>
              </div>

              <div className="pt-2 text-[11px] text-white/50 leading-relaxed">
                Our rotary nail forging technology eliminates heavy reciprocating back-and-forth inertia, prolonging punch and cutter tool lifespans by up to 300%.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
