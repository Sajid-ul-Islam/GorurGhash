import React, { useEffect, useState, useRef } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Alert, Animated } from 'react-native';
import FullScreenContainer from '../../src/components/FullScreenContainer';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { Header } from '../../src/components/common/Header';
import { ImageGallery } from '../../src/components/product/ImageGallery';
import { SizeSelector } from '../../src/components/product/SizeSelector';
import { SizeGuideModal } from '../../src/components/product/SizeGuideModal';
import { ProductCard } from '../../src/components/product/ProductCard';
import { Button } from '../../src/components/common/Button';
import { LoadingSpinner } from '../../src/components/common/LoadingSpinner';
import { productService } from '../../src/services';
import { Product } from '../../src/types';
import { useCart } from '../../src/context/CartContext';
import { useWishlist } from '../../src/context/WishlistContext';
import { Colors, BorderRadius, Spacing, Typography, Shadows } from '../../src/constants/theme';
import { formatPrice } from '../../src/utils/formatters';

export default function ProductDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  const { addToCart } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();

  const [product, setProduct] = useState<Product | null>(null);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [isSizeGuideOpen, setIsSizeGuideOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [addedToast, setAddedToast] = useState<boolean>(false);
  const toastAnim = useRef(new Animated.Value(0)).current;
  const heartScale = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    const fetchDetails = async () => {
      if (!id) return;
      setLoading(true);
      try {
        const p = await productService.getProductById(id);
        setProduct(p);
        if (p && p.sizes.length > 0) {
          setSelectedSize(p.sizes[0]);
        }
        if (p) {
          const rel = await productService.getRelatedProducts(p.id, p.categories[0]);
          setRelatedProducts(rel);
        }
      } catch {
        // Handled
      } finally {
        setLoading(false);
      }
    };
    fetchDetails();
  }, [id]);

  if (loading || !product) {
    return (
      <FullScreenContainer style={styles.safeArea}>
        <Header showBack title="Product Details" />
        <LoadingSpinner message="Loading drop specifications..." />
      </FullScreenContainer>
    );
  }

  const wishlisted = isInWishlist(product.id);

  const handleToggleWishlist = () => {
    Animated.sequence([
      Animated.timing(heartScale, { toValue: 1.35, duration: 120, useNativeDriver: true }),
      Animated.spring(heartScale, { toValue: 1, friction: 3, tension: 40, useNativeDriver: true }),
    ]).start();
    toggleWishlist(product);
  };

  const handleAddToCart = () => {
    if (!selectedSize && product.sizes.length > 0) {
      Alert.alert('Select Size', 'Please choose your preferred size before adding to bag.');
      return;
    }
    addToCart(product, selectedSize || 'Free Size', 1);
    setAddedToast(true);
    toastAnim.setValue(0);
    Animated.timing(toastAnim, {
      toValue: 1,
      duration: 250,
      useNativeDriver: true,
    }).start();

    setTimeout(() => {
      Animated.timing(toastAnim, {
        toValue: 0,
        duration: 250,
        useNativeDriver: true,
      }).start(() => setAddedToast(false));
    }, 2400);
  };

  const handleBuyNow = () => {
    if (!selectedSize && product.sizes.length > 0) {
      Alert.alert('Select Size', 'Please choose your preferred size before buying.');
      return;
    }
    addToCart(product, selectedSize || 'Free Size', 1);
    router.push('/checkout');
  };

  return (
    <FullScreenContainer style={styles.safeArea}>
      <Header
        showBack
        title={product.name}
        rightAction={
          <TouchableOpacity
            style={styles.wishlistHeaderBtn}
            onPress={handleToggleWishlist}
            accessibilityLabel={wishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
          >
            <Animated.View style={{ transform: [{ scale: heartScale }] }}>
              <Ionicons
                name={wishlisted ? 'heart' : 'heart-outline'}
                size={22}
                color={wishlisted ? Colors.brandRed : Colors.textPrimary}
              />
            </Animated.View>
          </TouchableOpacity>
        }
      />

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        {/* Gallery Carousel */}
        <ImageGallery images={product.images} />

        <View style={styles.contentPadding}>
          {/* Category & SKU Row */}
          <View style={styles.metaRow}>
            <Text style={styles.categoryText}>{product.categories.join(' • ')}</Text>
            <Text style={styles.skuText}>SKU: {product.sku}</Text>
          </View>

          {/* Product Title */}
          <Text style={styles.productTitle}>{product.name}</Text>

          {/* Price & Discount Bar */}
          <View style={styles.priceRow}>
            <Text style={styles.price}>{formatPrice(product.price)}</Text>
            {product.regularPrice && product.regularPrice > product.price ? (
              <>
                <Text style={styles.regularPrice}>{formatPrice(product.regularPrice)}</Text>
                <View style={styles.discountPill}>
                  <Text style={styles.discountText}>
                    SAVE {formatPrice(product.regularPrice - product.price)}
                  </Text>
                </View>
              </>
            ) : null}
          </View>

          {/* Stock Status Indicator */}
          <View style={styles.stockStatusRow}>
            <View
              style={[
                styles.stockDot,
                { backgroundColor: product.inStock ? Colors.success : Colors.danger },
              ]}
            />
            <Text style={styles.stockText}>
              {product.inStock ? 'In Stock — Dispatched within 24h from Dhaka' : 'Sold Out'}
            </Text>
          </View>

          {/* Size Selector */}
          {product.sizes.length > 0 && (
            <SizeSelector
              sizes={product.sizes}
              selectedSize={selectedSize}
              onSelectSize={setSelectedSize}
              onOpenSizeGuide={() => setIsSizeGuideOpen(true)}
            />
          )}

          {/* Description Section */}
          <View style={styles.descriptionSection}>
            <Text style={styles.sectionHeading}>Product Specifications</Text>
            <Text style={styles.descriptionText}>{product.description}</Text>
          </View>

          {/* Delivery & Guarantees Card */}
          <View style={styles.perksCard}>
            <View style={styles.perkItem}>
              <Ionicons name="location-outline" size={20} color={Colors.primary} />
              <View style={styles.perkTextContainer}>
                <Text style={styles.perkTitle}>Delivery Across All 64 Districts</Text>
                <Text style={styles.perkDesc}>Dhaka 1-2 days (৳70) • Outside Dhaka 4-5 days (৳130)</Text>
              </View>
            </View>

            <View style={styles.perkDivider} />

            <View style={styles.perkItem}>
              <Ionicons name="shirt-outline" size={20} color={Colors.primary} />
              <View style={styles.perkTextContainer}>
                <Text style={styles.perkTitle}>Trial on Spot & 48-Hour Exchange</Text>
                <Text style={styles.perkDesc}>
                  Try it when rider arrives. Sizing issues exchanged hassle-free within 48 hours.
                </Text>
              </View>
            </View>

            <View style={styles.perkDivider} />

            <View style={styles.perkItem}>
              <Ionicons name="shield-checkmark-outline" size={20} color={Colors.primary} />
              <View style={styles.perkTextContainer}>
                <Text style={styles.perkTitle}>100% Authentic Gorur Ghash</Text>
                <Text style={styles.perkDesc}>Proudly designed and manufactured in Dhaka, Bangladesh.</Text>
              </View>
            </View>
          </View>

          {/* Related Drops */}
          {relatedProducts.length > 0 && (
            <View style={styles.relatedSection}>
              <Text style={styles.sectionHeading}>Complete the Fit</Text>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {relatedProducts.map((rel) => (
                  <View key={rel.id} style={{ marginRight: Spacing.md }}>
                    <ProductCard product={rel} cardWidth={150} />
                  </View>
                ))}
              </ScrollView>
            </View>
          )}
        </View>

        <View style={{ height: 90 }} />
      </ScrollView>

      {/* Added Toast Notification */}
      {addedToast && (
        <Animated.View
          style={[
            styles.toastBanner,
            {
              opacity: toastAnim,
              transform: [
                {
                  translateY: toastAnim.interpolate({
                    inputRange: [0, 1],
                    outputRange: [-20, 0],
                  }),
                },
              ],
            },
          ]}
        >
          <Ionicons name="checkmark-circle" size={20} color={Colors.textWhite} />
          <Text style={styles.toastText}>Added to your shopping bag!</Text>
          <TouchableOpacity onPress={() => router.push('/(tabs)/cart')}>
            <Text style={styles.toastLink}>View Bag</Text>
          </TouchableOpacity>
        </Animated.View>
      )}

      {/* Sticky Bottom Actions */}
      <View style={styles.stickyFooter}>
        <Button
          title="Add to Bag"
          variant="secondary"
          onPress={handleAddToCart}
          disabled={!product.inStock}
          style={styles.addBtn}
          icon={<Ionicons name="bag-add-outline" size={18} color={Colors.textPrimary} />}
        />
        <Button
          title="Buy Now"
          variant="primary"
          onPress={handleBuyNow}
          disabled={!product.inStock}
          style={styles.buyBtn}
        />
      </View>

      {/* Size Guide Modal */}
      <SizeGuideModal
        visible={isSizeGuideOpen}
        onClose={() => setIsSizeGuideOpen(false)}
        productCategory={product.categories[0]}
      />
    </FullScreenContainer>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  scrollContent: {
    paddingBottom: Spacing.xxl,
  },
  wishlistHeaderBtn: {
    padding: Spacing.xs,
  },
  contentPadding: {
    paddingHorizontal: Spacing.lg,
    paddingTop: Spacing.md,
  },
  metaRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  categoryText: {
    ...Typography.caption,
    color: Colors.primary,
    fontWeight: '700',
    textTransform: 'uppercase',
  },
  skuText: {
    ...Typography.caption,
    color: Colors.textMuted,
  },
  productTitle: {
    ...Typography.heading1,
    color: Colors.textPrimary,
    marginBottom: Spacing.sm,
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: Spacing.sm,
  },
  price: {
    ...Typography.display,
    color: Colors.textPrimary,
    fontWeight: '800',
    fontSize: 24,
  },
  regularPrice: {
    ...Typography.bodyLarge,
    color: Colors.textMuted,
    textDecorationLine: 'line-through',
    marginLeft: Spacing.sm,
  },
  discountPill: {
    backgroundColor: Colors.brandRed,
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: BorderRadius.xs,
    marginLeft: Spacing.sm,
  },
  discountText: {
    color: Colors.textWhite,
    fontSize: 10,
    fontWeight: '800',
  },
  stockStatusRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: Spacing.sm,
  },
  stockDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: 6,
  },
  stockText: {
    ...Typography.caption,
    fontWeight: '600',
    color: Colors.textSecondary,
  },
  descriptionSection: {
    marginVertical: Spacing.md,
  },
  sectionHeading: {
    ...Typography.heading2,
    color: Colors.textPrimary,
    marginBottom: Spacing.xs,
  },
  descriptionText: {
    ...Typography.body,
    color: Colors.textSecondary,
    lineHeight: 22,
  },
  perksCard: {
    backgroundColor: Colors.surface,
    padding: Spacing.md,
    borderRadius: BorderRadius.lg,
    borderWidth: 1,
    borderColor: Colors.border,
    marginVertical: Spacing.md,
  },
  perkItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingVertical: 6,
  },
  perkTextContainer: {
    marginLeft: Spacing.sm,
    flex: 1,
  },
  perkTitle: {
    ...Typography.bodyMedium,
    fontWeight: '700',
    color: Colors.textPrimary,
  },
  perkDesc: {
    ...Typography.caption,
    color: Colors.textSecondary,
    marginTop: 2,
  },
  perkDivider: {
    height: 1,
    backgroundColor: Colors.borderSubtle,
    marginVertical: 6,
  },
  relatedSection: {
    marginVertical: Spacing.lg,
  },
  stickyFooter: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    backgroundColor: Colors.surface,
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.md,
    borderTopWidth: 1,
    borderTopColor: Colors.border,
    ...Shadows.lg,
  },
  addBtn: {
    flex: 1,
    marginRight: Spacing.sm,
  },
  buyBtn: {
    flex: 1,
  },
  toastBanner: {
    position: 'absolute',
    top: 70,
    left: Spacing.lg,
    right: Spacing.lg,
    backgroundColor: '#0F172A',
    borderRadius: BorderRadius.md,
    padding: Spacing.md,
    flexDirection: 'row',
    alignItems: 'center',
    ...Shadows.md,
    zIndex: 99,
  },
  toastText: {
    ...Typography.bodyMedium,
    color: Colors.textWhite,
    fontWeight: '600',
    marginLeft: Spacing.sm,
    flex: 1,
  },
  toastLink: {
    ...Typography.bodyMedium,
    color: Colors.brandYellow,
    fontWeight: '700',
  },
});
