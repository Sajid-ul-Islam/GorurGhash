import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import FullScreenContainer from '../../src/components/FullScreenContainer';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { Header } from '../../src/components/common/Header';
import { Button } from '../../src/components/common/Button';
import { LoadingSpinner } from '../../src/components/common/LoadingSpinner';
import { useOrders } from '../../src/context/OrderContext';
import { Order, OrderStatus } from '../../src/types';
import { Colors, BorderRadius, Spacing, Typography, Shadows } from '../../src/constants/theme';
import { formatPrice, formatDate, formatTime } from '../../src/utils/formatters';

export default function OrderTrackingScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  const { getOrderById, cancelOrder } = useOrders();
  const [order, setOrder] = useState<Order | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrder = async () => {
      if (!id) return;
      try {
        const o = await getOrderById(id);
        setOrder(o);
      } finally {
        setLoading(false);
      }
    };
    fetchOrder();
  }, [id, getOrderById]);

  if (loading || !order) {
    return (
      <FullScreenContainer style={styles.safeArea}>
        <Header showBack title="Order Tracking" />
        <LoadingSpinner message="Fetching live dispatch status..." />
      </FullScreenContainer>
    );
  }

  const handleCancelOrder = () => {
    Alert.alert(
      'Cancel Order',
      'Are you sure you want to cancel this order?',
      [
        { text: 'Keep Order', style: 'cancel' },
        {
          text: 'Yes, Cancel',
          style: 'destructive',
          onPress: async () => {
            try {
              const updated = await cancelOrder(order.id, 'Cancelled by customer');
              setOrder(updated);
            } catch (e: any) {
              Alert.alert('Error', e.message || 'Could not cancel order.');
            }
          },
        },
      ]
    );
  };

  const getStatusBadgeColor = (status: OrderStatus) => {
    switch (status) {
      case 'delivered':
        return Colors.success;
      case 'shipped':
        return Colors.info;
      case 'processing':
      case 'confirmed':
        return Colors.primary;
      case 'cancelled':
        return Colors.danger;
      default:
        return Colors.warning;
    }
  };

  const badgeColor = getStatusBadgeColor(order.status);

  return (
    <FullScreenContainer style={styles.safeArea}>
      <Header showBack title={`Order #${order.orderNumber}`} subtitle={formatDate(order.createdAt)} />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Status Header Card */}
        <View style={styles.statusCard}>
          <View style={styles.statusCardHeader}>
            <View>
              <Text style={styles.orderNumber}>{order.orderNumber}</Text>
              <Text style={styles.orderDate}>{formatDate(order.createdAt)}</Text>
            </View>
            <View style={[styles.statusBadge, { backgroundColor: `${badgeColor}18` }]}>
              <Text style={[styles.statusBadgeText, { color: badgeColor }]}>
                {order.status.toUpperCase()}
              </Text>
            </View>
          </View>

          <Text style={styles.statusDescription}>
            {order.status === 'delivered'
              ? '✅ Package delivered and received.'
              : order.status === 'shipped'
              ? '🚚 Consignment in transit with courier. Delivery expected soon.'
              : order.status === 'processing'
              ? '📦 Package inspected and boxed at Dhaka fulfillment center.'
              : order.status === 'confirmed'
              ? '👍 Stock confirmed by warehouse team.'
              : order.status === 'cancelled'
              ? '❌ This order was cancelled.'
              : '⏳ Order registered, awaiting confirmation.'}
          </Text>
        </View>

        {/* Timeline Stepper */}
        <View style={styles.sectionCard}>
          <Text style={styles.sectionTitle}>Delivery Progression</Text>

          <View style={styles.timelineContainer}>
            {order.timeline.map((step, idx) => {
              const isLast = idx === order.timeline.length - 1;
              return (
                <View key={step.status} style={styles.timelineStep}>
                  {/* Left Indicator Column */}
                  <View style={styles.indicatorColumn}>
                    <View
                      style={[
                        styles.indicatorDot,
                        step.completed
                          ? styles.indicatorDotCompleted
                          : styles.indicatorDotPending,
                      ]}
                    >
                      <Ionicons
                        name={step.completed ? 'checkmark' : 'ellipse'}
                        size={12}
                        color={step.completed ? Colors.textWhite : Colors.textMuted}
                      />
                    </View>
                    {!isLast && (
                      <View
                        style={[
                          styles.indicatorLine,
                          step.completed
                            ? styles.indicatorLineCompleted
                            : styles.indicatorLinePending,
                        ]}
                      />
                    )}
                  </View>

                  {/* Right Content Column */}
                  <View style={styles.stepContent}>
                    <View style={styles.stepTitleRow}>
                      <Text
                        style={[
                          styles.stepTitle,
                          step.completed ? styles.stepTitleCompleted : styles.stepTitlePending,
                        ]}
                      >
                        {step.title}
                      </Text>
                      {step.completed && step.timestamp !== 'Pending' && (
                        <Text style={styles.stepTime}>
                          {formatTime(step.timestamp) || formatDate(step.timestamp)}
                        </Text>
                      )}
                    </View>
                    <Text style={styles.stepDesc}>{step.description}</Text>
                  </View>
                </View>
              );
            })}
          </View>
        </View>

        {/* Delivery Details */}
        <View style={styles.sectionCard}>
          <Text style={styles.sectionTitle}>Delivery Details</Text>

          <View style={styles.detailRow}>
            <Ionicons name="person-outline" size={18} color={Colors.primary} />
            <Text style={styles.detailText}>{order.shippingAddress.recipientName}</Text>
          </View>

          <View style={styles.detailRow}>
            <Ionicons name="call-outline" size={18} color={Colors.primary} />
            <Text style={styles.detailText}>{order.shippingAddress.phone}</Text>
          </View>

          <View style={styles.detailRow}>
            <Ionicons name="location-outline" size={18} color={Colors.primary} />
            <Text style={styles.detailText}>
              {order.shippingAddress.streetAddress}, {order.shippingAddress.district},{' '}
              {order.shippingAddress.division}
            </Text>
          </View>

          <View style={styles.detailRow}>
            <Ionicons name="wallet-outline" size={18} color={Colors.primary} />
            <Text style={styles.detailText}>
              {order.paymentMethod.toUpperCase()} — {order.isPaid ? 'Paid' : 'Cash on Delivery'}
            </Text>
          </View>
        </View>

        {/* Items In Order */}
        <View style={styles.sectionCard}>
          <Text style={styles.sectionTitle}>Items ({order.items.length})</Text>
          {order.items.map((i) => (
            <View key={i.id} style={styles.itemRow}>
              <View style={styles.itemInfo}>
                <Text style={styles.itemName}>{i.product.name}</Text>
                <Text style={styles.itemMeta}>
                  Size: {i.selectedSize} • Qty: {i.quantity}
                </Text>
              </View>
              <Text style={styles.itemPrice}>{formatPrice(i.unitPrice * i.quantity)}</Text>
            </View>
          ))}

          <View style={styles.divider} />

          <View style={styles.pricingRow}>
            <Text style={styles.pricingLabel}>Subtotal</Text>
            <Text style={styles.pricingValue}>{formatPrice(order.subtotal)}</Text>
          </View>

          {order.discount > 0 && (
            <View style={styles.pricingRow}>
              <Text style={[styles.pricingLabel, { color: Colors.success }]}>Discount</Text>
              <Text style={[styles.pricingValue, { color: Colors.success }]}>
                -{formatPrice(order.discount)}
              </Text>
            </View>
          )}

          <View style={styles.pricingRow}>
            <Text style={styles.pricingLabel}>Delivery Fee</Text>
            <Text style={styles.pricingValue}>{formatPrice(order.deliveryFee)}</Text>
          </View>

          <View style={styles.divider} />

          <View style={styles.totalRow}>
            <Text style={styles.totalLabel}>Total</Text>
            <Text style={styles.totalValue}>{formatPrice(order.total)}</Text>
          </View>
        </View>

        {/* Actions */}
        {order.status === 'pending' && (
          <Button
            title="Cancel Order"
            variant="danger"
            onPress={handleCancelOrder}
            style={{ marginBottom: Spacing.md }}
          />
        )}

        <Button
          title="Need Help? Contact Support"
          variant="outline"
          onPress={() => router.push('/support/faq')}
          icon={<Ionicons name="chatbubble-ellipses-outline" size={18} color={Colors.primary} />}
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
  statusCard: {
    backgroundColor: Colors.surface,
    padding: Spacing.md,
    borderRadius: BorderRadius.lg,
    borderWidth: 1,
    borderColor: Colors.border,
    marginBottom: Spacing.md,
    ...Shadows.sm,
  },
  statusCardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: Spacing.xs,
  },
  orderNumber: {
    ...Typography.heading2,
    fontWeight: '800',
    color: Colors.textPrimary,
  },
  orderDate: {
    ...Typography.caption,
    color: Colors.textMuted,
  },
  statusBadge: {
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: BorderRadius.xs,
  },
  statusBadgeText: {
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 0.5,
  },
  statusDescription: {
    ...Typography.bodyMedium,
    color: Colors.textSecondary,
    marginTop: 4,
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
  sectionTitle: {
    ...Typography.heading3,
    color: Colors.textPrimary,
    marginBottom: Spacing.md,
  },
  timelineContainer: {
    paddingLeft: Spacing.xs,
  },
  timelineStep: {
    flexDirection: 'row',
  },
  indicatorColumn: {
    alignItems: 'center',
    marginRight: Spacing.md,
  },
  indicatorDot: {
    width: 22,
    height: 22,
    borderRadius: 11,
    alignItems: 'center',
    justifyContent: 'center',
  },
  indicatorDotCompleted: {
    backgroundColor: Colors.primary,
  },
  indicatorDotPending: {
    backgroundColor: Colors.surfaceAlt,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  indicatorLine: {
    width: 2,
    height: 38,
  },
  indicatorLineCompleted: {
    backgroundColor: Colors.primary,
  },
  indicatorLinePending: {
    backgroundColor: Colors.border,
  },
  stepContent: {
    flex: 1,
    paddingBottom: Spacing.md,
  },
  stepTitleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  stepTitle: {
    ...Typography.bodyMedium,
  },
  stepTitleCompleted: {
    fontWeight: '700',
    color: Colors.textPrimary,
  },
  stepTitlePending: {
    color: Colors.textMuted,
  },
  stepTime: {
    ...Typography.caption,
    color: Colors.textMuted,
  },
  stepDesc: {
    ...Typography.caption,
    color: Colors.textSecondary,
    marginTop: 2,
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: Spacing.xs + 2,
  },
  detailText: {
    ...Typography.body,
    color: Colors.textPrimary,
    marginLeft: Spacing.sm,
    flex: 1,
  },
  itemRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 4,
  },
  itemInfo: {
    flex: 1,
    marginRight: Spacing.sm,
  },
  itemName: {
    ...Typography.bodyMedium,
    color: Colors.textPrimary,
    fontWeight: '600',
  },
  itemMeta: {
    ...Typography.caption,
    color: Colors.textMuted,
  },
  itemPrice: {
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
    marginBottom: 4,
  },
  pricingLabel: {
    ...Typography.caption,
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
    marginTop: 4,
  },
  totalLabel: {
    ...Typography.heading2,
    color: Colors.textPrimary,
  },
  totalValue: {
    ...Typography.heading2,
    color: Colors.primary,
    fontWeight: '800',
  },
});
