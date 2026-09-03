import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Coupon } from '../../types';
import { mockCoupons } from '../../data/mockProducts';
import { Colors, BorderRadius, Spacing, Typography } from '../../constants/theme';

interface CouponSectionProps {
  appliedCoupon: Coupon | null;
  onApplyCoupon: (code: string) => { success: boolean; message: string };
  onRemoveCoupon: () => void;
}

export const CouponSection: React.FC<CouponSectionProps> = ({
  appliedCoupon,
  onApplyCoupon,
  onRemoveCoupon,
}) => {
  const [code, setCode] = useState('');
  const [feedback, setFeedback] = useState<{ success: boolean; message: string } | null>(null);

  const handleApply = (couponCode: string) => {
    if (!couponCode.trim()) return;
    const res = onApplyCoupon(couponCode);
    setFeedback(res);
    if (res.success) {
      setCode('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Promotions & Coupons</Text>

      {appliedCoupon ? (
        <View style={styles.appliedCard}>
          <View style={styles.appliedLeft}>
            <Ionicons name="checkmark-circle" size={22} color={Colors.success} />
            <View style={styles.appliedTextContainer}>
              <Text style={styles.appliedCode}>{appliedCoupon.code}</Text>
              <Text style={styles.appliedDesc}>{appliedCoupon.description}</Text>
            </View>
          </View>
          <TouchableOpacity
            style={styles.removeCouponBtn}
            onPress={() => {
              onRemoveCoupon();
              setFeedback(null);
            }}
          >
            <Text style={styles.removeCouponText}>Remove</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <>
          <View style={styles.inputRow}>
            <TextInput
              style={styles.input}
              placeholder="Enter promo code (e.g. GHASH20)"
              placeholderTextColor={Colors.textMuted}
              value={code}
              onChangeText={(text) => {
                setCode(text);
                if (feedback) setFeedback(null);
              }}
              autoCapitalize="characters"
            />
            <TouchableOpacity
              style={[styles.applyBtn, !code.trim() && styles.applyBtnDisabled]}
              onPress={() => handleApply(code)}
              disabled={!code.trim()}
            >
              <Text style={styles.applyBtnText}>Apply</Text>
            </TouchableOpacity>
          </View>

          {/* Quick coupon chips */}
          <View style={styles.quickChipsContainer}>
            <Text style={styles.quickLabel}>Tap to try:</Text>
            <View style={styles.chipRow}>
              {mockCoupons.slice(0, 3).map((c) => (
                <TouchableOpacity
                  key={c.code}
                  style={styles.chip}
                  onPress={() => handleApply(c.code)}
                >
                  <Text style={styles.chipText}>{c.code}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </>
      )}

      {feedback && !appliedCoupon && (
        <View
          style={[
            styles.feedbackBanner,
            feedback.success ? styles.feedbackSuccess : styles.feedbackError,
          ]}
        >
          <Ionicons
            name={feedback.success ? 'checkmark-circle' : 'alert-circle'}
            size={16}
            color={feedback.success ? Colors.success : Colors.danger}
          />
          <Text
            style={[
              styles.feedbackText,
              { color: feedback.success ? Colors.success : Colors.danger },
            ]}
          >
            {feedback.message}
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.surface,
    padding: Spacing.md,
    borderRadius: BorderRadius.lg,
    borderWidth: 1,
    borderColor: Colors.border,
    marginVertical: Spacing.sm,
  },
  sectionTitle: {
    ...Typography.heading3,
    color: Colors.textPrimary,
    marginBottom: Spacing.sm,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    height: 44,
    backgroundColor: Colors.surfaceAlt,
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: BorderRadius.md,
    paddingHorizontal: Spacing.md,
    ...Typography.bodyMedium,
    color: Colors.textPrimary,
  },
  applyBtn: {
    backgroundColor: Colors.primary,
    height: 44,
    paddingHorizontal: Spacing.lg,
    borderRadius: BorderRadius.md,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: Spacing.sm,
  },
  applyBtnDisabled: {
    opacity: 0.5,
  },
  applyBtnText: {
    ...Typography.bodyMedium,
    color: Colors.textWhite,
    fontWeight: '700',
  },
  quickChipsContainer: {
    marginTop: Spacing.sm,
  },
  quickLabel: {
    ...Typography.caption,
    color: Colors.textMuted,
    marginBottom: 4,
  },
  chipRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.xs + 2,
  },
  chip: {
    backgroundColor: Colors.primarySubtle,
    paddingHorizontal: Spacing.sm,
    paddingVertical: 4,
    borderRadius: BorderRadius.sm,
    borderWidth: 1,
    borderColor: '#C3E1F7',
  },
  chipText: {
    ...Typography.caption,
    color: Colors.primaryDark,
    fontWeight: '700',
  },
  appliedCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: Colors.successSubtle,
    borderWidth: 1,
    borderColor: '#A7F3D0',
    borderRadius: BorderRadius.md,
    padding: Spacing.md,
  },
  appliedLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  appliedTextContainer: {
    marginLeft: Spacing.sm,
    flex: 1,
  },
  appliedCode: {
    ...Typography.bodyMedium,
    fontWeight: '700',
    color: Colors.textPrimary,
  },
  appliedDesc: {
    ...Typography.caption,
    color: Colors.textSecondary,
  },
  removeCouponBtn: {
    paddingVertical: 4,
    paddingHorizontal: Spacing.sm,
  },
  removeCouponText: {
    ...Typography.caption,
    color: Colors.danger,
    fontWeight: '700',
  },
  feedbackBanner: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: Spacing.sm,
    borderRadius: BorderRadius.sm,
    marginTop: Spacing.sm,
  },
  feedbackSuccess: {
    backgroundColor: Colors.successSubtle,
  },
  feedbackError: {
    backgroundColor: Colors.dangerSubtle,
  },
  feedbackText: {
    ...Typography.caption,
    marginLeft: Spacing.xs,
    flex: 1,
  },
});
