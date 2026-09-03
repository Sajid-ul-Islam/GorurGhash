import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import FullScreenContainer from '../../src/components/FullScreenContainer';
import { useRouter } from 'expo-router';
import { Header } from '../../src/components/common/Header';
import { CartItemRow } from '../../src/components/cart/CartItemRow';
import { CouponSection } from '../../src/components/cart/CouponSection';
import { OrderSummary } from '../../src/components/cart/OrderSummary';
import { EmptyState } from '../../src/components/common/EmptyState';
import { useCart } from '../../src/context/CartContext';
import { Colors, Spacing, Typography } from '../../src/constants/theme';

export default function CartScreen() {
  const router = useRouter();
  const {
    items,
    itemCount,
    updateQuantity,
    removeFromCart,
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
  } = useCart();

  return (
    <FullScreenContainer style={styles.safeArea}>
      <Header
        title={`Shopping Bag (${itemCount})`}
        subtitle="Review items before checkout"
        showCart={false}
        rightAction={
          itemCount > 0 ? (
            <TouchableOpacity onPress={clearCart} style={styles.clearBtn}>
              <Text style={styles.clearBtnText}>Empty Bag</Text>
            </TouchableOpacity>
          ) : null
        }
      />

      {items.length === 0 ? (
        <EmptyState
          icon="bag-handle-outline"
          title="Your Bag is Empty"
          description="Looks like you haven't added any authentic Gorur Ghash streetwear drops yet."
          actionTitle="Explore Street Catalog"
          onAction={() => router.push('/(tabs)/shop')}
        />
      ) : (
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          {/* Cart Items List */}
          <View style={styles.itemsSection}>
            {items.map((item) => (
              <CartItemRow
                key={item.id}
                item={item}
                onUpdateQuantity={(q) => updateQuantity(item.id, q)}
                onRemove={() => removeFromCart(item.id)}
              />
            ))}
          </View>

          {/* Promo Coupons */}
          <CouponSection
            appliedCoupon={appliedCoupon}
            onApplyCoupon={applyCoupon}
            onRemoveCoupon={removeCoupon}
          />

          {/* Order Summary & Checkout Trigger */}
          <OrderSummary
            subtotal={subtotal}
            discount={discount}
            deliveryFee={deliveryFee}
            total={total}
            selectedDistrict={selectedDistrict}
            onSelectDistrict={setSelectedDistrict}
            freeShippingProgress={freeShippingProgress}
            amountNeededForFreeShipping={amountNeededForFreeShipping}
            onCheckout={() => router.push('/checkout')}
            checkoutButtonTitle={`Proceed to Checkout (${itemCount} items)`}
          />

          <View style={{ height: Spacing.xl }} />
        </ScrollView>
      )}
    </FullScreenContainer>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  scrollContent: {
    paddingHorizontal: Spacing.lg,
    paddingTop: Spacing.md,
    paddingBottom: Spacing.xxxl,
  },
  itemsSection: {
    marginBottom: Spacing.xs,
  },
  clearBtn: {
    paddingHorizontal: Spacing.sm,
    paddingVertical: Spacing.xs,
  },
  clearBtnText: {
    ...Typography.caption,
    color: Colors.danger,
    fontWeight: '700',
  },
});
