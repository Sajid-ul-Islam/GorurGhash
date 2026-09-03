import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Order, OrderStatus } from '../../types';
import { Colors, BorderRadius, Spacing, Typography } from '../../constants/theme';
import { formatPrice, formatDate } from '../../utils/formatters';

interface AdminOrderRowProps {
  order: Order;
  onUpdateStatus: (newStatus: OrderStatus) => void;
  onPress: () => void;
}

export const AdminOrderRow: React.FC<AdminOrderRowProps> = ({
  order,
  onUpdateStatus,
  onPress,
}) => {
  const nextStatuses: Record<OrderStatus, OrderStatus | null> = {
    pending: 'confirmed',
    confirmed: 'processing',
    processing: 'shipped',
    shipped: 'delivered',
    delivered: null,
    cancelled: null,
  };

  const nextStatus = nextStatuses[order.status];

  const getStatusColor = (status: OrderStatus) => {
    switch (status) {
      case 'delivered':
        return Colors.success;
      case 'shipped':
        return Colors.info;
      case 'processing':
      case 'confirmed':
        return Colors.primary;
      case 'pending':
        return Colors.warning;
      case 'cancelled':
        return Colors.danger;
      default:
        return Colors.textSecondary;
    }
  };

  const statusColor = getStatusColor(order.status);

  return (
    <TouchableOpacity
      activeOpacity={0.88}
      onPress={onPress}
      style={styles.card}
    >
      <View style={styles.header}>
        <View>
          <Text style={styles.orderNumber}>{order.orderNumber}</Text>
          <Text style={styles.date}>{formatDate(order.createdAt)} • {order.items.length} items</Text>
        </View>

        <View style={[styles.statusPill, { backgroundColor: `${statusColor}18` }]}>
          <Text style={[styles.statusText, { color: statusColor }]}>
            {order.status.toUpperCase()}
          </Text>
        </View>
      </View>

      <View style={styles.customerRow}>
        <Text style={styles.customerName}>
          👤 {order.shippingAddress.recipientName} ({order.shippingAddress.district})
        </Text>
        <Text style={styles.total}>{formatPrice(order.total)}</Text>
      </View>

      <View style={styles.footerRow}>
        <Text style={styles.paymentInfo}>
          💳 {order.paymentMethod.toUpperCase()} {order.isPaid ? '(Paid)' : '(Unpaid COD)'}
        </Text>

        {nextStatus && (
          <TouchableOpacity
            style={styles.actionBtn}
            onPress={() => onUpdateStatus(nextStatus)}
          >
            <Text style={styles.actionBtnText}>Mark as {nextStatus}</Text>
          </TouchableOpacity>
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.surface,
    borderRadius: BorderRadius.lg,
    padding: Spacing.md,
    borderWidth: 1,
    borderColor: Colors.border,
    marginBottom: Spacing.sm,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: Spacing.xs,
  },
  orderNumber: {
    ...Typography.bodyMedium,
    fontWeight: '800',
    color: Colors.textPrimary,
  },
  date: {
    ...Typography.caption,
    color: Colors.textMuted,
  },
  statusPill: {
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: BorderRadius.xs,
  },
  statusText: {
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 0.5,
  },
  customerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: Spacing.xs,
  },
  customerName: {
    ...Typography.bodyMedium,
    color: Colors.textSecondary,
    flex: 1,
  },
  total: {
    ...Typography.heading3,
    fontWeight: '700',
    color: Colors.textPrimary,
  },
  footerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: Spacing.xs,
    paddingTop: Spacing.xs,
    borderTopWidth: 1,
    borderTopColor: Colors.borderSubtle,
  },
  paymentInfo: {
    ...Typography.caption,
    color: Colors.textMuted,
  },
  actionBtn: {
    backgroundColor: Colors.primarySubtle,
    paddingHorizontal: Spacing.sm,
    paddingVertical: 4,
    borderRadius: BorderRadius.xs,
  },
  actionBtnText: {
    ...Typography.caption,
    fontWeight: '700',
    color: Colors.primaryDark,
  },
});
