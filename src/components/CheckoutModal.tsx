import React, { useState } from 'react';
import { CartItem, CheckoutFormData } from '../types';
import { X, ShieldCheck, CheckCircle2, Lock, Building, Truck } from 'lucide-react';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onOrderCompleted: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  items,
  onOrderCompleted
}) => {
  const [formData, setFormData] = useState<CheckoutFormData>({
    fullName: '',
    companyName: '',
    phone: '',
    email: '',
    deliveryAddress: '',
    city: '',
    state: 'Gujarat',
    pincode: '',
    gstNumber: '',
    paymentMethod: 'cod'
  });

  const [submittedRef, setSubmittedRef] = useState<string | null>(null);

  if (!isOpen) return null;

  const totalAmount = items.reduce((sum, item) => sum + item.machine.price * item.quantity, 0);

  const formatPrice = (amount: number) => {
    return '₹' + amount.toLocaleString('en-IN');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone || !formData.companyName) return;

    const randomRef = 'IWP-' + Math.floor(100000 + Math.random() * 900000);
    setSubmittedRef(randomRef);
    onOrderCompleted();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="w-full max-w-2xl bg-[#121214] rounded-2xl shadow-2xl border border-white/10 overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="p-5 bg-[#121214] border-b border-white/5 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="p-1.5 rounded-lg bg-blue-600/10 text-blue-400 border border-blue-500/20">
              <ShieldCheck size={20} />
            </div>
            <h3 className="font-headline text-base sm:text-lg uppercase text-white font-bold">
              Commercial Machinery Checkout &amp; Verification
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-white/60 hover:text-white hover:bg-white/5 transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        {/* Form Container */}
        <div className="p-6 overflow-y-auto flex flex-col gap-6">
          {submittedRef ? (
            <div className="flex flex-col items-center justify-center text-center py-10 gap-4 animate-fadeIn">
              <div className="w-16 h-16 rounded-full bg-blue-600/10 border border-blue-500/30 flex items-center justify-center text-blue-400">
                <CheckCircle2 size={36} />
              </div>

              <div className="flex flex-col gap-1">
                <h4 className="font-headline text-xl uppercase text-white font-bold">
                  Procurement Order Booked!
                </h4>
                <p className="text-sm text-white/60 max-w-md leading-relaxed">
                  Booking Reference: <strong className="text-blue-400 font-mono text-base">{submittedRef}</strong>.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 text-xs text-left max-w-md w-full flex flex-col gap-2.5">
                <div className="flex justify-between text-white/60">
                  <span>Authorized Entity:</span>
                  <span className="text-white font-bold">{formData.companyName}</span>
                </div>
                <div className="flex justify-between text-white/60">
                  <span>Verification Contact:</span>
                  <span className="text-white font-bold">{formData.phone}</span>
                </div>
                <div className="flex justify-between text-white/60">
                  <span>Payment Preference:</span>
                  <span className="text-blue-400 font-bold uppercase">{formData.paymentMethod === 'cod' ? 'COD / Plant Verification' : 'Commercial Bank Wire (NEFT/LC)'}</span>
                </div>
              </div>

              <p className="text-xs text-white/40 max-w-sm">
                Our plant dispatch superintendent at Aji GIDC, Rajkot is reviewing your order specifications and will call within 2 operational hours to verify factory allocation.
              </p>

              <button
                onClick={onClose}
                className="mt-2 px-6 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white font-headline text-xs uppercase font-bold transition-colors"
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-between text-xs font-headline">
                <span className="text-white/60 font-medium">Total Procurement Subtotal ({items.length} units):</span>
                <span className="text-blue-400 font-bold text-base">{formatPrice(totalAmount)}</span>
              </div>

              <p className="text-xs text-white/60 leading-relaxed">
                Enter authorized enterprise procurement details. For high-capacity machinery, orders undergo telephone &amp; GST verification prior to physical dispatch from Rajkot.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] uppercase text-white/60 mb-1 font-medium">
                    Authorized Representative Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Ramesh Patel"
                    className="w-full bg-[#09090b] border border-white/10 text-white text-xs p-3 rounded-xl focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[11px] uppercase text-white/60 mb-1 font-medium">
                    Enterprise / Company Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    placeholder="e.g. Gujarat Fasteners Ltd."
                    className="w-full bg-[#09090b] border border-white/10 text-white text-xs p-3 rounded-xl focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[11px] uppercase text-white/60 mb-1 font-medium">
                    Phone / WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className="w-full bg-[#09090b] border border-white/10 text-white text-xs p-3 rounded-xl focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[11px] uppercase text-white/60 mb-1 font-medium">
                    Procurement Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="purchase@company.com"
                    className="w-full bg-[#09090b] border border-white/10 text-white text-xs p-3 rounded-xl focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] uppercase text-white/60 mb-1 font-medium">
                  Factory Delivery Address *
                </label>
                <input
                  type="text"
                  required
                  value={formData.deliveryAddress}
                  onChange={(e) => setFormData({ ...formData, deliveryAddress: e.target.value })}
                  placeholder="Plot No., Industrial Area, Street, Landmark"
                  className="w-full bg-[#09090b] border border-white/10 text-white text-xs p-3 rounded-xl focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div>
                  <label className="block text-[11px] uppercase text-white/60 mb-1 font-medium">City *</label>
                  <input
                    type="text"
                    required
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    placeholder="Ahmedabad"
                    className="w-full bg-[#09090b] border border-white/10 text-white text-xs p-3 rounded-xl focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[11px] uppercase text-white/60 mb-1 font-medium">State *</label>
                  <input
                    type="text"
                    required
                    value={formData.state}
                    onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                    placeholder="Gujarat"
                    className="w-full bg-[#09090b] border border-white/10 text-white text-xs p-3 rounded-xl focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[11px] uppercase text-white/60 mb-1 font-medium">Postal Code *</label>
                  <input
                    type="text"
                    required
                    value={formData.pincode}
                    onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
                    placeholder="380001"
                    className="w-full bg-[#09090b] border border-white/10 text-white text-xs p-3 rounded-xl focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[11px] uppercase text-white/60 mb-1 font-medium">GST / Tax ID</label>
                  <input
                    type="text"
                    value={formData.gstNumber}
                    onChange={(e) => setFormData({ ...formData, gstNumber: e.target.value })}
                    placeholder="24AAAAA0000A1Z5"
                    className="w-full bg-[#09090b] border border-white/10 text-white text-xs p-3 rounded-xl focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>
              </div>

              {/* Payment / Verification Scheme Selector */}
              <div className="flex flex-col gap-2 pt-2">
                <label className="text-[11px] uppercase tracking-wider text-white/60 font-semibold">
                  Authorized Payment Terms
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <label
                    className={`p-4 rounded-xl border flex items-start gap-3 cursor-pointer transition-colors ${
                      formData.paymentMethod === 'cod' ? 'border-blue-500 bg-blue-600/10' : 'border-white/5 bg-white/[0.02]'
                    }`}
                  >
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="cod"
                      checked={formData.paymentMethod === 'cod'}
                      onChange={() => setFormData({ ...formData, paymentMethod: 'cod' })}
                      className="mt-1 text-blue-500"
                    />
                    <div className="flex flex-col">
                      <span className="font-headline text-xs text-white font-bold uppercase">
                        COD / Plant Verification
                      </span>
                      <span className="text-[11px] text-white/60 mt-0.5">
                        Freight advance + Balance upon live pre-dispatch road inspection.
                      </span>
                    </div>
                  </label>

                  <label
                    className={`p-4 rounded-xl border flex items-start gap-3 cursor-pointer transition-colors ${
                      formData.paymentMethod === 'bank' ? 'border-blue-500 bg-blue-600/10' : 'border-white/5 bg-white/[0.02]'
                    }`}
                  >
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="bank"
                      checked={formData.paymentMethod === 'bank'}
                      onChange={() => setFormData({ ...formData, paymentMethod: 'bank' })}
                      className="mt-1 text-blue-500"
                    />
                    <div className="flex flex-col">
                      <span className="font-headline text-xs text-white font-bold uppercase">
                        Commercial Bank Wire (NEFT/LC)
                      </span>
                      <span className="text-[11px] text-white/60 mt-0.5">
                        Export Grade Irrevocable Letter of Credit or RTGS proforma.
                      </span>
                    </div>
                  </label>
                </div>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full mt-3 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs uppercase font-semibold tracking-wider transition-all shadow-lg shadow-blue-600/25 active:scale-95"
              >
                Confirm Commercial Booking
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
