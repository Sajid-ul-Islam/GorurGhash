import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Image, Linking, Alert } from 'react-native';
import FullScreenContainer from '../../src/components/FullScreenContainer';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { Header } from '../../src/components/common/Header';
import { Button } from '../../src/components/common/Button';
import { useAuth } from '../../src/context/AuthContext';
import { useOrders } from '../../src/context/OrderContext';
import { AppConfig } from '../../src/constants/config';
import { Colors, BorderRadius, Spacing, Typography, Shadows } from '../../src/constants/theme';
import { formatDate, formatPrice } from '../../src/utils/formatters';

export default function ProfileScreen() {
  const router = useRouter();
  const { user, isAuthenticated, logout } = useAuth();
  const { orders } = useOrders();

  const handleCallSupport = () => {
    Linking.openURL(`tel:${AppConfig.contact.helpline1}`).catch(() => {
      Alert.alert('Contact Support', `Call our helpline at ${AppConfig.contact.helpline1}`);
    });
  };

  const handleWhatsApp = () => {
    const url = `whatsapp://send?phone=${AppConfig.contact.whatsapp.replace('+', '')}&text=Hi Gorur Ghash! I have a question about my order.`;
    Linking.openURL(url).catch(() => {
      Linking.openURL(`https://wa.me/${AppConfig.contact.whatsapp.replace('+', '')}`);
    });
  };

  return (
    <FullScreenContainer style={styles.safeArea}>
      <Header title="Customer Account" subtitle="Profile, Orders & Support" />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* User Card or Guest Onboarding */}
        {isAuthenticated && user ? (
          <View style={styles.userCard}>
            <Image
              source={{
                uri:
                  user.avatarUrl ||
                  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200',
              }}
              style={styles.avatar}
            />
            <View style={styles.userInfo}>
              <View style={styles.nameRow}>
                <Text style={styles.userName}>{user.name}</Text>
                <View style={styles.roleBadge}>
                  <Text style={styles.roleText}>
                    GHASH CLUB MEMBER
                  </Text>
                </View>
              </View>
              <Text style={styles.userPhone}>📱 {user.phone}</Text>
              <Text style={styles.userEmail}>✉️ {user.email}</Text>
            </View>
          </View>
        ) : (
          <View style={styles.guestCard}>
            <View style={styles.guestIconCircle}>
              <Image
                source={require('../../assets/images/gorurghash-cow.png')}
                style={{ width: 44, height: 44 }}
                resizeMode="contain"
              />
            </View>
            <Text style={styles.guestTitle}>Welcome to Gorur Ghash</Text>
            <Text style={styles.guestDesc}>
              Log in with your mobile number to track past orders, save your delivery addresses, and enjoy faster checkout.
            </Text>
            <View style={styles.guestButtonsRow}>
              <Button
                title="Log In with Phone OTP"
                onPress={() => router.push('/auth/login')}
                size="md"
                style={{ flex: 1, marginRight: Spacing.xs }}
              />
            </View>
          </View>
        )}

        {/* Official Brand Social Community */}
        <View style={styles.socialCommunityCard}>
          <View style={styles.communityHeader}>
            <View style={styles.communityBadge}>
              <Ionicons name="sparkles" size={16} color="#000000" />
            </View>
            <View>
              <Text style={styles.communityTitle}>Gorur Ghash Community</Text>
              <Text style={styles.communitySubtitle}>Follow our daily Dhaka streetwear drops & BTS</Text>
            </View>
          </View>

          <View style={styles.communityBtnRow}>
            <TouchableOpacity
              style={[styles.communityBtn, { backgroundColor: '#1877F2' }]}
              onPress={() => Linking.openURL(AppConfig.contact.facebookUrl)}
            >
              <Ionicons name="logo-facebook" size={16} color="#FFFFFF" />
              <Text style={styles.communityBtnText}>Facebook Page</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.communityBtn, { backgroundColor: '#E1306C' }]}
              onPress={() => Linking.openURL(AppConfig.contact.instagramUrl)}
            >
              <Ionicons name="logo-instagram" size={16} color="#FFFFFF" />
              <Text style={styles.communityBtnText}>Instagram @gorurghash</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Notification Preferences Shortcut */}
        <TouchableOpacity
          style={styles.notifPrefCard}
          activeOpacity={0.8}
          onPress={() => router.push('/notifications')}
        >
          <View style={styles.notifPrefIcon}>
            <Ionicons name="notifications-outline" size={20} color={Colors.textPrimary} />
          </View>
          <View style={styles.notifPrefBody}>
            <Text style={styles.notifPrefTitle}>Notification & Offer Preferences</Text>
            <Text style={styles.notifPrefDesc}>Manage drop alerts, order tracking & flash sale alerts</Text>
          </View>
          <Ionicons name="chevron-forward" size={18} color={Colors.textMuted} />
        </TouchableOpacity>

        {/* Recent Orders Section */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>My Orders</Text>
          <Text style={styles.orderCount}>{orders.length} orders</Text>
        </View>

        {orders.length === 0 ? (
          <View style={styles.emptyOrdersCard}>
            <Text style={styles.emptyOrdersText}>No orders placed yet.</Text>
          </View>
        ) : (
          orders.slice(0, 3).map((order) => (
            <TouchableOpacity
              key={order.id}
              style={styles.orderCard}
              activeOpacity={0.85}
              onPress={() => router.push(`/order/${order.id}`)}
            >
              <View style={styles.orderCardHeader}>
                <View>
                  <Text style={styles.orderNumber}>{order.orderNumber}</Text>
                  <Text style={styles.orderDate}>{formatDate(order.createdAt)}</Text>
                </View>
                <View style={styles.orderStatusBadge}>
                  <Text style={styles.orderStatusText}>{order.status.toUpperCase()}</Text>
                </View>
              </View>

              <View style={styles.orderCardBody}>
                <Text style={styles.orderItemsPreview} numberOfLines={1}>
                  {order.items.map((i) => `${i.product.name} (${i.selectedSize})`).join(', ')}
                </Text>
                <View style={styles.orderTotalRow}>
                  <Text style={styles.orderTotalLabel}>Total: {formatPrice(order.total)}</Text>
                  <View style={styles.trackAction}>
                    <Text style={styles.trackActionText}>Track Order</Text>
                    <Ionicons name="chevron-forward" size={14} color={Colors.primary} />
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          ))
        )}

        {/* Features & Assistance */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Assistance & Policies</Text>
        </View>

        {/* AI Style Assistant Feature */}
        <TouchableOpacity
          style={styles.menuItem}
          activeOpacity={0.8}
          onPress={() => router.push('/support/assistant')}
        >
          <View style={[styles.menuIconContainer, { backgroundColor: '#FDF4E2' }]}>
            <Ionicons name="sparkles" size={20} color="#D97706" />
          </View>
          <View style={styles.menuTextContainer}>
            <View style={styles.aiTagRow}>
              <Text style={styles.menuTitle}>GhashBot AI Style Assistant</Text>
              <View style={styles.aiTag}>
                <Text style={styles.aiTagText}>AI</Text>
              </View>
            </View>
            <Text style={styles.menuSubtitle}>
              Ask questions on sizing, styling combinations, or drop recommendations
            </Text>
          </View>
          <Ionicons name="chevron-forward" size={18} color={Colors.textMuted} />
        </TouchableOpacity>

        {/* FAQ & Exchange Policies */}
        <TouchableOpacity
          style={styles.menuItem}
          activeOpacity={0.8}
          onPress={() => router.push('/support/faq')}
        >
          <View style={styles.menuIconContainer}>
            <Ionicons name="help-circle-outline" size={20} color={Colors.primary} />
          </View>
          <View style={styles.menuTextContainer}>
            <Text style={styles.menuTitle}>Trial, Exchange & Shipping FAQ</Text>
            <Text style={styles.menuSubtitle}>
              48-hour exchange window, Dhaka 1-2 day delivery, and return guidelines
            </Text>
          </View>
          <Ionicons name="chevron-forward" size={18} color={Colors.textMuted} />
        </TouchableOpacity>

        {/* Direct Helpline */}
        <TouchableOpacity style={styles.menuItem} activeOpacity={0.8} onPress={handleCallSupport}>
          <View style={[styles.menuIconContainer, { backgroundColor: '#E0F2FE' }]}>
            <Ionicons name="call-outline" size={20} color="#0284C7" />
          </View>
          <View style={styles.menuTextContainer}>
            <Text style={styles.menuTitle}>Call Helpline</Text>
            <Text style={styles.menuSubtitle}>{AppConfig.contact.helpline1} (Sat-Thu 10am-7pm)</Text>
          </View>
          <Ionicons name="chevron-forward" size={18} color={Colors.textMuted} />
        </TouchableOpacity>

        {/* WhatsApp Support */}
        <TouchableOpacity style={styles.menuItem} activeOpacity={0.8} onPress={handleWhatsApp}>
          <View style={[styles.menuIconContainer, { backgroundColor: '#DCFCE7' }]}>
            <Ionicons name="logo-whatsapp" size={20} color="#16A34A" />
          </View>
          <View style={styles.menuTextContainer}>
            <Text style={styles.menuTitle}>Chat on WhatsApp</Text>
            <Text style={styles.menuSubtitle}>Instant customer care with Gorur Ghash team</Text>
          </View>
          <Ionicons name="chevron-forward" size={18} color={Colors.textMuted} />
        </TouchableOpacity>

        {/* Logout Button if authenticated */}
        {isAuthenticated && (
          <Button
            title="Log Out"
            variant="outline"
            onPress={logout}
            style={styles.logoutBtn}
          />
        )}

        <View style={styles.appFooter}>
          <Text style={styles.footerBrand}>GORUR GHASH • গরুর ঘাস</Text>
          <Text style={styles.footerMeta}>
            Version {AppConfig.version} • Trade License: {AppConfig.contact.tradeLicense} • TIN: {AppConfig.contact.tin}
          </Text>
          <Text style={styles.footerAddress}>{AppConfig.contact.mainOffice}</Text>
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
  userCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.surface,
    padding: Spacing.md,
    borderRadius: BorderRadius.lg,
    borderWidth: 1,
    borderColor: Colors.border,
    ...Shadows.sm,
    marginBottom: Spacing.md,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: Colors.surfaceAlt,
  },
  userInfo: {
    marginLeft: Spacing.md,
    flex: 1,
  },
  nameRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  userName: {
    ...Typography.heading2,
    color: Colors.textPrimary,
  },
  roleBadge: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: BorderRadius.xs,
  },
  roleText: {
    fontSize: 9,
    fontWeight: '800',
    letterSpacing: 0.5,
  },
  userPhone: {
    ...Typography.caption,
    color: Colors.textSecondary,
    marginBottom: 2,
  },
  userEmail: {
    ...Typography.caption,
    color: Colors.textMuted,
  },
  guestCard: {
    backgroundColor: Colors.surface,
    padding: Spacing.lg,
    borderRadius: BorderRadius.lg,
    borderWidth: 1,
    borderColor: Colors.border,
    alignItems: 'center',
    marginBottom: Spacing.md,
    ...Shadows.sm,
  },
  guestIconCircle: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#FBDD01',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: Spacing.sm,
  },
  guestTitle: {
    ...Typography.heading2,
    color: Colors.textPrimary,
    marginBottom: 4,
  },
  guestDesc: {
    ...Typography.body,
    textAlign: 'center',
    color: Colors.textSecondary,
    marginBottom: Spacing.md,
    lineHeight: 18,
  },
  guestButtonsRow: {
    flexDirection: 'row',
  },
  socialCommunityCard: {
    backgroundColor: Colors.surface,
    borderRadius: BorderRadius.lg,
    padding: Spacing.md,
    borderWidth: 1,
    borderColor: Colors.border,
    marginBottom: Spacing.md,
    ...Shadows.sm,
  },
  communityHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: Spacing.md,
  },
  communityBadge: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#FBDD01',
    alignItems: 'center',
    justifyContent: 'center',
  },
  communityTitle: {
    fontSize: 14,
    fontWeight: '800',
    color: Colors.textPrimary,
  },
  communitySubtitle: {
    fontSize: 11,
    color: Colors.textSecondary,
  },
  communityBtnRow: {
    flexDirection: 'row',
    gap: 10,
  },
  communityBtn: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    borderRadius: BorderRadius.md,
    gap: 6,
  },
  communityBtnText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '700',
  },
  notifPrefCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.surface,
    borderRadius: BorderRadius.lg,
    padding: Spacing.md,
    borderWidth: 1,
    borderColor: Colors.border,
    marginBottom: Spacing.lg,
    ...Shadows.sm,
  },
  notifPrefIcon: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: Colors.surfaceAlt,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: Spacing.md,
  },
  notifPrefBody: {
    flex: 1,
  },
  notifPrefTitle: {
    fontSize: 13,
    fontWeight: '700',
    color: Colors.textPrimary,
  },
  notifPrefDesc: {
    fontSize: 11,
    color: Colors.textMuted,
    marginTop: 2,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: Spacing.sm,
    marginBottom: Spacing.sm,
  },
  sectionTitle: {
    ...Typography.heading2,
    color: Colors.textPrimary,
  },
  orderCount: {
    ...Typography.caption,
    color: Colors.textMuted,
  },
  emptyOrdersCard: {
    backgroundColor: Colors.surface,
    padding: Spacing.md,
    borderRadius: BorderRadius.md,
    borderWidth: 1,
    borderColor: Colors.border,
    marginBottom: Spacing.md,
    alignItems: 'center',
  },
  emptyOrdersText: {
    ...Typography.caption,
    color: Colors.textMuted,
  },
  orderCard: {
    backgroundColor: Colors.surface,
    borderRadius: BorderRadius.lg,
    borderWidth: 1,
    borderColor: Colors.border,
    padding: Spacing.md,
    marginBottom: Spacing.sm,
    ...Shadows.sm,
  },
  orderCardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    borderBottomWidth: 1,
    borderBottomColor: Colors.borderSubtle,
    paddingBottom: Spacing.xs,
    marginBottom: Spacing.xs,
  },
  orderNumber: {
    ...Typography.bodyMedium,
    fontWeight: '800',
    color: Colors.textPrimary,
  },
  orderDate: {
    ...Typography.caption,
    color: Colors.textMuted,
  },
  orderStatusBadge: {
    backgroundColor: Colors.primarySubtle,
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: BorderRadius.xs,
  },
  orderStatusText: {
    fontSize: 9,
    fontWeight: '800',
    color: Colors.primaryDark,
  },
  orderCardBody: {
    paddingTop: 4,
  },
  orderItemsPreview: {
    ...Typography.caption,
    color: Colors.textSecondary,
    marginBottom: 6,
  },
  orderTotalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  orderTotalLabel: {
    ...Typography.bodyMedium,
    fontWeight: '700',
    color: Colors.textPrimary,
  },
  trackAction: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  trackActionText: {
    ...Typography.caption,
    fontWeight: '700',
    color: Colors.primary,
    marginRight: 2,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.surface,
    padding: Spacing.md,
    borderRadius: BorderRadius.lg,
    borderWidth: 1,
    borderColor: Colors.border,
    marginBottom: Spacing.sm,
  },
  menuIconContainer: {
    width: 38,
    height: 38,
    borderRadius: BorderRadius.md,
    backgroundColor: Colors.primarySubtle,
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuTextContainer: {
    marginLeft: Spacing.md,
    flex: 1,
  },
  aiTagRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  aiTag: {
    backgroundColor: '#D97706',
    paddingHorizontal: 4,
    paddingVertical: 1,
    borderRadius: 3,
    marginLeft: 6,
  },
  aiTagText: {
    color: Colors.textWhite,
    fontSize: 8,
    fontWeight: '900',
  },
  menuTitle: {
    ...Typography.bodyMedium,
    fontWeight: '700',
    color: Colors.textPrimary,
  },
  menuSubtitle: {
    ...Typography.caption,
    color: Colors.textMuted,
    marginTop: 2,
  },
  logoutBtn: {
    marginTop: Spacing.md,
    marginBottom: Spacing.sm,
  },
  appFooter: {
    alignItems: 'center',
    paddingVertical: Spacing.lg,
  },
  footerBrand: {
    ...Typography.caption,
    fontWeight: '800',
    letterSpacing: 1,
    color: Colors.textMuted,
    marginBottom: 2,
  },
  footerMeta: {
    ...Typography.caption,
    color: Colors.textMuted,
    fontSize: 10,
    marginBottom: 2,
  },
  footerAddress: {
    ...Typography.caption,
    color: Colors.textMuted,
    fontSize: 10,
    textAlign: 'center',
  },
});
