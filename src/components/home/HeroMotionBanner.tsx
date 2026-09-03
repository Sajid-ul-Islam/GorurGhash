import React, { useState, useEffect, useRef } from 'react';
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
import { Colors, BorderRadius, Spacing, Typography, Shadows } from '../../constants/theme';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

interface HeroSlide {
  id: string;
  badge: string;
  badgeColor: string;
  title: string;
  subtitle: string;
  ctaText: string;
  categoryFilter?: string;
  imageUrl: string;
}

const HERO_SLIDES: HeroSlide[] = [
  {
    id: 'hero-1',
    badge: 'NEW FRIDAY DROP',
    badgeColor: '#FBDD01',
    title: 'DHAKA STREETWEAR ARCHIVE',
    subtitle: '260 GSM combed cotton. Subversive graphics, boxy cuts & durable necklines.',
    ctaText: 'Explore New Drops',
    imageUrl: 'https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?w=1080',
  },
  {
    id: 'hero-2',
    badge: 'WINTER ESSENTIALS',
    badgeColor: '#E53935',
    title: 'WIDE-WALE CORDUROY',
    subtitle: 'Tailored overshirts and ribbed chore jackets. Handcrafted for cool Dhaka nights.',
    ctaText: 'Shop Outerwear',
    categoryFilter: 'Jackets',
    imageUrl: 'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=1080',
  },
  {
    id: 'hero-3',
    badge: 'ICONIC RESTOCK',
    badgeColor: '#10B981',
    title: 'UTILITARIAN CARGO LINE',
    subtitle: 'Washed deep-pocket cargo pants built for urban comfort. On-spot courier trial.',
    ctaText: 'View Cargo Trousers',
    categoryFilter: 'Pants',
    imageUrl: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=1080',
  },
];

export const HeroMotionBanner: React.FC = () => {
  const router = useRouter();
  const [activeIndex, setActiveIndex] = useState(0);
  const fadeAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    const timer = setInterval(() => {
      Animated.sequence([
        Animated.timing(fadeAnim, {
          toValue: 0.2,
          duration: 350,
          useNativeDriver: true,
        }),
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 450,
          useNativeDriver: true,
        }),
      ]).start();

      setActiveIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5500);

    return () => clearInterval(timer);
  }, []);

  const currentSlide = HERO_SLIDES[activeIndex];

  const handleCtaPress = () => {
    if (currentSlide.categoryFilter) {
      router.push({
        pathname: '/(tabs)/shop',
        params: { category: currentSlide.categoryFilter },
      });
    } else {
      router.push('/(tabs)/shop');
    }
  };

  return (
    <View style={styles.heroContainer}>
      <Animated.View style={[styles.imageWrapper, { opacity: fadeAnim }]}>
        <Image
          source={{ uri: currentSlide.imageUrl }}
          style={styles.heroImage}
          resizeMode="cover"
        />
        {/* Cinematic gradient overlay */}
        <View style={styles.gradientOverlay} />
      </Animated.View>

      {/* Floating Content Card */}
      <View style={styles.contentOverlay}>
        <View style={styles.topRow}>
          <View style={[styles.badge, { backgroundColor: currentSlide.badgeColor }]}>
            <Text
              style={[
                styles.badgeText,
                { color: currentSlide.badgeColor === '#FBDD01' ? '#000000' : '#FFFFFF' },
              ]}
            >
              {currentSlide.badge}
            </Text>
          </View>

          {/* Slide Indicator Dots */}
          <View style={styles.indicatorRow}>
            {HERO_SLIDES.map((_, idx) => (
              <TouchableOpacity
                key={idx}
                onPress={() => setActiveIndex(idx)}
                style={[
                  styles.dot,
                  idx === activeIndex ? styles.activeDot : styles.inactiveDot,
                ]}
              />
            ))}
          </View>
        </View>

        <Text style={styles.title}>{currentSlide.title}</Text>
        <Text style={styles.subtitle} numberOfLines={2}>
          {currentSlide.subtitle}
        </Text>

        <View style={styles.ctaRow}>
          <TouchableOpacity
            style={styles.primaryCta}
            activeOpacity={0.85}
            onPress={handleCtaPress}
          >
            <Text style={styles.primaryCtaText}>{currentSlide.ctaText}</Text>
            <Ionicons name="arrow-forward" size={16} color="#000000" />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.secondaryCta}
            activeOpacity={0.8}
            onPress={() => router.push('/(tabs)/shop')}
          >
            <Text style={styles.secondaryCtaText}>All Drops</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  heroContainer: {
    height: 380,
    width: '100%',
    position: 'relative',
    backgroundColor: '#000000',
    overflow: 'hidden',
  },
  imageWrapper: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  heroImage: {
    width: '100%',
    height: '100%',
  },
  gradientOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.45)',
  },
  contentOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: Spacing.lg,
    paddingBottom: Spacing.xl,
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: Spacing.sm,
  },
  badge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: BorderRadius.xs,
  },
  badgeText: {
    fontSize: 10,
    fontWeight: '900',
    letterSpacing: 0.8,
  },
  indicatorRow: {
    flexDirection: 'row',
    gap: 6,
  },
  dot: {
    height: 4,
    borderRadius: 2,
  },
  activeDot: {
    width: 20,
    backgroundColor: '#FBDD01',
  },
  inactiveDot: {
    width: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
  },
  title: {
    fontSize: 24,
    fontWeight: '900',
    color: '#FFFFFF',
    letterSpacing: 1.2,
    lineHeight: 28,
    marginBottom: 6,
    textShadowColor: 'rgba(0, 0, 0, 0.8)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 4,
  },
  subtitle: {
    fontSize: 13,
    color: 'rgba(255, 255, 255, 0.9)',
    lineHeight: 18,
    marginBottom: Spacing.md,
    textShadowColor: 'rgba(0, 0, 0, 0.6)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 3,
  },
  ctaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  primaryCta: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FBDD01',
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: BorderRadius.full,
    gap: 8,
    ...Shadows.md,
  },
  primaryCtaText: {
    color: '#000000',
    fontSize: 13,
    fontWeight: '900',
    letterSpacing: 0.5,
  },
  secondaryCta: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.4)',
    paddingHorizontal: 14,
    paddingVertical: 12,
    borderRadius: BorderRadius.full,
  },
  secondaryCtaText: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '700',
  },
});
