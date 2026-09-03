import React from 'react';
import { View, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { Colors, BorderRadius, Spacing, Typography } from '../../constants/theme';

export type BadgeVariant = 'primary' | 'sale' | 'new' | 'stock' | 'warning' | 'neutral';

interface BadgeProps {
  label: string;
  variant?: BadgeVariant;
  style?: ViewStyle;
  textStyle?: TextStyle;
}

export const Badge: React.FC<BadgeProps> = ({
  label,
  variant = 'primary',
  style,
  textStyle,
}) => {
  const getBadgeColors = () => {
    switch (variant) {
      case 'sale':
        return { bg: Colors.brandRed, text: Colors.textWhite };
      case 'new':
        return { bg: Colors.brandYellow, text: Colors.textPrimary };
      case 'stock':
        return { bg: Colors.successSubtle, text: Colors.success };
      case 'warning':
        return { bg: Colors.warningSubtle, text: Colors.warning };
      case 'neutral':
        return { bg: Colors.surfaceAlt, text: Colors.textSecondary };
      case 'primary':
      default:
        return { bg: Colors.primarySubtle, text: Colors.primary };
    }
  };

  const colors = getBadgeColors();

  return (
    <View style={[styles.badge, { backgroundColor: colors.bg }, style]}>
      <Text style={[styles.text, { color: colors.text }, textStyle]}>
        {label}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  badge: {
    paddingHorizontal: Spacing.sm,
    paddingVertical: Spacing.xs - 1,
    borderRadius: BorderRadius.xs,
    alignSelf: 'flex-start',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    ...Typography.badge,
  },
});
