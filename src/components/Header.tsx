import React, { useState } from 'react';
import { Phone, ShoppingCart, Menu, X, FileText, Send, User } from 'lucide-react';
import { COMPANY_INFO } from '../data/company';

interface HeaderProps {
  cartCount: number;
  onOpenCart: () => void;
  onOpenQuote: (machineName?: string) => void;
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  cartCount,
  onOpenCart,
  onOpenQuote,
  activeSection,
  onNavigate
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Products', id: 'catalog-section' },
    { label: 'Nail Machines', id: 'catalog-section', filter: 'nail' },
    { label: 'Wire Drawing', id: 'catalog-section', filter: 'wire' },
    { label: 'Machine Finder', id: 'finder-section' },
    { label: 'Spec Matrix', id: 'matrix-section' },
    { label: 'Manufacturing', id: 'process-section' },
    { label: 'Live Demo', id: 'video-section' },
    { label: 'FAQ', id: 'faq-section' },
    { label: 'Contact', id: 'contact-section' }
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-40 bg-[#09090b]/80 backdrop-blur-md border-b border-white/5 shadow-[0_4px_24px_rgba(0,0,0,0.5)]">
      {/* Top Engineering Dispatch Ticker */}
      <div className="w-full bg-[#09090b] border-b border-white/5 py-1.5 px-4 text-center overflow-hidden">
        <div className="max-w-[1440px] mx-auto flex items-center justify-center gap-2 text-xs">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
          <p className="tracking-widest text-white/70 uppercase text-[10px] sm:text-[11px] font-medium truncate">
            INDUSTRIAL MACHINERY MANUFACTURER &amp; EXPORTER | AJI GIDC, RAJKOT, GUJARAT | GLOBAL EXPORT COMPLIANT
          </p>
        </div>
      </div>

      {/* Main Bar */}
      <div className="h-18 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 flex items-center justify-between gap-4">
        {/* Brand Identity */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl bg-white/5 border border-white/10 text-white/70 hover:text-white hover:bg-white/10 focus:outline-none transition-all"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('hero-section');
            }}
            className="flex items-center gap-3 group text-left"
          >
            <div className="w-9 h-9 bg-blue-600 rounded-xl flex items-center justify-center font-bold text-lg text-white shadow-md shadow-blue-600/30 group-hover:scale-105 transition-transform">
              IW
            </div>
            <div className="flex flex-col">
              <span className="font-headline text-base sm:text-lg font-semibold uppercase tracking-tight text-white group-hover:text-blue-400 transition-colors leading-tight">
                Indian Wire Product
              </span>
              <span className="text-[10px] sm:text-[11px] text-white/50 tracking-wider uppercase font-medium">
                Rajkot Precision Engineering
              </span>
            </div>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-6 text-xs uppercase font-medium text-white/50">
          {navItems.slice(0, 7).map((item, idx) => (
            <button
              key={idx}
              onClick={() => handleNavClick(item.id)}
              className={`py-2 transition-colors hover:text-white cursor-pointer ${
                activeSection === item.id ? 'text-white border-b-2 border-blue-500 font-semibold' : ''
              }`}
            >
              {item.label}
            </button>
          ))}
          <a
            href={COMPANY_INFO.brochurePdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="py-2 text-white/50 hover:text-white transition-colors flex items-center gap-1.5"
          >
            <FileText size={14} className="text-blue-400" />
            Brochure
          </a>
          <button
            onClick={() => handleNavClick('contact-section')}
            className="py-2 text-white/50 hover:text-white transition-colors"
          >
            Contact
          </button>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Direct Phone */}
          <a
            href={`tel:${COMPANY_INFO.phone}`}
            className="hidden md:flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 text-white/80 hover:text-white transition-all text-xs font-medium tracking-wider"
          >
            <Phone size={13} className="text-blue-400" />
            <span>{COMPANY_INFO.phone}</span>
          </a>

          {/* Quick RFQ Trigger */}
          <button
            onClick={() => onOpenQuote()}
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full font-medium text-xs uppercase text-white bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-600/20 transition-all active:scale-95"
          >
            <Send size={13} />
            <span>Get Quote</span>
          </button>

          {/* Cart Icon */}
          <button
            onClick={onOpenCart}
            aria-label="Procurement Cart"
            className="relative p-2.5 rounded-full bg-white/5 border border-white/10 text-white/80 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all focus:outline-none"
          >
            <ShoppingCart size={18} />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 min-w-[18px] h-[18px] px-1 rounded-full bg-blue-600 text-white text-[10px] flex items-center justify-center font-bold shadow-md animate-scale">
                {cartCount}
              </span>
            )}
          </button>

          {/* User Icon indicator */}
          <div className="hidden sm:flex w-9 h-9 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 border-2 border-white/10 items-center justify-center text-white text-xs font-bold shadow-md">
            IWP
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#09090b]/95 border-b border-white/10 px-4 py-4 space-y-2 animate-fadeIn backdrop-blur-xl">
          <div className="grid grid-cols-2 gap-2 text-xs font-medium">
            {navItems.map((item, idx) => (
              <button
                key={idx}
                onClick={() => handleNavClick(item.id)}
                className="p-3 rounded-xl bg-white/5 border border-white/5 text-left text-white/80 hover:text-white hover:bg-white/10 transition-colors"
              >
                {item.label}
              </button>
            ))}
            <a
              href={COMPANY_INFO.brochurePdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-white/5 border border-white/5 text-left text-blue-400 hover:bg-white/10 flex items-center gap-2"
            >
              <FileText size={14} />
              Brochure (PDF)
            </a>
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="p-3 rounded-xl bg-blue-600/20 border border-blue-500/30 text-blue-400 flex items-center gap-2"
            >
              <Phone size={14} />
              Call Factory
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
