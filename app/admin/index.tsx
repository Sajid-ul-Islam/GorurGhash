import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, RefreshControl } from 'react-native';
import FullScreenContainer from '../../src/components/FullScreenContainer';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { Header } from '../../src/components/common/Header';
import { StatCard } from '../../src/components/admin/StatCard';
import { AdminOrderRow } from '../../src/components/admin/AdminOrderRow';
import { Button } from '../../src/components/common/Button';
import { useAuth } from '../../src/context/AuthContext';
import { useOrders } from '../../src/context/OrderContext';
import { productService } from '../../src/services';
import { OrderStatus, Product } from '../../src/types';
import { Colors, BorderRadius, Spacing, Typography } from '../../src/constants/theme';
import { formatPrice } from '../../src/utils/formatters';

export default function AdminDashboardScreen() {
  const router = useRouter();
  const { isAdmin } = useAuth();
  const { orders, updateOrderStatus, refreshOrders } = useOrders();
  const [products, setProducts] = useState<Product[]>([]);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    productService.getProducts().then(setProducts);
  }, []);

  const onRefresh = async () => {
    setRefreshing(true);
    await Promise.all([refreshOrders(), productService.getProducts().then(setProducts)]);
    setRefreshing(false);
  };

  if (!isAdmin) {
    return (
      <FullScreenContainer style={styles.safeArea}>
        <Header showBack title="Access Denied" />
        <View style={styles.unauthorizedContainer}>
          <Ionicons name="lock-closed" size={64} color={Colors.brandRed} />
          <Text style={styles.unauthorizedTitle}>Administrator Access Required</Text>
          <Text style={styles.unauthorizedDesc}>
            This portal is strictly restricted to authorized Gorur Ghash store administrators.
            Please switch to Admin mode from your Profile page to view this dashboard.
          </Text>
          <Button
            title="Return to Profile"
            onPress={() => router.replace('/(tabs)/profile')}
            style={{ minWidth: 180, marginTop: Spacing.md }}
          />
        </View>
      </FullScreenContainer>
    );
  }

  // Calculate metrics
  const totalRevenue = orders.reduce((sum, o) => sum + o.total, 0);
  const pendingOrders = orders.filter((o) => o.status === 'pending' || o.status === 'confirmed').length;
  const inStockCount = products.filter((p) => p.inStock).length;

  return (
    <FullScreenContainer style={styles.safeArea}>
      <Header
        showBack
        title="Admin Control Center"
        subtitle="Store Management & Operations"
        showCart={false}
        showWishlist={false}
      />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
      >
        {/* Metric Cards Grid */}
        <View style={styles.kpiGrid}>
          <StatCard
            title="Total Revenue"
            value={formatPrice(totalRevenue)}
            subtitle="All recorded sales"
            icon="cash-outline"
            color={Colors.primary}
          />
          <StatCard
            title="Active Orders"
            value={pendingOrders.toString()}
            subtitle="Needs fulfillment"
            icon="cube-outline"
            color={Colors.warning}
          />
        </View>

        <View style={styles.kpiGrid}>
          <StatCard
            title="Catalog Items"
            value={products.length.toString()}
            subtitle={`${inStockCount} active in stock`}
            icon="shirt-outline"
            color={Colors.info}
          />
          <StatCard
            title="Conversion Rate"
            value="3.8%"
            subtitle="+0.4% from last week"
            icon="trending-up-outline"
            color={Colors.success}
          />
        </View>

        {/* Quick Management Actions */}
        <Text style={styles.sectionTitle}>Operations Shortcuts</Text>
        <View style={styles.shortcutRow}>
          <TouchableOpacity
            style={styles.shortcutBtn}
            onPress={() => router.push('/admin/orders')}
          >
            <View style={[styles.shortcutIconBox, { backgroundColor: Colors.primarySubtle }]}>
              <Ionicons name="receipt-outline" size={24} color={Colors.primary} />
            </View>
            <Text style={styles.shortcutLabel}>Orders Queue</Text>
            <Text style={styles.shortcutSub}>{orders.length} total orders</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.shortcutBtn}
            onPress={() => router.push('/admin/products')}
          >
            <View style={[styles.shortcutIconBox, { backgroundColor: '#FEF3C7' }]}>
              <Ionicons name="pricetags-outline" size={24} color="#D97706" />
            </View>
            <Text style={styles.shortcutLabel}>Inventory Stock</Text>
            <Text style={styles.shortcutSub}>{products.length} drops active</Text>
          </TouchableOpacity>
        </View>

        {/* Live Orders Processing Queue */}
        <View style={styles.queueHeader}>
          <Text style={styles.sectionTitle}>Recent Orders ({orders.length})</Text>
          <TouchableOpacity onPress={() => router.push('/admin/orders')}>
            <Text style={styles.viewAllText}>Manage All</Text>
          </TouchableOpacity>
        </View>

        {orders.slice(0, 5).map((order) => (
          <AdminOrderRow
            key={order.id}
            order={order}
            onUpdateStatus={(newStatus: OrderStatus) => updateOrderStatus(order.id, newStatus)}
            onPress={() => router.push(`/order/${order.id}`)}
          />
        ))}

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
  unauthorizedContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: Spacing.xxl,
  },
  unauthorizedTitle: {
    ...Typography.heading1,
    color: Colors.textPrimary,
    marginTop: Spacing.md,
    textAlign: 'center',
  },
  unauthorizedDesc: {
    ...Typography.body,
    color: Colors.textSecondary,
    textAlign: 'center',
    marginVertical: Spacing.md,
    lineHeight: 20,
  },
  kpiGrid: {
    flexDirection: 'row',
    gap: Spacing.sm,
  },
  sectionTitle: {
    ...Typography.heading2,
    color: Colors.textPrimary,
    marginTop: Spacing.md,
    marginBottom: Spacing.sm,
  },
  shortcutRow: {
    flexDirection: 'row',
    gap: Spacing.sm,
    marginBottom: Spacing.md,
  },
  shortcutBtn: {
    flex: 1,
    backgroundColor: Colors.surface,
    padding: Spacing.md,
    borderRadius: BorderRadius.lg,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  shortcutIconBox: {
    width: 44,
    height: 44,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: Spacing.xs,
  },
  shortcutLabel: {
    ...Typography.bodyMedium,
    fontWeight: '700',
    color: Colors.textPrimary,
  },
  shortcutSub: {
    ...Typography.caption,
    color: Colors.textMuted,
  },
  queueHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  viewAllText: {
    ...Typography.bodyMedium,
    color: Colors.primary,
    fontWeight: '700',
  },
});
