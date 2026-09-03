import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import FullScreenContainer from '../../src/components/FullScreenContainer';
import { Ionicons } from '@expo/vector-icons';
import { Header } from '../../src/components/common/Header';
import { Button } from '../../src/components/common/Button';
import { AppConfig } from '../../src/constants/config';
import { Colors, BorderRadius, Spacing, Typography, Shadows } from '../../src/constants/theme';

interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

export default function FaqScreen() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const faqs: FaqItem[] = [
    {
      category: 'Trial & Exchanges',
      question: 'How does the on-spot trial with delivery rider work?',
      answer:
        'Every customer is strongly encouraged to check and try the product before paying the delivery agent. If there are sizing discrepancies, textile defects, or if you change your mind, you can return it on spot directly to the rider with zero hassle.',
    },
    {
      category: 'Trial & Exchanges',
      question: 'What if I find a sizing issue after delivery?',
      answer:
        'If you accepted delivery and notice sizing issues later, please contact Gorur Ghash within 48 hours of delivery. In all exchange cases, we provide alternative products of the same value or equal store credit for future purchases.',
    },
    {
      category: 'Delivery & Shipping',
      question: 'What are your delivery timelines and fees?',
      answer:
        'Inside Dhaka: 1–2 business days (Standard charge ৳70).\nOutside Dhaka: 3–5 business days across all 64 districts (Standard charge ৳130).\nAll orders above ৳3,000 qualify for 100% FREE Nationwide Delivery!\nUrgent/Express deliveries are dispatched via Pathao Parcel (৳150).',
    },
    {
      category: 'Payment Methods',
      question: 'Do you offer Cash on Delivery (COD)?',
      answer:
        'Yes! Cash on Delivery is supported in all 64 districts across Bangladesh. We also accept instant mobile financial payments via bKash and Nagad, as well as Visa and Mastercard via SSLCommerz.',
    },
    {
      category: 'Brand & Sizing',
      question: 'How do Gorur Ghash clothes fit?',
      answer:
        'Gorur Ghash garments are tailored with contemporary Dhaka streetwear cuts—meaning most tops and tees have a relaxed, slightly oversized boxy silhouette. Please check the Size Guide on each product page for chest and length dimensions.',
    },
    {
      category: 'International Shipping',
      question: 'Do you ship to customers travelling or living abroad?',
      answer:
        'Yes! What started in a bedroom in Dhaka is now worn across continents. We ship worldwide (US, UK, Canada, Australia) within 5–7 business days and are actively expanding operations in the United States.',
    },
  ];

  return (
    <FullScreenContainer style={styles.safeArea}>
      <Header showBack title="Help & Policies" subtitle="Trial, exchanges & shipping guidelines" />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Contact Strip */}
        <View style={styles.helplineCard}>
          <Ionicons name="headset" size={28} color={Colors.primary} />
          <View style={styles.helplineText}>
            <Text style={styles.helplineTitle}>Customer Care Helpline</Text>
            <Text style={styles.helplinePhone}>{AppConfig.contact.helpline1} / {AppConfig.contact.helpline2}</Text>
            <Text style={styles.helplineHours}>{AppConfig.contact.supportHours}</Text>
          </View>
        </View>

        <Text style={styles.sectionHeading}>Frequently Asked Questions</Text>

        {faqs.map((faq, idx) => {
          const isExpanded = expandedIndex === idx;
          return (
            <View key={idx} style={styles.faqCard}>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => setExpandedIndex(isExpanded ? null : idx)}
                style={styles.faqHeader}
              >
                <View style={styles.faqTitleContainer}>
                  <Text style={styles.faqCategory}>{faq.category.toUpperCase()}</Text>
                  <Text style={styles.faqQuestion}>{faq.question}</Text>
                </View>
                <Ionicons
                  name={isExpanded ? 'chevron-up' : 'chevron-down'}
                  size={20}
                  color={Colors.primary}
                />
              </TouchableOpacity>

              {isExpanded && (
                <View style={styles.faqBody}>
                  <Text style={styles.faqAnswer}>{faq.answer}</Text>
                </View>
              )}
            </View>
          );
        })}

        {/* Office Locations */}
        <View style={styles.officeCard}>
          <Text style={styles.officeHeading}>Dhaka Headquarters & Offices</Text>
          <View style={styles.officeRow}>
            <Ionicons name="business-outline" size={18} color={Colors.primary} />
            <Text style={styles.officeText}>
              <Text style={{ fontWeight: '700' }}>Uttara Office: </Text>
              {AppConfig.contact.uttaraOffice}
            </Text>
          </View>
          <View style={styles.officeRow}>
            <Ionicons name="storefront-outline" size={18} color={Colors.primary} />
            <Text style={styles.officeText}>
              <Text style={{ fontWeight: '700' }}>Main Office: </Text>
              {AppConfig.contact.mainOffice}
            </Text>
          </View>
        </View>

        <View style={{ height: Spacing.xxl }} />
      </ScrollView>
    </FullScreenContainer>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  scrollContent: {
    paddingHorizontal: Spacing.lg,
    paddingTop: Spacing.md,
    paddingBottom: Spacing.xxxl,
  },
  helplineCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.primarySubtle,
    padding: Spacing.md,
    borderRadius: BorderRadius.lg,
    borderWidth: 1,
    borderColor: '#C3E1F7',
    marginBottom: Spacing.md,
  },
  helplineText: {
    marginLeft: Spacing.md,
    flex: 1,
  },
  helplineTitle: {
    ...Typography.bodyMedium,
    fontWeight: '800',
    color: Colors.primaryDark,
  },
  helplinePhone: {
    ...Typography.heading3,
    color: Colors.primary,
    fontWeight: '800',
    marginVertical: 2,
  },
  helplineHours: {
    ...Typography.caption,
    color: Colors.textSecondary,
  },
  sectionHeading: {
    ...Typography.heading2,
    color: Colors.textPrimary,
    marginBottom: Spacing.sm,
  },
  faqCard: {
    backgroundColor: Colors.surface,
    borderRadius: BorderRadius.lg,
    borderWidth: 1,
    borderColor: Colors.border,
    marginBottom: Spacing.sm,
    overflow: 'hidden',
    ...Shadows.sm,
  },
  faqHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: Spacing.md,
  },
  faqTitleContainer: {
    flex: 1,
    marginRight: Spacing.sm,
  },
  faqCategory: {
    fontSize: 9,
    fontWeight: '800',
    color: Colors.primary,
    marginBottom: 2,
    letterSpacing: 0.5,
  },
  faqQuestion: {
    ...Typography.bodyMedium,
    fontWeight: '700',
    color: Colors.textPrimary,
  },
  faqBody: {
    paddingHorizontal: Spacing.md,
    paddingBottom: Spacing.md,
    borderTopWidth: 1,
    borderTopColor: Colors.borderSubtle,
    paddingTop: Spacing.sm,
  },
  faqAnswer: {
    ...Typography.body,
    color: Colors.textSecondary,
    lineHeight: 20,
  },
  officeCard: {
    backgroundColor: Colors.surface,
    padding: Spacing.md,
    borderRadius: BorderRadius.lg,
    borderWidth: 1,
    borderColor: Colors.border,
    marginTop: Spacing.md,
  },
  officeHeading: {
    ...Typography.heading3,
    color: Colors.textPrimary,
    marginBottom: Spacing.sm,
  },
  officeRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: Spacing.xs + 2,
  },
  officeText: {
    ...Typography.caption,
    color: Colors.textSecondary,
    marginLeft: Spacing.sm,
    flex: 1,
    lineHeight: 16,
  },
});
