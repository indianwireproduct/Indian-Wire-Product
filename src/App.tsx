import React, { useState, useMemo, useEffect } from 'react';
import { MACHINES } from './data/machines';
import { MachineSpec, CartItem, FilterState } from './types';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { MachineFinder } from './components/MachineFinder';
import { MachineCatalog } from './components/MachineCatalog';
import { SpecMatrix } from './components/SpecMatrix';
import { ManufacturingProcess } from './components/ManufacturingProcess';
import { VideoSection } from './components/VideoSection';
import { AeoKnowledgeBase } from './components/AeoKnowledgeBase';
import { FactoryContact } from './components/FactoryContact';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { CheckoutModal } from './components/CheckoutModal';
import { QuoteModal } from './components/QuoteModal';
import { MachineDetailModal } from './components/MachineDetailModal';
import { MobileBottomNav } from './components/MobileBottomNav';
import { CheckCircle2 } from 'lucide-react';

export default function App() {
  // Cart State (Persisted in localStorage)
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('iwp_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Modal & Drawer visibility states
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [quoteMachineName, setQuoteMachineName] = useState<string>('IN3 Nail Machine (Industrial Workhorse)');
  const [selectedMachine, setSelectedMachine] = useState<MachineSpec | null>(null);

  // Active section tracker
  const [activeSection, setActiveSection] = useState('hero-section');

  // Filter state for Machine Finder
  const [filters, setFilters] = useState<FilterState>({
    category: 'all',
    speed: 'all',
    length: 'all',
    budget: 'all'
  });

  // Notification Toast state
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Sync Cart to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('iwp_cart', JSON.stringify(cart));
    } catch (e) {
      console.error(e);
    }
  }, [cart]);

  // Toast Helper
  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  // Filtered Machines Logic
  const filteredMachines = useMemo(() => {
    return MACHINES.filter((machine) => {
      // Category filter
      if (filters.category !== 'all' && machine.category !== filters.category) {
        return false;
      }

      // Speed filter
      if (filters.speed === 'high') {
        if (!machine.isHighSpeed && !(machine.speedNumeric && machine.speedNumeric >= 500)) {
          return false;
        }
      } else if (filters.speed === 'standard') {
        if (machine.category !== 'nail' || machine.isHighSpeed) {
          return false;
        }
      } else if (filters.speed === 'heavy') {
        if (machine.category !== 'wire') {
          return false;
        }
      }

      // Length / Gauge Scope filter
      if (filters.length === 'small') {
        if (machine.maxLengthInch && machine.maxLengthInch > 2.5) return false;
      } else if (filters.length === 'medium') {
        if (machine.category !== 'nail' || (machine.maxLengthInch && machine.maxLengthInch < 3)) return false;
      } else if (filters.length === 'large') {
        if (machine.category !== 'nail' || (machine.maxLengthInch && machine.maxLengthInch < 5)) return false;
      } else if (filters.length === 'drawing') {
        if (machine.category !== 'wire') return false;
      }

      // Budget filter
      if (filters.budget === 'under5') {
        if (machine.price >= 500000) return false;
      } else if (filters.budget === '5to15') {
        if (machine.price < 500000 || machine.price > 1500000) return false;
      } else if (filters.budget === 'over15') {
        if (machine.price < 1500000) return false;
      }

      return true;
    });
  }, [filters]);

  // Cart operations
  const handleAddToCart = (machine: MachineSpec) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.machine.id === machine.id);
      if (existing) {
        return prev.map((item) =>
          item.machine.id === machine.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { machine, quantity: 1 }];
    });
    showToast(`Added ${machine.name.split(' (')[0]} to your procurement cart.`);
  };

  const handleInstantBuy = (machine: MachineSpec) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.machine.id === machine.id);
      if (existing) {
        return prev;
      }
      return [...prev, { machine, quantity: 1 }];
    });
    setIsCheckoutOpen(true);
  };

  const handleUpdateQuantity = (machineId: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.machine.id === machineId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveItem = (machineId: string) => {
    setCart((prev) => prev.filter((item) => item.machine.id !== machineId));
  };

  const handleProceedToCheckout = () => {
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  const handleOrderCompleted = () => {
    setCart([]);
  };

  const handleOpenQuote = (machineName?: string) => {
    if (machineName) {
      setQuoteMachineName(machineName);
    }
    setIsQuoteOpen(true);
  };

  const handleScrollTo = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectMachineByName = (name: string) => {
    const found = MACHINES.find((m) => m.name === name || m.name.includes(name));
    if (found) {
      setSelectedMachine(found);
    } else {
      handleScrollTo('catalog-section');
    }
  };

  const totalCartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-[#09090b] text-[#fafafa] font-sans selection:bg-blue-600 selection:text-white">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-20 right-4 z-50 p-4 rounded-2xl bg-[#121214] border border-white/10 text-[#fafafa] shadow-2xl flex items-center gap-3 animate-fadeIn backdrop-blur-md">
          <CheckCircle2 size={20} className="text-blue-400 shrink-0" />
          <span className="text-xs sm:text-sm font-headline font-medium">{toastMessage}</span>
        </div>
      )}

      {/* Header */}
      <Header
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenQuote={handleOpenQuote}
        activeSection={activeSection}
        onNavigate={handleScrollTo}
      />

      {/* Main Content Sections */}
      <main className="w-full">
        <Hero
          onExplore={() => handleScrollTo('catalog-section')}
          onOpenQuote={() => handleOpenQuote()}
        />

        <MachineFinder
          filters={filters}
          onFilterChange={setFilters}
          onReset={() =>
            setFilters({
              category: 'all',
              speed: 'all',
              length: 'all',
              budget: 'all'
            })
          }
          matchedCount={filteredMachines.length}
          totalCount={MACHINES.length}
        />

        <MachineCatalog
          machines={filteredMachines}
          onAddToCart={handleAddToCart}
          onInstantBuy={handleInstantBuy}
          onOpenQuote={handleOpenQuote}
          onSelectMachine={(m) => setSelectedMachine(m)}
        />

        <SpecMatrix onSelectMachine={handleSelectMachineByName} />

        <ManufacturingProcess />

        <VideoSection />

        <AeoKnowledgeBase />

        <FactoryContact />
      </main>

      {/* Footer */}
      <Footer
        onNavigate={handleScrollTo}
        onSelectMachineByName={handleSelectMachineByName}
      />

      {/* Fixed Mobile Bottom Navigation */}
      <MobileBottomNav
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenQuote={() => handleOpenQuote()}
        onNavigateCatalog={() => handleScrollTo('catalog-section')}
      />

      {/* Slide-over Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onProceedToCheckout={handleProceedToCheckout}
      />

      {/* Verification Checkout Modal */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        items={cart}
        onOrderCompleted={handleOrderCompleted}
      />

      {/* Engineering RFQ Modal */}
      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
        defaultMachineName={quoteMachineName}
      />

      {/* Machine Full Spec Detail Modal */}
      <MachineDetailModal
        machine={selectedMachine}
        onClose={() => setSelectedMachine(null)}
        onAddToCart={handleAddToCart}
        onInstantBuy={handleInstantBuy}
        onOpenQuote={handleOpenQuote}
      />
    </div>
  );
}
