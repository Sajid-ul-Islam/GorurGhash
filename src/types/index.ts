export type UserRole = 'customer' | 'admin';

export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: UserRole;
  avatarUrl?: string;
  addresses?: Address[];
  createdAt: string;
}

export interface Address {
  id: string;
  title: string; // 'Home' | 'Office' | 'Other'
  recipientName: string;
  phone: string;
  division: string; // e.g., 'Dhaka'
  district: string; // e.g., 'Dhaka', 'Gazipur', 'Chittagong'
  thana?: string;
  streetAddress: string;
  isDefault?: boolean;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  price: number; // in BDT (৳)
  regularPrice?: number; // in BDT (৳)
  onSale: boolean;
  images: string[];
  categories: string[];
  sizes: string[];
  description: string;
  sku: string;
  inStock: boolean;
  rating: number;
  reviewCount: number;
  isNew?: boolean;
  isBestSeller?: boolean;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  iconName: string;
  imageUrl?: string;
  productCount: number;
}

export interface CartItem {
  id: string; // unique cart item id (e.g. productId_size)
  product: Product;
  selectedSize: string;
  quantity: number;
  unitPrice: number;
}

export interface Coupon {
  code: string;
  discountType: 'percentage' | 'fixed';
  discountValue: number; // e.g. 10% or 200 BDT
  minOrderAmount?: number;
  description: string;
}

export type PaymentMethod = 'bkash' | 'nagad' | 'card' | 'cod';

export interface CourierOption {
  id: string;
  name: string;
  estimatedDelivery: string;
  cost: number;
  isInsideDhaka: boolean;
}

export type OrderStatus = 'pending' | 'confirmed' | 'processing' | 'shipped' | 'delivered' | 'cancelled';

export interface OrderTimelineStep {
  status: OrderStatus;
  title: string;
  description: string;
  timestamp: string;
  completed: boolean;
}

export interface Order {
  id: string;
  orderNumber: string;
  userId: string;
  items: CartItem[];
  subtotal: number;
  discount: number;
  deliveryFee: number;
  total: number;
  shippingAddress: Address;
  paymentMethod: PaymentMethod;
  isPaid: boolean;
  status: OrderStatus;
  timeline: OrderTimelineStep[];
  couponApplied?: string;
  createdAt: string;
  notes?: string;
}

export type SortOption = 'newest' | 'price_asc' | 'price_desc' | 'popular';

export interface FilterOptions {
  category?: string;
  searchQuery?: string;
  minPrice?: number;
  maxPrice?: number;
  size?: string;
  onSaleOnly?: boolean;
  sortBy?: SortOption;
}
