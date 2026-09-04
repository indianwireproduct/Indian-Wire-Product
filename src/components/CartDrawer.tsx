import React from 'react';
import { CartItem } from '../types';
import { X, ShoppingCart, Trash2, Plus, Minus, ArrowRight } from 'lucide-react';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (machineId: string, delta: number) => void;
  onRemoveItem: (machineId: string) => void;
  onProceedToCheckout: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onProceedToCheckout
}) => {
  if (!isOpen) return null;

  const totalAmount = items.reduce((sum, item) => sum + item.machine.price * item.quantity, 0);

  const formatPrice = (amount: number) => {
    return '₹' + amount.toLocaleString('en-IN');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden animate-fadeIn">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/75 backdrop-blur-sm transition-opacity"
      />

      {/* Drawer Panel */}
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#121214] border-l border-white/5 shadow-2xl flex flex-col justify-between z-10 animate-slideLeft">
          {/* Header */}
          <div className="p-5 border-b border-white/5 bg-[#121214] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShoppingCart size={20} className="text-blue-400" />
              <h3 className="font-headline text-base uppercase text-white font-bold">
                Industrial Order Cart
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-white/60 hover:text-white hover:bg-white/5 transition-colors"
            >
              <X size={18} />
            </button>
          </div>

          {/* Items Container */}
          <div className="p-5 flex flex-col gap-3 overflow-y-auto flex-grow">
            {items.length === 0 ? (
              <div className="text-center py-16 flex flex-col items-center justify-center text-white/60 gap-3">
                <ShoppingCart size={40} className="text-white/20" />
                <p className="font-headline text-sm font-semibold text-white">Your inquiry cart is empty.</p>
                <p className="text-xs max-w-xs">Select machinery from our catalog to calculate subtotal and initiate verification booking.</p>
              </div>
            ) : (
              items.map((item) => (
                <div
                  key={item.machine.id}
                  className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col gap-3"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <span className="text-[10px] text-blue-400 uppercase font-semibold">
                        {item.machine.modelCode}
                      </span>
                      <h4 className="font-headline text-sm text-white font-bold leading-tight">
                        {item.machine.name}
                      </h4>
                      <span className="font-mono text-xs text-blue-400 font-bold block mt-1">
                        {formatPrice(item.machine.price)}
                      </span>
                    </div>

                    <button
                      onClick={() => onRemoveItem(item.machine.id)}
                      className="text-white/40 hover:text-rose-400 p-1 transition-colors"
                      title="Remove item"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-white/5 text-xs">
                    <span className="text-white/40 uppercase text-[11px] font-medium">Quantity</span>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => onUpdateQuantity(item.machine.id, -1)}
                        className="w-7 h-7 rounded-lg bg-white/5 text-white hover:bg-white/10 flex items-center justify-center font-bold transition-colors"
                      >
                        <Minus size={13} />
                      </button>
                      <span className="font-mono font-bold text-white w-6 text-center">{item.quantity}</span>
                      <button
                        onClick={() => onUpdateQuantity(item.machine.id, 1)}
                        className="w-7 h-7 rounded-lg bg-white/5 text-white hover:bg-white/10 flex items-center justify-center font-bold transition-colors"
                      >
                        <Plus size={13} />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer Area */}
          <div className="p-5 border-t border-white/5 bg-[#121214] flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase text-white/60 font-medium">Estimated Ex-Factory Total:</span>
              <span className="font-headline text-xl text-blue-400 font-bold">
                {formatPrice(totalAmount)}
              </span>
            </div>

            <p className="text-[11px] text-white/40 leading-tight">
              * Local GST, road freight, oceanic insurance, and optional motor/drive add-ons are finalized during formal verification invoicing.
            </p>

            <button
              disabled={items.length === 0}
              onClick={onProceedToCheckout}
              className="w-full py-3.5 rounded-xl bg-blue-600 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-blue-500 text-white text-xs uppercase font-semibold tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-600/25 active:scale-95"
            >
              <span>Proceed to Verification Checkout</span>
              <ArrowRight size={15} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
