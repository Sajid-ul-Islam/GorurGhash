import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import FullScreenContainer from '../../src/components/FullScreenContainer';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { Header } from '../../src/components/common/Header';
import { Button } from '../../src/components/common/Button';
import { LoadingSpinner } from '../../src/components/common/LoadingSpinner';
import { useOrders } from '../../src/context/OrderContext';
import { Order } from '../../src/types';
import { Colors, BorderRadius, Spacing, Typography, Shadows } from '../../src/constants/theme';
import { formatPrice, formatDate } from '../../src/utils/formatters';

export default function OrderSuccessScreen() {
  const { orderId } = useLocalSearchParams<{ orderId: string }>();
  const router = useRouter();
  const { getOrderById } = useOrders();
  const [order, setOrder] = useState<Order | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrder = async () => {
      if (!orderId) return;
      try {
        const o = await getOrderById(orderId);
        setOrder(o);
      } finally {
        setLoading(false);
      }
    };
    fetchOrder();
  }, [orderId, getOrderById]);

  if (loading || !order) {
    return (
      <FullScreenContainer style={styles.safeArea}>
        <Header title="Order Confirmed" />
        <LoadingSpinner message="Generating invoice receipt..." />
      </FullScreenContainer>
    );
  }

  return (
    <FullScreenContainer style={styles.safeArea}>
      <Header title="Order Confirmed" showBack={false} />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Celebration Header */}
        <View style={styles.celebrationCard}>
          <View style={styles.iconCircle}>
            <Ionicons name="checkmark" size={40} color={Colors.textWhite} />
          </View>
          <Text style={styles.heading}>Order Placed Successfully!</Text>
          <Text style={styles.subheading}>
            Thank you for shopping with Gorur Ghash. Your order is registered in our Dhaka hub.
          </Text>

          <View style={styles.orderNumberBadge}>
            <Text style={styles.orderNumberLabel}>ORDER NUMBER</Text>
            <Text style={styles.orderNumberValue}>{order.orderNumber}</Text>
          </View>
        </View>

        {/* Delivery Timeline Notice */}
        <View style={styles.deliveryNoticeCard}>
          <Ionicons name="bicycle" size={24} color={Colors.primary} />
          <View style={styles.deliveryNoticeText}>
            <Text style={styles.deliveryNoticeTitle}>Estimated Delivery</Text>
            <Text style={styles.deliveryNoticeDesc}>
              {order.shippingAddress.district.includes('Dhaka')
                ? '1 to 2 business days (Inside Dhaka)'
                : '3 to 5 business days (Outside Dhaka)'}
            </Text>
          </View>
        </View>

        {/* Invoice Summary Card */}
        <View style={styles.summaryCard}>
          <Text style={styles.summaryTitle}>Delivery & Invoice Details</Text>

          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Recipient</Text>
            <Text style={styles.infoValue}>{order.shippingAddress.recipientName}</Text>
          </View>

          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Phone Number</Text>
            <Text style={styles.infoValue}>{order.shippingAddress.phone}</Text>
          </View>

          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Destination</Text>
            <Text style={styles.infoValue} numberOfLines={2}>
              {order.shippingAddress.streetAddress}, {order.shippingAddress.district}
            </Text>
          </View>

          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Payment</Text>
            <Text style={styles.infoValue}>
              {order.paymentMethod.toUpperCase()} ({order.isPaid ? 'Paid' : 'Pay upon Delivery'})
            </Text>
          </View>

          <View style={styles.divider} />

          {/* Items Preview */}
          <Text style={styles.itemsLabel}>Items Ordered ({order.items.length}):</Text>
          {order.items.map((i) => (
            <View key={i.id} style={styles.itemRow}>
              <Text style={styles.itemName} numberOfLines={1}>
                {i.product.name} ({i.selectedSize}) × {i.quantity}
              </Text>
              <Text style={styles.itemPrice}>{formatPrice(i.unitPrice * i.quantity)}</Text>
            </View>
          ))}

          <View style={styles.divider} />

          <View style={styles.totalRow}>
            <Text style={styles.totalLabel}>Grand Total</Text>
            <Text style={styles.totalValue}>{formatPrice(order.total)}</Text>
          </View>
        </View>

        {/* Actions */}
        <Button
          title="Track Live Order Status"
          onPress={() => router.push(`/order/${order.id}`)}
          size="lg"
          style={{ marginBottom: Spacing.sm }}
          icon={<Ionicons name="navigate-outline" size={18} color={Colors.textWhite} />}
        />

        <Button
          title="Continue Shopping"
          variant="secondary"
          onPress={() => router.push('/(tabs)')}
          size="md"
        />

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
  celebrationCard: {
    backgroundColor: Colors.surface,
    padding: Spacing.xl,
    borderRadius: BorderRadius.xl,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.border,
    ...Shadows.sm,
    marginBottom: Spacing.md,
  },
  iconCircle: {
    width: 68,
    height: 68,
    borderRadius: 34,
    backgroundColor: Colors.success,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: Spacing.md,
  },
  heading: {
    ...Typography.heading1,
    color: Colors.textPrimary,
    textAlign: 'center',
    marginBottom: Spacing.xs,
  },
  subheading: {
    ...Typography.body,
    color: Colors.textSecondary,
    textAlign: 'center',
    lineHeight: 18,
    marginBottom: Spacing.lg,
  },
  orderNumberBadge: {
    backgroundColor: Colors.primarySubtle,
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.sm,
    borderRadius: BorderRadius.md,
    alignItems: 'center',
    width: '100%',
  },
  orderNumberLabel: {
    fontSize: 9,
    fontWeight: '800',
    color: Colors.primaryDark,
    letterSpacing: 1,
  },
  orderNumberValue: {
    ...Typography.heading2,
    color: Colors.primary,
    fontWeight: '900',
    marginTop: 2,
  },
  deliveryNoticeCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.surface,
    padding: Spacing.md,
    borderRadius: BorderRadius.lg,
    borderWidth: 1,
    borderColor: Colors.border,
    marginBottom: Spacing.md,
  },
  deliveryNoticeText: {
    marginLeft: Spacing.md,
    flex: 1,
  },
  deliveryNoticeTitle: {
    ...Typography.bodyMedium,
    fontWeight: '700',
    color: Colors.textPrimary,
  },
  deliveryNoticeDesc: {
    ...Typography.caption,
    color: Colors.textSecondary,
    marginTop: 2,
  },
  summaryCard: {
    backgroundColor: Colors.surface,
    padding: Spacing.md,
    borderRadius: BorderRadius.lg,
    borderWidth: 1,
    borderColor: Colors.border,
    marginBottom: Spacing.lg,
  },
  summaryTitle: {
    ...Typography.heading3,
    color: Colors.textPrimary,
    marginBottom: Spacing.sm,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 4,
  },
  infoLabel: {
    ...Typography.caption,
    color: Colors.textMuted,
  },
  infoValue: {
    ...Typography.bodyMedium,
    color: Colors.textPrimary,
    fontWeight: '600',
    maxWidth: '65%',
    textAlign: 'right',
  },
  divider: {
    height: 1,
    backgroundColor: Colors.border,
    marginVertical: Spacing.sm,
  },
  itemsLabel: {
    ...Typography.caption,
    fontWeight: '700',
    color: Colors.textSecondary,
    marginBottom: 4,
  },
  itemRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 2,
  },
  itemName: {
    ...Typography.body,
    color: Colors.textSecondary,
    flex: 1,
    marginRight: Spacing.sm,
  },
  itemPrice: {
    ...Typography.bodyMedium,
    color: Colors.textPrimary,
    fontWeight: '600',
  },
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
});
