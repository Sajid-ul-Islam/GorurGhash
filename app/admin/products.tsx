import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, FlatList, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import FullScreenContainer from '../../src/components/FullScreenContainer';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { Header } from '../../src/components/common/Header';
import { AdminProductRow } from '../../src/components/admin/AdminProductRow';
import { LoadingSpinner } from '../../src/components/common/LoadingSpinner';
import { useAuth } from '../../src/context/AuthContext';
import { productService } from '../../src/services';
import { Product } from '../../src/types';
import { Colors, BorderRadius, Spacing, Typography } from '../../src/constants/theme';

export default function AdminProductsScreen() {
  const router = useRouter();
  const { isAdmin } = useAuth();

  const [products, setProducts] = useState<Product[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStock, setFilterStock] = useState<'all' | 'in_stock' | 'sold_out'>('all');
  const [loading, setLoading] = useState(true);

  const loadProducts = useCallback(async () => {
    try {
      const prods = await productService.getProducts();
      setProducts(prods);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadProducts();
  }, [loadProducts]);

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

  const handleToggleStock = async (product: Product, inStock: boolean) => {
    try {
      const updated = await productService.toggleStockStatus(product.id, inStock);
      setProducts((prev) => prev.map((p) => (p.id === product.id ? updated : p)));
    } catch (e: any) {
      Alert.alert('Error', e.message);
    }
  };

  const handleUpdatePrice = async (product: Product, newPrice: number) => {
    try {
      const updated = await productService.updateProductPrice(product.id, newPrice);
      setProducts((prev) => prev.map((p) => (p.id === product.id ? updated : p)));
      Alert.alert('Price Updated', `${product.name} price updated to ৳${newPrice}`);
    } catch (e: any) {
      Alert.alert('Error', e.message);
    }
  };

  const filteredProducts = products.filter((p) => {
    const matchesSearch =
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.sku.toLowerCase().includes(searchQuery.toLowerCase());

    if (!matchesSearch) return false;

    if (filterStock === 'in_stock') return p.inStock;
    if (filterStock === 'sold_out') return !p.inStock;
    return true;
  });

  return (
    <FullScreenContainer style={styles.safeArea}>
      <Header showBack title="Inventory & Stock" subtitle="Manage 100+ drops" />

      <View style={styles.searchBarContainer}>
        <Ionicons name="search" size={18} color={Colors.textMuted} style={{ marginRight: 6 }} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search products by title or SKU..."
          placeholderTextColor={Colors.textMuted}
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
        {searchQuery ? (
          <TouchableOpacity onPress={() => setSearchQuery('')}>
            <Ionicons name="close-circle" size={18} color={Colors.textMuted} />
          </TouchableOpacity>
        ) : null}
      </View>

      {/* Stock Filter Pills */}
      <View style={styles.filterRow}>
        {(['all', 'in_stock', 'sold_out'] as const).map((filter) => {
          const isActive = filterStock === filter;
          return (
            <TouchableOpacity
              key={filter}
              style={[styles.filterPill, isActive && styles.filterPillActive]}
              onPress={() => setFilterStock(filter)}
            >
              <Text style={[styles.filterPillText, isActive && styles.filterPillTextActive]}>
                {filter === 'all'
                  ? `All (${products.length})`
                  : filter === 'in_stock'
                  ? `In Stock (${products.filter((p) => p.inStock).length})`
                  : `Sold Out (${products.filter((p) => !p.inStock).length})`}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>

      {loading ? (
        <LoadingSpinner message="Loading catalog inventory..." />
      ) : (
        <FlatList
          data={filteredProducts}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.listContent}
          renderItem={({ item }) => (
            <AdminProductRow
              product={item}
              onToggleStock={(inStock) => handleToggleStock(item, inStock)}
              onUpdatePrice={(price) => handleUpdatePrice(item, price)}
              onPress={() => router.push(`/product/${item.id}`)}
            />
          )}
        />
      )}
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
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.surface,
    marginHorizontal: Spacing.lg,
    marginVertical: Spacing.sm,
    paddingHorizontal: Spacing.md,
    height: 42,
    borderRadius: BorderRadius.md,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  searchInput: {
    flex: 1,
    ...Typography.bodyMedium,
    color: Colors.textPrimary,
  },
  filterRow: {
    flexDirection: 'row',
    paddingHorizontal: Spacing.lg,
    marginBottom: Spacing.sm,
    gap: Spacing.xs + 2,
  },
  filterPill: {
    paddingHorizontal: Spacing.md,
    paddingVertical: 4,
    borderRadius: BorderRadius.full,
    borderWidth: 1,
    borderColor: Colors.border,
    backgroundColor: Colors.surfaceAlt,
  },
  filterPillActive: {
    backgroundColor: Colors.primary,
    borderColor: Colors.primary,
  },
  filterPillText: {
    ...Typography.caption,
    fontWeight: '700',
    color: Colors.textSecondary,
  },
  filterPillTextActive: {
    color: Colors.textWhite,
  },
  listContent: {
    paddingHorizontal: Spacing.lg,
    paddingBottom: Spacing.xxl,
  },
});
