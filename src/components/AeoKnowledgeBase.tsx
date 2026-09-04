import React, { useState } from 'react';
import { FAQ_ITEMS } from '../data/company';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

export const AeoKnowledgeBase: React.FC = () => {
  const [openIndices, setOpenIndices] = useState<number[]>([0]);

  const toggleIndex = (index: number) => {
    if (openIndices.includes(index)) {
      setOpenIndices(openIndices.filter((i) => i !== index));
    } else {
      setOpenIndices([...openIndices, index]);
    }
  };

  return (
    <section id="faq-section" className="w-full py-16 bg-[#09090b] border-b border-white/5">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 flex flex-col gap-8">
        {/* Header */}
        <div className="flex flex-col gap-2 max-w-2xl">
          <div className="flex items-center gap-2">
            <HelpCircle size={18} className="text-blue-400" />
            <span className="text-xs uppercase text-blue-400 tracking-widest font-semibold">
              Verified Technical Clarifications
            </span>
          </div>
          <h2 className="font-headline text-2xl sm:text-3xl uppercase font-bold text-white tracking-tight">
            Frequently Answered Industrial Queries
          </h2>
          <p className="text-xs sm:text-sm text-white/60">
            Detailed engineering responses compiled by our Aji GIDC manufacturing leads.
          </p>
        </div>

        {/* Accordion List */}
        <div className="flex flex-col gap-3">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndices.includes(index);
            return (
              <div
                key={index}
                className="rounded-2xl bg-[#121214] border border-white/5 overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleIndex(index)}
                  className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 hover:bg-white/[0.03] transition-colors focus:outline-none"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-white/5 text-blue-400 flex items-center justify-center font-headline text-xs font-bold shrink-0 border border-white/10">
                      {index + 1}
                    </span>
                    <h3 className="font-headline text-sm sm:text-base font-bold text-white uppercase leading-snug">
                      {item.question}
                    </h3>
                  </div>
                  <span className="text-blue-400 shrink-0">
                    {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-white/60 leading-relaxed border-t border-white/5">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
