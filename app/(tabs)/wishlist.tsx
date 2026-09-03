import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import FullScreenContainer from '../../src/components/FullScreenContainer';
import { useRouter } from 'expo-router';
import { Header } from '../../src/components/common/Header';
import { ProductGrid } from '../../src/components/product/ProductGrid';
import { useWishlist } from '../../src/context/WishlistContext';
import { Colors, Spacing, Typography } from '../../src/constants/theme';

export default function WishlistScreen() {
  const router = useRouter();
  const { wishlistProducts, clearWishlist, count } = useWishlist();

  return (
    <FullScreenContainer style={styles.safeArea}>
      <Header
        title={`Wishlist (${count})`}
        subtitle="Your saved street favorites"
        showWishlist={false}
        rightAction={
          count > 0 ? (
            <TouchableOpacity onPress={clearWishlist} style={styles.clearBtn}>
              <Text style={styles.clearBtnText}>Clear</Text>
            </TouchableOpacity>
          ) : null
        }
      />

      <ProductGrid
        products={wishlistProducts}
        emptyTitle="Your Wishlist is Empty"
        emptyDescription="You haven't saved any Gorur Ghash drops yet. Tap the heart icon on any drop to save it here."
        onEmptyAction={() => router.push('/(tabs)/shop')}
      />
    </FullScreenContainer>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  clearBtn: {
    paddingHorizontal: Spacing.sm,
    paddingVertical: Spacing.xs,
  },
  clearBtnText: {
    ...Typography.caption,
    color: Colors.danger,
    fontWeight: '700',
  },
});
