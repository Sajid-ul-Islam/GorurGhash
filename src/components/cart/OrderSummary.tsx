import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Colors, BorderRadius, Spacing, Typography } from '../../constants/theme';
import { formatPrice } from '../../utils/formatters';
import { Button } from '../common/Button';

interface OrderSummaryProps {
  subtotal: number;
  discount: number;
  deliveryFee: number;
  total: number;
  selectedDistrict: string;
  onSelectDistrict: (district: string) => void;
  freeShippingProgress: number;
  amountNeededForFreeShipping: number;
  onCheckout: () => void;
  checkoutButtonTitle?: string;
  disabled?: boolean;
}

export const OrderSummary: React.FC<OrderSummaryProps> = ({
  subtotal,
  discount,
  deliveryFee,
  total,
  selectedDistrict,
  onSelectDistrict,
  freeShippingProgress,
  amountNeededForFreeShipping,
  onCheckout,
  checkoutButtonTitle = 'Proceed to Checkout',
  disabled = false,
}) => {
  const isDhaka = selectedDistrict.toLowerCase().includes('dhaka');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Order Summary</Text>

      {/* Free Shipping Progress Indicator */}
      <View style={styles.shippingMeterCard}>
        <View style={styles.shippingMeterHeader}>
          <Text style={styles.meterText}>
            {amountNeededForFreeShipping === 0 ? (
              '🎉 You qualify for FREE Nationwide Delivery!'
            ) : (
              <>Add <Text style={styles.meterHighlight}>{formatPrice(amountNeededForFreeShipping)}</Text> more for FREE Delivery</>
            )}
          </Text>
        </View>
        <View style={styles.progressBarBg}>
          <View style={[styles.progressBarFill, { width: `${freeShippingProgress}%` }]} />
        </View>
      </View>

      {/* Delivery Zone Toggle */}
      <View style={styles.deliveryToggleRow}>
        <Text style={styles.toggleLabel}>Delivery Region:</Text>
        <View style={styles.toggleButtons}>
          <TouchableOpacity
            style={[styles.zoneBtn, isDhaka && styles.zoneBtnActive]}
            onPress={() => onSelectDistrict('Dhaka City')}
          >
            <Text style={[styles.zoneText, isDhaka && styles.zoneTextActive]}>
              Dhaka (৳70)
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.zoneBtn, !isDhaka && styles.zoneBtnActive]}
            onPress={() => onSelectDistrict('Chittagong City')}
          >
            <Text style={[styles.zoneText, !isDhaka && styles.zoneTextActive]}>
              Outside Dhaka (৳130)
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Financial Lines */}
      <View style={styles.lineItem}>
        <Text style={styles.lineLabel}>Subtotal</Text>
        <Text style={styles.lineValue}>{formatPrice(subtotal)}</Text>
      </View>

      {discount > 0 && (
        <View style={styles.lineItem}>
          <Text style={[styles.lineLabel, { color: Colors.success }]}>Promo Discount</Text>
          <Text style={[styles.lineValue, { color: Colors.success }]}>
            -{formatPrice(discount)}
          </Text>
        </View>
      )}

      <View style={styles.lineItem}>
        <Text style={styles.lineLabel}>Delivery Charge</Text>
        <Text style={styles.lineValue}>
          {deliveryFee === 0 ? 'FREE' : formatPrice(deliveryFee)}
        </Text>
      </View>

      <View style={styles.divider} />

      {/* Grand Total */}
      <View style={styles.totalRow}>
        <View>
          <Text style={styles.totalLabel}>Total Payable</Text>
          <Text style={styles.taxInclusive}>Includes all VAT & taxes</Text>
        </View>
        <Text style={styles.totalValue}>{formatPrice(total)}</Text>
      </View>

      {/* Checkout Button */}
      <Button
        title={checkoutButtonTitle}
        onPress={onCheckout}
        disabled={disabled}
        size="lg"
        style={styles.checkoutBtn}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.surface,
    padding: Spacing.lg,
    borderRadius: BorderRadius.lg,
    borderWidth: 1,
    borderColor: Colors.border,
    marginVertical: Spacing.sm,
  },
  title: {
    ...Typography.heading2,
    color: Colors.textPrimary,
    marginBottom: Spacing.md,
  },
  shippingMeterCard: {
    backgroundColor: Colors.primarySubtle,
    borderRadius: BorderRadius.md,
    padding: Spacing.sm + 2,
    marginBottom: Spacing.md,
  },
  shippingMeterHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  meterText: {
    ...Typography.caption,
    fontWeight: '600',
    color: Colors.primaryDark,
  },
  meterHighlight: {
    fontWeight: '800',
    color: Colors.primary,
  },
  progressBarBg: {
    height: 6,
    backgroundColor: '#C3E1F7',
    borderRadius: 3,
    overflow: 'hidden',
  },
  progressBarFill: {
    height: '100%',
    backgroundColor: Colors.primary,
  },
  deliveryToggleRow: {
    marginBottom: Spacing.md,
  },
  toggleLabel: {
    ...Typography.bodyMedium,
    color: Colors.textSecondary,
    marginBottom: 6,
  },
  toggleButtons: {
    flexDirection: 'row',
    gap: Spacing.sm,
  },
  zoneBtn: {
    flex: 1,
    paddingVertical: Spacing.xs + 2,
    alignItems: 'center',
    borderRadius: BorderRadius.md,
    borderWidth: 1,
    borderColor: Colors.border,
    backgroundColor: Colors.surfaceAlt,
  },
  zoneBtnActive: {
    backgroundColor: Colors.primary,
    borderColor: Colors.primary,
  },
  zoneText: {
    ...Typography.caption,
    fontWeight: '700',
    color: Colors.textSecondary,
  },
  zoneTextActive: {
    color: Colors.textWhite,
  },
  lineItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: Spacing.sm,
  },
  lineLabel: {
    ...Typography.body,
    color: Colors.textSecondary,
  },
  lineValue: {
    ...Typography.bodyMedium,
    color: Colors.textPrimary,
    fontWeight: '600',
  },
  divider: {
    height: 1,
    backgroundColor: Colors.border,
    marginVertical: Spacing.sm,
  },
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: Spacing.lg,
  },
  totalLabel: {
    ...Typography.heading2,
    color: Colors.textPrimary,
  },
  taxInclusive: {
    ...Typography.caption,
    color: Colors.textMuted,
  },
  totalValue: {
    ...Typography.heading1,
    color: Colors.primary,
    fontWeight: '800',
  },
  checkoutBtn: {
    width: '100%',
  },
});
