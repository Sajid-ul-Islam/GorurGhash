import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { Product } from '../../types';
import { Colors, BorderRadius, Spacing, Typography, Shadows } from '../../constants/theme';
import { formatPrice } from '../../utils/formatters';
import { useWishlist } from '../../context/WishlistContext';

const { width } = Dimensions.get('window');
const CARD_WIDTH = (width - Spacing.lg * 2 - Spacing.md) / 2;

interface ProductCardProps {
  product: Product;
  cardWidth?: number;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  cardWidth = CARD_WIDTH,
}) => {
  const router = useRouter();
  const { isInWishlist, toggleWishlist } = useWishlist();
  const wishlisted = isInWishlist(product.id);

  const discountPercent =
    product.regularPrice && product.regularPrice > product.price
      ? Math.round(((product.regularPrice - product.price) / product.regularPrice) * 100)
      : null;

  return (
    <TouchableOpacity
      activeOpacity={0.88}
      onPress={() => router.push(`/product/${product.id}`)}
      style={[styles.container, { width: cardWidth }]}
    >
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: product.images[0] }}
          style={styles.image}
          resizeMode="cover"
        />

        {/* Floating Discount / Sale Pill */}
        {discountPercent ? (
          <View style={styles.discountBadge}>
            <Text style={styles.discountText}>-{discountPercent}%</Text>
          </View>
        ) : product.isNew ? (
          <View style={styles.newBadge}>
            <Text style={styles.newText}>NEW</Text>
          </View>
        ) : null}

        {/* Floating Wishlist Heart */}
        <TouchableOpacity
          style={styles.wishlistBtn}
          onPress={() => toggleWishlist(product)}
          activeOpacity={0.8}
          hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
        >
          <Ionicons
            name={wishlisted ? 'heart' : 'heart-outline'}
            size={18}
            color={wishlisted ? Colors.brandRed : Colors.textPrimary}
          />
        </TouchableOpacity>

        {/* Out of Stock overlay */}
        {!product.inStock && (
          <View style={styles.outOfStockOverlay}>
            <Text style={styles.outOfStockText}>SOLD OUT</Text>
          </View>
        )}
      </View>

      <View style={styles.infoContainer}>
        {/* Category tag */}
        <Text style={styles.categoryTag} numberOfLines={1}>
          {product.categories[0] || 'Apparel'}
        </Text>

        {/* Product title */}
        <Text style={styles.title} numberOfLines={2}>
          {product.name}
        </Text>

        {/* Price Row */}
        <View style={styles.priceRow}>
          <Text style={styles.price}>{formatPrice(product.price)}</Text>
          {product.regularPrice && product.regularPrice > product.price ? (
            <Text style={styles.regularPrice}>{formatPrice(product.regularPrice)}</Text>
          ) : null}
        </View>

        {/* Available sizes */}
        <View style={styles.sizesRow}>
          {product.sizes.slice(0, 4).map((s, idx) => (
            <View key={idx} style={styles.sizePill}>
              <Text style={styles.sizeText}>{s}</Text>
            </View>
          ))}
          {product.sizes.length > 4 && (
            <Text style={styles.moreSizesText}>+{product.sizes.length - 4}</Text>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.surface,
    borderRadius: BorderRadius.md,
    borderWidth: 1,
    borderColor: Colors.border,
    marginBottom: Spacing.md,
    overflow: 'hidden',
    ...Shadows.sm,
  },
  imageContainer: {
    width: '100%',
    aspectRatio: 3 / 4,
    backgroundColor: Colors.surfaceAlt,
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  discountBadge: {
    position: 'absolute',
    top: Spacing.xs + 2,
    left: Spacing.xs + 2,
    backgroundColor: Colors.brandRed,
    paddingHorizontal: Spacing.xs + 2,
    paddingVertical: 2,
    borderRadius: BorderRadius.xs,
  },
  discountText: {
    color: Colors.textWhite,
    fontSize: 10,
    fontWeight: '800',
  },
  newBadge: {
    position: 'absolute',
    top: Spacing.xs + 2,
    left: Spacing.xs + 2,
    backgroundColor: Colors.brandYellow,
    paddingHorizontal: Spacing.xs + 2,
    paddingVertical: 2,
    borderRadius: BorderRadius.xs,
  },
  newText: {
    color: Colors.textPrimary,
    fontSize: 10,
    fontWeight: '800',
  },
  wishlistBtn: {
    position: 'absolute',
    top: Spacing.xs + 2,
    right: Spacing.xs + 2,
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: 'rgba(255, 255, 255, 0.92)',
    alignItems: 'center',
    justifyContent: 'center',
    ...Shadows.sm,
  },
  outOfStockOverlay: {
    ...StyleSheet.absoluteFill,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  outOfStockText: {
    color: Colors.textWhite,
    fontSize: 12,
    fontWeight: '900',
    letterSpacing: 1,
  },
  infoContainer: {
    padding: Spacing.sm,
  },
  categoryTag: {
    ...Typography.caption,
    color: Colors.primary,
    fontWeight: '600',
    marginBottom: 2,
    textTransform: 'uppercase',
  },
  title: {
    ...Typography.bodyMedium,
    fontWeight: '600',
    color: Colors.textPrimary,
    minHeight: 36,
    lineHeight: 18,
    marginBottom: Spacing.xs,
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'baseline',
    marginBottom: Spacing.xs,
  },
  price: {
    ...Typography.heading3,
    color: Colors.textPrimary,
    fontWeight: '700',
  },
  regularPrice: {
    ...Typography.caption,
    color: Colors.textMuted,
    textDecorationLine: 'line-through',
    marginLeft: Spacing.xs,
  },
  sizesRow: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginTop: 2,
  },
  sizePill: {
    backgroundColor: Colors.surfaceAlt,
    paddingHorizontal: 4,
    paddingVertical: 1,
    borderRadius: 3,
    marginRight: 4,
    marginBottom: 2,
  },
  sizeText: {
    fontSize: 9,
    fontWeight: '700',
    color: Colors.textSecondary,
  },
  moreSizesText: {
    fontSize: 9,
    color: Colors.textMuted,
  },
});
