import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Image, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Category } from '../../types';
import { Colors, BorderRadius, Spacing, Typography } from '../../constants/theme';

interface CategoryPillProps {
  category: Category;
  isSelected: boolean;
  onPress: () => void;
}

export const CategoryPill: React.FC<CategoryPillProps> = ({
  category,
  isSelected,
  onPress,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={[styles.pill, isSelected ? styles.pillSelected : styles.pillUnselected]}
    >
      {category.imageUrl ? (
        <Image
          source={{ uri: category.imageUrl }}
          style={styles.imageIcon}
          resizeMode="contain"
        />
      ) : (
        <View style={[styles.iconContainer, isSelected && styles.iconContainerSelected]}>
          <Ionicons
            name={isSelected ? 'sparkles' : 'pricetag-outline'}
            size={14}
            color={isSelected ? Colors.textWhite : Colors.primary}
          />
        </View>
      )}
      <Text
        style={[
          styles.title,
          isSelected ? styles.titleSelected : styles.titleUnselected,
        ]}
      >
        {category.name}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  pill: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: Spacing.xs + 2,
    paddingHorizontal: Spacing.md,
    borderRadius: BorderRadius.full,
    marginRight: Spacing.sm,
    borderWidth: 1,
  },
  pillUnselected: {
    backgroundColor: Colors.surface,
    borderColor: Colors.border,
  },
  pillSelected: {
    backgroundColor: Colors.primary,
    borderColor: Colors.primary,
  },
  imageIcon: {
    width: 20,
    height: 20,
    marginRight: Spacing.xs + 2,
  },
  iconContainer: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: Colors.primarySubtle,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: Spacing.xs + 2,
  },
  iconContainerSelected: {
    backgroundColor: 'rgba(255, 255, 255, 0.25)',
  },
  title: {
    ...Typography.bodyMedium,
    fontWeight: '600',
  },
  titleUnselected: {
    color: Colors.textSecondary,
  },
  titleSelected: {
    color: Colors.textWhite,
  },
});
