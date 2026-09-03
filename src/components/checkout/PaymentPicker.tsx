import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { PaymentMethod } from '../../types';
import { Colors, BorderRadius, Spacing, Typography } from '../../constants/theme';

interface PaymentPickerProps {
  selectedMethod: PaymentMethod;
  onSelectMethod: (method: PaymentMethod) => void;
}

export const PaymentPicker: React.FC<PaymentPickerProps> = ({
  selectedMethod,
  onSelectMethod,
}) => {
  const options: {
    id: PaymentMethod;
    name: string;
    description: string;
    badgeText?: string;
    icon: keyof typeof Ionicons.glyphMap;
    brandColor: string;
  }[] = [
    {
      id: 'bkash',
      name: 'bKash Mobile Payment',
      description: 'Pay instantly via your bKash wallet. Fast & secure.',
      badgeText: 'POPULAR',
      icon: 'phone-portrait-outline',
      brandColor: Colors.bkash,
    },
    {
      id: 'nagad',
      name: 'Nagad Payment',
      description: 'Zero transaction fee with your Nagad account.',
      icon: 'wallet-outline',
      brandColor: Colors.nagad,
    },
    {
      id: 'card',
      name: 'Debit / Credit Card',
      description: 'Visa, Mastercard, American Express via SSLCommerz gateway.',
      icon: 'card-outline',
      brandColor: Colors.cardPay,
    },
    {
      id: 'cod',
      name: 'Cash on Delivery (COD)',
      description: 'Check & try your parcel upon delivery anywhere in Bangladesh.',
      badgeText: 'ALL 64 DISTRICTS',
      icon: 'cash-outline',
      brandColor: Colors.cod,
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Payment Method</Text>

      {options.map((opt) => {
        const isSelected = selectedMethod === opt.id;
        return (
          <TouchableOpacity
            key={opt.id}
            activeOpacity={0.85}
            onPress={() => onSelectMethod(opt.id)}
            style={[
              styles.optionCard,
              isSelected && styles.optionCardSelected,
            ]}
          >
            <View style={styles.leftSection}>
              <View
                style={[
                  styles.iconContainer,
                  { backgroundColor: isSelected ? opt.brandColor : Colors.surfaceAlt },
                ]}
              >
                <Ionicons
                  name={opt.icon}
                  size={20}
                  color={isSelected ? Colors.textWhite : opt.brandColor}
                />
              </View>

              <View style={styles.infoContainer}>
                <View style={styles.nameRow}>
                  <Text style={styles.methodName}>{opt.name}</Text>
                  {opt.badgeText && (
                    <View
                      style={[
                        styles.badge,
                        {
                          backgroundColor:
                            opt.id === 'cod' ? Colors.successSubtle : Colors.primarySubtle,
                        },
                      ]}
                    >
                      <Text
                        style={[
                          styles.badgeText,
                          {
                            color:
                              opt.id === 'cod' ? Colors.success : Colors.primaryDark,
                          },
                        ]}
                      >
                        {opt.badgeText}
                      </Text>
                    </View>
                  )}
                </View>
                <Text style={styles.methodDesc}>{opt.description}</Text>
              </View>
            </View>

            <View style={[styles.radio, isSelected && styles.radioSelected]}>
              {isSelected && <View style={styles.radioInner} />}
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: Spacing.sm,
  },
  title: {
    ...Typography.heading2,
    color: Colors.textPrimary,
    marginBottom: Spacing.sm,
  },
  optionCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: Colors.surface,
    padding: Spacing.md,
    borderRadius: BorderRadius.lg,
    borderWidth: 1.5,
    borderColor: Colors.border,
    marginBottom: Spacing.sm,
  },
  optionCardSelected: {
    borderColor: Colors.primary,
    backgroundColor: '#FAFCFE',
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    marginRight: Spacing.sm,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  infoContainer: {
    marginLeft: Spacing.sm + 2,
    flex: 1,
  },
  nameRow: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: 6,
  },
  methodName: {
    ...Typography.bodyMedium,
    fontWeight: '700',
    color: Colors.textPrimary,
  },
  badge: {
    paddingHorizontal: 6,
    paddingVertical: 1,
    borderRadius: BorderRadius.xs,
  },
  badgeText: {
    fontSize: 9,
    fontWeight: '800',
  },
  methodDesc: {
    ...Typography.caption,
    color: Colors.textSecondary,
    marginTop: 2,
  },
  radio: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: Colors.borderDark,
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioSelected: {
    borderColor: Colors.primary,
  },
  radioInner: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: Colors.primary,
  },
});
