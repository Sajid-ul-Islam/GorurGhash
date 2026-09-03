import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import FullScreenContainer from '../../src/components/FullScreenContainer';
import { useRouter } from 'expo-router';
import { Header } from '../../src/components/common/Header';
import { Input } from '../../src/components/common/Input';
import { Button } from '../../src/components/common/Button';
import { PaymentPicker } from '../../src/components/checkout/PaymentPicker';
import { useCart } from '../../src/context/CartContext';
import { useAuth } from '../../src/context/AuthContext';
import { useOrders } from '../../src/context/OrderContext';
import { BANGLADESH_DIVISIONS } from '../../src/constants/districts';
import { PaymentMethod, Address } from '../../src/types';
import { Colors, BorderRadius, Spacing, Typography, Shadows } from '../../src/constants/theme';
import { formatPrice, isValidBdPhone } from '../../src/utils/formatters';

export default function CheckoutScreen() {
  const router = useRouter();
  const { items, subtotal, discount, deliveryFee, total, appliedCoupon, clearCart, selectedDistrict, setSelectedDistrict } = useCart();
  const { user } = useAuth();
  const { createOrder } = useOrders();

  // Address form fields
  const [recipientName, setRecipientName] = useState(user?.name || 'Shaon Ahmed');
  const [phone, setPhone] = useState(user?.phone || '01713222653');
  const [selectedDivision, setSelectedDivision] = useState('Dhaka');
  const [district, setDistrict] = useState(selectedDistrict || 'Dhaka City');
  const [streetAddress, setStreetAddress] = useState('House 57, Road 3, Sector 5, Uttara');
  const [orderNotes, setOrderNotes] = useState('');

  // Payment
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('cod');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Errors
  const [phoneError, setPhoneError] = useState('');

  const currentDistricts =
    BANGLADESH_DIVISIONS.find((d) => d.division === selectedDivision)?.districts || [];

  const handlePlaceOrder = async () => {
    if (!recipientName.trim()) {
      Alert.alert('Recipient Name', 'Please enter recipient name.');
      return;
    }

    if (!isValidBdPhone(phone)) {
      setPhoneError('Please enter a valid 11-digit Bangladeshi mobile number.');
      Alert.alert('Invalid Mobile Number', 'Please enter a valid Bangladeshi phone number (e.g. 017XXXXXXXX).');
      return;
    }
    setPhoneError('');

    if (!streetAddress.trim()) {
      Alert.alert('Address Required', 'Please enter your street / building delivery address.');
      return;
    }

    if (items.length === 0) {
      Alert.alert('Bag Empty', 'Your shopping bag is empty.');
      router.push('/(tabs)/shop');
      return;
    }

    setIsSubmitting(true);
    try {
      const shippingAddress: Address = {
        id: `addr_${Date.now()}`,
        title: 'Delivery Address',
        recipientName: recipientName.trim(),
        phone: phone.trim(),
        division: selectedDivision,
        district,
        streetAddress: streetAddress.trim(),
      };

      const newOrder = await createOrder({
        userId: user?.id,
        items,
        shippingAddress,
        paymentMethod,
        couponCode: appliedCoupon?.code,
        notes: orderNotes.trim() || undefined,
      });

      clearCart();
      router.replace(`/checkout/success?orderId=${newOrder.id}`);
    } catch (e: any) {
      Alert.alert('Order Placement Failed', e.message || 'Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <FullScreenContainer style={styles.safeArea}>
      <Header showBack title="Secure Checkout" subtitle="All 64 districts supported" />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Step 1: Delivery Address */}
        <View style={styles.sectionCard}>
          <View style={styles.sectionHeaderRow}>
            <View style={styles.stepCircle}>
              <Text style={styles.stepNum}>1</Text>
            </View>
            <Text style={styles.sectionTitle}>Delivery Destination</Text>
          </View>

          <Input
            label="Full Name *"
            placeholder="e.g. Shaon Ahmed"
            value={recipientName}
            onChangeText={setRecipientName}
            leftIcon="person-outline"
          />

          <Input
            label="Phone Number (for Courier Rider) *"
            placeholder="e.g. 017XXXXXXXX"
            keyboardType="phone-pad"
            value={phone}
            onChangeText={(t) => {
              setPhone(t);
              if (phoneError) setPhoneError('');
            }}
            error={phoneError}
            leftIcon="call-outline"
            helperText="Rider will call this number prior to arrival."
          />

          {/* Division Selector */}
          <Text style={styles.pickerLabel}>Division:</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.pickerScroll}>
            {BANGLADESH_DIVISIONS.map((div) => {
              const isActive = selectedDivision === div.division;
              return (
                <TouchableOpacity
                  key={div.division}
                  style={[styles.pickerPill, isActive && styles.pickerPillActive]}
                  onPress={() => {
                    setSelectedDivision(div.division);
                    const firstDist = div.districts[0] || 'Dhaka City';
                    setDistrict(firstDist);
                    setSelectedDistrict(firstDist);
                  }}
                >
                  <Text style={[styles.pickerText, isActive && styles.pickerTextActive]}>
                    {div.division}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </ScrollView>

          {/* District Selector */}
          <Text style={styles.pickerLabel}>District / Area:</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.pickerScroll}>
            {currentDistricts.map((dist) => {
              const isActive = district === dist;
              return (
                <TouchableOpacity
                  key={dist}
                  style={[styles.pickerPill, isActive && styles.pickerPillActive]}
                  onPress={() => {
                    setDistrict(dist);
                    setSelectedDistrict(dist);
                  }}
                >
                  <Text style={[styles.pickerText, isActive && styles.pickerTextActive]}>
                    {dist}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </ScrollView>

          <Input
            label="Street Address / House / Road *"
            placeholder="e.g. House 57, Road 3, Sector 5, Uttara"
            value={streetAddress}
            onChangeText={setStreetAddress}
            leftIcon="home-outline"
          />

          <Input
            label="Special Delivery Instructions (Optional)"
            placeholder="e.g. Call before arrival, leave with security"
            value={orderNotes}
            onChangeText={setOrderNotes}
            leftIcon="document-text-outline"
          />
        </View>

        {/* Step 2: Payment Method */}
        <View style={styles.sectionCard}>
          <View style={styles.sectionHeaderRow}>
            <View style={styles.stepCircle}>
              <Text style={styles.stepNum}>2</Text>
            </View>
            <Text style={styles.sectionTitle}>Payment Method</Text>
          </View>

          <PaymentPicker
            selectedMethod={paymentMethod}
            onSelectMethod={setPaymentMethod}
          />
        </View>

        {/* Step 3: Order Review & Pricing */}
        <View style={styles.sectionCard}>
          <View style={styles.sectionHeaderRow}>
            <View style={styles.stepCircle}>
              <Text style={styles.stepNum}>3</Text>
            </View>
            <Text style={styles.sectionTitle}>Order Review ({items.length} items)</Text>
          </View>

          <View style={styles.itemsSummaryList}>
            {items.map((i) => (
              <View key={i.id} style={styles.itemSummaryRow}>
                <Text style={styles.itemSummaryName} numberOfLines={1}>
                  {i.product.name} ({i.selectedSize}) × {i.quantity}
                </Text>
                <Text style={styles.itemSummaryPrice}>
                  {formatPrice(i.unitPrice * i.quantity)}
                </Text>
              </View>
            ))}
          </View>

          <View style={styles.divider} />

          <View style={styles.pricingRow}>
            <Text style={styles.pricingLabel}>Subtotal</Text>
            <Text style={styles.pricingValue}>{formatPrice(subtotal)}</Text>
          </View>

          {discount > 0 && (
            <View style={styles.pricingRow}>
              <Text style={[styles.pricingLabel, { color: Colors.success }]}>
                Discount ({appliedCoupon?.code})
              </Text>
              <Text style={[styles.pricingValue, { color: Colors.success }]}>
                -{formatPrice(discount)}
              </Text>
            </View>
          )}

          <View style={styles.pricingRow}>
            <Text style={styles.pricingLabel}>
              Delivery ({district.includes('Dhaka') ? 'Dhaka' : 'Outside Dhaka'})
            </Text>
            <Text style={styles.pricingValue}>
              {deliveryFee === 0 ? 'FREE' : formatPrice(deliveryFee)}
            </Text>
          </View>

          <View style={styles.divider} />

          <View style={styles.totalRow}>
            <Text style={styles.totalLabel}>Grand Total</Text>
            <Text style={styles.totalValue}>{formatPrice(total)}</Text>
          </View>

          <Button
            title={
              isSubmitting
                ? 'Confirming Order...'
                : paymentMethod === 'cod'
                ? `Confirm Order — ${formatPrice(total)} (Cash on Delivery)`
                : `Pay ${formatPrice(total)} with ${paymentMethod.toUpperCase()}`
            }
            size="lg"
            loading={isSubmitting}
            onPress={handlePlaceOrder}
            style={styles.placeOrderBtn}
          />
        </View>

        <View style={{ height: Spacing.xxl }} />
      </ScrollView>
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
  sectionCard: {
    backgroundColor: Colors.surface,
    padding: Spacing.md,
    borderRadius: BorderRadius.lg,
    borderWidth: 1,
    borderColor: Colors.border,
    marginBottom: Spacing.md,
    ...Shadows.sm,
  },
  sectionHeaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: Spacing.md,
  },
  stepCircle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: Spacing.sm,
  },
  stepNum: {
    color: Colors.textWhite,
    fontSize: 12,
    fontWeight: '800',
  },
  sectionTitle: {
    ...Typography.heading2,
    color: Colors.textPrimary,
  },
  pickerLabel: {
    ...Typography.bodyMedium,
    color: Colors.textSecondary,
    marginBottom: Spacing.xs,
  },
  pickerScroll: {
    marginBottom: Spacing.md,
  },
  pickerPill: {
    paddingHorizontal: Spacing.md,
    paddingVertical: 6,
    borderRadius: BorderRadius.full,
    borderWidth: 1,
    borderColor: Colors.border,
    backgroundColor: Colors.surfaceAlt,
    marginRight: Spacing.xs + 2,
  },
  pickerPillActive: {
    backgroundColor: Colors.primary,
    borderColor: Colors.primary,
  },
  pickerText: {
    ...Typography.caption,
    fontWeight: '700',
    color: Colors.textSecondary,
  },
  pickerTextActive: {
    color: Colors.textWhite,
  },
  itemsSummaryList: {
    marginVertical: Spacing.xs,
  },
  itemSummaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 4,
  },
  itemSummaryName: {
    ...Typography.body,
    color: Colors.textSecondary,
    flex: 1,
    marginRight: Spacing.sm,
  },
  itemSummaryPrice: {
    ...Typography.bodyMedium,
    color: Colors.textPrimary,
    fontWeight: '600',
  },
  divider: {
    height: 1,
    backgroundColor: Colors.border,
    marginVertical: Spacing.sm,
  },
  pricingRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: Spacing.xs,
  },
  pricingLabel: {
    ...Typography.body,
    color: Colors.textSecondary,
  },
  pricingValue: {
    ...Typography.bodyMedium,
    color: Colors.textPrimary,
    fontWeight: '600',
  },
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: Spacing.sm,
  },
  totalLabel: {
    ...Typography.heading2,
    color: Colors.textPrimary,
  },
  totalValue: {
    ...Typography.heading1,
    color: Colors.primary,
    fontWeight: '800',
  },
  placeOrderBtn: {
    marginTop: Spacing.md,
    width: '100%',
  },
});
