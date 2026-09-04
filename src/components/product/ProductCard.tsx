import React, { useRef, useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Animated,
} from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { Product } from '../../types';
import { Colors, BorderRadius, Spacing, Typography, Shadows } from '../../constants/theme';
import { formatPrice } from '../../utils/formatters';
import { useWishlist } from '../../context/WishlistContext';
import { useCart } from '../../context/CartContext';

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
  const { addToCart } = useCart();
  const wishlisted = isInWishlist(product.id);

  const heartScale = useRef(new Animated.Value(1)).current;
  const bagScale = useRef(new Animated.Value(1)).current;
  const [justAdded, setJustAdded] = useState(false);

  const handleToggleWishlist = () => {
    Animated.sequence([
      Animated.timing(heartScale, { toValue: 1.35, duration: 120, useNativeDriver: true }),
      Animated.spring(heartScale, { toValue: 1, friction: 3, tension: 40, useNativeDriver: true }),
    ]).start();
    toggleWishlist(product);
  };

  const handleQuickAdd = () => {
    if (!product.inStock) return;
    Animated.sequence([
      Animated.timing(bagScale, { toValue: 0.8, duration: 100, useNativeDriver: true }),
      Animated.spring(bagScale, { toValue: 1, friction: 3, tension: 40, useNativeDriver: true }),
    ]).start();

    const chosenSize = product.sizes.length > 0 ? product.sizes[0] : 'Free Size';
    addToCart(product, chosenSize, 1);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1800);
  };

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

        {/* Floating Wishlist Heart with Bounce Animation */}
        <TouchableOpacity
          style={styles.wishlistBtn}
          onPress={handleToggleWishlist}
          activeOpacity={0.8}
          hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
          accessibilityLabel={wishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
        >
          <Animated.View style={{ transform: [{ scale: heartScale }] }}>
            <Ionicons
              name={wishlisted ? 'heart' : 'heart-outline'}
              size={18}
              color={wishlisted ? Colors.brandRed : Colors.textPrimary}
            />
          </Animated.View>
        </TouchableOpacity>

        {/* Quick Add To Bag Button */}
        {product.inStock && (
          <TouchableOpacity
            style={[styles.quickAddBtn, justAdded && styles.quickAddBtnSuccess]}
            onPress={handleQuickAdd}
            activeOpacity={0.8}
            hitSlop={{ top: 6, bottom: 6, left: 6, right: 6 }}
            accessibilityLabel="Quick add to bag"
          >
            <Animated.View style={{ transform: [{ scale: bagScale }] }}>
              <Ionicons
                name={justAdded ? 'checkmark' : 'bag-add-outline'}
                size={16}
                color={justAdded ? Colors.textWhite : Colors.textPrimary}
              />
            </Animated.View>
          </TouchableOpacity>
        )}

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
  quickAddBtn: {
    position: 'absolute',
    bottom: Spacing.xs + 2,
    right: Spacing.xs + 2,
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: Colors.brandYellow,
    alignItems: 'center',
    justifyContent: 'center',
    ...Shadows.md,
  },
  quickAddBtnSuccess: {
    backgroundColor: Colors.success,
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
