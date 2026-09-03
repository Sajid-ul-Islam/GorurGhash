import React, { createContext, useContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Product, CartItem, Coupon } from '../types';
import { mockCoupons } from '../data/mockProducts';
import { calculateOrderPricing } from '../utils/formatters';
import { DELIVERY_FEES } from '../constants/districts';

const STORAGE_CART_KEY = '@gorurghash_cart_items';
const STORAGE_COUPON_KEY = '@gorurghash_cart_coupon';

interface CartContextType {
  items: CartItem[];
  itemCount: number;
  addToCart: (product: Product, size: string, quantity?: number) => void;
  removeFromCart: (cartItemId: string) => void;
  updateQuantity: (cartItemId: string, quantity: number) => void;
  clearCart: () => void;
  appliedCoupon: Coupon | null;
  applyCoupon: (code: string) => { success: boolean; message: string };
  removeCoupon: () => void;
  selectedDistrict: string;
  setSelectedDistrict: (district: string) => void;
  subtotal: number;
  discount: number;
  deliveryFee: number;
  total: number;
  freeShippingProgress: number;
  amountNeededForFreeShipping: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([]);
  const [appliedCoupon, setAppliedCoupon] = useState<Coupon | null>(null);
  const [selectedDistrict, setSelectedDistrict] = useState<string>('Dhaka City');
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => {
    const loadCart = async () => {
      try {
        const storedItems = await AsyncStorage.getItem(STORAGE_CART_KEY);
        const storedCoupon = await AsyncStorage.getItem(STORAGE_COUPON_KEY);
        if (storedItems) setItems(JSON.parse(storedItems));
        if (storedCoupon) setAppliedCoupon(JSON.parse(storedCoupon));
      } catch {
        // Handled
      } finally {
        setIsLoaded(true);
      }
    };
    loadCart();
  }, []);

  useEffect(() => {
    if (!isLoaded) return;
    AsyncStorage.setItem(STORAGE_CART_KEY, JSON.stringify(items)).catch(() => {});
  }, [items, isLoaded]);

  useEffect(() => {
    if (!isLoaded) return;
    if (appliedCoupon) {
      AsyncStorage.setItem(STORAGE_COUPON_KEY, JSON.stringify(appliedCoupon)).catch(() => {});
    } else {
      AsyncStorage.removeItem(STORAGE_COUPON_KEY).catch(() => {});
    }
  }, [appliedCoupon, isLoaded]);

  const addToCart = (product: Product, size: string, quantity: number = 1) => {
    const cartItemId = `${product.id}_${size}`;
    setItems((prev) => {
      const existingIdx = prev.findIndex((i) => i.id === cartItemId);
      if (existingIdx > -1) {
        const updated = [...prev];
        updated[existingIdx] = {
          ...updated[existingIdx],
          quantity: updated[existingIdx].quantity + quantity,
        };
        return updated;
      } else {
        return [
          ...prev,
          {
            id: cartItemId,
            product,
            selectedSize: size,
            quantity,
            unitPrice: product.price,
          },
        ];
      }
    });
  };

  const removeFromCart = (cartItemId: string) => {
    setItems((prev) => prev.filter((i) => i.id !== cartItemId));
  };

  const updateQuantity = (cartItemId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(cartItemId);
      return;
    }
    setItems((prev) =>
      prev.map((i) => (i.id === cartItemId ? { ...i, quantity } : i))
    );
  };

  const clearCart = () => {
    setItems([]);
    setAppliedCoupon(null);
  };

  const applyCoupon = (code: string): { success: boolean; message: string } => {
    const cleanCode = code.trim().toUpperCase();
    const found = mockCoupons.find((c) => c.code.toUpperCase() === cleanCode);

    if (!found) {
      return { success: false, message: 'Invalid coupon code.' };
    }

    const currentSubtotal = items.reduce((sum, item) => sum + item.unitPrice * item.quantity, 0);
    if (found.minOrderAmount && currentSubtotal < found.minOrderAmount) {
      return {
        success: false,
        message: `Minimum order of ৳${found.minOrderAmount} required for coupon ${cleanCode}.`,
      };
    }

    setAppliedCoupon(found);
    return {
      success: true,
      message: `Coupon ${cleanCode} applied! You saved ${
        found.discountType === 'percentage' ? `${found.discountValue}%` : `৳${found.discountValue}`
      }.`,
    };
  };

  const removeCoupon = () => {
    setAppliedCoupon(null);
  };

  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);
  const { subtotal, discount, deliveryFee, total } = calculateOrderPricing(
    items,
    appliedCoupon,
    selectedDistrict
  );

  const freeShippingThreshold = DELIVERY_FEES.FREE_SHIPPING_THRESHOLD;
  const freeShippingProgress = Math.min(100, (subtotal / freeShippingThreshold) * 100);
  const amountNeededForFreeShipping = Math.max(0, freeShippingThreshold - subtotal);

  return (
    <CartContext.Provider
      value={{
        items,
        itemCount,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        appliedCoupon,
        applyCoupon,
        removeCoupon,
        selectedDistrict,
        setSelectedDistrict,
        subtotal,
        discount,
        deliveryFee,
        total,
        freeShippingProgress,
        amountNeededForFreeShipping,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used within a CartProvider');
  return context;
};
