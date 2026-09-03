import React from 'react';
import {
  TouchableOpacity,
  Text,
  ActivityIndicator,
  StyleSheet,
  ViewStyle,
  TextStyle,
} from 'react-native';
import { Colors, BorderRadius, Spacing, Typography } from '../../constants/theme';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'danger' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps {
  title: string;
  onPress: () => void;
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  loading?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  style?: ViewStyle;
  textStyle?: TextStyle;
}

export const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  icon,
  iconPosition = 'left',
  style,
  textStyle,
}) => {
  const getContainerStyle = (): ViewStyle => {
    let base: ViewStyle = {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: BorderRadius.md,
      paddingHorizontal: Spacing.lg,
    };

    // Size
    switch (size) {
      case 'sm':
        base.paddingVertical = Spacing.xs + 2;
        base.minHeight = 36;
        break;
      case 'lg':
        base.paddingVertical = Spacing.md + 2;
        base.minHeight = 52;
        break;
      case 'md':
      default:
        base.paddingVertical = Spacing.md;
        base.minHeight = 46;
        break;
    }

    // Variant
    switch (variant) {
      case 'secondary':
        base.backgroundColor = Colors.surfaceAlt;
        break;
      case 'outline':
        base.backgroundColor = 'transparent';
        base.borderWidth = 1.5;
        base.borderColor = Colors.primary;
        break;
      case 'danger':
        base.backgroundColor = Colors.dangerSubtle;
        base.borderWidth = 1;
        base.borderColor = Colors.danger;
        break;
      case 'ghost':
        base.backgroundColor = 'transparent';
        break;
      case 'primary':
      default:
        base.backgroundColor = Colors.primary;
        break;
    }

    if (disabled || loading) {
      base.opacity = 0.55;
    }

    return base;
  };

  const getLabelStyle = (): TextStyle => {
    let color = Colors.textWhite;
    if (variant === 'secondary') color = Colors.textPrimary;
    if (variant === 'outline' || variant === 'ghost') color = Colors.primary;
    if (variant === 'danger') color = Colors.danger;

    const fontStyle = size === 'sm' ? Typography.caption : size === 'lg' ? Typography.heading3 : Typography.bodyMedium;

    return {
      ...fontStyle,
      color,
      fontWeight: '600',
    };
  };

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      disabled={disabled || loading}
      style={[getContainerStyle(), style]}
    >
      {loading ? (
        <ActivityIndicator
          size="small"
          color={variant === 'outline' || variant === 'ghost' ? Colors.primary : Colors.textWhite}
        />
      ) : (
        <>
          {icon && iconPosition === 'left' && <>{icon}</>}
          <Text style={[getLabelStyle(), icon ? { marginHorizontal: Spacing.xs } : null, textStyle]}>
            {title}
          </Text>
          {icon && iconPosition === 'right' && <>{icon}</>}
        </>
      )}
    </TouchableOpacity>
  );
};
