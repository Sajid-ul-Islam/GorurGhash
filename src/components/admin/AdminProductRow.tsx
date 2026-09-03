import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Switch, TextInput } from 'react-native';
import { Product } from '../../types';
import { Colors, BorderRadius, Spacing, Typography } from '../../constants/theme';
import { formatPrice } from '../../utils/formatters';

interface AdminProductRowProps {
  product: Product;
  onToggleStock: (inStock: boolean) => void;
  onUpdatePrice: (newPrice: number) => void;
  onPress: () => void;
}

export const AdminProductRow: React.FC<AdminProductRowProps> = ({
  product,
  onToggleStock,
  onUpdatePrice,
  onPress,
}) => {
  const [isEditingPrice, setIsEditingPrice] = useState(false);
  const [priceInput, setPriceInput] = useState(product.price.toString());

  const handleSavePrice = () => {
    const num = parseInt(priceInput, 10);
    if (!isNaN(num) && num > 0) {
      onUpdatePrice(num);
    }
    setIsEditingPrice(false);
  };

  return (
    <View style={styles.card}>
      <TouchableOpacity activeOpacity={0.8} onPress={onPress} style={styles.mainRow}>
        <Image source={{ uri: product.images[0] }} style={styles.thumbnail} resizeMode="cover" />

        <View style={styles.info}>
          <Text style={styles.title} numberOfLines={1}>
            {product.name}
          </Text>
          <Text style={styles.sku}>SKU: {product.sku} • {product.categories[0] || 'Apparel'}</Text>

          {isEditingPrice ? (
            <View style={styles.editPriceRow}>
              <Text style={styles.currencyPrefix}>৳</Text>
              <TextInput
                style={styles.priceInput}
                keyboardType="numeric"
                value={priceInput}
                onChangeText={setPriceInput}
                autoFocus
              />
              <TouchableOpacity style={styles.saveBtn} onPress={handleSavePrice}>
                <Text style={styles.saveBtnText}>Save</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <TouchableOpacity onPress={() => setIsEditingPrice(true)} style={styles.priceContainer}>
              <Text style={styles.price}>{formatPrice(product.price)}</Text>
              <Text style={styles.editPriceHint}>✏️ Tap to edit</Text>
            </TouchableOpacity>
          )}
        </View>
      </TouchableOpacity>

      <View style={styles.stockRow}>
        <View style={styles.stockStatus}>
          <View
            style={[
              styles.statusDot,
              { backgroundColor: product.inStock ? Colors.success : Colors.danger },
            ]}
          />
          <Text style={styles.stockLabel}>
            {product.inStock ? 'In Stock (Active)' : 'Sold Out (Hidden)'}
          </Text>
        </View>

        <Switch
          value={product.inStock}
          onValueChange={onToggleStock}
          trackColor={{ false: Colors.border, true: Colors.primarySubtle }}
          thumbColor={product.inStock ? Colors.primary : Colors.textMuted}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.surface,
    borderRadius: BorderRadius.lg,
    padding: Spacing.md,
    borderWidth: 1,
    borderColor: Colors.border,
    marginBottom: Spacing.sm,
  },
  mainRow: {
    flexDirection: 'row',
  },
  thumbnail: {
    width: 60,
    height: 75,
    borderRadius: BorderRadius.md,
    backgroundColor: Colors.surfaceAlt,
  },
  info: {
    marginLeft: Spacing.md,
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    ...Typography.bodyMedium,
    fontWeight: '700',
    color: Colors.textPrimary,
  },
  sku: {
    ...Typography.caption,
    color: Colors.textMuted,
    marginVertical: 2,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
    marginTop: 2,
  },
  price: {
    ...Typography.heading3,
    color: Colors.primary,
    fontWeight: '800',
  },
  editPriceHint: {
    fontSize: 10,
    color: Colors.textSecondary,
    marginLeft: Spacing.sm,
  },
  editPriceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 2,
  },
  currencyPrefix: {
    ...Typography.bodyMedium,
    fontWeight: '700',
    color: Colors.textPrimary,
    marginRight: 2,
  },
  priceInput: {
    borderWidth: 1,
    borderColor: Colors.primary,
    borderRadius: BorderRadius.xs,
    paddingHorizontal: Spacing.sm,
    paddingVertical: 2,
    width: 80,
    fontSize: 13,
    fontWeight: '700',
    backgroundColor: Colors.surfaceAlt,
  },
  saveBtn: {
    backgroundColor: Colors.primary,
    paddingHorizontal: Spacing.sm,
    paddingVertical: 4,
    borderRadius: BorderRadius.xs,
    marginLeft: Spacing.xs,
  },
  saveBtnText: {
    color: Colors.textWhite,
    fontSize: 11,
    fontWeight: '700',
  },
  stockRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: Spacing.sm,
    paddingTop: Spacing.xs,
    borderTopWidth: 1,
    borderTopColor: Colors.borderSubtle,
  },
  stockStatus: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statusDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: Spacing.xs,
  },
  stockLabel: {
    ...Typography.caption,
    fontWeight: '600',
    color: Colors.textSecondary,
  },
});
