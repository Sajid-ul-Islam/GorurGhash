import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { Colors, Spacing, Typography, BorderRadius, Shadows } from '../../constants/theme';

const { width: SCREEN_WIDTH } = Dimensions.get('window');
const CARD_WIDTH = (SCREEN_WIDTH - Spacing.lg * 2 - Spacing.md) / 2;

interface DropItem {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  tag: string;
  imageUrl: string;
}

const DROPS: DropItem[] = [
  {
    id: 'drop-1',
    title: 'Oversized Tees',
    subtitle: '260 GSM Combed Cotton',
    category: 'T-Shirts',
    tag: 'STREET HERO',
    imageUrl: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=600',
  },
  {
    id: 'drop-2',
    title: 'Corduroy Jackets',
    subtitle: 'Vintage Wale Outerwear',
    category: 'Jackets',
    tag: 'WINTER DROP',
    imageUrl: 'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=600',
  },
  {
    id: 'drop-3',
    title: 'Cargo Trousers',
    subtitle: '6-Pocket Relaxed Cut',
    category: 'Pants',
    tag: 'UTILITARIAN',
    imageUrl: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=600',
  },
  {
    id: 'drop-4',
    title: 'Camp Cuban Shirts',
    subtitle: 'Subversive Resort Prints',
    category: 'Shirts',
    tag: 'BREEZY',
    imageUrl: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=600',
  },
];

export const CuratedDropsSection: React.FC = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.title}>CURATED DROPS</Text>
          <Text style={styles.subtitle}>Explore our signature streetwear silhouettes</Text>
        </View>

        <TouchableOpacity
          onPress={() => router.push('/(tabs)/shop')}
          style={styles.viewAllRow}
        >
          <Text style={styles.viewAllText}>View All</Text>
          <Ionicons name="arrow-forward" size={14} color={Colors.primary} />
        </TouchableOpacity>
      </View>

      <View style={styles.grid}>
        {DROPS.map((drop) => (
          <TouchableOpacity
            key={drop.id}
            style={styles.card}
            activeOpacity={0.88}
            onPress={() =>
              router.push({
                pathname: '/(tabs)/shop',
                params: { category: drop.category },
              })
            }
          >
            <Image source={{ uri: drop.imageUrl }} style={styles.image} />
            <View style={styles.gradientOverlay} />

            <View style={styles.tagBadge}>
              <Text style={styles.tagText}>{drop.tag}</Text>
            </View>

            <View style={styles.cardContent}>
              <Text style={styles.dropTitle}>{drop.title}</Text>
              <Text style={styles.dropSubtitle}>{drop.subtitle}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: Spacing.xl,
    paddingHorizontal: Spacing.lg,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginBottom: Spacing.md,
  },
  title: {
    ...Typography.heading3,
    color: Colors.textPrimary,
    letterSpacing: 1,
    fontWeight: '900',
  },
  subtitle: {
    ...Typography.caption,
    color: Colors.textSecondary,
    marginTop: 2,
  },
  viewAllRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  viewAllText: {
    fontSize: 12,
    fontWeight: '700',
    color: Colors.primary,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.md,
  },
  card: {
    width: CARD_WIDTH,
    height: 210,
    borderRadius: BorderRadius.lg,
    overflow: 'hidden',
    backgroundColor: '#000000',
    position: 'relative',
    ...Shadows.sm,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  gradientOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  tagBadge: {
    position: 'absolute',
    top: 10,
    left: 10,
    backgroundColor: '#FBDD01',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: BorderRadius.xs,
  },
  tagText: {
    fontSize: 9,
    fontWeight: '900',
    color: '#000000',
    letterSpacing: 0.5,
  },
  cardContent: {
    position: 'absolute',
    bottom: 12,
    left: 10,
    right: 10,
  },
  dropTitle: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '800',
    letterSpacing: 0.5,
  },
  dropSubtitle: {
    color: 'rgba(255, 255, 255, 0.85)',
    fontSize: 10,
    marginTop: 2,
  },
});
