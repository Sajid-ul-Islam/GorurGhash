import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors, Spacing, Typography, BorderRadius, Shadows } from '../../constants/theme';

export const BrandStorySection: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.badgeRow}>
        <View style={styles.badge}>
          <Text style={styles.badgeText}>DHAKA STREETWEAR CULTURE</Text>
        </View>
      </View>

      <Text style={styles.heading}>Bold Design with a Sense of Humor</Text>
      <Text style={styles.paragraph}>
        Gorur Ghash was born on the bustling streets of Dhaka. We design streetwear that doesn't take itself too seriously, while obsessing over 260+ GSM combed fabrics, custom hardware, and relaxed tailoring built for the tropics.
      </Text>

      <View style={styles.pillarsGrid}>
        <View style={styles.pillarCard}>
          <Ionicons name="shirt" size={24} color="#FBDD01" />
          <Text style={styles.pillarTitle}>Heavyweight Fabric</Text>
          <Text style={styles.pillarDesc}>260 GSM combed cotton that retains structure wash after wash</Text>
        </View>

        <View style={styles.pillarCard}>
          <Ionicons name="finger-print" size={24} color="#FBDD01" />
          <Text style={styles.pillarTitle}>Subversive Art</Text>
          <Text style={styles.pillarDesc}>Hand-drawn cultural illustrations & graphic commentary</Text>
        </View>

        <View style={styles.pillarCard}>
          <Ionicons name="cube" size={24} color="#FBDD01" />
          <Text style={styles.pillarTitle}>On-Spot Trial</Text>
          <Text style={styles.pillarDesc}>Try sizes when the courier arrives before completing delivery</Text>
        </View>

        <View style={styles.pillarCard}>
          <Ionicons name="earth" size={24} color="#FBDD01" />
          <Text style={styles.pillarTitle}>100% Local</Text>
          <Text style={styles.pillarDesc}>Ethically dyed, cut, and stitched right here in Bangladesh</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0F172A',
    padding: Spacing.xl,
    marginVertical: Spacing.xl,
    borderRadius: BorderRadius.xl,
    marginHorizontal: Spacing.md,
  },
  badgeRow: {
    flexDirection: 'row',
    marginBottom: Spacing.sm,
  },
  badge: {
    backgroundColor: '#FBDD01',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: BorderRadius.xs,
  },
  badgeText: {
    fontSize: 9,
    fontWeight: '900',
    color: '#000000',
    letterSpacing: 1,
  },
  heading: {
    ...Typography.heading2,
    color: '#FFFFFF',
    marginBottom: Spacing.sm,
  },
  paragraph: {
    fontSize: 13,
    lineHeight: 20,
    color: '#94A3B8',
    marginBottom: Spacing.xl,
  },
  pillarsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  pillarCard: {
    width: '47%',
    backgroundColor: '#1E293B',
    padding: Spacing.md,
    borderRadius: BorderRadius.lg,
  },
  pillarTitle: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '800',
    marginTop: 8,
    marginBottom: 4,
  },
  pillarDesc: {
    color: '#94A3B8',
    fontSize: 11,
    lineHeight: 15,
  },
});
