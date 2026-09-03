import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Modal, StyleSheet } from 'react-native';
import FullScreenContainer from '../../src/components/FullScreenContainer';
import { useLocalSearchParams } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { Header } from '../../src/components/common/Header';
import { ProductGrid } from '../../src/components/product/ProductGrid';
import { CategoryPill } from '../../src/components/product/CategoryPill';
import { LoadingSpinner } from '../../src/components/common/LoadingSpinner';
import { productService } from '../../src/services';
import { Product, Category, SortOption } from '../../src/types';
import { Colors, BorderRadius, Spacing, Typography } from '../../src/constants/theme';

export default function ShopScreen() {
  const params = useLocalSearchParams<{ category?: string; search?: string }>();

  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  // Filters
  const [searchQuery, setSearchQuery] = useState(params.search || '');
  const [selectedCategory, setSelectedCategory] = useState<string>(params.category || 'all');
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [onSaleOnly, setOnSaleOnly] = useState<boolean>(false);
  const [sortBy, setSortBy] = useState<SortOption>('newest');
  const [isSortModalVisible, setIsSortModalVisible] = useState(false);

  // Sync route params when navigated from home
  useEffect(() => {
    if (params.category) {
      setSelectedCategory(params.category);
    }
    if (params.search) {
      setSearchQuery(params.search);
    }
  }, [params.category, params.search]);

  const loadData = useCallback(async () => {
    try {
      const [cats, prods] = await Promise.all([
        productService.getCategories(),
        productService.getProducts({
          category: selectedCategory,
          searchQuery,
          size: selectedSize || undefined,
          onSaleOnly: onSaleOnly || undefined,
          sortBy,
        }),
      ]);
      setCategories(cats);
      setProducts(prods);
    } catch {
      // Handled
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }, [selectedCategory, searchQuery, selectedSize, onSaleOnly, sortBy]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  const onRefresh = () => {
    setRefreshing(true);
    loadData();
  };

  const clearAllFilters = () => {
    setSearchQuery('');
    setSelectedCategory('all');
    setSelectedSize('');
    setOnSaleOnly(false);
    setSortBy('newest');
  };

  const sizes = ['S', 'M', 'L', 'XL', 'XXL'];

  const sortOptions: { label: string; value: SortOption }[] = [
    { label: 'Newest Arrivals', value: 'newest' },
    { label: 'Price: Low to High', value: 'price_asc' },
    { label: 'Price: High to Low', value: 'price_desc' },
    { label: 'Most Popular / Reviewed', value: 'popular' },
  ];

  return (
    <FullScreenContainer style={styles.safeArea}>
      <Header title="Street Catalog" subtitle="Authentic Dhaka Drops" />

      {/* Search Input Bar */}
      <View style={styles.searchContainer}>
        <View style={styles.searchInputWrapper}>
          <Ionicons name="search" size={18} color={Colors.textMuted} style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search drops, cargo, jackets..."
            placeholderTextColor={Colors.textMuted}
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
          {searchQuery.length > 0 && (
            <TouchableOpacity onPress={() => setSearchQuery('')} style={styles.clearSearchBtn}>
              <Ionicons name="close-circle" size={18} color={Colors.textMuted} />
            </TouchableOpacity>
          )}
        </View>

        {/* Sort Modal Trigger */}
        <TouchableOpacity
          style={[styles.filterActionBtn, sortBy !== 'newest' && styles.filterActionBtnActive]}
          onPress={() => setIsSortModalVisible(true)}
        >
          <Ionicons
            name="swap-vertical"
            size={18}
            color={sortBy !== 'newest' ? Colors.textWhite : Colors.textPrimary}
          />
        </TouchableOpacity>
      </View>

      {/* Category Horizontal Bar */}
      <View style={styles.categoriesBar}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categoriesContent}
        >
          {categories.map((c) => (
            <CategoryPill
              key={c.id}
              category={c}
              isSelected={selectedCategory.toLowerCase() === c.slug.toLowerCase()}
              onPress={() => setSelectedCategory(c.slug)}
            />
          ))}
        </ScrollView>
      </View>

      {/* Sub-filter Chips: Size & Sale */}
      <View style={styles.subFilterBar}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.subFilterContent}
        >
          {/* Sale Filter */}
          <TouchableOpacity
            style={[styles.chip, onSaleOnly && styles.chipActiveSale]}
            onPress={() => setOnSaleOnly(!onSaleOnly)}
          >
            <Ionicons
              name="pricetag"
              size={12}
              color={onSaleOnly ? Colors.textWhite : Colors.brandRed}
              style={{ marginRight: 4 }}
            />
            <Text style={[styles.chipText, onSaleOnly && styles.chipTextActive]}>
              Sale Only
            </Text>
          </TouchableOpacity>

          {/* Sizes */}
          {sizes.map((s) => {
            const isSizeActive = selectedSize === s;
            return (
              <TouchableOpacity
                key={s}
                style={[styles.chip, isSizeActive && styles.chipActive]}
                onPress={() => setSelectedSize(isSizeActive ? '' : s)}
              >
                <Text style={[styles.chipText, isSizeActive && styles.chipTextActive]}>
                  Size {s}
                </Text>
              </TouchableOpacity>
            );
          })}

          {(selectedCategory !== 'all' || selectedSize || onSaleOnly || searchQuery) && (
            <TouchableOpacity style={styles.resetBtn} onPress={clearAllFilters}>
              <Text style={styles.resetBtnText}>Reset All</Text>
            </TouchableOpacity>
          )}
        </ScrollView>
      </View>

      {/* Result Count Banner */}
      <View style={styles.resultCountBar}>
        <Text style={styles.resultCountText}>
          Showing <Text style={{ fontWeight: '800', color: Colors.textPrimary }}>{products.length}</Text> drops
          {selectedCategory !== 'all' ? ` in "${selectedCategory}"` : ''}
        </Text>
        <Text style={styles.sortLabel}>
          Sort: {sortOptions.find((s) => s.value === sortBy)?.label}
        </Text>
      </View>

      {/* Catalog Grid */}
      {loading && !refreshing ? (
        <LoadingSpinner message="Filtering drops..." />
      ) : (
        <ProductGrid
          products={products}
          refreshing={refreshing}
          onRefresh={onRefresh}
          emptyTitle="No Drops Found"
          emptyDescription="We couldn't find any products matching your current filters. Tap below to reset."
          onEmptyAction={clearAllFilters}
        />
      )}

      {/* Sort Bottom Modal */}
      <Modal
        visible={isSortModalVisible}
        transparent
        animationType="fade"
        onRequestClose={() => setIsSortModalVisible(false)}
      >
        <TouchableOpacity
          style={styles.modalOverlay}
          activeOpacity={1}
          onPress={() => setIsSortModalVisible(false)}
        >
          <View style={styles.sortSheet}>
            <View style={styles.sheetHandle} />
            <Text style={styles.sortSheetTitle}>Sort Products By</Text>

            {sortOptions.map((opt) => {
              const isSelected = sortBy === opt.value;
              return (
                <TouchableOpacity
                  key={opt.value}
                  style={[styles.sortOptionRow, isSelected && styles.sortOptionRowSelected]}
                  onPress={() => {
                    setSortBy(opt.value);
                    setIsSortModalVisible(false);
                  }}
                >
                  <Text style={[styles.sortOptionText, isSelected && styles.sortOptionTextSelected]}>
                    {opt.label}
                  </Text>
                  {isSelected && (
                    <Ionicons name="checkmark-circle" size={20} color={Colors.primary} />
                  )}
                </TouchableOpacity>
              );
            })}
          </View>
        </TouchableOpacity>
      </Modal>
    </FullScreenContainer>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.sm,
    backgroundColor: Colors.surface,
    borderBottomWidth: 1,
    borderBottomColor: Colors.borderSubtle,
  },
  searchInputWrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.surfaceAlt,
    borderRadius: BorderRadius.md,
    paddingHorizontal: Spacing.md,
    height: 42,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  searchIcon: {
    marginRight: Spacing.xs + 2,
  },
  searchInput: {
    flex: 1,
    ...Typography.bodyMedium,
    color: Colors.textPrimary,
  },
  clearSearchBtn: {
    padding: 4,
  },
  filterActionBtn: {
    width: 42,
    height: 42,
    borderRadius: BorderRadius.md,
    borderWidth: 1,
    borderColor: Colors.border,
    backgroundColor: Colors.surfaceAlt,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: Spacing.sm,
  },
  filterActionBtnActive: {
    backgroundColor: Colors.primary,
    borderColor: Colors.primary,
  },
  categoriesBar: {
    backgroundColor: Colors.surface,
    paddingVertical: Spacing.xs + 2,
    borderBottomWidth: 1,
    borderBottomColor: Colors.borderSubtle,
  },
  categoriesContent: {
    paddingHorizontal: Spacing.lg,
  },
  subFilterBar: {
    backgroundColor: Colors.surface,
    paddingVertical: Spacing.xs,
    borderBottomWidth: 1,
    borderBottomColor: Colors.borderSubtle,
  },
  subFilterContent: {
    paddingHorizontal: Spacing.lg,
    alignItems: 'center',
  },
  chip: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: Spacing.sm + 2,
    paddingVertical: 4,
    borderRadius: BorderRadius.sm,
    borderWidth: 1,
    borderColor: Colors.border,
    backgroundColor: Colors.surfaceAlt,
    marginRight: Spacing.xs + 2,
  },
  chipActive: {
    backgroundColor: Colors.primary,
    borderColor: Colors.primary,
  },
  chipActiveSale: {
    backgroundColor: Colors.brandRed,
    borderColor: Colors.brandRed,
  },
  chipText: {
    ...Typography.caption,
    fontWeight: '700',
    color: Colors.textSecondary,
  },
  chipTextActive: {
    color: Colors.textWhite,
  },
  resetBtn: {
    paddingHorizontal: Spacing.sm,
    paddingVertical: 4,
  },
  resetBtnText: {
    ...Typography.caption,
    color: Colors.danger,
    fontWeight: '700',
  },
  resultCountBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.xs + 2,
  },
  resultCountText: {
    ...Typography.caption,
    color: Colors.textSecondary,
  },
  sortLabel: {
    ...Typography.caption,
    color: Colors.textMuted,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'flex-end',
  },
  sortSheet: {
    backgroundColor: Colors.surface,
    borderTopLeftRadius: BorderRadius.xl,
    borderTopRightRadius: BorderRadius.xl,
    padding: Spacing.lg,
    paddingBottom: Spacing.xxxl,
  },
  sheetHandle: {
    width: 36,
    height: 4,
    backgroundColor: Colors.borderDark,
    borderRadius: 2,
    alignSelf: 'center',
    marginBottom: Spacing.md,
  },
  sortSheetTitle: {
    ...Typography.heading2,
    color: Colors.textPrimary,
    marginBottom: Spacing.md,
  },
  sortOptionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: Spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: Colors.borderSubtle,
  },
  sortOptionRowSelected: {
    backgroundColor: Colors.primarySubtle,
    paddingHorizontal: Spacing.sm,
    borderRadius: BorderRadius.sm,
  },
  sortOptionText: {
    ...Typography.bodyMedium,
    color: Colors.textPrimary,
    fontWeight: '600',
  },
  sortOptionTextSelected: {
    color: Colors.primaryDark,
    fontWeight: '800',
  },
});
