export type MachineCategory = 'nail' | 'wire';

export interface MachineSpec {
  id: string;
  name: string;
  modelCode: string;
  category: MachineCategory;
  categoryLabel: string;
  badge?: string;
  secondaryBadge?: string;
  subtitle: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  lengthRange?: string;
  wireDiameter?: string;
  productionSpeed?: string;
  speedNumeric: number;
  maxLengthInch?: number;
  dailyYield: string;
  motorRequired: string;
  machineWeight: string;
  price: number;
  priceFormatted: string;
  priceDisclaimer?: string;
  hasPriceCondition?: boolean;
  priceConditionText?: string;
  targetMaterial?: string;
  drumSpecs?: string;
  reductionSpan?: string;
  isBestSeller?: boolean;
  isHighSpeed?: boolean;
  isHeavyDuty?: boolean;
  features: string[];
}

export interface CartItem {
  machine: MachineSpec;
  quantity: number;
}

export interface FilterState {
  category: 'all' | 'nail' | 'wire';
  speed: 'all' | 'high' | 'standard' | 'heavy';
  length: 'all' | 'small' | 'medium' | 'large' | 'drawing';
  budget: 'all' | 'under5' | '5to15' | 'over15';
}

export interface RFQFormData {
  machineId: string;
  machineName: string;
  contactName: string;
  companyName: string;
  phone: string;
  country: string;
  estimatedDailyYield: string;
  notes: string;
}

export interface CheckoutFormData {
  fullName: string;
  companyName: string;
  phone: string;
  email: string;
  deliveryAddress: string;
  city: string;
  state: string;
  pincode: string;
  gstNumber: string;
  paymentMethod: 'cod' | 'bank';
}
