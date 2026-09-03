import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Address } from '../../types';
import { Colors, BorderRadius, Spacing, Typography } from '../../constants/theme';

interface AddressCardProps {
  address: Address;
  isSelected?: boolean;
  onSelect?: () => void;
  onChangePress?: () => void;
}

export const AddressCard: React.FC<AddressCardProps> = ({
  address,
  isSelected = false,
  onSelect,
  onChangePress,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onSelect}
      style={[
        styles.container,
        isSelected && styles.containerSelected,
      ]}
    >
      <View style={styles.topRow}>
        <View style={styles.titleBadge}>
          <Ionicons
            name={address.title.toLowerCase() === 'office' ? 'briefcase' : 'home'}
            size={14}
            color={Colors.primary}
          />
          <Text style={styles.titleText}>{address.title}</Text>
          {address.isDefault && (
            <View style={styles.defaultBadge}>
              <Text style={styles.defaultText}>DEFAULT</Text>
            </View>
          )}
        </View>

        {onChangePress && (
          <TouchableOpacity onPress={onChangePress}>
            <Text style={styles.changeText}>Edit</Text>
          </TouchableOpacity>
        )}
      </View>

      <Text style={styles.recipientName}>{address.recipientName}</Text>
      <Text style={styles.phoneText}>📞 {address.phone}</Text>
      <Text style={styles.addressText}>
        {address.streetAddress}, {address.thana ? `${address.thana}, ` : ''}
        {address.district}, {address.division}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.surface,
    padding: Spacing.md,
    borderRadius: BorderRadius.lg,
    borderWidth: 1.5,
    borderColor: Colors.border,
    marginBottom: Spacing.md,
  },
  containerSelected: {
    borderColor: Colors.primary,
    backgroundColor: '#FAFCFE',
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: Spacing.xs,
  },
  titleBadge: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleText: {
    ...Typography.bodyMedium,
    fontWeight: '700',
    color: Colors.primary,
    marginLeft: 4,
  },
  defaultBadge: {
    backgroundColor: Colors.primarySubtle,
    paddingHorizontal: 6,
    paddingVertical: 1,
    borderRadius: 3,
    marginLeft: Spacing.xs,
  },
  defaultText: {
    fontSize: 9,
    fontWeight: '800',
    color: Colors.primaryDark,
  },
  changeText: {
    ...Typography.bodyMedium,
    color: Colors.primary,
    fontWeight: '600',
  },
  recipientName: {
    ...Typography.bodyMedium,
    fontWeight: '700',
    color: Colors.textPrimary,
    marginTop: 2,
  },
  phoneText: {
    ...Typography.caption,
    color: Colors.textSecondary,
    marginVertical: 2,
  },
  addressText: {
    ...Typography.body,
    color: Colors.textSecondary,
    lineHeight: 18,
    marginTop: 2,
  },
});
