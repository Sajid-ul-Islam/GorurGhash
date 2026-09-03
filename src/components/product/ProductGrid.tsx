import React from 'react';
import {
  FlatList,
  View,
  StyleSheet,
  ListRenderItem,
  RefreshControl,
} from 'react-native';
import { Product } from '../../types';
import { ProductCard } from './ProductCard';
import { EmptyState } from '../common/EmptyState';
import { Spacing } from '../../constants/theme';

interface ProductGridProps {
  products: Product[];
  ListHeaderComponent?: React.ReactElement | null;
  refreshing?: boolean;
  onRefresh?: () => void;
  emptyTitle?: string;
  emptyDescription?: string;
  onEmptyAction?: () => void;
}

export const ProductGrid: React.FC<ProductGridProps> = ({
  products,
  ListHeaderComponent,
  refreshing = false,
  onRefresh,
  emptyTitle = 'No Drops Found',
  emptyDescription = 'Try adjusting your filters or search keywords to explore Gorur Ghash catalog.',
  onEmptyAction,
}) => {
  const renderItem: ListRenderItem<Product> = ({ item }) => (
    <ProductCard product={item} />
  );

  return (
    <FlatList
      data={products}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      numColumns={2}
      columnWrapperStyle={styles.columnWrapper}
      contentContainerStyle={styles.contentContainer}
      ListHeaderComponent={ListHeaderComponent}
      ListEmptyComponent={
        <EmptyState
          icon="search-outline"
          title={emptyTitle}
          description={emptyDescription}
          actionTitle={onEmptyAction ? 'Clear Filters' : undefined}
          onAction={onEmptyAction}
        />
      }
      refreshControl={
        onRefresh ? (
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        ) : undefined
      }
      initialNumToRender={8}
      maxToRenderPerBatch={10}
      windowSize={5}
      showsVerticalScrollIndicator={false}
    />
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    paddingHorizontal: Spacing.lg,
    paddingBottom: Spacing.xxl,
  },
  columnWrapper: {
    justifyContent: 'space-between',
  },
});
