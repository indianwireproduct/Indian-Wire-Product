import React from 'react';
import { COMPANY_INFO } from '../data/company';
import { ShieldCheck, Download, Phone, Mail, MapPin } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onSelectMachineByName: (name: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onSelectMachineByName }) => {
  return (
    <footer className="w-full bg-[#09090b] border-t border-white/5 text-white/60 pb-20 md:pb-0">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Col 1: Corporate Profile */}
          <div className="flex flex-col gap-4">
            <div className="flex flex-col">
              <span className="font-headline text-lg font-bold uppercase tracking-tight text-white">
                Indian Wire Product
              </span>
              <span className="text-xs text-blue-400 uppercase font-medium">
                Rajkot, Gujarat, India
              </span>
            </div>

            <div className="text-xs flex flex-col gap-2.5">
              <p className="flex items-start gap-2">
                <MapPin size={14} className="text-blue-400 shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.hub}</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail size={14} className="text-blue-400 shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-white transition-colors">
                  {COMPANY_INFO.email}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Phone size={14} className="text-blue-400 shrink-0" />
                <a href={`tel:${COMPANY_INFO.phone}`} className="hover:text-white transition-colors font-mono">
                  {COMPANY_INFO.phone}
                </a>
              </p>
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[11px] text-blue-400 w-fit">
              <ShieldCheck size={14} className="text-blue-400" />
              <span>ISO 9001:2015 Registered Facility</span>
            </div>
          </div>

          {/* Col 2: Nail Making Machinery */}
          <div className="flex flex-col gap-3">
            <span className="font-headline text-sm uppercase text-white font-bold border-b border-white/5 pb-2">
              Nail Making Machinery
            </span>
            <ul className="text-xs flex flex-col gap-2">
              <li>
                <button
                  onClick={() => onSelectMachineByName('IN1+ Nail Machine')}
                  className="hover:text-white transition-colors text-left"
                >
                  IN1+ Precision Model (0.5 – 2")
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectMachineByName('IN3 Nail Machine (Industrial Workhorse)')}
                  className="hover:text-white transition-colors flex items-center gap-2 text-left"
                >
                  <span>IN3 Automatic (1 – 4")</span>
                  <span className="text-[9px] px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 uppercase font-semibold">
                    Best Seller
                  </span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectMachineByName('IN4 Nail Machine (Heavy Construction)')}
                  className="hover:text-white transition-colors text-left"
                >
                  IN4 Heavy-Duty System (1 – 5")
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectMachineByName('IN6 Structural Spike Unit')}
                  className="hover:text-white transition-colors text-left"
                >
                  IN6 Structural High-Capacity (2 – 6")
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectMachineByName('HS90 Ultra High-Speed Unit')}
                  className="hover:text-white transition-colors text-left flex items-center gap-2"
                >
                  <span>HS90 Rotary High-Speed</span>
                  <span className="text-[9px] px-2 py-0.5 rounded-full bg-white/5 text-blue-300 border border-white/10 uppercase font-semibold">
                    700 NPM
                  </span>
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Wire Drawing Machinery */}
          <div className="flex flex-col gap-3">
            <span className="font-headline text-sm uppercase text-white font-bold border-b border-white/5 pb-2">
              Wire Drawing Machinery
            </span>
            <ul className="text-xs flex flex-col gap-2">
              <li>
                <button
                  onClick={() => onSelectMachineByName('6 Stage Continuous Wire Drawing Machine')}
                  className="hover:text-white transition-colors text-left"
                >
                  6 Stage Continuous Wire Drawing (5.5 → 2.5mm)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectMachineByName('8 Stage Wire Drawing Machine (Binding Wire)')}
                  className="hover:text-white transition-colors text-left"
                >
                  8 Stage Fine Wire Drawing (2.5 → 0.9mm)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('matrix-section')}
                  className="hover:text-white transition-colors text-left"
                >
                  High-Tensile Binding Wire Solutions
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact-section')}
                  className="hover:text-white transition-colors text-left"
                >
                  Custom VFD Panels &amp; Motors
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('process-section')}
                  className="hover:text-white transition-colors text-left"
                >
                  Die Polishing &amp; Pointing Units
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Resources & Compliance */}
          <div className="flex flex-col gap-3">
            <span className="font-headline text-sm uppercase text-white font-bold border-b border-white/5 pb-2">
              Resources &amp; Compliance
            </span>
            <ul className="text-xs flex flex-col gap-2">
              <li>
                <button onClick={() => onNavigate('finder-section')} className="hover:text-white transition-colors text-left">
                  Parametric Machine Finder
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('matrix-section')} className="hover:text-white transition-colors text-left">
                  Interactive Spec Comparison Matrix
                </button>
              </li>
              <li>
                <a
                  href={COMPANY_INFO.brochurePdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1.5 text-blue-400"
                >
                  <Download size={13} />
                  <span>Download Complete Catalog (PDF)</span>
                </a>
              </li>
              <li>
                <button onClick={() => onNavigate('faq-section')} className="hover:text-white transition-colors text-left">
                  Technical Clarifications &amp; FAQ
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('contact-section')} className="hover:text-white transition-colors text-left">
                  Terms &amp; COD Verification Details
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Legal Stripe */}
      <div className="w-full border-t border-white/5 bg-[#09090b] py-4">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left text-xs">
          <p className="text-white/40">
            © {new Date().getFullYear()} Indian Wire Product. Engineered and Fabricated in Rajkot, Gujarat, India.
          </p>
          <p className="text-[11px] text-blue-400 uppercase tracking-wider font-semibold">
            Guaranteed No-Fabrication Data Standard | Export Grade
          </p>
        </div>
      </div>
    </footer>
  );
};
