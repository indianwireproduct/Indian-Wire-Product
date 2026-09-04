import React, { useState, useEffect } from 'react';
import { X, Send, CheckCircle2, Calculator } from 'lucide-react';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultMachineName?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  defaultMachineName = 'IN3 Nail Machine (Industrial Workhorse)'
}) => {
  const [machineName, setMachineName] = useState(defaultMachineName);
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [phone, setPhone] = useState('');
  const [country, setCountry] = useState('India');
  const [dailyYield, setDailyYield] = useState('');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (defaultMachineName) {
      setMachineName(defaultMachineName);
    }
  }, [defaultMachineName]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="w-full max-w-xl bg-[#121214] rounded-2xl shadow-2xl border border-white/10 overflow-hidden flex flex-col">
        {/* Header */}
        <div className="p-5 bg-[#121214] border-b border-white/5 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="p-1.5 rounded-lg bg-blue-600/10 text-blue-400 border border-blue-500/20">
              <Calculator size={18} />
            </div>
            <h3 className="font-headline text-base sm:text-lg uppercase text-white font-bold">
              Request Engineering Quote (RFQ)
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-white/60 hover:text-white hover:bg-white/5 transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {submitted ? (
            <div className="flex flex-col items-center justify-center text-center py-8 gap-4 animate-fadeIn">
              <div className="w-16 h-16 rounded-full bg-blue-600/10 border border-blue-500/30 flex items-center justify-center text-blue-400">
                <CheckCircle2 size={36} />
              </div>
              <div className="flex flex-col gap-1">
                <h4 className="font-headline text-xl uppercase text-white font-bold">
                  Formal RFQ Transmitted!
                </h4>
                <p className="text-sm text-white/60 max-w-sm leading-relaxed">
                  Your specification quote request for <strong className="text-white">{machineName}</strong> has been assigned to our senior Rajkot pricing engineer. We will email your proforma proposal shortly.
                </p>
              </div>

              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="mt-3 px-6 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white font-headline text-xs uppercase font-bold transition-colors"
              >
                Done
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-3.5">
              <div>
                <label className="block text-[11px] uppercase text-white/60 mb-1 font-medium">
                  Selected Equipment
                </label>
                <input
                  type="text"
                  readOnly
                  value={machineName}
                  className="w-full bg-[#09090b] border border-white/10 text-blue-400 font-bold text-xs p-3 rounded-xl focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] uppercase text-white/60 mb-1 font-medium">
                    Contact Person *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Full Name"
                    className="w-full bg-[#09090b] border border-white/10 text-white text-xs p-3 rounded-xl focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[11px] uppercase text-white/60 mb-1 font-medium">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="Company / Plant"
                    className="w-full bg-[#09090b] border border-white/10 text-white text-xs p-3 rounded-xl focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] uppercase text-white/60 mb-1 font-medium">
                    WhatsApp / Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91..."
                    className="w-full bg-[#09090b] border border-white/10 text-white text-xs p-3 rounded-xl focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[11px] uppercase text-white/60 mb-1 font-medium">
                    Country / Port Destination *
                  </label>
                  <input
                    type="text"
                    required
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    placeholder="e.g. India / Kenya / UAE"
                    className="w-full bg-[#09090b] border border-white/10 text-white text-xs p-3 rounded-xl focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] uppercase text-white/60 mb-1 font-medium">
                  Estimated Daily Output Need
                </label>
                <input
                  type="text"
                  value={dailyYield}
                  onChange={(e) => setDailyYield(e.target.value)}
                  placeholder="e.g. 500 kg to 2 Tons per day"
                  className="w-full bg-[#09090b] border border-white/10 text-white text-xs p-3 rounded-xl focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-[11px] uppercase text-white/60 mb-1 font-medium">
                  Additional Technical Requirements
                </label>
                <textarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Die sizes, wire gauges, motor voltages (380V/415V), delivery terms (CIF/FOB)..."
                  className="w-full bg-[#09090b] border border-white/10 text-white text-xs p-3 rounded-xl focus:outline-none focus:border-blue-500 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full mt-2 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs uppercase font-semibold tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-600/25 active:scale-95"
              >
                <Send size={14} />
                <span>Send Formal RFQ Proposal</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
