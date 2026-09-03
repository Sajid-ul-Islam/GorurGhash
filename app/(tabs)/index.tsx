import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  RefreshControl,
} from 'react-native';
import FullScreenContainer from '../../src/components/FullScreenContainer';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { Header } from '../../src/components/common/Header';
import { StoriesBar } from '../../src/components/social/StoriesBar';
import { HeroMotionBanner } from '../../src/components/home/HeroMotionBanner';
import { CampaignMarquee } from '../../src/components/home/CampaignMarquee';
import { CuratedDropsSection } from '../../src/components/home/CuratedDropsSection';
import { BrandStorySection } from '../../src/components/home/BrandStorySection';
import { SocialFeedSection } from '../../src/components/social/SocialFeedSection';
import { BrandFooter } from '../../src/components/common/BrandFooter';
import { NotificationOptInModal } from '../../src/components/notifications/NotificationOptInModal';
import { ProductCard } from '../../src/components/product/ProductCard';
import { CategoryPill } from '../../src/components/product/CategoryPill';
import { LoadingSpinner } from '../../src/components/common/LoadingSpinner';
import { productService } from '../../src/services';
import { Product, Category } from '../../src/types';
import { Colors, BorderRadius, Spacing, Typography } from '../../src/constants/theme';

export default function HomeScreen() {
  const router = useRouter();
  const [categories, setCategories] = useState<Category[]>([]);
  const [newArrivals, setNewArrivals] = useState<Product[]>([]);
  const [bestSellers, setBestSellers] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [showOptIn, setShowOptIn] = useState(false);

  const loadHomeData = async () => {
    try {
      const [c, n, s] = await Promise.all([
        productService.getCategories(),
        productService.getNewArrivals(),
        productService.getBestSellers(),
      ]);
      setCategories(c);
      setNewArrivals(n);
      setBestSellers(s);
    } catch {
      // Handled
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    loadHomeData();
  }, []);

  const onRefresh = () => {
    setRefreshing(true);
    loadHomeData();
  };

  if (loading && !refreshing) {
    return (
      <FullScreenContainer style={styles.safeArea}>
        <Header />
        <LoadingSpinner message="Fetching Gorur Ghash drops..." />
      </FullScreenContainer>
    );
  }

  return (
    <FullScreenContainer style={styles.safeArea}>
      <Header />

      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
      >
        {/* 1. Official Instagram Stories Bar */}
        <StoriesBar />

        {/* 2. Interactive Motion Hero Banner */}
        <HeroMotionBanner />

        {/* 3. Campaign & Guarantee Marquee */}
        <CampaignMarquee />

        {/* 4. Quick Search Shortcut */}
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => router.push('/(tabs)/shop')}
          style={styles.searchBar}
        >
          <Ionicons name="search-outline" size={20} color={Colors.textMuted} style={{ marginRight: Spacing.sm }} />
          <Text style={styles.searchPlaceholder}>Search oversized tees, cargo, corduroy...</Text>
        </TouchableOpacity>

        {/* 5. Categories Horizontal Scroll */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Explore Categories</Text>
          <TouchableOpacity onPress={() => router.push('/(tabs)/shop')}>
            <Text style={styles.seeAllText}>See All</Text>
          </TouchableOpacity>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categoryScroll}
        >
          {categories.map((c) => (
            <CategoryPill
              key={c.id}
              category={c}
              isSelected={false}
              onPress={() => router.push(`/(tabs)/shop?category=${c.slug}`)}
            />
          ))}
        </ScrollView>

        {/* 6. Fresh Drops (Horizontal Scroll) */}
        <View style={styles.sectionHeader}>
          <View>
            <Text style={styles.sectionTitle}>Fresh Drops 🔥</Text>
            <Text style={styles.sectionSubtitle}>Newest streetwear releases crafted in Dhaka</Text>
          </View>
          <TouchableOpacity onPress={() => router.push('/(tabs)/shop')}>
            <Text style={styles.seeAllText}>View All</Text>
          </TouchableOpacity>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.horizontalProductsScroll}
        >
          {newArrivals.slice(0, 6).map((p) => (
            <View key={p.id} style={styles.horizontalCardWrapper}>
              <ProductCard product={p} cardWidth={165} />
            </View>
          ))}
        </ScrollView>

        {/* 7. Curated Streetwear Silhouettes */}
        <CuratedDropsSection />

        {/* 8. Most Wanted / Bestsellers (2-Column Grid) */}
        <View style={styles.sectionHeader}>
          <View>
            <Text style={styles.sectionTitle}>Most Wanted</Text>
            <Text style={styles.sectionSubtitle}>Top rated & community favorites</Text>
          </View>
          <TouchableOpacity onPress={() => router.push('/(tabs)/shop')}>
            <Text style={styles.seeAllText}>View All</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.gridContainer}>
          {bestSellers.slice(0, 6).map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </View>

        {/* 9. Brand Story & Dhaka Streetwear Manifesto */}
        <BrandStorySection />

        {/* 10. Social Media Integration: "Shop The Look" */}
        <SocialFeedSection />

        {/* 11. Official Brand Footer */}
        <BrandFooter />
      </ScrollView>

      {/* Notification Opt-In Modal (Non-intrusive permission journey) */}
      <NotificationOptInModal
        visible={showOptIn}
        onAccept={() => {
          setShowOptIn(false);
          router.push('/notifications');
        }}
        onDismiss={() => setShowOptIn(false)}
      />
    </FullScreenContainer>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.surface,
    marginHorizontal: Spacing.lg,
    marginVertical: Spacing.md,
    paddingHorizontal: Spacing.md,
    paddingVertical: 12,
    borderRadius: BorderRadius.full,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  searchPlaceholder: {
    fontSize: 13,
    color: Colors.textMuted,
    flex: 1,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingHorizontal: Spacing.lg,
    marginTop: Spacing.lg,
    marginBottom: Spacing.sm,
  },
  sectionTitle: {
    ...Typography.heading2,
    color: Colors.textPrimary,
  },
  sectionSubtitle: {
    ...Typography.caption,
    color: Colors.textSecondary,
    marginTop: 2,
  },
  seeAllText: {
    fontSize: 13,
    fontWeight: '700',
    color: Colors.primary,
  },
  categoryScroll: {
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.xs,
    gap: 8,
  },
  horizontalProductsScroll: {
    paddingHorizontal: Spacing.lg,
    gap: 12,
    paddingVertical: Spacing.xs,
  },
  horizontalCardWrapper: {
    width: 165,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: Spacing.lg,
    rowGap: Spacing.md,
  },
});
