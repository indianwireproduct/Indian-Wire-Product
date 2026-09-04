import React from 'react';
import { Phone, Cpu, Send, ShoppingBag } from 'lucide-react';
import { COMPANY_INFO } from '../data/company';

interface MobileBottomNavProps {
  cartCount: number;
  onOpenCart: () => void;
  onOpenQuote: () => void;
  onNavigateCatalog: () => void;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({
  cartCount,
  onOpenCart,
  onOpenQuote,
  onNavigateCatalog
}) => {
  return (
    <nav className="md:hidden fixed bottom-0 left-0 w-full z-40 bg-[#09090b]/90 backdrop-blur-xl border-t border-white/5 shadow-[0_-4px_20px_rgba(0,0,0,0.8)] pb-safe">
      <div className="flex items-center justify-between h-18 px-3 gap-2">
        {/* Call Now */}
        <a
          href={`tel:${COMPANY_INFO.phone}`}
          className="flex-1 flex flex-col items-center justify-center h-12 rounded-xl bg-[#121214] border border-white/5 text-white/70 hover:text-white active:bg-white/5 transition-all"
        >
          <Phone size={17} />
          <span className="text-[10px] uppercase font-semibold mt-1">Call Now</span>
        </a>

        {/* Catalog */}
        <button
          onClick={onNavigateCatalog}
          className="flex-1 flex flex-col items-center justify-center h-12 rounded-xl bg-[#121214] border border-white/5 text-white/70 hover:text-white active:bg-white/5 transition-all"
        >
          <Cpu size={17} />
          <span className="text-[10px] uppercase font-semibold mt-1">Catalog</span>
        </button>

        {/* Get Quote - Prominent */}
        <button
          onClick={onOpenQuote}
          className="flex-[1.4] flex items-center justify-center gap-1.5 h-12 rounded-xl bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/25 active:scale-95 transition-all"
        >
          <Send size={15} />
          <span className="text-[11px] uppercase font-semibold tracking-wider">Get Quote</span>
        </button>

        {/* Cart */}
        <button
          onClick={onOpenCart}
          className="flex-1 flex flex-col items-center justify-center h-12 rounded-xl bg-[#121214] border border-white/5 text-white/70 hover:text-white active:bg-white/5 transition-all relative"
        >
          <ShoppingBag size={17} />
          {cartCount > 0 && (
            <span className="absolute top-1 right-3 min-w-[15px] h-[15px] px-0.5 rounded-full bg-blue-600 text-white text-[9px] flex items-center justify-center font-bold">
              {cartCount}
            </span>
          )}
          <span className="text-[10px] uppercase font-semibold mt-1">Cart</span>
        </button>
      </div>
    </nav>
  );
};
