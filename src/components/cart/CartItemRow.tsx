import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { CartItem } from '../../types';
import { Colors, BorderRadius, Spacing, Typography } from '../../constants/theme';
import { formatPrice } from '../../utils/formatters';

interface CartItemRowProps {
  item: CartItem;
  onUpdateQuantity: (quantity: number) => void;
  onRemove: () => void;
}

export const CartItemRow: React.FC<CartItemRowProps> = ({
  item,
  onUpdateQuantity,
  onRemove,
}) => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: item.product.images[0] }}
        style={styles.thumbnail}
        resizeMode="cover"
      />

      <View style={styles.detailsContainer}>
        <View style={styles.topRow}>
          <Text style={styles.productName} numberOfLines={2}>
            {item.product.name}
          </Text>
          <TouchableOpacity
            style={styles.removeBtn}
            onPress={onRemove}
            hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
          >
            <Ionicons name="trash-outline" size={18} color={Colors.textMuted} />
          </TouchableOpacity>
        </View>

        <View style={styles.attributeRow}>
          <View style={styles.sizeBadge}>
            <Text style={styles.sizeText}>Size: {item.selectedSize}</Text>
          </View>
        </View>

        <View style={styles.bottomRow}>
          <Text style={styles.price}>{formatPrice(item.unitPrice)}</Text>

          {/* Quantity Stepper */}
          <View style={styles.stepperContainer}>
            <TouchableOpacity
              style={styles.stepBtn}
              onPress={() => onUpdateQuantity(item.quantity - 1)}
              disabled={item.quantity <= 1}
            >
              <Ionicons
                name="remove"
                size={16}
                color={item.quantity <= 1 ? Colors.textMuted : Colors.textPrimary}
              />
            </TouchableOpacity>

            <Text style={styles.quantityText}>{item.quantity}</Text>

            <TouchableOpacity
              style={styles.stepBtn}
              onPress={() => onUpdateQuantity(item.quantity + 1)}
            >
              <Ionicons name="add" size={16} color={Colors.textPrimary} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: Colors.surface,
    padding: Spacing.md,
    borderRadius: BorderRadius.lg,
    borderWidth: 1,
    borderColor: Colors.border,
    marginBottom: Spacing.sm,
  },
  thumbnail: {
    width: 80,
    height: 100,
    borderRadius: BorderRadius.md,
    backgroundColor: Colors.surfaceAlt,
  },
  detailsContainer: {
    flex: 1,
    marginLeft: Spacing.md,
    justifyContent: 'space-between',
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  productName: {
    ...Typography.bodyMedium,
    fontWeight: '600',
    color: Colors.textPrimary,
    flex: 1,
    marginRight: Spacing.xs,
  },
  removeBtn: {
    padding: Spacing.xs,
  },
  attributeRow: {
    flexDirection: 'row',
    marginVertical: 4,
  },
  sizeBadge: {
    backgroundColor: Colors.surfaceAlt,
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: BorderRadius.xs,
  },
  sizeText: {
    ...Typography.caption,
    fontWeight: '700',
    color: Colors.textSecondary,
  },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 4,
  },
  price: {
    ...Typography.heading3,
    color: Colors.textPrimary,
    fontWeight: '700',
  },
  stepperContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.surfaceAlt,
    borderRadius: BorderRadius.sm,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  stepBtn: {
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  quantityText: {
    ...Typography.bodyMedium,
    fontWeight: '700',
    paddingHorizontal: Spacing.sm,
    color: Colors.textPrimary,
  },
});
