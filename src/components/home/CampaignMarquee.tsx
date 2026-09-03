import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors, Spacing } from '../../constants/theme';

export const CampaignMarquee: React.FC = () => {
  const perks = [
    { icon: 'shield-checkmark', text: 'On-Spot Courier Trial', color: '#000000' },
    { icon: 'repeat', text: '48-Hour Hassle-Free Exchange', color: '#000000' },
    { icon: 'flash', text: 'Same-Day Dispatch in Dhaka', color: '#000000' },
    { icon: 'pricetag', text: "Use Code 'GHASH15' for 15% Off", color: '#000000' },
    { icon: 'ribbon', text: '100% Made in Bangladesh', color: '#000000' },
  ];

  return (
    <View style={styles.marqueeContainer}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {perks.map((p, idx) => (
          <View key={idx} style={styles.perkItem}>
            <Ionicons name={p.icon as any} size={14} color={p.color} />
            <Text style={styles.perkText}>{p.text}</Text>
            {idx < perks.length - 1 && <View style={styles.separator} />}
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  marqueeContainer: {
    backgroundColor: '#FBDD01',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0,0,0,0.08)',
  },
  scrollContent: {
    paddingHorizontal: Spacing.md,
    alignItems: 'center',
    gap: 12,
  },
  perkItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  perkText: {
    fontSize: 12,
    fontWeight: '800',
    color: '#000000',
    letterSpacing: 0.5,
  },
  separator: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: '#000000',
    marginLeft: 10,
  },
});
