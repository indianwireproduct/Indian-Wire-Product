import React, { useState } from 'react';
import { COMPANY_INFO } from '../data/company';
import { MACHINES } from '../data/machines';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, Factory, ExternalLink } from 'lucide-react';

interface FactoryContactProps {
  onQuoteSent?: () => void;
}

export const FactoryContact: React.FC<FactoryContactProps> = () => {
  const [buyerName, setBuyerName] = useState('');
  const [phone, setPhone] = useState('');
  const [targetMachine, setTargetMachine] = useState('IN3 Wire Nail Machine (Best Seller)');
  const [destination, setDestination] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!buyerName || !phone) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setBuyerName('');
      setPhone('');
      setDestination('');
    }, 6000);
  };

  return (
    <section id="contact-section" className="w-full py-16 bg-[#09090b] border-b border-white/5">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 flex flex-col gap-12">
        {/* Top Header */}
        <div className="flex flex-col gap-2 max-w-2xl">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-blue-500"></span>
            <span className="text-xs uppercase text-blue-400 tracking-widest font-semibold">
              DIRECT FACTORY INQUIRY
            </span>
          </div>
          <h2 className="font-headline text-2xl sm:text-4xl uppercase font-bold text-white tracking-tight">
            From Rajkot to Global Industry
          </h2>
          <p className="text-sm sm:text-base text-white/60">
            We supply turnkey industrial setups throughout India and export directly to Southeast Asia, the Middle East, Africa, and Latin America.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Verified NAP Card & Info */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* NAP Card */}
            <div className="p-6 rounded-2xl bg-[#121214] border border-white/5 flex flex-col gap-5 shadow-xl">
              <div className="flex items-center gap-3 border-b border-white/5 pb-4">
                <div className="p-2.5 rounded-xl bg-blue-600/10 border border-blue-500/20 text-blue-400">
                  <Factory size={22} />
                </div>
                <div>
                  <h3 className="font-headline text-lg uppercase text-white font-bold">
                    {COMPANY_INFO.name}
                  </h3>
                  <span className="text-xs text-blue-400 uppercase font-medium">
                    Aji GIDC Precision Works
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-4 text-xs sm:text-sm text-white/70">
                <div className="flex items-start gap-3">
                  <MapPin size={18} className="text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block uppercase text-xs font-semibold mb-0.5">Manufacturing Works:</strong>
                    <span>{COMPANY_INFO.hub}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone size={18} className="text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block uppercase text-xs font-semibold mb-0.5">Direct Phone / WhatsApp:</strong>
                    <a href={`tel:${COMPANY_INFO.phone}`} className="text-blue-400 hover:underline font-mono font-bold">
                      {COMPANY_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail size={18} className="text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block uppercase text-xs font-semibold mb-0.5">Export Desk Email:</strong>
                    <a href={`mailto:${COMPANY_INFO.email}`} className="text-blue-400 hover:underline font-mono">
                      {COMPANY_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock size={18} className="text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block uppercase text-xs font-semibold mb-0.5">Plant Operating Shifts:</strong>
                    <span>{COMPANY_INFO.workingHours}</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs">
                <span className="text-white/40 uppercase font-medium">Seaport Logistics</span>
                <span className="text-white font-bold">{COMPANY_INFO.ports.split(' (')[0]}</span>
              </div>
            </div>

            {/* Quick RFQ Form */}
            <div className="p-6 rounded-2xl bg-[#121214] border border-white/5 flex flex-col gap-4 shadow-xl">
              <h3 className="font-headline text-base uppercase text-white font-bold">
                Quick Engineering Inquiry
              </h3>

              {submitted ? (
                <div className="p-5 rounded-xl bg-blue-600/10 border border-blue-500/20 flex flex-col items-center text-center gap-2 animate-fadeIn">
                  <CheckCircle2 size={32} className="text-blue-400" />
                  <span className="text-sm font-bold text-white uppercase">Inquiry Transmitted</span>
                  <p className="text-xs text-white/60">
                    Our export desk in Rajkot will contact you at {phone} within 2 operational hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                  <div>
                    <label className="block text-[11px] uppercase text-white/60 mb-1 font-medium">Company / Buyer Name *</label>
                    <input
                      type="text"
                      required
                      value={buyerName}
                      onChange={(e) => setBuyerName(e.target.value)}
                      placeholder="e.g. Apex Fasteners Ltd."
                      className="w-full bg-[#09090b] border border-white/10 text-white text-xs p-3 rounded-xl focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="block text-[11px] uppercase text-white/60 mb-1 font-medium">Phone / WhatsApp *</label>
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
                      <label className="block text-[11px] uppercase text-white/60 mb-1 font-medium">Target Machine</label>
                      <select
                        value={targetMachine}
                        onChange={(e) => setTargetMachine(e.target.value)}
                        className="w-full bg-[#09090b] border border-white/10 text-white text-xs p-3 rounded-xl focus:outline-none focus:border-blue-500 transition-colors"
                      >
                        {MACHINES.map((m) => (
                          <option key={m.id} value={m.name}>
                            {m.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase text-white/60 mb-1 font-medium">Destination City / Seaport</label>
                    <input
                      type="text"
                      value={destination}
                      onChange={(e) => setDestination(e.target.value)}
                      placeholder="e.g. Mombasa / Mundra Port / Local GIDC"
                      className="w-full bg-[#09090b] border border-white/10 text-white text-xs p-3 rounded-xl focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full mt-1 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs uppercase font-semibold tracking-wider flex items-center justify-center gap-2 transition-all shadow-lg shadow-blue-600/25 active:scale-95"
                  >
                    <Send size={14} />
                    <span>Send Engineering RFQ</span>
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Right: Google Maps Embed */}
          <div className="lg:col-span-7 flex flex-col gap-3">
            <div className="w-full h-[450px] lg:h-[580px] rounded-2xl overflow-hidden bg-[#121214] border border-white/10 shadow-2xl relative">
              <iframe
                src={COMPANY_INFO.googleMapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Indian Wire Product Aji GIDC Rajkot Google Map"
                className="w-full h-full brightness-90 contrast-110"
              />
            </div>

            <div className="flex items-center justify-between text-xs text-white/60 px-1">
              <span>GPS: 22.2750363, 70.8233404 | Industrial Zone Aji GIDC Phase II, Rajkot</span>
              <a
                href="https://maps.google.com/?q=Indian+Wire+Product+Aji+GIDC+Rajkot"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 flex items-center gap-1 text-blue-400"
              >
                <span>Open Google Maps</span>
                <ExternalLink size={12} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
