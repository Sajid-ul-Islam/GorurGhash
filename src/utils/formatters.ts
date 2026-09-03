import { CartItem, Coupon } from '../types';
import { getDeliveryFee } from '../constants/districts';

export const formatPrice = (amount: number): string => {
  return `৳${amount.toLocaleString('en-US')}`;
};

export const formatDate = (dateString: string): string => {
  try {
    const d = new Date(dateString);
    return d.toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });
  } catch {
    return dateString;
  }
};

export const formatTime = (dateString: string): string => {
  try {
    const d = new Date(dateString);
    return d.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
    });
  } catch {
    return '';
  }
};

export const isValidBdPhone = (phone: string): boolean => {
  const clean = phone.replace(/[\s\-\(\)]/g, '');
  // standard BD mobile: +8801[3-9]XXXXXXXX or 01[3-9]XXXXXXXX
  const bdRegex = /^(?:\+8801|8801|01)[3-9]\d{8}$/;
  return bdRegex.test(clean);
};

export const formatBdPhone = (phone: string): string => {
  const clean = phone.replace(/[\s\-\(\)]/g, '');
  if (clean.startsWith('+88')) return clean;
  if (clean.startsWith('88')) return `+${clean}`;
  if (clean.startsWith('0')) return `+88${clean}`;
  return `+880${clean}`;
};

export const calculateOrderPricing = (
  items: CartItem[],
  coupon: Coupon | null = null,
  district: string = 'Dhaka City'
) => {
  const subtotal = items.reduce((sum, item) => sum + item.unitPrice * item.quantity, 0);

  let discount = 0;
  if (coupon) {
    if (!coupon.minOrderAmount || subtotal >= coupon.minOrderAmount) {
      if (coupon.discountType === 'percentage') {
        discount = Math.round((subtotal * coupon.discountValue) / 100);
      } else {
        discount = Math.min(subtotal, coupon.discountValue);
      }
    }
  }

  const deliveryFee = items.length > 0 ? getDeliveryFee(district, subtotal) : 0;
  const total = Math.max(0, subtotal - discount + deliveryFee);

  return {
    subtotal,
    discount,
    deliveryFee,
    total,
  };
};
