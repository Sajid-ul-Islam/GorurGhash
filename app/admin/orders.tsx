import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, ScrollView, StyleSheet, Alert } from 'react-native';
import FullScreenContainer from '../../src/components/FullScreenContainer';
import { useRouter } from 'expo-router';
import { Header } from '../../src/components/common/Header';
import { AdminOrderRow } from '../../src/components/admin/AdminOrderRow';
import { EmptyState } from '../../src/components/common/EmptyState';
import { useAuth } from '../../src/context/AuthContext';
import { useOrders } from '../../src/context/OrderContext';
import { OrderStatus } from '../../src/types';
import { Colors, BorderRadius, Spacing, Typography } from '../../src/constants/theme';

export default function AdminOrdersScreen() {
  const router = useRouter();
  const { isAdmin } = useAuth();
  const { orders, updateOrderStatus } = useOrders();

  const [selectedStatus, setSelectedStatus] = useState<string>('all');

  if (!isAdmin) {
    return (
      <FullScreenContainer style={styles.safeArea}>
        <Header showBack title="Access Denied" />
        <View style={styles.centerContainer}>
          <Text style={styles.errorText}>Admin privileges required.</Text>
        </View>
      </FullScreenContainer>
    );
  }

  const handleUpdateStatus = async (orderId: string, newStatus: OrderStatus) => {
    try {
      await updateOrderStatus(orderId, newStatus);
      Alert.alert('Status Updated', `Order marked as ${newStatus.toUpperCase()}`);
    } catch (e: any) {
      Alert.alert('Error', e.message);
    }
  };

  const statuses: { label: string; value: string }[] = [
    { label: `All (${orders.length})`, value: 'all' },
    { label: `Pending (${orders.filter((o) => o.status === 'pending').length})`, value: 'pending' },
    { label: `Confirmed (${orders.filter((o) => o.status === 'confirmed').length})`, value: 'confirmed' },
    { label: `Processing (${orders.filter((o) => o.status === 'processing').length})`, value: 'processing' },
    { label: `Shipped (${orders.filter((o) => o.status === 'shipped').length})`, value: 'shipped' },
    { label: `Delivered (${orders.filter((o) => o.status === 'delivered').length})`, value: 'delivered' },
    { label: `Cancelled (${orders.filter((o) => o.status === 'cancelled').length})`, value: 'cancelled' },
  ];

  const filteredOrders = orders.filter((o) =>
    selectedStatus === 'all' ? true : o.status === selectedStatus
  );

  return (
    <FullScreenContainer style={styles.safeArea}>
      <Header showBack title="Order Processing Queue" subtitle="Fulfillment & dispatch tracking" />

      {/* Filter Tabs */}
      <View style={styles.filtersBar}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.filtersContent}
        >
          {statuses.map((s) => {
            const isActive = selectedStatus === s.value;
            return (
              <TouchableOpacity
                key={s.value}
                style={[styles.filterPill, isActive && styles.filterPillActive]}
                onPress={() => setSelectedStatus(s.value)}
              >
                <Text style={[styles.filterText, isActive && styles.filterTextActive]}>
                  {s.label}
                </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>

      <FlatList
        data={filteredOrders}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        ListEmptyComponent={
          <EmptyState
            icon="receipt-outline"
            title="No Orders Found"
            description={`There are currently no orders in status "${selectedStatus}".`}
          />
        }
        renderItem={({ item }) => (
          <AdminOrderRow
            order={item}
            onUpdateStatus={(newStatus) => handleUpdateStatus(item.id, newStatus)}
            onPress={() => router.push(`/order/${item.id}`)}
          />
        )}
      />
    </FullScreenContainer>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  centerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: Spacing.xl,
  },
  errorText: {
    ...Typography.bodyMedium,
    color: Colors.danger,
  },
  filtersBar: {
    backgroundColor: Colors.surface,
    paddingVertical: Spacing.xs + 2,
    borderBottomWidth: 1,
    borderBottomColor: Colors.borderSubtle,
  },
  filtersContent: {
    paddingHorizontal: Spacing.lg,
    gap: Spacing.xs + 2,
  },
  filterPill: {
    paddingHorizontal: Spacing.md,
    paddingVertical: 6,
    borderRadius: BorderRadius.full,
    borderWidth: 1,
    borderColor: Colors.border,
    backgroundColor: Colors.surfaceAlt,
  },
  filterPillActive: {
    backgroundColor: Colors.primary,
    borderColor: Colors.primary,
  },
  filterText: {
    ...Typography.caption,
    fontWeight: '700',
    color: Colors.textSecondary,
  },
  filterTextActive: {
    color: Colors.textWhite,
  },
  listContent: {
    paddingHorizontal: Spacing.lg,
    paddingTop: Spacing.md,
    paddingBottom: Spacing.xxxl,
  },
});
