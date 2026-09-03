import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Colors, BorderRadius, Spacing, Typography } from '../../constants/theme';

interface SizeSelectorProps {
  sizes: string[];
  selectedSize: string;
  onSelectSize: (size: string) => void;
  onOpenSizeGuide?: () => void;
}

export const SizeSelector: React.FC<SizeSelectorProps> = ({
  sizes,
  selectedSize,
  onSelectSize,
  onOpenSizeGuide,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <Text style={styles.label}>
          Select Size: <Text style={styles.selectedSizeText}>{selectedSize}</Text>
        </Text>
        {onOpenSizeGuide && (
          <TouchableOpacity activeOpacity={0.7} onPress={onOpenSizeGuide}>
            <Text style={styles.sizeGuideLink}>Size Guide (Inches)</Text>
          </TouchableOpacity>
        )}
      </View>

      <View style={styles.sizesRow}>
        {sizes.map((size) => {
          const isSelected = selectedSize === size;
          return (
            <TouchableOpacity
              key={size}
              activeOpacity={0.8}
              onPress={() => onSelectSize(size)}
              style={[
                styles.sizeButton,
                isSelected ? styles.sizeButtonSelected : styles.sizeButtonUnselected,
              ]}
            >
              <Text
                style={[
                  styles.sizeText,
                  isSelected ? styles.sizeTextSelected : styles.sizeTextUnselected,
                ]}
              >
                {size}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: Spacing.md,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: Spacing.sm,
  },
  label: {
    ...Typography.bodyMedium,
    color: Colors.textSecondary,
  },
  selectedSizeText: {
    fontWeight: '700',
    color: Colors.textPrimary,
  },
  sizeGuideLink: {
    ...Typography.bodyMedium,
    color: Colors.primary,
    fontWeight: '600',
    textDecorationLine: 'underline',
  },
  sizesRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.sm,
  },
  sizeButton: {
    minWidth: 52,
    height: 44,
    paddingHorizontal: Spacing.md,
    borderRadius: BorderRadius.md,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1.5,
  },
  sizeButtonUnselected: {
    backgroundColor: Colors.surface,
    borderColor: Colors.border,
  },
  sizeButtonSelected: {
    backgroundColor: Colors.primary,
    borderColor: Colors.primary,
  },
  sizeText: {
    ...Typography.bodyMedium,
    fontWeight: '700',
  },
  sizeTextUnselected: {
    color: Colors.textPrimary,
  },
  sizeTextSelected: {
    color: Colors.textWhite,
  },
});
